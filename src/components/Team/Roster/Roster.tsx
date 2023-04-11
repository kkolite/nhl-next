import { MyLoader } from '@/components/UI/loader';
import { EPosition } from '@/data/types';
import { useAppSelector } from '@/store/hook';
import RosterLine from './RosterLine';

const Roster = () => {
  const roster = useAppSelector(store => store.roster.roster);
  const isLoading = useAppSelector(store => store.roster.isLoading);

  const goalies = roster.filter((el) => el.position.code === EPosition.G);
  const defenders = roster.filter((el) => el.position.code === EPosition.D);
  const forwards = roster.filter((el) => (
    el.position.code === EPosition.L ||
    el.position.code === EPosition.C ||
    el.position.code === EPosition.R
  ));

  const result = isLoading 
    ? <MyLoader />
    : <div>
        <div>
          <h4>Goalies</h4>
          <RosterLine line={goalies} />
        </div>
        <div>
          <h4>Defenders</h4>
          <RosterLine line={defenders} />
        </div>
        <div>
          <h4>Forwards</h4>
          <RosterLine line={forwards} />
        </div>
      </div>

  return result;
};

export default Roster;