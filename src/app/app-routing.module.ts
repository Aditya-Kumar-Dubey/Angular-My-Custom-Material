import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { DescriptionComponent } from './pages/description/description.component';
import { NavigaterPageComponent } from './pages/navigater-page/navigater-page.component';
import { ChartComponent } from './new/chart/chart.component';
import { FormComponent } from './Forms/form/form.component';

const routes: Routes = [
  { path: '', component: NavigaterPageComponent },
  { path: 'intro', component: IntroductionComponent },
  { path: 'description', component: DescriptionComponent},
  { path: 'chart', component: ChartComponent},
  { path: 'form', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
