import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'edit-group/:id',
    loadChildren: () => import('./edit-group/edit-group.module').then( m => m.EditGroupPageModule)
  },
  {
    path: 'create-group-form',
    loadChildren: () => import('./create-group-form/create-group-form.module').then( m => m.CreateGroupFormPageModule)
  },
  {
    path: 'create-group-next/:users',
    loadChildren: () => import('./create-group-next/create-group-next.module').then( m => m.CreateGroupNextPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
