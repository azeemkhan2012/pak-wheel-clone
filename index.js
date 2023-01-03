// var healthycity = ["karachi", "lahore", "karnatka"];

// var citycheck = prompt("Enter your City?");
// citycheck = citycheck.toLocaleLowerCase();

// var matchFound = false;

// for (var i = 0; i <= healthycity.length; i++) {
//   if (citycheck === healthycity[i]) {
//     matchFound = true;
//     alert("Congrates you have qualified for the next round");
//   break;
// }

// }
// if (matchFound === false) {
//   alert("Sorry Pack your bag and go home");
// }

// var firstNames = ["Uzair ", "Mabroor ", "Ammar ", "Haziz ", "Hasan "];
// var lastNames = ["Khan", "Alam", "Attari", "Qadri"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//   for (var j = 0; j < lastNames.length; j++) {
//     fullNames.push(firstNames[i] + lastNames[j]);
//   }
// }

// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
//   if (str.slice(i, i + 2) === " ") {
//     alert("No double spaces!");
//     break;
//   }
//   else {
//     alert("Dont come again");
//   }
// }

// var array_1 = ["Uzair","Azeem","Haziz","Mabroor","Ammar","Hasan","Hussain","1","2","56"];
// var new_Array_1 = array_1.slice(1, -1);
// var names = "Uzair";
// var new_names = names.slice(0,1);
// alert(new_Array_1);
// alert(new_names);

// var text = "How are You Brother";
// var seg_text = text.lastIndexOf("Brother");
// var element_text = text.length;
// var edited_text = text.replace("Brother", "Bhaya");
// var number_game = (1.11+2.00+5.1+6+8.6);
// var number_rounded = Math.round(number_game);
// var ceil_number = Math.random();
// Math.ceil(ceil_number);
// alert(ceil_number);
// alert (number_rounded);
// alert(number_game);
// alert(text);
// alert(edited_text);
// alert(seg_text);
// alert(element_text);
// alert(element_text - seg_text);

// function tellTime() {
//   var now = new Date();
//   var theHr = now.getHours();
//   var theMin = now.getMinutes();
//   alert("Current time: " + theHr + ":" + theMin);
// }

// tellTime();

// var dayOfWk = prompt("The Day of Week is :" );

// switch (dayOfWk) {
//   case "Sat":
//     alert("Whoopee");
//     break;
//   case "Sun":
//     alert("Whoopee");
//     break;
//   case "Fri":
//     alert("TGIF!");
//     break;
//   default:
//     alert("Shoot me now!");
// }
var zipEntered = prompt("Entr Your zip Code?": "53212");
function fillCity() {
  var cityName;
  var zipEntered = document.getElementById("zip").value;
  switch (zipEntered) {
    case "60608":
      cityName = "Chicago";
      break;
    case "68114":
      cityName = "Omaha";
      break;
    case "53212":
      cityName = "Milwaukee";
  }
  document.getElementById("fillcity").value = cityName;
}
