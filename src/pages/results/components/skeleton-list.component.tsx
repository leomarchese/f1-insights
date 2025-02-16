import React from 'react';
import Skeleton from '../../../components/skeleton.component';

interface SkeletonListProps {
  count?: number;
}

const SkeletonList: React.FC<SkeletonListProps> = ({ count = 5 }) => {
  return (
    <div className="flex flex-col gap-1 -mx-10 md:mx-0">
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} width="w-auto" height="h-[50px]" className="pb-2" variant="square" />
      ))}
    </div>
  );
};

export default SkeletonList;
