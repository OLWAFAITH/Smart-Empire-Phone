function money(){
	text = localStorage.getItem("TotalAmount");
	obj = JSON.parse(text);
	document.getElementById("totalbal").value = obj;
}
function alertbtn() {
	alertboard.style.display = "block";
	ccboard.style.display = 'none';
	alertboard.innerHTML ="<br>" +"<li>" + "Welcome to Smart Empire Voucher home of superb technology" + "</li>" + "<hr>" + "<br>";
	alertboard.innerHTML +="<br>" +"<li>" + "You can always add more cash to your portal using CRYPTOCURRENCIES, BANK TRANSFER and many more." + "</li>" + "<hr>" + "<br>";
	alertboard.innerHTML +="<li>" + "You can also get Support from our Support team using the ACE button." + "</li>" + "<hr>";
}
function changeview() {
	alertboard.style.display = "none";
}
function changevieww() {
	ccboard.style.display = 'none';
	alertbox.style.display = 'none';
}
function transactionbtn() {
	transactionboard.style.display = "block";
	voucherboard.style.display = "none";

	text = localStorage.getItem("gomobile");
	obj = JSON.parse(text);
	
	for (let i = 0; i < obj.length; i++) {
    document.getElementById("transactionboard").innerHTML += "<li>" + obj[i].Provider+ "-----------" + obj[i].Amount + "</li>" +"<br>";
	}
	
}
function generatorbtn() {
	voucherboard.style.display = "block";
	transactionboard.style.display = "none";
	voucherboard.innerHTML = null;
	var a = totalbal.value;
	var b = amount.value;
	var c = a - b;
	totalbal.value = c;
	localStorage.TotalAmount = JSON.stringify(c);
	if (a <= 0) {
		alertbox.style.display = "block";
		totalbal.value = 0;
		voucherboard.innerHTML = null;

	}
	if (provider.value == "AIRTEL") {
	 var d = '19' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 var e = '31' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 var f = '07' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 var g = '09' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 var AIRTEL = d + e + f;
	 voucherboard.innerHTML += provider.value + amount.value + " " + d + "-" + e + "-" + f+ 5 + "-" + g + 3 + " "; 
	 voucherboard.innerHTML += "<br>";
	}else{
		if (provider.value == "GLO") {
			var d = '71' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 		var e = '31' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 		var f = '07' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 		var g = '22' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
			 var GLO = d + e + f;
	 		voucherboard.innerHTML += provider.value + " " + d + "-" + e + "-" + f + "-" +g;
	 		voucherboard.innerHTML += "<br>";
		}else{
		if (provider.value == "GODATA") {
			var d = '72' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 		var e = '31' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 		var f = '0' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
			 var GLO = d + e + f;
	 		voucherboard.innerHTML += provider.value + " " + d + "-" + e + "-" + f;
	 		voucherboard.innerHTML += "<br>";
		}else{
		if (provider.value == "MTN") {
			var d = '00' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 		var e = '31' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 		var f = '07' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
			 var GLO = d + e + f;
	 		voucherboard.innerHTML += provider.value + " " + d + "-" + e + "-" + f;
	 		voucherboard.innerHTML += "<br>";
		}else{
		if (provider.value == "9MOBILE") {
			var d = '90' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 		var e = '31' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 		var f = '07' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
			 var GLO = d + e + f;
	 		voucherboard.innerHTML += provider.value + " " + d + "-" + e + 5 + "-" + f + 3;
	 		voucherboard.innerHTML += "<br>";
		}else{
			if(totalbal.value = 0){
				voucherboard.style.display = 'none';
			}
		}
	}
}
}
}
var allproduct = [];
let getCus =JSON.parse(localStorage.getItem('gomobile'));
	getCus !==null ? allproduct=getCus : allproduct =[];
	
		history = {};
			history.Provider = provider.value + " " +("Not Used");
			history.Amount = amount.value;
						allproduct.push(history);
						localStorage.gomobile = JSON.stringify(allproduct);
		}
function ccbtn(){
	ccboard.style.display = 'block';	
	alertboard.style.display = "none";
}
function send(){
	ccboardscreen.innerHTML += message.value + "  &larr;" + '<hr>' + "<br>";
	message.value = null;
}
function addcashbtn() {
	alert("UNDER CONSTRUCTION")
}
var myVar = setInterval(clock, 1000);
function clock() {
     faith= new Date();
    ear.innerHTML = faith.toLocaleTimeString();
    a=faith.getHours();
    b=faith.getMinutes();
    c=faith.getSeconds();

    setTimeout(clock, 1000)
    
}
var player1;
var player2;
var check;
function You() {
      player1 = playerone.value;
           if (res.innerHTML = playerone.value) {
            // res.innerHTML = playerone.value+'successfully registered';
           showing.innerHTML= ("");               
      }
       player2 = playertwo.value;
      if (good.innerHTML = playertwo.value) {
            showing2.innerHTML= ("Begin The Game (Good Luck 🎉🎉✨✨ )");  
               
            
      }else{
            good.innerHTML = ("Waiting For Player");

            showing2.innerHTML= ("Waiting For Player")

         

            showing.innerHTML= ("Waiting For Player")
      }
      if (player1 == "") {
            alert("is empty")
            show();
      }
     
}
var myVar = setInterval(clock, 1000);

function clock() {
     faith= new Date();
    gun.innerHTML = faith.toLocaleTimeString();
    a=faith.getHours();
    b=faith.getMinutes();
    c=faith.getSeconds();

    setTimeout(clock, 1000)
    
} 
clock();

let active = 'x'
function show (e){
      player1 = playerone.value;
      if (player1 == "") {
            showing2.innerHTML = 'REGISTER YOUR NAME  MAM / SIR '
            e.target.innerHTML = '';
      }
      else{
            if(e.target.innerText || check ){
                  return
            } else if(active == 'x'){
                  e.target.innerHTML = 'x'
                  active = 'o'
                  showing2.innerHTML = player2 + ' turn'
            } else {
                  e.target.innerHTML = 'o'
                  active = 'x'
                  showing2.innerHTML = player1 + ' turn'
            }
      }
      


      if (
           (one.innerText == 'o' && five.innerText == 'o' && nine.innerText == 'o')||
           (three.innerText == 'o' && five.innerText == 'o' && seven.innerText == 'o') ||
           (two.innerText == 'o' && five.innerText == 'o' && eight.innerText == 'o') ||
           (one.innerText == 'o' && four.innerText == 'o' && seven.innerText == 'o')||
           (four.innerText == 'o' && five.innerText == 'o' && six.innerText == 'o')||
           (seven.innerText == 'o' && eight.innerText == 'o' && nine.innerText == 'o')||
           (one.innerText == 'o' && two.innerText == 'o' && three.innerText == 'o') ||
           (three.innerText == 'o' && six.innerText == 'o' && nine.innerText == 'o')
     ) {

      showing2.innerHTML=(player2 + " won ✨✨🎉🎉🎊🎉 ");
      ++scoreboard2.innerHTML;
          check = true
  
     } 
     
      if (
            (one.innerText == 'x' && five.innerText == 'x' && nine.innerText == 'x')||
            (three.innerText == 'x' && five.innerText == 'x' && seven.innerText == 'x') ||
            (two.innerText == 'x' && five.innerText == 'x' && eight.innerText == 'x') ||
            (one.innerText == 'x' && four.innerText == 'x' && seven.innerText == 'x')||
            (four.innerText == 'x' && five.innerText == 'x' && six.innerText == 'x')||
            (seven.innerText == 'x' && eight.innerText == 'x' && nine.innerText == 'x')||
            (one.innerText == 'x' && two.innerText == 'x' && three.innerText == 'x') || 
            (three.innerText == 'x' && six.innerText == 'x' && nine.innerText == 'x')
      ) {
            showing2.innerHTML=(player1 + " won ✨✨🎉🎉🎊🎉 ");
            ++scoreboard.innerHTML;
            console.log(body.innerHTML);
            
            check = true
            
      } else if ((one.innerText == 'x' || one.innerText == 'o') && (two.innerText == 'x' || two.innerText == 'o') && (three.innerText == 'x' || three.innerText == 'o') && (four.innerText == 'x' || four.innerText == 'o') && (five.innerText == 'x' || five.innerText == 'o') && (six.innerText == 'x' || six.innerText == 'o') && (seven.innerText == 'x' || seven.innerText == 'o') && (eight.innerText == 'x' || eight.innerText == 'o') && (nine.innerText == 'x' || nine.innerText == 'o')) {
            showing2.innerHTML=("It Is a draw please continue 😒😒😒😒")
      }

}


function Continue(){
      check = false

      body.innerHTML = `<tr border:2px>
      <td><button id="one" onclick="show(event)"></button></td>
      <td><button id="two" onclick="show(event)"></button></td>
      <td><button id="three" onclick="show(event)"></button></td>
  </tr>
  <tr>
      <td><button id="four" onclick="show(event)"></button></td>
      <td><button id="five" onclick="show(event)"></button></td>
      <td><button id="six" onclick="show(event)"></button></td>
  </tr>
  <tr>
      <td><button id="seven" onclick="show(event)"></button></td>
      <td><button id="eight" onclick="show(event)"></button></td>
      <td><button id="nine" onclick="show(event)"></button></td>
  </tr>`
  console.log(body.innerHTML);

}
function Session(){
      location.reload();
}

var x = document.getElementById('coded');
function son(){
    x.play();
}
function sof(){
    x.pause();
}
var x = document.getElementById('nice');
function son(){
    x.play();
}
function sof(){
    x.pause();
}
let sound = new Audio;
sound.src = 'audio/Twenty One Pilots - Car Radio.mp3'
   function home(){
       phone.style.display = 'none';
       background.style.display = 'block';
   }
   function call(){
       background.style.display = 'none';
       calling.style.display = 'block';
   }	
   function clearFunc(num){
    // let dis = num;
    typingnumbers.value +=num;
    console.log(num)
   }
   
function clearNums() {
	var numberVal = typingnumbers.value;
	//  while (numberVal != "") {
		// 	console.log(sliced);
		//  }
		    let sliced = numberVal.substring(0, numberVal.length - 1);
			typingnumbers.value = sliced;
}

function calls() {
      ringing.style.display = 'block';
      caller.style.display = 'none';
    
      caller.style.display = 'block';
      calling.style.display = 'none';
    if (typingnumbers.value.length == 11) {
          identifier.innerHTML= endgame.value;
          ringing.style.display = 'block';
          sound.play()

          
    }
	
	if (typingnumbers.value.includes("*555*")) {
		line2.innerHTML= endgame.value  +  amount.value + ("  Recharge Successful  🎉✨🎊🎉✨✨");
	}else if (typingnumbers.value.includes("*126*" )) {
		line2.innerHTML= airtel.value +   (  "Recharge Successful  🎉✨🎊🎉✨✨");
		typingnumbers.value = ("*555*" )
			line2.innerHTML = ("try again using *555* below")
	}
	 if (typingnumbers.value.includes("*123*")) {
		line2.innerHTML= glo.value + amount.value + ("    Recharge Successful  🎉✨🎊🎉✨✨");
	 }else if (typingnumbers.value.includes("*126*")) {
			line2.innerHTML= airtel.value +  amount.value + (  "Recharge Successful  🎉✨🎊🎉✨✨");
			typingnumbers.value = ("*123*")
				line2.innerHTML = ("try again using *123* below")
	}else if (typingnumbers.value.includes("*222*")) {
		line2.innerHTML= mobile.value + amount.value +  ("Recharge Successful  🎉✨🎊🎉✨✨");
	}
}

function pack(){
    background.style.display = 'none';
	tac1.style.display = 'block';
}
function make(){
      background.style.display= 'none';
       music.style.display = 'block';
}
function done(){
      ringing.style.display='none';
      endgame.style.display = 'block';
}
