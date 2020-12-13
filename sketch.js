var tree;

function setup(){

    createCanvas(600,400);
    background(51);
    tree = new Tree();
    
    for(var i = 0;i<15;i++){
        tree.addValue(floor(random(0,20)));

    }

    console.log(tree);
    tree.traverse();

    console.log("Tree height is :" + tree.CalculateDepth(tree.root));
}

function Tree(){
this.root=null;

}

Tree.prototype.traverse = function(){
this.root.visit(this.root);

}

Node.prototype.visit = function(parent){
    if(this.left !=null)
    {
        this.left.visit(this);
    }
    console.log(this.value);
    fill(255);
    noStroke();
    
    textAlign(CENTER);

    text(this.value,this.x,this.y);
    stroke(255);
    noFill();
    ellipse(this.x,this.y,20,20);
    line(parent.x,parent.y,this.x,this.y); 
    if(this.right!=null)
    {
        this.right.visit(this);
    }



}


Tree.prototype.CalculateDepth = function(node)
{
    
    
    
    if(node == null)
        {
            return 0;
        }
    else
    {
        var leftDepth = this.CalculateDepth(node.left);
        var rightDepth = this.CalculateDepth(node.right);

        if(leftDepth>rightDepth){
            
            return (leftDepth+1);
            
        }
        else{
            return (rightDepth+1);
        }
    }
}


Tree.prototype.addValue = function(val){
    var n = new Node(val);
if(this.root == null)
{
    this.root = n;
    this.root.x = width / 2;
    this.root.y = 16;
}
else {
    this.root.addNode(n);
}

var na =0;
var ha = 0;
Node.prototype.addNode = function(n){
    na+=30;
    ha+=10;
if(n.value<this.value)
{
    if(this.left==null)
    {
        this.left=n;
        this.left.x = this.x - na;
        this.left.y = this.y +ha;
    }
    else
    {
    this.left.addNode(n);
    }
}
else if(n.value> this.value)
{
    if(this.right == null)
    {
        this.right= n;
        this.right.x = this.x + na;
        this.right.y = this.y +ha;
    }
    else
    {
    this.right.addNode(n);
    }
}

}


}

//Objekti i nyjes
function Node(val,x,y)
{
 this.value = val;
 this.left = null;
 this.right = null;
 this.x=x;
 this.y=y;


}