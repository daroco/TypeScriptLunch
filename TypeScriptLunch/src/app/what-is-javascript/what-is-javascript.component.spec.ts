import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsJavascriptComponent } from './what-is-javascript.component';

describe('WhatIsJavascriptComponent', () => {
  let component: WhatIsJavascriptComponent;
  let fixture: ComponentFixture<WhatIsJavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsJavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
