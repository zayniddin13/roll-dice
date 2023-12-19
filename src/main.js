const rollDice=document.querySelector('.roll_dice')
const rollHistory=document.querySelector('.roll_history')
const list=[]

function rollClick() {
  rollDice.classList.add('animate-[roll_1s_ease-in-out_infinite]')
  setTimeout(() => {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    list.push(getDiceFace(rollResult));
    rollDice.innerHTML=` <i class="fa-solid ${diceFace} text-6xl py-3"></i>`
    console.log(list);
    diceConts()
    rollDice.classList.remove('animate-[roll_1s_ease-in-out_infinite]')
  }, 1000);
   


}
function diceConts() {
  rollHistory.innerHTML=""
list.forEach((item, index) => {
  console.log(item);
  rollHistory.innerHTML+=`<li class="flex justify-between items-center text-4xl p-4 m-4 bg-[#f2f2f2] rounded-4 shadow-md shadow-black" >
  <span>Roll ${index+1}:</span> <i class="fa-solid ${item} text-4xl py-3"></i></li>`
});
}


function getDiceFace(rollResult) {
    switch (rollResult) {
      case 1:
        return "fa-dice-one";
      case 2:
        return "fa-dice-two";
      case 3:
        return "fa-dice-three";
      case 4:
        return "fa-dice-four";
      case 5:
        return "fa-dice-five";
      case 6:
        return "fa-dice-six";
      default:
        return "";
    }
  }
  
  console.log(list);