const cityBtns = $('.city-btn')
const eachCity = $('.container-city')
const allBtns = $('.city-btns')
console.log(cityBtns.length)
function cityBtnClicker(compare) {
    console.log('working')
    for (i=0; i< eachCity.length;i++) {
        if (eachCity[i].val() !== compare) {
            eachCity[i].hide()
        }
    }
}
for (i=0; i<cityBtns.length;i++) {
    cityBtns[i].addEventListener('click',cityBtnClicker(cityBtns[i].val()))
}
