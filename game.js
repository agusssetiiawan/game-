// pilihan player

var lagi = true;
var kosng = null;

while (lagi){
var player = prompt ('silahkan masukan pilihan : \n gajah,orang,semut');

// pilihan computer
var comp = Math.random();

if (comp < 0.34){
	comp = 'gajah';
}else if (comp > 0.34 && comp < 0.66){
	comp = 'orang';
}else {
	comp = 'semut';
}

// alur game /rules
var hasil = '';
if (player == comp){
		hasil = 'SERI';
}else if (player == 'gajah'){
	  if(comp == 'orang'){
	  	hasil = 'anda menang';
	  }else {
	  	hasil = 'anda kalah';
	  }

}else if ( player == 'orang'){
	if (comp == 'gajah'){
		hasil = 'anda kalah';
	}else  {
		hasil = 'anda menang';
	}

}else if (player == 'semut'){
	if (comp == 'gajah'){
		hasil = 'anda menang';
	}else {
		hasil = 'anda kalah';
	}
}else {
		hasil = ('yang anda masukan bukan  kategori');
	
}


	alert('kamu memilih : ' + player + ' dan komputer pilih : '+ comp +'\n  hasilnya:  '+ hasil);







// tampilkan hasil 
lagi = confirm ('mau bermain lagi ??');

}

alert('terimakasih sudah bermain');