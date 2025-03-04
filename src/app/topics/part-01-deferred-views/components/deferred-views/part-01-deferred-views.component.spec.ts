import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part01DeferredViewsComponent } from './part-01-deferred-views.component';

describe('Part01DeferredViewsComponent', () => {
  let component: Part01DeferredViewsComponent;
  let fixture: ComponentFixture<Part01DeferredViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part01DeferredViewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part01DeferredViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
