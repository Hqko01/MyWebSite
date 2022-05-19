const option1 = document.querySelector('.option1')
const option2 = document.querySelector('.option2')
const option3 = document.querySelector('.option3')
const cardArea = document.querySelector('.card-area')
const card = document.querySelector('.card')
const cardH2 = document.querySelector('.card h2')
const cardP = document.querySelector('.card p')
const signature = document.querySelector('.bottom .wave h2')
const signature2 = document.querySelector('.bottom .wave span')
const signature3 = document.querySelector('.bottom .wave #box')
const mobileMenu = document.querySelector('.main .header-menu .menu')
const mobileMenu2 = document.querySelector('#mobileMenu')
const mobileMenuI = document.querySelector('#mobileMenu i')
const Discord = document.querySelector('#Discord')
const Github = document.querySelector('#Github')
const Gmail = document.querySelector('#Gmail')
const Egunom = document.querySelector('#Egunom')
const mobileMenuEgunom = document.querySelector('.Egunom')
const mobileMenuGmail = document.querySelector('.Gmail')
const mobileMenuDiscord = document.querySelector('.Discord')
const mobileMenuGithub = document.querySelector('.Github')

const copyLinks = [
  ['Hqko#4059'],
  ['hakan34yilmaz01@gmail.com'],
  ['https://discord.com/oauth2/authorize?client_id=869536273872879626&permissions=8&scope=bot'],
  ['https://github.com/Hqko01']
]

window.addEventListener('scroll', () => {
  const hideing = document.querySelector('.header')
  const main = document.querySelector('.main')

  main.classList.toggle('sticky', window.scrollY > 0)
  hideing.classList.toggle('sticky', window.scrollY > 0)
})

//---------Signature---------//

signature.addEventListener('mouseover', () => {
  signature2.style.opacity = "1"
  signature2.style.visibility = "visible"
  signature3.style.opacity = "1"
  signature3.style.visibility = "visible"
  signature3.style.transition = ".2s"
})

signature.addEventListener('mouseout', () => {
  signature2.style.opacity = "0"
  signature2.style.visibility = "hidden"
  signature3.style.opacity = "0"
  signature3.style.visibility = "hidden"
  signature3.style.transition = ".2s"
})

signature.addEventListener('click', () => {
  window.open('https://github.com/Hqko01')
})

//---------Card---------//

option1.addEventListener('click', () => {
  option1.style.boxShadow = "0 0 10px white"
  option2.style.boxShadow = "none"
  option3.style.boxShadow = "none"

  card.style.backgroundImage = "url('https://cdn.webtekno.com/media/cache/content_detail/article/107834/microsoft-discord-icin-10-milyar-dolari-gozden-cikardi-1616487700.jpg')"
  cardH2.innerText = 'Discord'
  cardP.innerText = `Discord ismim ${copyLinks[0]}, Buradan benimle iletişime geçebilir veya eşlik edebilirsin.`
})

option2.addEventListener('click', () => {
  option2.style.boxShadow = "0 0 10px white"
  option1.style.boxShadow = "none"
  option3.style.boxShadow = "none"

  card.style.backgroundImage = "url('https://tr.wizcase.com/wp-content/uploads/2022/03/GitHub-Logo.png')"
  cardH2.innerText = 'Github'
  cardP.innerText = `Github hesabımda projelerimi ,denemelerimi paylaşıyorum. Burada bana yardımcı olabilir veya projelerimden fikir edinebilirsin.`
})

option3.addEventListener('click', () => {
  option3.style.boxShadow = "0 0 10px white"
  option1.style.boxShadow = "none"
  option2.style.boxShadow = "none"

  card.style.backgroundImage = "url('https://www.webtekno.com/images/editor/default/0001/100/e302f2a52becb57d04dadc7ac8d11889b350d7c3.jpeg')"
  cardH2.innerText = "Egunom"
  cardP.innerText = `Egunom Nedir?
  Egunom şimdilik discord üzerinde olan basit bir botdur. İlerleyen süreçte yapay zeka geliştirmede yer alacak`
})

//---------MenuIcons---------//

Discord.addEventListener('click', () => {
  navigator.clipboard.writeText(`${copyLinks[0]}`)
  alert('Discord İsmi Panoya Kayıt Edildi!')
  window.open('https://discord.com/')
})

Github.addEventListener('click', () => {
  alert('Github Sayfasına Yönlendiriliyorsun!')
  window.open(`${copyLinks[3]}`)
})

Gmail.addEventListener('click', () => {
  navigator.clipboard.writeText(`${copyLinks[1]}`)
  alert('Mail Adresi Panoya Kayıt Edildi!')
  window.open('https://www.google.com/intl/tr/gmail/about/')
})

Egunom.addEventListener('click', () => {
  navigator.clipboard.writeText(`${copyLinks[2]}`)
  alert('Egunom Davet Linki Panoya Kayıt Edildi!')
  window.open('https://discord.com/')
})

//---------MobileMenu---------//

mobileMenu.addEventListener('click', () => {
  mobileMenu2.style.left = "0"
})

mobileMenuI.addEventListener('click', () => {
  mobileMenu2.style.left = "100%"
})

mobileMenuEgunom.addEventListener('click', () => {
  navigator.clipboard.writeText(`${copyLinks[2]}`)
  alert('Egunom Davet Linki Panoya Kayıt Edildi!')
  window.open('https://discord.com/')
})

mobileMenuGmail.addEventListener('click', () => {
  navigator.clipboard.writeText(`${copyLinks[1]}`)
  alert('Mail Adresi Panoya Kayıt Edildi!')
  window.open('https://www.google.com/intl/tr/gmail/about/')
})

mobileMenuDiscord.addEventListener('click', () => {
  navigator.clipboard.writeText(`${copyLinks[0]}`)
  alert('Discord İsmi Panoya Kayıt Edildi!')
  window.open('https://discord.com/')
})

mobileMenuGithub.addEventListener('click', () => {
  alert('Github Sayfasına Yönlendiriliyorsun!')
  window.open(`${copyLinks[3]}`)
})