class Paper 
{
    constructor(x,y,r)
    {
     var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:1,
		density:10,
    scale: 1
	}
      this.body = Bodies.circle(x,y,r,ball_options);
      this.radius = 25
      this.Image = loadImage("Sprite/paper.png")
      World.add(world, this.body);    
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("pink")
        stroke("pink")
        image(this.Image,0,0,60,60) 
        pop();

      if (keyCode === UP_ARROW && this.body.position.x < 275)
    {
	    Matter.Body.applyForce(this.body, this.body,{x:85,y:-65})
	  } 
      if (this.body.position.x > 280)
	  {
	    Matter.Body.applyForce(this.body, this.body,{x:2,y:10.4})	
	  }
      
      if (this.body.position.y > 225 && this.body.position.x > 900 && this.body.position.x < 1100)
    {
      Matter.Body.setStatic(this.body, true)
    }
      

  }  
}