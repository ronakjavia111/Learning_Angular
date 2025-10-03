import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'todolist',
    loadComponent: () => import('./todolist/todolist.js').then((c) => c.Todolist),
  },
  { path: 'others', loadComponent: () => import('./others/others.js').then((c) => c.Others) },
  {
    path: 'signals',
    loadComponent: () => import('./signals/signals.js').then((c) => c.Signals),
  },
  {
    path: 'users/:id/:name',
    loadComponent: () => import('./userdetails/userdetails.js').then((c) => c.Userdetails),
    outlet: 'userDetails',
  },
  {
    path: 'formcontrol',
    loadComponent: () => import('./formcontrol/formcontrol.js').then((c) => c.Formcontrol),
  },
  // { path: '**', component: Pagenotfound }, It will check all above path and try to find matched one, if not then display not found page
];
