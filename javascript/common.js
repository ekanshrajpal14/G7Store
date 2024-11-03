// .on click scroll 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// document.body.insertAdjacentHTML("afterbegin", navbar);



document.querySelector(".menu_toggle_btn").addEventListener("click", function () {
    document.querySelector(".nav_links").classList.toggle("active_nav")
    document.querySelector(".menu_toggle_btn i").classList.toggle("ri-close-large-line");
    document.body.classList.toggle('no_scroll')
})


var dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach((item) => {
    item.addEventListener("click", function () {
        this.querySelector(".dropdown_items").classList.toggle("active_dropdown")
        this.querySelector("i").classList.toggle("ri-arrow-drop-up-line")
    })
    // item.addEventListener("mouseenter", function () {
    //     // ṭhis is for hover effect on dropdown in laptop view
    //     this.querySelector("i").classList.remove("ri-arrow-drop-down-line")
    //     this.querySelector("i").classList.add("ri-arrow-drop-up-line")
    // })
    // item.addEventListener("mouseleave", function () {
    //     // ṭhis is for hover effect on dropdown in laptop view
    //     this.querySelector("i").classList.remove("ri-arrow-drop-up-line")
    //     this.querySelector("i").classList.add("ri-arrow-drop-down-line")
    // })
})






document.querySelector(".search_circle").addEventListener("click", function (q) {
    document.querySelector(".onClickWindow").style.display = "flex";
    document.body.classList.toggle("no_scroll");
})

document.querySelector(".cross").addEventListener("click", function (q) {
    document.querySelector(".onClickWindow").style.display = "none";
    document.querySelector(".data_put_here").style.display = "none";
    document.querySelector(".total_found").style.display = "none";
    document.querySelector(".product-container").innerHTML = "";
    document.body.classList.toggle("no_scroll");
    document.querySelector(".input_search").value = '';

})

document.querySelector(".input_search").addEventListener("keyup", function (e) {
    e.preventDefault();

    if (e.keyCode === 13) {
        getValofInput()
    }
})
function getValofInput() {
    var searchValue = document.querySelector(".input_search").value;
    if (searchValue.trim() != "") {
        printData(search(searchValue.trim()));
    }
}

function search(searchValue) {
    var searchResult = arrayData.filter((val) => {
        return val.name.toLowerCase().includes(searchValue.toLowerCase());
    })

    return searchResult;
}

function printData(data) {
    var counter = 0
    document.querySelector(".data_put_here").style.display = "flex"
    var newDataClutter = ""
    var dynMsg = "Hello, I am interested in - "
    if (data.length != 0) {
        data.forEach((e) => {
            counter++;
            newDataClutter += ` <a href="https://api.whatsapp.com/send/?phone=+79251156327&text=${dynMsg}${e.name}!"><div class="product">
                        <img src="./webp_img/${e.name}.webp" alt="Product 2">
                        <div class="product-info">
                            <h4>${e.name}</h4>
                            <p>${e.desc}</p>
                            <div class="product-price">${e.price}</div>
                        </div>
                    </div>
                    </a>`
        })
    }
    else {
        newDataClutter = `<div class="not_found">
                            <h3>Nothing Found</h3>
                        </div>`
    }
    document.querySelector(".total_found").innerHTML = `Found : ${counter}`
    document.querySelector(".total_found").style.display = "block"

    document.querySelector(".product-container").innerHTML = newDataClutter;
}






