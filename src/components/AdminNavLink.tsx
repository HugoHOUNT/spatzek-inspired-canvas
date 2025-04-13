
import React from 'react';
import { Link } from 'react-router-dom';
import { UserCog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const AdminNavLink = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="z-10">
      {isAuthenticated ? (
        <Link to="/admin/projects">
          <Button variant="outline" size="sm" className="flex items-center gap-1 bg-white/10 backdrop-blur-sm border-white/20">
            <UserCog size={16} />
            <span className="hidden md:inline">Admin</span>
          </Button>
        </Link>
      ) : (
        <Link to="/login">
          <Button variant="outline" size="sm" className="flex items-center gap-1 bg-white/10 backdrop-blur-sm border-white/20">
            <UserCog size={16} />
            <span className="hidden md:inline">Login</span>
          </Button>
        </Link>
      )}
    </div>
  );
};

export default AdminNavLink;
