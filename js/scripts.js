
// THIS IS FOR FORM CONTROL GETTING DATA USING JQUERY.
// $("#blanks form").submit(function() {
//     var person1Input = $("input#person1").val();
//         var person2Input = $("input#person2").val();
//         var animalInput = $("input#animal").val();
//         var exclamationInput = $("input#exclamation").val();
//         var verbInput = $("input#verb").val();
//         var nounInput = $("input#noun").val();

//         $(".person1").text(person1Input);
//         $(".person2").text(person2Input);
//         $(".animal").text(animalInput);
//         $(".exclamation").text(exclamationInput);
//         $(".verb").text(verbInput);
//         $(".noun").text(nounInput);

//     $("#story").show();

//     event.preventDefault();
// });



// THIS IS FOR EVENTS AND EVENT LISTENERS.
// $("h1").click(function(){
//     $("h1").toggle();
//     $("h3").toggle();
// });
// $("h3").click(function(){
//     $("h3").toggle();
//     $("h1").toggle();
// });




// FOR CLICK EVENTS TO OPEN THE MODEL.
// $("div#click-one").click(function(event) {
//   whatToSay = "Hello!";
//   alert(whatToSay);
// });

// $("div#click-two").click(function(event) {
//   alert(whatToSay);
// });



// FOR CHANGING THE PAGE THEME WITH EVERY CLICK.
// $("button#green").click(function() {
//   $("body").removeClass();  
//   $("body").addClass("green-background");
// });

// $("button#yellow").click(function() {
//   $("body").removeClass();  
//   $("body").addClass("yellow-background");
// });

// $("button#red").click(function() {
//   $("body").removeClass();  
//   $("body").addClass("red-background");
// });


// $("button#origin").click(function() {
//   $("body").removeClass();  
// });



// FOR APPENDING AND PREPENDING ITEMS.
// $("button#hello").click(function() {
//   $("h2").prepend("Hello!");
// });

// $("button#goodbye").click(function() {
//   $("ul").prepend("<li>Goodbye!</li>");
// });

// $("button#stop").click(function() {
//   $("ul").prepend("<li>Stop copying me!</li>");
// });


// CREATING AN ARRAY
// var inputT =prompt("write something (Seperate with commas) ");
// var arry = inputT.split(",");
// var entre = [];
 
// arry.map(function(enta){
//     entre.push(enta);
// });
 
// alert(entre);



//**********PIG LATIN.....********** 

var str= prompt("give me a sentence:");

// function pigIt(str){
//   var normalArr = str.split(" "); 
//   var pigArr = []; 
//   newWord = ""; 
//   for (var word in normalArr){
//       newWord = normalArr[word].substring(2) + normalArr[word].substring(0, 2) + "ay"; 
//       pigArr.push(newWord); 
//   }
//  return pigArr.join(seperator = " "); 
// }

// var results = pigIt(str);
// alert(results);



// *****NEW BUT SAME FOR PIG LATIN.... This one works better*******
var VOWELS = ['a', 'e', 'i', 'o', 'u'];


function translate(str) {
  return str.split(' ').map(translateWord).join(' ');
}
// this equets **word** to data given to translateWord array
function translateWord(word) {
    console.log(word);

  for(var i = 0; i < word.length; i++) {
    if(VOWELS.indexOf(word[i]) !== -1) break;
    if(word.slice(i, i+2) === 'qu') i += 1;
  };
  return word.slice(i) + word.slice(0, i) + 'ay';
}

var results = translate(str);
alert(results);


// I AM NOT SURE IF THIS MEETS OUR GOALS******
// function pigIt(str){
//   let newArr = [];
//   let arr = str.split(" ");
//   for (let i=0; i<arr.length; i++) {
//     if (arr[i]!='?' && arr[i]!='!') {
//       let word = arr[i];
//       let letter = word.charAt(0);
//       let newWord = word.slice(1) + letter + "ay";
//       newArr.push(newWord);
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr.join(" ");
// }

// var results = pigIt(str);
// alert(results);


// *********END OF PIG LATIN**********