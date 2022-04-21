## Classes

<dl>
<dt><a href="#DoublyLinkedList">DoublyLinkedList</a></dt>
<dd><p>Doubly Linked List Class</p>
</dd>
<dt><a href="#DoublyLinkedListNode">DoublyLinkedListNode</a></dt>
<dd><p>Doubly Linked List Node Class</p>
</dd>
</dl>

<a name="DoublyLinkedList"></a>

## DoublyLinkedList
Doubly Linked List Class

**Kind**: global class  

* [DoublyLinkedList](#DoublyLinkedList)
    * _instance_
        * [.getByIndex(index)](#DoublyLinkedList+getByIndex) ⇒
        * [.push(value)](#DoublyLinkedList+push) ⇒
        * [.pop()](#DoublyLinkedList+pop) ⇒
        * [.shift()](#DoublyLinkedList+shift) ⇒
        * [.unshift(val)](#DoublyLinkedList+unshift) ⇒
        * [.print()](#DoublyLinkedList+print)
    * _static_
        * [.fromValues(...values)](#DoublyLinkedList.fromValues) ⇒ [<code>DoublyLinkedList</code>](#DoublyLinkedList)

<a name="DoublyLinkedList+getByIndex"></a>

### doublyLinkedList.getByIndex(index) ⇒
Get the node at passed index

**Kind**: instance method of [<code>DoublyLinkedList</code>](#DoublyLinkedList)  
**Returns**: the node at index position  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | of the node to be retrived |

<a name="DoublyLinkedList+push"></a>

### doublyLinkedList.push(value) ⇒
The push() mehod add new node to the end of the Doubly Linked List

**Kind**: instance method of [<code>DoublyLinkedList</code>](#DoublyLinkedList)  
**Returns**: the new Doubly Linked List with the new last node  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | of the new node |

<a name="DoublyLinkedList+pop"></a>

### doublyLinkedList.pop() ⇒
The pop() method removes the last element from the Doubly Linked List

**Kind**: instance method of [<code>DoublyLinkedList</code>](#DoublyLinkedList)  
**Returns**: the new Doubly Linked List without the last node  
<a name="DoublyLinkedList+shift"></a>

### doublyLinkedList.shift() ⇒
The shift() method removes the first element from the Doubly Linked List

**Kind**: instance method of [<code>DoublyLinkedList</code>](#DoublyLinkedList)  
**Returns**: the new Doubly Linked List without the first node  
<a name="DoublyLinkedList+unshift"></a>

### doublyLinkedList.unshift(val) ⇒
The unshift() method adds the new node to the head of the current Doubly Linked List

**Kind**: instance method of [<code>DoublyLinkedList</code>](#DoublyLinkedList)  
**Returns**: the new Doubly Linked List with the new head node  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | Value of the new node |

<a name="DoublyLinkedList+print"></a>

### doublyLinkedList.print()
Print the Doubly Linked List in human readble mode

**Kind**: instance method of [<code>DoublyLinkedList</code>](#DoublyLinkedList)  
<a name="DoublyLinkedList.fromValues"></a>

### DoublyLinkedList.fromValues(...values) ⇒ [<code>DoublyLinkedList</code>](#DoublyLinkedList)
Helper function to create a DoublyLinkedList from an array of values

**Kind**: static method of [<code>DoublyLinkedList</code>](#DoublyLinkedList)  
**Returns**: [<code>DoublyLinkedList</code>](#DoublyLinkedList) - Doubly Linked List created  

| Param | Type | Description |
| --- | --- | --- |
| ...values | <code>any</code> | data values of each node |

<a name="DoublyLinkedListNode"></a>

## DoublyLinkedListNode
Doubly Linked List Node Class

**Kind**: global class  
<a name="new_DoublyLinkedListNode_new"></a>

### new DoublyLinkedListNode(value)

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | of the node to be stored |

