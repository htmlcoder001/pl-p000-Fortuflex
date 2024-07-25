const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}


let doors = document.querySelectorAll(".door"),
  doorSales = document.querySelectorAll(".door__sales"),
  doorWrapper = document.querySelector(".door__wrapper"),
  spinResultWrapper = document.querySelector(".spin-result-wrapper"),
  orderBlock = document.querySelector("#order"),
  door1 = document.getElementById("door__1"),
  door2 = document.getElementById("door__2"),
  door3 = document.getElementById("door__3"),
  doorSale1 = document.getElementById("door__sales1"),
  doorSale2 = document.getElementById("door__sales2"),
  doorSale3 = document.getElementById("door__sales3");
doors.forEach(function (e) {
  e.addEventListener("click", openDoor);
});
var closePopup = document.querySelector(".close-popup");
function openDoor(e) {
  e.currentTarget.classList.add("open"),
    setTimeout(function () {
      (spinResultWrapper.style.display = "block"),
        setTimeout(function () {
          (orderBlock.style.display = "block"),
            (doorWrapper.style.display = "none"),
            start_timer();
        }, 2500);
    }, 2500),
    doorSales.forEach(function (e) {
      door1.classList.contains("open")
        ? ((doorSale1.innerHTML = "75%"),
          (doorSale2.innerHTML = "10%"),
          (doorSale3.innerHTML = "25%"))
        : door2.classList.contains("open")
        ? ((doorSale2.innerHTML = "75%"),
          (doorSale1.innerHTML = "25%"),
          (doorSale3.innerHTML = "10%"))
        : door3.classList.contains("open") &&
          ((doorSale1.innerHTML = "25%"),
          (doorSale3.innerHTML = "75%"),
            (doorSale2.innerHTML = "10%"));
    });
  for (let e = 0; e < doors.length; e++)
    doors[e].classList.contains("open") ||
      setTimeout(function () {
        doors[e].classList.add("open");
      }, 2500);
  for (let e = 0; e < doors.length; e++)
    doors[e].removeEventListener("click", openDoor);
}
$(".close-popup, .pop-up-button").click(function (e) {
  $(".spin-result-wrapper").fadeOut(), (orderBlock.style.display = "block");
});
let intr,
  time = 600;
function start_timer() {
  intr = setInterval(tick, 1e3);
}
function tick() {
  time -= 1;
  let e = Math.floor(time / 60),
    o = time - 60 * e;
  0 === e && 0 === o && clearInterval(intr),
    (o = o >= 10 ? o : "0" + o),
    (document.querySelector("#min").innerHTML = "0" + e),
    (document.querySelector("#sec").innerHTML = o);
}

$(function () {
  $("a[href^='#']").click(function () {
    $("html, body").animate({ scrollTop: $("#toform").offset().top - 10 });
    return false;
  });
});
