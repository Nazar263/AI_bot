function command() {
  if (!document.getElementById("interestingFact")) {

  setTimeout(()=>{
let interestingFact= document.createElement("div");
interestingFact.innerHTML="AI_bot:<br>Команди =  <br>1) Поточний час!<br>2) Тренування з письма на клавіатурі!<br>3) Створити нотатки! <br>PS: Якщо ти не знайшов потрібного, не турбуйся, з часом будуть оновлення...😉";
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
function copy1() {
  setTimeout(() => {
  let interestingFact = document.createElement("div");
  interestingFact.innerHTML = "<h1 class='h1_js'>Виберіть мову...😉👇</h1>  <button class='button_js' onclick='window1()'>Українська!</button> <button class='button_js' onclick='window2()'>English!</button>";
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
function message_1 (content) {
  setTimeout(() => {
  let interestingFact = document.createElement("div");
  interestingFact.innerHTML = content;
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
} 

let en;
let uk;
let second=0;
let plus;
let flah = false;
let flah2= false;
function lendh_en() {
  
 second=0;
 
const english = [
"I enjoy walking through the park early in the morning",
"The sound of raindrops hitting the window was oddly soothing",
"She hesitated before answering his difficult question",
"The old book had a faint smell of ink and history",
"Without hard work, success remains just a dream",
"The coffee shop on the corner always smells amazing",
"Bright city lights flickered through the dark streets",
"He paused to think before making his final decision",
"The echo of laughter still lingered in the empty hall",
"The wind howled through the cracks in the wooden door",
"She carefully arranged the flowers in a crystal vase",
"His voice carried a hint of sadness despite his smile",
"The library was silent except for the rustling pages",
"Morning sunlight filtered through the heavy curtains",
"The journey was long, but the destination was worth it",
"With patience and dedication, everything is possible",
"The waves crashed against the rocks with rhythmic force",
"A single candle illuminated the dark and quiet room",
"She could hear the distant sound of a train passing by",
"The scent of fresh bread filled the tiny bakery",
"The stars shimmered like diamonds in the night sky",
"The cat curled up near the fireplace, purring softly",
"The ticking clock reminded him of time slipping away",
"He stared at the horizon, lost in his thoughts",
"The melody of the piano filled the air with emotion",
"Snowflakes danced in the air before landing gently",
"She traced the outline of a forgotten letter",
"The road ahead was long and full of possibilities",
"A gentle breeze made the leaves whisper in the wind",
"The attic held forgotten memories and dusty treasures",
"His footsteps echoed in the empty marble hallway",
"She closed her eyes and listened to the ocean waves",
"Clouds gathered, promising a storm on the horizon",
"He carefully folded the letter before placing it away",
"The scent of pine trees filled the mountain air",
"She whispered a secret into the quiet night",
"The sound of thunder rumbled in the distance",
"He watched the candle burn slowly in the dark",
"The old house creaked under the weight of the wind",
"A sudden chill ran down her spine as she turned",
"The aroma of fresh coffee filled the morning air",
"The bridge stretched across the calm, reflective river",
"Her words lingered in the air long after she left",
"He could hear the faint hum of traffic outside",
"The silence between them was louder than words",
"A single raindrop slid down the foggy windowpane",
"The city skyline sparkled under the full moon",
"He ran his fingers across the worn leather cover",
"The forest was alive with the sounds of hidden creatures",
"The diary contained secrets no one had ever read",
"The warm embrace of a blanket felt comforting",
"Time seemed to slow as they stared at each other",
"She carefully picked up the fragile porcelain cup",
"The lighthouse stood tall against the raging sea",
"The wind carried the distant scent of salt and flowers",
"The museum held artifacts from ancient civilizations",
"A gentle mist covered the valley in the early morning",
"Footsteps in the sand disappeared with each wave",
"His heart raced as he approached the old, locked door",
"The clock chimed midnight, breaking the eerie silence",
"A forgotten melody played softly in her mind",
"The fire crackled, sending sparks into the air",
"She turned the page, eager to continue the story",
"The wooden floor creaked under his cautious steps",
"Clouds drifted lazily across the endless blue sky",
"The road wound through the hills like a lazy river",
"The scent of lavender filled the sunlit garden",
"He watched the raindrops create ripples in the puddle",
"The grand chandelier sparkled with golden light",
"A lost photograph fluttered to the ground unnoticed",
"The distant sound of church bells filled the town",
"The train whistle echoed through the empty station",
"An old music box played a hauntingly beautiful tune",
"The world outside was covered in a soft blanket of snow",
"She traced the outline of a name carved into the wood",
"The soft glow of streetlights illuminated the quiet road",
"The door creaked open, revealing a hidden room",
"Memories of childhood flashed through his mind",
"The statue stood as a silent guardian of history",
"The waves carried whispers of stories from the sea",
"Her breath formed small clouds in the cold morning air",
"He walked through the abandoned house with cautious steps",
"A golden sunrise painted the sky in warm colors",
"The flickering candle cast long shadows on the wall",
"A single feather floated gently to the ground",
"The moonlight shimmered on the surface of the lake",
"He picked up a letter sealed with red wax",
"A gentle snowfall coated the world in white",
"The street musician played a tune filled with longing",
"The echo of footsteps faded into the distance",
"A mysterious map lay hidden inside the old book",
"The sound of a violin drifted through the air",
"The castle ruins told tales of ancient battles",
"A bird perched on the windowsill, watching the world",
"The dusty mirror reflected a face from the past",
"The whisper of leaves filled the quiet forest",
"A shooting star streaked across the midnight sky",
"He traced patterns in the sand with his fingers",
"The scent of cinnamon and apples filled the kitchen",
"The last candle flickered before going out",
"A deep sigh escaped her lips as she closed the book"
];
const randomIndex =Math.floor(Math.random()*english.length);
en=english[randomIndex];

message_1(en)

 plus = setInterval(()=>{
  second++
},1000 );

}
function lendh_uk() {

 second=0;
 
const ukraine = ["Сьогодні зранку на небі з’явилися темні хмари",
"Я намагаюся щодня вдосконалювати свої навички",
"Маленький хлопчик уважно слухав розповідь дідуся",
"Коли почалася злива, ми швидко заховалися під навісом",
"Досвід приходить із часом і помилками",
"Щоб досягти мети, потрібно багато працювати",
"На столі лежала стара пожовкла книжка з ілюстраціями",
"Вітер шумів у верхівках дерев, розганяючи хмари",
"Вона дивилася у вікно, задумливо стискаючи чашку чаю",
"Ми довго шукали правильну дорогу серед густого лісу",
"Після дощу повітря наповнилося приємною свіжістю",
"Йому подобалося слухати тишу перед сном",
"На уроці біології ми вивчали будову клітини",
"Дощ барабанив по даху, створюючи мелодійний ритм",
"Ранкове сонце золотило верхівки будинків",
"Книга, яку він читає, захоплює з першої сторінки",
"Цей фільм змусив мене замислитися про життя",
"Коли вона усміхається, все навколо стає світлішим",
"Він довго мовчав, обмірковуючи відповідь",
"Під подушкою вона знайшла старий щоденник",
"Слова іноді можуть ранити більше, ніж дії",
"Вдалині чувся гул автомобілів і крики чайок",
"На уроці історії ми говорили про давню Русь",
"Щоб зрозуміти інших, потрібно навчитися слухати",
"Світ змінюється тоді, коли змінюємося ми",
"Її голос лунав тихо, але впевнено",
"Кожна нова сторінка відкриває новий світ",
"Музика лилася з колонок, наповнюючи кімнату спокоєм",
"Він відкрив вікно, впускаючи свіже повітря",
"Після важкого дня хотілося лише тиші",
"Цей момент назавжди залишиться в моїй пам’яті",
"Хтось тихо постукав у двері",
"Мрії народжуються в тиші ночі",
"Сніг тихо падав, вкриваючи землю білою ковдрою",
"Часом найпростіші речі виявляються найважливішими",
"Ми довго мовчали, дивлячись на захід сонця",
"Життя складається з мільйонів дрібниць",
"Його очі світилися надією і вірою",
"Під кінець осені дерева стояли майже голі",
"Іноді краще мовчати, ніж говорити зайве",
"Вона прокинулася від легкого шуму дощу",
"Найцінніше в житті — це моменти щастя",
"Небо було вкрите рожевими хмарами",
"Старі фотографії зберігають пам’ять про минуле",
"Коли ти віриш у себе, все стає можливим",
"Тиша буває красномовнішою за будь-які слова",
"Він повільно йшов алеєю, розмірковуючи про майбутнє",
"Ці слова залишаться зі мною надовго",
"Розмова тривала до пізньої ночі",
"Друзі — це ті, хто підтримує навіть у темні часи",
"Папір шурхотів під олівцем, коли я писав листа",
"Навіть найменший крок — це рух уперед",
"Її думки плуталися, як клубок ниток",
"Часом досить лише посмішки, щоб день став кращим",
"Ранок був прохолодним, але ясним",
"Двері скрипнули і повільно відчинилися",
"На горизонті з’явилися перші промені сонця",
"У кімнаті панувала затишна тиша",
"Книга лежала відкритою на останній прочитаній сторінці",
"Ці очі бачили більше, ніж можна уявити",
"Мелодія нагадала їй про дитинство",
"Усе було готове для нового початку",
"Тієї ночі йому не спалося",
"Річка текла повільно, ніби задумалася",
"Її кроки лунали по порожньому коридору",
"Під ногами шаруділо осіннє листя",
"У вікні відбивалося вечірнє небо",
"Навколо панував спокій і гармонія",
"Він стояв на краю і дивився вдалечінь",
"День обіцяв бути спокійним і теплим",
"На вулиці вже починало сутеніти",
"Свічка мерехтіла, відкидаючи тіні на стіни",
"Їхні руки зустрілися в легкому дотику",
"Вона чекала на відповідь, затамувавши подих",
"Ранкова кава мала особливий смак",
"За вікном пролітав автобус із пасажирами",
"Він збирав думки, щоб почати розмову",
"Місто прокидалося повільно, зі звуками та світлом",
"На столі лежали розкидані аркуші з нотатками",
"Усе, що відбувається, має свій сенс",
"Старий годинник відраховував останні хвилини",
"Її голос лунав у тиші, мов пісня",
"Кожна ніч приносила нові сни",
"Навіть у темряві можна знайти промінь світла",
"Його серце билося швидше від хвилювання",
"Світло лампи відбивалося в її очах",
"Він повернувся туди, де все починалося",
"Мрії живуть у серці кожної людини",
"Вона писала листа, якого ніколи не надішле",
"Іноді найкраща розмова — це мовчання",
"Вітер грався з її волоссям",
"Кожен день — це шанс щось змінити",
"Сніжинки танцювали в повітрі, мов маленькі зірки",
"Він залишив на столі маленьку записку",
"Дощ стиха шепотів про щось своє",
"Вона відчинила вікно і вдихнула свіже повітря",
"Час летить, коли ми щасливі",
"У її очах було щось невловиме і глибоке"];
const randomIndex =Math.floor(Math.random()*ukraine.length);
uk=ukraine[randomIndex];

message_1(uk);
 plus = setInterval(()=>{
  second++
},1000);
}

function window1() {
  message_1("<h1 class='h1_js'>Вибрана мова: 'Українська'!</h1><p class='p_js'>Після натиснення кнопки 'START' якомога швидше переписуй речення...😉👇</p><button class='button_js_START' onclick='lendh_uk()'>START</button>")
}
function window2() {
  message_1 ( "<h1 class='h1_js'>Вибрана мова: 'English'!</h1><p class='p_js'>Після натиснення кнопки 'START' якомога швидше переписуй речення...😉👇</p><button class='button_js_START' onclick='lendh_en()'>START</button>")
}

function check () {
  let time= new Date();
  let hours = time.getHours().toString().padStart(2,'0');
  let minutes=time.getMinutes().toString().padStart(2,'0');
  let seconds= time.getSeconds().toString().padStart(2,'0');
  
  let pole = document.getElementById("input"); 
  
  if (pole.value!=="") {
  let message=document.createElement("div");
message.innerHTML=pole.value;
message.style.width = "270px";
message.style.height = "auto";
message.style.marginTop = "20px";
message.style.marginLeft = "80px"; 
message.style.background = "#6F6F6F"; 
message.style.color = " #D5D4D4";
message.style.textAlign = "justify";
message.style.fontSize = "20px";
message.style.fontWeight = "bold"; 
message.style.borderRadius = "8px";
message.style.wordWrap = "break-word";
message.style.overflowWrap = "break-word";
message.style.whiteSpace = "normal";
message.style.textAlign="center";
message.style.padding="10px";

document.getElementById("container").appendChild(message); 

if (String(pole.value.trim().toLowerCase())==="поточний час!") {
 message_1(time)
} 
else if ( String(pole.value.trim().toLowerCase())==="створити нотатки!") {
  
  flah2=true;
  message_1( "AI_bot:<br>Записуй мені, що ти хотів би додати до своїх нотаток...😉<br>PS: Щоб видалити нотатки, вкажи мені: Видали нотатки! <br>А щоб переглянути, вкажи: Покажи мені мої нотатки!")}
else if (flah2 && pole.value.trim().toLowerCase()==="покажи мені мої нотатки!") {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  if (notes.length>0) {
  message_1("AI_bot: <br> "+ notes.join("<br>"))
} else {
  message_1("AI_bot:<br>Нотатничок пустий...🤷")
} 
}else if (flah2 && String(pole.value.trim().toLowerCase())==="видали нотатки!") {
  localStorage.removeItem("notes");
  message_1("AI_bot:<br>Нотатничок очишченно...🗑️")
} else if (flah2 && String(pole.value.trim()!=="" )) {
let notes = JSON.parse(localStorage.getItem("notes")) || [];
   notes.push(pole.value.trim());
   localStorage.setItem("notes", JSON.stringify(notes));
  message_1("AI_bot:<br>Збереженно...😉")
}
else if (String(pole.value.trim().toLowerCase())==="тренування з письма на клавіатурі!") { flah=true;
  message_1("<h1 class='h1_js'>Виберіть мову...😉👇</h1>  <button class='button_js' onclick='window1()'>Українська!</button> <button class='button_js' onclick='window2()'>English!</button>")
}
else  if ( flah && String(pole.value.trim())===uk || String(pole.value.trim())===en) {
  message_1("Вітаю...🎉😉<br> Ваше речення повністю вірне, час за який було написано: " + second + " секунд <button class='button_js_again' onclick='copy1()'>Спробувати ще раз!</button>")
  
clearInterval(plus);
 

}else if ( flah && String(pole.value.trim())!==uk && String(pole.value.trim())!==en) {
  message_1("Вибачте, та ваше речення має помилки...😐 час за який було написано: " + second + " секунд <button class='button_js_again' onclick='copy1()'>Спробувати ще раз!</button>")
clearInterval(plus);
 
}else {
message_1(" AI_bot:<br>Не правильна команда... 🤷")
setTimeout(()=>{
let interestingFact1= document.createElement("div");
interestingFact1.innerHTML="AI_bot:<br>Команди =  <br> 1) Поточний час!<br>2) Тренування з письма на клавіатурі!<br>3) Створити нотатки!<br>PS: Якщо ти не знайшов потрібного, не турбуйся, з часом будуть оновлення...😉";
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

function animation() {
  const box = document.getElementById("navigation");
  box.classList.remove("navi2");
  box.classList.toggle("navi");
}
function animation2() {
  const box2 = document.getElementById("navigation");
  box2.classList.remove("navi");
  box2.classList.toggle("navi2");
}
function global_Check() {
  animation2(),
  check()
}
