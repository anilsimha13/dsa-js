function eligibleToVote(age) {
  if (age >= 18 && age <= 119) {
    console.log("You are eligible to Vote");
  } else if (age < 1 || age > 120) {
    console.log("Enter a valid age");
  } else {
    console.log(
      "You are not eligible to vote. Wait for",
      18 - age + " more years to vote",
    );
  }
}

eligibleToVote(9);
eligibleToVote(-1);
eligibleToVote(190);
eligibleToVote(20);
eligibleToVote(119);

//Check a number is Even or Odd

function checkNumberEvenOrOdd(pleaseEnterNumber) {
  if (pleaseEnterNumber % 2 == 0) {
    console.log("Given " + pleaseEnterNumber + " number is a Even Number");
  } else {
    console.log("Given " + pleaseEnterNumber + " number is a Odd Number");
  }
}
checkNumberEvenOrOdd(3);
checkNumberEvenOrOdd(4);
