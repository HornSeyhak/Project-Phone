function toggleSubmenu(){
    const sub = document.querySelector(".sub-menu");
    sub.classList.toggle("show");
}


function MacSubmenu(){
    const subMac = document.querySelector(".sub-menu-Ipad");
    subMac.classList.toggle("show");
}

    // menu list for watch
    function WatchSubmenu(){
    const subWatch = document.querySelector(".sub-menu-watch");
    subWatch.classList.toggle("show");
}


  // menu list for iphone
    function IphoneSubmenu(){
    const subIphone = document.querySelector(".sub-menu-iphone");
    subIphone.classList.toggle("show");
}

 // menu list for Accessories
    function AccessoriesSubmenu(){
    const subIphone = document.querySelector(".sub-menu-Accessories");
    subIphone.classList.toggle("show");
}


 // menu list for Services
    function ServicesSubmenu(){
    const subServices = document.querySelector(".sub-menu-Services");
    subServices.classList.toggle("show");
}

//menu for search box
function searchBox(){
    const search = document.querySelector(".reserch");
    search.classList.toggle("show");
}

  function searchProduct() {
            const input = document.getElementById("searchBox").value.toLowerCase();
            const cards = document.querySelectorAll(".card");

            cards.forEach(card => {
                let name = card.getAttribute("data-name").toLowerCase();
                if (name.includes(input)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        }