import { ITeam } from "@/data/types";
import styles from './Team.module.scss';
import Navigation from "../Navigation/Navigation";
import Switch from "../Switch/Switch";
import { useAppDispatch } from "@/store/hook";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { fetchRoster } from "@/store/rosterSlice";
import { fetchStats } from "@/store/statsSlice";
import { fetchSchedule } from "@/store/scheduleSlice";
import { THREE_DAYS } from "@/data/consts";

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

    dispatch(fetchRoster(ID));
    dispatch(fetchStats(ID));
    dispatch(fetchSchedule({ID, start, end}));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>{team.name}</h1>
          <small>{team.conference.name} conference, {team.division.name} division</small>
          <p>Founded: {team.firstYearOfPlay}</p>
          <p>Location: {team.locationName}</p>
          <p>Official site: {team.officialSiteUrl}</p>
        </div>
        <div>img placeholder</div>
      </div>
      <Navigation />
      <Switch />
    </>
  );
};

export default Team;