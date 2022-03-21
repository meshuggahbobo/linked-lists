const LinkedList = require('./LinkedList')

const ll = new LinkedList()
ll.insertAtHead(10)
ll.insertAtHead(20)

ll.print()
console.log(ll.getByIndex(0).value)

const la = LinkedList.fromValues(10, 20, 30, 40, 50)
la.print()

console.log('Insert at index 2 the value 60...')
la.insertAtIndex(2, 60)
la.print()

console.log('Removed the head...')
la.removeHead()
la.print()