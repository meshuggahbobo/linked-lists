/**
 * @author Andrea 'Bobo' Oboe <info@andreaoboe.com>
 */

/**
 * @class
 * @classdesc Singly Linked List Class
 */
class SinglyLinkedList {

    /**
     * @constructor
     */
    constructor() {
        this.head = null
        this.length = 0
    }

    /**
     * Insert a new node in the Singly Linked List
     * @param {*} data to be stored in the node
     */
    insertAtHead(data) {
        const newNode = new SinglyLinkedListNode(data, this.head)
        this.head = newNode
        this.length++
    }

    /**
     * Get the node at passed index
     * @param {Number} index of the node to be retrived
     * @returns the node at index position
     */
    getByIndex(index) {
        if (index < 0 || index >= this.length) return null

        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }

        return current
    }

    /**
     * Print the Singly Linked List in human readble mode
     */
    print() {
        let output = ''
        let current = this.head
        while (current) {
            output = `${output}${current.value} -> `
            current = current.next
        }
        console.log(`${output}null`)
    }

    /**
     * Insert new node in the passed index of the Singly Linked List
     * @param {Number} index of the List
     * @param {*} value to be stored in the node
     */
    insertAtIndex(index, value) {
        if (index === 0) return this.insertAtHead(value)

        const prev = this.getByIndex(index - 1)
        if (prev === null) return null

        prev.next = new SinglyLinkedListNode(value, prev.next)
        this.length++
    }

    /**
     * Removed the current head of the Singly Linked List
     */
    removeHead() {
        this.head = this.head.next
        this.length--
    }

    /**
     * Remove node at passed index
     * @param {Number} index of the node to be removed
     */
    removeAtIndex(index) {
        if (index === 0) return this.removeHead()

        const prev = this.getByIndex(index - 1)
        if (prev === null) return null

        prev.next = prev.next.next
        this.length--
    }
}


/**
 * @class
 * @classdesc Singly Linked List Node Class
 */
class SinglyLinkedListNode {
    /**
     * @constructor
     * @param {*} value of the node to be stored
     * @param {*} next node to be pointed
     */
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

/**
 * Helper function to create a SinglyLinkedList from an array of values
 * @param  {...any} values data values of each node
 * @returns {SinglyLinkedList} Singly Linked List created
 */
SinglyLinkedList.fromValues = function (...values) {
    const ll = new SinglyLinkedList()
    //In reverse order because we add from the head
    for (let i = values.length - 1; i >= 0; i--)
        ll.insertAtHead(values[i])

    return ll
}

module.exports = SinglyLinkedList