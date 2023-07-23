import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigaterPageComponent } from './navigater-page.component';

describe('NavigaterPageComponent', () => {
  let component: NavigaterPageComponent;
  let fixture: ComponentFixture<NavigaterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigaterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigaterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
