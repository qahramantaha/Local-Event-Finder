import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'germany',
    loadComponent: () => import('./germany/germany.page').then( m => m.GermanyPage)
  },
  {
    path: 'portugal',
    loadComponent: () => import('./portugal/portugal.page').then( m => m.PortugalPage)
  },
  {
    path: 'austria',
    loadComponent: () => import('./austria/austria.page').then( m => m.AustriaPage)
  },
  {
    path: 'wishlist',
    loadComponent: () => import('./wishlist/wishlist.page').then( m => m.WishlistPage)
  },
];
