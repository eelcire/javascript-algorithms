// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0
    }

    insertFirst(value) {
        this.head = new Node(value, this.head);
        this.length++
    }

    size() {
        return this.length;
    }

    getFirst() {
        return this.head;
    }
    
    getLast() {
        if (!this.head) {
            return null;
        }
        let node = this.head;
        while (node) {
            if (!node.next) return node;
            node = node.next;
        }
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    removeFirst() {
        if (!this.head) return;

        this.head = this.head.next;
        this.length--;
    }

    removeLast() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let node = this.head.next;
        let previous = this.head
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null
        this.length--;
    }

    insertLast(n) {
        let last = this.getLast();
        if (last) {
            last.next = new Node(n, null)
            this.length++
        } else {
            this.head = new Node(n, null)
        }
    }

    getAt(n) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (n === counter) {
                return node;
            }
            node = node.next;
            counter++;
        }
        return null;
    }

    removeAt(n) {
        if (!this.head) {
            return;
        }
        if (n === 0) {
            this.head = this.head.next;
            this.length--;
            return;
        }
        let previous = this.getAt(n - 1)
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next
        this.length--;
    }

    insertAt(n, index) {
        if (!this.head) {
            this.head = new Node(n)
            this.length++;
            return
        }
        if (index === 0) {
            this.head = new Node(n, this.head);
            this.length++;
            return;
        }
        if (!this.getAt(index)) {
            let last = this.getLast();
            let node = new Node(n);
            last.next = node;
            this.length++;
            return;
        }
        let previous = this.getAt(index - 1);
        let node = new Node(n, previous.next);
        previous.next = node;
        this.length++;
    }

    forEach(fn) {
        let node = this.head;
        while (node) {
            fn(node);
            node = node.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield (node);
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
