import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomePipesComponent } from './awesome-pipes.component';

describe('AwesomePipesComponent', () => {
  let component: AwesomePipesComponent;
  let fixture: ComponentFixture<AwesomePipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomePipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
