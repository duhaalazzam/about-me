'use strict';
// greeting user
alert('Welcome To my Website ');
//ask the user if they want to play the game
let play = confirm('Do You want to play a game to get knowing about me ');
//if true do this code
if (play) {
  let userName = '';
  userName = prompt('Tell us Your Name');
  document.getElementById('userName').innerHTML = 'Welcome ' + userName;

  let questionOne = prompt('What is My favorite Team');
  questionOne = questionOne.toLowerCase();
  console.log(questionOne);
  if (questionOne === 'milan' || questionOne === 'acmilan') {
    alert('Now You know about my Fav Team');
  } else {
    alert('You Should Support AC Milan bro :p ');
  }
  let questionTwo = prompt('What is my favorite Food');
  questionTwo = questionTwo.toLowerCase();
  console.log(questionTwo);
  if (questionTwo === 'mansaf') {
    alert('Now You know about my Fav Food');
  } else {
    alert('You Should Try to eat mansaf ');
  }
  let questionThree = prompt('What is my city');
  questionThree = questionThree.toLowerCase();
  console.log(questionThree);
  if (questionThree === 'irbid' || questionThree === 'irbed') {
    alert('Now You know about my Cites');
  } else {
    alert('You Should Visit Irbid  ');
  }
  let questionFour = prompt('On any feild I have my BC degree');
  console.log(questionFour);
  questionFour = questionFour.toLowerCase();
  if (questionFour === 'se' || questionFour === 'software' || questionFour === 'computer'|| questionFour==='software engineering') {
    alert('Yeah that\'s right ');
  } else {
    alert('No problem a lot of people gussing that wrong :D');
  }
  if ((questionOne === 'milan' || questionOne === 'acmilan') && (questionTwo === 'mansaf') && (questionThree === 'irbid' || questionThree === 'irbed') && (questionFour === 'se' || questionFour === 'software' || questionFour === 'computer'|| questionFour==='software engineering')) {
    document.getElementById('myFavTeam').innerHTML = questionOne;
    document.getElementById('myFavFood').innerHTML = questionTwo;
    document.getElementById('myCites').innerHTML = questionThree;
    document.getElementById('myBcDegree').innerHTML = questionFour;
    document.getElementById('myName').innerHTML='Mohmmad Alazzam';
    document.getElementById('aboutMeTable').style.display = 'block';
  }
  else {
    document.getElementById('preef').style.display = 'block';
  }
}
// do this code
else {
  document.getElementById('preef').style.display = 'block';

}
