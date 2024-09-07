// evento de clique que faz aparacer o menu quando o usuário clica nas "barrinhas"

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

// classList é, basicamente, uma tag de validação, logo, se uma classe existir, ela será inserida, caso não, será removida.

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

// evento de clique que faz desaparecer o menu quando o usuário clica no "x"
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

// mesma função, só que para os itens de lista do menu. quando o usuário clicar em "home", por exemplo, o menu desaparecerá

// querySelectorAll vai puxar a lista (literalmete o li) de elementos presentes no html
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

function scrollHeader() {
  const header = document.getElementById('header')
  if (this.scrollY >= 80) header.classList.add('scroll-header')
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// faq
// função que puxa as atividades da div "faq-item"
const faqItems = document.querySelectorAll('.faq-item')

// toda vez que o usuário clicar no título do faq, o forEach vai entrar para criar um loop juntamente com o evento de "clique" e validar a função do toggleItem
faqItems.forEach(item => {
  const faqHeader = item.querySelector('.faq-header')

  // evento de clique
  faqHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.faq-open')

    toggleItem(item)

    // validação da função
    if (openItem && openItem !== item) {
      toggleItem(openItem)
    }
  })
})

// o toggleItem é que vai fazer a movimentação de descida da div, ele que vai abrir
const toggleItem = item => {
  const faqContent = item.querySelector('.faq-content')

  if (item.classList.contains('faq-open')) {
    faqContent.removeAttribute('style')
    item.classList.remove('faq-open')
  } else {
    faqContent.style.height = faqContent.scrollHeight + 'px'
    item.classList.add('faq-open')
  }
}

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav-menu a[href*=' + sectionId + ']')
        .classList.add('active-link')
    } else {
      document
        .querySelector('.nav-menu a[href*=' + sectionId + ']')
        .classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)