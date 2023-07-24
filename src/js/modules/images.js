const images = () => {
    const imgPopup = document.createElement("div"),
        workSection = document.querySelector(".works"),
        bidImage = document.createElement("img");

    imgPopup.classList.add('popup')
    workSection.appendChild(imgPopup);
    imgPopup.style.cssText = `
    display: none;
    justify-content: center;
    align-items: center;
 `
    imgPopup.appendChild(bidImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');

            bidImage.setAttribute('src', path);
        } 

        if (target && target.matches('div.popup')) {
             imgPopup.style.display = "none";
        }
    });

};



export default images;