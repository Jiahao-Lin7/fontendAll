/* 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。 */

var deleteNode = function(head, val) {
    let cur = new ListNode()
    cur.next = head
    if(head.val === val){
        return head.next
    }
    while(cur.next){
        if(cur.next.val === val){
            cur.next = cur.next.next
        }else{
            cur = cur.next
        }
    }
    return head
};