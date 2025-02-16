import React from 'react';
import { Link } from 'react-router-dom';
import { IconChevronDown } from '../../../components/icons';
import Skeleton from '../../../components/skeleton.component';

interface FilterGroupDetailsProps {
  title: string;
  links: { label?: string; to?: string }[];
  containerClasses?: string;
  isLoading?: boolean;
}

const FilterGroupDetails: React.FC<FilterGroupDetailsProps> = ({ title, links, isLoading = false, containerClasses = '' }) => {
  if (isLoading) {
    return <Skeleton width="w-full" height="h-[120px]" variant="box" />;
  }

  return (
    <details open className={`group bg-white ${containerClasses}`}>
      <summary className="md:hidden cursor-pointer font-normal p-5 border-b border-gray-300 list-none flex justify-between items-center">
        <span>{title}</span>
        <IconChevronDown className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div>
        <ul className="p-5 max-h-[7.5em] overflow-y-auto flex flex-col gap-1 max-md:bg-f1-offWhite">
          {links.map((link, i) => (
            <li key={i} className="min-h-8">
              <Link to={link.to} className="block hover:bg-gray-100 rounded-md transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
};

export default FilterGroupDetails;
