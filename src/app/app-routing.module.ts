import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { JobListingsComponent } from './job-listings/job-listings.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  },
  
  {
    path: "job-listings",
    component: JobListingsComponent
  },


  {
    path: "applied-jobs",
    component: AppliedJobsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
