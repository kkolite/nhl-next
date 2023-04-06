import { IFranchise } from '@/data/types';
import React, { FC } from 'react';

interface IProps {
  franchise: IFranchise
}

const Franchise = ({franchise}:IProps) => {
  return (
    <div>
      <p>{franchise.teamName}</p>
      <p>{franchise.locationName}</p>
    </div>
  );
};

export default Franchise;