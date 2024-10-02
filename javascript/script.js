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


var arrayData = [
    // ronins
    { name: "Стабилизатор DJI RS 3 Pro Combo", price: "110 000 p", exPrice: "", desc: "Стабилизатор со множеством креплений для съемки", category: "ronin", pages: "ronin" },
    { name: "Стабилизатор DJI Ronin RS 4 Pro Combo", price: "160 000 p", exPrice: "", desc: "Инновационное устройство для стабилизации, обладающее высокой грузоподъемностью до 4,5 кг и обеспечивающее улучшенную стабильность съемки", category: "ronin", pages: "ronin" },
    { name: "Стабилизатор DJI Ronin RS 4 Pro", price: "135 000 p", exPrice: "", desc: "Стабилизатор обладает широким спектром функций, включая возможность управления из дистанции, автоматическую коррекцию движения", category: "ronin", pages: "ronin" },
    { name: "Стабилизатор DJI Ronin RS 4", price: "80 000 0", exPrice: "", desc: "Стабилизатор представляет собой многофункциональное устройство с широким спектром возможностей, которое включает в себя управление из дистанции и автоматическую коррекцию движения. Эти функции позволяют оператору легко управлять стабилизатором издалека и обеспечивать плавное и стабильное движение камеры во время съемки.", category: "ronin", pages: "ronin" },
    { name: "Стабилизатор DJI Ronin RS 4 Combo", price: "105 000 p", exPrice: "", desc: "Стабилизатор c доп рукоятками и крепления для моторчика", category: "ronin", pages: "ronin" },

    // ronin end


    // osmo start
    { name: "DJI Osmo Pocket 3 Creator Combo", price: "69 000 p", exPrice: "100 000 р", desc: "Портативная камера DJI Osmo Pocket 3 обладает трёхосевой механической стабилизацией, дюймовой CMOS-матрицей и разрешением 4K/120 кадров в секунду.", category: "osmo", pages: "" },
    { name: "Osmo Mobile 6", price: "23 000 р", exPrice: "", desc: "Osmo Mobile 6", category: "osmo", pages: "" },
    { name: " DJI Osmo Pocket 3", price: "59 000 р", exPrice: "", desc: "", category: "osmo", pages: "" },
    { name: "Экшн-камера DJI Osmo Action 4 Standard Combo", price: "38 000 p", exPrice: "", desc: "", category: "osmo", pages: "" },
    { name: "Экшн-камера DJI Osmo Action 4 Adventure Combo", price: "50 000 p", exPrice: "", desc: "", category: "osmo", pages: "" },
    {
        name: "Микрофон DJI Mic 2 (2 передатчика + 1 приёмник + зарядный кейс)", price: "35 000 p", exPrice: "", desc: "DJI Mic 2 – обновленную версию профессионального компактного микрофона, разработанного компанией DJI. Этот микрофон обеспечиваетвысококачественную запись звука в 32 бит с плавающей запятой и оснащен встроенной системой шумоподавления", category: "osmo", pages: ""
    },
    { name: "DJI Osmo Action 5 Pro (Standard Combo)", price: "50 000 p", exPrice: "", desc: "DJI Osmo Action 5 Pro Standard Combo — это экшн-камера с мощным 1/1,3″ сенсором, 4-нм процессором, улучшенной стабилизацией, 4-часовой батареей и двойными OLED-экранами, идеально подходящая для съемки в экстремальных условиях.", category: "osmo", pages: "" },
    // osmo ends



    // GoPro
    {
        name: "GoPro HERO12", price: "35 000 p", exPrice: "", desc: "Экшн-камера премиум-класса, выпущенная в сентябре 2022 года.", category: "gopro", pages: ""
    },
    { name: "GoPro HERO11", price: "33 000 p", exPrice: "", desc: "", category: "gopro", pages: "" },
    {
        name: "GoPro HERO13", price: "49 999 p", exPrice: "", desc: "Экшн-камера GoPro HERO13 Black - это устройство, которое позволяет запечатлеть самые яркие моменты вашей жизни. С ее помощью вы сможете снимать видео в формате 5.3K и делать качественные фотографии с разрешением 24.7 мегапикселей.", category: "gopro", pages: ""
    },
    // end go pro


    // mavic > mavic 3
    { name: "DJI Mavic 3 PRO (Aircraft)", price: "165 000 p", exPrice: "", desc: "Только дрон без ПУ и АКБ", category: "", pages: "" },
    { name: "DJI Mavic 3 Pro", price: "199 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Pro с камерой.", category: "", pages: "" },
    { name: "DJI Mavic 3T Thermal (с тепловизором ) Universal Edition", price: "419 999 p", exPrice: "", desc: "Дрон DJI Mavic 3T Thermal с тепловизором, аксессуарами, и профессиональным пультом.", category: "", pages: "" },
    { name: "DJI Mavic 3 Pro Fly More Combo", price: "245 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Pro с камерой и аксессуарами", category: "", pages: "" },
    {
        name: "Mavic 3T Thermal (Aircraft)", price: "349 000 p", exPrice: "", desc: "Лучший ночной дрон для СВО, в данной комплектации только птичка ( тушка )то есть без батареи, без пульта и без кейса есть и другие варианты этой модели", category: "", pages: "" },
    { name: "DJI Mavic 3T (Thermal) CN", price: "415 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T (с тепловизором), подходит под СВО, для тех у кого есть возможность прошить.", category: "", pages: "" },
    { name: "DJI Mavic 3 Classic (RC)", price: "155 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой и RC пультом", category: "", pages: "" },
    { name: "DJI Mavic 3 Classic (Aircraft)", price: "137 000 p", exPrice: "", desc: "Один дрон (DJI Mavic 3 Classic) с камерой", category: "", pages: "" },
    { name: "DJI Mavic 3 Enterprise", price: "310 000 p", exPrice: "", desc: "Промышленный дрон DJI Mavic 3 Enterprise", category: "", pages: "" },
    { name: "DJI Mavic 3 Fly More Combo", price: "260 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой и аксессуарами", category: "", pages: "" },
    { name: "DJI Mavic 3 Pro Fly More Combo (RC Pro)", price: "360 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Pro с камерой, аксессуарами, и профессиональным пультом.", category: "", pages: "" },
    { name: "DJI Mavic 3 Cine Premium Combo", price: "450 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Cine для профессиональной съёмки с аксессуарами.", category: "", pages: "" },
    { name: "DJI Mavic 3", price: "190 999 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой", category: "", pages: "" },
    { name: "DJI Mavic 3 (Aircraft)", price: "165 000 p", exPrice: "", desc: "Дрон Mavic 3 (Aircraft) с камерой.", category: "", pages: "" },
    { name: "DJI Mavic 3 Fly More Combo (RC Pro)", price: "370 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой, аксессуарами, и профессиональным пультом RC Pro", category: "", pages: "" },
    { name: "DJI Mavic 3T Thermal Worry-Free Plus Combo", price: "525 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T Thermal с тепловизором, аксессуарами, RTK, и профессиональным пультом.", category: "", pages: "" },
    { name: "DJI Mavic 3 Classic", price: "149 999 p", exPrice: "", desc: "Дрон DJI Mavic 3 Classic с камерой.", category: "", pages: "" },
    { name: "DJI Mavic 3 Multispectral", price: "499 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Multispectral сельского назначения с мультиспектральной камерой.", category: "", pages: "" },
    { name: ".DJI Mavic 3T Thermal (Гражданская версия)", price: "430 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T Thermal с тепловизором - предназначен для гражданских целей. Поставляется совместно с аксессуарами, и профессиональным пультом.", category: "", pages: "" },
    { name: "DJI Mavic 3 Enterprise (Гражданская версия)", price: "330 000 p", exPrice: "", desc: "DJI Mavic 3 Enterprise (Гражданская версия) – это дрон, специально созданный для гражданских целей. Его уникальная прошивка снимает все ограничения DJI, включая запреты на полеты в зонах, таких как территория РФ. Это делает его идеальным для инспекций, поисково-спасательных операций и других гражданских задач.", category: "", pages: "" },

    // Mavic Thermal 
    { name: "DJI Mavic 3T Thermal (с тепловизором ) Universal Edition", price: "419 999 p", exPrice: "", desc: "Дрон DJI Mavic 3T Thermal с тепловизором, аксессуарами, и профессиональным пультом.", category: "", pages: "" },
    {
        name: "Mavic 3T Thermal (Aircraft)", price: "349 000 p", exPrice: "", desc: "Лучший ночной дрон для СВО, в данной комплектации только птичка ( тушка )то есть без батареи, без пульта и без кейса.есть и другие варианты этой модели", category: "", pages: "" },
    { name: "DJI Mavic 3T (Thermal) CN", price: "415 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T (с тепловизором), подходит под СВО, для тех у кого есть возможность прошить.", category: "", pages: "" },
    { name: "DJI Mavic 3T Thermal Worry-Free Plus Combo", price: "525 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T Thermal с тепловизором, аксессуарами, RTK, и профессиональным пультом.", category: "", pages: "" },

    // mavic classic
    { name: "DJI Mavic 3 Classic (RC)", price: "155 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой и RC пультом", category: "", pages: "" },
    { name: "DJI Mavic 3 Classic (Aircraft)", price: "137 000 p", exPrice: "", desc: "Один дрон (DJI Mavic 3 Classic) с камерой", category: "", pages: "" },
    { name: "DJI Mavic 3 Classic", price: "149 999 p", exPrice: "", desc: "", category: "", pages: "" },

    // Mavic 3 Pro
    { name: "DJI Mavic 3 PRO (Aircraft)", price: "165 000 p", exPrice: "", desc: "Только дрон без ПУ и АКБ", category: "", pages: "" },
    { name: "DJI Mavic 3 Pro", price: "", exPrice: "199 000 p", desc: "Дрон DJI Mavic 3 Pro с камерой.", category: "", pages: "" },
    { name: "DJI Mavic 3 Pro Fly More Combo", price: "245 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Pro с камерой и аксессуарами.", category: "", pages: "" },
    { name: "DJI Mavic 3 Pro Fly More Combo (RC Pro)", price: "360 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Pro с камерой, аксессуарами, и профессиональным пультом.", category: "", pages: "" },
    { name: "Mavic 3 Pro Cine Premium Combo", price: "460 000 p", exPrice: "", desc: "Дрон Mavic 3 Pro для профессиональной съёмки, аксессуарами, и профессиональным пультом.", category: "", pages: "" },

    // Mavic 3 Combo
    { name: "DJI Mavic 3 Fly More Combo", price: "260 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой и аксессуарами.", category: "", pages: "" },
    { name: "DJI Mavic 3 Cine Premium Combo", price: "450 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Cine для профессиональной съёмки с аксессуарами.", category: "", pages: "" },
    { name: "DJI Mavic 3 Fly More Combo (RC Pro)", price: "370 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой, аксессуарами, и профессиональным пультом RC Pro", category: "", pages: "" },
    { name: "DJI Mavic 3T Thermal Worry-Free Plus Combo", price: "525 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T Thermal с тепловизором, аксессуарами, RTK, и профессиональным пультом.", category: "", pages: "" },

    // Mavic 3 Enterprise
    { name: "DJI Mavic 3T (Thermal) CN", price: "415 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T (с тепловизором), подходит под СВО, для тех у кого есть возможность прошить.", category: "", pages: "" },
    { name: "DJI Mavic 3 Enterprise", price: "310 000 p", exPrice: "", desc: "Промышленный дрон DJI Mavic 3 Enterprise", category: "", pages: "" },
    { name: "DJI Mavic 3 Enterprise (Aircraft)", price: "299 999 p", exPrice: "", desc: "Промышленный дрон DJI Mavic 3 Enterprise", category: "", pages: "" },
    {
        name: "DJI Mavic 3 Enterprise (Гражданская версия)", price: "330 000 p", exPrice: "", desc: "DJI Mavic 3 Enterprise (Гражданская версия) – это дрон, специально созданный для гражданских целей. Его уникальная прошивка снимает все ограничения DJI, включая запреты на полеты в зонах, таких как территория РФ. Это делает его идеальным для инспекций, поисково-спасательных операций и других гражданских задач.", category: "", pages: "" },

    // Mavic 3 Multispectral
    { name: "DJI Mavic 3 Multispectral", price: "499 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Multispectral сельского назначения с мультиспектральной камерой", category: "", pages: "" },

    // Mavic 3 Cine
    { name: "DJI Mavic 3 Cine Premium Combo", price: "450 000 p", exPrice: "",  desc: "Дрон DJI Mavic 3 Cine для профессиональной съёмки с аксессуарами.", category: "", pages: "" },
    { name: "Mavic 3 Pro Cine Premium Combo", price: "460 000 p", exPrice: "", desc: "Дрон Mavic 3 Pro для профессиональной съёмки, аксессуарами, и профессиональным пультом.", category: "", pages: "" },
    { name: "DJI Mavic 2 Enterprise Advanced", price: "444 000 p", exPrice: "", desc: "Дрон DJI Mavic 2 с тепловизором и аксессуарами", category: "", pages: "" },


    // MINI
    { name: "", price: "", exPrice: "", desc: "", category: "", pages: "" },
    { name: "", price: "", exPrice: "", desc: "", category: "", pages: "" },
    { name: "", price: "", exPrice: "", desc: "", category: "", pages: "" },
    { name: "", price: "", exPrice: "", desc: "", category: "", pages: "" },
    { name: "", price: "", exPrice: "", desc: "", category: "", pages: "" },
    { name: "", price: "", exPrice: "", desc: "", category: "", pages: "" },
    { name: "", price: "", exPrice: "", desc: "", category: "", pages: "" },
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
                                        <p class="price"> ${val.price}. &nbsp; <span>${val.exPrice}</span></p>
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
                                            <p class="price"> ${val.price} p. &nbsp; <span>${val.exPrice}</span></p>
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
        var category = "";
        category = e.target.getAttribute("data-option");
        console.log(category.toLowerCase());


        if (category == "") {
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
                return item.category.toLowerCase() === category.toLowerCase();
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
    // scroll to the particular section 
    document.querySelector("#section3").scrollIntoView({ behavior: "smooth" });
});

nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
    document.querySelector("#section3").scrollIntoView({ behavior: "smooth" });

});
function paginationMainFun() {
    getPaginationNumbers(); //using for page numbers
    setCurrentPage(1);

    document.querySelectorAll(".pagination-number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));


        if (pageIndex) {
            button.addEventListener("click", () => {
                setCurrentPage(pageIndex);
                document.querySelector("#section3").scrollIntoView({ behavior: "smooth" });

            });
        }
    });
}

window.addEventListener("load", () => {
    paginationMainFun()
});


