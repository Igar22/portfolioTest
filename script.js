import i18Obj from './translate.js'

const changeThemeLight = document.querySelector('.light')
const changeThemeDark = document.querySelector('.dark')
const page = document.querySelector('.page')
const langEn = document.querySelector('.lang-en')
const langRu = document.querySelector('.lang-ru')

changeThemeLight.addEventListener('click', () => {
  page.classList.toggle('light-theme')
  page.classList.toggle('dark-theme')
})
changeThemeDark.addEventListener('click', () => {
  page.classList.toggle('dark-theme')
  page.classList.toggle('light-theme')
})

langEn.classList.add('push-en')
langRu.addEventListener('click', changeRu)
langEn.addEventListener('click', changeEn)
function changeRu() {
  langRu.classList.toggle('push-ru')
  langEn.classList.toggle('push-en')
  for(let key in i18Obj['ru']) {
    let el = document.querySelector('.lang-' + key)
    el.innerHTML = i18Obj['ru'][key]
  }
}

function changeEn() {
  langRu.classList.toggle('push-ru')
  langEn.classList.toggle('push-en')
  langRu.classList.toggle('push-ru-dark')
  langEn.classList.toggle('push-en-dark')    
  for(let key in i18Obj['en']) {
    let el = document.querySelector('.lang-' + key)
    el.innerHTML = i18Obj['en'][key]
  }
}

const winter = document.querySelector('.album-winter')
const spring = document.querySelector('.album-spring')
const summer = document.querySelector('.album-summer')
const autumn = document.querySelector('.album-autumn')

const portfolioBtn = document.querySelectorAll('.portfolio-btn')

portfolioBtn[0].style = 'background:#BDAE82;color:#FFFFFF;'
spring.style = 'display: none;'
summer.style = 'display: none;'
autumn.style = 'display: none;'

portfolioBtn[0].addEventListener('click', () => {
  portfolioBtn[0].style = 'background:#BDAE82;color:#FFFFFF;'
  portfolioBtn[1].style = 'border-color: #BDAE82;background:#FFFFFF;color:#000000;'
  portfolioBtn[2].style = 'border-color: #BDAE82;background:#FFFFFF;color:#000000;'
  portfolioBtn[3].style = 'border-color: #BDAE82;background:#FFFFFF;color:#000000;'
  winter.style = 'display: block;'
  spring.style = 'display: none;'
  summer.style = 'display: none;'
  autumn.style = 'display: none;'
})

portfolioBtn[1].addEventListener('click', () => {
  portfolioBtn[1].style = 'background:#BDAE82;color:#FFFFFF;'
  portfolioBtn[0].style = 'border-color: #BDAE82;background:#FFFFFF;color:#000000;'
  portfolioBtn[2].style = 'border-color: #BDAE82;background:#FFFFFF;color:#000000;'
  portfolioBtn[3].style = 'border-color: #BDAE82;background:#FFFFFF;color:#000000;'
  winter.style = 'display: none;'
  spring.style = 'display: block;'
  summer.style = 'display: none;'
  autumn.style = 'display: none;'
})

portfolioBtn[2].addEventListener('click', () => {
  portfolioBtn[2].style = 'background:#BDAE82;color:#FFFFFF;'
  portfolioBtn[1].style = 'border-color: #BDAE82;background:#FFFFFF;color:#000000;'
  portfolioBtn[0].style = 'border-color: #BDAE82;background:#FFFFFF;color:#000000;'
  portfolioBtn[3].style = 'border-color: #BDAE82;background:#FFFFFF;color:#000000;'
  winter.style = 'display: none;'
  spring.style = 'display: none;'
  summer.style = 'display: block;'
  autumn.style = 'display: none;'
})

portfolioBtn[3].addEventListener('click', () => {
  portfolioBtn[3].style = 'background:#BDAE82;color:#FFFFFF;'
  portfolioBtn[1].style = 'border-color: #BDAE82;background:#FFFFFF;color:#000000;'
  portfolioBtn[2].style = 'border-color: #BDAE82;background:#FFFFFF;color:#000000;'
  portfolioBtn[0].style = 'border-color: #BDAE82;background:#FFFFFF;color:#000000;'
  winter.style = 'display: none;'
  spring.style = 'display: none;'
  summer.style = 'display: none;'
  autumn.style = 'display: block;'
})

const form = document.querySelector('form')
const email = document.querySelector('.email')
const phone = document.querySelector('.phone')
const message = document.querySelector('textarea')
const submit = document.querySelector('.submit')
const inputs = document.querySelectorAll('input')

// inputs.addEventListener('input', function(event) {
//   if(!event.target.value) {
//     event.target.classList.add('error')
//   } else {
//     event.target.classList.remove('error')
//   }
// })

form.addEventListener('submit', validate)
function validate(event) {
  event.preventDefault()
  inputs.forEach(element => {
    if(!element.value) {
      element.classList.add('error')
    } else {
      element.classList.remove('error')
    }
  })

  const valueEmail = email.value
  const valuePhone = phone.value
  const valueMessage = message.value
  console.log(valueEmail, valuePhone)
  const objData = {
    valueEmail,
    valuePhone,
    valueMessage
  }
  console.log(JSON.stringify(objData))
}
