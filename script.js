
const containerQ = document.getElementById('container-q');
for(let i = 1; i <= 100; i++){
  let stampa
  if(i % 3 === 0 && i % 5 ===0){
    stampa= 'fizzBuzz';
  }
  else if(i % 5 === 0){
    stampa= 'buzz';
  }
  else if( i % 3 === 0){
    stampa = 'fizz'
  }
  else {
    stampa = i
  }


  containerQ.innerHTML += `
    <div class="box ${stampa}">${stampa}</div>
  `
}

// const containerQ = document.getElementById('container-q');
// for(let i = 1; i <= 100; i++){
//   let classFive= '';
//   if(i % 5 === 0){
//     classFive= 'buzz';
//   }

//   containerQ.innerHTML += `
//     <div class="box">${classFive}${i}</div>
//   `
// }
