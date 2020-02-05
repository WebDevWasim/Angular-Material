import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwriterFormComponent } from './underwriter-form.component';

describe('UnderwriterFormComponent', () => {
  let component: UnderwriterFormComponent;
  let fixture: ComponentFixture<UnderwriterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderwriterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderwriterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
