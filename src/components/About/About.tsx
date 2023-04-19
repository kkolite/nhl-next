import Image from "next/image"
import imageOne from '../../../public/images/about1.png';
import imageTwo from '../../../public/images/about2.png';
import imageThree from '../../../public/images/about3.png';
import styles from './About.module.scss';
import Link from "next/link";
import { useAnimation } from "@/hooks";

const About = () => {
  const animation = useAnimation(200);

  return (
    <>
      <section className={styles.section}>
        <div className={animation ? styles.block : styles.block + ' ' + styles.active__text}> 
          <h4>Franchises, teams, roster, stats - get a lot of info about NHL</h4>
          <Link href={'/teams'}>
            <button className={styles.button}>Explore NHL</button>
          </Link>
        </div>
        <Image 
          src={imageThree}
          alt='hockey'
          placeholder={'blur'}
          className={animation ? styles.image : styles.image + ' ' + styles.active__image}
        />
      </section>
      <section className={styles.section + ' ' + styles.section__second}>
        <Image
          src={imageOne}
          alt='hockey'
          placeholder={'blur'}
          className={animation ? styles.image : styles.image + ' ' + styles.active__image}
        />
        <div className={animation ? styles.block : styles.block + ' ' + styles.active__text}>
          <h4>Power of API</h4>
          <p>This project use <a href="https://gitlab.com/dword4/nhlapi" className={styles.link}>NHLApi</a>.<br/> It provides info about:</p>
          <ul>
            <li>Teams</li>
            <li>Roster</li>
            <li>Schedule</li>
            <li>Stats</li>
            <li>Players</li>
            <li>Etc.</li>
          </ul>
          <a href="https://gitlab.com/dword4/nhlapi">
            <button className={styles.button + ' ' + styles.button__api}>API Docs</button>
          </a>
        </div>
      </section>
      <section className={styles.section + ' ' + styles.section__third}>
        <div className={animation ? styles.block : styles.block + ' ' + styles.active__text}>
          <h4>Stack</h4>
          <ul>
            <li>Next.js</li>
            <li>React</li>
            <li>Redux + RTK</li>
            <li>TypeScript</li>
            <li>SCSS</li>
          </ul>
          <a href="https://github.com/kkolite">
            <button className={styles.button}>Github</button>
          </a>
        </div>
        <Image
          src={imageTwo}
          alt='hockey'
          placeholder={'blur'}
          className={animation ? styles.image : styles.image + ' ' + styles.active__image}
        />
      </section>
    </>
  )
};

export default About;