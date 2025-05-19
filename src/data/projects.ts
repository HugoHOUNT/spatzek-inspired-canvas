import { Project } from '@/types/project';

// Imports pour le projet Scolarité
//texte pour pouvoir push
import scol1 from '@/assets/images/Scolarite/Scol1.PNG';
import scol2 from '@/assets/images/Scolarite/Scol2.PNG';
import scol3 from '@/assets/images/Scolarite/Scol3.PNG';
import scol4 from '@/assets/images/Scolarite/Scol4.PNG';
import scol5 from '@/assets/images/Scolarite/Scol5.PNG';
import scol6 from '@/assets/images/Scolarite/Scol6.PNG';
import scol7 from '@/assets/images/Scolarite/Scol7.PNG';
import scol8 from '@/assets/images/Scolarite/Scol8.PNG';
import scol9 from '@/assets/images/Scolarite/Scol9.PNG';

// Imports pour le projet Admissions
import adm1 from '@/assets/images/Admissions/Admissions1.PNG';
import adm2 from '@/assets/images/Admissions/Admissions2.PNG';
import adm3 from '@/assets/images/Admissions/Admissions3.PNG';
import adm4 from '@/assets/images/Admissions/Admissions4.PNG';
import adm5 from '@/assets/images/Admissions/Admissions5.PNG';

// Imports pour les autres projets...
import effectif1 from '@/assets/images/EffectifApprenants/EffectifApprenant1.PNG';
import effectif2 from '@/assets/images/EffectifApprenants/EffectifApprenant2.PNG';
import effectif3 from '@/assets/images/EffectifApprenants/EffectifApprenant3.PNG';
import effectif4 from '@/assets/images/EffectifApprenants/EffectifApprenant4.PNG';
import effectif5 from '@/assets/images/EffectifApprenants/EffectifApprenant5.PNG';
import effectif6 from '@/assets/images/EffectifApprenants/EffectifApprenant6.PNG';
import effectif7 from '@/assets/images/EffectifApprenants/EffectifApprenant7.PNG';

// Marge
import marge1 from '@/assets/images/Marge/Marge1.PNG';
import marge2 from '@/assets/images/Marge/Marge2.PNG';
import marge3 from '@/assets/images/Marge/Marge3.PNG';
import marge4 from '@/assets/images/Marge/Marge4.PNG';

// Satisfaction Client
import satisfaction1 from '@/assets/images/SatisfactionClient/Satisfaction1.PNG';
import satisfaction2 from '@/assets/images/SatisfactionClient/Satisfaction2.PNG';
import satisfaction3 from '@/assets/images/SatisfactionClient/Satisfaction3.PNG';
import satisfaction4 from '@/assets/images/SatisfactionClient/Satisfaction4.PNG';
import satisfaction5 from '@/assets/images/SatisfactionClient/Satisfaction5.PNG';
import satisfaction6 from '@/assets/images/SatisfactionClient/Satisfaction6.PNG';

// Fréquentation Hotelière
import hotel1 from '@/assets/images/FrequentationHoteliere/FrequentationHoteliere1.png';
import hotel2 from '@/assets/images/FrequentationHoteliere/FrequentationHoteliere2.png';
import hotel3 from '@/assets/images/FrequentationHoteliere/FrequentationHoteliere3.png';
import hotel4 from '@/assets/images/FrequentationHoteliere/FrequentationHoteliere4.png';


export const projectsData: Project[] = [
  {
    id: 1,
    title: "Power BI de la Scolarité",
    description: "Afin de mieux piloter les parcours de certification et de diplomation, j'ai développé un outil de visualisation de données sous Power BI, intégrant l'ensemble des indicateurs clés des jurys. Ce projet m'a permis de transformer des données brutes en un levier stratégique d'aide à la décision.",
    category: "Data Visualisation",
    technologies: ["Power BI", "DAX", "Power Query (ETL)", "Excel"],
    year: 2023,
    involvement: "Projet solo",
    status: "Terminé",
    image: scol1,
    details: {
      context: "Dans le cadre des parcours de certification et de diplomation proposés par IFG Executive Education, la gestion des candidatures constitue un processus complexe et structurant. Elle implique plusieurs étapes clés telles que la vérification de la conformité des dossiers, la validation par des jurys successifs, ainsi que le suivi administratif de chaque candidat. Face à la diversité des programmes, à l'augmentation des flux de candidatures et à la multiplicité des étapes, la gestion manuelle de ces processus devenait de plus en plus difficile. Cette dispersion des données entravait non seulement la lisibilité des parcours, mais ralentissait aussi la prise de décision.",
      objective: "Afin de répondre à ces enjeux, j'ai conçu et développé un tableau de bord interactif sous Power BI. L'objectif était de centraliser l'ensemble des données relatives aux jurys de certification et de diplomation, de les rendre intelligibles visuellement et de les transformer en un véritable outil d'aide à la décision pour la direction pédagogique et les équipes opérationnelles. Le Power BI permet ainsi de : \n -Suivre l'état d'avancement des candidatures, \n -Identifier les dossiers non conformes, \n -Mesurer les délais de traitement et les performances des jurys \n -Visualiser les abandons, reports, certifications et taux de réussite par programme, /Anticiper les besoins d'accompagnement et planifier efficacement les prochaines sessions.",
      impact: "Ce tableau de bord est rapidement devenu un levier stratégique pour l'organisation : \n -Il renforce la transparence des processus de certification, \n -Il améliore la réactivité des équipes et l'efficacité opérationnelle, \n -Il permet d'anticiper les risques d'abandon et d'échec, en facilitant l'identification des points de blocage, \n -Il valorise l'expérience des apprenants en assurant un meilleur suivi qualitatif des parcours, \n -Il soutient la réflexion stratégique sur l'évolution des programmes et des flux de candidats. Il contribue directement à la valorisation de l'expérience apprenant et à la réputation de l'établissement sur le marché de la formation professionnelle.",
      moreImages: [scol1, scol2, scol3, scol4, scol5, scol6, scol7, scol8, scol9]
    }
  },
  {
    id: 2,
    title: "Tableau de bord des Admissions",
    description: "Afin d'optimiser la gestion du processus d'admission, j'ai conçu un tableau de bord Power BI centralisant les indicateurs clés de suivi des candidatures. Ce projet m'a permis de transformer des données opérationnelles en un outil d'aide à la décision, facilitant le pilotage des performances et l'amélioration continue de l'expérience candidat.",
    category: "Business Intelligence / Data Visualisation / Pilotage des processus",
    technologies: ["Power BI Desktop", "Power Query (ETL)", "DAX", "Sharepoint", "Excel"],
    year: 2024,
    involvement: "Travail d'équipe",
    status: "Terminé",
    image: adm1,
    details: {
      context: "Dans le cadre de ses activités de formation professionnelle, l'établissement reçoit un flux important de candidatures pour ses différents programmes. Chaque parcours implique plusieurs étapes de validation – vérification de la conformité, passage en jury, décision finale. Cette complexité, accentuée par la diversité des profils, nécessitait un outil fiable et flexible pour suivre en temps réel l'avancement des dossiers et optimiser les ressources.",
      objective: "Le but de ce projet était de :\n\n- Centraliser toutes les données du processus d'admission\n- Optimiser les délais de traitement des dossiers\n- Améliorer l'expérience des candidats en assurant un meilleur suivi\n- Offrir aux équipes un outil d'analyse opérationnelle et stratégique pour piloter les performances d'admission",
      impact: "Ce tableau de bord a eu un impact significatif :\n\n- Vision globale et instantanée de l'état d'avancement des candidatures\n- Identification rapide des goulots d'étranglement (ex : délais dans les jurys)\n- Pilotage individualisé par consultant, programme ou période\n- Amélioration de la réactivité et coordination des équipes\n- Contribution directe à l'atteinte des objectifs d'admission et à la satisfaction des apprenants\n- Renforcement de la transparence et appui à la prise de décision managériale",
      moreImages: [adm1, adm2, adm3, adm4, adm5]
    }
  },
  {
    id: 3,
    title: "Tableau de bord des sessions et de la planification",
    description: "Afin de garantir le pilotage opérationnel des sessions de formation, j'ai développé un tableau de bord Power BI centralisant l'ensemble des indicateurs de suivi. Ce projet m'a permis de transformer des données opérationnelles complexes en un outil stratégique, facilitant le pilotage des performances et la prise de décision en temps réel.",
    category: "Business Intelligence",
    technologies: ["Power BI Desktop", "Power Query (ETL)", "DAX", "Excel", "Sharepoint"],
    year: 2025,
    involvement: "Travail d'équipe",
    status: "En cours",
    image: "/assets/images/SessionsPlanif/Admissions1.png",
    details: {
      context: "L'organisation gère un portefeuille large et diversifié de sessions de formation, réparties sur plusieurs sites administratifs, thématiques et catégories de programmes. Cette diversité rendait complexe le suivi en temps réel de la planification, de l'exécution et de la performance des sessions. Il devenait nécessaire de centraliser ces données dans un outil unique et interactif afin d'améliorer la coordination et d'aligner les efforts avec les objectifs pédagogiques et stratégiques.",
      objective: "L'objectif principal était de :\n\n- Centraliser les données liées à la création, au suivi et à l'exécution des sessions de formation\n- Permettre une comparaison directe entre les objectifs fixés et les réalisations\n- Optimiser la gestion des ressources humaines (intervenants, prestataires) et logistiques\n- Fournir une interface claire pour appuyer les décisions opérationnelles et stratégiques",
      impact: "Ce tableau de bord a eu un impact notable :\n\n- Vision consolidée et en temps réel de toutes les sessions, par site, programme ou période\n- Suivi détaillé des objectifs atteints et des écarts observés\n- Amélioration de l'allocation des ressources (formateurs, intervenants)\n- Meilleure anticipation des besoins logistiques et humains\n- Réduction des écarts entre planification et exécution\n- Renforcement de la coordination interservices et amélioration de la réactivité globale",
      moreImages: [
        "/assets/images/SessionsPlanif/Admissions1.PNG",
        "/assets/images/SessionsPlanif/Admissions2.PNG",
        "/assets/images/SessionsPlanif/Admissions3.PNG",
        "/assets/images/SessionsPlanif/Admissions4.PNG",
        "/assets/images/SessionsPlanif/Admissions5.PNG",
        "/assets/images/SessionsPlanif/Admissions6.PNG",
        "/assets/images/SessionsPlanif/Admissions7.PNG",
        "/assets/images/SessionsPlanif/Admissions8.PNG",
        "/assets/images/SessionsPlanif/Admissions9.PNG",
        "/assets/images/SessionsPlanif/Admissions10.PNG"
      ]
    }
  },
  {
    id: 4,
    title: "Power BI – Amélioration Continue",
    description: "Afin de structurer et de dynamiser la gestion des actions d'amélioration continue, j'ai conçu un tableau de bord sous Power BI, centralisant l'ensemble des indicateurs clés pour transformer les données brutes en un véritable outil de pilotage de la qualité.",
    category: "Pilotage des processus",
    technologies: ["Power BI Desktop", "Power Query (ETL)", "DAX", "Sharepoint"],
    year: 2024,
    involvement: "Travail d'équipe",
    status: "Terminé",
    image: "/assets/images/AmeliorationContinue/AmeliorationContinue1.png",
    details: {
      context: "Dans une dynamique de qualité et d'amélioration continue, il est essentiel pour une organisation de suivre efficacement ses actions correctives, préventives et d'amélioration. Les exigences des normes de certification, ainsi que les attentes accrues des parties prenantes internes et externes, imposent une rigueur dans la gestion de ces processus. Face à la dispersion des informations dans différents outils et formats, le besoin d'une solution centralisée de pilotage est devenu évident.",
      objective: "L'objectif de ce projet est double :\n\n1. Piloter efficacement la performance qualité en garantissant un suivi précis des actions d'amélioration.\n2. Faciliter la communication transversale entre les équipes, en rendant l'information accessible et compréhensible de tous.\n\nCela contribue à renforcer la culture d'amélioration continue au sein de l'organisation.",
      impact: "Ce tableau de bord a permis :\n\n- Une centralisation de toutes les actions d'amélioration (correctives, préventives, satisfaction...)\n- Une meilleure traçabilité des actions et de leurs responsables\n- Un suivi visuel et intuitif de l'état d'avancement, par origine ou type de demande\n- Une priorisation claire des actions à traiter\n- Une réactivité accrue des équipes qualité et opérationnelles\n- Une meilleure préparation aux audits qualité grâce à une traçabilité rigoureuse",
      moreImages: [
        "/assets/images/AmeliorationContinue/AmeliorationContinue1.png",
        "/assets/images/AmeliorationContinue/AmeliorationContinue2.png",
        "/assets/images/AmeliorationContinue/AmeliorationContinue3.png",
        "/assets/images/AmeliorationContinue/AmeliorationContinue4.png",
        "/assets/images/AmeliorationContinue/AmeliorationContinue5.png",
        "/assets/images/AmeliorationContinue/AmeliorationContinue6.png",
        "/assets/images/AmeliorationContinue/AmeliorationContinue7.png"
      ]
    }
  },
  {
    id: 5,
    title: "Power BI – Effectifs Apprenants",
    description: "Ce tableau de bord a été conçu pour assurer un suivi précis de l'évolution des effectifs par programme, par période et par statut, afin d'optimiser la planification pédagogique et les projections RH.",
    category: "Data Visualisation",
    technologies: ["Power BI Desktop", "Power Query (ETL)", "DAX"],
    year: 2024,
    involvement: "Travail d'équipe",
    status: "Terminé",
    image: effectif1,
    details: {
      context: "Le suivi des effectifs est un enjeu central pour garantir un bon dimensionnement des ressources pédagogiques. Jusqu'alors dispersées dans plusieurs fichiers, les données nécessitaient d'être consolidées dans un outil unique.",
      objective: "Permettre :\n- Une analyse dynamique des volumes d'apprenants\n- Une projection à moyen terme des flux d'inscription\n- Une vision par programme, statut, promo et mois",
      impact: "- Amélioration de la prévision RH et logistique\n- Visualisation claire des tendances d'inscriptions\n- Aide à la planification stratégique des formations",
      moreImages: [effectif1, effectif2, effectif3, effectif4, effectif5, effectif6, effectif7]
    }
  },
  {
    id: 6,
    title: "Power BI – Suivi de la Marge",
    description: "Dans un environnement où chaque euro investi compte, la compréhension et le pilotage précis des marges devient un levier stratégique incontournable pour garantir la rentabilité des actions menées.",
    category: "Business Intelligence",
    technologies: ["Power BI Desktop", "DAX", "Excel", "Power Query (ETL)"],
    year: 2024,
    involvement: "Travail d'équipe",
    status: "Terminé",
    image: marge1,
    details: {
      context: "Le suivi économique des formations était jusque-là morcelé entre plusieurs outils. Il devenait indispensable de disposer d'un tableau de bord consolidé pour analyser les marges générées par programme et session.",
      objective: "Mesurer précisément :\n- La marge brute par session\n- Les postes de dépense les plus lourds\n- Le ratio inscription/coût\n- L'évolution des marges par année et programme",
      impact: "- Vision stratégique de la rentabilité\n- Optimisation des coûts\n- Pilotage précis des ressources engagées\n- Appui aux décisions d'investissement ou de repositionnement",
      moreImages: [marge1, marge2, marge3, marge4]
    }
  },
  {
    id: 7,
    title: "Power BI – Suivi de la Satisfaction Client",
    description: "Ce tableau de bord permet de centraliser et d'analyser les retours des apprenants, en visualisant la satisfaction globale, les NPS, les verbatims et les tendances par session ou programme.",
    category: "Data Visualisation",
    technologies: ["Power BI Desktop", "DAX", "Excel", "Power Query (ETL)"],
    year: 2024,
    involvement: "Travail d'équipe",
    status: "Terminé",
    image: satisfaction1,
    details: {
      context: "L'entreprise souhaitait unifier les données issues des enquêtes de satisfaction post-formation afin de suivre les retours des apprenants et identifier les points forts et axes d'amélioration.",
      objective: "Créer un tableau de bord permettant de :\n- Suivre la satisfaction client sur plusieurs axes\n- Mesurer l'évolution des indicateurs dans le temps\n- Identifier les modules les mieux perçus ou critiques",
      impact: "- Approche proactive d'amélioration continue\n- Vision claire des ressentis apprenants\n- Réactivité accrue des équipes pédagogiques\n- Valorisation des retours lors d'audits ou de présentations internes",
      moreImages: [satisfaction1, satisfaction2, satisfaction3, satisfaction4, satisfaction5, satisfaction6]
    }
  },
  {
    id: 8,
    title: "Power BI – Fréquentation Hôtelière et Touristique",
    description: "Ce tableau de bord permet de visualiser en un clin d'œil qui vient, quand, pourquoi et où, pour aider à piloter intelligemment le tourisme et l'hôtellerie.",
    category: "Data Visualisation",
    technologies: ["Power BI Desktop", "Power Query (ETL)", "DAX"],
    year: 2025,
    involvement: "Travail d'équipe",
    status: "Terminé",
    image: hotel1,
    details: {
      context: "Dans un contexte de relance touristique post-COVID, il était essentiel de mieux comprendre les flux de voyageurs, leurs profils, motivations et zones d'accueil afin d'adapter les politiques territoriales.",
      objective: "Permettre aux acteurs publics et privés de :\n- Suivre la fréquentation par période, zone et typologie\n- Identifier les clientèles à forte valeur\n- Anticiper les besoins en hébergement et services",
      impact: "- Vision stratégique du tourisme en Polynésie\n- Soutien aux décisions d'investissement\n- Analyse des tendances émergentes (écotourisme, croisières de luxe…)\n- Renforcement de l'attractivité du territoire",
      moreImages: [hotel1, hotel2, hotel3, hotel4]
    }
  },
];
