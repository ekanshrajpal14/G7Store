

var l = location.href;
var save = l.split("/");
save.length
console.log(save);

var res = (save[save.length - 1]).split(".");



var pageName = res[0];
console.log(pageName);



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
    { name: "DJI Osmo Pocket 3", price: "59 000 р", exPrice: "", desc: "", category: "osmo", pages: "" },
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
    { name: "DJI Mavic 3 PRO (Aircraft)", price: "165 000 p", exPrice: "", desc: "Только дрон без ПУ и АКБ", category: "mavic 3", pages: "mavic" },
    { name: "DJI Mavic 3 Pro", price: "199 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Pro с камерой.", category: "mavic 3", pages: "mavic" },
    { name: "DJI Mavic 3T Thermal (с тепловизором ) Universal Edition", price: "419 999 p", exPrice: "", desc: "Дрон DJI Mavic 3T Thermal с тепловизором, аксессуарами, и профессиональным пультом.", category: "mavic 3", pages: "mavic" },
    { name: "DJI Mavic 3 Pro Fly More Combo", price: "245 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Pro с камерой и аксессуарами", category: "mavic 3", pages: "mavic" },
    {
        name: "Mavic 3T Thermal (Aircraft)", price: "349 000 p", exPrice: "", desc: "Лучший ночной дрон для СВО, в данной комплектации только птичка ( тушка )то есть без батареи, без пульта и без кейса есть и другие варианты этой модели", category: "mavic 3", pages: "mavic"
    },
    { name: "DJI Mavic 3T (Thermal) CN", price: "415 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T (с тепловизором), подходит под СВО, для тех у кого есть возможность прошить.", category: "mavic 3", pages: "mavic" },
    { name: "DJI Mavic 3 Classic (RC)", price: "155 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой и RC пультом", category: "mavic 3", pages: "mavic" },
    { name: "DJI Mavic 3 Classic (Aircraft)", price: "137 000 p", exPrice: "", desc: "Один дрон (DJI Mavic 3 Classic) с камерой", category: "mavic 3", pages: "mavic" },
    { name: "DJI Mavic 3 Enterprise", price: "310 000 p", exPrice: "", desc: "Промышленный дрон DJI Mavic 3 Enterprise", category: "mavic 3", pages: "mavic" },
    { name: "DJI Mavic 3 Fly More Combo", price: "260 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой и аксессуарами", category: "mavic 3", pages: "mavic" },
    { name: "DJI Mavic 3 Pro Fly More Combo (RC Pro)", price: "360 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Pro с камерой, аксессуарами, и профессиональным пультом.", category: "mavic 3", pages: "mavic" },
    { name: "DJI Mavic 3 Cine Premium Combo", price: "450 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Cine для профессиональной съёмки с аксессуарами.", category: "mavic 3", pages: "mavic" },
    { name: "DJI Mavic 3", price: "190 999 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой", category: "mavic 3", pages: "mavic" },
    { name: "DJI Mavic 3 (Aircraft)", price: "165 000 p", exPrice: "", desc: "Дрон Mavic 3 (Aircraft) с камерой.", category: "mavic 3", pages: "mavic" },
    { name: "DJI Mavic 3 Fly More Combo (RC Pro)", price: "370 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой, аксессуарами, и профессиональным пультом RC Pro", category: "mavic 3", pages: "mavic" },
    { name: "DJI Mavic 3T Thermal Worry-Free Plus Combo", price: "525 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T Thermal с тепловизором, аксессуарами, RTK, и профессиональным пультом.", category: "mavic 3", pages: "mavic" },
    { name: "DJI Mavic 3 Classic", price: "149 999 p", exPrice: "", desc: "Дрон DJI Mavic 3 Classic с камерой.", category: "mavic 3", pages: "mavic" },
    { name: "DJI Mavic 3 Multispectral", price: "499 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Multispectral сельского назначения с мультиспектральной камерой.", category: "mavic 3", pages: "mavic" },
    // { name: "DJI Mavic 3T Thermal (Гражданская версия)", price: "430 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T Thermal с тепловизором - предназначен для гражданских целей. Поставляется совместно с аксессуарами, и профессиональным пультом.", category: "mavic 3", pages: "mavic" },
    { name: "DJI Mavic 3 Enterprise (Гражданская версия)", price: "330 000 p", exPrice: "", desc: "DJI Mavic 3 Enterprise (Гражданская версия) – это дрон, специально созданный для гражданских целей. Его уникальная прошивка снимает все ограничения DJI, включая запреты на полеты в зонах, таких как территория РФ. Это делает его идеальным для инспекций, поисково-спасательных операций и других гражданских задач.", category: "mavic 3", pages: "mavic" },

    // Mavic 3 Thermal 
    { name: "DJI Mavic 3T Thermal (с тепловизором ) Universal Edition", price: "419 999 p", exPrice: "", desc: "Дрон DJI Mavic 3T Thermal с тепловизором, аксессуарами, и профессиональным пультом.", category: "Mavic 3 Thermal", pages: "mavic" },
    {
        name: "Mavic 3T Thermal (Aircraft)", price: "349 000 p", exPrice: "", desc: "Лучший ночной дрон для СВО, в данной комплектации только птичка ( тушка )то есть без батареи, без пульта и без кейса.есть и другие варианты этой модели", category: "Mavic 3 Thermal", pages: "mavic"
    },
    { name: "DJI Mavic 3T (Thermal) CN", price: "415 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T (с тепловизором), подходит под СВО, для тех у кого есть возможность прошить.", category: "Mavic 3 Thermal", pages: "mavic" },
    { name: "DJI Mavic 3T Thermal Worry-Free Plus Combo", price: "525 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T Thermal с тепловизором, аксессуарами, RTK, и профессиональным пультом.", category: "Mavic 3 Thermal", pages: "mavic" },

    // mavic classic
    { name: "DJI Mavic 3 Classic (RC)", price: "155 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой и RC пультом", category: "Mavic 3 classic", pages: "mavic" },
    { name: "DJI Mavic 3 Classic (Aircraft)", price: "137 000 p", exPrice: "", desc: "Один дрон (DJI Mavic 3 Classic) с камерой", category: "Mavic 3 classic", pages: "mavic" },
    { name: "DJI Mavic 3 Classic", price: "149 999 p", exPrice: "", desc: "", category: "Mavic 3 classic", pages: "mavic" },

    // Mavic 3 Pro
    { name: "DJI Mavic 3 PRO (Aircraft)", price: "165 000 p", exPrice: "", desc: "Только дрон без ПУ и АКБ", category: "Mavic 3 Pro", pages: "mavic" },
    { name: "DJI Mavic 3 Pro", price: "", exPrice: "199 000 p", desc: "Дрон DJI Mavic 3 Pro с камерой.", category: "Mavic 3 Pro", pages: "mavic" },
    { name: "DJI Mavic 3 Pro Fly More Combo", price: "245 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Pro с камерой и аксессуарами.", category: "Mavic 3 Pro", pages: "mavic" },
    { name: "DJI Mavic 3 Pro Fly More Combo (RC Pro)", price: "360 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Pro с камерой, аксессуарами, и профессиональным пультом.", category: "Mavic 3 Pro", pages: "mavic" },
    { name: "Mavic 3 Pro Cine Premium Combo", price: "460 000 p", exPrice: "", desc: "Дрон Mavic 3 Pro для профессиональной съёмки, аксессуарами, и профессиональным пультом.", category: "Mavic 3 Pro", pages: "mavic" },

    // Mavic 3 Combo
    { name: "DJI Mavic 3 Fly More Combo", price: "260 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой и аксессуарами.", category: "Mavic 3 Combo", pages: "mavic" },
    { name: "DJI Mavic 3 Cine Premium Combo", price: "450 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Cine для профессиональной съёмки с аксессуарами.", category: "Mavic 3 Combo", pages: "mavic" },
    { name: "DJI Mavic 3 Fly More Combo (RC Pro)", price: "370 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой, аксессуарами, и профессиональным пультом RC Pro", category: "Mavic 3 Combo", pages: "mavic" },
    { name: "DJI Mavic 3T Thermal Worry-Free Plus Combo", price: "525 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T Thermal с тепловизором, аксессуарами, RTK, и профессиональным пультом.", category: "Mavic 3 Combo", pages: "mavic" },

    // Mavic 3 Enterprise
    { name: "DJI Mavic 3T (Thermal) CN", price: "415 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T (с тепловизором), подходит под СВО, для тех у кого есть возможность прошить.", category: "Mavic 3 Enterprise", pages: "mavic" },
    { name: "DJI Mavic 3 Enterprise", price: "310 000 p", exPrice: "", desc: "Промышленный дрон DJI Mavic 3 Enterprise", category: "Mavic 3 Enterprise", pages: "mavic" },
    { name: "DJI Mavic 3 Enterprise (Aircraft)", price: "299 999 p", exPrice: "", desc: "Промышленный дрон DJI Mavic 3 Enterprise", category: "Mavic 3 Enterprise", pages: "mavic" },
    {
        name: "DJI Mavic 3 Enterprise (Гражданская версия)", price: "330 000 p", exPrice: "", desc: "DJI Mavic 3 Enterprise (Гражданская версия) – это дрон, специально созданный для гражданских целей. Его уникальная прошивка снимает все ограничения DJI, включая запреты на полеты в зонах, таких как территория РФ. Это делает его идеальным для инспекций, поисково-спасательных операций и других гражданских задач.", category: "Mavic 3 Enterprise", pages: "mavic"
    },

    // Mavic 3 Multispectral
    { name: "DJI Mavic 3 Multispectral", price: "499 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Multispectral сельского назначения с мультиспектральной камерой", category: "Mavic 3 Multispectral", pages: "mavic" },

    // Mavic 3 Cine
    { name: "DJI Mavic 3 Cine Premium Combo", price: "450 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Cine для профессиональной съёмки с аксессуарами.", category: "Mavic 3 Cine", pages: "mavic" },
    { name: "Mavic 3 Pro Cine Premium Combo", price: "460 000 p", exPrice: "", desc: "Дрон Mavic 3 Pro для профессиональной съёмки, аксессуарами, и профессиональным пультом.", category: "Mavic 3 Cine", pages: "mavic" },
    
    //mavic 2 
    { name: "DJI Mavic 2 Enterprise Advanced", price: "444 000 p", exPrice: "", desc: "Дрон DJI Mavic 2 с тепловизором и аксессуарами", category: "Mavic 2", pages: "mavic" },
   


    // MINI
    // mini 3
    { name: "DJI Mini 3 Pro (RC)", price: "95 900 p", exPrice: "", desc: "Мини-дрон DJI Mini 3 Pro с камерой и пультом RC", category: "mini 3", pages: "mini" },
    { name: "DJI Mini 3 Pro", price: "90 000 p", exPrice: "", desc: "DJI Mini 3 Pro drone with camera.", category: "mini 3", pages: "mini" },
    { name: "DJI Mini 3 Pro (Без RC)", price: "88 000 p", exPrice: "", desc: "Дрон DJI Mini 3 Pro с камерой без пультов управления.", category: "mini 3mini 3", pages: "mini" },
    { name: "DJI Mini 3 Pro Fly More Combo Plus", price: "122 000 p", exPrice: "", desc: "Дрон DJI Mini 3 Pro с камерой и аксессуарами.", category: "mini 3", pages: "mini" },
    { name: "DJI Mini 3 Pro Fly More Combo Plus (RC)", price: "135 000 p", exPrice: "", desc: "Мини-дрон с камерой и аксессуарами.", category: "mini 3", pages: "mini" },
    { name: "DJI Mini 3 Fly More Combo (RC)", price: "110 990 p", exPrice: "", desc: "Мини-дрон с камерой и аксессуарами.", category: "mini 3", pages: "mini" },
    { name: "DJI Mini 3 Fly More Combo", price: "99 000 p", exPrice: "", desc: "Мини-дрон с камерой и аксессуарами.", category: "mini 3", pages: "mini" },

    // mini 3 pro
    { name: "DJI Mini 3 Pro (RC)", price: "95 900 p", exPrice: "", desc: "Мини-дрон DJI Mini 3 Pro с камерой и пультом RC", category: "mini 3 pro", pages: "mini" },
    { name: "DJI Mini 3 Pro", price: "90 000", exPrice: "", desc: "Дрон DJI Mini 3 Pro с камерой.", category: "mini 3 pro", pages: "mini" },
    { name: "DJI Mini 3 Pro (Без RC)", price: "88 000 p", exPrice: "", desc: "Дрон DJI Mini 3 Pro с камерой без пультов управления.", category: "mini 3 pro", pages: "mini" },
    { name: "DJI Mini 3 Pro Fly More Combo Plus", price: "122 000 p", exPrice: "", desc: "Дрон DJI Mini 3 Pro с камерой и аксессуарами.", category: "mini 3 pro", pages: "mini" },
    {
        name: "DJI Mini 3 Pro Fly More Combo Plus (RC)", price: "135 000 p", exPrice: "", desc: "Мини-дрон с камерой и аксессуарами.", category: "mini 3 pro", pages: "mini"
    },

    // Mini 4 Pro
    { name: "DJI Mini 4 Pro (DJI RC-N2)", price: "90 000 p", exPrice: "", desc: "Новый Мини-дрон DJI Mini 4 Pro с отличной камерой и пультом RC-N2", category: "Mini 4 Pro", pages: "mini" },
    { name: "DJI Mini 4 Pro Fly More Combo (DJI RC 2)", price: "118 000 p", exPrice: "", desc: "Новый Мини-дрон Mini 4 Pro с отличной камерой, пультом RC-2 и комплектом комбо", category: "Mini 4 Pro", pages: "mini" },
    { name: "DJI Mini 4 Pro Fly More Combo Plus (DJI RC 2)", price: "125 000 p", exPrice: "", desc: "", category: "Mini 4 Pro", pages: "mini" },
    { name: "DJI Mini 4 Pro ( DJI Rc 2)", price: "93 000 p", exPrice: "", desc: "Новый Мини-дрон с отличной камерой", category: "Mini 4 Pro", pages: "mini" },
    // Mini 3 Kit
    { name: "DJI Mini 3 Pro Fly More Kit Plus", price: "31 000 p", exPrice: "", desc: "Набор аксессуаров для Mini 3", category: "Mini 3 Kit", pages: "mini" },

    // mini 4k
    { name: "DJI Mini 4K", price: "55 000 p", exPrice: "", desc: "DJI Mini 4K – компактный дрон весом менее, он идеально подходит для записи долгих путешествий и создания впечатляющих кадров.", category: "mini 4k", pages: "" },
    { name: "DJI Mini 4K (Fly More Combo)", price: "85 000 p", exPrice: "", desc: "Расширенный набор Fly More Combo DJI Mini 4K – компактный дрон весом менее, он идеально подходит для записи долгих путешествий и созда ния впечатляющих кадров.", category: "mini 4k", pages: "" },

    // avata
    // { name: "", price: "", exPrice: "", desc: "", category: "", pages: "" },
]



// var counter = 1;
var cluuter = ""
function pageNameData(pageName) {
    

    arrayData.forEach(function (data) {


        if (data.pages.toLowerCase() === pageName.toLowerCase()) {
            
            cluuter += `<div class="cart_box">
                        <div class="top_part">
                            <div class="image_cont">
                                <img src="./webp_img/${data.name}.webp"
                                    alt="">
                            </div>
                        </div>
                        
                        <div class="bottom_part">
                            <div class="part1_bottom">
                                <h3>${data.name}</h3>
                                <p>${data.desc}</p>
                                <p class="price">${data.price}. &nbsp; <span>${data.exPrice}</span></p>
                            </div>
                            <div class="part2_bottom">
                                <a href="">Add to Cart</a>
                                <a href="" class="read_more">Read More</a>
                            </div>
                        </div>
                    </div>`
        }


    })


    document.querySelector(".all_carts").innerHTML = cluuter;

}

window.addEventListener("load", () => {
    console.log("hello")
    pageNameData(pageName)
})
