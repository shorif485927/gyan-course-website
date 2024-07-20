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