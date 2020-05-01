class Particle {
    constructor(x,y,r) {
      var options = {
          friction:0,
          restitution: 0.4
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r; 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.bodt.angle;
      push();
      translate(this.body.position.x,this.body.position.y)
      ellipseMode(CENTER);
      rotate(angle)
      strokeWeight(4);
      stroke("black");
      fill("blue");
     
    ellipse(pos.x, pos.y, this.r);
  pop();  
  }
  };