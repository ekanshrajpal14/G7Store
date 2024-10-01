const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: "fade",

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',

    },
});


// on click options bar
var p_click_bar = document.querySelectorAll(".mavic_clk")

p_click_bar.forEach(function (e, id) {

    e.addEventListener("click", (elem) => {


        document.querySelector(`.mavic_opt${id}`).classList.toggle("active_mavic_opt");
    })
})











var all_otp = document.querySelector(".all_options"); //options
var pTag = all_otp.querySelectorAll("a");

var listItems; //for pagination

var pageCount; //for pagination
let currentPage = 1; //for pagination


var arrayData = [{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "Mavic 3" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "Mavic 3 Thermal" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "Mavic 3 Thermal" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "" },
]





var clutter = ""

arrayData.forEach((val) => {
    clutter += `<div class="cart_box" data-category="${val.category}" >
                                <div class="top_part">
                                    <div class="image_cont">
                                        <img src="https://optim.tildacdn.com/stor6634-6162-4564-a435-366365333066/-/resize/520x/-/format/webp/82437071.jpg"
                                            alt="">
                                    </div>
                                </div>
                                <div class="bottom_part">
                                    <div class="part1_bottom">
                                        <h3> ${val.name}</h3>
    
                                        <p> ${val.desc} </p>
                                        <p class="price"> ${val.price} p. &nbsp; <span>130 00 p.</span></p>
                                    </div>
                                    <div class="part2_bottom">
                                        <a href="">Add to Cart</a>
                                        <a href="" class="read_more">Read More</a>
                                    </div>
                                </div>
                            </div>`


})
document.querySelector(".all_carts").innerHTML = clutter;


function showData(myData) {
    var newClutter = "";
    if (myData.length == 0) {

        newClutter = `<div class="not_found">
                            <h3>Nothing Found</h3>
                        </div>`;

        document.querySelector(".all_carts").innerHTML = newClutter;
        document.querySelector(".pagination-container").style.display = "none";

        return;

    }
    else {

        myData.forEach((val) => {
            newClutter += `<div class="cart_box" data-category="${val.category}" >
                                    <div class="top_part">
                                        <div class="image_cont">
                                            <img src="https://optim.tildacdn.com/stor6634-6162-4564-a435-366365333066/-/resize/520x/-/format/webp/82437071.jpg"
                                                alt="">
                                        </div>
                                    </div>
                                    <div class="bottom_part">
                                        <div class="part1_bottom">
                                            <h3> ${val.name}</h3>
        
                                            <p> ${val.desc} </p>
                                            <p class="price"> ${val.price} p. &nbsp; <span>130 00 p.</span></p>
                                        </div>
                                        <div class="part2_bottom">
                                            <a href="">Add to Cart</a>
                                            <a href="" class="read_more">Read More</a>
                                        </div>
                                    </div>
                                </div>`


        })

    }
    document.querySelector(".pagination-container").style.display = "flex";

    document.querySelector(".all_carts").innerHTML = newClutter;

    // pagination reset
    listItems = document.querySelectorAll(".cart_box");
    console.log(listItems.length);
    pageCount = Math.ceil(listItems.length / paginationLimit);
    document.querySelector("#pagination-numbers").innerHTML = "";
    paginationMainFun()
    currentPage = 1;
}

var filteredData = [];
var active_a_tag = document.querySelector(".active_a_tag");
pTag.forEach((p) => {
    p.addEventListener("click", (e) => {
        var category = e.target.innerHTML;
        if(category ==""){
            return;
        }
        active_a_tag.classList.remove("active_a_tag")
        active_a_tag = e.target;
        e.target.classList.add("active_a_tag");
        if (category === "All") {
            return showData(arrayData);
        }
        else {
            filteredData = arrayData.filter((item) => {
                return item.category === category;
            })
            return showData(filteredData)
        }


    })
})



const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const nextButton = document.getElementById("next-button");
listItems = document.querySelectorAll(".cart_box");
const prevButton = document.getElementById("prev-button");
console.log(listItems);

const paginationLimit = 12;
console.log(listItems.length);

pageCount = Math.ceil(listItems.length / paginationLimit);


const disableButton = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
};

const enableButton = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
    if (currentPage === 1) {
        disableButton(prevButton);
    } else {
        enableButton(prevButton);
    }

    if (pageCount === currentPage) {
        disableButton(nextButton);
    } else {
        enableButton(nextButton);
    }
};

const handleActivePageNumber = () => {
    document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("active");
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex == currentPage) {
            button.classList.add("active");
        }
    });
};

const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);

    paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i);
    }
};

const setCurrentPage = (pageNum) => {
    currentPage = pageNum;

    handleActivePageNumber();
    handlePageButtonsStatus();

    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;

    listItems.forEach((item, index) => {
        item.classList.add("hidden");
        if (index >= prevRange && index < currRange) {
            item.classList.remove("hidden");
        }
    });
};

prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
});

nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
});
function paginationMainFun() {
    getPaginationNumbers(); //using for page numbers
    setCurrentPage(1);

    document.querySelectorAll(".pagination-number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));

        if (pageIndex) {
            button.addEventListener("click", () => {
                setCurrentPage(pageIndex);
            });
        }
    });
}

window.addEventListener("load", () => {
    paginationMainFun()
});


