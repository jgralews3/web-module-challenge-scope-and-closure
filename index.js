// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * They both achieve the same function, but counter1 uses a closure to increase the count while counter2 uses a more traditional syntax.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter 1, it returns a function within another function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * Counter 1 would be preferable if it was the only counter used since it would save memory. However, Counter 2 would allow you to count many times on one page.
*/ 

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}



/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(min, max){
 return Math.floor(Math.random()*(max-min+1))+min;
}
// console.log (inning(0,2))


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, innings){
  let score = []
  let randomHome = [];
  let randomAway = [];
  for (let i=0;i<innings;i++){
    let randomHome2=(callback(0,2))
    randomHome.push({'Score': randomHome2})}
  for (let i=0;i<innings;i++){
    let randomAway2=(callback(0,2))
    randomAway.push({'Score': randomAway2})}
  const finalHome = randomHome.reduce((total, score) =>{return total += score.Score},0)
  const finalAway = randomAway.reduce((total, score) =>{return total += score.Score},0)
  score.push ({'Home': finalHome, 'Away': finalAway});
  return score;
}

// console.log (finalScore(inning, 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(callback, innings) {
  let inningtext = ['1st Inning:', '2nd Inning:', '3rd Inning:', '4th Inning:', '5th Inning:', '6th Inning:', '7th Inning:', '8th Inning:', '9th Inning:', 'Extra Innings:']
  let homeacc = 0;
  let awayacc = 0;
  let finalscore = [];
  for(let i=0; i<innings;i++){
    let newCount=()=>{
      return function(){
        homeacc = homeacc+(callback(0,2))
        awayacc = awayacc+(callback(0,2))
        return [homeacc, awayacc];
      }}
    const newCount1 = newCount();
    newCount1();
    finalscore.push(`${inningtext[i]} ${homeacc} - ${awayacc}`);
  }
  finalscore.push (`Final Score: ${homeacc} - ${awayacc}`)
  return finalscore;
}
console.log(scoreboard(inning, 9))


