const work = document.getElementById("work")
const play = document.getElementById("play")
const study = document.getElementById("study")
const exercise = document.getElementById("exercise")
const social = document.getElementById("social")
const selfCare = document.getElementById("self-care")

import data from "./data.json" assert { type: "json" }

console.log(data[0])

daily()


document.getElementById("daily").addEventListener("click", function(){
    daily()
})

document.getElementById("weekly").addEventListener("click", function(){
    weekly()
})

document.getElementById("monthly").addEventListener("click", function(){
    monthly()
})

function daily(){
    document.getElementById("cards").innerHTML =
    data.map(datas=>{
        return(`
            <section id=${datas.title}>
            <div class="back-card ${datas.title}">
              <img src=${datas.image} alt="svg image" >
            </div> 
      
            <div class="info-card">
              <div>
                <h4>${datas.title}</h4>
                <i class="fa-solid fa-ellipsis"></i>
                
              </div>
      
              <div>
                <p>${datas.timeframes.daily.current}hrs</p>
                <span>Last Hours - ${datas.timeframes.daily.previous}hrs</span>
              </div>
          </div>
          </section>`
        )
    })
}


function weekly(){
    document.getElementById("cards").innerHTML =
    data.map(datas=>{
        return(`
            <section id=${datas.title}>
            <div class="back-card ${datas.title}">
              <img src=${datas.image} alt="svg image">
            </div> 
      
            <div class="info-card">
              <div>
                <h4>${datas.title}</h4>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
      
              <div>
                <p>${datas.timeframes.weekly.current}hrs</p>
                <span>Last Week - ${datas.timeframes.weekly.previous}hrs</span>
              </div>
          </div>
          </section>`
        )
    })
}

function monthly(){
    document.getElementById("cards").innerHTML =
    data.map(datas=>{
        return(`
            <section id=${datas.title}>
            <div class="back-card ${datas.title}">
              <img src=${datas.image} alt="svg image" >
            </div> 
      
            <div class="info-card">
              <div>
                <h4>${datas.title}</h4>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
      
              <div>
                <p>${datas.timeframes.monthly.current}hrs</p>
                <span>Last Month - ${datas.timeframes.monthly.previous}hrs</span>
              </div>
          </div>
          </section>`
        )
    })
}


