class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    getByIndex(index) {
        if (index < 0 || index >= this.length) return null

        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }

        return current
    }

    /**
     * The push() mehod add new node to the end of the Doubly Linked List
     * @param {*} value of the new node
     * @returns the new Doubly Linked List with the new last node
     */
    push(value) {
        let node = new DoublyLinkedListNode(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        }
        else {
            let temp = this.tail
            this.tail = node
            node.previous = temp
            temp.next = node
        }
        this.length++
        return this
    }

    /**
     * The pop() method removes the last element from the Doubly Linked List
     * @returns the new Doubly Linked List without the last node
     */
    pop() {
        if (!this.head) return undefined
        let temp = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        else {
            this.tail = temp.previous
            this.tail.next = null
            temp.previous = null
        }
        this.length--
        return this
    }

    /**
     * The shift() method removes the first element from the Doubly Linked List
     * @returns the new Doubly Linked List without the first node
     */
    shift() {
        if (!this.head) return undefined
        let temp = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        else {
            this.head = temp.next
            this.head.previous = null
            temp.next = null
        }
        this.length--
        return this
    }

    /**
     * The unshift() method adds the new node to the head of the current Doubly Linked List
     * @param {*} val Value of the new node
     * @returns the new Doubly Linked List with the new head node
     */
    unshift(val) {
        let node = new DoublyLinkedListNode(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            let temp = this.head
            this.head = node
            node.next = temp
            temp.previous = node
        }
        this.length++
        return this
    }

    /**
     * Print the Doubly Linked List in human readble mode
     */
    print() {
        let output = 'null'

        let current = this.head

        while (current) {
            output = `${output} <- ${current.value} -> `
            current = current.next
        }
        console.log(`${output}null`)
    }
}

class DoublyLinkedListNode {
    constructor(value) {
        this.value = value
        this.previous = null
        this.next = null
    }
}

/**
 * Helper function to create a DoublyLinkedList from an array of values
 * @param  {...any} values data values of each node
 * @returns {DoublyLinkedList} Doubly Linked List created
 */
DoublyLinkedList.fromValues = function (...values) {
    const dll = new DoublyLinkedList()
    for (let i = 0; i < values.length; i++)
        dll.push(values[i])

    return dll
}

module.exports = DoublyLinkedList