import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonReactiveComponent } from './non-reactive.component';

describe('NonReactiveComponent', () => {
  let component: NonReactiveComponent;
  let fixture: ComponentFixture<NonReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
