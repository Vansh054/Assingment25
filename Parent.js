class Base
{
    constructor(x,y,w,h)
    {
        var box_options = {
          isStatic: true,
       }
      this.body = Bodies.rectangle(x,y,w,h,box_options);
      this.width = w;
      this.height = h;
      this.Image = loadImage("Sprite/dustbin.png")
      World.add(world, this.body);  
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("red")
        stroke("red")
        image(this.Image,0,0,this.width,this.height);
        pop();
    }
}
