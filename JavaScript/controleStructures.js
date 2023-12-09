let is_num = 15;

switch (true) {
    case (is_num >= 1 && is_num <= 10):
        console.log("The number is between 1 and 10.");
        break;
    case (is_num >= 11 && is_num <= 20):
        console.log("The number is between 11 and 20.");
        break;
    case (is_num >= 21 && is_num <= 30):
        console.log("The number is between 21 and 30.");
        break;
    default:
        console.log("The number is between 1 and 30.");
        break;
}

//Create a switch..case statement with the following conditions:
// Students that got an A will get a Pasta
// Students that got a B will get an Ice Cream
// Students that got a C will get a Candy
// For any other value, print "No reward to give."

let grade = "B";

switch (grade) {
    case ("A"):
        console.log("Pasta");
        break;
    case ("B"):
        console.log("Ice Cream");
        break;
    case ("C"):
        console.log("Candy");
        break;
    default:
        console.log("No reward to give");
        break;
}