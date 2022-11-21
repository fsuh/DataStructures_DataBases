class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(5);

//     a
//   b   c
// d   e   f

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const breadthFirstPrint = (root, target) => {
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();

    if (curr.val == target) {
      return true;
    }
    console.log(curr.val);

    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
  return false
};

//console.log(breadthFirstPrint(a ,'x'));


const sumTree = (root) => {

   const queue =[root];
   let sum = 0;

   while (queue.length > 0){
    const curr = queue.shift();
     sum += curr.val;

   if (curr.left !== null) {
    queue.push(curr.left);
  }
  if (curr.right !== null) {
    queue.push(curr.right);
  }
}
  return sum;
}

console.log(sumTree(a));


