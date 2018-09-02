import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomerComponent } from './homer/homer.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
{
  path: '',
  component: HomerComponent
},
{
 path: 'registration',
 component: RegistrationComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
