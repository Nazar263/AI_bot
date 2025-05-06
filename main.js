function bot() {
  
    
  let container=document.getElementById("container");
  
if (!document.getElementById("user")) {
 let user =document.createElement("div");
   
user.id = "user";
user.style.width = "250px";
user.style.height = "auto";
user.style.marginTop = "20px";
user.style.marginLeft = "95px";
user.style.background = "#6F6F6F";
user.style.color = " #D5D4D4";
user.style.textAlign = "left";
user.style.fontSize = "20px";
user.style.fontWeight = "bold";
user.style.borderRadius = "8px";
user.style.wordWrap = "break-word";
user.style.overflowWrap = "break-word";
user.style.whiteSpace = "normal";
user.style.textAlign="center"
user.style.padding="10px"





  user.innerHTML="Що вміє чат-бот?"
  container.appendChild(user); 
}
   
setTimeout(()=>{
if (!document.getElementById("bot")){
let bot = document.createElement("div");

bot.id = "bot";
bot.style.width = "300px";
bot.style.height = "auto";
bot.style.marginTop = "20px";
bot.style.marginLeft = "10px";
bot.style.background = "#6F6F6F";
bot.style.color = " #D5D4D4";
bot.style.textAlign = "justify";
bot.style.lineHeight="1.3";
bot.style.fontSize="20px";
bot.style.fontWeight="bold";
bot.style.borderRadius = "8px";
bot.style.wordWrap = "break-word";
bot.style.overflowWrap = "break-word";
bot.style.whiteSpace = "normal";
bot.style.padding="10px";



  
   
  bot.innerHTML= "AI_bot: <br>Що я вмію? <br> Я – це твій персональний помічник, який зробить твій день цікавішим, кориснішим і веселішим!<br> 🔹 Розваги – анекдоти, меми, загадки та веселі історії.<br> 🔹 Цікаві факти – дізнавайся щось нове про світ, науку, історію та технології.<br> 🔹 Генератор ідей – допоможе знайти натхнення для творчості, навчання або нових проєктів.<br> 🔹 Фітнес-челендж – пропонує корисні вправи та завдання для підтримки форми.<br> 🔹 Спілкування – підтримує діалог і може стати твоїм віртуальним другом.<br> Обирай, що цікавить, і взаємодій з AI_bot у будь-який час! ";
  
  container.appendChild(bot); 
  }
    

    
  },1000)
 
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker registered'))
    .catch((err) => console.error('Service Worker error:', err));
}
