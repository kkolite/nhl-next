import React from 'react';
import { APITeam } from '../../API/Team'
import { EOption, ITeam } from '@/data/types';
import Team from '@/components/Team/Main/Team';

interface IParams {
  params: {
    id: string
  }
}

export async function getServerSideProps({params}:IParams) {
  const index = +params.id;
  const result = await APITeam(index, EOption.ROSTER);
  return { props: result}
}

const PageTeam = (result: ITeam) => {
  return (
    <div className='main__container'>
      <Team team={result} />
    </div>
  );
};

export default PageTeam;