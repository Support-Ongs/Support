
function addCookies(key, value) {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  localStorage.setItem(key, value);
}

function getCookie(key) {
  var value = localStorage.getItem(key)
  return value;
}

function checkCookies() {
  if(getCookie('firstAccesses')) {
    window.location.href = ''
  }
  else {
    console.log("cjiojdvofjijv")
    addCookies('firstAccesses', 'false');
  }
} 

if (localStorage.getItem('cookieSeen') != 'shown') {
  $('cookie-banner').delay(2000).fadeIn();
  localStorage.setItem('cookieSeen','shown')
};
$('close').click(function() {
  $('cookie-banner').fadeOut();
})
// var $overlay = document.querySelector('.js-overlay');
// var $closeButton = document.querySelector('.js-close');
 
// if (Cookies.get('closed')) {
//   $overlay.classList.remove('is-open');
// }
 
// $closeButton.addEventLitener('click', function(){
//   Cookies.set('closed', true, { expires: 7 })
 
//   $overlay.classList.remove('is-open');
// });
// checkCookies();
