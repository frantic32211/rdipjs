//Start of Calculator (TASK 1)

var num1 = 0;
var num2 = 0;
var operatorSign;
var finalResult;

var number = document.getElementsByClassName("numberBtn");
var operator = document.getElementsByClassName("operatorBtn");
var numberDisplay = document.querySelector("#displayNumber");

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", (event) => {
    num2 = numberDisplay.innerHTML;
    operatorSign = event.target.value;
    numberDisplay.innerHTML = operatorSign;
  });
}

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", (event) => {
    numberDisplay.innerHTML += event.target.value;
    num1 = numberDisplay.innerHTML;
  });
}

var value = document.getElementById("equalsBtn");

if (value) {
  value.addEventListener("click", () => {
    var numberOne = parseInt(num1.substring(1));
    var numberTwo = parseInt(num2);

    if (operatorSign == "+") {
      finalResult = addNumbers(numberOne, numberTwo);
    } else if (operatorSign == "-") {
      finalResult = subtractNumbers(numberOne, numberTwo);
    } else if (operatorSign == "*") {
      finalResult = multiplyNumbers(numberOne, numberTwo);
    } else if (operatorSign == "/") {
      finalResult = divideNumbers(numberOne, numberTwo);
    } else if (operatorSign == "%") {
      finalResult = percentNumbers(numberOne, numberTwo);
    } else if (operatorSign == "m") {
      finalResult = absoluteNumbers(numberTwo);
    } else if (operatorSign == "s") {
      finalResult = sqrootNumbers(numberTwo);
    }

    numberDisplay.innerHTML = finalResult;
  });
}

var reset = document.getElementById("resetBtn");
if (reset) {
  reset.addEventListener("click", () => {
    numberDisplay.innerHTML = "";
  });
}

var del = document.getElementById("delBtn");
if (del) {
  del.addEventListener("click", () => {
    numberDisplay.innerHTML = numberDisplay.innerHTML.substring(
      0,
      numberDisplay.innerHTML.length - 1
    );
  });
}

function addNumbers(num1, num2) {
  return num1 + num2;
}
function subtractNumbers(num1, num2) {
  return num2 - num1;
}
function multiplyNumbers(num1, num2) {
  return num1 * num2;
}
function divideNumbers(num1, num2) {
  var div = num1 / num2;
  if (div * 1000 === parseInt("div" + "000")) return div;
  else return Math.round(div * 1000) / 1000;
}
function percentNumbers(num1, num2) {
  return Math.round((num1 / 100) * num2 * 1000) / 1000;
}
function absoluteNumbers(num) {
  return num > 0 ? num : (num *= -1);
}
function sqrootNumbers(num) {
  var sqroot = Math.sqrt(num);
  if (sqroot * 1000 === parseInt("sqrt" + "000")) return sqroot;
  else return Math.round(sqroot * 1000) / 1000;
}

// Start of Form Validation Page (TASK 2)

var resName;
var resNumber;
var resEmail;

var nameOFUser = document.getElementById("nameId");
var pNumberOFUser = document.getElementById("pNumberId");
var emailOFUser = document.getElementById("emailId");
var formSubmit = document.getElementById("formFill");

if (formSubmit) {
  formSubmit.addEventListener("focusout", () => {
    if (resName && resNumber && resEmail) {
      document.getElementById("submitBtn").disabled = false;
    }
  });
}

if (formSubmit) {
  formSubmit.addEventListener("submit", (e) => {
    return alert("Your form has been submitted successfully!");
  });
}
if (nameOFUser) {
  nameOFUser.addEventListener("focusout", (event) => {
    resName = /^[a-zA-Z\s*]+$/.test(event.target.value);
  });
}

if (pNumberOFUser) {
  pNumberOFUser.addEventListener("focusout", (event) => {
    resNumber = /^[0-9]{10}$/.test(event.target.value);
  });
}

if (emailOFUser) {
  emailOFUser.addEventListener("focusout", (event) => {
    resEmail = /[a-zA-Z0-9_\.\-]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(
      event.target.value
    );
  });
}

//Start of Palindrome and Anagrams (TASK 3)

//Palindrome String

var str = "";

var palindromestring = document.getElementById("plndrme");
var inputString = document.getElementById("formPalindrome");

if (palindromestring) {
  palindromestring.addEventListener("focusout", (event) => {
    return (str = event.target.value);
  });
}

if (inputString) {
  inputString.addEventListener("submit", () => {
    if (isPalindrome(str)) return alert(`${str} is a Palindrome String`);
    else return alert("It is not a Palindrome String");
  });
}

const isPalindrome = (palindromeString) => {
  palindromeString = palindromeString.toLowerCase();
  for (let i = 0; i < palindromeString.length; i++) {
    if (
      palindromeString[i] !== palindromeString[palindromeString.length - 1 - i]
    ) {
      return false;
    }
  }
  return true;
};

//Anagram String

var one;
var two;

var anagramStringOne = document.getElementById("stringOfWords");

var anagramStringTwo = document.getElementById("word");
var inputstring = document.getElementById("formAnagram");

if (anagramStringOne) {
  anagramStringOne.addEventListener("focusout", (event) => {
    return (one = event.target.value);
  });
}
if (anagramStringTwo) {
  anagramStringTwo.addEventListener("focusout", (event) => {
    return (two = event.target.value);
  });
}

if (inputstring) {
  inputstring.addEventListener("submit", (event) => {
    if (isAnagram(one, two))
      return alert(`${one} & ${two} are Anagram Strings`);
    else return alert("They are not Anagram Strings");
  });
}

const isAnagram = (stringOne, stringTwo) => {
  var newStringOne = stringOne
    .replace(/[\s]/g, "")
    .split("")
    .sort()
    .join("")
    .toLowerCase();
  var newStringTwo = stringTwo
    .replace(/[\s]/g, "")
    .split("")
    .sort()
    .join("")
    .toLowerCase();
  if (newStringOne == newStringTwo) return true;
  else return false;
};

// Start of The Game: "Who will SURVIVE?"

const valueOne = Math.floor(Math.random() * 1000) + 1;

const valueTwo = Math.floor(Math.random() * 1000) + 1;

var hOne = 0;
var cOne = 0;
var nOne = 0;
var hTwo = 0;
var cTwo = 0;
var nTwo = 0;

const getResult = () => {
  if (hOne == 1 && cTwo == 2) {
    return "HUMAN WINS!!!";
  } else if (hOne == 1 && nTwo == 2) {
    console.log("wkefh");
    return "HUMAN DIES!!!";
  } else if (hOne == 1 && hTwo == 2) {
    return "TIE";
  } else if (cOne == 1 && hTwo == 2) {
    return "HUMAN WINS!!!";
  } else if (cOne == 1 && nTwo == 2) {
    return "COCKROACH WINS!!!";
  } else if (cOne == 1 && cTwo == 2) {
    return "TIE";
  } else if (nOne == 1 && hTwo == 2) {
    return "HUMAN DIES!!!";
  } else if (nOne == 1 && cTwo == 2) {
    return "COCKROACH WINS!!!";
  } else if (nOne == 1 && nTwo == 2) {
    return "TIE";
  }
};

var btn = document.getElementById("btnId");
if (btn) {
  btn.addEventListener("click", () => {
    document.getElementById("playerOneIdVal").innerHTML = valueOne;

    document.getElementById("playerTwoIdVal").innerHTML = valueTwo;

    switch (valueOne % 3) {
      case 0:
        document.getElementById("playerOneId").innerHTML = "HUMAN";
        hOne = 1;
        break;
      case 1:
        document.getElementById("playerOneId").innerHTML = "COCKROACH";
        cOne = 1;
        break;
      case 2:
        document.getElementById("playerOneId").innerHTML = "NUCLEAR BOMB";
        nOne = 1;
        break;
    }
    switch (valueTwo % 3) {
      case 0:
        document.getElementById("playerTwoId").innerHTML = "HUMAN";
        hTwo = 2;
        break;
      case 1:
        document.getElementById("playerTwoId").innerHTML = "COCKROACH";
        cTwo = 2;
        break;
      case 2:
        document.getElementById("playerTwoId").innerHTML = "NUCLEAR BOMB";
        nTwo = 2;
        break;
    }
    return (document.getElementById("resuldId").innerHTML = `${getResult()}`);
  });
}
