import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchTracksComponent } from './branch-tracks.component';

describe('BranchTracksComponent', () => {
  let component: BranchTracksComponent;
  let fixture: ComponentFixture<BranchTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchTracksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
