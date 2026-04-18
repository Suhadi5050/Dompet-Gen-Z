document.addEventListener('DOMContentLoaded', () => {
    const footerItems = document.querySelectorAll('.footer-item');

    footerItems.forEach(item => {
        item.addEventListener('click', function() {
            // 1. Hapus class 'active' dari semua tombol
            footerItems.forEach(btn => btn.classList.remove('active'));
            
            // 2. Tambah class 'active' ke tombol yang baru saja diklik
            this.classList.add('active');

            // 3. Logika sederhana untuk simulasi pindah menu
            const menuName = this.querySelector('p')?.innerText || "Tombol UFO";
            console.log("Kamu berpindah ke menu: " + menuName);
            
            // Contoh: Jika klik tombol setting (ikon paling kanan)
            if(menuName === "Setting") {
                alert("Menu Setting akan segera hadir di galaksi ini!");
            }
        });
    });

    // Efek klik untuk tombol Login Google
    const loginBtn = document.querySelector('.login-google');
    if(loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Menghubungkan ke Satelit Google... Silakan tunggu.");
        });
    }
});
