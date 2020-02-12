import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeHttpsComponent } from './awesome-https.component';

describe('AwesomeHttpsComponent', () => {
  let component: AwesomeHttpsComponent;
  let fixture: ComponentFixture<AwesomeHttpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeHttpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeHttpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
