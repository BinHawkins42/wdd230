document.querySelector('.banner__close').addEventListener('click', function() {
        this.closest('.banner').style.display = 'none';
});

function myDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();
    const banner = document.getElementsByClassName('.banner')

    if(date == days(0,1,2,3)){
        banner = style.display = 'block';
         

   }else{
        banner = style.display = 'none'; 
   } 
  }