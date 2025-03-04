import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deferred03Component } from './deferred-03.component';

describe('Deferred03Component', () => {
  let component: Deferred03Component;
  let fixture: ComponentFixture<Deferred03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deferred03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deferred03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
