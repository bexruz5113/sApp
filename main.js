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
        prace: '100 $',
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
        prace: '200 $',
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
        prace: '200 $',
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
        prace: '300 $',
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
        prace: '1000 $',
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
        prace: '250 $',
        color: 'black',
        camera: '32 MP',
        operative: 4
    }];

//    for (var i=0; i<Phone.length;i++){
// newUpperCase.push(Phone[i].company.toUpperCase());
// Phone.forEach(function(company){
//     newUpperCase.push(company.toUpperCase());
// });
// console.log(newUpperCase);

// 
// var eladdNewCard = document.querySelector('.addNewCard');

// var newUpperCase = Phone.map(function (nomi) {

//     return {
//         companiya: nomi.company.toUpperCase(),
//         narxi: nomi.prace
//     };

// });
// console.log(newUpperCase);

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
// console.log(digitalClock(755));


// function double(numb){
//     sum=0;
//     for (var i=0;i<=numb;i++){
//         sum+=i;
//     }
//     return sum;
//  }
// console.log(double(5));

// function variant(num){
//     return parseInt((num*(1+num)/2),10);
// }
// console.log(variant(5));
// program to print prime numbers between the two numbers

// take input from the user


// var lowerNumber = parseInt(prompt('Enter lower number: '));
// var higherNumber = parseInt(prompt('Enter higher number: '));
// for (var i = lowerNumber; i <= higherNumber; i++) {
//     var flag = 0;

//     for (var j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

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

// masala
// function summa(num){
//     sum=0;
//     for (var i = 0; i <=num; i++){
//         if((i % 3 === 0) || (i % 5 === 0))
//         sum +=i;
//     }
//       return sum;
// }
// console.log(summa(10));

// masala

// var telefon={
//     madel:'samsung',
//     rangi:'qora',
//     narxi:200,
//     camera:48
// }
// function sarala(telefon){
//     var qosh



// let ar=[1,2,3,4,5,6,0,21];

// let filtered=a.filter(function(element){
//     return element>3;
// })
// console.log(filtered);

//    var sum = 0;
//    for (var i = 0; i < ar.length; i++){
//        sum +=ar[i];
//    }
//    console.log(sum);



// a = [1, 2, 3];
// b = [3, 2, 1];

// function compareTriplets(a, b) {
//     sumA = 0, sumB = 0;
//     for (var i = 0; i < 3; i++) {
//         if (a[i] > b[i]) {
//              sumA++;
//         }
//         else if (a[i] < b[i]) {
//             sumB++;
//         }
//     }
//     return [sumA, sumB];
// }

// console.log(compareTriplets(a,b));


// var ar=[1,2,3,4,5,6,7,8,9];
// function double(ar){
//     var sum=0;
//     for(var i = 0; i <= ar.length; i++){
//         sum+=ar[i];
//     }
//     return sum;
// }
// console.log(double(ar));

// var b=['salom','hello','alek','hi'];
// var text='';
// for (var i=0;i<b.length;i++){
//     text+=b[i]+'\n';
// }
// console.log(text);

// var b=['salom','hello','alek','hi'];
// var text='';
// var x=0;
// for (x in b[1]){
//     text+=b[x]+'\n';
// }
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

// function boolTime(w,h){
//     return w>h; 
// }
// console.log(boolTime(5,4));


// function FizzBuzz(x){
//     if((x%3===0)&&(x%5===0)){return ('FizzBuzz');}
//     else if(x%5===0){return ('Buzz');}
//     else if(x%3===0){return ('Fizz');}
//     else {return (x)};
// }
// console.log(FizzBuzz(55));

// function summa(x){
//     var sum=0;
//     for(var i=0; i <= x; i++){
//       if(i%3===0 || i%5===0){
//           sum+=i;}
//     }
// return sum;
// }
// console.log(summa(10));
// var odam={
//     nomi:'Salim',
//     familiyasi:'Xoliqov',
//     yoshi:45,
//     vazni:80

// }
// function sortObject(name){
//     for(var index in name){

//         if(typeof name[index]==='string'){

//             console.log(index+':'+name[index]);
//         }
//     }
// }
// console.log(sortObject(odam));



// function ortacha(arr){
//     var sum = 0;
//     var middle=sum/arr.length;
//     for (var i=0; i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     return sum ;

// }
// console.log(ortacha(sessiya));



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

// var x=prompt('son kiriting: ');
// for (var i=2;i<=x.length;i++){
//     if(i%x[i]===0){
//         console.log(i);
//     }
// }

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

// function showPrimeNumbers(limit){
//     for (var i=2;i<=limit;i++){
//         var isPrime=1;
//         for (var j=2;j<i;j++){
//             if(i%j===0){
//                 isPrime=0;
//                 break;   }  }
//     if(isPrime){
//          console.log(i);}
//     }
// }
// showPrimeNumbers(20);

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























