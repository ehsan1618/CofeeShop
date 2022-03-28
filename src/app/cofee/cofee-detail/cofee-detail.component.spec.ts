import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofeeDetailComponent } from './cofee-detail.component';

describe('CofeeDetailComponent', () => {
  let component: CofeeDetailComponent;
  let fixture: ComponentFixture<CofeeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofeeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CofeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
