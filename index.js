const input = document.getElementById('input');
console.log(input.id)
input.addEventListener('click',function(){
  alert('I was clicked!')
})
// function clickAlert(){
//   alert('I was cliked!');
// }
// input.addEventListener('click',clickAlert);

const input2 = document.getElementById('input2');
console.log(input2.id)

function clickAlert(){
  alert("Happy New Year!");
}
input2.addEventListener('click',clickAlert);