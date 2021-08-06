class Ground{
constructor(){
var options={
    isStatic:true,
}
this.body=Bodies.rectangle(200,390,400,20,options);
this.height=20;
this.width=400;

World.add(world,this.body);
}
display(){
var pos=this.body.position; 
rectMode(CENTER);
fill("red");
rect(pos.x,pos.y,this.width,this.height);
}
};