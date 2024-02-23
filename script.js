alert("Aplikasi Tiket")

const nama = prompt("Masukkan Namanya ");
const umur = prompt("Masukkan Umurnya ");

if(umur >= 13){
    const studio = prompt("pilih studio \n A : Studio A \n B : Studio B \n C : Studio C");

    if (studio === 'A'){
        alert(`Tiket untuk ${nama}, di Studio A, umur : ${umur}`);
    }
    else if(studio === 'B'){
        alert(`Tiket untuk ${nama}, di Studio B, umur : ${umur}`);
    }
    
    else if(studio === 'C'){
        alert(` Tiket untuk ${nama}, di Studio C, umur : ${umur}`);
    }

    else {
        alert('Pilihan Studio Tidak tersedia')
    }
}   

    else{
        alert(`Tiket untuk ${nama} dengan umur : ${umur} Tidak Tersedia, ${nama} Tidak diperbolehkan masuk studio`);
    }

