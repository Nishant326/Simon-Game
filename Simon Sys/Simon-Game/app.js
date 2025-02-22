let gameSeq=[];
let userSeq=[];

let colBtns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h3=document.querySelector("h3")
document.addEventListener("keypress",function(){
    if(started==false){
        h3.innerText="Game start"
        started=true;
        levelUp()
    }
});


function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);

};

function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);

};


function levelUp(){
    level++;
    h3.innerText=`Level ${level}`
    userSeq=[]
    let randIdx=Math.floor(Math.random()*3);
    let randColor=colBtns[randIdx];
    // console.log(randIdx);
    // console.log(randColor)
    let randBtns=document.querySelector(`.${randColor}`)
    // console.log(randBtn);
    // console.log(randColor);
    gameSeq.push(randColor)
    console.log(gameSeq)
        btnFlash(randBtns);
        highScore()

};

function ansSeq(idx){
    if(gameSeq[idx]==userSeq[idx]){
        if(gameSeq.length == userSeq.length)
            setTimeout( levelUp,1000)
    
    }else{
        h3.innerHTML=`game is over your score is <b>${level}</b> <br/> press any key to restart`;
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"


        },150)
        reset();        
    }
}

function userPress(){
    let btn=this;
    let userColor=btn.getAttribute("id");
    console.log(userColor)
    userFlash(btn);
    console.log(userSeq)
    userSeq.push(userColor)
    ansSeq(userSeq.length-1)
}
let allBtns=document.querySelectorAll(".btn");
for(btns of allBtns){
    btns.addEventListener("click",userPress);
};

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

};

let para=document.querySelector(".higherScore");
let score=0;
function highScore(){
    console.log(level)
    if(score<level){
        score=level;
        para.innerText=`Higher score is ${score}`
    
    };
    
    

}

