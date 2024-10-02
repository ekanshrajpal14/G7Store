document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// var navbar = ` <nav>
//         <div class="navgation">
//             <div class="navbar">
//                 <div class="logo">
//                     <img src="./logo/g7_logo.png" alt="">
//                 </div>
//                 <div class="nav_links">
//                     <div class="nav_item">
//                         <div class="dropdown">
//                             <a href="#" class="a_btn_dropdown">Квадрокоптеры<i class="ri-arrow-drop-down-line"></i></a>
//                             <div class="dropdown_items">
//                                 <div>
//                                     <img src="./navImg/mini.png" alt="">
//                                     <div>
//                                         <a href="mini.html">
//                                             <h4>Mini</h4>
//                                             <p>Маленький дрон для обучения начинающих</p>
//                                         </a>
//                                     </div>
    
//                                 </div>
//                                 <div>
//                                     <img src="./navImg/Mavic_3.png" alt="">
//                                     <div>
//                                         <a href="">
//                                             <h4>Mavic</h4>
//                                             <p>Универсальный дрон с возможностью установки модулей</p>
//                                         </a>
//                                     </div>
    
//                                 </div>
//                                 <div>
//                                     <img src="./navImg/Air2S.png" alt="">
//                                     <div>
//                                         <a href="">
//                                             <h4>Air</h4>
//                                             <p>Дрон средних размеров для воздушного маневрирования</p>
//                                         </a>
//                                     </div>
    
//                                 </div>
//                                 <div>
//                                     <img src="./navImg/Avata.png" alt="">
//                                     <div>
//                                         <a href="">
//                                             <h4>Avata</h4>
//                                             <p>FPV-дрон с управлением от первого лица с помощью очков</p>
//                                         </a>
//                                     </div>
//                                 </div>
    
//                                 <div>
//                                     <img src="./navImg/Matrice.png" alt="">
//                                     <div>
//                                         <a href="">
//                                             <h4>Matrice</h4>
//                                             <p>Профессиональный дрон для специалистов и крупной промышленности</p>
//                                         </a>
//                                     </div>
//                                 </div>
    
//                                 <div>
//                                     <img src="./navImg/Agras.png" alt="">
//                                     <div>
//                                         <a href="">
//                                             <h4>Agras</h4>
//                                             <p>Дрон сельского назначения для обработки полей</p>
//                                         </a>
//                                     </div>
//                                 </div>
    
//                             </div>
    
//                         </div>
//                     </div>
//                     <div class="nav_item">
//                         <div class="dropdown">
//                             <a href="#" class="a_btn_dropdown">Аксессуары<i class="ri-arrow-drop-down-line"></i></a>
//                             <div class="dropdown_items">
//                                 <div>
//                                     <img src="./navImg/stoyka.jpeg" alt="">
//                                     <div>
//                                         <a href="">
//                                             <h4>Усилители сигнала</h4>
//                                             <p>Alintech, AvegeAngel, Инкубатор</p>
//                                         </a>
//                                     </div>
    
//                                 </div>
//                                 <div>
//                                     <img src="./navImg/915675e79bb148298be0.jpg" alt="">
//                                     <div>
//                                         <a href="">
//                                             <h4>Стабилизаторы</h4>
//                                             <p>Стабилизаторы камер Ronin RS 3, Ronin RS 4</p>
//                                         </a>
//                                     </div>
    
//                                 </div>
//                                 <div>
//                                     <img src="./navImg/RCPng.png" alt="">
//                                     <div>
//                                         <a href="">
//                                             <h4>Контроллеры</h4>
//                                             <p>Пульты, очки, FPV-контроллеры</p>
//                                         </a>
//                                     </div>
    
//                                 </div>
    
//                                 <div>
//                                     <img src="./navImg/KitPNG.png" alt="">
//                                     <div>
//                                         <a href="">
//                                             <h4>Kit</h4>
//                                             <p>Полноценные наборы аксессуаров</p>
//                                         </a>
//                                     </div>
    
//                                 </div>
    
//                                 <div>
//                                     <img src="./navImg/BatteryPNG.png" alt="">
//                                     <div>
//                                         <a href="">
//                                             <h4>Батареи</h4>
//                                             <p>Батареи, зарядные станции (Хабы), блоки питания, кабели</p>
//                                         </a>
//                                     </div>
    
//                                 </div>
//                                 <div>
//                                     <img src="./navImg/PropellerPNG.png" alt="">
//                                     <div>
//                                         <a href="">
//                                             <h4>Пропеллеры</h4>
//                                             <p>Малошумные и стандартные лопасти</p>
//                                         </a>
//                                     </div>
    
//                                 </div>
//                                 <div>
//                                     <img src="./navImg/BAGGGG-transformed.png" alt="">
//                                     <div>
//                                         <a href="">
//                                             <h4>Сумки</h4>
//                                             <p>Транспортировочные чехлы, кейсы, рюкзаки</p>
//                                         </a>
//                                     </div>
    
//                                 </div>
    
//                             </div>
    
//                         </div>
//                     </div>
//                     <div class="nav_item"><a href="">Спутниковая связь</a></div>
//                     <div class="nav_item"><a href="">Новинки и Акции</a></div>
//                     <div class="nav_item"><a href="">Защита от дронов</a></div>
//                     <div class="nav_item">
//                         <div class="dropdown">
//                             <a href="#" class="a_btn_dropdown">Более<i class="ri-arrow-drop-down-line"></i></a>
//                             <div class="dropdown_items more_bar">
//                                 <div>
//                                     <div>
//                                         <a href="contact.html">
//                                             <h4>Contact Us</h4>
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <div>
//                                         <a href="about.html">
//                                             <h4>About Us</h4>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <!-- <a href="">Более</a> -->
//                     </div>
//                 </div>
//                 <div class="wtsapp_tele">
//                     <div class="right_item"><button class="call_circle  search_circle"><i
//                                 class="ri-search-line"></i></button></div>
//                     <div class="right_item"><a href="" class="call_circle1 whatsapp"><i class="ri-whatsapp-line"></i></a>
//                     </div>
//                     <div class="right_item"><a href="" class="call_circle call"><i class="ri-phone-line"></i></a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </nav>`


// document.body.insertAdjacentHTML("afterbegin", navbar);



document.querySelector(".menu_toggle_btn").addEventListener("click",function(){
    document.querySelector(".nav_links").classList.toggle("active_nav")
    document.querySelector(".menu_toggle_btn i").classList.toggle("ri-close-large-line");
    document.body.classList.toggle('no_scroll')
})


var dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach((item)=>{
    item.addEventListener("click",function(){
        this.querySelector(".dropdown_items").classList.toggle("active_dropdown")
        this.querySelector("i").classList.toggle("ri-arrow-drop-up-line")
    })
})
