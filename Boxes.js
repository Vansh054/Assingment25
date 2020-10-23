class Box extends Base
{
    constructor(x,y,w,h)
    {
      super(x,y,w,h)
      this.Image = loadImage("Sprite/dustbin.png")
    }
    display()
    {
      super.display()
    }
}