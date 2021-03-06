
var deck = shortDeck; // change this if you want to test with longDeck
var len = deck.length;
var i = len-1;
var j = 1;

	
function DominionSort(){
	this.name1 = document.getElementById("cardName1");
	this.cost1 = document.getElementById("cardCost1");
	this.desc1 = document.getElementById("cardDescription1");
	this.name2 = document.getElementById("cardName2");
	this.cost2 = document.getElementById("cardCost2");
	this.desc2 = document.getElementById("cardDescription2");
	
	this.setCard1 = function(card){
		this.name1.innerHTML=card.name;
		this.cost1.innerHTML=card.cost;
		this.desc1.innerHTML=card.description;
	}
	
	this.setCard2 = function(card){
		this.name2.innerHTML=card.name;
		this.cost2.innerHTML=card.cost;
		this.desc2.innerHTML=card.description;
	}
}

//Randomize the deck.
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function startSort(){
	var domSort = new DominionSort();
	shuffle(deck);
	
	domSort.setCard1(deck[j-1]);
	domSort.setCard2(deck[j]);
}

function continueSort(sel){
	//basically a user-driven bubble sort.
	if (sel==2){
		var temp = deck[j-1];
		deck[j-1] = deck[j];
		deck[j] = temp;
	}
	j++;
	if (j>i) {
		j = 1;
		i--;
	}
	if (i<0) Done();
	
	var domSort = new DominionSort();
	
	domSort.setCard1(deck[j-1]);
	domSort.setCard2(deck[j]);
}

function selectCard1(){
	continueSort(1);
}

function selectCard2(){
	continueSort(2);
}

function Done()
{
	document.getElementById("divDone").style.visibility = "visible";
	document.getElementById("tableDiv").style.visibility = "hidden";
	
	var str = "";
	for (var i = 0; i < deck.length; i++){
		str += deck[i].name + "  $" + deck[i].cost + "<br />";
	}
	document.getElementById("divDeck").innerHTML = str;
}
