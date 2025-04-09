import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessTrackerComponent } from './process-tracker.component';

describe('ProcessTrackerComponent', () => {
  let component: ProcessTrackerComponent;
  let fixture: ComponentFixture<ProcessTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
