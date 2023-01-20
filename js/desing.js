// تغير الخلفيه كل مده معينه
let landingPage = document.querySelector(".landing-page");
let imgsArray = ["features-01.jpg", "features-02.jpg", "features-03.jpg"];
let backgroundOption = true;
let backgroundInterval;

function randomizeImges() {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[randomNumber] +'")';
        }, 10000);
    }
}


let backgroundLocalItem = localStorage.getItem("background-option");

if (backgroundLocalItem !== null) {
    if (backgroundLocalItem === 'true') {
        backgroundOption = true; 
    } else {
        backgroundOption = false; 
    }

    document.querySelectorAll(".random-backgrounds span").forEach(element => {
        element.classList.remove("active");
    });

    if (backgroundLocalItem === 'true') {
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    } else {
        document.querySelector(".random-backgrounds .no").classList.add("active");
    }
}

// اوبشن الاعدادات
document.querySelector(".toggle-settings .icon-gear").onclick = function () {
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");
}

let colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

        localStorage.setItem("color-option", e.target.dataset.color);

        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        });

        e.target.classList.add("active")

    })
});

let mainColor = localStorage.getItem("color-option");

if (mainColor !== null) {
    document.documentElement.style.setProperty("--main-color", mainColor);

    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

        if (element.dataset.color === mainColor) {
            element.classList.add("active")
        }
    });
}



let randomBackgrounds = document.querySelectorAll(".random-backgrounds span");
randomizeImges();

randomBackgrounds.forEach(span => {
    span.addEventListener("click", (e) => {

        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        });

        e.target.classList.add("active");

        if (e.target.dataset.background === 'yes') {
            backgroundOption = true;
            randomizeImges();
            localStorage.setItem("background-option", true);
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background-option", false);
        }

    })
});



let  = localStorage.getItem("color-option");

if (mainColor !== null) {
    document.documentElement.style.setProperty("--main-color", mainColor);

    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

        if (element.dataset.color === mainColor) {
            element.classList.add("active")
        }
    });
};

// Bullets
let allBullets = document.querySelectorAll(".nav-bullets .bullet");

// allBullets.forEach(bullet => {
//     bullet.addEventListener("click", (e) => {
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// nav bar links
let allLinks = document.querySelectorAll(".landing-page ul li a");

// allLinks.forEach(link => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// scrollToSomeWhere
function scrollToSomeWhere(elements) {
    elements.forEach(ele => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

scrollToSomeWhere(allBullets);
scrollToSomeWhere(allLinks);

// our skills 
let ourSkills = document.querySelector(".skills");
let span = document.querySelectorAll(".skill-progress span");

window.onscroll = function () {
    if (window.scrollY >= ourSkills.offsetTop - 100) {
        span.forEach((span) => {
            span.style.width = span.dataset.width;
          })
    }
  };


// create popup with the image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
    img.addEventListener('click', (e) => {
        let overlay = document.createElement("div");
        overlay.className = 'popup-overlay';
        document.body.appendChild(overlay);


        let popupBox = document.createElement("div");
        popupBox.className = 'popup-box';
        let popupImage = document.createElement("img");
        popupImage.src = img.src;
        popupBox.appendChild(popupImage);
        document.body.appendChild(popupBox);


        if (img.alt !== null) {
            let imgHeading = document.createElement("h3");
            let imgText = document.createTextNode(img.alt);
            imgHeading.appendChild(imgText);
            popupBox.appendChild(imgHeading);
        }


        let closeButton = document.createElement("span");
        let closeButtonText = document.createTextNode("X");
        closeButton.appendChild(closeButtonText);
        closeButton.className = "close-Button";
        popupBox.appendChild(closeButton);
    });
});

document.addEventListener("click", (e) => {
    if (e.target.className == 'close-Button') {
        e.target.parentElement.remove();
        document.querySelector(".popup-overlay").remove();
    }
});



let yess = document.getElementById("yes");
let no = document.getElementById("no");
let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {
   if (bulletLocalItem === "block") {
     document.querySelector(".nav-bullets").style.display = "block";
     yess.classList.add("active");
   } else {
     document.querySelector(".nav-bullets").style.display = "none";
     no.classList.add("active");
   }
}

no.onclick = function () {
    document.querySelector(".nav-bullets").style.display = "none";
    localStorage.setItem("bullets_option", "none");
}
yess.onclick = function () {
    document.querySelector(".nav-bullets").style.display = "block";
    localStorage.setItem("bullets_option", "block");
}



document.querySelector(".reset-option").onclick = function () {
   localStorage.clear();
   window.location.reload()
}

// toogle menu
let toogelmenu = document.querySelector(".toggle-menu");
let tooglelinks = document.querySelector(".links");

toogelmenu.onclick = function (e) {
    this.classList.toggle("menu-actve");
    tooglelinks.classList.toggle("open");
    e.stopPropagation();
}

document.addEventListener("click", (e) => {
    if (e.target !== toogelmenu && e.target !== tooglelinks) {
        toogelmenu.classList.remove("menu-actve");
        tooglelinks.classList.remove("open");
    };
});

tooglelinks.onclick = function (e) {
    e.stopPropagation();
};
