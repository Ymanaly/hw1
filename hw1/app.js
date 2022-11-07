const identificationInput=document.querySelector('#identificationInput');
const tapInput=document.querySelector(".tapInput");
const iinInput=document.querySelector(".iinInput");


const iinRegExp=/^[0-1]\d{13}$/ig
tapInput.addEventListener("click",()=>{
    if (iinRegExp.test(identificationInput.value)){
        iinInput.innerText="received";
        iinInput.style.color="green";
    }else {
        iinInput.innerText="refused";
        iinInput.style.color="red";
    }
});

//2
// const smallBox=document.querySelector('.smallBox')
// const BigBox=document.querySelector('.bigBox')
//
//
// function VerstaBig(){
//     BigBox.style.position = 'relative'
//     BigBox.style.background = 'Red'
//     BigBox.style.height = '100vh'
// }
// VerstaBig()
//
// function Verstasmall(){
//     smallBox.style.position = 'Absolute'
//     smallBox.style.background = 'blue'
//     smallBox.style.height = '50px'
//     smallBox.style.width = '50px'
//     smallBox.style.transition = ' 1s'
//     smallBox.style.left = '0'
//     smallBox.style.top = '0'
// }
// Verstasmall()
//
//
// let Postop = 0
// let Posleft = 0
//
// function MoveSmall(){
//     if(Posleft<=1000 && Postop===0){
//         Posleft+=100
//         smallBox.style.left =`${Posleft}px`
//         setTimeout(MoveSmall,100)
//     }else if(Posleft===1100 && Postop!==500){
//         Postop+=100
//         smallBox.style.top =`${Postop}px`
//         setTimeout(MoveSmall,100)
//     }else if ( Posleft!==0 && Postop===500){
//         Posleft-=100
//         smallBox.style.left =`${Posleft}px`
//         setTimeout(MoveSmall,100)
//     }else if(Posleft===0 && Postop>=0){
//         Postop-=100
//         smallBox.style.top =`${Postop}px`
//         setTimeout(MoveSmall,100)
//     }
// }
// MoveSmall()
