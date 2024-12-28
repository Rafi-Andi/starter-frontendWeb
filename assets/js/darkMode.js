const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

// Cek status dari localStorage saat halaman dimuat
if (localStorage.getItem('darkMode') === 'enabled') {
    darkToggle.checked = true;
    html.classList.add('dark');
} else {
    darkToggle.checked = false;
    html.classList.remove('dark');
}

// Tambahkan event listener untuk menyimpan status ke localStorage
darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled'); // Simpan status
    } else {
        html.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled'); // Simpan status
    }
});
