import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deferred02Component } from './deferred-02.component';

describe('Deferred02Component', () => {
  let component: Deferred02Component;
  let fixture: ComponentFixture<Deferred02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deferred02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deferred02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
