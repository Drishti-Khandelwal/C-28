class Slingshoot{
constructor(bodyA, pointB){
var options ={
bodyA:bodyA,
pointB:pointB,
stiffness: 0.04,
length:100
}
this.chain = Constraint.create(options);
World.add(world,this.chain);   
}
display(){
if(this.chain.bodyA){
var pointA = this.chain.bodyA.position; //starting point
var pointB = this.chain.pointB; // ending point
line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}
fly(){
this.chain.bodyA = null;


}
}