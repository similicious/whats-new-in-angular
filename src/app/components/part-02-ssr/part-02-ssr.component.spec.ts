import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part02SsrComponent } from './part-02-ssr.component';

describe('Part02SsrComponent', () => {
  let component: Part02SsrComponent;
  let fixture: ComponentFixture<Part02SsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part02SsrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part02SsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
