
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';

const projectSchema = z.object({
  title: z.string().min(3, { message: "Le titre doit comporter au moins 3 caractères" }),
  description: z.string().min(10, { message: "La description doit comporter au moins 10 caractères" }),
  category: z.string().min(1, { message: "Veuillez sélectionner une catégorie" }),
  technologies: z.string().min(1, { message: "Veuillez entrer au moins une technologie" }),
  year: z.coerce.number().int().min(2000).max(new Date().getFullYear()),
  involvement: z.string().optional(),
  status: z.string().optional(),
  image: z.string().optional(),
  demoLink: z.string().url().optional().or(z.literal('')),
  sourceLink: z.string().url().optional().or(z.literal('')),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  onComplete?: () => void;
}

const ProjectForm = ({ onComplete }: ProjectFormProps) => {
  const { toast } = useToast();
  const [previewDialogOpen, setPreviewDialogOpen] = useState(false);
  const [previewData, setPreviewData] = useState<ProjectFormValues | null>(null);
  
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: '',
      description: '',
      category: '',
      technologies: '',
      year: new Date().getFullYear(),
      involvement: 'Projet solo',
      status: 'En cours',
      image: '/placeholder.svg',
      demoLink: '',
      sourceLink: '',
    },
  });
  
  const handlePreview = () => {
    const data = form.getValues();
    setPreviewData(data);
    setPreviewDialogOpen(true);
  };
  
  const onSubmit = (data: ProjectFormValues) => {
    // Formater les technologies en tableau
    const formattedData = {
      ...data,
      technologies: data.technologies.split(',').map(tech => tech.trim()),
      links: {
        demo: data.demoLink || undefined,
        source: data.sourceLink || undefined,
      }
    };
    
    console.log('Nouveau projet:', formattedData);
    
    // Simuler l'ajout à la base de données
    toast({
      title: "Projet ajouté",
      description: "Le projet a été ajouté avec succès (simulation).",
    });
    
    form.reset();
    
    if (onComplete) {
      onComplete();
    }
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Ajouter un nouveau projet</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titre du projet</FormLabel>
                <FormControl>
                  <Input placeholder="Portfolio personnel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Une description détaillée du projet" 
                    className="min-h-[100px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Catégorie</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une catégorie" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Site web">Site web</SelectItem>
                      <SelectItem value="Application mobile">Application mobile</SelectItem>
                      <SelectItem value="Automatisation">Automatisation</SelectItem>
                      <SelectItem value="Design">Design</SelectItem>
                      <SelectItem value="Data">Data</SelectItem>
                      <SelectItem value="Big Data & IA">Big Data & IA</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Année</FormLabel>
                  <FormControl>
                    <Input type="number" min="2000" max={new Date().getFullYear()} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="technologies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Technologies (séparées par des virgules)</FormLabel>
                <FormControl>
                  <Input placeholder="React, TypeScript, Tailwind" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="involvement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Implication</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner votre implication" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Projet solo">Projet solo</SelectItem>
                      <SelectItem value="Travail d'équipe">Travail d'équipe</SelectItem>
                      <SelectItem value="Contributeur secondaire">Contributeur secondaire</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Statut</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner le statut" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="En cours">En cours</SelectItem>
                      <SelectItem value="Terminé">Terminé</SelectItem>
                      <SelectItem value="Prototype">Prototype</SelectItem>
                      <SelectItem value="MVP">MVP</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL de l'image</FormLabel>
                <FormControl>
                  <Input placeholder="/placeholder.svg" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="demoLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lien de démonstration</FormLabel>
                  <FormControl>
                    <Input placeholder="https://demo.example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="sourceLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lien du code source</FormLabel>
                  <FormControl>
                    <Input placeholder="https://github.com/username/repo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={handlePreview}>
              Prévisualiser
            </Button>
            <Button type="reset" variant="outline" onClick={() => form.reset()}>
              Réinitialiser
            </Button>
            <Button type="submit">
              Ajouter le projet
            </Button>
          </div>
        </form>
      </Form>
      
      <Dialog open={previewDialogOpen} onOpenChange={setPreviewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Prévisualisation du projet</DialogTitle>
            <DialogDescription>
              Voici à quoi ressemblera votre projet
            </DialogDescription>
          </DialogHeader>
          
          {previewData && (
            <div className="space-y-4 py-4">
              <div>
                <h3 className="text-lg font-bold">{previewData.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span>{previewData.category}</span>
                  <span>•</span>
                  <span>{previewData.year}</span>
                </div>
              </div>
              
              <div>
                <p className="text-sm">{previewData.description}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-1">Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  {previewData.technologies.split(',').map((tech, i) => (
                    <span key={i} className="bg-gray-100 dark:bg-gray-800 text-xs px-2 py-1 rounded">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Implication:</span> {previewData.involvement}
                </div>
                <div>
                  <span className="font-semibold">Statut:</span> {previewData.status}
                </div>
                {previewData.demoLink && (
                  <div>
                    <span className="font-semibold">Démo:</span>{' '}
                    <a href={previewData.demoLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                      Lien de démonstration
                    </a>
                  </div>
                )}
                {previewData.sourceLink && (
                  <div>
                    <span className="font-semibold">Source:</span>{' '}
                    <a href={previewData.sourceLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                      Code source
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setPreviewDialogOpen(false)}>
              Fermer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectForm;
