class Mango{
    constructor(x, y, r){
    var options={
        isStatic:true,
        restitution:0,
        friction:1
    }


    this.radius=r;
    
    //loading image for mango
    this.image=loadImage("images/mango.png");
    this.body=Bodies.circle(x, y, r, options);

    

    World.add(world, this.body);
}
display()
{
    var pos=this.body.position;

    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);

    imageMode(RADIUS)
    image(this.image, 0, 0, this.radius+30, this.radius+30);
    pop();
}
}
