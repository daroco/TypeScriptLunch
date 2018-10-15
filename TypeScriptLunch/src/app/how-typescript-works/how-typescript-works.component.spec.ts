import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowTypescriptWorksComponent } from './how-typescript-works.component';

describe('HowTypescriptWorksComponent', () => {
  let component: HowTypescriptWorksComponent;
  let fixture: ComponentFixture<HowTypescriptWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowTypescriptWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowTypescriptWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
