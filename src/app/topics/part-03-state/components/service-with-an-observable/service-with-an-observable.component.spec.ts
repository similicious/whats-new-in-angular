import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWithAnObservableComponent } from './service-with-an-observable.component';

describe('ServiceWithAnObservableComponent', () => {
  let component: ServiceWithAnObservableComponent;
  let fixture: ComponentFixture<ServiceWithAnObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceWithAnObservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceWithAnObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
