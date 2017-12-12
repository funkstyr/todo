import Loadable from 'react-loadable';

import Loading from './Loading';

export default [
  {
    title: 'Todo',
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('../Todo'),
      loading: Loading
    })
  },
  {
    component: Loadable({
      loader: () => import('./NoMatch'),
      loading: Loading
    })
  }
];
