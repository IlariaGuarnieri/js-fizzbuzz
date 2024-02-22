const containerQ = document.getElementById('container-q');
for(let i = 1; i <= 100; i++){
  let classDispari= '';
  if(i % 3 === 0){
    classDispari += 'fizz';
  }
  if(i % 5 0=== 0){
    classDispari += 'buzz'
  }

  containerQ.innerHTML += `
    <div class="box">${classDispari||i}</div>
  `
}

