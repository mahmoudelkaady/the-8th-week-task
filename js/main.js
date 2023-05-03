function info(...infor) {
  document.write(`<div>`);
  for (let i = 0; i < infor.length; i++) {
    typeof infor[i] === "string"
      ? (user = infor[i])
      : typeof infor[i] === "number"
      ? (age = infor[i])
      : typeof infor[i] === "boolean" && infor[i] === true
      ? (stat = "available")
      : (stat = "not available");
  }
  document.write(
    `hello ${user} , your age is ${age} , you are ${stat} for here`
  );
  document.write(`</div>`);
}

info("medaht", 21, false);
info("medaht", true, 21);
info(21, "medaht", true);

/////////////////////////////////////////

function sayHello(theName, theGender) {
  //   if (theGender === "Male") {
  //     console.log(`hello mr ${theName}`);
  //   } else if (theGender === "Female") {
  //     console.log(`hello miss ${theName}`);
  //   } else {
  //     console.log(`hello ${theName}`);
  //   }

  //
  theGender === "Male"
    ? console.log(`hello mr ${theName}`)
    : theGender === "Female"
    ? console.log(`hello miss ${theName}`)
    : console.log(`hello ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

///////////////////////

function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
  } else if (operation === undefined || operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else {
    console.log(firstNum * secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

//////////////////////////////

function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(theAge * 12); // month
    console.log(theAge * 12 * 30); //day
    console.log(theAge * 12 * 30 * 24); //hour
    console.log(theAge * 12 * 30 * 24 * 60); //minuet
    console.log(theAge * 12 * 30 * 24 * 60 * 60); //secend
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

//////////////////////////////////

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value=${i}>`);
    document.write(i);
    document.write(`</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

///////////////////////

function multiply(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
      continue;
    }
    console.log(parseInt(numbers[i]) * numbers[++i]);
  }
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

console.log(Error);
