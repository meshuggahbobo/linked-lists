<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><p align="center">
  <img src="https://raw.githubusercontent.com/meshuggahbobo/linked-lists/main/img/logo.png" alt="Logo" width="auto" height="auto" />
</p>
<h1 align="center">linked-lists</h1>
<p align="center">
		<a href="https://github.com/meshuggahbobo/linked-lists/graphs/commit-activity"><img alt="Maintained" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" height="20"/></a>
	</p>

<p align="center">
  <b>Singly & Doubly Linked Lists in Javascript</b></br>
  <sub><sub>
</p>

<br />


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributors)

## ➤ Contributors
	

| [<img alt="Andrea Oboe" src="https://avatars.githubusercontent.com/u/36472094?v=4" width="100">](https://www.andreaoboe.com) |
|:--------------------------------------------------:|
| [Andrea Oboe](https://www.andreaoboe.com)        |
| [info@andreaoboe.com](mailto:info@andreaoboe.com) |
| 🔥                                               |


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#classes)

## ➤ Classes

<dl>
<dt><a href="#SinglyLinkedList">SinglyLinkedList</a></dt>
<dd><p>Singly Linked List Class</p>
</dd>
<dt><a href="#SinglyLinkedListNode">SinglyLinkedListNode</a></dt>
<dd><p>Singly Linked List Node Class</p>
</dd>
</dl>

<a name="SinglyLinkedList"></a>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#singlylinkedlist)

## ➤ SinglyLinkedList
Singly Linked List Class

**Kind**: global class  

* [SinglyLinkedList](#SinglyLinkedList)
    * _instance_
        * [.insertAtHead(data)](#SinglyLinkedList+insertAtHead)
        * [.getByIndex(index)](#SinglyLinkedList+getByIndex) ⇒
        * [.print()](#SinglyLinkedList+print)
        * [.insertAtIndex(index, value)](#SinglyLinkedList+insertAtIndex)
        * [.removeHead()](#SinglyLinkedList+removeHead)
        * [.removeAtIndex(index)](#SinglyLinkedList+removeAtIndex)
    * _static_
        * [.fromValues(...values)](#SinglyLinkedList.fromValues) ⇒ [<code>SinglyLinkedList</code>](#SinglyLinkedList)

<a name="SinglyLinkedList+insertAtHead"></a>

### singlyLinkedList.insertAtHead(data)
Insert a new node in the Singly Linked List

**Kind**: instance method of [<code>SinglyLinkedList</code>](#SinglyLinkedList)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>\*</code> | to be stored in the node |

<a name="SinglyLinkedList+getByIndex"></a>

### singlyLinkedList.getByIndex(index) ⇒
Get the node at passed index

**Kind**: instance method of [<code>SinglyLinkedList</code>](#SinglyLinkedList)  
**Returns**: the node at index position  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | of the node to be retrived |

<a name="SinglyLinkedList+print"></a>

### singlyLinkedList.print()
Print the Singly Linked List in human readble mode

**Kind**: instance method of [<code>SinglyLinkedList</code>](#SinglyLinkedList)  
<a name="SinglyLinkedList+insertAtIndex"></a>

### singlyLinkedList.insertAtIndex(index, value)
Insert new node in the passed index of the Singly Linked List

**Kind**: instance method of [<code>SinglyLinkedList</code>](#SinglyLinkedList)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | of the List |
| value | <code>\*</code> | to be stored in the node |

<a name="SinglyLinkedList+removeHead"></a>

### singlyLinkedList.removeHead()
Removed the current head of the Singly Linked List

**Kind**: instance method of [<code>SinglyLinkedList</code>](#SinglyLinkedList)  
<a name="SinglyLinkedList+removeAtIndex"></a>

### singlyLinkedList.removeAtIndex(index)
Remove node at passed index

**Kind**: instance method of [<code>SinglyLinkedList</code>](#SinglyLinkedList)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | of the node to be removed |

<a name="SinglyLinkedList.fromValues"></a>

### SinglyLinkedList.fromValues(...values) ⇒ [<code>SinglyLinkedList</code>](#SinglyLinkedList)
Helper function to create a SinglyLinkedList from an array of values

**Kind**: static method of [<code>SinglyLinkedList</code>](#SinglyLinkedList)  
**Returns**: [<code>SinglyLinkedList</code>](#SinglyLinkedList) - Singly Linked List created  

| Param | Type | Description |
| --- | --- | --- |
| ...values | <code>any</code> | data values of each node |

<a name="SinglyLinkedListNode"></a>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#singlylinkedlistnode)

## ➤ SinglyLinkedListNode
Singly Linked List Node Class

**Kind**: global class  
<a name="new_SinglyLinkedListNode_new"></a>

### new SinglyLinkedListNode(value, next)

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | of the node to be stored |
| next | <code>\*</code> | node to be pointed |


