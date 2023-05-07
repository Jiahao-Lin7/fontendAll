var copyRandomList = function(head) {
    if(!head){
        return null
    }
    for(let node = head; node !== null; node = node.next.next){
        const newNode = new Node(node.val,node.next,null)
        node.next = newNode
    }
    for(let node = head; node != null; node=node.next.next){
        const newNode = node.next
        newNode.random = node.random != null ? node.random.next : null
    }
    let newHead = head.next
    for(let node = head; node != null; node = node.next){
        const newNode = node.next
        node.next = newNode.next
        newNode.next = newNode.next != null ? newNode.next.next : null
    }
    return newHead
};