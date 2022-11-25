let audi =document.getElementById('audi');
let mercedes = document.getElementById('mercedes');
let bmw = document.getElementById('bmw');
let rolls = document.getElementById('rolls');
let parentcard = document.getElementById('parentcard');
let array ={
        images: ["https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/Q7/8778/1643958105459/front-left-side-47.jpg?impolicy=resize&imwidth=480","https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/A6/6426/1571906388003/front-left-side-47.jpg?tr=w-456","https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/Q5/7890/1637668688255/front-left-side-47.jpg?tr=w-456","https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/Q3/6513/1661852142621/front-left-side-47.jpg?tr=w-456","https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/RS7/7808/1660730345112/front-left-side-47.jpg?tr=w-456" , "https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/RS-Q8/7943/1598516299283/front-left-side-47.jpg?tr=w-456",""],

        names: ["Audi Q7","Audi A6","Audi Q5","Audi Q3","Audi RS7","Audi RS Q8",""],
        price:["Rs.83.32 - 88.98 Lakh","Rs.60.59 - 65.15 Lakh","Rs.60.50 - 66.21 Lakh","Rs.44.89 - 50.39 Lakh " , "Rs.2.24 Cr", "Rs.2.19 Cr",""],
        average:["11.21 kmpl","14.11 kmpl ","13.47 kmpl","12.11 Kmpl" , "8.9 kmpl" , "8.26 kmpl",""],

        link:["https://www.cardekho.com/audi/q7","https://www.cardekho.com/carmodels/Audi/Audi_A6","https://www.cardekho.com/audi/q5","https://www.cardekho.com/audi/q3","https://www.cardekho.com/carmodels/Audi/Audi_RS7","https://www.cardekho.com/audi/q8"]
}

audi.addEventListener('click',function(){
    parentcard.innerHTML = 
    parentcard.style.background ='none';   
    
for(i=0; i<6 ;i++){
let newel = document.createElement('div');
newel.classList= 'card'
newel.innerHTML =`
<div id="card"> 
<div id="carimg"><img
     src="${array.images[i]}"
     alt="" srcset=""></div>
<div id="carname">
 <span>${array.names[i]}</span>
</div>
<div id="carprice">
 <span>${array.price[i]}</span>
</div>
<div id="caraverage">
 <span> MILAGE : ${array.average[i]}</span>
</div>
<a href="${array.link[i]}"><button>MORE</button></a>


</div>

`
parentcard.appendChild(newel)
console.log(newel); 
}
})
// function do(){
    //     window.Location(${array.link[i]});
    // }

let array2 ={
        images : ["https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/GLS/6908/1647339810093/front-left-side-47.jpg?tr=w-456","https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/AMG-G-63/8591/1630666326351/front-left-side-47.jpg?tr=w-456","https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/GLE/6732/1580365808263/front-left-side-47.jpg?tr=w-456","https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/AMG-GT/7842/1609141333284/front-left-side-47.jpg?tr=w-456"],
        names : ["Mercedes-Benz GLS","Mercedes-Benz AMG G ","Mercedes-Benz GLE","Mercedes-Benz AMG GTMercedes"],
        price: ["Rs.1.16 - 2.47 Cr","Rs.2.55 Cr","Rs.85.80 Lakh - 1.25 Cr","Rs.2.71 Cr"],
        average:["11.2 Kmpl","10 kmpl","9.7 kmpl","12.65 kmpl"],
        link : ["https://www.cardekho.com/mercedes-benz/gls","https://www.cardekho.com/mercedes-benz/amg-g-63","https://www.cardekho.com/mercedes-benz/gle","https://www.cardekho.com/carmodels/Mercedes-Benz/Mercedes-Benz_AMG_GT"]
}
    
    mercedes.addEventListener('click',function(){
        parentcard.innerHTML = '';
        parentcard.style.background ='none';  
          

        for(i=0; i<6 ;i++){
            let newel = document.createElement('div');
            newel.classList= 'card'
            newel.innerHTML =`
            <div id="card"> 
            <div id="carimg"><img
                 src="${array2.images[i]}"
                 alt="" srcset=""></div>
            <div id="carname">
             <span>${array2.names[i]}</span>
            </div>
            <div id="carprice">
             <span>${array2.price[i]}</span>
            </div>
            <div id="caraverage">
             <span> MILAGE : ${array2.average[i]}</span>
            </div>
            <a href="${array2.link[i]}"><button>MORE</button></a>
            
            
            </div>
            
            `
            parentcard.appendChild(newel)
            console.log(newel); 
        }
    })
bmw.addEventListener('click',function(){
    parentcard.style.background ='none';    
})
rolls.addEventListener('click',function(){
    parentcard.style.background ='none';    
})
























//  let btn = document.querySelector('#btn');
// let sb = document.querySelector('#color');
// let btn2 = document.querySelector('#btn2');
// let sb2 = document.querySelector('#color2');
// let first = document.getElementById('first');
// let second = document.getElementById('second');
// let userCar = document.getElementById('userCar');
// let changeText = document.getElementById('changeText');
// let dynamic = document.getElementById('dynamic');
// let mainWindow = document.getElementById('mainWindow');
// let multi = document.getElementById('multi');
// let carName = document.getElementById('carName');
// let goBack = document.getElementById('goBack');
// // Remove this none element below...
// goBack.style.display = 'none';
// mainWindow.style.display = '';
// second.style.display = 'none';
// // Uncomment this damn thing below...
// dynamic.style.display = 'none';
// let dynamicObj = {
//     name: ["BMW", "AUDI", "MERCEDES", "LAMBOURGHINI", "BUGGATI", "PORCHE"],
//     type: ["CDANS", "SUVS", "SPORTS"],
//     details: ["BMW 3 Series", "BMW 7 Series", "BMW M5", "BMW 2 Series", "BMW X4", "BMW i4", "BMW M2", "BMW 6 Series", "BMW M4 Competition", "BMW 8 Series","BMW M8 Coupe Competition","BMW X1"],
//     mileage: ["20.37 kmpl", "39.53 kmpl", "9.12 kmpl", "18.64 kmpl", "14.23 kmpl", "Battery: 83.9 Kw", "10.63 kmpl", "18.65 kmpl", "BHP: 502.88", "BHP: 600","8.7 kmpl","19.62 kmpl"],
//     seats: ["5 Seats", "4 Seats", "5 Seats", "5 Seats", "4 Seats", "4 Seats", "4 Seats", "4 Seats", "2 Seats", "4 Seats", "2 Seats", "5 Seats"],
//     pricings: ["Rs.46.90 - 68.90 Lakh", "Rs.1.42 - 1.76 Cr", "Rs.1.74 Cr","Rs.41.50 - 44.50 Lakh", "Rs.71.90 - 73.90 Lakh", "Rs.69.90 Lakh", "Rs.85.00 Lakh", "Rs.69.90 - 79.90 Lakh", "Rs.1.44 Cr", "Rs.1.62 - 2.23 Cr","Rs.2.55 Cr","Rs.41.50 - 44.50 Lakh"],


//     carImages: ["https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/3-Series/7707/1595417687615/front-left-side-47.jpg?tr=w-456", "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/7-Series/8535/BMW-7-Series-740Li-M-Sport-Edition/1627989582949/front-left-side-47.jpg?tr=w-456", "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/M5/8490/1625142409938/front-left-side-47.jpg?tr=w-456","https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/2-Series/8920/1657790166757/front-left-side-47.jpg?tr=w-456", "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X4/8966/1650273720043/front-left-side-47.jpg?imwidth=420&impolicy=resize", "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/i4/8708/1639125210408/front-left-side-47.jpg?tr=w-456", "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/BMW-M2/6553/1550825715959/front-left-side-47.jpg?tr=w-456", "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/6-Series/8419/1617875919382/front-left-side-47.jpg?tr=w-456", "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/M4-Competition/8049/1644496825816/front-left-side-47.jpg?tr=w-456", "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/8-Series/7819/BMW-8-Series-M8-Coupe/1654755164426/front-left-side-47.jpg?tr=w-456","https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/M8-Coupe-Competition/9373/1664537867224/front-left-side-47.jpg?tr=w-456","https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X1/7625/1583398555726/front-left-side-47.jpg?tr=w-456"],


//     teleport: ["https://www.cardekho.com/carmodels/BMW/BMW_3_Series", "https://www.cardekho.com/carmodels/BMW/BMW_7_Series", "https://www.cardekho.com/bmw/m5", "https://www.cardekho.com/bmw/2-series", "https://www.cardekho.com/bmw/x4", "https://www.cardekho.com/bmw/i4", "https://www.cardekho.com/bmw/m2", "https://www.cardekho.com/carmodels/BMW/BMW_6_Series", "https://www.cardekho.com/bmw/m4-competition", "https://www.cardekho.com/bmw/8-series","https://www.cardekho.com/bmw/m8-coupe-competition","https://www.cardekho.com/carmodels/BMW/BMW_X1"]
// };
// btn.onclick = (event) => {
//     event.preventDefault();
//     console.log(sb.value);
//     userCar.innerHTML = sb.value;
//     second.style.display = '';
//     first.style.display = 'none';
// };
// btn2.onclick = (event) => {
//     first.style.display = 'none';
//     second.style.display = 'none';
//     mainWindow.style.display = 'none';
//     goBack.style.display = '';
//     dynamic.style.display = '';
//     event.preventDefault();
//     goBack.addEventListener('click', ()=>{
//         dynamic.style.display = 'none';
//         mainWindow.style.display = '';
//         first.style.display = 'none';
//         second.style.display = '';
//         multi.innerHTML = '';
//     })
//     console.log(sb2.value);
//     console.log(`User has selected ${sb.value} car and a type of ${sb2.value}`);
//     changeText.innerHTML = `Showing ${sb2.value} in ${sb.value}`;
//     if (sb.value == dynamicObj.name[0] && sb2.value == dynamicObj.type[0]) {
//         for (let i = 0; i <11; i++) {
//             let x = document.createElement('div');
//             x.classList = 'card';
//             x.innerHTML = `
//             <div class="image">
//             <img src="${dynamicObj.carImages[i]}" alt="">
//         </div>
//         <div class="sname">
//             <span class="carName">
//                 ${dynamicObj.details[i]}
//             </span>
//         </div>
//         <div class="smileage">
//             <span class="mileage">
//                 ${dynamicObj.mileage[i]}
//             </span>
//         </div>
//         <div class="spricing">
//             <div class="pricing">
//                 ${dynamicObj.pricings[i]}
//             </div>
//         </div>
//         <div class="sseats">
//             <div class="seats">
//                 ${dynamicObj.seats[i]}
//             </div>
//         </div>
//         <div class="more">
//             <a href="${dynamicObj.teleport[i]}" id="redirect">checkMore</a>
//         </div>            
            
//             `
//             multi.append(x);
//         }
//     }
//     else if (sb.value == dynamicObj.name[0] && sb2.value == dynamicObj.type[1]) {
//         for (let i = 11; i < dynamicObj.details.length; i++) {
//             let x = document.createElement('div');
//             x.classList = 'card';
//             x.innerHTML = `
//             <div class="image">
//             <img src="${dynamicObj.carImages[i]}" alt="">
//         </div>
//         <div class="sname">
//             <span class="carName">
//                 ${dynamicObj.details[i]}
//             </span>
//         </div>
//         <div class="smileage">
//             <span class="mileage">
//                 ${dynamicObj.mileage[i]}
//             </span>
//         </div>
//         <div class="spricing">
//             <div class="pricing">
//                 ${dynamicObj.pricings[i]}
//             </div>
//         </div>
//         <div class="sseats">
//             <div class="seats">
//                 ${dynamicObj.seats[i]}
//             </div>
//         </div>
//         <div class="more">
//             <a href="${dynamicObj.teleport[i]}" id="redirect">checkMore</a>
//         </div>            
            
//             `
//             multi.append(x);
//         }
//     }
// };