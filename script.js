
const containerQ = document.getElementById('container-q');
for(let i = 1; i <= 100; i++){
  let classDispari= '';
  if(i % 3 === 0){
    classDispari= 'fizz';
  }

  containerQ.innerHTML += `
    <div class="box">${classDispari}${i}</div>
  `
}

