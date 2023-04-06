import Link from "next/link";

interface IProps {
  to: string;
  children: string;
}

export const MyLink = ({ to, children }: IProps) => {
  return (
    <Link href={to} className="mylink">
      {children}
    </Link>
  );
};
