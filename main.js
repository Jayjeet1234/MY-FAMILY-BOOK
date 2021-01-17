var treereasons = ["Mother","Father","sister","Me"];
var im = ["n3.jpg", "n4.png", "n1.jpg", "n2.jpg"];
var i=0;
function next() {
 document.getElementById("reasontext").innerHTML = treereasons[i];
  document.getElementById("quotes").src = im[i];
   i++;
}