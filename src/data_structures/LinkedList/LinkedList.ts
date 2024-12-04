import LinkedListNode from "./LinkedListNode";

class LinkedList<T> {
    public head: LinkedListNode<T> | null;
    public tail: LinkedListNode<T> | null;
    public size: number;

    constructor(head: LinkedListNode<T> | null, tail: LinkedListNode<T> | null) {
        this.head = head || null;
        this.tail = tail || null;
        this.size = 0;
    }

    append(value: T): LinkedList<T> {
        if (this.head === null && this.tail === null) {
            this.head = new LinkedListNode<T>(value);
            this.tail = this.head;
            this.size = this.size + 1;
            return this;
        }

        (this.tail as LinkedListNode<T>).next = new LinkedListNode<T>(value);
        this.size = this.size + 1;
        return this;
    }

    prepend(value: T) {
        if (this.head === null && this.tail === null) {
            this.head = new LinkedListNode<T>(value);
            this.tail = this.head;
            this.size = this.size + 1;
            return this;
        }
        const node = new LinkedListNode<T>(value);
        this.tail = this.head;
        node.next = this.head;
        this.head = node;
        this.size = this.size + 1;
        return this;
    }
}

export default LinkedList;