'use strict';
// greeting user
alert('Welcome To my Website ');
//ask the user if they want to play the game
let play = confirm('Do You want to play a game to get knowing about me ');
//if true do this code
if (play) {
  let counter = 0;
  let userName = '';

  userName = prompt('Tell us Your Name');
  document.getElementById('userName').innerHTML = 'Welcome ' + userName;
  // eslint-disable-next-line no-inner-declarations
  function favTeam() {
    let questionOne = prompt('What is My favorite Team');
    questionOne = questionOne.toLowerCase();
    console.log(questionOne);
    if (questionOne === 'milan' || questionOne === 'acmilan') {
      alert('Now You know about my Fav Team');
      // eslint-disable-next-line no-unused-vars
      counter++;
    } else {
      alert('You Should Support AC Milan bro :p ');
    }
  }
  favTeam();
  // eslint-disable-next-line no-inner-declarations
  function favFood() {
    let questionTwo = prompt('What is my favorite Food');
    questionTwo = questionTwo.toLowerCase();
    console.log(questionTwo);
    if (questionTwo === 'mansaf') {
      alert('Now You know about my Fav Food');
      // eslint-disable-next-line no-unused-vars
      counter++;
    } else {
      alert('You Should Try to eat mansaf ');
    }
  }
  favFood();
  // eslint-disable-next-line no-inner-declarations
  function city() {
    let questionThree = prompt('What is my city');
    questionThree = questionThree.toLowerCase();
    console.log(questionThree);
    if (questionThree === 'irbid' || questionThree === 'irbed') {
      alert('Now You know about my Cites');
      // eslint-disable-next-line no-unused-vars
      counter++;

    } else {
      alert('You Should Visit Irbid  ');
    }
  }
  city();
  // eslint-disable-next-line no-inner-declarations
  function degree() {
    let questionFour = prompt('On any feild I have my BC degree');
    console.log(questionFour);
    questionFour = questionFour.toLowerCase();
    if (questionFour === 'se' || questionFour === 'software' || questionFour === 'computer' || questionFour === 'software engineering') {
      alert('Yeah that\'s right ');
      // eslint-disable-next-line no-unused-vars
      counter++;

    } else {
      alert('No problem a lot of people gussing that wrong :D');
    }
    /*if ((questionOne === 'milan' || questionOne === 'acmilan') && (questionTwo === 'mansaf') && (questionThree === 'irbid' || questionThree === 'irbed') && (questionFour === 'se' || questionFour === 'software' || questionFour === 'computer' || questionFour === 'software engineering')) {
      document.getElementById('myFavTeam').innerHTML = questionOne;
      document.getElementById('myFavFood').innerHTML = questionTwo;
      document.getElementById('myCites').innerHTML = questionThree;
      document.getElementById('myBcDegree').innerHTML = questionFour;
      document.getElementById('myName').innerHTML = 'Mohmmad Alazzam';
      document.getElementById('myAge').innerHTML = 26;
      document.getElementById('aboutMeTable').style.display = 'block';
    }
    else {
      document.getElementById('preef').style.display = 'block';
    }*/
  }
  degree();
  // eslint-disable-next-line no-inner-declarations
  function five() {
    let questionFive = prompt('Do i prefer to watch a series or a movie ');
    console.log(questionFive);
    questionFive = questionFive.toLowerCase();
    if (questionFive === 'series') {
      alert('Yeah ...');
      // eslint-disable-next-line no-unused-vars
      counter++;

    } else {
      alert('No...');
    }
  }
  five();
  // eslint-disable-next-line no-inner-declarations
  function six() {
    let trying = 1;
    while (trying <= 4) {
      let questionSix = prompt('let\'s Guess my age');
      // console.log(parseInt(questionSix));
      if (parseInt(questionSix) === 26) {
        // eslint-disable-next-line no-unused-vars
        counter++;
        alert('You know my age now');
        break;
      }
      else if (parseInt(questionSix) > 26) {
        alert('too hight');
        questionSix;
        console.log(trying);

      } else if (parseInt(questionSix) < 26) {
        alert('too low');
        questionSix;
        console.log(trying);

      }
      // console.log(trying);
      trying++;
      console.log(trying);
    }
    if (trying === 5) {
      alert('My age is 26');
    }
  }
  six();
  // eslint-disable-next-line no-inner-declarations
  function seven() {
    let questionSeven = prompt('Let\'s guess one of my favorite series');
    let series = ['breakingBad', 'gameOfThrones', 'dexter', 'narcos'];
    // console.log(questionSeven);
    let correctGuess = 7;
    // console.log(questionSeven);
    for (let i = 0; i < correctGuess; i++) {
      for (let j = 0; j < series.length; j++) {
        if (questionSeven.toLowerCase() === series[j].toLowerCase()) {
          console.log('ddddddd');
          alert('One of the best series ever');
          i = 7;
          // eslint-disable-next-line no-unused-vars
          counter++;
          break;
        }

      }
      if (i === 7) {
        console.log(i);
        break;
      }
      questionSeven = prompt('try agin');
    }
    alert(`this is all my fav series ${series}`);
    if (counter < 4) {
      alert('You Got ' + counter + 'should play again :p');
    } else {
      alert('Congratiolation you Got ' + counter);
    }
  }
  seven();
}



// do this code
else {
  document.getElementById('preef').style.display = 'block';

}


