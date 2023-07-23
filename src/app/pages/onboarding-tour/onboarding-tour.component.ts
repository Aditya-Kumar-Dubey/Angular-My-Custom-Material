import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

interface Popup {
  id: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-onboarding-tour',
  templateUrl: './onboarding-tour.component.html',
  styleUrls: ['./onboarding-tour.component.scss']
})
export class OnboardingTourComponent implements OnInit {

  @Input() showOnboarding: boolean | undefined;
  @Output() finish = new EventEmitter<void>();
  @Output() skip = new EventEmitter<void>();

  popups: Popup[] = [];
  @Input() handleIndex: number = 0;
  @Input() nextPage: string = ""
  @Input() previousPage: string = ""
  @Input() currentPopupIndex: number = 0;
  @Input() numberOfStep: number = 0;
  @Input() isFirstClick: boolean = true;
  currentTargetId: string | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.populatePopups();
    this.startTour();
  }

  populatePopups(): void {
    this.popups.push(
      { id: 'openJobButton', title: 'Popup 1', content: 'Content for Popup 1' },
      { id: 'homeButton', title: 'Popup 2', content: 'Content for Popup 2' },
      { id: 'source', title: 'Popup 3', content: 'Content for Popup 3' },
      { id: 'martcom', title: 'Popup 4', content: 'Content for Popup 4' },
      { id: 'five', title: 'five 5', content: 'Content for five 5' },
      { id: 'six', title: 'six 6', content: 'Content for six 6' },
      { id: 'seven', title: 'seven 7', content: 'Content for seven 7' },
    );
  }

  startTour(): void {
    console.log('start tour');
    console.log(this.currentPopupIndex);

    this.isFirstClick = false;
    this.currentTargetId = this.popups[this.currentPopupIndex].id;
  }



  getPopupPosition(): any {
    console.log('currentPopupIndex', this.currentPopupIndex);
    if (this.currentTargetId) {
      console.log('currentTargetId', this.currentTargetId);
      const element = document.getElementById(this.currentTargetId);
      if (this.currentPopupIndex > 0) {
        const previousId = document.getElementById(this.popups[this.currentPopupIndex - 1].id);
        console.log('previousId', previousId);
        
        if(previousId) {
          previousId.style.zIndex = '0'
        }
      }
      console.log(element);

      if (element) {
        const elementRect = element.getBoundingClientRect();
        const top = elementRect.top + elementRect.height + 10 + 'px';
        const left = elementRect.left + 'px';
        element.style.zIndex = '9'
      
        return { top, left };
      }
    }

    return {};
  }


  nextPopup(): void {
    // alert('next')
    if (this.currentPopupIndex < this.popups.length - 1) {
      this.currentPopupIndex++;
      this.currentTargetId = this.popups[this.currentPopupIndex].id;
      console.log('currentPopupIndex', this.currentPopupIndex);
      if (this.currentPopupIndex >= this.handleIndex) {
        // this.currentPopupIndex = 4
        this.router.navigate(['/' + this.nextPage], {
          queryParams: { startTourStatus: 'true' }
        });
      }

    }
  }
  previousPopup(): void {
    // alert('previous')
    if (this.currentPopupIndex > 0) {
      this.currentPopupIndex = this.currentPopupIndex - 1;
      this.currentTargetId = this.popups[this.currentPopupIndex].id;
      console.log('currentPopupIndex', this.currentPopupIndex);
      // this.getPopupPosition()

      if (this.currentPopupIndex < this.handleIndex - this.numberOfStep) {
        // this.currentPopupIndex = 4
        this.router.navigate(['/' + this.previousPage], {
          queryParams: { backFlag: true }
        });
      }

    }
  }


  isFirstPopup(): boolean {
    return this.currentPopupIndex === 0;
  }

  isLastPopup(): boolean {
    return this.currentPopupIndex === this.popups.length - 1;
  }

  finishOnboarding(): void {
    this.finish.emit();
  }

  skipOnboarding(): void {
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?startTourStatus=false';
    window.history.pushState({ path: newurl }, '', newurl);
    this.skip.emit();
  }

}
