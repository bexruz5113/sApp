// Algaritimlashga doir misollar///////
// Algaritimlashga doir misollar///////
// Algaritimlashga doir misollar///////
// Algaritimlashga doir misollar///////
// Algaritimlashga doir misollar///////


$('.carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverpause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})



var Phone = [
    {
        company: 'Artel',
        foto: 'image/xiomi.jpg',
        model: 'artel',
        memory: '64GB',
        batary: 5000,
        prace: 100 ,
        color: 'blue',
        camera: '64 MP',
        operative: 4
    },
    {
        company: 'huawei',
        foto: 'image/samsung.jpg',
        model: 'redmi',
        memory: '64GB',
        batary: 5000,
        prace: 200,
        color: 'blue',
        camera: '64 MP',
        operative: 4
    },
    {
        company: 'readmi',
        foto: 'image/iphone.jpg',
        model: 'readmi',
        memory: '64GB',
        batary: 5000,
        prace: 200 ,
        color: 'blue',
        camera: '64 MP',
        operative: 4
    },
    {
        company: 'Xiomi',
        foto: 'image/xiomi.jpg',
        model: 'redmi',
        memory: '64GB',
        batary: 5000,
        prace: 300,
        color: 'blue',
        camera: '64 MP',
        operative: 4
    },
    {
        company: 'Iphone',
        foto: 'image/iphone.jpg',
        model: 'Iphone X',
        memory: '128 GB',
        batary: 4000,
        prace: 1000,
        color: 'dark',
        camera: '48 MP',
        operative: 6
    },
    {
        company: 'Samsung',
        foto: 'image/samsung.jpg',
        model: 'A51',
        memory: '32 GB',
        batary: 5000,
        prace: 250,
        color: 'black',
        camera: '32 MP',
        operative: 4
    }];

//     var eladdNewCard =[];

//    for (var i=0; i<Phone.length;i++){
//    newUpperCard.push(Phone[i].prace);
//    console.log(newUpperCard);
// }

// Phone.forEach(function(company){
//     newUpperCard.push(company.foto.toUpperCase());
// });
// console.log(newUpperCard);




// map ga misol;
var eladdNewCase =[];

var newUpperCase = Phone.map(function (nomi) {

    return {
        companiya: nomi.company.toUpperCase(),
        narxi: nomi.prace+'$' 
    };

});
console.log(newUpperCase);
// ////////

//   eladdNewCard.innerHTML = newUpperCase.join('<br>');

  // console.log(5!=='5');

// $('#exampleModal').on('show.bs.modal', function (event) {
//     var button = $(event.relatedTarget) // Button that triggered the modal
//     var recipient = button.data('whatever') // Extract info from data-* attributes
//     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//     var modal = $(this)
//     modal.find('.modal-title').text('New message to ' + recipient)
//     modal.find('.modal-body input').val(recipient)
//   })


//     var elModalButton = document.querySelector('.modal-button');
//     var elModal = document.querySelector('.modal');
//     var elModalClose = document.querySelector('.modal-close');


//         elModalButton.addEventListener('click', function () {
//              elModal.classList.add('modal-open');
// });

//         elModalClose.addEventListener('click',function(){
//             elModal.classList.remove('modal-open');
// });



// return  (Math.floor(seconds/3600)<10)?
//   '0'+ Math.floor(seconds/3600)+':':Math.floor(seconds/3600)+':' ,
//   (Math.floor((seconds%3600)/60)<10) ?  '0'+Math.floor((seconds%3600)/60)+':' : Math.floor((seconds%3600)/60)+':',
//   (seconds%60<10)? '0'+seconds%60 : seconds%60;
// }
// (Math.floor((seconds%3600)/60)<10)
// return '0'+Math.floor((seconds%3600)/60)+':';

////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////

// function format(s){
//     s = s > 9 ? s : '0'+ s;
//     return s;
// }

// function digitalClock(seconds) {
//     h = Math.floor(seconds / 3600) % 24;
//     m = Math.floor((seconds - Math.floor(seconds/3600)*3600)/60);
//     s = seconds % 60;
//     return format(h)  + ':'+ format(m) + ':' + format(s);
// };
// console.log(digitalClock(3601));

////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////


// function double(numb){
//     sum=0;
//     for (var i=0;i<=numb;i++){
//         sum+=i;}
//     return sum;
//  }
// console.log(double(5));

////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////


// function variant(num){
//   return parseInt((num*(1+num)/2),10);
// }
// console.log(variant(9));

////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////

// masala
// function ruleSpeed(speed){ 
// if(speed<=70){
//     return('OK');
// }
// else if((Math.floor((speed-70)/5))>12){
//     return((Math.floor((speed-70)/5))+' point'+'  hujjatingiz olib qoyildi!');
// }
// else{ 
//     return(Math.floor((speed-70)/5)+' point');
// }
// }
// console.log(ruleSpeed(75));

////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////

// masala 
// function summa(num){
//     sum=0;
//     for (var i = 0; i <=num; i++){
//         if((i % 3 === 0) || (i % 5 === 0))
//         sum +=i;
//     }
//       return sum;
// }
// console.log(summa(15));


////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////

// masala

// var ar=[1,2,3,4,5,6,0,21];

// var filtered=ar.filter(function(element){
//     return element > 3;
// })
// console.log(filtered);

////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////

// let ar=[1,2,3,4,5,6,10,9,21];

//    var sum = 0;
//    for (var i = 0; i < ar.length; i++){
//        sum +=ar[i];
//    }
//    console.log(sum);

////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////

// var x=[3,2,1];
// var y=[6,5,4];


// function hisobchi(x, y) {
//     sumA = 0, sumB = 0;
//     for (var i = 0; i < 3; i++) {
//         if (x[i] > y[i]) {
//         sumA++;
//         }
//         else   if (x[i] < y[i]){
//         sumB++;
//         }
//     }
//     return [sumA, sumB];
// }
// console.log(hisobchi(x, y));

////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////

// var ar=[1,2,3,4,5,6,7,8,9];
// function double(ar){
//     var sum=0;
//     for(var i = 0; i <= ar.length; i++){
//         sum+=ar[i];
//     }
//     return sum;
// }
// console.log(double(ar));

////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////

// var b=['salom','hello','alek','hi'];
// var text='';
// for (var i=0;i<b.length;i++){
//     text+=b[i]+'\n';
// }
// console.log(text);

////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////

// var b=['salom','hello','alek','hi'];
// var text='';
// var x=0;
// for (x in b[1]){ text+=b[x]+'\n';}
// console.log(text);


// var txt = "JavaScript";
// var x;

// for (x of txt) {
//   console.log(x + " ");
// }

// ////////////////////////////////////////////////////////////////////

// function nums( a, b ){
// if(a>b){
//     return a;
// }
// else if(a<b){
//     return b;
// }
// else {
//     return 'teng';
// }
// }
// console.log(nums(2,3));

////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////

// function boolTime(w,h){
//     return w>h; 
// }
// console.log(boolTime(5,4));

////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////

// function FizzBuzz(x){
//     if((x%3===0)&&(x%5===0)){return ('FizzBuzz');}
//     else if(x%5===0){return ('Buzz');}
//     else if(x%3===0){return ('Fizz');}
//     else {return (x)};
// }
// console.log(FizzBuzz(55));

////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////

var odam={nomi:'Salim', familiyasi:'Xoliqov', yoshi:45, vazni:80 };

function sortObject(name){
    for(var index in name){

        if(typeof name[index]==='string'){

            console.log(index+':'+name[index]);
        }
    }
}
console.log(sortObject(odam));

////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////


// var sessiya = [90, 90, 90, 90, 80];

// function middleBall(arr) {
//     var sum = 0;
//     for (var index of arr) {
//         sum += index;
//         var middle = sum / arr.length;
//     }
//     if (middle < 50) {
//         return 'o\'tmadi';
//     }
//     else if (middle < 75) {
//         return 'o\'rtacha';
//     }
//     else if (middle < 90) {
//         return 'yaxshi';
//     }
//     else {
//         return 'a\'lo';
//     }
// }
// console.log(middleBall(sessiya));

////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////

// function tubSon(son){
//     for (var i=2;i<=son;i++){
//         var tub=1;
//         for (var j=2;j<i;j++){
//             if(i%j===0){
//                 tub=0;
//                 break;
//             }
//         }
//         if(tub){
//         console.log(i);}
//     }
// }
// tubSon(20);

////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////

//// sort amali ///

// var numbers=[10,1,23,56,88,5,23,33];
// console.log(numbers.sort(function(a,b){
//     return a-b;
// })); 



// savol savol // // // 

// var men=prompt("son kiriting: ");

// var komp = Math.floor(Math.random() * (2 - 0)) + 0;

// komp == men? console.log('Tanlovingiz mos keldi'):console.log('Tanlovingiz mos kelmadi');  

//         console.log('komp:'+komp);
//         console.log('men:'+men);



// function tubson(x){
//     for (var i=2; i<=x; i++){
//         var tub=1;

//         for (var j=2;j<i;j++){
//             if(i%j===0){
//             tub=0;
//             break;}

//         }
//     if(tub){
//         console.log(i);}
// } 
// }
// tubson(20);