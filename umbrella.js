class Umbrella{
    constructor(x,y){
        var options={
            'isStatic':true
        };
        this.body= Bodies.circle(x,y,50,options);
        this.radiusX=50;
        this.radiusY=50;
        World.add(world,this.body);
    }

    display(){
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radiusX,this.radiusY);
    }
}