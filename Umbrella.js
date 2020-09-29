class Umbrella{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,100,options);
        this.image = loadImage("images/man1.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image,0,0,400,400);
      pop();
    }
}