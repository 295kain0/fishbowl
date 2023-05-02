//sử dụng thư viện jQuery Ripples
$("#ripple").ripples({
    resolution: 900, //đô phân giải của hiệu ứng sống
    dropRadius: 20, //bán kính của những giọt nước
    perturbance: 0.09, //mức độ biến đổi của giọt nước
});
/// bọt biển random
function createBubble() {
    const section = document.querySelector("section");
    const centerFrameWidth = section.offsetWidth;
    const createElement = document.createElement("span");
    if (innerWidth <= 400) {
        var size = Math.random() * 2 + 5;
    }
    if (innerWidth <= 800) {
        var size = Math.random() * 10 + 10;
    } else {
        var size = Math.random() * 20 + 15;
    }
    createElement.style.width = size + "px";
    createElement.style.height = size + "px";
    createElement.style.left = Math.random() * (centerFrameWidth - 30) + "px";
    section.appendChild(createElement);
    setTimeout(() => {
        createElement.remove();
    }, 4000);
}
setInterval(createBubble, 100);
// Thêm cá vào hồ
const fishSelect = document.querySelector("#fish-select");
const addFishBtn = document.querySelector("#add-fish-btn");
let currentFish = null; // Biến lưu trữ cá hiện tại

addFishBtn.addEventListener("click", function() {
    const selectedFish = fishSelect.value;
    // Kiểm tra giá trị option được chọn
    let fishSize = "";
    if (selectedFish === "Picture/Fish1.gif") {
        fishSize = "giant-fish";
    } else if (selectedFish === "Picture/Fish2.gif") {
        fishSize = "small-fish";
    } else if (selectedFish === "Picture/Fish3.gif") {
        fishSize = "small-fish";
    } else if (selectedFish === "Picture/Fish4.gif") {
        fishSize = "small-fish";
    } else if (selectedFish === "Picture/Fish5.gif") {
        fishSize = "small-fish";
    } else if (selectedFish === "Picture/Fish6.gif") {
        fishSize = "small-fish";
    } else if (selectedFish === "Picture/Fish7.gif") {
        fishSize = "small-fish";
    }

    // Tạo phần tử ảnh cho cá mới và gán class tương ứng
    const fishImg = $("<img>").attr("src", selectedFish);
    const fishCount = $(".fish").length + 1; // Số thứ tự mới của cá
    fishImg.addClass("fish fish-" + fishCount); // Thêm class "fish" với số thứ tự tương ứng
    fishImg.addClass(fishSize); // Thêm class tương ứng với kích thước cá
    fishImg.css({
        position: "absolute",
        bottom: Math.random() * 65 + 15 + "%", // Thêm giá trị ngẫu nhiên với đơn vị % để random vị trí
        left: Math.random() * 65 + 15 + "%", // Thêm giá trị ngẫu nhiên với đơn vị % để random vị trí
    });
    // Thêm phần tử ảnh của cá mới vào trang web
    const centerFrame = document.querySelector("section");
    centerFrame.appendChild(fishImg[0]);
    fishImg.addClass("fish fish-" + fishCount + " swimming");

    // tạo di chuyển bằng jquery
    animations = {
        "swim-left": {
            properties: {
                left: "80%",
            },
            duration: 20000,
            easing: "linear",
        },
        "swim-right": {
            properties: {
                top: "80%",
            },
            duration: 1000,
        },
        "flip": {
            properties: {
                rotateY: "180deg",
            },
            duration: 1000,
        },
    };

    // Khi chuột phải được click vào con cá
    fishImg.on("contextmenu", function(event) {
        event.preventDefault();

        const selectedAnimation = document.querySelector("#animation-select").value;
        const fish = $(this);

        // Kiểm tra xem lựa chọn của animation có tồn tại trong danh sách không
        if (selectedAnimation !== "none" && animations[selectedAnimation]) {
            const animation = animations[selectedAnimation];

            // Chạy animation
            fish.animate(animation.properties, animation.duration);
        }
    });
});
// // tạo chuyển động cho cá khi nhấn chuột phải bằng css
// fishImg.on("contextmenu", function(event) {
//     event.preventDefault(); //Ngăn menu chuột phải mặc định
//     const selectedAnimation = document.querySelector("#animation-select").value; //Lấy hoạt ảnh đã chọn
//     const fish = $(this); // Lấy phần tử cá vừa click
//     fish.removeClass("swim-left swim-right element"); // Xóa tất cả các lớp hoạt hình
//     if (selectedAnimation !== "none") {
//         fish.addClass(selectedAnimation); // Thêm lớp hoạt hình đã chọn vào con cá
//     }
// });

//Xoá cá bằng cách click chuột vào cá đó
const centerFrame = document.querySelector("section");
centerFrame.addEventListener("click", function(event) {
    if (event.target.classList.contains("fish")) {
        const confirmDelete = confirm("Bạn có muốn xoá cá này không?");
        if (confirmDelete) {
            event.target.remove();
        }
    }
});
//Thêm rong vào với vị trí random
var sectionList = document.querySelectorAll("section");
var rongSelect = document.getElementById("rong-select");
var addRongBtn = document.getElementById("add-rong-btn");
var rongList = [];
// Tạo mảng chứa các vị trí rong và cách nhau xa hơn
for (var i = 0; i < sectionList.length; i++) {
    var sectionWidth = sectionList[i].offsetWidth;
    var sectionHeight = sectionList[i].offsetHeight;
    var numColumns = Math.floor(sectionWidth / 150);
    var numRows = Math.floor(sectionHeight / 100);
    var columnSpacing = (sectionWidth - numColumns * 150) / (numColumns + 1);
    var rowSpacing = (sectionHeight - numRows * 100) / (numRows + 1);
    for (var row = 0; row < numRows; row++) {
        for (var column = 0; column < numColumns; column++) {
            var x = sectionList[i].offsetLeft + columnSpacing * (column + 1) + column * 150;
            var y = sectionList[i].offsetTop + rowSpacing * (row + 1) + row * 100;
            rongList.push({
                x: x,
                y: y
            });
        }
    }
}

addRongBtn.addEventListener("click", function() {
    const selectedrong = rongSelect.value;
    // Tìm vị trí mới để thêm rong vào
    var newRongPos = null;
    while (!newRongPos) {
        var posIndex = Math.floor(Math.random() * rongList.length);
        if (!$(".rong").is(`[style*='left: ${rongList[posIndex].x}; top: ${rongList[posIndex].y}%;']`)) {
            newRongPos = rongList[posIndex];
        }
    }

    // Tạo phần tử ảnh cho rong mới và thêm vào vị trí mới
    const rongImg = $("<img>").attr("src", selectedrong);
    rongImg.addClass("rong");
    rongImg.css({
        position: "absolute",
        bottom: newRongPos.y / $(window).height() * 100 + '%',
        left: newRongPos.x / $(window).width() * 100 + '%',
        height: "8%",
        width: "8%"
    });

    $("#rong").append(rongImg);

    // Loại bỏ vị trí mới khỏi danh sách các vị trí
    rongList.splice(posIndex, 1);
    $("section").on("click", ".rong", function() {
        $(this).toggleClass("selected");
    });

});
$(document).on("dblclick", ".rong", function() {
    const rong = $(this);
    const posX = rong.position().left;
    const posY = rong.position().top;

    // Xóa hình ảnh rong
    setTimeout(function() {
        rong.remove();
        // Cập nhật danh sách các vị trí trống
        rongList.push({
            x: posX,
            y: posY
        });
    }, 50);
});

$("#delete-selected").on("click", function() {
    const selectedRongs = $(".rong.selected");
    let i = 0;
    const batchSize = 10;
    const removeBatch = function() {
        for (let j = 0; j < batchSize && i < selectedRongs.length; j++) {
            const rong = $(selectedRongs[i]);
            const posX = rong.position().left;
            const posY = rong.position().top;
            setTimeout(function() {
                rong.remove();
                rongList.push({
                    x: posX,
                    y: posY
                });
            }, 50);

            i++;
        }
        if (i < selectedRongs.length) {
            setTimeout(removeBatch, 50);
        }
    };

    removeBatch();
    selectedRongs.removeClass("selected");
});
$("#element").animate({
    left: "50px",
    top: "50px"
}, 1000);