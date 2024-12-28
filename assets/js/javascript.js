const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Tombol diklik!");
});

// Menangani event mouse
const box = document.getElementById("myBox");
box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "yellow";
});
box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "white";
});

// Menangani event keyboard
document.addEventListener("keydown", function(event) {
    console.log("Key yang ditekan:", event.key);
});