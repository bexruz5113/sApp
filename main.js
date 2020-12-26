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



var Phone=[ 
    {
        company:'Artel',
        foto:'image/xiomi.jpg',
        model:'artel',
        memory:'64GB',
        batary:5000,
        prace:'100 $',
        color:'blue',
        camera:'64 MP',
        operative:4
    },
    {
       company:'huawei',
       foto:'image/samsung.jpg',
       model:'redmi',
       memory:'64GB',
       batary:5000,
       prace:'200 $',
       color:'blue',
       camera:'64 MP',
       operative:4
   },
   {
       company:'readmi',
       foto:'image/iphone.jpg',
       model:'readmi',
       memory:'64GB',
       batary:5000,
       prace:'200 $',
       color:'blue',
       camera:'64 MP',
       operative:4
   },
   {
       company:'Xiomi',
       foto:'image/xiomi.jpg',
       model:'redmi',
       memory:'64GB',
       batary:5000,
       prace:'300 $',
       color:'blue',
       camera:'64 MP',
       operative:4
   },
   {
       company:'Iphone',
       foto:'image/iphone.jpg',
       model:'Iphone X',
       memory:'128 GB',
       batary:4000,
       prace:'1000 $',
       color:'dark',
       camera:'48 MP',
       operative:6
   },
   {
       company:'Samsung',
       foto:'image/samsung.jpg',
       model:'A51',
       memory:'32 GB',
       batary:5000,
       prace:'250 $',
       color:'black',
       camera:'32 MP',
       operative:4
   }];
 
   //    for (var i=0; i<Phone.length;i++){
       // newUpperCase.push(Phone[i].company.toUpperCase());
       // Phone.forEach(function(company){
           //     newUpperCase.push(company.toUpperCase());
           // };
           // console.log(newUpperCase);
           var eladdNewCard = document.querySelector('.addNewCard');

              var newUpperCase=Phone.map(function(nomi){
                  
                  return{
                   companiya: nomi.company.toUpperCase(),
                    narxi:nomi.prace};

              });
              console.log(newUpperCase);

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
function format(s){
    s = s > 9 ? s : '0'+ s;
    return s;
}

function digitalClock(seconds) {
    h = Math.floor(seconds / 3600) % 24;
    m = Math.floor((seconds - Math.floor(seconds/3600)*3600)/60);
    s = seconds % 60;
    return format(h)  + ':'+ format(m) + ':' + format(s);
};
console.log(digitalClock(755555));


// function double(numb){
//     sum=0;
//     for (var i=0;i<=numb;i++){
//         sum+=i;
//     }
//     return sum;
// }
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

// var speed=prompt('tezlik:');
// if(speed<=70){
//     console.log('OK');
// }
// else if((Math.floor((speed-70)/5))>12){
//     console.log((Math.floor((speed-70)/5))+' point'+'  hujjatingiz olib qoyildi!');
// }
// else{ 
//     console.log(Math.floor((speed-70)/5)+' point');
// }


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



let ar=[1,2,3,4,5,6,0,21];

// let filtered=a.filter(function(element){
//     return element>3;
// })
// console.log(filtered);

   var sum = 0;
   for (var i=0; i<ar.length;i++){
       sum+=ar[i];
   }
   console.log(sum);




