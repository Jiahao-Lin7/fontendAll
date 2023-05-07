//输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

var reversePrint = function(head) {
    let cur = head
    let res = []
    while(cur){
        res.unshift(cur.val)
        cur = cur.next
    }
    return res
};