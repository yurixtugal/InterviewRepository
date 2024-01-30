class ListNodeTest<T> {
  value: T;
  nextNode: ListNodeTest<T> | null;
  constructor(value: T, nextNode: ListNodeTest<T> | null){
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedListTest<T> {
  head: ListNodeTest<T> | null;

  constructor(head: ListNodeTest<T> | null){
    this.head = head;
  }

  addHead(value: T){
    const newHead = new ListNodeTest(value,this.head);
    this.head = newHead
  }

  addTail(value: T){
    const tailNode = new ListNodeTest(value,null);
    if (this.head === null) {
      this.head = tailNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.nextNode !== null){
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = tailNode;
  }

  invert(){

    if (this.head === null || this.head.nextNode === null) return;

    let prevNode: ListNodeTest<T> | null = null;
    let currentNode: ListNodeTest<T> | null= this.head;
    while(currentNode !== null) {
      let tmpNode = currentNode;
      currentNode = currentNode.nextNode;
      tmpNode.nextNode = prevNode;
      prevNode = tmpNode;
    }

    this.head = prevNode;

  }
}

const nodeTest1 = new ListNodeTest(1,null);
const listTest = new LinkedListTest(nodeTest1);

listTest.addHead(5)
listTest.addTail(10)
listTest.addTail(9)
listTest.addTail(19)
listTest.invert();
console.log(JSON.stringify(listTest));

