class ListNode<T> {
  value: T | null;
  nextNode: ListNode<T> | null;

  constructor(value: T, nextNode: ListNode<T> | null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null;

  constructor(head: ListNode<T> | null) {
    this.head = head;
  }

  addHead(value: T) {
    let newNode = new ListNode(value, this.head);
    this.head = newNode;
  }

  addTail(value: T) {
    let newNode = new ListNode(value, null);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
  }

  invert() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;
    while (currentNode !== null) {
      nextNode = currentNode.nextNode;
      currentNode.nextNode = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
  }
}

const oddEvenList = (list: LinkedList<number>): LinkedList<number> => {
  if (list.head === null || list.head.nextNode === null) return list;
  let odd = list.head;
  let even = list.head.nextNode;
  let evenHead = even;
  while (odd.nextNode !== null && even.nextNode !== null) {
    odd.nextNode = even.nextNode;
    odd = odd.nextNode;
    even.nextNode = odd.nextNode;
    if (even.nextNode !== null) {
      even = even.nextNode;
    }
  }
  odd.nextNode = evenHead;
  return list;
};

const evenOddList = (list: LinkedList<number>): LinkedList<number> => {
  if (list.head === null || list.head.nextNode === null) return list;
  let odd = list.head;
  let even = list.head.nextNode;
  let evenHead = even;
  while (odd.nextNode !== null && even.nextNode !== null) {
    odd.nextNode = even.nextNode;
    odd = odd.nextNode;
    even.nextNode = odd.nextNode;
    if (even.nextNode !== null) {
      even = even.nextNode;
    }
  }
  const oddHead = list.head;
  even.nextNode = oddHead;
  list.head = evenHead;
  return list;
};

const isCyclic = (list: LinkedList<number>): boolean => {
  if (list.head === null || list.head.nextNode === null) return false;
  let slowNodePointer = list.head;
  let fastNodePointer = list.head.nextNode;
  while (slowNodePointer !== fastNodePointer) {
    if (
      slowNodePointer.nextNode === null ||
      fastNodePointer.nextNode === null ||
      fastNodePointer.nextNode.nextNode === null
    )
      return false;

    slowNodePointer = slowNodePointer.nextNode;
    fastNodePointer = fastNodePointer.nextNode.nextNode;
  }

  return true;
};

const isPalindrome = (list: LinkedList<number>): boolean => {
  if (list.head === null || list.head.nextNode === null) return true;
  let head = list.head;
  let middlePointer: ListNode<number> | null = list.head;
  let tailPointer: ListNode<number> | null = list.head.nextNode;
  while (middlePointer !== null && tailPointer.nextNode !== null) {
    middlePointer = middlePointer.nextNode;
    if (tailPointer.nextNode.nextNode !== null)
      tailPointer = tailPointer.nextNode.nextNode;
    else tailPointer = tailPointer.nextNode;
  }
  let secondHalfList = new LinkedList(
    middlePointer ? middlePointer.nextNode : null
  );
  secondHalfList.invert();

  let firstHalfHead: ListNode<number> | null = head;
  let secondHalfHead: ListNode<number> | null = secondHalfList.head;

  while (firstHalfHead !== null && secondHalfHead !== null) {
    if (firstHalfHead.value !== secondHalfHead.value) return false;

    firstHalfHead = firstHalfHead.nextNode;
    secondHalfHead = secondHalfHead.nextNode;
  }

  return true;
};

const reorderList = (list: LinkedList<number>): LinkedList<number> => {
  if (list.head === null || list.head.nextNode === null) return list;
  let head = list.head;
  let middlePointer: ListNode<number> | null = list.head;
  let tailPointer: ListNode<number> | null = list.head.nextNode;
  while (
    middlePointer !== null &&
    tailPointer !== null &&
    tailPointer.nextNode !== null
  ) {
    middlePointer = middlePointer.nextNode;
    if (tailPointer.nextNode.nextNode !== null) {
      tailPointer = tailPointer.nextNode.nextNode;
    } else {
      tailPointer = tailPointer.nextNode;
    }
  }
  if (middlePointer === null) return list;
  const secondHalfList = new LinkedList(
    middlePointer ? middlePointer.nextNode : null
  );
  middlePointer.nextNode = null;
  secondHalfList.invert();
  let firstHead: ListNode<number> | null = head;
  let secondHead: ListNode<number> | null = secondHalfList.head;
  while (firstHead !== null && secondHead !== null){
    const temp1: ListNode<number> | null = firstHead.nextNode;
    const temp2: ListNode<number> | null = secondHead.nextNode;

    firstHead.nextNode = secondHead;
    secondHead.nextNode = temp1;

    firstHead = temp1;
    secondHead = temp2;
  }
  return list;
};

const node1 = new ListNode(1, null);
const node2 = new ListNode(2, null);
const node3 = new ListNode(3, null);
const node4 = new ListNode(4, null);
const node5 = new ListNode(5, null);

node1.nextNode = node2;
node2.nextNode = node3;
node3.nextNode = node4;
node4.nextNode = node5;

const list = new LinkedList(node1);

const reorderListResult = reorderList(list);

console.log({
  reorderListResult: JSON.stringify(reorderListResult),
});
