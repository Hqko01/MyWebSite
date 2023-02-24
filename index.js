/* Options START */
const leftBG = document.querySelector('.content .left')
const contentH2 = document.querySelector('.content .right .rightcnt h2')
const contentP = document.querySelector('.content .right .rightcnt p')
const li = document.querySelectorAll('.content .left .options ul li i')

li[0].onclick = function () {
    li[0].classList.toggle('active')
    li[1].classList.remove('active')
    li[2].classList.remove('active')
    li[3].classList.remove('active')
    li[4].classList.remove('active')

    leftBG.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/852651577721880586/1040280183359422574/20220515_174443.jpg')"
    contentH2.innerText = "Merhaba ben Hakan,"
    contentP.innerText = `2004 Ağustos doğumluyum, Istanbul'da yaşıyorum, Beylikdüzü Borsa Istanbul Çok Programlı Anadolu Lisesi'nde Bilişim bölümünde öğrenim gördüm, Beylikdüzü Belediyesi'nde Bilişim bölümünde 2021-2022 sezonunda staj yaptım ve şimdi Istinye Universitesi'nde Bilgisayar Programcılığın'da öğrenimime devam etmekteyim.Downhill, Astronomi, Bilim ve Tarihi severim. Yazılım alanında çok ilerilere gitmeyi hedeflemekte ve kendi şirketimi kurup dünya markası olmayı amaçlamaktayım. Küçük bir aile'nin büyük hedefleri olan çocuğuyum.`
}

li[1].onclick = function () {
    li[1].classList.toggle('active')
    li[0].classList.remove('active')
    li[2].classList.remove('active')
    li[3].classList.remove('active')
    li[4].classList.remove('active')

    leftBG.style.backgroundImage = "url('https://egirisim.com/wp-content/uploads/2022/02/discord-dijital-696x392.jpg')"
    contentH2.innerText = "Discord"
    contentP.innerText = `Discord ismim Hqko#9052, Buradan benimle iletişime geçebilirsin.`
}

li[2].onclick = function () {
    li[2].classList.toggle('active')
    li[0].classList.remove('active')
    li[1].classList.remove('active')
    li[3].classList.remove('active')
    li[4].classList.remove('active')
    
    leftBG.style.backgroundImage = "url('https://evrimagaci.org/public/content_media/1345091ed86481cf431dbe7ff273373f.png')"
    contentH2.innerText = "Egunom"
    contentP.innerText = `Egunom yapay zeka üzerine geliştirdiğim bir bottur. Şuan sadece discord üzerinedir fakat aktif değildir.
                        İlerleyen süreçte farklı platformlarda aktif hale gelecektir.`
}

li[3].onclick = function () {
    li[3].classList.toggle('active')
    li[0].classList.remove('active')
    li[1].classList.remove('active')
    li[2].classList.remove('active')
    li[4].classList.remove('active')

    leftBG.style.backgroundImage = "url('https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI')"
    contentH2.innerText = "Gmail"
    contentP.innerHTML = `<a href="hakan34yilmaz01@gmail.com">hakan34yilmaz01@gmail.com</a> Benimle mail ile iletişime geç.`
}

li[4].onclick = function () {
    li[4].classList.toggle('active')
    li[0].classList.remove('active')
    li[1].classList.remove('active')
    li[2].classList.remove('active')
    li[3].classList.remove('active')

    leftBG.style.backgroundImage = "url('https://teknodestek.com.tr/wp-content/uploads/2021/03/instagram-sorun-bildirimi-kapak.png')"
    contentH2.innerText = "Instagram"
    contentP.innerHTML = `Beni takip et. <a href="https://www.instagram.com/hqkko/">Instagram</a>`
}

/* Options END */
