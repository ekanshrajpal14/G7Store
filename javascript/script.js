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


// var arrayData = [
//     // ronins
//     { name: "Стабилизатор DJI RS 3 Pro Combo", price: "110 000 p", exPrice: "", desc: "Стабилизатор со множеством креплений для съемки", category: "ronin", pages: "ronin" },
//     { name: "Стабилизатор DJI Ronin RS 4 Pro Combo", price: "160 000 p", exPrice: "", desc: "Инновационное устройство для стабилизации, обладающее высокой грузоподъемностью до 4,5 кг и обеспечивающее улучшенную стабильность съемки", category: "ronin", pages: "ronin" },
//     { name: "Стабилизатор DJI Ronin RS 4 Pro", price: "135 000 p", exPrice: "", desc: "Стабилизатор обладает широким спектром функций, включая возможность управления из дистанции, автоматическую коррекцию движения", category: "ronin", pages: "ronin" },
//     { name: "Стабилизатор DJI Ronin RS 4", price: "80 000 0", exPrice: "", desc: "Стабилизатор представляет собой многофункциональное устройство с широким спектром возможностей, которое включает в себя управление из дистанции и автоматическую коррекцию движения. Эти функции позволяют оператору легко управлять стабилизатором издалека и обеспечивать плавное и стабильное движение камеры во время съемки.", category: "ronin", pages: "ronin" },
//     { name: "Стабилизатор DJI Ronin RS 4 Combo", price: "105 000 p", exPrice: "", desc: "Стабилизатор c доп рукоятками и крепления для моторчика", category: "ronin", pages: "ronin" },

//     // ronin end


//     // osmo start
//     { name: "DJI Osmo Pocket 3 Creator Combo", price: "69 000 p", exPrice: "100 000 р", desc: "Портативная камера DJI Osmo Pocket 3 обладает трёхосевой механической стабилизацией, дюймовой CMOS-матрицей и разрешением 4K/120 кадров в секунду.", category: "osmo", pages: "" },
//     { name: "Osmo Mobile 6", price: "23 000 р", exPrice: "", desc: "Osmo Mobile 6", category: "osmo", pages: "" },
//     { name: " DJI Osmo Pocket 3", price: "59 000 р", exPrice: "", desc: "", category: "osmo", pages: "" },
//     { name: "Экшн-камера DJI Osmo Action 4 Standard Combo", price: "38 000 p", exPrice: "", desc: "", category: "osmo", pages: "" },
//     { name: "Экшн-камера DJI Osmo Action 4 Adventure Combo", price: "50 000 p", exPrice: "", desc: "", category: "osmo", pages: "" },
//     {
//         name: "Микрофон DJI Mic 2 (2 передатчика + 1 приёмник + зарядный кейс)", price: "35 000 p", exPrice: "", desc: "DJI Mic 2 – обновленную версию профессионального компактного микрофона, разработанного компанией DJI. Этот микрофон обеспечиваетвысококачественную запись звука в 32 бит с плавающей запятой и оснащен встроенной системой шумоподавления", category: "osmo", pages: ""
//     },
//     { name: "DJI Osmo Action 5 Pro (Standard Combo)", price: "50 000 p", exPrice: "", desc: "DJI Osmo Action 5 Pro Standard Combo — это экшн-камера с мощным 1/1,3″ сенсором, 4-нм процессором, улучшенной стабилизацией, 4-часовой батареей и двойными OLED-экранами, идеально подходящая для съемки в экстремальных условиях.", category: "osmo", pages: "" },
//     // osmo ends



//     // GoPro
//     {
//         name: "GoPro HERO12", price: "35 000 p", exPrice: "", desc: "Экшн-камера премиум-класса, выпущенная в сентябре 2022 года.", category: "gopro", pages: ""
//     },
//     { name: "GoPro HERO11", price: "33 000 p", exPrice: "", desc: "", category: "gopro", pages: "" },
//     {
//         name: "GoPro HERO13", price: "49 999 p", exPrice: "", desc: "Экшн-камера GoPro HERO13 Black - это устройство, которое позволяет запечатлеть самые яркие моменты вашей жизни. С ее помощью вы сможете снимать видео в формате 5.3K и делать качественные фотографии с разрешением 24.7 мегапикселей.", category: "gopro", pages: ""
//     },
//     // end go pro


//     // mavic > mavic 3
//     { name: "DJI Mavic 3 PRO (Aircraft)", price: "165 000 p", exPrice: "", desc: "Только дрон без ПУ и АКБ", category: "mavic 3", pages: "mavic" },
//     { name: "DJI Mavic 3 Pro", price: "199 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Pro с камерой.", category: "mavic 3", pages: "mavic" },
//     { name: "DJI Mavic 3T Thermal (с тепловизором ) Universal Edition", price: "419 999 p", exPrice: "", desc: "Дрон DJI Mavic 3T Thermal с тепловизором, аксессуарами, и профессиональным пультом.", category: "mavic 3", pages: "mavic" },
//     { name: "DJI Mavic 3 Pro Fly More Combo", price: "245 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Pro с камерой и аксессуарами", category: "mavic 3", pages: "mavic" },
//     {
//         name: "Mavic 3T Thermal (Aircraft)", price: "349 000 p", exPrice: "", desc: "Лучший ночной дрон для СВО, в данной комплектации только птичка ( тушка )то есть без батареи, без пульта и без кейса есть и другие варианты этой модели", category: "mavic 3", pages: "mavic"
//     },
//     { name: "DJI Mavic 3T (Thermal) CN", price: "415 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T (с тепловизором), подходит под СВО, для тех у кого есть возможность прошить.", category: "mavic 3", pages: "mavic" },
//     { name: "DJI Mavic 3 Classic (RC)", price: "155 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой и RC пультом", category: "mavic 3", pages: "mavic" },
//     { name: "DJI Mavic 3 Classic (Aircraft)", price: "137 000 p", exPrice: "", desc: "Один дрон (DJI Mavic 3 Classic) с камерой", category: "mavic 3", pages: "mavic" },
//     { name: "DJI Mavic 3 Enterprise", price: "310 000 p", exPrice: "", desc: "Промышленный дрон DJI Mavic 3 Enterprise", category: "mavic 3", pages: "mavic" },
//     { name: "DJI Mavic 3 Fly More Combo", price: "260 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой и аксессуарами", category: "mavic 3", pages: "mavic" },
//     { name: "DJI Mavic 3 Pro Fly More Combo (RC Pro)", price: "360 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Pro с камерой, аксессуарами, и профессиональным пультом.", category: "mavic 3", pages: "mavic" },
//     { name: "DJI Mavic 3 Cine Premium Combo", price: "450 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Cine для профессиональной съёмки с аксессуарами.", category: "mavic 3", pages: "mavic" },
//     { name: "DJI Mavic 3", price: "190 999 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой", category: "mavic 3", pages: "mavic" },
//     { name: "DJI Mavic 3 (Aircraft)", price: "165 000 p", exPrice: "", desc: "Дрон Mavic 3 (Aircraft) с камерой.", category: "mavic 3", pages: "mavic" },
//     { name: "DJI Mavic 3 Fly More Combo (RC Pro)", price: "370 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой, аксессуарами, и профессиональным пультом RC Pro", category: "mavic 3", pages: "mavic" },
//     { name: "DJI Mavic 3T Thermal Worry-Free Plus Combo", price: "525 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T Thermal с тепловизором, аксессуарами, RTK, и профессиональным пультом.", category: "mavic 3", pages: "mavic" },
//     { name: "DJI Mavic 3 Classic", price: "149 999 p", exPrice: "", desc: "Дрон DJI Mavic 3 Classic с камерой.", category: "mavic 3", pages: "mavic" },
//     { name: "DJI Mavic 3 Multispectral", price: "499 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Multispectral сельского назначения с мультиспектральной камерой.", category: "mavic 3", pages: "mavic" },
//     { name: ".DJI Mavic 3T Thermal (Гражданская версия)", price: "430 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T Thermal с тепловизором - предназначен для гражданских целей. Поставляется совместно с аксессуарами, и профессиональным пультом.", category: "mavic 3", pages: "mavic" },
//     { name: "DJI Mavic 3 Enterprise (Гражданская версия)", price: "330 000 p", exPrice: "", desc: "DJI Mavic 3 Enterprise (Гражданская версия) – это дрон, специально созданный для гражданских целей. Его уникальная прошивка снимает все ограничения DJI, включая запреты на полеты в зонах, таких как территория РФ. Это делает его идеальным для инспекций, поисково-спасательных операций и других гражданских задач.", category: "mavic 3", pages: "mavic" },

//     // Mavic 3 Thermal 
//     { name: "DJI Mavic 3T Thermal (с тепловизором ) Universal Edition", price: "419 999 p", exPrice: "", desc: "Дрон DJI Mavic 3T Thermal с тепловизором, аксессуарами, и профессиональным пультом.", category: "Mavic 3 Thermal", pages: "mavic" },
//     {
//         name: "Mavic 3T Thermal (Aircraft)", price: "349 000 p", exPrice: "", desc: "Лучший ночной дрон для СВО, в данной комплектации только птичка ( тушка )то есть без батареи, без пульта и без кейса.есть и другие варианты этой модели", category: "Mavic 3 Thermal", pages: "mavic"
//     },
//     { name: "DJI Mavic 3T (Thermal) CN", price: "415 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T (с тепловизором), подходит под СВО, для тех у кого есть возможность прошить.", category: "Mavic 3 Thermal", pages: "mavic" },
//     { name: "DJI Mavic 3T Thermal Worry-Free Plus Combo", price: "525 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T Thermal с тепловизором, аксессуарами, RTK, и профессиональным пультом.", category: "Mavic 3 Thermal", pages: "mavic" },

//     // mavic classic
//     { name: "DJI Mavic 3 Classic (RC)", price: "155 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой и RC пультом", category: "Mavic 3 classic", pages: "mavic" },
//     { name: "DJI Mavic 3 Classic (Aircraft)", price: "137 000 p", exPrice: "", desc: "Один дрон (DJI Mavic 3 Classic) с камерой", category: "Mavic 3 classic", pages: "mavic" },
//     { name: "DJI Mavic 3 Classic", price: "149 999 p", exPrice: "", desc: "", category: "Mavic 3 classic", pages: "mavic" },

//     // Mavic 3 Pro
//     { name: "DJI Mavic 3 PRO (Aircraft)", price: "165 000 p", exPrice: "", desc: "Только дрон без ПУ и АКБ", category: "Mavic 3 Pro", pages: "mavic" },
//     { name: "DJI Mavic 3 Pro", price: "", exPrice: "199 000 p", desc: "Дрон DJI Mavic 3 Pro с камерой.", category: "Mavic 3 Pro", pages: "mavic" },
//     { name: "DJI Mavic 3 Pro Fly More Combo", price: "245 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Pro с камерой и аксессуарами.", category: "Mavic 3 Pro", pages: "mavic" },
//     { name: "DJI Mavic 3 Pro Fly More Combo (RC Pro)", price: "360 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Pro с камерой, аксессуарами, и профессиональным пультом.", category: "Mavic 3 Pro", pages: "mavic" },
//     { name: "Mavic 3 Pro Cine Premium Combo", price: "460 000 p", exPrice: "", desc: "Дрон Mavic 3 Pro для профессиональной съёмки, аксессуарами, и профессиональным пультом.", category: "Mavic 3 Pro", pages: "mavic" },

//     // Mavic 3 Combo
//     { name: "DJI Mavic 3 Fly More Combo", price: "260 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой и аксессуарами.", category: "Mavic 3 Combo", pages: "mavic" },
//     { name: "DJI Mavic 3 Cine Premium Combo", price: "450 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Cine для профессиональной съёмки с аксессуарами.", category: "Mavic 3 Combo", pages: "mavic" },
//     { name: "DJI Mavic 3 Fly More Combo (RC Pro)", price: "370 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 с камерой, аксессуарами, и профессиональным пультом RC Pro", category: "Mavic 3 Combo", pages: "mavic" },
//     { name: "DJI Mavic 3T Thermal Worry-Free Plus Combo", price: "525 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T Thermal с тепловизором, аксессуарами, RTK, и профессиональным пультом.", category: "Mavic 3 Combo", pages: "mavic" },

//     // Mavic 3 Enterprise
//     { name: "DJI Mavic 3T (Thermal) CN", price: "415 000 p", exPrice: "", desc: "Дрон DJI Mavic 3T (с тепловизором), подходит под СВО, для тех у кого есть возможность прошить.", category: "Mavic 3 Enterprise", pages: "mavic" },
//     { name: "DJI Mavic 3 Enterprise", price: "310 000 p", exPrice: "", desc: "Промышленный дрон DJI Mavic 3 Enterprise", category: "Mavic 3 Enterprise", pages: "mavic" },
//     { name: "DJI Mavic 3 Enterprise (Aircraft)", price: "299 999 p", exPrice: "", desc: "Промышленный дрон DJI Mavic 3 Enterprise", category: "Mavic 3 Enterprise", pages: "mavic" },
//     {
//         name: "DJI Mavic 3 Enterprise (Гражданская версия)", price: "330 000 p", exPrice: "", desc: "DJI Mavic 3 Enterprise (Гражданская версия) – это дрон, специально созданный для гражданских целей. Его уникальная прошивка снимает все ограничения DJI, включая запреты на полеты в зонах, таких как территория РФ. Это делает его идеальным для инспекций, поисково-спасательных операций и других гражданских задач.", category: "Mavic 3 Enterprise", pages: "mavic"
//     },

//     // Mavic 3 Multispectral
//     { name: "DJI Mavic 3 Multispectral", price: "499 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Multispectral сельского назначения с мультиспектральной камерой", category: "Mavic 3 Multispectral", pages: "mavic" },

//     // Mavic 3 Cine
//     { name: "DJI Mavic 3 Cine Premium Combo", price: "450 000 p", exPrice: "", desc: "Дрон DJI Mavic 3 Cine для профессиональной съёмки с аксессуарами.", category: "Mavic 3 Cine", pages: "mavic" },
//     { name: "Mavic 3 Pro Cine Premium Combo", price: "460 000 p", exPrice: "", desc: "Дрон Mavic 3 Pro для профессиональной съёмки, аксессуарами, и профессиональным пультом.", category: "Mavic 3 Cine", pages: "mavic" },
    
//     //mavic 2 
//     { name: "DJI Mavic 2 Enterprise Advanced", price: "444 000 p", exPrice: "", desc: "Дрон DJI Mavic 2 с тепловизором и аксессуарами", category: "Mavic 2", pages: "mavic" },
   


//     // MINI
//     // mini 3
//     { name: "DJI Mini 3 Pro (RC)", price: "95 900 p", exPrice: "", desc: "Мини-дрон DJI Mini 3 Pro с камерой и пультом RC", category: "mini 3", pages: "mini" },
//     { name: "DJI Mini 3 Pro", price: "90 000 p", exPrice: "", desc: "DJI Mini 3 Pro drone with camera.", category: "mini 3", pages: "mini" },
//     { name: "DJI Mini 3 Pro (Без RC)", price: "88 000 p", exPrice: "", desc: "Дрон DJI Mini 3 Pro с камерой без пультов управления.", category: "mini 3mini 3", pages: "mini" },
//     { name: "DJI Mini 3 Pro Fly More Combo Plus", price: "122 000 p", exPrice: "", desc: "Дрон DJI Mini 3 Pro с камерой и аксессуарами.", category: "mini 3", pages: "mini" },
//     { name: "DJI Mini 3 Pro Fly More Combo Plus (RC)", price: "135 000 p", exPrice: "", desc: "Мини-дрон с камерой и аксессуарами.", category: "mini 3", pages: "mini" },
//     { name: "DJI Mini 3 Fly More Combo (RC)", price: "110 990 p", exPrice: "", desc: "Мини-дрон с камерой и аксессуарами.", category: "mini 3", pages: "mini" },
//     { name: "DJI Mini 3 Fly More Combo", price: "99 000 p", exPrice: "", desc: "Мини-дрон с камерой и аксессуарами.", category: "mini 3", pages: "mini" },

//     // mini 3 pro
//     { name: "DJI Mini 3 Pro (RC)", price: "95 900 p", exPrice: "", desc: "Мини-дрон DJI Mini 3 Pro с камерой и пультом RC", category: "mini 3 pro", pages: "mini" },
//     { name: "DJI Mini 3 Pro", price: "90 000", exPrice: "", desc: "Дрон DJI Mini 3 Pro с камерой.", category: "mini 3 pro", pages: "mini" },
//     { name: "DJI Mini 3 Pro (Без RC)", price: "88 000 p", exPrice: "", desc: "Дрон DJI Mini 3 Pro с камерой без пультов управления.", category: "mini 3 pro", pages: "mini" },
//     { name: "DJI Mini 3 Pro Fly More Combo Plus", price: "122 000 p", exPrice: "", desc: "Дрон DJI Mini 3 Pro с камерой и аксессуарами.", category: "mini 3 pro", pages: "mini" },
//     {
//         name: "DJI Mini 3 Pro Fly More Combo Plus (RC)", price: "135 000 p", exPrice: "", desc: "Мини-дрон с камерой и аксессуарами.", category: "mini 3 pro", pages: "mini"
//     },

//     // Mini 4 Pro
//     { name: "DJI Mini 4 Pro (DJI RC-N2)", price: "90 000 p", exPrice: "", desc: "Новый Мини-дрон DJI Mini 4 Pro с отличной камерой и пультом RC-N2", category: "Mini 4 Pro", pages: "mini" },
//     { name: "DJI Mini 4 Pro Fly More Combo (DJI RC 2)", price: "118 000 p", exPrice: "", desc: "Новый Мини-дрон Mini 4 Pro с отличной камерой, пультом RC-2 и комплектом комбо", category: "Mini 4 Pro", pages: "mini" },
//     { name: "DJI Mini 4 Pro Fly More Combo Plus (DJI RC 2)", price: "125 000 p", exPrice: "", desc: "", category: "Mini 4 Pro", pages: "mini" },
//     { name: "DJI Mini 4 Pro ( DJI Rc 2)", price: "93 000 p", exPrice: "", desc: "Новый Мини-дрон с отличной камерой", category: "Mini 4 Pro", pages: "mini" },
//     // Mini 3 Kit
//     { name: "DJI Mini 3 Pro Fly More Kit Plus", price: "31 000 p", exPrice: "", desc: "Набор аксессуаров для Mini 3", category: "Mini 3 Kit", pages: "mini" },

//     // mini 4k
//     { name: "DJI Mini 4K", price: "55 000 p", exPrice: "", desc: "DJI Mini 4K – компактный дрон весом менее, он идеально подходит для записи долгих путешествий и создания впечатляющих кадров.", category: "mini 4k", pages: "" },
//     { name: "DJI Mini 4K (Fly More Combo)", price: "85 000 p", exPrice: "", desc: "Расширенный набор Fly More Combo DJI Mini 4K – компактный дрон весом менее, он идеально подходит для записи долгих путешествий и созда ния впечатляющих кадров.", category: "mini 4k", pages: "" },

//     // avata
//     // { name: "", price: "", exPrice: "", desc: "", category: "", pages: "" },
// ]

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
    { name: "DJI Avata 2 Fly More Combo", price: "95 000 p", exPrice: "", desc: "DJI Avata 2 - новый FPV-дрон. Avata 2 Fly more combo (RC Motion 3 + Goggles 3 + 1 Батарея)", category: "avata", pages: "" },
    { name: "DJI Avata 2 Fly More Combo (3 Батареи)", price: "109 000 p", exPrice: "", desc: "Avata 2 — это совершенный FPV-дрон. Avata 2 Fly more combo (RC Motion 3 + Goggles 3 + 3 Батареи)", category: "avata", pages: "" },
    { name: "DJI Avata (Без RC)", price: "65 000 p", exPrice: "", desc: "FPV-дрон DJI Avata без контроллеров управления.", category: "avata", pages: "" },
    { name: "DJI Avata Pro-View Combo", price: "119 999 p", exPrice: "", desc: "FPV-дрон DJI Avata с дополнительными аксессуарами.", category: "avata", pages: "" },
    { name: "DJI Avata Fly Smart Combo", price: "135 000 p", exPrice: "", desc: "FPV-дрон DJI Avata с дополнительными аксессуарами.", category: "avata", pages: "" },
    { name: "DJI Avata Explorer Combo", price: "116 000 p", exPrice: "", desc: "FPV-дрон с дополнительными аксессуарами.", category: "avata", pages: "" },
    { name: "DJI Avata 2", price: "60 000 p", exPrice: "", desc: "DJI Avata 2 - воплощение скорости и свободы. FPV-дрон от DJI. Один дрон", category: "avata", pages: "" },
    { name: "DJI Avata Pro - View Combo (RC Motion 2)", price: "119 000 p", exPrice: "", desc: "Квадрокоптер DJI Avata Pro-View Combo с пультом нового поколения DJI RC Motion 2 и очками DJI Goggles 2", category: "avata", pages: "" },

    //avata 2 
    { name: "DJI Avata 2 Fly More Combo", price: "95 000 p", exPrice: "", desc: "DJI Avata 2 - новый FPV-дрон. Avata 2 Fly more combo (RC Motion 3 + Goggles 3 + 1 Батарея)", category: "", pages: "" },
    { name: "DJI Avata 2 Fly More Combo (3 Батареи)", price: "109 000 p", exPrice: "", desc: "Avata 2 — это совершенный FPV-дрон. Avata 2 Fly more combo (RC Motion 3 + Goggles 3 + 3 Батареи)", category: "", pages: "" },
    { name: "DJI Avata 2", price: "60 000 p", exPrice: "", desc: "DJI Avata 2 - воплощение скорости и свободы. FPV-дрон от DJI. Один дрон", category: "", pages: "" },


    // avata combo
    {
        name: "DJI Avata Pro-View Combo", price: "119 999 p", exPrice: "", desc: "FPV-дрон DJI Avata с дополнительными аксессуарами.", category: "", pages: "" },
    { name: "DJI Avata Fly Smart Combo", price: "135 000 p", exPrice: "", desc: "FPV-дрон DJI Avata с дополнительными аксессуарами.", category: "", pages: "" },
    { name: "DJI Avata Explorer Combo", price: "116 000 p", exPrice: "", desc: "FPV-дрон с дополнительными аксессуарами.", category: "", pages: "" },
    { name: "DJI Avata Pro - View Combo (RC Motion 2)", price: "119 000 p", exPrice: "", desc: "Квадрокоптер DJI Avata Pro-View Combo с пультом нового поколения DJI RC Motion 2 и очками DJI Goggles 2", category: "", pages: "" },

    // avata kit
    { name: "DJI Avata Fly More Kit", price: "34 500 p", exPrice: "", desc: "Зарядный набор для DJI Avata.", category: "", pages: "" },

    // matrice
    { name: "DJI Matrice 30T Combo", price: "670 000 p", exPrice: "", desc: "Промышленный дрон с тепловизором и дополнительными аксессуарами.", category: "", pages: "" },
    { name: "DJI Matrice 350 RTK + Zenmuse H20T (Combo)", price: "1 850 000 p", exPrice: "", desc: "Промышленный дрон DJI Matrice 350 RTK с камерой Zenmuse H20T, зарядной станцией, и двумя батареями в комплекте.", category: "", pages: "" },
    { name: "DJI Matrice 300 RTK + Zenmuse H20N (Combo)", price: "1 860 000 р", exPrice: "", desc: "Промышленный дрон DJI Matrice 300 RTK с камерой Zenmuse H20N, зарядной станцией, и двумя батареями в комплекте.", category: "", pages: "" },
    { name: "DJI Matrice 350 RTK + Zenmuse H20N (Combo)", price: "1 900 000 р", exPrice: "", desc: "Промышленный дрон DJI Matrice 350 RTK с камерой Zenmuse H20N, зарядной станцией, и двумя батареями в комплекте.", category: "", pages: "" },
    { name: "DJI Matrice 350 RTK", price: "1 050 000 p", exPrice: "", desc: "Промышленный дрон с камерой.", category: "", pages: "" },
    { name: "Copy: DJI Matrice 350 RTK (Комплект)", price: "1 250 000 p", exPrice: "", desc: "Промышленный дрон с камерой.", category: "", pages: "" },
    { name: "DJI Matrice 30T", price: "599 000 p", exPrice: "", desc: "Промышленный дрон с тепловизором.", category: "", pages: "" },
    { name: "DJI Matrice 300 RTK", price: "1 300 000 p", exPrice: "", desc: "Промышленный дрон без камеры.", category: "", pages: "" },
    { name: "DJI Matrice 300 RTK + Zenmuse H20T (Combo)", price: "1 999 000 p", exPrice: "", desc: "Промышленный дрон с камерой, зарядной станцией, и двумя батареями в комплекте.", category: "", pages: "" },
    { name: "DJI Matrice 3D", price: "1 000 000 p", exPrice: "", desc: "DJI Matrice 3D— это новейшая серия всепогодных корпоративных дронов", category: "", pages: "" },
    { name: "DJI Matrice 3TD", price: "1 500 000 p", exPrice: "", desc: "DJI Matrice 3TD— это новейшая серия всепогодных корпоративных дронов", category: "", pages: "" },

    // air 2s
    { name: "DJI Air 2S (RC-N1)", price: "99 000 p", exPrice: "", desc: "Дрон с камерой с пультом управления DJI RC-N1", category: "", pages: "" },
    { name: "DJI Air 2S Fly More Combo", price: "120 000 p", exPrice: "", desc: "Дрон с камерой, дополнительными аксессуарами, и пультом", category: "", pages: "" },
    { name: "DJI Air 2S Fly More Combo (RC)", price: "140 000 p", exPrice: "", desc: "Дрон с камерой, дополнительными аксессуарами, и пультом с экраном.", category: "", pages: "" },
    { name: "DJI Air 2S Fly More Combo (Smart Controller)", price: "180 000 p", exPrice: "", desc: "", category: "", pages: "" },
    { name: "Дрон с камерой, дополнительными аксессуарами, и профессиональным пультом.", price: "", exPrice: "", desc: "", category: "", pages: "" },



    // 14.Air 3
    { name: "DJI Air 3 Fly More Combo (RC 2)", price: "155 000 p", exPrice: "", desc: "Квадрокоптер DJI Air 3 с дополнительными аксессуарами, и пультом с экраном.", category: "", pages: "" },
    { name: "DJI Air 3", price: "140 000 p", exPrice: "", desc: "Дрон с камерой.", category: "", pages: "" },
    { name: "DJI Air 3 Fly More Combo", price: "149 000 p", exPrice: "", desc: "Дрон с камерой и дополнительными аксессуарами", category: "", pages: "" },


    // fpv
    { name: "DJI FPV Combo", price: "130 000 p", exPrice: "", desc: "FPV-дрон с дополнительными аксессуарами.", category: "", pages: "" },

    // kit
    { name: "DJI Mavic 3 Fly More Kit", price: "55 000 p", exPrice: "", desc: "Набор аксессуаров для дрона", category: "", pages: "" },
    { name: "DJI Mavic 2 Enterprise Fly More Kit", price: "50 000 p", exPrice: "", desc: "Набор аксессуаров для дрона Mavic 2", category: "", pages: "" },
    { name: "DJI Mavic 3 Enterprise Battery Kit", price: "65 000 p", exPrice: "", desc: "Зарядный набор для дрона", category: "", pages: "" },
    { name: "DJI Mini 3 Pro Fly More Kit Plus", price: "31 000 p", exPrice: "", desc: "Набор аксессуаров для Mini 3", category: "", pages: "" },
    { name: "DJI Avata Fly More Kit", price: "34 500 p", exPrice: "", desc: "Зарядный набор для DJI Avata", category: "", pages: "" },



    // 17.Пульты
    { name: "DJI FPV Remote Controller 3", price: "22 500 p", exPrice: "", desc: "Усовершенственный пульт для Avata 2 от DJI с интегрированной антенной, легким весом и продолжительным временем работы. В комплекте идут доп.стики (пара)", category: "", pages: "" },
    { name: "Alientech DUO II ( для пульта RC PRO)", price: "58 500 p", exPrice: "", desc: "Усилитель сигнала Alientech DUO II ( для пульта RC PRO)", category: "", pages: "" },
    { name: "DJI RC", price: "13 500 p", exPrice: "", desc: "Пульт с экраном. DJI Remote Controller (RC)", category: "", pages: "" },
    { name: "DJI RC Pro", price: "89 000 p", exPrice: "", desc: "Профессиональный пульт с экраном.", category: "", pages: "" },
    { name: "DJI RC Plus", price: "180 000 p", exPrice: "", desc: "Влагозащитный и ударопрочный профессиональный пульт с экраном.", category: "", pages: "" },
    { name: "DJI RC-N1", price: "10 000 p", exPrice: "", desc: "Пульт без экрана.", category: "", pages: "" },
    { name: "DJI FPV Remote Controller 2", price: "29 900 p", exPrice: "", desc: "FPV-пульт.", category: "", pages: "" },
    { name: "DJI Mini SE Controller MR1SD25", price: "6 500 p", exPrice: "", desc: "Пульт для Mini SE", category: "", pages: "" },
    { name: "Motion Controller", price: "16 900 p", exPrice: "", desc: "Пульт управления FPV.", category: "", pages: "" },
    { name: "Motion Controller 2", price: "20 500 p", exPrice: "", desc: "Пульт управления FPV.", category: "", pages: "" },
   

    // 18.Батареи
    { name: "DJI Mavic 3 Intelligent Flight Battery (Батарея)", price: "19 500 p", exPrice: "", desc: "Батарея для DJI Mavic 3.", category: "", pages: "" },
    { name: "DJI Matrice 350 TB65 Battery (Батарея)", price: "70 000 p", exPrice: "", desc: "Батарея для DJI Matrice 350.", category: "", pages: "" },
    { name: "DJI Matrice 300 Battery TB60 (Батарея)", price: "75 000 p", exPrice: "", desc: "Батарея для DJI Matrice 300.", category: "", pages: "" },
    { name: "DJI Matrice 30 Battery TB30 (Батарея)", price: "43 000 p", exPrice: "", desc: "Батарея для DJI Matrice 30", category: "", pages: "" },
    { name: "Mavic 2 Enterprise Battery (Батарея)", price: "19 999 p", exPrice: "", desc: "Батарея для Mavic 2", category: "", pages: "" },
    { name: "WB37 Battery (Батарея)", price: "15 000 p", exPrice: "", desc: "Батарея для RC Plus, CrystalSky, Cendence.", category: "", pages: "" },
    { name: "DJI Avata Battery (Батарея)", price: "19 500 p", exPrice: "", desc: "Батарея для DJI Avata", category: "", pages: "" },
    { name: "Smart Flight Battery для Autel Max 4T", price: "39 000 p", exPrice: "", desc: "", category: "", pages: "" },
    { name: "DJI Avata 2 Battery (Батарея)", price: "17 500 p", exPrice: "", desc: "Батарея для DJI Avata 2", category: "", pages: "" },
    
    
    // 19.Зарядные станции    
    { name: "DJI Mavic 3 Hub (Зарядная станция)", price: "3 500 p", exPrice: "", desc: "Зарядная станция (Хаб) для Mavic 3.", category: "", pages: "" },
    { name: "PowerBank для квадрокоптеров", price: "8 000 p", exPrice: "", desc: "Повербанк ёмкостью в 30000 mAH и мощностью в 100W.", category: "", pages: "" },
    { name: "BS65 DJI Matrice 350 (Зарядная станция)", price: "170 000 p", exPrice: "", desc: "Зарядный концентратор для дронов DJI Matrice 350", category: "", pages: "" },
    { name: "BS60 Matrice 300 (Зарядная станция)", price: "150 000 p", exPrice: "", desc: "Зарядный концентратор для дронов Matrice 300", category: "", pages: "" },
    { name: "BS30 Matrice 30 (Зарядная станция)", price: "130 000 p", exPrice: "", desc: "Зарядный концентратор для дронов Matrice 30", category: "", pages: "" },
    { name: "Оригинальное автомобильное зарядное устройство DJI (65 Вт)", price: "3 900 p", exPrice: "", desc: "Заряжайте свои дроны DJI быстро и удобно в дороге с оригинальным автомобильным зарядным устройством", category: "", pages: "" },
    { name: "Зарядная станция DJI Avata 2", price: "5 000 p", exPrice: "", desc: "Зарядный хаб для 3х аккумуляторов (батарей)", category: "", pages: "" },
    { name: "Портативная электростанция ARTELV PSL 1500W", price: "109 000 p", exPrice: "", desc: "Это ультра-профессиональное решение для обеспечения энергии в местах, где нет доступа к розетке или требуется надежный и стойкий источник питания.", category: "", pages: "" },
    { name: "Хаб для заряда 3х аккмуляторов DJI Mini 3 Pro / 4 Pro Two-Way Charging Hub", price: "10 000 p", exPrice: "", desc: "Two-Way Charging Hub - Это двухсторонний зарядный концентратор, который может одновременно заряжать пульт управления и три батареи. Его можно использовать как мобильный источник питания и для удобного хранения батарей. С помощью зарядного устройства DJI USB-C мощностью 30 Вт три батареи DJI Mini 3 Pro заряжаются полностью за три часа, что значительно повышает эффективность зарядки.", category: "", pages: "" },

    // 20.Пропеллеры
    {
        name: "Mavic 3 Low-Noise Propellers (Пропеллеры)", price: "3 500 p", exPrice: "", desc: "Малошумные пропеллеры для Mavic 3", category: "", pages: "" },
    { name: "DJI Matrice 300 Propellers 2110 (Пропеллеры)", price: "13 500 p", exPrice: "", desc: "Пропеллеры для DJI Matrice 300", category: "", pages: "" },
    { name: "Matrice 30/30T (Пропеллеры)", price: "13 000 p", exPrice: "", desc: "Пропеллеры для DJI Matrice 30/30T", category: "", pages: "" },

    // 21.Системы сброса
    { name: "DJI Mavic 3 Release System BRDRC (Система сброса)", price: "3 800 p", exPrice: "", desc: "Система сброса для DJI Mavic 3.", category: "", pages: "" },

    // 22.Камеры Zenmuse
    { name: "Zenmuse L1", price: "750 000 p", exPrice: "", desc: "Компактная и легкая многоспектральная камера", category: "", pages: "" },
    { name: "Zenmuse H20N (Камера)", price: "800 000 p", exPrice: "", desc: "камера H20N для Matrice 300/350", category: "", pages: "" },
    { name: "Zenmuse H20T (Камера)", price: "890 000 p", exPrice: "", desc: "Камера Zenmuse H20T для Matrice 300/350", category: "", pages: "" },
    { name: "Zenmuse L2", price: "999 999 p", exPrice: "", desc: "Высокопроизводительная многоспектральная камера", category: "", pages: "" },
    { name: "DJI Zenmuse H30T (Камера)", price: "1 200 000 p", exPrice: "", desc: "DJI Zenmuse H30T — это многофункциональная камера с зумом, тепловизором, лазерным дальномером и ИК-освещением, подходящая для любых погодных условий. Использует ИИ для качественной съемки днем и ночью, применима в сфере безопасности, инфраструктуры и экологии.", category: "", pages: "" },
    { name: "DJI Zenmuse P1", price: "800 000 p", exPrice: "", desc: "Съемочная система Zenmuse P1 - это единая мощь полнокадровой матрицы, сменных объективов с фиксированным фокусом и подвеса с 3-осевой стабилизацией. Созданный для фотограмметрических полетов, он выводит эффективность и точность на совершенно новый уровень. Система была создана специально для выполнения фотограмметрии с борта дрона и обладает невероятной точностью и производительностью", category: "", pages: "" },


    // 23.Сумки и кейсы
    { name: "DJI Convertible Carrying Bag (Сумка)", price: "4 000 p", exPrice: "", desc: "Транспортировочная сумка для Mavic 3", category: "", pages: "" },
    { name: "Mavic 3 Carrying Case PGYTECH (Кейс)", price: "11 000 p", exPrice: "", desc: "Транспортировочный кейс для Mavic 3", category: "", pages: "" },

    // 24.RTK
    { name: "Mavic 3 Enterprise RTK", price: "37 000 p", exPrice: "", desc: "RTK-модуль для Mavic 3 Enterprise", category: "", pages: "" },

    // 25.Динамики
    { name: "Mavic 3 Enterprise Speaker (Динамик)", price: "24 000 p", exPrice: "", desc: "Динамик (Громкоговоритель) для Mavic 3 Enterprise", category: "", pages: "" },
    { name: "Mavic 2 Enterprise Speaker (Динамик)", price: "16 000 p", exPrice: "", desc: "Динамик (Громкоговоритель) для Mavic 2 Enterprise", category: "", pages: "" },

    // 26.Прожекторы
    { name: "Mavic 2 Enterprise Spotlight (Прожектор)", price: "22 000 p", exPrice: "", desc: "Прожектор для Mavic 2 Enterprise", category: "", pages: "" },

    // 27.FPV-очки
    { name: "Goggles Integra Motion Combo", price: "75 000 p", exPrice: "", desc: "Набор с управлением и FPV-очками", category: "", pages: "" },
    { name: "Goggles Integra", price: "55 000 p", exPrice: "", desc: "FPV-очки", category: "", pages: "" },
    { name: "Motion Controller Combo (Goggles V2)", price: "73 000 p", exPrice: "", desc: "Набор с управлением и FPV-очками", category: "", pages: "" },
    { name: "FPV Goggles V2", price: "70 000 p", exPrice: "", desc: "FPV-очки", category: "", pages: "" },
    { name: "Goggles 2 Motion Combo (Goggles 2)", price: "75 000 p", exPrice: "", desc: "Набор с управлением и FPV-очками", category: "", pages: "" },
    { name: "Goggles 2", price: "70 000", exPrice: "", desc: "FPV-очки", category: "", pages: "" },


    // 28.Экшен-камеры
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
                                        <img src="../webp_img/${val.name}.webp"
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
                                            <img src="../webp_img/${val.name}.webp"
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
        var moreOpt = ""
        moreOpt = e.target.getAttribute("data-moreOptions");

        if (moreOpt.toLowerCase() != "") {

            filteredData = arrayData.filter((item) => {
                return item.pages.toLowerCase() === moreOpt.toLowerCase();
            })
            return showData(filteredData)

        }


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


