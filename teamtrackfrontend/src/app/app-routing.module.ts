import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { TaskViewComponent } from './task-view/task-view.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'projects', component: ProjectViewComponent },
  { path: 'projectsDetail', component: TaskViewComponent },
  { path: '', component: ProjectViewComponent, pathMatch: 'full' }, // to display as first element only for work
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
