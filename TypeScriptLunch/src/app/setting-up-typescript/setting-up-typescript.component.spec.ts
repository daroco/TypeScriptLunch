import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingUpTypescriptComponent } from './setting-up-typescript.component';

describe('SettingUpTypescriptComponent', () => {
  let component: SettingUpTypescriptComponent;
  let fixture: ComponentFixture<SettingUpTypescriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingUpTypescriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingUpTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
