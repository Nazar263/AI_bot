let result =0; 
let numbers10;
let numbers100;
let numbers1000;
function copy1() {
  setTimeout(() => {
  let interestingFact = document.createElement("div");
  interestingFact.innerHTML = "<h1 class='h1_js'>Вибери режим складності...😉</h1> <div class='div_js'> <button class='button_js' onclick='levl_1()'>1-levl</button><button class='button_js' onclick='levl_2()'>2-levl</button><button class='button_js' onclick='levl_3()'>3-levl</button></div>";
  interestingFact.style.width = "300px";
  interestingFact.style.height = "auto";
  interestingFact.style.marginTop = "20px";
  interestingFact.style.marginLeft = "10px";
  interestingFact.style.background = "#6F6F6F";
  interestingFact.style.color = " #D5D4D4";
  interestingFact.style.textAlign = "left";
  interestingFact.style.fontSize = "20px";
  interestingFact.style.fontWeight = "bold";
  interestingFact.style.borderRadius = "8px";
  interestingFact.style.wordWrap = "break-word";
  interestingFact.style.overflowWrap = "break-word";
  interestingFact.style.whiteSpace = "normal";
  interestingFact.style.padding = "10px"
  document.getElementById("container").appendChild(interestingFact);
}, 1000);
}

function command() {
  if (!document.getElementById("interestingFact")) {

  setTimeout(()=>{
let interestingFact= document.createElement("div");
interestingFact.innerHTML="AI_bot:<br>Команди =  <br> 1) Розкажи анекдот!<br> 2)Пограємо у гру: 'Відгадай число!'<br>PS: Якщо ти не знайшов потрібного, не турбуйся, з часом будуть оновлення...😉";
interestingFact.id="interestingFact";
interestingFact.style.width = "300px";
interestingFact.style.height = "auto";
interestingFact.style.marginTop = "20px";
interestingFact.style.marginLeft = "10px";
interestingFact.style.background = "#6F6F6F";
interestingFact.style.color = " #D5D4D4";
interestingFact.style.textAlign = "left";
interestingFact.style.fontSize="20px";
interestingFact.style.fontWeight="bold";
interestingFact.style.borderRadius = "8px";
interestingFact.style.wordWrap = "break-word";
interestingFact.style.overflowWrap = "break-word";
interestingFact.style.whiteSpace = "normal";
interestingFact.style.padding="10px"
document.getElementById("container").appendChild(interestingFact);
},1000)
}
}

function check () {
  let pole = document.getElementById("input");
  if (pole.value!=="") {
  let message=document.createElement("div");
message.innerHTML=pole.value;
message.style.width = "200px";
message.style.height = "auto";
message.style.marginTop = "20px";
message.style.marginLeft = "150px"; 
message.style.background = "#6F6F6F";
message.style.color = " #D5D4D4";
message.style.textAlign = "left";
message.style.fontSize = "20px";
message.style.fontWeight = "bold"; 
message.style.borderRadius = "8px";
message.style.wordWrap = "break-word";
message.style.overflowWrap = "break-word";
message.style.whiteSpace = "normal";
message.style.textAlign="center";
message.style.padding="10px";

document.getElementById("container").appendChild(message); 

const funi = ["— Ти хто? — Я твій сон. — Дивно, а я думав, що ти довший.",
"— Тату, а Дракула справді існує? — Що ти, синку, це ж казки! От погуляти без шапки вийдеш — мама з тобою щось зробить гірше, ніж Дракула!",
"— Куме, а чого ви без шапки? — Та я її зняв. — А перед тим? — Перед тим теж був без шапки.",
"— Дівчино, а чому ви самі сидите? — Бо уявні друзі запізнюються.",
"— Як зекономити на весіллі? — Не одружуватися.",
"— Чим відрізняється студент від професора? — Професор вміє пояснити те, що сам не розуміє.",
"— Чому ти такий щасливий? — Викинув ваги!",
"— Чого розплакався? — Хліб впав маслом донизу! — Ну і що? — А я ще не намазав!",
"— Вибачте, тут можна курити? — Тут навіть дихати небезпечно.",
"— Що таке подвійна радість? — Коли ти поділився проблемою з другом, а виявилося, що в нього гірше.",
"— Чим відрізняється програміст від лікаря? — Лікар лікує живих, а програміст — живе тим, що лагодить мертве.",
"— Ти одружений? — Ні, я просто так виглядаю.",
"— Дорога, ти приготувала щось смачненьке? — Так, тарілку!",
"— Що таке щастя? — Це коли понеділок переноситься на вівторок.",
"— Куме, а вам не здається, що ми забагато п’ємо? — Та ні, куме, мені не здається, я вас бачу один в один!",
"— Чому кури бігають без голови? — Бо думають, що вони ще працюють.",
"— Ви вмієте грати на піаніно? — Не знаю, ніколи не пробував.",
"— У вас є щось дешевше? — Так, будь ласка, двері навпроти.",
"— Чим відрізняється хороший план від поганого? — Хороший працює, поганий — у відпустці.",
"— Ви купили це навмисно? — Ні, випадково, просто впало у кошик.",
"— Коли мрія збулася, що далі? — Думати, чому воно не так круто, як уявлялося.",
"— Що буде, якщо змішати оптиміста й песиміста? — Людина, яка думає, що все буде добре, але запасеться на чорний день.",
"— Де логіка? — У відпустці.",
"— Що таке реальність? — Це коли будильник працює, а ти ні.",
"— Що сказав Піфагор, коли його розбудили о третій ночі? — Що ви хочете — корінь чи квадрат?",
"— Чому математики не жартують? — Бо сміятися доведеться довго пояснювати.",
"— Що буде, якщо програмісти підуть на ферму? — Помилки вийдуть на новий рівень.",
"— Як розрізнити студента і викладача? — Студент спить на лекції, а викладач — після неї.",
"— Що важче: робота чи ліжко? — Робота, бо ліжко притягує.",
"— Як відпочити найкраще? — Зробити вигляд, що працюєш.",
"— Яка найстрашніша річ? — Вийти з дому і забути, чи вимкнув праску.",
"— Що таке продуктивний день? — Це коли встиг втомитися, навіть нічого не зробивши.",
"— Чому у вихідні час йде швидше? — Тому що годинник на відпочинку теж розслабляється.",
"— Чому лікарі пишуть нерозбірливо? — Щоб пацієнти не нервували раніше часу.",
"— Що таке щастя? — Коли вагаєшся, а їжа ще є.",
"— Чому в понеділок всі такі сумні? — Бо забули поставити його на паузу.",
"— Що найважче в житті? — Знайти сенс між сніданком і вечерею.",
"— Що таке справжнє кохання? — Це коли навіть похід у магазин здається пригодою.",
"— Чому біг не для всіх? — Бо деякі люди ще зранку втомлені.",
"— Чому стільці в школі скриплять? — Вони просто натякають на втому.",
"— Чому студенти так люблять канікули? — Бо там можна хоча б теоретично відпочити.",
"— Чому вода в чайнику закипає швидше, коли ти відволікся? — Бо час любить жартувати.",
"— Що буде, якщо все відкласти на завтра? — Буде дуже насичене завтра.",
"— Чому не можна спати весь день? — Бо доведеться прокинутися наступного.",
"— Чому у кави магічні властивості? — Бо вона робить людей схожими на людей.",
"— Що гірше за ранок? — Коли він почався занадто рано.",
"— Як зрозуміти, що тобі потрібен відпочинок? — Якщо під час роботи ти мрієш про ліжко.",
"— Чому понеділок такий важкий? — Бо він працює над тим, щоб ми його ненавиділи.",
"— Що таке прокрастинація? — Це коли треба щось зробити, але ти вибираєш спати.",
"— Чому в метро всі такі серйозні? — Бо грають у гру 'не впусти телефон'.",
"— Як виглядає ідеальний день? — Це коли ранок починається після обіду.",
"— Чому інтернет повільний? — Бо він теж втомився від роботи.",
"— Як зрозуміти, що життя вдалося? — Коли на питання 'Як справи?' можна відповісти без сарказму.",
"— Що таке справжній жах? — Це коли залишилося 1% заряду, а кабель далеко.",

"— Ти працюєш? — Ні, я просто знаходжусь на роботі.",
"— Що робити, якщо нема натхнення? — Чекати, поки настане дедлайн.",
"— Чому інтернет зникає, коли він найбільше потрібен? — Бо він теж любить драму.",
"— Як знайти ідеальну роботу? — Треба просто не шукати.",
"— Чому книги цікавіші за життя? — Бо в житті не можна перегорнути нудні сторінки.",
"— Чому їжа така смачна вночі? — Бо тоді працюють справжні гастрономічні маги.",
"— Що найстрашніше зранку? — Усвідомити, що ти проспав.",
"— Як зробити день кращим? — Вимкнути будильник.",
"— Чому понеділки такі важкі? — Бо вони згадують всі твої вихідні.",
"— Як зекономити гроші? — Просто не виходити з дому.",
"— Чому діти швидко ростуть? — Бо вони не працюють.",
"— Що найкраще після важкого дня? — День, коли можна нічого не робити.",
"— Чому всі так люблять відпочинок? — Бо це єдиний час, коли можна бути собою.",
"— Що страшніше за понеділок? — Вівторок, коли понеділок ще не закінчився.",
"— Як зрозуміти, що втомився? — Коли навіть кава тебе не рятує.",
"— Чому вчора було краще, ніж сьогодні? — Бо вчора ще не настав сьогоднішній день.",
"— Як знайти мотивацію? — Просто її не шукати, вона знайде тебе сама перед дедлайном.",
"— Чому люди працюють? — Бо хтось колись вигадав гроші.",
"— Як швидко пройшов день? — Я його ще не бачив.",
"— Чому життя таке складне? — Бо воно без інструкції.",
"— Що найгірше у вихідні? — Усвідомити, що завтра вже понеділок.",
"— Чому час летить так швидко? — Бо у нього немає гальм.",
"— Як розвеселити друга? — Сказати, що у тебе ще гірше.",
"— Чому телефон розряджається швидше, коли його найбільше потрібно? — Бо він також знає про драматургію.",
"— Що таке хороший настрій? — Це коли ти ще не прочитав новини.",
"— Як змінити життя? — Перестати відкладати будильник.",
"— Чому канікули закінчуються так швидко? — Бо вони працюють на прискореному режимі.",
"— Як не зіпсувати собі день? — Просто не читати листи з роботи.",
"— Що найважче в спорті? — Почати.",
"— Чому коти такі незалежні? — Бо вони не працюють.",
"— Як зрозуміти, що треба відпочити? — Коли навіть кава не допомагає.",
"— Чому ніч така коротка? — Бо день уже на неї зазіхає.",
"— Що робити, коли нема настрою? — Просто не мати його офіційно.",
"— Чому п’ятниця така особлива? — Бо після неї субота.",
"— Як зробити понеділок легшим? — Просто зробити вигляд, що його нема.",
"— Чому час іде швидше, коли ти відпочиваєш? — Бо він любить знущатися.",
"— Що робити, коли нудно? — Згадати, що є ще справи.",
"— Як швидко заснути? — Просто згадати всі помилки в житті.",
"— Чому всі так люблять їжу? — Бо вона ніколи не зраджує.",
"— Що найважливіше в житті? — Ліжко.",
"— Чому не можна спати цілий день? — Бо тоді ніч буде ображена.",
"— Як знайти сенс життя? — Почати з пошуку зарядного для телефону.",
"— Чому понеділок такий жорстокий? — Бо у нього немає совісті.",
"— Що найстрашніше зранку? — Усвідомити, що треба вставати.",
"— Як швидко зробити справу? — Просто сказати, що вона вже зроблена.",
"— Чому дощ іде в найнезручніший момент? — Бо він теж любить сюрпризи.",
"— Як зупинити час? — Просто перестати дивитися на годинник.",
"— Чому їжа вночі смачніша? — Бо совість спить.",
"— Як пережити робочий день? — Просто не думати про нього.",
"— Чому ніч коротка? — Бо вона працює за мінімальну ставку.",
"— Що буде, якщо довго не відповідати на повідомлення? — Люди почнуть думати, що ти зайнятий.",
"— Як зробити день продуктивним? — Просто не відволікатися на соцмережі.",
"— Чому фільми такі цікаві? — Бо там все відбувається швидше, ніж у реальному житті.",
"— Як швидко пройшла година? — Я ще навіть не почав працювати.",
"— Чому люди бояться дедлайнів? — Бо вони приходять непомітно.",
"— Як знайти спокій? — Вимкнути телефон.",
"— Що найважче в житті? — Вибрати, що подивитися на Netflix.",
"— Як зробити день довшим? — Просто почати робити щось нудне.",
"— Чому зранку важко вставати? — Бо ліжко не хоче тебе відпускати.",
"— Як легко прокинутися? — Просто забути, що треба вставати.",
"— Що гірше за ранок понеділка? — Вечір неділі.",
"— Як зробити настрій кращим? — Просто не читати новини.",
"— Чому дорослі так люблять каву? — Бо вона дозволяє їм існувати.",
"— Що найстрашніше перед сном? — Спогади про всі зроблені помилки.",
"— Чому Wi-Fi зникає у важливий момент? — Бо він теж любить драми."
];

const randomIndex =Math.floor(Math.random()*funi.length);
facts=funi[randomIndex];

if (String(pole.value.trim().toLowerCase())==="розкажи анекдот!") {
    
  setTimeout(() => {
  let interestingFact = document.createElement("div");
  interestingFact.innerHTML = facts ;
  interestingFact.style.width = "300px";
  interestingFact.style.height = "auto";
  interestingFact.style.marginTop = "20px";
  interestingFact.style.marginLeft = "10px";
  interestingFact.style.background = "#6F6F6F";
  interestingFact.style.color = " #D5D4D4";
  interestingFact.style.textAlign = "left";
  interestingFact.style.fontSize = "20px";
  interestingFact.style.fontWeight = "bold";
  interestingFact.style.borderRadius = "8px";
  interestingFact.style.wordWrap = "break-word";
  interestingFact.style.overflowWrap = "break-word";
  interestingFact.style.whiteSpace = "normal";
  interestingFact.style.padding = "10px"
  document.getElementById("container").appendChild(interestingFact);
}, 1000)

} else if (String(pole.value.trim().toLowerCase())==="пограємо у гру: 'відгадай число!'") {
  setTimeout(() => {
   let interestingFact= document.createElement("div");
  interestingFact.innerHTML = "<h1 class='h1_js'>Вибери режим складності...😉</h1> <div class='div_js'> <button class='button_js' onclick='levl_1()'>1-levl</button><button class='button_js' onclick='levl_2()'>2-levl</button><button class='button_js' onclick='levl_3()'>3-levl</button></div>";
  interestingFact.style.width = "300px";
  interestingFact.style.height = "auto";
  interestingFact.style.marginTop = "20px";
  interestingFact.style.marginLeft = "10px";
  interestingFact.style.background = "#6F6F6F";
  interestingFact.style.color = " #D5D4D4";
  interestingFact.style.textAlign = "left";
  interestingFact.style.fontSize = "20px";
  interestingFact.style.fontWeight = "bold";
  interestingFact.style.borderRadius = "8px";
  interestingFact.style.wordWrap = "break-word";
  interestingFact.style.overflowWrap = "break-word";
  interestingFact.style.whiteSpace = "normal";
  interestingFact.style.padding = "10px"
  document.getElementById("container").appendChild(interestingFact);
},1000);
}else if (Number(pole.value.trim())===numbers10||Number(pole.value.trim())===numbers100||Number(pole.value.trim())===numbers1000) {
  setTimeout(() => {
  let interestingFact = document.createElement("div");
  interestingFact.innerHTML = "Ти вгадав, вітаю...🎉😉<br>Спроби: "+result + "<br> <button class='button_again_js' onclick='copy1()'>Грати ще раз!</button>"
  interestingFact.style.width = "300px";
  interestingFact.style.height = "auto";
  interestingFact.style.marginTop = "20px";
  interestingFact.style.marginLeft = "10px";
  interestingFact.style.background = "#6F6F6F";
  interestingFact.style.color = " #D5D4D4";
  interestingFact.style.textAlign = "left";
  interestingFact.style.fontSize = "20px";
  interestingFact.style.fontWeight = "bold";
  interestingFact.style.borderRadius = "8px";
  interestingFact.style.wordWrap = "break-word";
  interestingFact.style.overflowWrap = "break-word";
  interestingFact.style.whiteSpace = "normal";
  interestingFact.style.padding = "10px"
  document.getElementById("container").appendChild(interestingFact);
}, 1000);
result++;

} else if (Number(pole.value.trim())>numbers10||Number(pole.value.trim())>numbers100||Number(pole.value.trim())>numbers1000) {
  setTimeout(() => {
   let interestingFact= document.createElement("div");
  interestingFact.innerHTML = "Число завелике...🤷";
  interestingFact.style.width = "300px";
  interestingFact.style.height = "auto";
  interestingFact.style.marginTop = "20px";
  interestingFact.style.marginLeft = "10px";
  interestingFact.style.background = "#6F6F6F";
  interestingFact.style.color = " #D5D4D4";
  interestingFact.style.textAlign = "left";
  interestingFact.style.fontSize = "20px";
  interestingFact.style.fontWeight = "bold";
  interestingFact.style.borderRadius = "8px";
  interestingFact.style.wordWrap = "break-word";
  interestingFact.style.overflowWrap = "break-word";
  interestingFact.style.whiteSpace = "normal";
  interestingFact.style.padding = "10px"
  document.getElementById("container").appendChild(interestingFact);
},1000);
result++;
} else if (Number(pole.value.trim())<numbers10||Number(pole.value.trim())<numbers100||Number(pole.value.trim())<numbers1000) {
  setTimeout(() => {
   let interestingFact= document.createElement("div");
  interestingFact.innerHTML = "Число замале...🤷";
  interestingFact.style.width = "300px";
  interestingFact.style.height = "auto";
  interestingFact.style.marginTop = "20px";
  interestingFact.style.marginLeft = "10px";
  interestingFact.style.background = "#6F6F6F";
  interestingFact.style.color = " #D5D4D4";
  interestingFact.style.textAlign = "left";
  interestingFact.style.fontSize = "20px";
  interestingFact.style.fontWeight = "bold";
  interestingFact.style.borderRadius = "8px";
  interestingFact.style.wordWrap = "break-word";
  interestingFact.style.overflowWrap = "break-word";
  interestingFact.style.whiteSpace = "normal";
  interestingFact.style.padding = "10px"
  document.getElementById("container").appendChild(interestingFact);
},1000);
result++;
}else{
  setTimeout(() => {
   let interestingFact= document.createElement("div");
  interestingFact.innerHTML = " AI_bot:<br>Не правильна команда... 🤷";
  interestingFact.style.width = "300px";
  interestingFact.style.height = "auto";
  interestingFact.style.marginTop = "20px";
  interestingFact.style.marginLeft = "10px";
  interestingFact.style.background = "#6F6F6F";
  interestingFact.style.color = " #D5D4D4";
  interestingFact.style.textAlign = "left";
  interestingFact.style.fontSize = "20px";
  interestingFact.style.fontWeight = "bold";
  interestingFact.style.borderRadius = "8px";
  interestingFact.style.wordWrap = "break-word";
  interestingFact.style.overflowWrap = "break-word";
  interestingFact.style.whiteSpace = "normal";
  interestingFact.style.padding = "10px"
  document.getElementById("container").appendChild(interestingFact);
},1000);
setTimeout(()=>{
let interestingFact1= document.createElement("div");
interestingFact1.innerHTML="AI_bot:<br>Правильні команди = <br>1) Розкажи анекдот!<br> 2)Пограємо у гру: 'Відгадай число!'<br>PS: Якщо ти не знайшов потрібного, не турбуйся, з часом будуть оновлення...😉  ";
interestingFact1.style.width = "300px";
interestingFact1.style.height = "auto";
interestingFact1.style.marginTop = "20px";
interestingFact1.style.marginLeft = "10px";
interestingFact1.style.background = "#6F6F6F";
interestingFact1.style.color = " #D5D4D4";
interestingFact1.style.textAlign = "left";
interestingFact1.style.fontSize="20px";
interestingFact1.style.fontWeight="bold";
interestingFact1.style.borderRadius = "8px";
interestingFact1.style.wordWrap = "break-word";
interestingFact1.style.overflowWrap = "break-word";
interestingFact1.style.whiteSpace = "normal";
interestingFact1.style.padding="10px"
document.getElementById("container").appendChild(interestingFact1);
},2000)
 }
 pole.value="";   
  }
}

function levl_1() {
  numbers10 = Math.floor(Math.random()*10)+1;
  
  
  setTimeout(() => {
   let interestingFact= document.createElement("div");
  interestingFact.innerHTML = "AI_bot:<br>'Я загадав число від 1 до 10!<br>Успіху у відгадуванні...😉'";
  interestingFact.style.width = "300px";
  interestingFact.style.height = "auto";
  interestingFact.style.marginTop = "20px";
  interestingFact.style.marginLeft = "10px";
  interestingFact.style.background = "#6F6F6F";
  interestingFact.style.color = " #D5D4D4";
  interestingFact.style.textAlign = "left";
  interestingFact.style.fontSize = "20px";
  interestingFact.style.fontWeight = "bold";
  interestingFact.style.borderRadius = "8px";
  interestingFact.style.wordWrap = "break-word";
  interestingFact.style.overflowWrap = "break-word";
  interestingFact.style.whiteSpace = "normal";
  interestingFact.style.padding = "10px"
  document.getElementById("container").appendChild(interestingFact);
},1000);''
result=0;
}
function levl_2() {
  numbers100 = Math.floor(Math.random()*100)+1;
 
  
  setTimeout(() => {
   let interestingFact= document.createElement("div");
  interestingFact.innerHTML = "AI_bot:<br>'Я загадав число від 10 до 100!<br>Успіху у відгадуванні...😉'";
  interestingFact.style.width = "300px";
  interestingFact.style.height = "auto";
  interestingFact.style.marginTop = "20px";
  interestingFact.style.marginLeft = "10px";
  interestingFact.style.background = "#6F6F6F";
  interestingFact.style.color = " #D5D4D4";
  interestingFact.style.textAlign = "left";
  interestingFact.style.fontSize = "20px";
  interestingFact.style.fontWeight = "bold";
  interestingFact.style.borderRadius = "8px";
  interestingFact.style.wordWrap = "break-word";
  interestingFact.style.overflowWrap = "break-word";
  interestingFact.style.whiteSpace = "normal";
  interestingFact.style.padding = "10px"
  document.getElementById("container").appendChild(interestingFact);
},1000);''
result=0;
}
function levl_3() {
  numbers1000= Math.floor(Math.random()*1000)+1;
  
  
  setTimeout(() => {
   let interestingFact= document.createElement("div");
  interestingFact.innerHTML = "AI_bot:<br>'Я загадав число від 100 до 1000!<br>Успіху у відгадуванні...😉'";
  interestingFact.style.width = "300px";
  interestingFact.style.height = "auto";
  interestingFact.style.marginTop = "20px";
  interestingFact.style.marginLeft = "10px";
  interestingFact.style.background = "#6F6F6F";
  interestingFact.style.color = " #D5D4D4";
  interestingFact.style.textAlign = "left";
  interestingFact.style.fontSize = "20px";
  interestingFact.style.fontWeight = "bold";
  interestingFact.style.borderRadius = "8px";
  interestingFact.style.wordWrap = "break-word";
  interestingFact.style.overflowWrap = "break-word";
  interestingFact.style.whiteSpace = "normal";
  interestingFact.style.padding = "10px"
  document.getElementById("container").appendChild(interestingFact);
},1000);''
result=0;
}