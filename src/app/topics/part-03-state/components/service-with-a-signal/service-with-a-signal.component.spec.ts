import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWithASignalComponent } from './service-with-a-signal.component';

describe('ServiceWithASignalComponent', () => {
  let component: ServiceWithASignalComponent;
  let fixture: ComponentFixture<ServiceWithASignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceWithASignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceWithASignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
