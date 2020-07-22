class Drops{
    constructor(x,y){
        var options={
            "friction":0
        };
        this.body= Bodies.circle(x,y,10,options);
        this.radius= 10;
        this.radiusY=20;
        World.add(world,this.body);
    }
    
    update(){
        if(this.body.position.y>400){
            this.body.position.y=0;
        }
    }

    display(){
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radiusY);
    }
}