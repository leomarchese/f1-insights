import { MenuItem, ResultsRoutes, RoutesUrls } from '../routes/routes.type';

export default [
  {
    label: 'Latest',
    link: RoutesUrls.HOME,
    submenu: [
      { label: 'Latest', link: '#' },
      { label: 'What is F1?', link: '#' },
      { label: 'What is F1 TV?', link: '#' },
      { label: 'Get involved', link: '#' },
    ],
  },
  { label: 'Video', link: '/video' },
  { label: 'F1 Unlocked', link: '/f1-unlocked' },
  {
    label: 'Schedule',
    link: '/schedule',
    submenu: [
      { label: 'Schedule 1', link: '#' },
      { label: 'Schedule 2', link: '#' },
    ],
  },
  {
    label: 'Results',
    link: ResultsRoutes.races('2024'),
    submenu: [
      { label: 'Races', link: ResultsRoutes.races('2024') },
      { label: 'Drivers', link: ResultsRoutes.drivers('2024') },
      { label: 'Constructor Standings', link: ResultsRoutes.teams('2024') },
    ],
  },
  {
    label: 'Drivers',
    link: '/drivers',
    submenu: [
      { label: 'Drivers 1', link: '#' },
      { label: 'Drivers 2', link: '#' },
    ],
  },
  {
    label: 'Teams',
    link: '/teams',
    submenu: [
      { label: 'Teams 1', link: '#' },
      { label: 'Teams 2', link: '#' },
    ],
  },
  {
    label: 'Gaming',
    link: '/gaming',
    submenu: [
      { label: 'Gaming 1', link: '#' },
      { label: 'Gaming 2', link: '#' },
    ],
  },
  { label: 'Live Timing', link: '/live-timing' },
] as MenuItem[];
