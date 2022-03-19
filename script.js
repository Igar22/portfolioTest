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

langRu.addEventListener('click', changeRu)
langEn.addEventListener('click', changeEn)
function changeRu() {
  for(let key in i18Obj['ru']) {
    let el = document.querySelector('.lang-' + key)
    el.innerHTML = i18Obj['ru'][key]
  }
}

function changeEn() {
  for(let key in i18Obj['en']) {
    let el = document.querySelector('.lang-' + key)
    el.innerHTML = i18Obj['en'][key]
  }
}
