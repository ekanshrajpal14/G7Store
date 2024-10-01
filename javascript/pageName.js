

var l = location.href;
var save = l.split("/");
save.length
console.log(save);

var res = (save[save.length - 1]).split(".");



var pageName = res[0];
console.log(pageName);



var arrayData = [{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "Mavic 3", pages: "Mavic", img: "" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "Mavic 3 Thermal", img: "../mini_page_images/mini", pages: "mini" },
    { name: "DJI Mini 2 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "mini", img: "../mini_page_images/mini", pages: "mini" },
{ name: "DJI Mini 4 Pro", price: "199000", desc: "DJI3 Mini pro drone with camera", category: "mini", img: "../mini_page_images/mini", pages: "mini" },
{ name: "DJI Mini 5 Pro", price: "199000", desc: "DJI3 Mini pro drone with camera", category: "mini", img: "../mini_page_images/mini", pages: "mini" },
{ name: "DJI Mini 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "mini", img: "", pages: "Mavic" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "mini", img: "../mini_page_images/mini", pages: "mini" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "Mini", img: "../mini_page_images/mini", pages: "mini" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "Mavic 3 Thermal", img: "", pages: "Mavic" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "Mini", img: "../mini_page_images/mini", pages: "mini" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "Mini", img: "../mini_page_images/mini", pages: "mini" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "Mini", img: "", pages: "Mavic" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "All", img: "", pages: "Mavic" },
{ name: "DJI Mavic 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "All", img: "", pages: "Mavic" },
{ name: "DJI Air 3 Pro", price: "199000", desc: "DJI3 Mavic pro drone with camera", category: "All", img: "", pages: "Air" },
]
function pageNameData(pageName) {
    var cluuter = "";
    var counter = 1;

    arrayData.forEach(function (data) {


        if (data.pages.toLowerCase() === pageName.toLowerCase()) {

            cluuter += `<div class="cart_box">
                        <div class="top_part">
                            <div class="image_cont">
                                <img src="${data.img} (${counter}).webp"
                                    alt="">
                            </div>
                        </div>
                        <div class="bottom_part">
                            <div class="part1_bottom">
                                <h3>${data.name}</h3>
                                <p>${data.desc}</p>
                                <p class="price">${data.price} p. &nbsp; <span>130 00 p.</span></p>
                            </div>
                            <div class="part2_bottom">
                                <a href="">Add to Cart</a>
                                <a href="" class="read_more">Read More</a>
                            </div>
                        </div>
                    </div>`
        }

        counter++;

    })


    document.querySelector(".all_carts").innerHTML = cluuter;

}

window.addEventListener("load", () => {
    console.log("hello")
    pageNameData(pageName)
})
