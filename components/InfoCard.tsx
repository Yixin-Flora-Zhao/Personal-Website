import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface InfoCardProps {
  title: string;
  subtitle: string;
  location?: string;
  period: string;
  points: string[];
  link?: string;
  tags?: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({ title, subtitle, location, period, points, link, tags }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            {title}
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </h3>
          <p className="text-blue-700 font-medium text-base">{subtitle}</p>
        </div>
        <div className="flex flex-col md:items-end mt-2 md:mt-0 text-sm text-slate-500 space-y-1">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{period}</span>
          </div>
          {location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          )}
        </div>
      </div>
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
             <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-full border border-slate-200">
               {tag}
             </span>
          ))}
        </div>
      )}

      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2.5 text-slate-700 leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 min-w-[6px] rounded-full bg-blue-400" />
            <span dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;