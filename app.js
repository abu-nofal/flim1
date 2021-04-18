
// console.log('welcome');
// console.log(1+2);
// console.log('bateg',1+2);
// var theName ='moh5';
// console.log(theName);
// var mosa = 4;
// console.log(mosa+=mosa);
// if (8 ==='8'){
//   console.log('ya hala');
// } else {
//   console.log('hello'+' '+'becouse');
// }
// // var userName=prompt('put your name ')
// // console.log(userName)
// // var yourAge= prompt('enter your age')
// // if (yourAge>=18){
// //   document.write('welcome'+' '+userName)}

// <<<<<<< HEAD

// alert('welcome and hello to ahamd chanal');

// alert('here you will find a best movies ever');

// var userInput = prompt('please enter your type of movies between drama and action ?');

// while( (userInput!=='drama') && (userInput!=='action') ){

//   userInput=prompt('please you must choese between drama and action ');

// };







// var userName =prompt('enter your name please');
// // console.log(userName);
// // var userAge =prompt('enter your age please ');
// // // console.log(userAge);



// // if (userAge>=18){
// //   alert('welcome and  cheack the end of the page  ')
// //   userImg('<img src="https://img.freepik.com/free-vector/welcome-modern-lettering_136321-864.jpg?size=626&ext=jpg ">');
// //   userImg('welcome aguin'+' '+userName+' '+'you can enjoy with our web ');
// =======
// alert('welcome and hallo to ahamd chanal');
// alert('here you will find a best movies ever');
// var userName =prompt('enter your name please');
// console.log(userName);
// var userAge =prompt('enter your age please ');
// console.log(userAge);
// if (userAge>=18){
//   alert('welcome and  cheack the end of page  ')
//   document.write('<img src="https://img.freepik.com/free-vector/welcome-modern-lettering_136321-864.jpg?size=626&ext=jpg ">');
//   document.write('welcome aguin'+' '+userName+' '+'you can enjoy with our web ');
// >>>>>>> cae3003a5b724ad811e86a8b89bc1242b9394ff3

// // } else if (userAge<18) {
// //   alert('becouse you are under age you read the contant in the end of the page ')
// //   userImg('<img src="https://static8.depositphotos.com/1431107/919/i/950/depositphotos_9199988-stock-photo-oops-icon.jpg ">');
// //   userImg('welcome '+' '+ userName +' '+'becouse your age '+userAge+' '+ 'under 18  we are so sorry we will send you to the other web its for under age' );
// // };
// // var userImg;

// // var imagesNumber= prompt('How many image do you want???');

// // for(var  i=0;i<imagesNumbe;i++){

// // document.write(userImg);
// // }
// var userChoose;

// if (userInput==='drama'){

//   userChoose='<img src="https://img.freepik.com/free-vector/welcome-modern-lettering_136321-864.jpg?size=626&ext=jpg ">'

// }
// else if (userInput==='action'){

//   userChoose='<img src="https://static8.depositphotos.com/1431107/919/i/950/depositphotos_9199988-stock-photo-oops-icon.jpg ">'
// }

// var imagesNumber=prompt('please enter how many img you want to see ?')

// for (var i=o ; i < imagesNumber ; i++){

//   document.write(userChoose);
// };


alert('welcome and hello to ahamd chanal');

alert('here you will find a best movies ever');

var userInput;
var getName = function () {

  userInput = prompt('please enter your type of movies between drama and action ?');

  while ((userInput !== 'drama') && (userInput !== 'action')) {

    userInput = prompt('please you must choese between drama and action ');

  }
}

getName();

var userType;

function showImg() {
  if (userInput === 'drama') {

    userType = '<img src ="https://thumbs.dreamstime.com/b/drama-written-wooden-cubes-blue-flowers-white-wood-drama-wooden-cubes-118284134.jpg" width=250px  >';
  }

  else if (userInput === 'action') {

    userType = '<img src= "https://thumbs.dreamstime.com/b/time-action-text-written-white-letters-black-chalk-board-clock-to-one-side-showing-minutes-to-midnight-concept-40378216.jpg" width=250px  >';
  }
  // var usNam = prompt('enter your name please ');
  var imgNum = prompt('please enter how many time you want to see the img ?');

  for (var i = 0; i < imgNum; i++) {

    document.write(userType);
    
  }
}


// document.write('welcome ' + ' ' + usNam + ' ' + 'enjoy in our site ');
showImg();

 
