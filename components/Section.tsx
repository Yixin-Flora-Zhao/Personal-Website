import React from 'react';

interface SectionProps {
  title?: string;
  icon?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, icon: Icon, children, className = '' }) => {
  return (
    <section className={`mb-12 ${className}`}>
      {title && (
        <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
          {Icon && <Icon className="w-6 h-6 text-blue-600" />}
          <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
        </div>
      )}
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
};

export default Section;