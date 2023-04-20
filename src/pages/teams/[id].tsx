import React from 'react';
import { APITeam } from '../../API/Team'
import { EOption, IError, ITeam } from '@/data/types';
import Team from '@/components/Team/Main/Team';
import CustomError from '@/components/Error/Error';
import { useErrorAPI } from '@/hooks';

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

const PageTeam = (result: ITeam | IError) => {
  const check = useErrorAPI(result);
  const page = check
    ? <CustomError />
    : <div className='main__container'>
        <Team team={result as ITeam} />
      </div>

  return page;
};

export default PageTeam;
