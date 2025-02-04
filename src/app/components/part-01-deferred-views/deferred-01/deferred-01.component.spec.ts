import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deferred01Component } from './deferred-01.component';

describe('Deferred01Component', () => {
  let component: Deferred01Component;
  let fixture: ComponentFixture<Deferred01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deferred01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deferred01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
