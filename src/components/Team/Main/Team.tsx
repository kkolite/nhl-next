import { ITeam } from "@/data/types";
import styles from './Team.module.scss';
import Navigation from "../Navigation/Navigation";
import Switch from "../Switch/Switch";
import { useAppDispatch } from "@/store/hook";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { fetchRoster } from "@/store/rosterSlice";

interface IProps {
  team: ITeam;
}

const Team = ({team}:IProps) => {
  const dispatch = useAppDispatch();
  const {query} = useRouter();

  useEffect(() => {
    if (!query.id) return;
    dispatch(fetchRoster(+query.id))
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