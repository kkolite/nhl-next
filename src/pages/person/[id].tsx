import { APIPerson } from "@/API/Player";
import CustomError from "@/components/Error/Error";
import Person from "@/components/Person/Main/Person";
import Passport from "@/components/Person/Passport/Passport";
import { IError, IPerson } from "@/data/types";
import { useErrorAPI } from "@/hooks";

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

const PagePerson = (result: IPerson | IError) => {
  const check = useErrorAPI(result);
  const page = check
    ? <CustomError />
    : <div className='main__container'>
        <Person person={result as IPerson} />
      </div>
  return page;
};

export default PagePerson;