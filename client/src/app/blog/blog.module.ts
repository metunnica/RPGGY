import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [BlogListComponent, BlogDetailComponent, ManageBlogsComponent]
})
export class BlogModule { }
