const images = () => {
    const imgPopup = document.createElement("div"),
        workSection = document.querySelector(".works"),
        bigImage = document.createElement("img");

    imgPopup.classList.add('popup')
    workSection.appendChild(imgPopup);
    imgPopup.style.cssText = `
    display: none;
    justify-content: center;
    align-items: center;
 `
    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
           document.body.style.overflow = 'hidden'

            bigImage.setAttribute('src', path);
            bigImage.style.width = '70vw'
            bigImage.style.height = '90vh'
        } 

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = "none";
            document.body.style.overflow = "";
        }
    });

};



export default images;