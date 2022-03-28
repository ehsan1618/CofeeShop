import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CofeeDetailComponent } from './cofee/cofee-detail/cofee-detail.component';
import { CofeeListComponent } from './cofee/cofee-list/cofee-list.component';

const routes: Routes = [
  { path: '', component: CofeeListComponent},
  //{ path: '**', redirectTo: 'cofee-list/cofee-list', pathMatch: 'full'},
  //{ path: 'cofee/CofeeDetail/:id', component: CofeeDetailComponent },
  { path: 'cofee-detail/:id/CofeeDetail', component: CofeeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
