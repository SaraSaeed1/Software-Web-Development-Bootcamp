class Node {
    constructor(data ,next =null) {
        this.data = data;
        this.next = next;
    }
}

class singlyLinkList{
    constructor(){
        this.head = null;
    }
    // here i want add data
    // method what class can do
    // i name it anything
    insertAtBack(data){
        if(this.head == null){
            this.head = new Node(data); // if it is not null so else is ... // data here from isertAtBack
        }
        else{
            let runner = this.head; // runner set to this.head
            while(runner.next!==null){ //while is not null so...
                runner = runner.next;
            }
            runner.next = new Node(data);
        }
        return this;
    }
    insertAtFront(data){
        if(this.head == null){
            this.head = new Node(data); // if i don't have head!, let head take the new node
        }else{
            let newNode = new Node(data); //new obj (node)
            newNode.next=this.head; //  point the next node to
            this.head=newNode; // assign the new node to the head
        }
        return this;
    }

    average(){
        if(this.head == null){
            return 0;
        }
        else{
            var i=1;
            let runner=this.head;
            let sum =runner.data
            while(runner.next !== null){
                runner =runner.next
                sum+=runner.data
                i++
            }
            return sum/i
        }
    }
    /* _____________________________________
    _________________REMOVE_________________
    ________________________________________*/
    removeHead(){
        if (this.head == null){
            return null;
        }else{
            this.head = this.head.next;
        }
    return this;
    }
    removeBack(){
        if ( this.head == null){
            return false;
        }
        else if (this.head.next == null){
            this.head =null;
        }
        else{
            var current = this.head; // Initialize current
            var previuse = null;
            while (current.next != null) {
                previuse = current;
                current = current.next;
            }
            previuse.next= null;
        }
        return this;
    }
    removeValue(data){
        if(this.head == null){
            return false;
        }
        else{
            if(this.head.data == data){
                if(this.head.next == null){
                    this.head.data = null;
                }else{
                    this.head = this.head.next;
                }
            }
            let current = this.head;
            let previuse=current;
            while(current != null){
                if(current.data == data){
                    previuse.next=current.next
                }
                previuse= current;
                current = current.next;
            }
            return false;
        }
    }

    contains(data){
        if(this.head == null){
            return false;
        }else{
            let current = this.head;
            while(current != null){
                if(current.data == data){
                    return true;
                }
                current = current.next;
            }
            return false;
        }
    }
    showList(){
        var runner = this.head;
        console.log(runner.data)
        while(runner.next!=null){
            runner=runner.next;
            console.log(runner.data)
        }
        return this;
    }
    secondToLast(){
        let runner = this.head;
        while (runner !== null && runner.next &&runner.next.next != null) {
            runner = runner.next;
        }
        return runner.data
    }
    // Add new Value after target
    prePend(newVal, targetVal) {
        let runner = this.head;
        while (this.head !== null &&runner.next !== null ) {
        if(this.head.data == targetVal){
            this.head=new Node(newVal,this.head)
            return true
        } else if(runner.next.data ==targetVal){
            runner.next=new Node(newVal,runner.next)
            return true
        }
        runner = runner.next
        }
    }
    moveMinToFront(){
        for(var i =0 ; i<(showList().length()) ; i++){
        }
    }
    concat(list2){
        if(this.head == null){
            this.head = list2.head
        }else{
            let runner = this.head
            while(runner.next!==null){ //while is not null so...
                runner = runner.next;
            }
            runner.next = list2.head
        }
        return this
    }
    splitOnVal(val){
        if(this.head == null){
            return null
        }else{
            let runner = this.head
            while(runner.next!==null){ //while is not null so...
                if(runner.data==val){
                    var node = new Node(runner.data); 
                    new Node(runner.data.next); 
                }
                runner = runner.next;
            }
        }
    }
}

var list1 = new singlyLinkList(); // create object
var list2 = new singlyLinkList(); // create object
// list2.insertAtBack(5)

list1.insertAtBack(1)
list1.insertAtBack(2)
list2.insertAtBack(3)
list2.insertAtBack(4)

list1.splitOnVal(2)
// list1.concat(list2)
// newList.removeHead()

// list1.showList()
// console.log(list1)
