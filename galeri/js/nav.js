function switchTab(selected, target) {
    // Ubah status aktif pada tombol
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('active');
    });
    selected.classList.add('active');

    // Tampilkan kontainer yang sesuai
    if (target === 'vidio-container') {
        document.getElementById('vidio-container').style.display = 'flex';
        document.getElementById('foto-container').style.display = 'none';
    } else if (target === 'foto-container') {
        document.getElementById('vidio-container').style.display = 'none';
        document.getElementById('foto-container').style.display = 'flex';
    }
}