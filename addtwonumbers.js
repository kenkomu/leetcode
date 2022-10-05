var addTwoNumbers = function(l1, l2) {
    var newnode = new ListNode(0);
    var headofnode = newnode;

    var sum = 0;
    var carry = 0;
    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }

        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        headofnode.next = new ListNode(sum);
        headofnode = headofnode.next;

        sum = carry;
        carry = 0;
    }
    return newnode.next;

    
};