const LinkedList = require('./SinglyLinkedList')

console.log(' --- SINGLY LINKED LIST ---')
console.log('Create empty linked list and add (in this order) at the head 10 and 20...')
const ll = new LinkedList()
ll.insertAtHead(10)
ll.insertAtHead(20)
ll.print()

console.log('Create new Singly Linked List from 10 to 50...')
const la = LinkedList.fromValues(10, 20, 30, 40, 50)
la.print()

console.log('Insert at index 2 the value 60...')
la.insertAtIndex(2, 60)
la.print()

console.log('Removed the head...')
la.removeHead()
la.print()

console.log('Remove at index 3...')
la.removeAtIndex(3)
la.print()
console.log('---------------------------------------')