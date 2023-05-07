var mergeTwoLists = function(l1, l2) {
    // var head = new ListNode();
    // var h1 = head
    // while(l1 && l2){
    //     if(l1.val <= l2.val){
    //         h1.next = new ListNode()
    //         h1.next.val = l1.val
    //         l1 = l1.next
    //     }else{
    //         h1.next = new ListNode()
    //         h1.next.val = l2.val
    //         l2 = l2.next;
    //     }
    //     h1 = h1.next
    // }
    // var res = l1 ? l1 : l2
    // h1.next = res
    // return head.next
    var head = new ListNode()
    var p = head
    while(l1 && l2){
        if(l1.val < l2.val){
            p.next = l1
            p = p.next
            l1 = l1.next
        }else{
            p.next = l2
            p = p.next
            l2 = l2.next
        }
    }
    p.next = l1 === null ? l2 : l1
    return head.next
};