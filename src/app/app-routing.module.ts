import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () =>redirectUnauthorizedTo(['/sign-in']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    //...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule),
    //...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'edit-group/:id/:view',
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
  {
    path: 'contrbution-list/:id',
    loadChildren: () => import('./contrbution-list/contrbution-list.module').then( m => m.ContrbutionListPageModule)
  },
  {
    path: 'contrbution-list-form',
    loadChildren: () => import('./contrbution-list-form/contrbution-list-form.module').then( m => m.ContrbutionListFormPageModule)
  },
  {
    path: 'task/:id',
    loadChildren: () => import('./task/task.module').then( m => m.TaskPageModule)
  },
  {
    path: 'task-details/:id',
    loadChildren: () => import('./task-details/task-details.module').then( m => m.TaskDetailsPageModule)
  },
  {
    path: 'response',
    loadChildren: () => import('./response/response.module').then( m => m.ResponsePageModule)
  },
  {
    path: 'groups-page',
    loadChildren: () => import('./groups-page/groups-page.module').then( m => m.GroupsPagePageModule)
  },
  {
    path: 'calender-modal',
    loadChildren: () => import('./calender-modal/calender-modal.module').then( m => m.CalenderModalPageModule)
  },
  {
    path: 'calender/:id',
    loadChildren: () => import('./calender/calender.module').then( m => m.CalenderPageModule)
  },
  {
    path: 'plan',
    loadChildren: () => import('./plan/plan.module').then( m => m.PlanPageModule)
  },
  {
    path: 'group/:id',
    loadChildren: () => import('./group/group.module').then( m => m.GroupPageModule)
  },
  {
    path: 'plan-form/:id',
    loadChildren: () => import('./plan-form/plan-form.module').then( m => m.PlanFormPageModule)
  },
  {
    path: 'plan-form-next/:id',
    loadChildren: () => import('./plan-form-next/plan-form-next.module').then( m => m.PlanFormNextPageModule)
  },
  {
    path: 'chat/:id',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
