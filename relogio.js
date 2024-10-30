const caixaHoras = document.getElementById("horas");
const caixaMinutos = document.getElementById("minutos");
const caixaSegundos = document.getElementById("segundos");
const caixaDate = document.getElementById("date");


const relogio = setInterval(() => {

   let dateToday = new Date();

   const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'};

   let date = dateToday.toLocaleDateString('PT-br', options);
   let hr = dateToday.getHours();
   let min = dateToday.getMinutes();
   let sec = dateToday.getSeconds();


   if(hr < 10) "0" + hr;
   if(hr < 10) "0" + min;
   if(hr < 10) "0" + sec;

   caixaHoras.textContent = hr; 
   caixaMinutos.innerText = min;
   caixaSegundos.innerHTML = sec;
   caixaDate.innerHTML = date;

}, 10);