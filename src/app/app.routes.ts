import { Routes } from '@angular/router';
import { ItemsList } from './items-list/items-list';
import { Welcome } from './welcome/welcome';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: Welcome,
    data: { title: 'Welcome' }
  },
  {
    path: 'items',
    component: ItemsList,
    data: { title: 'Subjects' }
  },
];
