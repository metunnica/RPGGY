import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: BlogListComponent
  },
  {
    path: 'manage',
    component: ManageBlogsComponent
  },
  {
    path: ':id',
    component: BlogDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
