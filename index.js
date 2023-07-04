/* left images START*/

const leftImages = document.querySelectorAll('.content .left .images img')

leftImages.forEach(element => {
    element.addEventListener('load', () => {
        element.parentElement.parentElement.children[0].classList.toggle('loaded')
    })
});

/* left images END*/

/* Options START */

const options = document.querySelectorAll('.content .left .options ul li i')
const rightText = document.querySelector('.content .right .rightcnt')
const h2 = rightText.children[0]
const p = rightText.children[1]
h2.classList.add('load')
p.classList.add('load')

options.forEach(element => {
    element.addEventListener('click', () => {
        for (var i = 0; i < element.parentElement.parentElement.children.length; i++) {
            element.parentElement.parentElement.children[i].children[0].classList.remove('active')
            h2.classList.add('load')
            p.classList.add('load')

            if (element.parentElement.parentElement.children[i] == element.parentElement) {
                if (i == 0) {
                    setTimeout(() => {
                        h2.textContent = 'Merhaba ben Hakan,'
                        p.innerHTML = `
                        2004 Ağustos doğumluyum, Istanbul'da yaşıyorum, Beylikdüzü Borsa Istanbul Çok Programlı Anadolu
                        Lisesi'nde Bilişim bölümünde öğrenim gördüm, Beylikdüzü Belediyesi'nde Bilişim bölümünde 2021-2022
                        sezonunda staj yaptım ve şimdi Istinye Universitesi'nde Bilgisayar Programcılığın'da öğrenimime
                        devam etmekteyim.
    
                        Downhill, Astronomi, Bilim ve Tarihi severim. Yazılım alanında çok ilerilere gitmeyi hedeflemekte ve
                        kendi şirketimi kurup dünya markası olmayı amaçlamaktayım. Küçük bir aile'nin büyük hedefleri olan
                        çocuğuyum.
                        <br> <br>
                        Profesyonel bir web sitesi istiyorsanız bana <a href="tel:+905331990480">ulaşabilirsiniz.</a>
                        <br>
                        Detaylar için: <a href="https://bionluk.com/hqkko0">Bionluk</a>`
                        p.style.textAlign = 'justify'
                    }, 400);
                }

                else if (i == 1) {
                    setTimeout(() => {

                        h2.textContent = 'Iletişim, Bağlantı,'
                        p.innerHTML = `Tel: <a href="tel:+905331990480">533 199 04 80</a> <br>
                    Wp: <a href="https://wa.me/905331990480">WhatsApp</a> <br>
                    Mail: <a href="mailto:hqkko0@gmail.com">hqkko0@gmail.com</a> <br>
                    Bionluk: <a href="https://bionluk.com/hqkko0">bionluk.com/hqkko0</a> <br>
                    Github: <a href="http://github.com/hqko01">github.com/hqko01</a>
                    `
                    p.style.textAlign = 'justify'
                    }, 400);
                }

                else if (i == 2) {
                    setTimeout(() => {
                        h2.textContent = 'Referanslarım'
                        p.innerHTML = `
                        <img src="./HqkoPictures/SafirFuarLogo.png" alt="" loading="lazy">
                        <img src="./HqkoPictures/yilsat-logo.png" alt="" loading="lazy">
                        <img src="./HqkoPictures/uyducu-suat-logo.png" alt="" loading="lazy">
                        <img src="./HqkoPictures/hkmietmobel-logo.jpg" alt="" loading="lazy">
                        `
                        p.style.textAlign = 'center'
                    }, 400);
                }
            }

        }
        element.classList.add('active')

        setTimeout(() => {
            h2.classList.remove('load')
            p.classList.remove('load')
        }, 800);

    })
});

/* Options END */

/* Loader Screen START*/

const loader = document.querySelector('.loader')

window.addEventListener("load", () => {
    loader.classList.add('loaded')
    setTimeout(() => {
        h2.classList.remove('load')
        p.classList.remove('load')
    }, 400);
})

/* Loader Screen END*/