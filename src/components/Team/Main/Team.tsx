import { ITeam } from "@/data/types";
import styles from './Team.module.scss';
import Navigation from "../Navigation/Navigation";

interface IProps {
  team: ITeam;
}

const Team = ({team}:IProps) => {
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
    </>
  );
};

export default Team;