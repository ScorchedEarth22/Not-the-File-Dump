//Elf Food Factory TM
const elfFactory = (foodOne, foodTwo, foodThree) => {
    return {
      foodOne,
      foodTwo,
      foodThree,
    }
  }
  
  //Elf Groups
  const elfOne = elfFactory(1000, 2000, 3000); //Elf #1 ; Three Foods
  const elfTwo = elfFactory(4000); //Elf #2 ; One Food
  const elfThree = elfFactory(5000, 6000); //Elf #3 ; Two Foods
  const elfFour = elfFactory(7000, 8000, 9000); //Elf #4 ; Three Foods
  const elfFive = elfFactory(10000); //Elf #5 ; One Food
  
  //Group Total Function(s)
  function sumTotalForThree (obj) {
    return obj.foodOne + obj.foodTwo + obj.foodThree;
  }
  function sumTotalForTwo (obj) {
    return obj.foodOne + obj.foodTwo;
  }
  function sumTotalForOne (obj) {
    return obj.foodOne;
  }
  
  //Group Totals
  const totalElfOne = sumTotalForThree(elfOne); //Elf One Total
  const totalElfTwo = sumTotalForOne(elfTwo); //Elf Two Total
  const totalElfThree = sumTotalForTwo(elfThree); //Elf Three Total
  const totalElfFour = sumTotalForThree(elfFour); //Elf Four Total
  const totalElfFive = sumTotalForOne(elfFive); //Elf Five Total
  
//Day One Objective
const theChubbiestElf = function(mostCalories, snackElf) {
  //Calculating calorie amount:
  mostCalories = Math.max(totalElfOne, totalElfTwo, totalElfThree, totalElfFour, totalElfFive); 
  
  //Calculating the elf with the most calories:
  if (totalElfOne === Math.max(totalElfOne, totalElfTwo, totalElfThree, totalElfFour, totalElfFive)) {
    snackElf = 'Elf #1';
  } else if (totalElfTwo === Math.max(totalElfOne, totalElfTwo, totalElfThree, totalElfFour, totalElfFive)) {
    snackElf = 'Elf #2';
  } else if (totalElfThree === Math.max(totalElfOne, totalElfTwo, totalElfThree, totalElfFour, totalElfFive)) {
    snackElf = 'Elf #3';
  } else if (totalElfFour === Math.max(totalElfOne, totalElfTwo, totalElfThree, totalElfFour, totalElfFive)) {
    snackElf = 'Elf #4';
  } else if (totalElfFive === Math.max(totalElfOne, totalElfTwo, totalElfThree, totalElfFour, totalElfFive)) {
    snackElf = 'Elf #5';
  } else {
    snackElf = 'There is no snack elf. Prepare to die.';
  }
  
  //Answering day one's question:
  return `The elf carrying the most calories is ${snackElf}. They are carrying ${mostCalories} calories.`
}

  //Test Logs
  console.log(theChubbiestElf());
 