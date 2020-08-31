class grounditems{
  constructor(types,quantitys,xPos,yPos,offSetx,offSety){
    this.x = xPos;
    this.y = yPos;
    this.type = types;
    this.quantity = quantitys;
    this.isAlive = true;
    this.offsetx = offSetx;
    this.offsety = offSety;
  }
  disp(){
    image(this.type,this.x*50+this.offsetx,this.y*50+this.offsety);
  }

  update(){
    this.disp();
  }

  
}
