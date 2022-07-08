const page_url = "https://snoxongithub.github.io/web_project/"

function urls(){

    //document.getElementById('favicon').href = page_url + "images/Golden_Circles.svg"

    document.getElementById('logo_href').href = page_url

    document.getElementsByClassName('about')[0].href = page_url + "about"
    document.getElementsByClassName('crowdfunding')[0].href = page_url + "crowdfunding"
    document.getElementsByClassName('contact')[0].href = page_url + "contact"
    document.getElementsByClassName('faq')[0].href = page_url + "faq"

    document.getElementsByClassName('about')[1].href = page_url + "about"
    document.getElementsByClassName('crowdfunding')[1].href = page_url + "crowdfunding"
    document.getElementsByClassName('contact')[1].href = page_url + "contact"
    document.getElementsByClassName('faq')[1].href = page_url + "faq"
}

window.onload = function() {
    urls()
}

document.getElementsByClassName('linemenu')[0].addEventListener('click', () => {
    document.getElementsByClassName('menu')[0].classList.toggle('active')
    document.getElementsByClassName('linemenu')[0].classList.toggle('active')
})