console.log("javascript is working in digital timer");
let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById("secondOnes");
let msHundreds = document.getElementById("msHundreds");
let msTens = document.getElementById("msTens");
let secondTen = 0;
let secondOne = 0;
let hundredMs = 0;
let tenMs = 0;

 let setSecond = setInterval(()=>{
 secondOnes.textContent = secondOne ;
 if(secondOne == 9){
     setMin();
     secondOne =0;
 }else{
     secondOne== 9 ? secondOne = 0 : secondOne = secondOne +1;
 }
 

},100)
let setMin = function(){
    secondTens.classList.add("redDigit")
    setInterval(()=>{
    secondTens.textContent = secondTen ;
    secondTen== 9 ? secondTen= 0 : secondTen = secondTen +1;
   },100)
}
