import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSsrComponent } from './no-ssr.component';

describe('NoSsrComponent', () => {
  let component: NoSsrComponent;
  let fixture: ComponentFixture<NoSsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoSsrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoSsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
