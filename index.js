const input = document.getElementById('input');
console.log(input.id)

function clickAlert(){
  alert('I was cliked!');
}
input.addEventListener('click',clickAlert);
