import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwriterTabComponent } from './underwriter-tab.component';

describe('UnderwriterTabComponent', () => {
  let component: UnderwriterTabComponent;
  let fixture: ComponentFixture<UnderwriterTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderwriterTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderwriterTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
