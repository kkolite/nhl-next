import { EOption, ITeam } from "@/data/types";
import styles from './Team.module.scss';
import Navigation from "../Navigation/Navigation";
import Switch from "../Switch/Switch";
import { useAppDispatch } from "@/store/hook";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { fetchRoster, setRoster } from "@/store/rosterSlice";
import { fetchStats } from "@/store/statsSlice";
import { fetchSchedule } from "@/store/scheduleSlice";
import { THREE_DAYS } from "@/data/consts";
import Image from "next/image";
import location from '../../../../public/icons/location.png';
import website from '../../../../public/icons/world-wide-web.png';
import { LOGOS } from "../../../../public/logos";
import { setOption } from "@/store/teamSettingSlice";

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
        <div>
          <h1>{team.name}</h1>
          <small>{team.conference.name} conference, {team.division.name} division</small>
          <div className={styles.info}>
            <p>Founded: {team.firstYearOfPlay}</p>
            <p>
              <Image 
                src={location}
                alt='location'
                width='18'
                height='18'
                className={styles.icon}
              />
              {team.locationName}
            </p>
            <div>
              <Image 
                src={website}
                alt='website'
                width='18'
                height='18'
                className={styles.icon}
              />
              <a href={team.officialSiteUrl} className={styles.link}>Official site</a>
            </div>
          </div>
        </div>
        <Image 
          src={LOGOS[team.abbreviation]}
          alt="team-logo"
          placeholder="blur"
          className={styles.logo}
        />
      </div>
      <Navigation />
      <Switch />
    </>
  );
};

export default Team;