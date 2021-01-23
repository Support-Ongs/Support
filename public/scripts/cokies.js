
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
    window.location.href = 'file:///media/keven/Data/www/Support/Support-FrontEnd/ongs.html'
  }
  else {
    console.log("cjiojdvofjijv")
    addCookies('firstAccesses', 'false');
  }
} 

checkCookies();
