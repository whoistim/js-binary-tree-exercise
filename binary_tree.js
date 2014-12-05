function BinTree(value){
  this.left = null;
  this.right = null;
  this.value = value;
}


BinTree.prototype.insert = function(val){
  if (this.value){//checks to see if there is a value at this node

    if (this.value < val) {//checks to see if the new val is greater than the node

      if(this.right === null){//checks to see if the right node is empty
        this.right = new BinTree(val);//if so, sets the right node to val.
      }

      else {
        this.right.insert(val);//otherwise calls insert on the right node.
      }

    }
    else {
      if(this.left === null){
        this.left = new BinTree(val);
      }
      else{
        this.left.insert(val);
      }
    }
  }
  else{
    this.value = val;
  }
  return(this);

};


BinTree.prototype.isLeaf = function(val){
  return (!this.left && !this.right);
};


BinTree.prototype.search = function(){
  if(this.value){
    return true;
  }
  else{
    if(this.value < val){
      this.right.search(val);
    }
    else{
      this.left.search(val);
    }
  }
};


try{
  module.exports = BinTree;
} catch(e){

}
