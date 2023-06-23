import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCommentFormComponent } from './add-comment-form/add-comment-form.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AdminProjectVeiewComponent } from './admin-project-veiew/admin-project-veiew.component';
import { AssignTaskFormComponent } from './assign-task-form/assign-task-form.component';
import { CommonHomeComponent } from './common-home/common-home.component';
import { CreateProjectFormComponent } from './create-project-form/create-project-form.component';
import { DeleteProjectFormComponent } from './delete-project-form/delete-project-form.component';
import { HomeComponent } from './Adminhome/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchTaskFormComponent } from './search-task-form/search-task-form.component';
import { UpdateProjectFormComponent } from './update-project-form/update-project-form.component';
import { UpdateTaskStatusFormComponent } from './update-task-status-form/update-task-status-form.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ViewAssignedTasksComponent } from './view-assigned-tasks/view-assigned-tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

const routes: Routes = [
  { path:'', component: CommonHomeComponent },
  { path: 'add-comment', component: AddCommentFormComponent },
  { path: 'assign-task', component: AssignTaskFormComponent },
  { path: 'create-project', component: CreateProjectFormComponent },
  { path: 'delete-task', component:DeleteProjectFormComponent },
  { path: 'search-task', component:SearchTaskFormComponent },
  { path: 'update-project', component: UpdateProjectFormComponent },
  { path: 'updete-task-status', component: UpdateTaskStatusFormComponent },
  { path: 'view-assigned-task', component: ViewAssignedTasksComponent },
  {path:'profile',component:ProfileComponent},
  {path:'home',component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'addTask',component:AddTaskComponent},
  {path:'adminView',component:AdminProjectVeiewComponent},
  {path:'commonHome',component:CommonHomeComponent},
  {path:'userHome',component:UserHomeComponent},
  {path:'updatestatus',component:UpdateTaskStatusFormComponent},
  {path:'viewTasks',component:ViewAssignedTasksComponent},
  {path:'taskDetails',component:TaskDetailsComponent}
  
  // Add other routes
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
