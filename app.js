//DOM
const container = document.querySelector(".container");
const startBtn = document.querySelector(".btn");
const intro = document.querySelector(".intro");
const audio = new Audio("Gerry And The Pacemakers - Youll Never Walk Alone.mp3");
const audio1 = new Audio("Lliverpool FC - We Shall Not Be Moved.mp3");
const audio2 = new Audio("Lliverpool FC - Allez Allez Allez.mp3");
const end = document.querySelector(".end");
const titles = document.querySelectorAll(".title");
const quote = document.querySelector(".quote");
const seasons = document.querySelectorAll(".season");
const year = document.querySelector(".year h1")

let quoteTime;
let scrollLeft = container.scrollLeft;
//startBtn.addEventListener("click",startSlide);
startBtn.addEventListener("click", startPlay);
//container.addEventListener("transitionstart",showYear)


function startPlay(){
        startBtn.style.display = "none";

        audio2.play();
        showQuote();
        //quoteTime = setInterval(showQuote,10000);

        setTimeout(()=>{
            audio2.pause();
            intro.style.height = "70vh";
            setTimeout(startSlide,1000);
        //  clearInterval(quoteTime);
          },31000);
 };

function startSlide(){

  const time = audio.duration;
  const endWidth = end.offsetWidth;
  const containerWidth = container.offsetWidth;
  const slide = containerWidth - endWidth;
  const walk = scrollLeft - slide;

  console.log(walk);

  audio.play();

  container.style.transition = `${time}s linear`;
  container.style.transform = `translateX(-${slide}px)`;
  //year.style.transform = "translate(-50%,-50%) scale(1.5)"



//  container.addEventListener("transitionstart",showYear);
  container.addEventListener("transitionend",showEnd)

}

//=============== function that shows the years ================================
function showYear(e){

console.log(e.propertyName);



   year.classList.add("show");
  // year.innerHTML = `1977`;
   year.addEventListener("transitionend", ()=> year.classList.remove("show") );

if(e.propertyName === "opacity"){
    seasons.forEach((season)=>{

             const scaleAt = window.innerWidth;
             let seasonLeft = season.offsetLeft;

                 if(scaleAt > seasonLeft){
                  console.log(seasonLeft);
                            }
                    });
          }
};


//=============== function that shows the quote ================================
function showQuote(){

  setTimeout(()=> quote.classList.add("active"),2000);
  setTimeout(()=> quote.classList.remove("active"),25000);
  }

//============== function that shows the end ==================================
function showEnd(e){

    if(e.propertyName === "transform"){
          end.style.width = "100vw";
          end.style.height = "100vh";

          setTimeout(()=> titles.forEach((title) =>{
                title.style.height = "100%";
                title.querySelector("h6").style.opacity = "1";
              }),3000)
      }
};
