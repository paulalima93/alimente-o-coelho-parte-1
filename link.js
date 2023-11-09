class Link{
    constructor(bodyA,bodyB)
    {
      var lastlink = bodyA.body.bodies.length-2;
      console.log(lastlink);
      this.link = Constraint.create({
          //passar valores das options bodyA, pointA, bodyB, pointB, lengt, length,stiffness
          
        });
        //adicionar restrição ao mundo
        
    } 

    detach()
    {
     //C30
     //remover link do mundo
      
    }
}

