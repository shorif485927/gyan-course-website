
//    ! JQUERY CODE  SATARTS 

      
$(function(){


      //   * courses  section

      
    $('.coures_card_slider').slick({
       
       slidesToShow:3,
       slidesToScroll:1,
      prevArrow:'.right__arrow',
      nextArrow:'.left__arrow',
      infinite:true,
      // dots: true,
      // dotsClass: " banner__dots"
    });



 })



// ! JQUERY CODE ENDS 





let GyanCounters = document.querySelectorAll('.community__card h4');


   GyanCounters.forEach(GyanCounter => {
         let endingValue = GyanCounter.dataset.value;
         let count = 0;
        let  duration = 100;



     let counting =  setInterval(() => {
                GyanCounter.innerHTML = count++;

                    if( count > endingValue){ 
                          clearInterval(counting)
                    }

      }, (duration/endingValue));



   });





   let submit = document.querySelector('.submit');

   let rform = document.querySelector ('.wrapper');

   let popUP = document.querySelector('.popup');




   submit.addEventListener('click', ()=>{
        rform.classList.add('none');

        popUP.classList.add('active')

     
   })



