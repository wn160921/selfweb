import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTeachComponent } from './class-teach.component';

describe('ClassTeachComponent', () => {
  let component: ClassTeachComponent;
  let fixture: ComponentFixture<ClassTeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassTeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
