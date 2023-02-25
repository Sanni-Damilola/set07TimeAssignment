// Am And Pm
// morning = 12am - 11am
// afternoon = 12pm - {15pm or 3pm}
// evening = {16pm or 6} - {23pm or 11pm}

let check = 24; // check time {comparism}
let check_Morning__Afternoon_And_Evening = "pm"; // compare when it morning, afternon or evening {comparism}

if (
  check <= 12 &&
  check_Morning__Afternoon_And_Evening.toLowerCase() === "am" 
) {
  console.log(
    `Time is ${check}${check_Morning__Afternoon_And_Evening}, Good Morning`
  ); // checking morning
} else if (
  check <= 15 &&
  check_Morning__Afternoon_And_Evening.toLowerCase() === "pm"
) {
  console.log(
    `Time is ${check}${check_Morning__Afternoon_And_Evening}, Good Afternoon`
  ); // checking Afternoon
} else if (
  check >= 16 &&
  check_Morning__Afternoon_And_Evening.toLowerCase() === "pm"
) {
  console.log(
    `Time is ${check}${check_Morning__Afternoon_And_Evening}, Good Evening`
  ); // checking Evening
} else {
  console.log("input the correct value");
}





