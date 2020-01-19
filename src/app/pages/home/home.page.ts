import { Component, ɵConsole } from '@angular/core';
import { ngControlStatusHost } from '@angular/forms/src/directives/ng_control_status';
import { CheckboxRequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  locationText = "";
  currentX = 0;
  currentY = 0;
  currentDir: string = "NORTH"
  place = false;
  inputValue: string = "";
  directions = ["NORTH","EAST","SOUTH","WEST"];
  prevX;
  prevY;
  drawn = false;
  rotateAngle;
  
  //Each core command is broken down into sub function

  //placer places the robot on the board
  placer(){
    this.currentDir = this.inputValue.substring(10,this.inputValue.length);
    this.currentX = Number(this.inputValue.substring(6,7));
    this.currentY = Number(this.inputValue.substring(8,9));
    this.place = true;
  }
  //draws robot onto screen
  drawRobot(){
    //first clear board if not first draw
    if (this.drawn === true){
      document.getElementById(""+this.prevY+this.prevX).innerHTML = '';
    }
    if (this.currentDir === "NORTH"){this.rotateAngle = 0;}
    else if (this.currentDir === "SOUTH"){this.rotateAngle = 180;}
    else if (this.currentDir === "WEST"){this.rotateAngle = 270;}
    else {this.rotateAngle = 90;}
    //now draw
    document.getElementById(""+this.currentY+this.currentX).innerHTML = '<ion-img id="imageID" src="./assets/car.png" style="transform: rotate('+ this.rotateAngle +'deg);"' + '></ion-img>';
  this.drawn = true;
  }

  //report reports the current coordinates of the robot
  report()
  {
    this.locationText = "Current Robot Coordinates: " + this.currentX +","+this.currentY+","+this.currentDir;
  }

  //checker checks for edge of the 5x5 table, returns false if robot is about to move off table
  checker()
  {
    if (this.inputValue.substring(0,5) === "PLACE"){
      if(Number(this.inputValue.substring(6,7)) > 4 || Number(this.inputValue.substring(8,9)) > 4 || Number(this.inputValue.substring(6,7)) <0 || Number(this.inputValue.substring(8,9)) < 0){
        
      return false 
      }
      else{return true}
    }
    else{
      if (this.currentDir === "NORTH" &&  this.currentY === 4)
    {return false}
    else if (this.currentDir === "SOUTH" && this.currentY === 0)
    {return false}
    else if (this.currentDir === "EAST" && this.currentX === 4)
    {return false}
    else if (this.currentDir === "WEST" && this.currentX === 0)
    {return false}
    else
    {return true}
    }
    
  }

  //robotRight turns the robot right
  robotRight(){
      if (this.currentDir !== "WEST")
      {
        for (let i = 0; i<3;i++)
        {
          if(this.currentDir === this.directions[i])
          {
            this.currentDir = this.directions[i+1];
            i = 3;
          }
        }
         
      }
      else
      {this.currentDir = "NORTH"}
  }

  //robotLeft turns the robot left
  robotLeft(){
    if (this.currentDir !== "NORTH")
    {
      for (let i = 1; i<4;i++)
      {
        if(this.currentDir === this.directions[i])
        {
          this.currentDir = this.directions[i-1];
          i = 4;
        }
      }
       
    }
    else
      {this.currentDir = "WEST"}
  }

  //robotMove moves the robot
  robotMove() {
    if (this.currentDir === "NORTH")
    {
      this.currentY += 1; 
    }
    else if (this.currentDir === "SOUTH")
    {
      this.currentY -= 1;
    }
    else if (this.currentDir === "EAST")
    {
      this.currentX += 1;
    }
    else if (this.currentDir === "WEST")
    {
      this.currentX -= 1;
    }
    else{console.log("direction error " + this.currentDir)}
  }

  //robotbrain decides what subfunction to call and is 
  //the first function to be run once a command has been executed
  robotBrain() {
    if (this.place == true)
    {
      if (this.inputValue === "REPORT")
      {
        this.report()
      }
    else if (this.inputValue === "MOVE" && this.checker() === true) 
    {
      this.robotMove()
      this.locationText = "Robot Moved";
    } 
    else if (this.inputValue === "RIGHT") 
    {
      this.robotRight()
      this.locationText = "Robot Turned to Right";
    } 
    else if (this.inputValue === "LEFT") 
    {
      this.robotLeft()
      this.locationText = "Robot Turned to Left";
    } 
    else if (this.inputValue.substring(0,5) === "PLACE")
    {
      if (this.checker() === true){
        this.placer()
     this.locationText = "Robot Placed";
     }
     else {this.locationText = "Can't Place Robot Outside of Table";}
    }
    else if (this.checker() === false && this.inputValue === "MOVE")
    {
      this.locationText = "Robot Detected Edge";
    }
    else{
      this.locationText = "please enter valid command";
    }
    }
    else if (this.inputValue.substring(0,5) === "PLACE")
    {
      if (this.checker() === true){
         this.placer()
      this.locationText = "Robot Placed";
      }
      else {this.locationText = "Can't Place Robot Outside of Table";}
     
    }
    else{
      this.locationText = "please enter valid command";
    }
    this.inputValue = "";
    if(this.place === true){
      this.drawRobot()
    }
    
  
    
    this.prevX = this.currentX;
    this.prevY = this.currentY;
  }

  moveKey() {
      this.inputValue = "MOVE";
      this.robotBrain();
    
  }
  rightKey() {
    this.inputValue = "RIGHT";
    this.robotBrain();
  
}
leftKey() {
  this.inputValue = "LEFT";
  this.robotBrain();

}
reportKey() {
  this.inputValue = "REPORT";
  this.robotBrain();
}
placeRandomKey() {
  let myRandx = Math.floor(Math.random() * Math.floor(5));
  let myRandy = Math.floor(Math.random() * Math.floor(5));
  let index = Math.floor(Math.random() * Math.floor(4))
  let myRandDir = this.directions[index];
  this.inputValue = "PLACE " + myRandx + "," + myRandy + "," + myRandDir;
  this.robotBrain();

}
  constructor() {}
  
}