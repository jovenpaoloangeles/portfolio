import React from 'react';
import { MapPin } from 'lucide-react';
import { ContactInfo } from './ContactInfo';
import { ResearchInterests } from './ResearchInterests';
import { Education } from './Education';

export function Header() {
  return (
    <div className="bg-card rounded-lg shadow-sm p-6">
      <div className="text-center">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-primary overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-serif font-bold text-foreground">Joven Paolo Angeles</h1>
        <p className="text-lg text-muted-foreground mt-1">Materials Science Researcher</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Quezon City, Philippines</span>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        <ContactInfo />
        <ResearchInterests />
        <Education />
      </div>
    </div>
  );
}