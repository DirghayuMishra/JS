/*  there are two gymnastics teams, Dolphions and Koalas. They compete against each other 3 time. The winner with the highest average score wins the a trophy!
1. Calculate the average socre for each team, using the test data below.
2. Compare teams average scores to determine the winner of the competiotion, and print it to the console. Dont forget that there can be a draw so test for that as well.
3. BONUS 1 - Include a requiremnet for a minimum score of 100. With tjis rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HInt - use a logical operator to test for a minimum score, as well as multiple else-if blocks.
4. BONUS 2 - Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a greateroe rqual 100 points. Otherwise, no teams win the trophy.
TEST DATA : Dolphins score 96, 108, and 89. Koalas score 88,91, and 108
TEST DATA BONUS 1- Dolphins score 97, 112 and 101 Koalas score 109, 95 and 123
TEST DATA BONUS 2 - Dolphons score 97,112 ans 101 Koalas score 109, 95, and 106 */

//  TEST DATA

const avgDolphins = (90 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 108) / 3;

if (avgDolphins > avgKoalas) {
  console.log("Dolphins win");
} else if (avgDolphins === avgKoalas) {
  console.log("Match is Draw");
} else if (avgKoalas > avgDolphins) {
  console.log("Koalas win");
}
