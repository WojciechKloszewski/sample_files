

function zuzenergia() {
	
	
	var liczbaosob;
	var energia;
	
	var oszczednosc;
	
	var a;
	
	liczba_osob = document.getElementById("liczbosob").value;
	
	if (liczba_osob<1) {
	energia = 0; 
	}else if (liczba_osob==1) {
		energia = 1200;
	}else if (liczba_osob==2) {
		energia = 1500;
	}else if (liczba_osob==3) {
		energia = 1800;
	}else if (liczba_osob==4) {
		energia = 2100;
	}else if (liczba_osob>4) {
		energia = 2100+(liczba_osob-4)*500;
	}
	
	if (document.getElementById("czyoszczednie").checked == true){
		energia=energia;
	}else{
		energia=1.25*energia;
	}
	
  document.getElementById("1zuzytaenergiaroczna").innerHTML ='<label><input type="number" id="zuzytaenergiaroczna" name="zuzytaenergiaroczna" value="'+energia+'"></label>';
}

function wspkorekcyjny() {

	var a;
	var b;
	var wspkor;
	
	a = document.getElementById("nachyleniedachu").value;
	b = document.getElementById("odchyleniedachu").value;
	
	a=parseInt(a);
	b=parseInt(b);
	
	var zach90 = [51,58,65,71,76,80,83,85,87,90];
	var zach60 = [62,71,78,84,89,92,93,93,90,90];
	var zach30 = [69,80,87,93,97,99,99,97,93,90];
	var pol0 = [72,82,90,96,99,100,100,99,95,90];
	var wsch30 = [70,80,87,94,98,99,100,97,94,90];
	var wsch60 = [63,71,79,85,89,92,93,93,91,90];
	var wsch90 = [52,58,65,72,77,81,84,86,87,90];
	
	if (a==90) {
	a= 0; 
	}else if (a==80) {
	a= 1;
	}else if (a==70) {
	a= 2;
	}else if (a==60) {
	a= 3;
	}else if (a==50) {
	a= 4;
	}else if (a==40) {
	a= 5;
	}else if (a==30) {
	a= 6;
	}else if (a==20) {
	a= 7;
	}else if (a==10) {
	a= 8;
	}else if (a==0) {
	a= 9;
	}
	
	if (b==1) {
	wsp = zach90; 
	}else if (b==2) {
	wsp = zach60;
	}else if (b==3) {
	wsp = zach30;
	}else if (b==4) {
	wsp = pol0;
	}else if (b==5) {
	wsp = wsch30;
	}else if (b==6) {
	wsp = wsch60;
	}else if (b==7) {
	wsp = wsch90;
	}
	
	wspkor = wsp[a];
	
	
	dobor(wspkor);
	

	
	
}


function dobor(wspkor){
	
	var energia = document.getElementById("zuzytaenergiaroczna").value;
	
	var cena = document.getElementById("cenaenergiielektrycznej").value;
	
	var moc;
	
	var modulmoc;
	
	var iloscmodulow;
	
	var produkowanaenergia;
	
	var powierzchnia;
	
	var wartoscenergii;
	
	moc = 1.25*energia/1000;
	
	moc = Math.round(moc*10)/10;
		
	
	if (document.getElementById("modulmoc250").checked == true){
	modulmoc = 250;	
	}else if (document.getElementById("modulmoc300").checked == true){
	modulmoc = 300;	
	}else if (document.getElementById("modulmoc350").checked == true){
	modulmoc = 350;	
	}	
	
	iloscmodulow = moc*1000/modulmoc;
	
	iloscmodulow = Math.ceil(iloscmodulow);
	
	
	moc = iloscmodulow*modulmoc/1000;
	
	produkowanaenergia =  1000*(wspkor/100)*moc*0.88;
	
	produkowanaenergia = Math.round(produkowanaenergia*10)/10;
	
	powierzchnia = moc*6.4;
	
	powierzchnia = Math.round(powierzchnia*10)/10;
	
	wartoscenergii = Math.round(cena*produkowanaenergia*100)/100;
	
	koszt=1.2*moc*(5683.3*Math.pow(moc, -0.314))
	koszt=Math.round(koszt*10)/10;
	
	spbt=koszt/wartoscenergii;
	spbt=Math.round(spbt*10)/10;
	
	//wyniki
	
	document.getElementById("wynikfotowoltaikamoc").innerHTML = moc;
	
	document.getElementById("wynikpowierzchniapaneli").innerHTML = powierzchnia;
	
	document.getElementById("wynikwartoscenergii").innerHTML = wartoscenergii;
	
	document.getElementById("wynikfotowoltaikaenergia").innerHTML = produkowanaenergia;
	
	document.getElementById("wynikiloscmodulow").innerHTML = iloscmodulow;
	
	document.getElementById("wynikkosztinstalacjipv").innerHTML = koszt;
	
	document.getElementById("wynikspbtinstalacjipv").innerHTML = spbt;
	
	//pomocnicze do wykresu
	
	document.getElementById("pomocniczezuzyciefotowoltaika").innerHTML = '<input style="visibility: hidden;" type="number" name="pomocniczezuzyciefotowoltaika1"  id="pomocniczezuzyciefotowoltaika1" value="'+produkowanaenergia+'">';
	
	
	
}

function zuzwody(){
	
	var rodzaj = document.getElementById("zuzwodyselect11").value;
	
	var zuzycie;
	
	rodzaj = parseInt(rodzaj);
	
	if (rodzaj == 1) {
	zuzycie = 35;	
	} else if (rodzaj == 2) {
	zuzycie = 50;	
	}else if (rodzaj == 3) {
	zuzycie = 70;	
	}
	
	 document.getElementById("zuzwodyliczba1").innerHTML ='<label><input type="number" id="zuzwody11" name="zuzwody11" value="'+zuzycie+'"></label>';	
}

function zuzwodyzatwierdz(){
	document.getElementById("wodazatwierdz").innerHTML = '<button onclick="zuzwodyzatwierdz1()">Zatwierdź</button>';
}

function zuzwodyzatwierdz1(){
	zuzwody();
	document.getElementById("wodazatwierdz").innerHTML = '';	
}


function zuzwody2(){
	
	var rodzaj = document.getElementById("zuzwodyselect12").value;
	
	var zuzycie;
	
	rodzaj = parseInt(rodzaj);
	
	if (rodzaj == 1) {
	zuzycie = 35;	
	} else if (rodzaj == 2) {
	zuzycie = 50;	
	}else if (rodzaj == 3) {
	zuzycie = 70;	
	}
	
	 document.getElementById("zuzwodyliczba2").innerHTML ='<label><input type="number" id="zuzwody12" name="zuzwody12" value="'+zuzycie+'"></label>';	
}

function zuzwodyzatwierdz2(){
	document.getElementById("wodazatwierdz2").innerHTML = '<button onclick="zuzwodyzatwierdz12()">Zatwierdź</button>';
}

function zuzwodyzatwierdz12(){
	zuzwody2();
	document.getElementById("wodazatwierdz2").innerHTML = '';	
}


function wspkorekcyjny1() {

	var a;
	var b;
	var wspkor;
	
	a = document.getElementById("nachyleniedachu1").value;
	b = document.getElementById("odchyleniedachu1").value;
	
	a=parseInt(a);
	b=parseInt(b);
	
	var zach90 = [51,58,65,71,76,80,83,85,87,90];
	var zach60 = [62,71,78,84,89,92,93,93,90,90];
	var zach30 = [69,80,87,93,97,99,99,97,93,90];
	var pol0 = [72,82,90,96,99,100,100,99,95,90];
	var wsch30 = [70,80,87,94,98,99,100,97,94,90];
	var wsch60 = [63,71,79,85,89,92,93,93,91,90];
	var wsch90 = [52,58,65,72,77,81,84,86,87,90];
	
	if (a==90) {
	a= 0; 
	}else if (a==80) {
	a= 1;
	}else if (a==70) {
	a= 2;
	}else if (a==60) {
	a= 3;
	}else if (a==50) {
	a= 4;
	}else if (a==40) {
	a= 5;
	}else if (a==30) {
	a= 6;
	}else if (a==20) {
	a= 7;
	}else if (a==10) {
	a= 8;
	}else if (a==0) {
	a= 9;
	}
	
	if (b==1) {
	wsp = zach90; 
	}else if (b==2) {
	wsp = zach60;
	}else if (b==3) {
	wsp = zach30;
	}else if (b==4) {
	wsp = pol0;
	}else if (b==5) {
	wsp = wsch30;
	}else if (b==6) {
	wsp = wsch60;
	}else if (b==7) {
	wsp = wsch90;
	}
	
	wspkor = wsp[a];
	
	
	dobor1(wspkor);
}

function dobor1(wspkor){
	
	var liczba_osob;
	var zuz_wody;
	var cyrkulacja;
	var zapotrzebowanie;
	
	var woda_potrzeby;
	
	var zbiornik;
	
	var energia;
	var moc;
	var powierzchnia;
	var koszt;
	
	var funkcja_powierzchni;
	
	var liniowy_dobor_powierzchni;
	
	liczba_osob = document.getElementById("liczbosob1").value;
	zuz_wody = document.getElementById("zuzwody11").value;
		if (document.getElementById("czypompacyrkulacyjna11").checked == true){
		cyrkulacja=1.2;
	}else{
		cyrkulacja=1;
	}
	
	zapotrzebowanie = document.getElementById("pokryciezapotrzebowania1").value;
	
	zapotrzebowanie = parseInt(zapotrzebowanie);
	
	if (zapotrzebowanie == 65){
		funkcja_powierzchni = 1;
	}else if (zapotrzebowanie == 50){
		funkcja_powierzchni = 2;
	}else if (zapotrzebowanie == 40){
		funkcja_powierzchni = 3;
	}else if (zapotrzebowanie == 30){
		funkcja_powierzchni = 4;
	}
	
	zbiornik = 60*liczba_osob;
	woda_potrzeby = liczba_osob * zuz_wody * cyrkulacja;
	
	
	if (funkcja_powierzchni == 1){
		liniowy_dobor_powierzchni = woda_potrzeby*0.024;
	}else if (funkcja_powierzchni == 2){
		liniowy_dobor_powierzchni = woda_potrzeby*0.0175;
	}else if (funkcja_powierzchni == 3){
		liniowy_dobor_powierzchni = woda_potrzeby*0.013333;
	}else if (funkcja_powierzchni == 4){
		liniowy_dobor_powierzchni = woda_potrzeby*0.009091;
	}
	rodzaj_zrodla = document.getElementById("kolektorrodzajdotychczaszrodlo11").value
	rodzaj_zrodla = parseInt(rodzaj_zrodla)

	if (rodzaj_zrodla == 1){
		eta = 0.85*0.9*0.8
	}else if (rodzaj_zrodla == 2){
		eta = 0.95*0.9*0.8
	}else if (rodzaj_zrodla == 3){
		eta = 0.98
	}else if (rodzaj_zrodla == 4){
		eta = 0.85*0.9*0.8
	}	else if (rodzaj_zrodla == 5){
		eta = 3*0.9*0.80
	}
	
	energiajednostkowakolektor=document.getElementById("kolektorkosztogrzewaniadotyczaszrodlo11").value
	energiajednostkowakolektor=energiajednostkowakolektor/0.0036/eta

	powierzchnia = liniowy_dobor_powierzchni/(wspkor/100);
	powierzchnia = Math.round(powierzchnia*10)/10;
	moc = (wspkor/100)*800*powierzchnia*0.45;
	moc = Math.round(moc*10)/10;
	energia = (wspkor/100)*powierzchnia*1.8;
	energia = Math.round(energia*100)/100;
	
	koszt=2500+2000*powierzchnia
	koszt = Math.round(koszt*10)/10;
	
	kosztoszczednoscienergii=energia*energiajednostkowakolektor
	
	spbt=koszt/kosztoszczednoscienergii
	spbt = Math.round(spbt*10)/10;
	//wyniki
	
	document.getElementById("wynikkolektorpowierzchnia").innerHTML = powierzchnia;
	document.getElementById("wynikdoborzbiornikakolektor").innerHTML = zbiornik;
	document.getElementById("wynikdobormockolektor").innerHTML = moc;
	document.getElementById("wynikdoborenergiakolektor").innerHTML = energia;
	
	document.getElementById("wynikkosztykolektor").innerHTML = koszt;
	
	document.getElementById("wynikspbtinstalacjikolektor").innerHTML = spbt;
	
	//pomocnicze
	
	document.getElementById("pomocniczezuzyciekolektor").innerHTML = '<input style="visibility: hidden;"type="number" name="pomocniczezuzyciekolektor1" id="pomocniczezuzyciekolektor1" value="'+energia+'">';
	
}


function zuzenergii(){
	
	var rodzaj = document.getElementById("rodzajbudynkupompaselect11").value;
	var energia;
	
	rodzaj = parseInt(rodzaj);
	
	if (rodzaj == 1) {
		energia = 350;
	} else if (rodzaj == 2) {
		energia = 330;
	}else if (rodzaj == 3) {
		energia = 250;
	}else if (rodzaj == 4) {
		energia = 185;
	}else if (rodzaj == 5) {
		energia = 160;
	}else if (rodzaj == 6) {
		energia = 140;
	}else if (rodzaj == 7) {
		energia = 130;
	}else if (rodzaj == 8) {
		energia = 120;
	}else if (rodzaj == 9) {
		energia = 90;
	}else if (rodzaj == 10) {
		energia = 70;
	}else if (rodzaj == 11) {
		energia = 40;
	}
	
	document.getElementById("energiakoncowapompa").innerHTML = '<input type="number" name="energiakoncowapompa11" id="energiakoncowapompa11" value="'+energia+'">';
	
}

function zuzenergiizatwierdz(){
	document.getElementById("rodzajbudynkupompazatwierdz").innerHTML = '<button onclick="zuzenergiizatwierdz1()">Zatwierdź</button>';
}

function zuzenergiizatwierdz1(){
	zuzenergii();
	document.getElementById("rodzajbudynkupompazatwierdz").innerHTML = '';	
}


function kosztenergii(){
	
	var rodzaj = document.getElementById("rodzajdotychczaszrodlo11").value;
	
	rodzaj = parseInt(rodzaj);
	var cena;
	var cena1;
	
	if (rodzaj == 1) {
		cena = 0.22;
		cena1 = 1225.72;
		jednostka = "zł/tonę";
	} else if (rodzaj == 2) {
		cena = 0.2;
		cena1 = 1.94;
		jednostka = "zł/m<sup>3</sup>";
	}else if (rodzaj == 3) {
		cena = 0.6;
		cena1 = 0.60;
		jednostka = "zł/kWh";
	}else if (rodzaj == 4) {
		cena = 0.12;
		cena1 = 330;
		jednostka = "zł/m<sup>3</sup> drewna";
	}
	
	document.getElementById("kosztogrzewaniadotyczaszrodlo1").innerHTML = '<input type="number" name="kosztogrzewaniadotyczaszrodlo11" id="kosztogrzewaniadotyczaszrodlo11" step="0.01" oninput="kosztenergiijednostka()" value="'+cena+'">';
	
	document.getElementById("kosztogrzewaniadotyczaszrodlo111").innerHTML = cena1;
	
	document.getElementById("jednostka").innerHTML = '&nbsp;' + jednostka;
}


function kolektorkosztenergii(){
	
	var rodzaj = document.getElementById("kolektorrodzajdotychczaszrodlo11").value;
	
	rodzaj = parseInt(rodzaj);
	var cena;
	var cena1;
	
	if (rodzaj == 1) {
		cena = 0.22;
		cena1 = 1225.72;
		jednostka = "zł/tonę";
	} else if (rodzaj == 2) {
		cena = 0.2;
		cena1 = 1.94;
		jednostka = "zł/m<sup>3</sup>";
	}else if (rodzaj == 3) {
		cena = 0.6;
		cena1 = 0.60;
		jednostka = "zł/kWh";
	}else if (rodzaj == 4) {
		cena = 0.12;
		cena1 = 330;
		jednostka = "zł/m<sup>3</sup> drewna";
	}else if (rodzaj == 5) {
		cena = 0.6;
		cena1 = 0.60;
		jednostka = "zł/zł/kWh";
	}
	
	document.getElementById("kolektorkosztogrzewaniadotyczaszrodlo11").value = cena;
	
	document.getElementById("kolektorkosztogrzewaniadotyczaszrodlo111").innerHTML = cena1;
	
	document.getElementById("kolektorjednostka").innerHTML = '&nbsp;' + jednostka;
}

function kosztenergiijednostka(){
	
	var rodzaj = document.getElementById("rodzajdotychczaszrodlo11").value;
	var cena = document.getElementById("kosztogrzewaniadotyczaszrodlo11").value;
	
	rodzaj = parseInt(rodzaj);

	var cena1;
	
	if (rodzaj == 1) {

		cena1 = cena/0.000179487;

	} else if (rodzaj == 2) {

		cena1 = cena/0.10309278;

	}else if (rodzaj == 3) {

		cena1 = cena;

	}else if (rodzaj == 4) {

		cena1 = cena/0.000363636;

	}
	
	cena1 = Math.round(cena1*100)/100;
	
	document.getElementById("kosztogrzewaniadotyczaszrodlo111").innerHTML = cena1;
}


function kolektorkosztenergiijednostka(){
	
	var rodzaj = document.getElementById("kolektorrodzajdotychczaszrodlo11").value;
	var cena = document.getElementById("kolektorkosztogrzewaniadotyczaszrodlo11").value;
	
	rodzaj = parseInt(rodzaj);

	var cena1;
	
	if (rodzaj == 1) {

		cena1 = cena/0.000179487;

	} else if (rodzaj == 2) {

		cena1 = cena/0.10309278;

	}else if (rodzaj == 3) {

		cena1 = cena;

	}else if (rodzaj == 4) {

		cena1 = cena/0.000363636;
	}else if (rodzaj == 5) {

		cena1 = cena;
	}
	
	cena1 = Math.round(cena1*100)/100;
	
	document.getElementById("kolektorkosztogrzewaniadotyczaszrodlo111").innerHTML = cena1;
}


function kosztenergiizatwierdz(){
	document.getElementById("rodzajzrodlapompazatwierdz").innerHTML = '<button onclick="kosztenergiizatwierdz1()">Zatwierdź</button>';
}

function kosztenergiizatwierdz1(){
	kosztenergii();
	document.getElementById("rodzajzrodlapompazatwierdz").innerHTML = '';	
}


function kolektorkosztenergiizatwierdz(){
	document.getElementById("kolektorrodzajzrodlapompazatwierdz").innerHTML = '<button onclick="kolektorkosztenergiizatwierdz1()">Zatwierdź</button>';
}

function kolektorkosztenergiizatwierdz1(){
	kolektorkosztenergii();
	document.getElementById("kolektorrodzajzrodlapompazatwierdz").innerHTML = '';	
}



function pompacieplagruntowarodzajewysun(){
	var rodzaj = document.getElementById("rodzajpompyciepla11").value;
	
	rodzaj = parseInt(rodzaj);
	
	var rodzajwymiennikapompyciepla = document.getElementById("rodzajwymiennikapompyciepla11").value;
	
	if (rodzajwymiennikapompyciepla == 1) {
	
	document.getElementById("powierzchniapompacieplaselect").style.display = "none";
	document.getElementById("rodzajgruntupompacieplaselect").style.display = "none";
	document.getElementById("glebokoscodwiertupompacieplaselect").style.display = "block";
	document.getElementById("odwiertselect").style.display = "block";
	
	} else if (rodzajwymiennikapompyciepla == 2) {
	
	
	document.getElementById("glebokoscodwiertupompacieplaselect").style.display = "none";
	document.getElementById("odwiertselect").style.display = "none";
	document.getElementById("powierzchniapompacieplaselect").style.display = "block";
	document.getElementById("rodzajgruntupompacieplaselect").style.display = "block";
	}
	
	
	if (rodzaj == 1) {

		
		document.getElementById("gruntowapompacieplaobliczenia").style.display = "none";
		document.getElementById("gruntowapompacieplaobliczeniawynik").style.display = "none";
		
		
	} else if (rodzaj == 2) {

			
		document.getElementById("gruntowapompacieplaobliczenia").style.display = "block";
		document.getElementById("gruntowapompacieplaobliczeniawynik").style.display = "block";
	} else if (rodzaj == 3){

		document.getElementById("gruntowapompacieplaobliczenia").style.display = "none";
		document.getElementById("gruntowapompacieplaobliczeniawynik").style.display = "none";
	}
	
	
	
	
}

function dobor2(){
	
	var moc;
	var zuzenergii;
	var kosztenergii;	
	var obecnekosztyogrzewania;	
	var oszczednoscenergii;
	
	var eta;
	var cenapompa;
	
	var powierzchnia = document.getElementById("powierzchniabudynkupompa11").value;
	var EK = document.getElementById("energiakoncowapompa11").value;
	var rodzaj = document.getElementById("rodzajpompyciepla11").value;
	
	var liczbaosob = document.getElementById("liczbaosob2").value;
	var zuzyciewody = document.getElementById("zuzwody12").value;
	
	var powierzchniasondy; 
	var glebokoscodwiertu; 	
	var rodzajgruntu;
	var mocziemi;
	var liczbaodwiertow;
	
	var rodzajpompakoszt
	
	rodzaj = parseInt(rodzaj);
	
	var cena = document.getElementById("kosztogrzewaniadotyczaszrodlo11").value;
		
	
	if (rodzaj == 1) {
		eta=3;
		cenapompa = 0.6;
		rodzajpompakoszt = 1;

		
	} else if (rodzaj == 2) {
		eta=4;
		cenapompa = 0.6;
		rodzajpompakoszt = 2;	

		
	} else if (rodzaj == 3){
		eta=1.6;
		cenapompa = 0.2;
		rodzajpompakoszt = 3;
	}
	
	
	if (rodzajpompakoszt == 2) {
	
		var rodzajwymiennikapompyciepla = document.getElementById("rodzajwymiennikapompyciepla11").value;
		
		if (rodzajwymiennikapompyciepla == 1) {
		
			rodzajpompakoszt = 21
		
		} else if (rodzajwymiennikapompyciepla == 2) {
		
			rodzajpompakoszt = 22

		}
		
	}
	

	
	var rodzajgruntupompa = document.getElementById("rodzajgruntupompyciepla11").value;
	
		if (rodzajgruntupompa == 1) {
			
		rodzajgruntu = 8;
		
	} else if (rodzajgruntupompa == 2) {
		
		rodzajgruntu = 16;
		
	} else if (rodzajgruntupompa == 3){
		
		rodzajgruntu = 32;
	}
	

	mocziemi = 40;
	
	liczbaodwiertow = document.getElementById("iloscodwiertowpompyciepla11").value;
	
	
	
	
	var energiawoda = (365*liczbaosob*zuzyciewody*4.19*(45-10)*0.00027778)/(eta*1.25);
	
	
	//0.7 - bo za duże wartości na CO, korekta bo błędne założenia
	moc =((EK/2 )*powierzchnia)/1000;
	
	moc=moc+energiawoda/560;
	
	moc = Math.round(moc*100)/100;
	
	
	
	
	// 1.25 wynika z faktu, że przyjęto sprawność pozostałych źródeł względem EU 80%.
	
	zuzenergii = (EK*powierzchnia)/(eta*1.25);
	
	zuzenergii = Math.round(zuzenergii*100)/100;
	
	var zuzenergiicalkowity = zuzenergii+energiawoda;
	zuzenergiicalkowity = Math.round(zuzenergiicalkowity*100)/100;
	
	kosztenergii = cenapompa*zuzenergiicalkowity;
	
	kosztenergii = Math.round(kosztenergii*100)/100;
	
	obecnekosztyogrzewania = cena*(EK*powierzchnia+energiawoda*(eta*1.25));
	
	obecnekosztyogrzewania = Math.round(obecnekosztyogrzewania*100)/100;
	
	oszczednoscenergii = obecnekosztyogrzewania-kosztenergii;
	
	oszczednoscenergii = Math.round(oszczednoscenergii*100)/100;
	
	
	glebokoscodwiertu = (moc-(moc/eta))*1000/(mocziemi*liczbaodwiertow);
		glebokoscodwiertu = Math.round(glebokoscodwiertu*100)/100;
	powierzchniasondy = (moc-(moc/eta))*1000/rodzajgruntu;
		powierzchniasondy = Math.round(powierzchniasondy*100)/100;
	
	
	var koszt;

	
	if (rodzajpompakoszt == 1) {
			
		koszt = moc*2000;
		
		
	} else if (rodzajpompakoszt == 3) {
		
		koszt = moc*2750;
		
		
	} else if (rodzajpompakoszt == 21){
		
		koszt = 2500*moc+(glebokoscodwiertu*liczbaodwiertow)*80;
		
		
	} else if (rodzajpompakoszt == 22){
		
		koszt = 2500*moc+powierzchniasondy*18.5;
		
		
	}
		
	koszt = Math.round(koszt*10)/10;
	
	spbt=koszt/oszczednoscenergii;
	spbt = Math.round(spbt*10)/10;
	
	//wyniki
	
	document.getElementById("wynikpompamoc").innerHTML = moc;	
	document.getElementById("wynikpompazuzenergi").innerHTML = zuzenergiicalkowity;	
	document.getElementById("wynikpompakosztenergi").innerHTML = kosztenergii;	
	document.getElementById("wynikpompaobecnekosztyogrzewania").innerHTML = obecnekosztyogrzewania;	
	document.getElementById("wynikpompaoszczednoscienergii").innerHTML = oszczednoscenergii;
	
	document.getElementById("wynikkolektorpompaciepla").innerHTML = powierzchniasondy;	
	document.getElementById("wynikkolektorpionowypompaciepla").innerHTML = glebokoscodwiertu;

	document.getElementById("wynikzmienkosztogrzewania1").innerHTML = '<input type="number" name="wynikzmienkosztogrzewania11" step="0.01" id="wynikzmienkosztogrzewania11" oninput="dobor3()" value="'+cenapompa+'">';
	
	document.getElementById("wynikkosztinstalacjipompa").innerHTML = koszt;	
	
	document.getElementById("wynikspbtinstalacjipompa").innerHTML = spbt;	
	
	//pomocniczezuzycie
	
	document.getElementById("pomocniczezuzycie1").innerHTML = '<input style="visibility: hidden;" type="number" name="pomocniczezuzycie"  id="pomocniczezuzycie" value="'+obecnekosztyogrzewania+'">';
	
	document.getElementById("pomocniczaenergia1").innerHTML = '<input style="visibility: hidden;" type="number" name="pomocniczaenergia"  id="pomocniczaenergia" value="'+zuzenergii+'">';
	document.getElementById("pomocniczaenergiawody1").innerHTML = '<input style="visibility: hidden;" type="number" name="pomocniczaenergiawody"  id="pomocniczaenergiawody" value="'+energiawoda+'">';
	
	document.getElementById("pomocniczaenergiacalkowita1").innerHTML = '<input style="visibility: hidden;" type="number" name="pomocniczaenergiacalkowita"  id="pomocniczaenergiacalkowita" value="'+zuzenergiicalkowity+'">';
	
	
}

function dobor3(){
	
	var obecnekosztyogrzewania = document.getElementById("pomocniczezuzycie").value;
	
	
	var calkowitezuzenergii = document.getElementById("pomocniczaenergiacalkowita").value;
	
	var oszczednoscenergii;
	var kosztenergii;
	
	var cenapompa = document.getElementById("wynikzmienkosztogrzewania11").value;
	
	kosztenergii = cenapompa*calkowitezuzenergii;
		
	kosztenergii = Math.round(kosztenergii*100)/100;
	
	oszczednoscenergii = obecnekosztyogrzewania-kosztenergii;
	
	oszczednoscenergii = Math.round(oszczednoscenergii*100)/100;
	
	
	document.getElementById("wynikpompakosztenergi").innerHTML = kosztenergii;	
	document.getElementById("wynikpompaoszczednoscienergii").innerHTML = oszczednoscenergii;
}



function load() {
	
		
  document.getElementById("fotowoltaika").style.display = "none";
  document.getElementById("kolektor").style.display = "none";
  document.getElementById("pompaciepla").style.display = "none";
  document.getElementById("oautorze").style.display = "none";
	document.getElementById("qwertypraktyki").style.display = "none";
  
  //projekt1
  document.getElementById("liczbaosob").innerHTML ='<label><input type="number" id="liczbosob" name="liczbosob" value="4" oninput="zuzenergia()"></label>' ;  
  document.getElementById("czyuzytkowanyoszczednie").innerHTML ='NIE &nbsp; &nbsp; &nbsp; <div class="container"><input type="checkbox" name="czyoszczednie" id="czyoszczednie" value="oszczednie" onclick="zuzenergia()"><label for="czyoszczednie"><span class="checkbox">.</span></label></div>' ;
  document.getElementById("1zuzytaenergiaroczna").innerHTML ='<label><input type="number" id="zuzytaenergiaroczna" name="zuzytaenergiaroczna" value="2625"></label>';
  
  
  
  //projekt2
  document.getElementById("zuzwodyselect1").innerHTML ='<label for="zuzwodyselect11"></label><select id="zuzwodyselect11" name="zuzwodyselect11" onclick="zuzwody()" ontouchend="zuzwodyzatwierdz()"><option value="1" selected>Niski</option><option value="2">Średni</option><option value="3">Wysoki</option></select>';
  document.getElementById("zuzwodyliczba1").innerHTML ='<label><input type="number" id="zuzwody11" name="zuzwody11" value="35"></label>';
	
	document.getElementById("kolektorrodzajdotychczaszrodlo11").innerHTML ='<select id="kolektorrodzajdotychczaszrodlo11" name="kolektorrodzajdotychczaszrodlo11" onclick="kolektorkosztenergii()" ontouchend="kolektorkosztenergiizatwierdz()"><option value="1">Kocioł węglowy</option><option value="2" selected>Kocioł gazowy</option><option value="3">Ogrzewanie elektryczne</option><option value="4">Nowy kocioł na biomasę</option><option value="5">Pompa ciepła</option></select>';
  document.getElementById("kolektorkosztogrzewaniadotyczaszrodlo1").innerHTML ='<input type="number" name="kolektorkosztogrzewaniadotyczaszrodlo11" step="0.01" id="kolektorkosztogrzewaniadotyczaszrodlo11" value="0.2" oninput="kolektorkosztenergiijednostka()">';
  document.getElementById("kolektorkosztogrzewaniadotyczaszrodlo111").innerHTML =1.94;
  
  //projekt3
   document.getElementById("rodzajbudynkupompaselect1").innerHTML ='<label for="rodzajbudynkupompaselect11"></label><select onclick="zuzenergii()" ontouchend="zuzenergiizatwierdz()" id="rodzajbudynkupompaselect11" name="rodzajbudynkupompaselect11" ><option value="1" >dom niemodernizowany od co najmniej 1945</option><option value="2">dom niemodernizowany od co najmniej 1946-1966</option><option value="3">dom niemodernizowany od co najmniej 1967-1985</option><option value="4">dom niemodernizowany od co najmniej 1986-1992</option><option value="5">dom niemodernizowany od co najmniej 1993-2002</option><option value="6" selected>dom niemodernizowany od co najmniej 2002-2009</option><option value="7">dom niemodernizowany od co najmniej 2009-2013</option><option value="8">dom spełniający warunki techniczne WT od 2014 do 2016</option><option value="9">dom spełniający warunki techniczne WT od 2017 do 2020</option><option value="10">dom spełniający warunki techniczne WT od 2021 </option><option value="11">dom niskoenergetyczny</option></select>';
	document.getElementById("energiakoncowapompa").innerHTML ='<input type="number" name="energiakoncowapompa11" id="energiakoncowapompa11" value="140">';
	document.getElementById("rodzajdotychczaszrodlo11").innerHTML ='<select id="rodzajdotychczaszrodlo11" name="rodzajdotychczaszrodlo11" onclick="kosztenergii()" ontouchend="kosztenergiizatwierdz()"><option value="1">kocioł węglowy</option><option value="2" selected>kocioł gazowy</option><option value="3">ogrzewanie elektryczne</option><option value="4">Nowy kocioł na biomasę</option></select>';
	document.getElementById("kosztogrzewaniadotyczaszrodlo1").innerHTML ='<input type="number" name="kosztogrzewaniadotyczaszrodlo11" step="0.01" id="kosztogrzewaniadotyczaszrodlo11" value="0.2" oninput="kosztenergiijednostka()">';
	document.getElementById("kosztogrzewaniadotyczaszrodlo111").innerHTML =1.94;	

	document.getElementById("zuzwodyselect2").innerHTML ='<label for="zuzwodyselect12"></label><select id="zuzwodyselect12" name="zuzwodyselect12" onclick="zuzwody2()" ontouchend="zuzwodyzatwierdz2()"><option value="1" selected>Niski</option><option value="2">Średni</option><option value="3">Wysoki</option></select>';
	
	
	wykrespoczatek();
}

function wykrespoczatek(){
	
	
	document.getElementById("1").innerHTML = '<canvas id="wykres" width="500" height="300"></canvas>';

	var canvas = document.getElementById("wykres");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#dd0000";

	ctx.lineWidth=1;
	ctx.moveTo(10,230);
	ctx.lineTo(490,230);
	ctx.stroke();
	
	ctx.moveTo(10,230);
	ctx.lineTo(10,20);
	ctx.stroke();
	
	ctx.fillStyle = "black";
	
	ctx.font = "20px Arial";
	
	
	var a = [];
	
	for (i = 0; i < 12; i++) {
	
	a[i] = 40*i;
	
	}
	
	
	for (i = 0; i < 12; i++) {
	ctx.fillText(i+1,22+a[i],260);
	}
	
	ctx.fillText("miesiąc",220,290);
	
	ctx.fillText("energia [kWh]",20,40);


	
	
//drugi wykres

document.getElementById("2").innerHTML = '<canvas id="wykreskolektor" width="500" height="300" ></canvas>';

	var canvas = document.getElementById("wykreskolektor");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#dd0000";

	ctx.lineWidth=1;
	ctx.moveTo(10,230);
	ctx.lineTo(490,230);
	ctx.stroke();
	
	ctx.moveTo(10,230);
	ctx.lineTo(10,20);
	ctx.stroke();
	
	ctx.fillStyle = "black";
	
	ctx.font = "20px Arial";
	
	
	for (i = 0; i < 12; i++) {
	
	a[i] = 40*i;
	
	}
	
	
	for (i = 0; i < 12; i++) {
	ctx.fillText(i+1,22+a[i],260);
	ctx.stroke();
	}
	
	ctx.fillText("miesiąc",220,290);
	
	ctx.fillText("energia [GJ]",20,40);


//koniec drugiego wykresu	
	
	
//trzeci wykres

document.getElementById("3").innerHTML = '<canvas id="wykrespompa" width="500" height="300" ></canvas>';

	var canvas = document.getElementById("wykrespompa");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#dd0000";

	ctx.lineWidth=1;
	ctx.moveTo(10,230);
	ctx.lineTo(490,230);
	ctx.stroke();
	
	ctx.moveTo(10,230);
	ctx.lineTo(10,20);
	ctx.stroke();
	
	ctx.fillStyle = "black";
	
	ctx.font = "20px Arial";
	
	
	for (i = 0; i < 12; i++) {
	
	a[i] = 40*i;
	
	}
	
	
	for (i = 0; i < 12; i++) {
	ctx.fillText(i+1,22+a[i],260);
	ctx.stroke();
	}
	
	ctx.fillText("miesiąc",220,290);
	
	ctx.fillText("energia [kWh]",20,40);


//koniec trzeciego wykresu		
		
}

function startowawidac() {
document.getElementById("start").style.display = "block";
  document.getElementById("fotowoltaika").style.display = "none";
  document.getElementById("kolektor").style.display = "none";
  document.getElementById("pompaciepla").style.display = "none";
  document.getElementById("oautorze").style.display = "none";
  document.getElementById("qwertypraktyki").style.display = "none";
}

function fotowoltaikawidac() {
document.getElementById("start").style.display = "none";
  document.getElementById("fotowoltaika").style.display = "block";
  document.getElementById("kolektor").style.display = "none";
  document.getElementById("pompaciepla").style.display = "none";
  document.getElementById("oautorze").style.display = "none";
  document.getElementById("qwertypraktyki").style.display = "none";
}

function kolektorwidac() {
	document.getElementById("start").style.display = "none";
  document.getElementById("fotowoltaika").style.display = "none";
  document.getElementById("kolektor").style.display = "block";
  document.getElementById("pompaciepla").style.display = "none";
  document.getElementById("oautorze").style.display = "none";
  document.getElementById("qwertypraktyki").style.display = "none";
}

function pompawidac() {
	document.getElementById("start").style.display = "none";
  document.getElementById("fotowoltaika").style.display = "none";
  document.getElementById("kolektor").style.display = "none";
  document.getElementById("pompaciepla").style.display = "block";
  document.getElementById("oautorze").style.display = "none";
  document.getElementById("qwertypraktyki").style.display = "none";
}

function oautorzewidac() {
document.getElementById("start").style.display = "none";
  document.getElementById("fotowoltaika").style.display = "none";
  document.getElementById("kolektor").style.display = "none";
  document.getElementById("pompaciepla").style.display = "none";
  document.getElementById("oautorze").style.display = "block";
  document.getElementById("qwertypraktyki").style.display = "none";
}

function praktykiwidac() {
document.getElementById("start").style.display = "none";
  document.getElementById("fotowoltaika").style.display = "none";
  document.getElementById("kolektor").style.display = "none";
  document.getElementById("pompaciepla").style.display = "none";
  document.getElementById("oautorze").style.display = "none";
  document.getElementById("qwertypraktyki").style.display = "block";
}


function wykres(){
	document.getElementById("1").innerHTML = '<canvas id="wykres" width="500" height="300"></canvas>';

	var canvas = document.getElementById("wykres");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#dd0000";

	ctx.lineWidth=1;
	ctx.moveTo(10,230);
	ctx.lineTo(490,230);
	ctx.stroke();
	
	ctx.moveTo(10,230);
	ctx.lineTo(10,20);
	ctx.stroke();
	
	ctx.fillStyle = "black";
	
	ctx.font = "20px Arial";
	
	var a = [];
	
	for (i = 0; i < 12; i++) {
	
	a[i] = 40*i;
	
	}
	
	
	for (i = 0; i < 12; i++) {
	ctx.fillText(i+1,22+a[i],260);
	ctx.stroke();
	}
	
	ctx.fillText("miesiąc",220,290);
	
	ctx.fillText("energia [kWh]",20,40);

	
	wykres1();
	
	
	
}


function wykres1(){
	
	
	var nachylenie = document.getElementById("nachyleniedachu").value;
	
	nachylenie=parseInt(nachylenie);
	
	var slupek1 = document.getElementById("pomocniczezuzyciefotowoltaika1").value;
	
	
	slupek1=slupek1/100;
	
	slupek=10;
	
	if (nachylenie == 0){
	var a = [2.41, 4.03, 7.57, 10.95, 14.33, 14.97, 15.14, 12.56, 8.86, 5.15, 2.42, 1.61 ];	
	}else if (nachylenie == 10){
	var a = [ 2.74,	4.57,	7.62,	10.98,	13.72,	14.18,	14.48,	12.20,	9.15,	5.64,	2.74,	1.98];
	}else if (nachylenie == 20){
	var a = [ 3.03,	5.06,	7.80,	10.84,	13.29,	13.46,	13.88,	11.99,	9.39,	5.92,	3.03,	2.31];
	}else if (nachylenie == 30){
	var a = [ 3.17,	5.37,	7.99,	10.74,	12.95,	12.81,	13.36,	11.71,	9.64,	6.34,	3.17,	2.75];
	}else if (nachylenie == 40){
	var a = [ 3.57,	5.91,	8.38,	10.85,	12.37,	12.09,	12.36,	11.40,	9.75,	6.59,	3.57,	3.16];
	}else if (nachylenie == 50){
	var a = [ 3.66,	6.19,	8.58,	10.55,	11.95,	11.81,	12.10,	11.81,	9.85,	6.61,	3.66,	3.23];	
	}else if (nachylenie == 60){
	var a = [ 3.96,	6.74,	8.80,	10.41,	11.58,	11.45,	11.88,	11.14,	9.97,	6.89,	3.81,	3.37];
	}else if (nachylenie == 70){
	var a = [ 4.08,	6.91,	9.11,	10.36,	11.30,	10.99,	11.46,	10.99,	10.05,	7.06,	4.08,	3.61];
	}else if (nachylenie == 80){
	var a = [ 4.41,	7.58,	9.17,	10.05,	10.58,	10.23,	10.94,	10.76,	10.23,	7.58,	4.41,	4.06];
	}else if (nachylenie == 90){
	var a = [ 4.50,	8.22,	9.39,	10.18,	9.98,	9.59,	9.98,	10.18,	10.37,	8.22,	4.89,	4.50];
	}
	
	slupek = [a[0]*slupek, a[1]*slupek, a[2]*slupek, a[3]*slupek, a[4]*slupek, a[5]*slupek,a[6]*slupek,a[7]*slupek,a[8]*slupek,a[9]*slupek,a[10]*slupek,a[11]*slupek];	
	slupek1 = [a[0]*slupek1, a[1]*slupek1, a[2]*slupek1, a[3]*slupek1,a[4]*slupek1,a[5]*slupek1,a[6]*slupek1,a[7]*slupek1,a[8]*slupek1,a[9]*slupek1,a[10]*slupek1,a[11]*slupek1];
	
	var canvas = document.getElementById("wykres");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#2C8A29";
	
	for (i = 0; i < 12; i++) {
	
	a[i] = 40*i;
	
	}
	
	for (i = 0; i < 12; i++) {
	
	ctx.fillRect(20+a[i],230,25,-slupek[i]);
	ctx.stroke();
	ctx.font = "15px Arial";
	
	
	var wartosc = Math.round(slupek1[i]*10)/10;
	
	ctx.fillText(wartosc,20+a[i],-slupek[i]+220);
	}
	
	
	
}


function wykreskolektor(){
	document.getElementById("2").innerHTML = '<canvas id="wykreskolektor" width="500" height="300" ></canvas>';

	var canvas = document.getElementById("wykreskolektor");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#dd0000";

	ctx.lineWidth=1;
	ctx.moveTo(10,230);
	ctx.lineTo(490,230);
	ctx.stroke();
	
	ctx.moveTo(10,230);
	ctx.lineTo(10,20);
	ctx.stroke();
	
	ctx.fillStyle = "black";
	
	ctx.font = "20px Arial";
	
	var a = [];
	
	for (i = 0; i < 12; i++) {
	
	a[i] = 40*i;
	
	}
	
	
	for (i = 0; i < 12; i++) {
	ctx.fillText(i+1,22+a[i],260);
	ctx.stroke();
	}
	
	ctx.fillText("miesiąc",220,290);
	
	ctx.fillText("energia [GJ]",20,40);


	wykreskolektor1();
}



function wykreskolektor1(){
	
	
	var nachylenie = document.getElementById("nachyleniedachu1").value;
	
	nachylenie=parseInt(nachylenie);
	
	var slupek1 = document.getElementById("pomocniczezuzyciekolektor1").value;
	
	
	slupek1=slupek1/100;
	
	slupek=10;
	
	if (nachylenie == 0){
	var a = [2.41, 4.03, 7.57, 10.95, 14.33, 14.97, 15.14, 12.56, 8.86, 5.15, 2.42, 1.61 ];	
	}else if (nachylenie == 10){
	var a = [ 2.74,	4.57,	7.62,	10.98,	13.72,	14.18,	14.48,	12.20,	9.15,	5.64,	2.74,	1.98];
	}else if (nachylenie == 20){
	var a = [ 3.03,	5.06,	7.80,	10.84,	13.29,	13.46,	13.88,	11.99,	9.39,	5.92,	3.03,	2.31];
	}else if (nachylenie == 30){
	var a = [ 3.17,	5.37,	7.99,	10.74,	12.95,	12.81,	13.36,	11.71,	9.64,	6.34,	3.17,	2.75];
	}else if (nachylenie == 40){
	var a = [ 3.57,	5.91,	8.38,	10.85,	12.37,	12.09,	12.36,	11.40,	9.75,	6.59,	3.57,	3.16];
	}else if (nachylenie == 50){
	var a = [ 3.66,	6.19,	8.58,	10.55,	11.95,	11.81,	12.10,	11.81,	9.85,	6.61,	3.66,	3.23];	
	}else if (nachylenie == 60){
	var a = [ 3.96,	6.74,	8.80,	10.41,	11.58,	11.45,	11.88,	11.14,	9.97,	6.89,	3.81,	3.37];
	}else if (nachylenie == 70){
	var a = [ 4.08,	6.91,	9.11,	10.36,	11.30,	10.99,	11.46,	10.99,	10.05,	7.06,	4.08,	3.61];
	}else if (nachylenie == 80){
	var a = [ 4.41,	7.58,	9.17,	10.05,	10.58,	10.23,	10.94,	10.76,	10.23,	7.58,	4.41,	4.06];
	}else if (nachylenie == 90){
	var a = [ 4.50,	8.22,	9.39,	10.18,	9.98,	9.59,	9.98,	10.18,	10.37,	8.22,	4.89,	4.50];
	}
	
	slupek = [a[0]*slupek, a[1]*slupek, a[2]*slupek, a[3]*slupek, a[4]*slupek, a[5]*slupek,a[6]*slupek,a[7]*slupek,a[8]*slupek,a[9]*slupek,a[10]*slupek,a[11]*slupek];	
	slupek1 = [a[0]*slupek1, a[1]*slupek1, a[2]*slupek1, a[3]*slupek1,a[4]*slupek1,a[5]*slupek1,a[6]*slupek1,a[7]*slupek1,a[8]*slupek1,a[9]*slupek1,a[10]*slupek1,a[11]*slupek1];
	
	var canvas = document.getElementById("wykreskolektor");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#2C8A29";
	
	for (i = 0; i < 12; i++) {
	
	a[i] = 40*i;
	
	}
	
	for (i = 0; i < 12; i++) {
	
	ctx.fillRect(20+a[i],230,25,-slupek[i]);
	ctx.stroke();
	ctx.font = "15px Arial";
	
	
	var wartosc = Math.round(slupek1[i]*100)/100;
	
	ctx.fillText(wartosc,20+a[i],-slupek[i]+220);
	}
	
}



function wykrespompa(){
	document.getElementById("3").innerHTML = '<canvas id="wykrespompa" width="500" height="300" ></canvas>';

	var canvas = document.getElementById("wykrespompa");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#dd0000";

	ctx.lineWidth=1;
	ctx.moveTo(10,230);
	ctx.lineTo(490,230);
	ctx.stroke();
	
	ctx.moveTo(10,230);
	ctx.lineTo(10,20);
	ctx.stroke();
	
	ctx.fillStyle = "black";
	
	ctx.font = "20px Arial";
	
	var a = [];
	
	for (i = 0; i < 12; i++) {
	
	a[i] = 40*i;
	
	}
	
	
	for (i = 0; i < 12; i++) {
	ctx.fillText(i+1,22+a[i],260);
	ctx.stroke();
	}
	
	ctx.fillText("miesiąc",220,290);
	
	ctx.fillText("energia [kWh]",20,40);


	wykrespompa1();
}




function wykrespompa1(){
	
	
	var slupekenergia1 = document.getElementById("pomocniczaenergia").value;
	
	var slupek2 = document.getElementById("pomocniczaenergiawody").value;
	
	var slupekenergia3=slupekenergia1;
	
	skalujslupek=500/(slupekenergia3);
	
	var slupek=[];
	var slupek1=[];
	
	slupek2=slupek2/12;

	var a = [0.2045, 0.1705, 0.1364, 0.05681, 0.022706, 0, 0, 0, 0.011364, 0.07954, 0.125, 0.19318 ];	


	for (i = 0; i < 12; i++) {
	  slupek.push(skalujslupek*(a[i]*(slupekenergia1)+slupek2));
		}
		
	for (i = 0; i < 12; i++) {
	  slupek1.push(a[i]*(slupekenergia1)+slupek2);
		}	
			
	var canvas = document.getElementById("wykrespompa");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#2C8A29";
	
	for (i = 0; i < 12; i++) {
	
	a[i] = 40*i;
	
	}
	
	for (i = 0; i < 12; i++) {
	
	ctx.fillRect(20+a[i],230,25,-slupek[i]);
	ctx.stroke();
	ctx.font = "15px Arial";
	
	
	var wartosc = Math.round(slupek1[i]*10)/10;
	
	ctx.fillText(wartosc,20+a[i],-slupek[i]+220);
	}
	
}




