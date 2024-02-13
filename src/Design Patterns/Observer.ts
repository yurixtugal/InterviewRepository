interface IObserver<T> {
  refresh: (value: T) => void;
}

interface ISubject<T> {
  observers: IObserver<T>[];

  subscribe(observer: IObserver<T>): void;
  unsubscribe(observer: IObserver<T>): void;
  notify(value: T): void;
}

class Subject<T> implements ISubject<T> {
  observers: IObserver<T>[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver<T>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: IObserver<T>): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(value: T): void {
    this.observers.forEach(observer => observer.refresh(value));
  }
}

class Observer<T> implements IObserver<T> {
  private fn: (value: T) => void;

  constructor(fn: (value: T) => void) {
    this.fn = fn;
  }

  refresh(value: T): void {
    this.fn(value);
  }
}

const subject = new Subject<number>();
const observer = new Observer<number>(value => console.log(`Observer 1: ${value}`));
const observer2 = new Observer<number>(value => console.log(`Observer 2: ${value}`));
subject.subscribe(observer);
subject.subscribe(observer2);
subject.notify(1);
subject.notify(2);
