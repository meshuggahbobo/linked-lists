const SinglyLinkedList = require('./src/SinglyLinkedList')
const DoublyLinkedList = require('./src/DoublyLinkedList')

//#region Singly Linked List
console.log(' --- SINGLY LINKED LIST ---')
console.log('Create empty singly linked list and add (in this order) at the head 10 and 20...')
const ll = new SinglyLinkedList()
ll.insertAtHead(10)
ll.insertAtHead(20)
ll.print()

console.log('Create new Singly Linked List from 10 to 50...')
const la = SinglyLinkedList.fromValues(10, 20, 30, 40, 50)
la.print()

console.log('Insert at index 2 the value 60...')
la.insertAtIndex(2, 60)
la.print()

console.log('Remove the head...')
la.removeHead()
la.print()

console.log('Remove at index 3...')
la.removeAtIndex(3)
la.print()

console.log('---------------------------------------')
//#endregion

//#region Doubly Linked List
console.log(' --- DOUBLY LINKED LIST ---')
console.log('Create new Doubly Linked List from 10 to 40...')
const dll = DoublyLinkedList.fromValues(10, 20, 30, 40)
dll.print()

console.log('Remove the last node from the list...')
dll.pop()
dll.print()

console.log('Add new head...')
dll.unshift(50)
dll.print()

console.log('Remove the head...')
dll.shift()
dll.print()

//#endregion