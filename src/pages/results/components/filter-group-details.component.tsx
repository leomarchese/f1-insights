import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconChevronDown } from '../../../components/icons';
import { usePathParts } from '../../../hooks/usePathParts';
import { isFilterActive } from '../utils/common.utils';
import Skeleton from '../../../components/skeleton.component';

interface FilterGroupDetailsProps {
  title: string;
  links: { label: string; to: string }[];
  groupType: 'season' | 'categories' | 'additional';
  containerClasses?: string;
  isLoading?: boolean;
}

const FilterGroupDetails: React.FC<FilterGroupDetailsProps> = ({ title, links, groupType, isLoading = false, containerClasses = '' }) => {
  const currentParts = usePathParts();

  if (isLoading) {
    return <Skeleton width="w-full" height="h-[120px]" />;
  }

  return (
    <details open className={`group bg-white ${containerClasses}`}>
      <summary className="md:hidden cursor-pointer font-normal p-5 border-b border-gray-300 list-none flex justify-between items-center [&::-webkit-details-marker]:hidden">
        <span>{title}</span>
        <IconChevronDown className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div>
        <ul className="p-5 max-h-[7.5em] overflow-y-auto flex flex-col gap-1 max-md:bg-f1-offWhite">
          {links.map((link, i) => (
            <li key={i} className={`min-h-8 ${isFilterActive(link.to, groupType, currentParts) ? 'font-bold underline underline-offset-4' : ''}`}>
              <NavLink to={link.to} end className="block p-2">
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
};

export default FilterGroupDetails;
