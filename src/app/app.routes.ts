import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'todolist', loadComponent: () => import('./todolist/todolist').then((c) => c.Todolist) },
  { path: 'others', loadComponent: () => import('./others/others').then((c) => c.Others) },
  {
    path: 'signals',
    loadComponent: () =>
      import('./signals/signals').then((c) => c.Signals),
  },
  {
    path: 'users/:id/:name',
    loadComponent: () => import('./userdetails/userdetails').then((c) => c.Userdetails),
    outlet: 'userDetails',
  },
  // { path: '**', component: Pagenotfound }, It will check all above path and try to find matched one, if not then display not found page
];
