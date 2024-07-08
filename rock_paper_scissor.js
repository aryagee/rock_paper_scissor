let userescore=0;
let compscore=0;
let choices=document.querySelectorAll('.choice');
let msg=document.querySelector('.msg')
let usrscorepara=document.querySelector('.user_score')
let compscorepara=document.querySelector('.comp_score')


const gencompchoice=()=>{

    const options=['rock','paper','scissors']
   const randomchoice= Math.floor(Math.random()*3)
   return options[randomchoice];

}



let gamedraw=()=>{
    msg.innerText='Game was draw,Play again'
    msg.style.backgroundColor='#081b31'
}


let showWinner=(userwin,userchoice,compchoice)=>{
  if(userwin==true)
    {
        userescore++;
        usrscorepara.innerText=userescore;
        msg.innerText=`You Win! your's ${userchoice} beats comp's ${compchoice}`
        msg.style.backgroundColor='green'
    }
 else if(userwin==false){
    compscore++;
    compscorepara.innerText=compscore;
    msg.innerText=`You Lose.comp's ${compchoice} beats your's ${userchoice}`
    msg.style.backgroundColor='red'
 }
}


const playgame=(userchoice)=>{
    let compchoice=gencompchoice();
    if(userchoice==compchoice){
        gamedraw();
    }
    else{
        let userwin=true;
        if(userchoice=='rock'){
            //comp paper,scissor
           userwin= compchoice=='paper'?false:true
        }

    else if(userchoice=='paper'){
        //comp rock , scissors
       userwin= compchoice='scissors'?false:true
    }
    else{
      // comp rock,paper
     userwin= compchoice=='rock'?false:true
    }
   showWinner(userwin,userchoice,compchoice);
}

}




choices.forEach((choice)=>{
 console.log(choice)
  choice.addEventListener('click',()=>{
    
   let userchoice=choice.getAttribute('id')
   playgame(userchoice);
  })
});