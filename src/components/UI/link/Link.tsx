import Link from "next/link";
import styles from './Link.module.scss';

interface IProps {
  to: string;
  children: string;
}

export const MyLink = ({ to, children }: IProps) => {
  return (
    <Link href={to} className={styles.link}>
      {children}
    </Link>
  );
};
