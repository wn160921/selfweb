import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsaylifeComponent } from './esaylife.component';

describe('EsaylifeComponent', () => {
  let component: EsaylifeComponent;
  let fixture: ComponentFixture<EsaylifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsaylifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsaylifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
