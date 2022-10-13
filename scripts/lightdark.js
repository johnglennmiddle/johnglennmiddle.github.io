function lightmode() {
const boxes = document.querySelectorAll('.lightdark');
 boxes.forEach(box => {
   box.style.backgroundColor = '#f2f2f2';
   box.style.color = '#000000';
 });
  lightmodeb();buttonlight();
}
function lightmodeb() {
const boxes = document.querySelectorAll('.lightdarkb');
 boxes.forEach(box => {
   box.style.backgroundColor = 'rgb(170,170,170,.4)';
   box.style.color = '#ffffff';
 });
}
function buttonlight() {
const boxes = document.querySelectorAll('.app');
 boxes.forEach(box => {
   box.style.backgroundColor = '#f2f2f2';
   box.style.color = '#000000';
 });
}
function darkmode() {
const boxes = document.querySelectorAll('.lightdark');
 boxes.forEach(box => {
   box.style.backgroundColor = '#1a1a1a';
   box.style.color = '#ffffff';
 });
 darkmodeb();buttondark();
}
function darkmodeb() {
const boxes = document.querySelectorAll('.lightdarkb');
 boxes.forEach(box => {
   box.style.backgroundColor = 'rgb(0,0,0,.50)';
   box.style.color = '#ffffff';
 });
}
function buttondark() {
const boxes = document.querySelectorAll('.app');
 boxes.forEach(box => {
   box.style.backgroundColor = '#1a1a1a';
   box.style.color = '#ffffff';
 });
}