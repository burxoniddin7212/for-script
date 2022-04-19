var elInput=document.querySelector("#input");
var elSelect=document.querySelector(".otm");
var elButton=document.querySelector(".button");
var elOutput=document.querySelector(".out-massage");
var grand=110;
var kantrak=90;

var ins=["O'ZMU", "TATU", "TashMI", "Vesministr", "Yuridik"];

for(var user of ins){
  var newOption=document.createElement("option");
  newOption.textContent=user;
  newOption.value=user;
  elSelect.appendChild(newOption);
}

elButton.addEventListener("click", function(e) {
    var namball=elInput;
    

    // if(option.selected.textContent=="O'ZMU" || option.selected.textContent=="O'ZMU"  || option.selected.textContent=="O'ZMU" || option.selected.textContent=="O'ZMU" ||   option.selected.textContent=="O'ZMU"){
    //   true;
    // }
    // else{
    //   elSelect.style.borderColor="red";
    //   return
    // }
    // elSelect.style.borderColor="black";
  var ball=elInput.value.trim();
  //ball=Number(ball);
  var massage="";
  if(ball >= grand){
    massage="Tabriklayman siz o'qishga grand asosida qabul qilindingiz!!!";
  }
  else if(ball >= kantrak){
    massage="Siz kantraktga kirdingiz Tabriklayman!!!";
  }
  else{
    massage="Afsuski siz kira olmadingiz umidingizni sondirmang hali hayot oldinda";
  }
  elOutput.textContent=massage;
})
