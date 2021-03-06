function zeller(month, day, year) /* returns 0-6 where 0=sunday, 1=monday, etc....*/ {
  if (month < 3)
    { month += 12; year -= 1; }
  var h = (day + parseInt(((month + 1) * 26) / 10) + year + parseInt(year / 4) + 6 * parseInt(year / 100) + parseInt(year / 400) - 1) % 7;
  return h;
}

function demo(month, day, year, gender) {
  var mons = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var male = ['Kwasi','Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  var female = ['Akosua','Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  if (gender === 'male') {
    akanName = male[zeller(month, day, year)];
  }
  if (gender === 'female') {
    akanName = female[zeller(month, day, year)];
  }
  return mons[month-1] + ' ' + day + ', ' + year + ' = ' + days[zeller(month, day, year)] +'\n -----Your Akan name is '+ akanName;
}

function doDemo() {
  var m = parseInt(document.getElementById('month').value);
  var d = parseInt(document.getElementById('day').value);
  var y = parseInt(document.getElementById('year').value);
  var gender = document.getElementById('gender').value;
  document.getElementById('result').innerHTML = demo(m,d,y,gender);

}
