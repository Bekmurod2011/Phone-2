let firstPage = document.querySelector('.first-page'),
    phone = document.querySelector('.phone'),
    phone2 = document.querySelector('.phone-2'),
    phon = document.querySelector('.phon'),
    phon2 = document.querySelector('.phon-2'),
    tg2 = document.querySelector('.tg-2'),
    tg = document.querySelector('.tg'),
    qiut10 = document.querySelector('.quit-10'),
    qiut11 = document.querySelector('.quit-11'),
    qiut12 = document.querySelector('.quit-12'),
    qiut13 = document.querySelector('.quit-13'),
    qiut14 = document.querySelector('.quit-14'),
    qiut15 = document.querySelector('.quit-15'),
    qiut16 = document.querySelector('.quit-16'),
    qiut17 = document.querySelector('.quit-17'),
    qiut18 = document.querySelector('.quit-18');

function time() {
    const newDate = new Date();

let topLeft = document.querySelector('.left span'),
    topLeft2 = document.querySelector('.left-2 span'),
    topLeft3 = document.querySelector('.left-3 span'),
    topLeft4 = document.querySelector('.left-4 span')

let hour = newDate.getHours(),
    minute = newDate.getMinutes();

if(hour <= 10) {
    hour = '0' + hour
}

if(minute <= 10) {
    minute = '0' + minute
}

topLeft.innerHTML = `${hour} : ${minute}`
topLeft2.innerHTML = `${hour} : ${minute}`
topLeft3.innerHTML = `${hour} : ${minute}`
topLeft4.innerHTML = `${hour} : ${minute}`


    setInterval(time, 1000);
}

time()

tg2.style.display = 'none'
phon.style.display = 'none'
phon2.style.display = 'none'

phone.addEventListener('click', () => {
    phon.style.display = 'block'
    firstPage.style.display = 'none'
})

phone2.addEventListener('click', () => {
    phon2.style.display = 'block'
    firstPage.style.display = 'none'
})

tg.addEventListener('click', () => {
    tg2.style.display = 'block'
    firstPage.style.display = 'none'
})

qiut10.addEventListener('click', () => {
    firstPage.style.display = 'block'
    phon.style.display = 'none'
})

qiut11.addEventListener('click', () => {
    firstPage.style.display = 'block'
    phon.style.display = 'none'
})

qiut12.addEventListener('click', () => {
    firstPage.style.display = 'block'
    phon.style.display = 'none'
})

qiut13.addEventListener('click', () => {
    firstPage.style.display = 'block'
    phon2.style.display = 'none'
})

qiut14.addEventListener('click', () => {
    firstPage.style.display = 'block'
    phon2.style.display = 'none'
})

qiut15.addEventListener('click', () => {
    firstPage.style.display = 'block'
    phon2.style.display = 'none'
})

qiut16.addEventListener('click', () => {
    firstPage.style.display = 'block'
    tg2.style.display = 'none'
})

qiut17.addEventListener('click', () => {
    firstPage.style.display = 'block'
    tg2.style.display = 'none'
})

qiut18.addEventListener('click', () => {
    firstPage.style.display = 'block'
    tg2.style.display = 'none'
})