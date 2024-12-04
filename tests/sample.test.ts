import {beforeAll, describe, expect, it} from "vitest";
import LinkedList from "../src/data_structures/LinkedList/LinkedList";
import LinkedListNode from "../src/data_structures/LinkedList/LinkedListNode";


describe("LinkedList", () => {

    it("Append should add element to end of empty list", () => {
        const list = new LinkedList(null, null);
        list.append(2);
        expect((list.tail as LinkedListNode<number>).value).toBe(2);
    });

    it("Prepend should add element to head of empty list", () => {
        const list = new LinkedList(null, null);
        list.prepend(2);
        expect((list.tail as LinkedListNode<number>).value).toBe(2);
    });
});


describe("LinkedList", () => {

    const list = new LinkedList(null, null);

    beforeAll(() => {
        list.append(2);
        list.append(3);
        list.prepend(4);
    },1000)

    it("Append should add element to end of list", () => {
        expect(((list.tail as LinkedListNode<number>).next as LinkedListNode<number>).value).toBe(3);
    });
    it("Size of this list should be three", () => {
        expect(list.size).toBe(3);
    });
    it("Prepend should add element to head of list", () => {
        expect((list.head as LinkedListNode<number>).value).toBe(4);
    });
});

