// main-arrays
// in future we try to  implement below array  through api
//----------------------------------------------------------------
//  arrays for scramble word,hint,correct word
let jumbleWord=['giter','kecyho','iefekn','awr','orse','hessc','dribe','niodho','bilemo','deco','ganh','irfereef','ckolc','pplea','aryov','dimo','tirsh','nachips','lopy','daangb','atr','sumci']
let hintScramble=['Fastest animal on land','an indian sport',' sharp kitchen equipment','an battle','red colour flower','indian board game',' marriage person','a cricket player whose jersey number is 7','electronic device','IT field related','killing method to criminals','popular br game','time equipment','fruit with red colour','women reproduction organ','indian pm who is from gujarat','cloth type','vegitable whose color is green','mathmatical term','popular fish in mumbai','small size animal with sharp teeth lived in brook','term related to songs']
let unscrambleWord=['tiger','hockey','kniefe','war','rose','chess','bride','dhoni','mobile','code','hang','freefire','clock','apple','ovary','modi','shirt','spinach','poly','bangda','rat','music']
console.log(jumbleWord.length);
// all html element reference
let generateButton=document.querySelector(".generate")
let jumblewordDisplay=generateButton.nextElementSibling
let hintDisplay=jumblewordDisplay.nextElementSibling
let answerDisplay=hintDisplay.nextElementSibling
let submitButton=document.querySelector(".submit")
let scoreDisplay=submitButton.nextElementSibling
let incdisplay=scoreDisplay.nextElementSibling
let decdisplay=incdisplay.ne

// other useful variables for some function
let realNumber;
let score=1;
let highscore;
// variabe to track is user refreshed or not first time
let refreshcouont=0

// function to generate random word or hint
function scrableWord()
{   // setting range
    let min=0
    let max=jumbleWord.length-1
    // gathering number to use in array index
    let numberWord=Math.round(Math.random()*(max-min))
    // displaying random array content and hint
    jumblewordDisplay.textContent=jumbleWord[numberWord]
    hintDisplay.textContent=`Hint=>${hintScramble[numberWord]}`
    // assignig locla variable value to global variable for again reuse 
    realNumber=numberWord
    // increament refresh count
    refreshcouont++
   
}

// function to check word and again generate word to call above function when answer is right
let wordChecking=() =>{
      // runs when array element matches to correct word element in array
      if(answerDisplay.value===unscrambleWord[realNumber])
      {  // increamenting score by 1
         score=score+1
         scoreDisplay.textContent=`Score:${score}`
         alert("THE Word is correct")
         // calling function again to generate random word
         scrableWord()
         if(score===10)
         {
          alert("congratulation you are genius")
         }
      }
      // when element doesn,t match correct word
      else if(answerDisplay.value!="" && answerDisplay.value!=unscrambleWord[realNumber] )
      {
        //---------------------------------------------------------------
        // avoiding score to dedeuc to 0 to -1 when user submit without refresh word
        if(refreshcouont===0 && answerDisplay.value!=unscrambleWord[realNumber])
        {
         score=1
         alert("plz refresh word to  start ")
         
        }
        // checking if user is refreshed or not then we should deduct score by -1
        else if(refreshcouont>0 && answerDisplay.value!=unscrambleWord[realNumber])
        {

          score=score-1
          scoreDisplay.textContent=` Score:${score}`
          
        }
       
        //----------------------------------------------------------------
        //when score becomes zero the user is lose
       if(score===0) 
        {  
          alert("you are out of game")
        } 
     } 
     // when user can,t provide any value
     else{
      alert("please write correct word don,t leave empty")
     }
}
// calling function through events 
generateButton.addEventListener('click',scrableWord)
submitButton.addEventListener('click',wordChecking)