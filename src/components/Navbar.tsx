import { useRouter } from 'next/router';
import { TEXT } from '../data/text';
import { MyLink } from './UI';

export const Navbar = () => {
  const location = useRouter();
  return (
    <div className="navbar">
      <p>
        {TEXT.PAGES.CURRENT} {location.pathname.slice(1)}
      </p>
      <MyLink to="/about">{TEXT.PAGES.ABOUT}</MyLink>
      <MyLink to="/cards">{TEXT.PAGES.CARDS}</MyLink>
      <MyLink to="/form">{TEXT.PAGES.FORM}</MyLink>
    </div>
  );
};
