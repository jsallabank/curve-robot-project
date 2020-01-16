import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  let horizontalTestDirections = ["SOUTH","","","","NORTH"]
  
  it('should detect top and bottom edge', () => {
    for(let j = 0;j<5;j=j+4){
    for(let i = 0; i<5;i++){
    component.currentDir = horizontalTestDirections[j];
    component.currentX = i;
    component.currentY = j;
    component.inputValue = "MOVE";
    expect(component.checker()).toBe(false);
    }}
  });

  let verticalTestDirections = ["WEST","","","","EAST"]
  it('should detect left and right edge', () => {
    for(let j = 0;j<5;j=j+4){
    for(let i = 0; i<5;i++){
    component.currentDir = verticalTestDirections[j];
    component.currentX = j;
    component.currentY = i;
    component.inputValue = "MOVE";
    expect(component.checker()).toBe(false);
    }}
  });

  let rotateDirections = ["WEST","NORTH","EAST","SOUTH","WEST","NORTH"];
  it('rotate left', () => {
    for(let i = 5; i > 1; i--){
      component.currentDir = rotateDirections[i];
      component.currentX = 1;
      component.currentY = 1;
      component.place = true;
      component.inputValue = "LEFT";
      component.robotBrain()
      expect(component.currentDir).toBe(rotateDirections[i-1]);
    }
  });

  it('rotate right', () => {
    for(let i = 0; i < 4; i++){

      component.currentDir = rotateDirections[i];
      component.currentX = 1;
      component.currentY = 1;
      component.place = true;
      component.inputValue = "RIGHT";
      component.robotBrain()
      expect(component.currentDir).toBe(rotateDirections[i+1]);
    }
  });
});
