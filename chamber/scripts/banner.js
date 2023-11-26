document.addEventListener('DOMContentLoaded', () => {

function isBannerDay() {
     const today = new Date().getDay(); // [0 = Sunday, 1 = Monday, 2 = Tuesday, Wenesday = 3]
     return today >= 1 && today <= 3; // Monday, Tuesday, or Wednesday
 }

 function showBanner() {
     const banner = document.getElementById('banner');
     if (isBannerDay()) {
         banner.style.display = 'block';
     }
     else{
          banner.style.display = 'none';
     }
 }

 // Function to hide the banner
 function hideBanner() {
     const banner = document.getElementById('banner');
     banner.style.display = 'none';
 }

 function closeBanner() {
     hideBanner();
 }

 showBanner()

 const closeButton = document.getElementById('close__banner');
 if (closeButton) {
     closeButton.addEventListener('click', closeBanner);
 }

//  document.querySelector('.banner__close').addEventListener('click', function() {
//      this.closest('.banner').style.display = 'none';
// });

});

// function myDay() {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const date = new Date();
//     const banner = document.getElementsByClassName('.banner')

//     if(date == days(0,1,2,3)){
//         banner = style.display = 'block';
         

//    }else{
//         banner = style.display = 'none'; 
//    } 
//   }