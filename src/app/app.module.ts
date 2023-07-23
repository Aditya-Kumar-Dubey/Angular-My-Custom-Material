import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingTourComponent } from './pages/onboarding-tour/onboarding-tour.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { DescriptionComponent } from './pages/description/description.component';
import { BackdropComponent } from './pages/backdrop/backdrop.component';
import { ChartComponent } from './new/chart/chart.component';
import { NavigaterPageComponent } from './pages/navigater-page/navigater-page.component';
import { FormComponent } from './Forms/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OnboardingTourComponent,
    IntroductionComponent,
    DescriptionComponent,
    BackdropComponent,
    ChartComponent,
    NavigaterPageComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
