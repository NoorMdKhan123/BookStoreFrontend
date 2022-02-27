import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallBooksComponent } from './getall-books.component';

describe('GetallBooksComponent', () => {
  let component: GetallBooksComponent;
  let fixture: ComponentFixture<GetallBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
