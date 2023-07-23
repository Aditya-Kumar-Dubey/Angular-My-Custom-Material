import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  showOnboarding = false;
  currentPopupIndex: number = 4;
  isFirstClick!: boolean;
  
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any) => {
      // this.currentPopupIndex = +params['currentPopupIndex'] || 4;
      // this.isFirstClick = params['isFirstClick'];
      // console.log(this.currentPopupIndex , this.isFirstClick);  
      if (params.startTourStatus == 'true' ) {
        this.startTour();
      }    
    });
  }

  startTour(): void {
    if (this.currentPopupIndex === 4) {
      this.currentPopupIndex = 4;
      this.showOnboarding = true;
      console.log('Starting onboarding tour from the 5th position...');
    } else {
      console.log('No onboarding tour to start.');
    }
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
