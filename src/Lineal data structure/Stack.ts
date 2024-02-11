class Stack<T> {
  private items: T[] = [];

  push(item: T){
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length-1]
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

}

const validString = (str: string): boolean => {
  let stack = new Stack<string>();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    }
    if (str[i] === ')'){
      if (stack.isEmpty()) return false;
      stack.pop();
    }
  }
  
  return stack.isEmpty();
}

console.log(validString("(h(ello) world())")); // true