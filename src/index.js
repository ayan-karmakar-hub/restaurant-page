import homePage from './homepage.js';
import picture from './picture.js';
import summary from './summary.js';

let createPage = (() => {
    let content = document.querySelector("#content");
    let tabs = document.createElement('ul');
    tabs.id = "tabs";

    function clearPage(){
        let content = document.querySelector("#content");
        let infos = document.querySelectorAll(".info");
        if(infos !== null){
            infos.forEach((info) => content.removeChild(info));
        }
    }

    let home = document.createElement('li');
    home.innerText = "Homepage";
    home.addEventListener('click', () =>{
        clearPage();
        homePage();
    });

    let pic = document.createElement('li');
    pic.innerText = "Picture";
    pic.addEventListener('click', () =>{
        clearPage();
        picture();
    });

    let summ = document.createElement('li');
    summ.innerText = "Summary";
    summ.addEventListener('click', () =>{
        clearPage();
        summary();
    });

    tabs.appendChild(home);
    tabs.appendChild(pic);
    tabs.appendChild(summ);
    content.appendChild(tabs);
})();
