// // for loops
// for(let x = 0; x < 10; x ++){
//   console.log("Count:", x);
// }

// //while loop

// let a = 0;
//  while (a  < 6){
//   console.log("The value of i = ${a}")
//   a++;
//  }


// // Do-while loop
// let j = 1;

// do{
//   console.log("count:", j);
//   j++;
//   } while(j < 5)




let score = parseInt(prompt('Enter the score: '));
let grade;

    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80 && score <= 89) {
        grade = 'B';
    } else if (score >= 70 && score <= 79) {
        grade = 'C';
    } else if (score >= 60 && score <= 69) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    console.log(`Score: ${score}, Grade: ${grade}`);


let start = parseInt(prompt('Enter the starting number: '));
let end = parseInt(prompt('Enter the ending number: '));

if (start <= end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
    }
} else {
    console.log('Invalid range, starting number should be less than or equal to the ending number.');
}

