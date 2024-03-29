//implementing deque
//double ended queue, it allows items to beadded from the same side or remove, and on either side
//imagine a deck of cards which is where the name of the data structure comes from. You can take a card from the top or bottom of the deck and you can add a card to the top or bottom of a deck.
//what is the common cases to use deque? A steal Job Scheduling Algorithm, One example where a deque can be used is the A-Steal job scheduling algorithm. ... When one of the processors finishes execution of its own threads (i.e. its deque is empty), it can "steal" a thread from another processor: it gets the last element from the deque of another processor ("remove last element") and executes it.

function Deque(){
    this.stac=new Array();
    this.popback=function(){
        return this.stac.pop();
    }
    this.pushback=function(item){
       return this.stac.push(item);
    }
    this.popfront=function(){
        return this.stac.shift();
    }
    this.pushfront=function(item){
        return this.stac.unshift(item);
    }
}

//lets see what this line of code display
var deque=new Deque();
deque.pushfront("A");
deque.pushfront("B");
deque.pushback("C");
alert(deque.popfront("A"));
alert(deque.popback());
//it returns B followedby C

//what are the methods a deque must have?
// pop,push=>remove or add from the back or shift,unshift which removes or adds from the front

var Deque=require("double-ended-queue");
var deque=new Deque([1,2,3,4]);
deque.shift();//1
deque.pop();//4
