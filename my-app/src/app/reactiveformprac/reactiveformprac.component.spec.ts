import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformpracComponent } from './reactiveformprac.component';

describe('ReactiveformpracComponent', () => {
  let component: ReactiveformpracComponent;
  let fixture: ComponentFixture<ReactiveformpracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveformpracComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformpracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
