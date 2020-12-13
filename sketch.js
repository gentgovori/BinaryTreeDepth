var tree;

function setup(){

    noCanvas();
    tree = new Tree();
    
    for(var i = 0;i<10;i++){
        tree.addValue(floor(random(0,10)));

    }

    console.log(tree);
debugger;
    console.log("Tree height is :" + tree.CalculateDepth(tree.root));
}

function Tree(){
this.root=null;

}
var vlera = 0;
Tree.prototype.CalculateDepth = function(node)
{
    
    debugger;
    
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
}
else {
    this.root.addNode(n);
}

Node.prototype.addNode = function(n){
if(n.value<this.value)
{
    if(this.left==null)
    {
        this.left=n;
    }
    else
    {
    this.left.addNode(n);
    }
}
else
{
    if(this.right == null)
    {
        this.right= n;
    }
    else
    {
    this.right.addNode(n);
    }
}

}


}

//Objekti i nyjes
function Node(val)
{
 this.value = val;
 this.left = null;
 this.right = null;


}