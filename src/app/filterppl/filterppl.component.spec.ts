import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterpplComponent } from './filterppl.component';

describe('FilterpplComponent', () => {
  let component: FilterpplComponent;
  let fixture: ComponentFixture<FilterpplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterpplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterpplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
