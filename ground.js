
class Ground {

  constructor(x,y,w,h){

    let g_opts = {
      isStatic:true
    }

    this.body = Bodies.rectangle(x,y,w,h,g_opts);
    this.w = w;
    this.h = h;
    World.add(world,this.body);

  }

  show(){
    var pos = this.body.position
    rectMode(CENTER);
    fill("#87CEFA");
    rect(pos.x,pos.y,this.w,this.h)  ;
  }


}
function draw(){
  groundObj.display();
  groundObj=new ground(width/2,670,width,20);
  leftSide = new ground(1100,600,20,120);
}
