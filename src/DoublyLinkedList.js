class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

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