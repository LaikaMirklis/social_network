import {
  faEnvelope,
  faGear,
  faHouse,
  faMagnifyingGlass,
  faMusic,
  faNewspaper,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import LogOutBtn from './NavbarItems/LogOutBtn';

export const pageList = [
  {
    title: 'profile',
    icon: faHouse,
    isExist: true,
    authOnly: true,
  },
  {
    title: 'dialogs',
    icon: faEnvelope,
    isExist: true,
    authOnly: true,
  },
  {
    title: 'news',
    icon: faNewspaper,
    isExist: false,
    authOnly: false,
  },
  {
    title: 'music',
    icon: faMusic,
    isExist: false,
    authOnly: false,
  },
  {
    title: 'users',
    icon: faMagnifyingGlass,
    isExist: true,
    authOnly: false,
  },
  {
    title: 'settings',
    icon: faGear,
    isExist: false,
    authOnly: true,
  },
  {
    title: 'logOut',
    Component: LogOutBtn,
    icon: faRightFromBracket,
    isExist: true,
    authOnly: true,
  },
];

export const loginPage = {
  title: 'login',
  icon: faRightFromBracket,
  isExist: true,
};
