import { Component, OnInit, ViewChild } from '@angular/core';
import { OnboardingTourComponent } from '../onboarding-tour/onboarding-tour.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  showOnboarding = false;
  // handleIndex:number = 3;
  @ViewChild(OnboardingTourComponent) onboardingComponent!: OnboardingTourComponent;
  // backFlag:boolean
  currentPopupIndex:number = 0;
  constructor(private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((params: any) => {
        if (params.backFlag) {
          this.currentPopupIndex = 3
          this.startTour();
        }
      
    });
  }

  startTour(): void {
    this.showOnboarding = true;
  }
  
  finishOnboarding(): void {
    this.showOnboarding = false;
    console.log('Onboarding tour finished');
  }

  skipOnboarding(): void {
    this.showOnboarding = false;
    console.log('Onboarding tour skipped');
  }
}
