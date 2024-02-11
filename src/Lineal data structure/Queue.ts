import * as Collections from 'typescript-collections';

var mySet = new Collections.Set<number>();
mySet.add(123);
mySet.add(123); // Duplicates not allowed in a set
// The following will give error due to wrong type:
// mySet.add("asdf"); // Can only add numbers since that is the type argument.
console.log(mySet)
var myQueue = new Collections.Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
 
console.log(myQueue.dequeue()); // prints 1
console.log(myQueue.dequeue()); // prints 2

var myPriorityQueue = new Collections.PriorityQueue();
myPriorityQueue.enqueue([-1,2]);
myPriorityQueue.enqueue([-2,3]);
myPriorityQueue.enqueue([-3,4]);

console.log(myPriorityQueue.dequeue()); // prints [1,2]