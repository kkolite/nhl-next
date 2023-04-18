import { APIPerson } from "@/API/Player";
import Person from "@/components/Person/Main/Person";
import Passport from "@/components/Person/Passport/Passport";
import { IPerson } from "@/data/types";

interface IParams {
  params: {
    id: string
  }
}

export async function getServerSideProps({params}:IParams) {
  const index = +params.id;
  const result = await APIPerson(index);
  return { props: result};
}

const PagePerson = (result: IPerson) => {
  return (
    <div className='main__container'>
      <Person person={result} />
    </div>
  );
};

export default PagePerson;