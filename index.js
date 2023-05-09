const HRSText = document.querySelector('.HRS-Text');
const MINText = document.querySelector('.MIN-Text');
const SECText = document.querySelector('.SEC-Text');

const start = document.querySelector('.start');
const restart = document.querySelector('.restart');

let startSetting = 'enabled';
let getSec = null;
let getMin = null;
let getHr = null;
let total = null;

SECText.addEventListener('click', () => {
    getSec = parseInt(prompt('60이하 숫자를 입력해주세요'));
    if (getSec >=0 && getSec <= 60) {
        SECText.textContent = getSec;
        startSetting = 'start'
        if (startSetting === 'start'){
            start.style.backgroundImage = 'url(/img/start-default.png)';
            restart.style.backgroundImage = 'url(/img/reset-default.png)';
        }
    } 
    else {
        alert('60이하 숫자만 입력해주세요')
    }
})

MINText.addEventListener('click', () => {
    getMin = parseInt(prompt('60이하 숫자를 입력해주세요'));
    if (getMin >=0 && getMin <= 60) {
        MINText.textContent = getMin;
        startSetting = 'start'
        if (startSetting === 'start'){
            start.style.backgroundImage = 'url(/img/start-default.png)';
            restart.style.backgroundImage = 'url(/img/reset-default.png)';
        }
    } 
    else {
        alert('60이하 숫자만 입력해주세요')
    }
})

HRSText.addEventListener('click', () => {
    getHr = parseInt(prompt('99이하 숫자를 입력해주세요'));
    if (getHr >=0 && getHr <= 99) {
        HRSText.textContent = getHr;
        startSetting = 'start'
        if (startSetting === 'start'){
            start.style.backgroundImage = 'url(/img/start-default.png)';
            restart.style.backgroundImage = 'url(/img/reset-default.png)';
        }
    } 
    else {
        alert('99이하 숫자만 입력해주세요')
    }
})



start.addEventListener('click', ()=>{
    start.style.backgroundImage = 'url(/img/pause.png)';
    let total = getHr * 3600 + getMin * 60 + getSec;
    let timer = setInterval(()=>{
        if (total === 0){
            clearInterval(timer);
            start.style.backgroundImage = 'url(/img/start-disabled.png)';
            restart.style.backgroundImage = 'url(/img/reset-disabled.png)';
            alert('Finish');


        } else {
            total -= 1;
            let hr = parseInt(total / 3600);
            let min = parseInt(total % 3600 / 60);
            let sec = parseInt(total % 3600 % 60);

            SECText.textContent = sec;
            MINText.textContent = min;
            HRSText.textContent = hr;

        }
    }, 1000)

})




