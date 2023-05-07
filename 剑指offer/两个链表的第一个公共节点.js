var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null) return null
    let hA = headA,hB = headB
    while(!(hA === null && hB === null)){
        if(hA === hB){
            return hA
        }
        hA = hA ? hA.next : headB
        hB = hB ? hB.next : headA
    }
    return hA
};