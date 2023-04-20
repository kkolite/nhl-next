import { EOption, ITeam } from "@/data/types";
import { useAppDispatch } from "@/store/hook";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { setRoster, fetchSchedule, fetchStats, setOption } from "@/store/slices/";
import { THREE_DAYS } from "@/data/consts";
import { LOGOS } from "../../../../public/logos";
import Navigation from "../Navigation/Navigation";
import Switch from "../Switch/Switch";
import Logo from "../Logo/Logo";
import Info from "../Info/Info";
import styles from './Team.module.scss';

interface IProps {
  team: ITeam;
}

const Team = ({team}:IProps) => {
  const dispatch = useAppDispatch();
  const {query} = useRouter();

  useEffect(() => {
    const ID = Number(query.id);
    if (typeof ID !== 'number') return;

    const date = new Date().getTime();
    const start = new Date(date - THREE_DAYS).toISOString().slice(0, 10);
    const end = new Date(date + THREE_DAYS).toISOString().slice(0, 10);

    dispatch(setOption(EOption.ROSTER))
    dispatch(setRoster(team));
    dispatch(fetchStats(ID));
    dispatch(fetchSchedule({ID, start, end}));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Info team={team} />
        <Logo src={LOGOS[team.abbreviation]} />
      </div>
      <Navigation />
      <Switch />
    </>
  );
};

export default Team;