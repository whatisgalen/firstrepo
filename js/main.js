
// DECLARE ARRAYS

var zodiacArray = [

{
	sign:"Sagittarius",
	range:"November 22 - December 21",
	horoscope:"you'll reap the consequences of an impulsive decision you made in the past",
	src:"./img/sagittarius.jpg"
},

{
	sign:"Capricorn",
	range:"December 22 - January 19",
	horoscope:0,
	src:"./img/capricorn.jpg"

},

{
	sign:"Aquarius",
	range:"January 20 - February 18",
	horoscope:0,
	src:"./img/aquarius.jpg"
},

{
	sign:"Pisces",
	range:"February 19 - March 20",
	horoscope:0,
	src:"./img/pisces.jpg"
},

{
	sign:"Aries",
	range:"March 21 - April 19",
	horoscope:0,
	src:"./img/aries.jpg"
},

{
	sign:"Taurus",
	range:"April 20 - May 20",
	horoscope:0,
	src:"./img/taurus.jpg"
},

{
	sign:"Gemini",
	range:"May 21 - June 20",
	horoscope:0,
	src:"./img/gemini.jpg"
},

{
	sign:"Cancer",
	range:"June 21 - July 22",
	horoscope:0,
	src:"./img/cancer.jpg"
},

{
	sign:"Leo",
	range:"July 23 - August 22",
	horoscope:0,
	src:"./img/leo.jpg"
},

{
	sign:"Virgo",
	range:"August 23 - September 22",
	horoscope:0,
	src:"./img/leo.jpg"
},

{
	sign:"Libra",
	range:"September 23 - October 22",
	horoscope:0,
	src:"./img/libra.jpg"
}
,
{
	sign:"Scorpio",
	range:"October 23 - November 21",
	horoscope:0,
	src:"./img/scorpio.jpg"
}

]


// DECLARE VARIABLES
var container = document.getElementById('container')


var row1 = document.getElementById('row1')
var row2 = document.getElementById('row2')
var row3 = document.getElementById('row3')

var winterImgContainer = document.createElement('div')
var winterImg = document.createElement('img')
var winterImgHover = document.createElement('div')
var winterImgHoverText = document.createElement('span')

var springImgContainer = document.createElement('div')
var springImg = document.createElement('img')
var springImgHover = document.createElement('div')
var springImgHoverText = document.createElement('span')

var summerImgContainer = document.createElement('div')
var summerImg = document.createElement('img')
var summerImgHover = document.createElement('div')
var summerImgHoverText = document.createElement('span')

var fallImgContainer = document.createElement('div')
var fallImg = document.createElement('img')
var fallImgHover = document.createElement('div')
var fallImgHoverText = document.createElement('span')
var season = 'none'

var h1 = document.createElement('h1')

var zodiacFeatureContainer = document.createElement('div')
var zodiacFeaturePlaceholder = document.createElement('h1')
var zodiacContainer1 = document.createElement('div')
var zodiacContainer2 = document.createElement('div')
var zodiacContainer3 = document.createElement('div')
var zodiacContainer4 = document.createElement('div')
var zodiacImg1 = document.createElement('img')
var zodiacImg2 = document.createElement('img')
var zodiacImg3 = document.createElement('img')
var zodiacImg4 = document.createElement('img')
var zodiacLabel1 = document.createElement('h3')
var zodiacLabel2 = document.createElement('h3')
var zodiacLabel3 = document.createElement('h3')
var zodiacLabel4 = document.createElement('h3')

var selectedSign = document.createElement('div')
var horoscope = document.createElement('p')

// var replacer = document.getElementById('zodiacFeatureContainer').childNodes[0]

// APPENDCHILDREN



row1.appendChild(h1);
h1.innerHTML = 'What season were you born in?';

row2.appendChild(winterImgContainer);
winterImgContainer.appendChild(winterImg);
winterImgContainer.appendChild(winterImgHover);
winterImgHover.appendChild(winterImgHoverText);
winterImgHoverText.innerHtml = 'Winter';

row2.appendChild(springImgContainer);
springImgContainer.appendChild(springImg);
springImgContainer.appendChild(springImgHover);
springImgHover.appendChild(springImgHoverText)
springImgHoverText.innerHtml = 'Spring';

row2.appendChild(summerImgContainer);
summerImgContainer.appendChild(summerImg);
summerImgContainer.appendChild(summerImgHover);
summerImgHover.appendChild(summerImgHoverText)
summerImgHoverText.innerHtml = 'Summer';

row2.appendChild(fallImgContainer);
fallImgContainer.appendChild(fallImg);
fallImgContainer.appendChild(fallImgHover);
fallImgHover.appendChild(fallImgHoverText);
fallImgHoverText.innerHtml = 'Fall';


//SET CLASSES

row1.className += ' col-md-12';
row2.className += ' col-md-12';
row3.className += ' col-md-12';


winterImgContainer.className = 'container1 col-md-3'
// winterImg.className = 'col-md-3'
winterImgHover.className = 'overlay'
winterImgHoverText.className = 'hovertext'

springImgContainer.className = 'container1 col-md-3'
// springImg.className = 'col-md-3'
springImgHover.className = 'overlay'
springImgHoverText.className = 'hovertext'

summerImgContainer.className = 'container1 col-md-3'
// summerImg.className = 'col-md-3'
summerImgHover.className = 'overlay'
summerImgHoverText.className = 'hovertext'

fallImgContainer.className = 'container1 col-md-3'
// fallImg.className = 'col-md-3'
fallImgHover.className = 'overlay'
fallImgHoverText.className = 'hovertext'

zodiacContainer1.className = 'col-md-3'
zodiacContainer2.className = 'col-md-3'
zodiacContainer3.className = 'col-md-3'
zodiacContainer4.className = 'col-md-3'


// // SET ATTRIBUTES

// h1.setAttribute('id','header')

winterImg.setAttribute('src','./img/winter.png');
winterImgContainer.setAttribute('id','winter');

springImg.setAttribute('src','./img/spring.png');
springImgContainer.setAttribute('id','spring');

summerImg.setAttribute('src','./img/summer.png');
summerImgContainer.setAttribute('id','summer');

fallImg.setAttribute('src','./img/fall.png');
fallImgContainer.setAttribute('id','fall');

h1.setAttribute('id','title')
zodiacFeatureContainer.setAttribute('id','zodiacFeatureContainer')
zodiacFeatureContainer.setAttribute('id','feature')
zodiacFeaturePlaceholder.setAttribute('id','zodiac-title')

// zodiacImg1.setAttribute('id','zodiacImg1')
// zodiacImg2.setAttribute('id','zodiacImg2')
// zodiacImg3.setAttribute('id','zodiacImg3')
// zodiacImg4.setAttribute('id','zodiacImg4')





// // REMOVECHILDREN
// row1.REMOVECHILDREN(element)



//ZODIAC SCRIPTS THAT GET CALLED BY THE LISTENERS
function featureZodiac1()  {

	console.log('Zodiac Sign 1 selected')

//innerHTML the h1 in row1 to "Looks like you're a..."
	document.getElementById('title').innerHTML = "Looks like you're a...";

//move whatever's in the featureContainer back to row3
	document.getElementById('zodiacFeatureContainer').replaceChild(zodiacContainer1, firstChild);

//innerHTML the zodiac title (h1) to feature the zodiacArray[i].sign
	document.getElementById('zodiac-title').innerHTML = zodiacArray[0].sign;



//then, move the zodiacContainer to row2, insert horoscope, & add an <hr>
	// zodiacFeatureContainer.appendChild(zodiacContainer1);
	document.getElementById('zodiacContainer1').innerHTML += ' <br>' + zodiacArray[0].horoscope;
	zodiacContainer1.innerHTML += ' <br><hr>';

//change featured zodiacContainer class to col-md-12
	document.getElementById('zodiacContainer1').classList.remove("col-md-3");
//adjust the classes for the remainding zodaicContainer's
	document.getElementById('zodiacContainer2').className = 'col-md-4';
	document.getElementById('zodiacContainer3').className = 'col-md-4';
	document.getElementById('zodiacContainer4').className = 'col-md-4';
}

function featureZodiac2() {
	
	console.log('Zodiac Sign 2 selected')

	//innerHTML the h1 in row1 to "Looks like you're a..."
	document.getElementById('title').innerHTML = "Looks like you're a...";

//innerHTML the zodiac title (h1) to feature the zodiacArray[i].sign
	document.getElementById('zodiac-title').innerHTML = zodiacArray[1].sign;

//then, move the zodiacContainer to row2, insert horoscope, & add an <hr>
	zodiacFeatureContainer.appendChild(zodiacContainer2);
	document.getElementById('zodiacContainer2').innerHTML += ' <br>' + zodiacArray[1].horoscope;
	zodiacContainer2.innerHTML += ' <br><hr>';

//change featured zodiacContainer class to col-md-12
	document.getElementById('zodiacContainer2').classList.remove("col-md-3");
//adjust the classes for the remainding zodaicContainer's
	document.getElementById('zodiacContainer1').className = 'col-md-4';
	document.getElementById('zodiacContainer3').className = 'col-md-4';
	document.getElementById('zodiacContainer4').className = 'col-md-4';
}

function featureZodiac3() {
	
	console.log('Zodiac Sign 3 selected')

	//innerHTML the h1 in row1 to "Looks like you're a..."
	document.getElementById('title').innerHTML = "Looks like you're a...";

//innerHTML the zodiac title (h1) to feature the zodiacArray[i].sign
	document.getElementById('zodiac-title').innerHTML = zodiacArray[2].sign;

//then, move the zodiacContainer to row2, insert horoscope, & add an <hr>
	zodiacFeatureContainer.appendChild(zodiacContainer3);
	document.getElementById('zodiacContainer3').innerHTML += ' <br>' + zodiacArray[2].horoscope;
	zodiacContainer3.innerHTML += ' <br><hr>';

//change featured zodiacContainer class to col-md-12
	document.getElementById('zodiacContainer3').classList.remove("col-md-3");
//adjust the classes for the remainding zodaicContainer's
	document.getElementById('zodiacContainer2').className = 'col-md-4';
	document.getElementById('zodiacContainer1').className = 'col-md-4';
	document.getElementById('zodiacContainer4').className = 'col-md-4';
}

function featureZodiac4() {
	
	console.log('Zodiac Sign 4 selected')

	//innerHTML the h1 in row1 to "Looks like you're a..."
	document.getElementById('title').innerHTML = "Looks like you're a...";

//innerHTML the zodiac title (h1) to feature the zodiacArray[i].sign
	document.getElementById('zodiac-title').innerHTML = zodiacArray[3].sign;

//then, move the zodiacContainer to row2, insert horoscope, & add an <hr>
	zodiacFeatureContainer.appendChild(zodiacContainer4);
	document.getElementById('zodiacContainer4').innerHTML += ' <br>' + zodiacArray[3].horoscope;
	zodiacContainer4.innerHTML += ' <br><hr>';

//change featured zodiacContainer class to col-md-12
	document.getElementById('zodiacContainer4').classList.remove("col-md-3");
//adjust the classes for the remainding zodaicContainer's
	document.getElementById('zodiacContainer2').className = 'col-md-4';
	document.getElementById('zodiacContainer3').className = 'col-md-4';
	document.getElementById('zodiacContainer1').className = 'col-md-4';
}


//ADD ZODIAC LISTENER SCRIPT THAT GETS EMBEDDED INTO EACH SEASON SCRIPT
function addZodiacListeners() {
document.getElementById('zodiacContainer1').addEventListener('click',featureZodiac1);
document.getElementById('zodiacContainer2').addEventListener('click',featureZodiac2);
document.getElementById('zodiacContainer3').addEventListener('click',featureZodiac3);
document.getElementById('zodiacContainer4').addEventListener('click',featureZodiac4);

 }

//SEASONAL FUNCTIONS===========================================================
function loadWinterSigns() {
	while (row2.hasChildNodes()) {
        row2.removeChild(row2.firstChild);
    }
	console.log('winter signs loading...')

	//replace header text
    h1.innerHTML = "Find your Zodiac Sign"
    row2.appendChild(zodiacFeatureContainer);
    zodiacFeatureContainer.appendChild(zodiacFeaturePlaceholder).innerHTML = '???';
    
    //ZODIAC CONTAINERS WITH CONTENT THAT ONLY REFERENCES ARRAY PROPERTIES
    row3.appendChild(zodiacContainer1);
    zodiacContainer1.appendChild(zodiacImg1);
    zodiacContainer1.appendChild(zodiacLabel1).innerHTML = zodiacArray[0].sign + "<br>" + zodiacArray[0].range;
    zodiacContainer1.setAttribute('id','zodiacContainer1');
    zodiacImg1.setAttribute('src',zodiacArray[0].src);

    
    row3.appendChild(zodiacContainer2);
    zodiacContainer2.appendChild(zodiacImg2);
    zodiacContainer2.appendChild(zodiacLabel2).innerHTML = zodiacArray[1].sign  + "<br>" + zodiacArray[1].range;
    zodiacContainer2.setAttribute('id','zodiacContainer2');
    zodiacImg2.setAttribute('src',zodiacArray[1].src);
   
    row3.appendChild(zodiacContainer3);
    zodiacContainer3.appendChild(zodiacImg3);
    zodiacContainer3.appendChild(zodiacLabel3).innerHTML = zodiacArray[2].sign + "<br>" + zodiacArray[2].range;
    zodiacContainer3.setAttribute('id','zodiacContainer3');
    zodiacImg3.setAttribute('src',zodiacArray[2].src);

    row3.appendChild(zodiacContainer4);
    zodiacContainer4.appendChild(zodiacImg4);
    zodiacContainer4.appendChild(zodiacLabel4).innerHTML = zodiacArray[3].sign + "<br>" + zodiacArray[3].range;
    zodiacContainer4.setAttribute('id','zodiacContainer4');
    zodiacImg4.setAttribute('src',zodiacArray[3].src);

    addZodiacListeners();

	}
function loadSpringSigns() {
		while (row2.hasChildNodes()) {
        row2.removeChild(row2.firstChild);
    }
		console.log('spring signs loading...');
	}
function loadSummerSigns() {
		while (row2.hasChildNodes()) {
        row2.removeChild(row2.firstChild);
    }
		console.log('summer signs loading...');
	}
function loadFallSigns() {
		while (row2.hasChildNodes()) {
        row2.removeChild(row2.firstChild);
    }
		console.log('fall signs loading...');


	}

document.getElementById('winter').addEventListener('click',loadWinterSigns);
document.getElementById('spring').addEventListener('click',loadSpringSigns);
document.getElementById('summer').addEventListener('click',loadSummerSigns);
document.getElementById('fall').addEventListener('click',loadFallSigns);


//ZODIAC FUNCTIONS=========================================================




// window.onload=featureZodiac1();


//  row1.REMOVECHILDREN(element)
//  //MAYBE WITH FADING ANIMATION?
//  container.appendChild(row2)
//  container.appendChild(row3)

//  row2.appendChild()
// }

// console.log((zodiacArray.sign)zodiacArr);

// console.log(summer)


//DECLARE ARRAYS

// console.log(zodiacArray[0])
	// for (var i = 0; i <=1; i++) {
	// 	if (zodiacArray[i].sign === "Sagittarius") {
	// 		console.log(zodiacArray[i].sign + " is a stupid name")
	// 	}
	// }


// console.log(zodiacArray[0].sign)

// console.log(zodiacArray[0])
// 	for (var i = 0; i <=1; i++) {
// 		if (zodiacArray[i].sign === "Sagittarius") {
// 			console.log(zodiacArray[i].sign + " is a stupid name")
// 		}
// 	}
