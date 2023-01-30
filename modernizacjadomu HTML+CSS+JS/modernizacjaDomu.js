function wczytaj_dane_wstepne(){
	document.getElementById("modernizacja_wymiana_okien_nie").style.display = "block";
	document.getElementById("modernizacja_wymiana_okien_tak").style.display = "none";
	
	document.getElementById("modernizacja_ocieplenie_scian_nie").style.display = "block";
	document.getElementById("modernizacja_ocieplenie_scian_tak").style.display = "none";
	
	document.getElementById("modernizacja_ocieplenie_dachu_nie").style.display = "none";
	document.getElementById("modernizacja_ocieplenie_dachu_tak").style.display = "none";
	document.getElementById("modernizacja_ocieplenie_poddasze_nie").style.display = "block";
	document.getElementById("modernizacja_ocieplenie_poddasze_tak").style.display = "none";	
	
	
	document.getElementById("modernizacja_wymiana_drzwi_nie").style.display = "block";
	document.getElementById("modernizacja_wymiana_drzwi_tak").style.display = "none";
	
	document.getElementById("modernizacja_ocieplenie_podlogi_nie").style.display = "block";
	document.getElementById("modernizacja_ocieplenie_podlogi_tak").style.display = "none";	
	
	document.getElementById("modernizacja_wymiana_rodzaju_wentylacji_nie").style.display = "block";
	document.getElementById("modernizacja_wymiana_rodzaju_wentylacji_tak").style.display = "none";
	
	document.getElementById("modernizacja_wymiana_rodzaju_wentylacji_rodzaj").style.display = "none";
	document.getElementById("modernizacja_wymiana_rodzaju_wentylacji_rodzaj").style.display = "none";
	
	document.getElementById("modernizacja_wymiana_rodzaju_zrodla_ogrzewania_nie").style.display = "block";
	document.getElementById("modernizacja_wymiana_rodzaju_zrodla_ogrzewania_tak").style.display = "none";
	
	document.getElementById("modernizacja_wymiana_rodzaju_zrodla_ogrzewania_rodzaj").style.display = "none";
	document.getElementById("modernizacja_wymiana_rodzaju_zrodla_ogrzewania_rodzaj").style.display = "none";
	
	document.getElementById("modernizacja_wymiana_rodzaj_instalacji_CO_nie").style.display = "block";
	document.getElementById("modernizacja_wymiana_rodzaj_instalacji_CO_tak").style.display = "none";
	
	document.getElementById("modernizacja_wymiana_rodzaj_instalacji_CO_rodzaj").style.display = "none";
	document.getElementById("modernizacja_wymiana_rodzaj_instalacji_CO_rodzaj").style.display = "none";
	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_nie").style.display = "block";
	document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_tak").style.display = "none";
	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_rodzaj").style.display = "none";
	document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_rodzaj").style.display = "none";
	
	document.getElementById("rodzaj_instalacji_CO_miejscowe_elektryczne_091").style.display = "none";
	document.getElementById("rodzaj_instalacji_CO_kaflowe_kominek_070").style.display = "none";
	document.getElementById("rodzaj_instalacji_CO_grzejniki_centralna_077").style.display = "block";
	document.getElementById("rodzaj_instalacji_CO_grzejniki_miejscowe_093").style.display = "block";
	document.getElementById("rodzaj_instalacji_CO_podlogowe_centralna_076").style.display = "block";
	document.getElementById("rodzaj_instalacji_CO_podlogowe_miejscowe_089").style.display = "block";
	document.getElementById("zbiornik_akumulacyjny_ciepla_div_zew").style.display = "block";
	
	wiek_budynku="d20012008";
	powierzchnia_budynku = 150;
	liczba_uzytkownikow = 4;
	dobowe_zuzycie_wody = 35; 
	rodzaj_ogrzewania_CO="stary_piec_weglowy_065";
	rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	document.getElementById("check_strop_czy_dach").checked = false;
	rodzaj_poddasza = "nieogrzewany";
	document.getElementById("check_zbiornik_akumulacyjny_ciepla").checked = false;
	zbiornik_akumulacyjny = "nie_ma_zbiornika";
	rodzaj_ogrzewania_CWU="piec_gazowy_2000_065";
	rodzaj_wentylacji="grawitacyjna"; 
	wymiana_okien="nie_wymienic_okna" ; 
	ocieplenie_scian="nie_ocieplenie_scian";
	rodzaj_poddasza == "nieogrzewany" ; 
	ocieplenie_dachu="nie_ocieplenie_dachu" ; 
	ocieplenie_poddasze="nie_ocieplenie_poddasze" ; 
	wymiana_drzwi="nie_wymiana_drzwi" ; 
	ocieplenie_podlogi="nie_ocieplenie_podlogi" ;
	wymiana_rodzaju_wentylacji="nie_wymiana_rodzaju_wentylacji" ; 
	modernizacja_rodzaj_ogrzewania_CO = "nie_wymiana_rodzaju_zrodla_ogrzewania";
	modernizacja_rodzaj_instalacji_ogrzewania_CO="nie_modernizacja_rodzaj_instalacji_ogrzewania_CO";
	modernizacja_rodzaj_ogrzewania_CWU="nie_modernizacja_rodzaj_instalacji__CWU";

	document.getElementById("powierzchnia_budynku_liczba").value = 150;
	document.getElementById("liczba_uzytkownikow_liczba").value = 4;
	document.getElementById("dobowe_zuzycie_wody_number").value = 35;
	
	document.getElementById("kosztcoprzed").value =1.200
	document.getElementById("kosztcwuprzed").value =2
	document.getElementById("kosztcopo").value =1.200
	document.getElementById("kosztcwupo").value =2

	rodzaj_paliwa_kosztcoprzed = "wegiel"
	rodzaj_paliwa_kosztcoprzed_widok = "Węgiel"
	kosztcoprzed = 1.200
	jednostka_paliwa_kosztcoprzed = "tys zł/tonę"

	rodzaj_paliwa_kosztcwuprzed ="gaz_ziemny"
	rodzaj_paliwa_kosztcwuprzed_widok ="Gaz ziemny"
	kosztcwuprzed = 2
	jednostka_paliwa_kosztcwuprzed = "zł/m<sup>3</sup>"

	rodzaj_paliwa_kosztcopo_widok = "Węgiel"
	rodzaj_paliwa_kosztcopo = "wegiel"
	kosztcopo = 1.200
	jednostka_paliwa_kosztcopo = "tys zł/tonę"

	rodzaj_paliwa_kosztcwupo ="gaz_ziemny"
	rodzaj_paliwa_kosztcwupo_widok ="Gaz ziemny"
	kosztcwupo = 2
	jednostka_paliwa_kosztcwupo = "zł/m<sup>3</sup>"
	
	koszt_modernizacja_rodzaj_ogrzewania_CWU=0
}

var wiek_budynku;

var kolor="#2D6932";
var kolor1 = "#4CAF50";


function wiek_budynku_1945(){
	wiek_budynku="d1945";
	wynik_wiek_budynku();
	
	document.getElementById("wiek_budynku_1945").style.background = kolor;
	document.getElementById("wiek_budynku_19461966").style.background = kolor1;
	document.getElementById("wiek_budynku_19671985").style.background = kolor1;
	document.getElementById("wiek_budynku_19862000").style.background = kolor1;
	document.getElementById("wiek_budynku_20012008").style.background = kolor1;
	document.getElementById("wiek_budynku_po2009").style.background = kolor1;

	
}

function wiek_budynku_19461966(){
	wiek_budynku="d19461966";
	wynik_wiek_budynku();
	
	document.getElementById("wiek_budynku_1945").style.background = kolor1;
	document.getElementById("wiek_budynku_19461966").style.background = kolor;
	document.getElementById("wiek_budynku_19671985").style.background = kolor1;
	document.getElementById("wiek_budynku_19862000").style.background = kolor1;
	document.getElementById("wiek_budynku_20012008").style.background = kolor1;
	document.getElementById("wiek_budynku_po2009").style.background = kolor1;
		
}

function wiek_budynku_19671985(){
	wiek_budynku="d19671985";
	wynik_wiek_budynku();
	
		document.getElementById("wiek_budynku_1945").style.background = kolor1;
	document.getElementById("wiek_budynku_19461966").style.background = kolor1;
	document.getElementById("wiek_budynku_19671985").style.background = kolor;
	document.getElementById("wiek_budynku_19862000").style.background = kolor1;
	document.getElementById("wiek_budynku_20012008").style.background = kolor1;
	document.getElementById("wiek_budynku_po2009").style.background = kolor1;
}

function wiek_budynku_19862000(){
	wiek_budynku="d19862000";
	wynik_wiek_budynku();
	
		document.getElementById("wiek_budynku_1945").style.background = kolor1;
	document.getElementById("wiek_budynku_19461966").style.background = kolor1;
	document.getElementById("wiek_budynku_19671985").style.background = kolor1;
	document.getElementById("wiek_budynku_19862000").style.background = kolor;
	document.getElementById("wiek_budynku_20012008").style.background = kolor1;
	document.getElementById("wiek_budynku_po2009").style.background = kolor1;
}

function wiek_budynku_20012008(){
	wiek_budynku="d20012008";
	wynik_wiek_budynku();
	
		document.getElementById("wiek_budynku_1945").style.background = kolor1;
	document.getElementById("wiek_budynku_19461966").style.background = kolor1;
	document.getElementById("wiek_budynku_19671985").style.background = kolor1;
	document.getElementById("wiek_budynku_19862000").style.background = kolor1;
	document.getElementById("wiek_budynku_20012008").style.background = kolor;
	document.getElementById("wiek_budynku_po2009").style.background = kolor1;
}

function wiek_budynku_po2009(){
	wiek_budynku="po2009";
	wynik_wiek_budynku();
	
		document.getElementById("wiek_budynku_1945").style.background = kolor1;
	document.getElementById("wiek_budynku_19461966").style.background = kolor1;
	document.getElementById("wiek_budynku_19671985").style.background = kolor1;
	document.getElementById("wiek_budynku_19862000").style.background = kolor1;
	document.getElementById("wiek_budynku_20012008").style.background = kolor1;
	document.getElementById("wiek_budynku_po2009").style.background = kolor;
	
	rodzaj_ogrzewania_CWU_piec_gazowy_kondensacyjny_085();
	rodzaj_ogrzewania_CO_piec_gazkowy_094();
	rodzaj_ogrzewania_CO_nowy_piec_weglowy_082()
}

function wynik_wiek_budynku(){
	//do wywalenia

}

var powierzchnia_budynku;

function powierzchnia_budynku_liczba(){
	powierzchnia_budynku = document.getElementById("powierzchnia_budynku_liczba").value;
	wynik_powierzchnia_budynku();
}

function wynik_powierzchnia_budynku(){
	//do wywalenia
	
}

var rodzaj_poddasza;


function check_strop_czy_dach(){
	
	if (document.getElementById("check_strop_czy_dach").checked == false) {
     rodzaj_poddasza = "nieogrzewany";
	  
	}else{
	 rodzaj_poddasza = "ogrzewany";	
	}
	dach_czy_poddasze();
	wynik_check_strop_czy_dach();
}

function wynik_check_strop_czy_dach(){
	//do wywalenia
	
}

var liczba_uzytkownikow;


function liczba_uzytkownikow_liczba(){
	liczba_uzytkownikow = document.getElementById("liczba_uzytkownikow_liczba").value;
	wynik_liczba_uzytkownikow();
}


function wynik_liczba_uzytkownikow(){
	//do wywalenia
	
}

var dobowe_zuzycie_wody;

function dobowe_zuzycie_wody_niskie(){
	dobowe_zuzycie_wody = 35;
	document.getElementById("dobowe_zuzycie_wody_number").value=dobowe_zuzycie_wody;	
	wynik_dobowe_zuzycie_wody();
	
	document.getElementById("dobowe_zuzycie_wody_niskie").style.background = kolor;
	document.getElementById("dobowe_zuzycie_wody_srednie").style.background = kolor1;
	document.getElementById("dobowe_zuzycie_wody_wysokie").style.background = kolor1;
}

function dobowe_zuzycie_wody_srednie(){
	dobowe_zuzycie_wody = 50;
	document.getElementById("dobowe_zuzycie_wody_number").value=dobowe_zuzycie_wody;	
	wynik_dobowe_zuzycie_wody();
	
	document.getElementById("dobowe_zuzycie_wody_niskie").style.background = kolor1;
	document.getElementById("dobowe_zuzycie_wody_srednie").style.background = kolor;
	document.getElementById("dobowe_zuzycie_wody_wysokie").style.background = kolor1;
}

function dobowe_zuzycie_wody_wysokie(){
	dobowe_zuzycie_wody = 70;
	document.getElementById("dobowe_zuzycie_wody_number").value=dobowe_zuzycie_wody;	
	wynik_dobowe_zuzycie_wody();
	
	document.getElementById("dobowe_zuzycie_wody_niskie").style.background = kolor1;
	document.getElementById("dobowe_zuzycie_wody_srednie").style.background = kolor1;
	document.getElementById("dobowe_zuzycie_wody_wysokie").style.background = kolor;
}

function dobowe_zuzycie_wody_number(){
	dobowe_zuzycie_wody = document.getElementById("dobowe_zuzycie_wody_number").value;
	wynik_dobowe_zuzycie_wody();
}

function wynik_dobowe_zuzycie_wody(){
	//do wywalenia
	
}


var rodzaj_ogrzewania_CO;
//fukcje zale�ne z rodzaj instalacji CO
function rodzaj_ogrzewania_CO_stary_piec_kaflowy_025(){
	rodzaj_ogrzewania_CO="stary_piec_kaflowy_025";
	rodzaj_instalacji_ogrzewania_CO="kaflowe_kominek_070";
	rodzaj_instalacji_CO_hidden();
	modernizacja_rodzaj_instalacji_CO_hidden()
	wynik_rodzaj_ogrzewania_CO();
	zbiornik_akumulacyjny = "nie_ma_zbiornika";
	
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_kaflowy_025").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kominek_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_060").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kociol_biomasa_070").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_087").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_400").style.background = kolor1;

	
}

function rodzaj_ogrzewania_CO_stary_kominek_040(){
	rodzaj_ogrzewania_CO="stary_kominek_040";
	rodzaj_instalacji_ogrzewania_CO="kaflowe_kominek_070";
	zbiornik_akumulacyjny = "nie_ma_zbiornika";
	rodzaj_instalacji_CO_hidden();
	modernizacja_rodzaj_instalacji_CO_hidden()
	wynik_rodzaj_ogrzewania_CO();
	
		document.getElementById("rodzaj_ogrzewania_CO_stary_piec_kaflowy_025").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kominek_040").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_060").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kociol_biomasa_070").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_087").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_400").style.background = kolor1;
}

function rodzaj_ogrzewania_CO_stary_piec_weglowy_060(){
	rodzaj_ogrzewania_CO="stary_piec_weglowy_060";
	rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	rodzaj_instalacji_CO_hidden();
	modernizacja_rodzaj_instalacji_CO_hidden()
	wynik_rodzaj_ogrzewania_CO();
	
		document.getElementById("rodzaj_ogrzewania_CO_stary_piec_kaflowy_025").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kominek_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_060").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kociol_biomasa_070").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_087").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_400").style.background = kolor1;
}

function rodzaj_ogrzewania_CO_stary_piec_weglowy_065(){
	rodzaj_ogrzewania_CO="stary_piec_weglowy_065";
	rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	rodzaj_instalacji_CO_hidden();
	modernizacja_rodzaj_instalacji_CO_hidden()
	wynik_rodzaj_ogrzewania_CO();
	
		document.getElementById("rodzaj_ogrzewania_CO_stary_piec_kaflowy_025").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kominek_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_060").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_065").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kociol_biomasa_070").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_087").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_400").style.background = kolor1;
}



function rodzaj_ogrzewania_CO_nowy_piec_weglowy_082(){
	rodzaj_ogrzewania_CO="nowy_piec_weglowy_082";
	rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	rodzaj_instalacji_CO_hidden();
	modernizacja_rodzaj_instalacji_CO_hidden()
	wynik_rodzaj_ogrzewania_CO();
	
		document.getElementById("rodzaj_ogrzewania_CO_stary_piec_kaflowy_025").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kominek_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_060").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kociol_biomasa_070").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_087").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_400").style.background = kolor1;
}

function rodzaj_ogrzewania_CO_stary_kociol_biomasa_070(){
	rodzaj_ogrzewania_CO="stary_kociol_biomasa_070";
	rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	rodzaj_instalacji_CO_hidden();
	modernizacja_rodzaj_instalacji_CO_hidden()
	wynik_rodzaj_ogrzewania_CO();
	
		document.getElementById("rodzaj_ogrzewania_CO_stary_piec_kaflowy_025").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kominek_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_060").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kociol_biomasa_070").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_087").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_400").style.background = kolor1;
}

function rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85(){
	rodzaj_ogrzewania_CO="nowy_kociol_biomasa_85";
	rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	rodzaj_instalacji_CO_hidden();
	modernizacja_rodzaj_instalacji_CO_hidden()
	wynik_rodzaj_ogrzewania_CO();
	
		document.getElementById("rodzaj_ogrzewania_CO_stary_piec_kaflowy_025").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kominek_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_060").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kociol_biomasa_070").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_087").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_400").style.background = kolor1;
}

function rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070(){
	rodzaj_ogrzewania_CO="kominek_plaszcz_wodny_070";
	rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	rodzaj_instalacji_CO_hidden();
	modernizacja_rodzaj_instalacji_CO_hidden()
	wynik_rodzaj_ogrzewania_CO();
	
		document.getElementById("rodzaj_ogrzewania_CO_stary_piec_kaflowy_025").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kominek_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_060").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kociol_biomasa_070").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor;	
	document.getElementById("rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_087").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_400").style.background = kolor1;
}

function rodzaj_ogrzewania_CO_elektryczne_99(){
	rodzaj_ogrzewania_CO="elektryczne_99";
	rodzaj_instalacji_ogrzewania_CO="miejscowe_elektryczne_091";
	zbiornik_akumulacyjny = "nie_ma_zbiornika";
	rodzaj_instalacji_CO_hidden();
	modernizacja_rodzaj_instalacji_CO_hidden()
	wynik_rodzaj_ogrzewania_CO();
	
		document.getElementById("rodzaj_ogrzewania_CO_stary_piec_kaflowy_025").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kominek_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_060").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kociol_biomasa_070").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_087").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_400").style.background = kolor1;
}

function rodzaj_ogrzewania_CO_piec_olejowy_084(){
	rodzaj_ogrzewania_CO="piec_olejowy_084";
	rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	rodzaj_instalacji_CO_hidden();
	modernizacja_rodzaj_instalacji_CO_hidden()
	wynik_rodzaj_ogrzewania_CO();
	
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_kaflowy_025").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kominek_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_060").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kociol_biomasa_070").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_087").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_400").style.background = kolor1;
}

function rodzaj_ogrzewania_CO_piec_gazkowy_087(){
	rodzaj_ogrzewania_CO="piec_gazkowy_087";
	rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	rodzaj_instalacji_CO_hidden();
	modernizacja_rodzaj_instalacji_CO_hidden()
	wynik_rodzaj_ogrzewania_CO();
	
		document.getElementById("rodzaj_ogrzewania_CO_stary_piec_kaflowy_025").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kominek_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_060").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kociol_biomasa_070").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_087").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_400").style.background = kolor1;
}
	
function rodzaj_ogrzewania_CO_piec_gazkowy_094(){
	rodzaj_ogrzewania_CO="piec_gazkowy_094";
	rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	rodzaj_instalacji_CO_hidden();
	modernizacja_rodzaj_instalacji_CO_hidden()
	wynik_rodzaj_ogrzewania_CO();
	
		document.getElementById("rodzaj_ogrzewania_CO_stary_piec_kaflowy_025").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kominek_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_060").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kociol_biomasa_070").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_087").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor;	
	document.getElementById("rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_400").style.background = kolor1;
}

function rodzaj_ogrzewania_CO_wezel_cieplowniczy_098(){
	rodzaj_ogrzewania_CO="wezel_cieplowniczy_098";
	rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	rodzaj_instalacji_CO_hidden();
	modernizacja_rodzaj_instalacji_CO_hidden()
	wynik_rodzaj_ogrzewania_CO();
	
		document.getElementById("rodzaj_ogrzewania_CO_stary_piec_kaflowy_025").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kominek_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_060").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kociol_biomasa_070").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_087").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_400").style.background = kolor1;
}

function rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300(){
	rodzaj_ogrzewania_CO="powietrzna_pompa_ciepla_300";
	rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	rodzaj_instalacji_CO_hidden();
	modernizacja_rodzaj_instalacji_CO_hidden()
	wynik_rodzaj_ogrzewania_CO();
	
		document.getElementById("rodzaj_ogrzewania_CO_stary_piec_kaflowy_025").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kominek_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_060").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kociol_biomasa_070").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_087").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1	;
	document.getElementById("rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_400").style.background = kolor1;
}

function rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160(){
	rodzaj_ogrzewania_CO="gazowa_pompa_ciepla_160";
	rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	rodzaj_instalacji_CO_hidden();
	modernizacja_rodzaj_instalacji_CO_hidden()
	wynik_rodzaj_ogrzewania_CO();
	
		document.getElementById("rodzaj_ogrzewania_CO_stary_piec_kaflowy_025").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kominek_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_060").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kociol_biomasa_070").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_087").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1	;
	document.getElementById("rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_400").style.background = kolor1;
}

function rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_400(){
	rodzaj_ogrzewania_CO="gruntowa_pompa_ciepla_400";
	rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	rodzaj_instalacji_CO_hidden();
	modernizacja_rodzaj_instalacji_CO_hidden()
	wynik_rodzaj_ogrzewania_CO();
	
		document.getElementById("rodzaj_ogrzewania_CO_stary_piec_kaflowy_025").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kominek_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_060").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_piec_weglowy_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_stary_kociol_biomasa_070").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_087").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1	;
	document.getElementById("rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_400").style.background = kolor;
}


function wynik_rodzaj_ogrzewania_CO(){
	//do wywalenia

}


function rodzaj_instalacji_CO_hidden(){
	
	if (rodzaj_ogrzewania_CO=="elektryczne_99"){
				
		document.getElementById("rodzaj_instalacji_CO_miejscowe_elektryczne_091").style.display = "block";
		document.getElementById("rodzaj_instalacji_CO_kaflowe_kominek_070").style.display = "none";
		document.getElementById("rodzaj_instalacji_CO_grzejniki_centralna_077").style.display = "none";
		document.getElementById("rodzaj_instalacji_CO_grzejniki_miejscowe_093").style.display = "none";
		document.getElementById("rodzaj_instalacji_CO_podlogowe_centralna_076").style.display = "none";
		document.getElementById("rodzaj_instalacji_CO_podlogowe_miejscowe_089").style.display = "none";

		document.getElementById("zbiornik_akumulacyjny_ciepla_div_zew").style.display = "none";
		zbiornik_akumulacyjny = "nie_ma_zbiornika";
		

	}else if (rodzaj_ogrzewania_CO=="stary_piec_kaflowy_025"){

		document.getElementById("rodzaj_instalacji_CO_miejscowe_elektryczne_091").style.display = "none";
		document.getElementById("rodzaj_instalacji_CO_kaflowe_kominek_070").style.display = "block";
		document.getElementById("rodzaj_instalacji_CO_grzejniki_centralna_077").style.display = "none";
		document.getElementById("rodzaj_instalacji_CO_grzejniki_miejscowe_093").style.display = "none";
		document.getElementById("rodzaj_instalacji_CO_podlogowe_centralna_076").style.display = "none";
		document.getElementById("rodzaj_instalacji_CO_podlogowe_miejscowe_089").style.display = "none";

		document.getElementById("zbiornik_akumulacyjny_ciepla_div_zew").style.display = "none";
		zbiornik_akumulacyjny = "nie_ma_zbiornika";

	
		
	}else if (rodzaj_ogrzewania_CO=="stary_kominek_040"){

		document.getElementById("rodzaj_instalacji_CO_miejscowe_elektryczne_091").style.display = "none";
		document.getElementById("rodzaj_instalacji_CO_kaflowe_kominek_070").style.display = "block";
		document.getElementById("rodzaj_instalacji_CO_grzejniki_centralna_077").style.display = "none";
		document.getElementById("rodzaj_instalacji_CO_grzejniki_miejscowe_093").style.display = "none";
		document.getElementById("rodzaj_instalacji_CO_podlogowe_centralna_076").style.display = "none";
		document.getElementById("rodzaj_instalacji_CO_podlogowe_miejscowe_089").style.display = "none";

		document.getElementById("zbiornik_akumulacyjny_ciepla_div_zew").style.display = "none";
		zbiornik_akumulacyjny = "nie_ma_zbiornika";
		
	}else{
		document.getElementById("rodzaj_instalacji_CO_miejscowe_elektryczne_091").style.display = "none";
		document.getElementById("rodzaj_instalacji_CO_kaflowe_kominek_070").style.display = "none";
		document.getElementById("rodzaj_instalacji_CO_grzejniki_centralna_077").style.display = "block";
		document.getElementById("rodzaj_instalacji_CO_grzejniki_miejscowe_093").style.display = "block";
		document.getElementById("rodzaj_instalacji_CO_podlogowe_centralna_076").style.display = "block";
		document.getElementById("rodzaj_instalacji_CO_podlogowe_miejscowe_089").style.display = "block";
		document.getElementById("zbiornik_akumulacyjny_ciepla_div_zew").style.display = "block";
				
	}
	
}

var rodzaj_instalacji_ogrzewania_CO;

function rodzaj_instalacji_CO_miejscowe_elektryczne_091(){
	rodzaj_instalacji_ogrzewania_CO="miejscowe_elektryczne_091";
	wynik_rodzaj_instalacji_ogrzewania_CO();
	
	document.getElementById("rodzaj_instalacji_CO_miejscowe_elektryczne_091").style.background = kolor;
	document.getElementById("rodzaj_instalacji_CO_kaflowe_kominek_070").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_grzejniki_centralna_077").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_grzejniki_miejscowe_093").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_podlogowe_centralna_076").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_podlogowe_miejscowe_089").style.background = kolor1;
}

function rodzaj_instalacji_CO_kaflowe_kominek_070(){
	rodzaj_instalacji_ogrzewania_CO="kaflowe_kominek_070";
	wynik_rodzaj_instalacji_ogrzewania_CO();
	
		document.getElementById("rodzaj_instalacji_CO_miejscowe_elektryczne_091").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_kaflowe_kominek_070").style.background = kolor;
	document.getElementById("rodzaj_instalacji_CO_grzejniki_centralna_077").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_grzejniki_miejscowe_093").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_podlogowe_centralna_076").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_podlogowe_miejscowe_089").style.background = kolor1;
}

function rodzaj_instalacji_CO_grzejniki_centralna_077(){
	rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	wynik_rodzaj_instalacji_ogrzewania_CO();
	
		document.getElementById("rodzaj_instalacji_CO_miejscowe_elektryczne_091").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_kaflowe_kominek_070").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_grzejniki_centralna_077").style.background = kolor;
	document.getElementById("rodzaj_instalacji_CO_grzejniki_miejscowe_093").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_podlogowe_centralna_076").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_podlogowe_miejscowe_089").style.background = kolor1;
}

function rodzaj_instalacji_CO_grzejniki_miejscowe_093(){
	rodzaj_instalacji_ogrzewania_CO="grzejniki_miejscowe_093";
	wynik_rodzaj_instalacji_ogrzewania_CO();
	
		document.getElementById("rodzaj_instalacji_CO_miejscowe_elektryczne_091").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_kaflowe_kominek_070").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_grzejniki_centralna_077").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_grzejniki_miejscowe_093").style.background = kolor;
	document.getElementById("rodzaj_instalacji_CO_podlogowe_centralna_076").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_podlogowe_miejscowe_089").style.background = kolor1;
}

function rodzaj_instalacji_CO_podlogowe_centralna_076(){
	rodzaj_instalacji_ogrzewania_CO="podlogowe_centralna_076";
	wynik_rodzaj_instalacji_ogrzewania_CO();
	
		document.getElementById("rodzaj_instalacji_CO_miejscowe_elektryczne_091").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_kaflowe_kominek_070").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_grzejniki_centralna_077").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_grzejniki_miejscowe_093").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_podlogowe_centralna_076").style.background = kolor;
	document.getElementById("rodzaj_instalacji_CO_podlogowe_miejscowe_089").style.background = kolor1;
}

function rodzaj_instalacji_CO_podlogowe_miejscowe_089(){
	rodzaj_instalacji_ogrzewania_CO="podlogowe_miejscowe_089";
	wynik_rodzaj_instalacji_ogrzewania_CO();
	
		document.getElementById("rodzaj_instalacji_CO_miejscowe_elektryczne_091").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_kaflowe_kominek_070").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_grzejniki_centralna_077").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_grzejniki_miejscowe_093").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_podlogowe_centralna_076").style.background = kolor1;
	document.getElementById("rodzaj_instalacji_CO_podlogowe_miejscowe_089").style.background = kolor;
}


function wynik_rodzaj_instalacji_ogrzewania_CO(){
	//do wywalenia

}


var zbiornik_akumulacyjny;


function check_zbiornik_akumulacyjny_ciepla(){
	
	if (document.getElementById("check_zbiornik_akumulacyjny_ciepla").checked == false) {
     zbiornik_akumulacyjny = "nie_ma_zbiornika";
	  
	}else{
	 zbiornik_akumulacyjny = "jest_zbiornik";	
	}
	wynik_check_zbiornik_akumulacyjny_ciepla();
}



function wynik_check_zbiornik_akumulacyjny_ciepla(){
	//do wywalenia

}

var rodzaj_ogrzewania_CWU

function rodzaj_ogrzewania_CWU_piec_gazowy_bojler_040(){
	rodzaj_ogrzewania_CWU="piec_gazowy_bojler_040";
	wynik_rodzaj_ogrzewania_CWU();
	
	
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_bojler_040").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_2000_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_niekondensacyjny_083").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_kondensacyjny_085").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_podgrzewacz_elektryczny_096").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_powietrzna_pompa_ciepla_260").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_wezel_cieplowniczy_098").style.background = kolor1;
	
	
}

function rodzaj_ogrzewania_CWU_piec_gazowy_2000_065(){
	rodzaj_ogrzewania_CWU="piec_gazowy_2000_065";
	wynik_rodzaj_ogrzewania_CWU();
	
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_bojler_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_2000_065").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_niekondensacyjny_083").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_kondensacyjny_085").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_podgrzewacz_elektryczny_096").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_powietrzna_pompa_ciepla_260").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_wezel_cieplowniczy_098").style.background = kolor1;
}

function rodzaj_ogrzewania_CWU_piec_gazowy_niekondensacyjny_083(){
	rodzaj_ogrzewania_CWU="piec_gazowy_niekondensacyjny_083";
	wynik_rodzaj_ogrzewania_CWU();
	
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_bojler_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_2000_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_niekondensacyjny_083").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_kondensacyjny_085").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_podgrzewacz_elektryczny_096").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_powietrzna_pompa_ciepla_260").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_wezel_cieplowniczy_098").style.background = kolor1;
}

function rodzaj_ogrzewania_CWU_piec_gazowy_kondensacyjny_085(){
	rodzaj_ogrzewania_CWU="piec_gazowy_kondensacyjny_085";
	wynik_rodzaj_ogrzewania_CWU();
	
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_bojler_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_2000_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_niekondensacyjny_083").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_kondensacyjny_085").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CWU_podgrzewacz_elektryczny_096").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_powietrzna_pompa_ciepla_260").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_wezel_cieplowniczy_098").style.background = kolor1;
}

function rodzaj_ogrzewania_CWU_podgrzewacz_elektryczny_096(){
	rodzaj_ogrzewania_CWU="podgrzewacz_elektryczny_096";
	wynik_rodzaj_ogrzewania_CWU();
	
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_bojler_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_2000_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_niekondensacyjny_083").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_kondensacyjny_085").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_podgrzewacz_elektryczny_096").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CWU_powietrzna_pompa_ciepla_260").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_wezel_cieplowniczy_098").style.background = kolor1;
}

function rodzaj_ogrzewania_CWU_powietrzna_pompa_ciepla_260(){
	rodzaj_ogrzewania_CWU="powietrzna_pompa_ciepla_260";
	wynik_rodzaj_ogrzewania_CWU();
	
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_bojler_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_2000_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_niekondensacyjny_083").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_kondensacyjny_085").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_podgrzewacz_elektryczny_096").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_powietrzna_pompa_ciepla_260").style.background = kolor;
	document.getElementById("rodzaj_ogrzewania_CWU_wezel_cieplowniczy_098").style.background = kolor1;
}

function rodzaj_ogrzewania_CWU_gazowa_pompa_ciepla_130(){
	rodzaj_ogrzewania_CWU="gazowa_pompa_ciepla_130";
	wynik_rodzaj_ogrzewania_CWU();
	
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_bojler_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_2000_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_niekondensacyjny_083").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_kondensacyjny_085").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_podgrzewacz_elektryczny_096").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_powietrzna_pompa_ciepla_260").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_wezel_cieplowniczy_098").style.background = kolor;
}


function rodzaj_ogrzewania_CWU_wezel_cieplowniczy_098(){
	rodzaj_ogrzewania_CWU="wezel_cieplowniczy_098";
	wynik_rodzaj_ogrzewania_CWU();
	
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_bojler_040").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_2000_065").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_niekondensacyjny_083").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_piec_gazowy_kondensacyjny_085").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_podgrzewacz_elektryczny_096").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_powietrzna_pompa_ciepla_260").style.background = kolor1;
	document.getElementById("rodzaj_ogrzewania_CWU_wezel_cieplowniczy_098").style.background = kolor;	
	
	
}

function wynik_rodzaj_ogrzewania_CWU(){
	//do wywalenia

}


var rodzaj_wentylacji;

function rodzaj_wentylacji_grawitacyjna(){
	rodzaj_wentylacji="grawitacyjna";
	wynik_rodzaj_wentylacji();
	
	document.getElementById("rodzaj_wentylacji_grawitacyjna").style.background = kolor;
	document.getElementById("rodzaj_wentylacji_mechaniczna60").style.background = kolor1;
	document.getElementById("rodzaj_wentylacji_mechaniczna85").style.background = kolor1;
	
}

function rodzaj_wentylacji_mechaniczna60(){
	rodzaj_wentylacji="mechaniczna60";
	wynik_rodzaj_wentylacji();
	
	document.getElementById("rodzaj_wentylacji_grawitacyjna").style.background = kolor1;
	document.getElementById("rodzaj_wentylacji_mechaniczna60").style.background = kolor;
	document.getElementById("rodzaj_wentylacji_mechaniczna85").style.background = kolor1;
}

function rodzaj_wentylacji_mechaniczna85(){
	rodzaj_wentylacji="mechaniczna85";
	wynik_rodzaj_wentylacji();
	
	document.getElementById("rodzaj_wentylacji_grawitacyjna").style.background = kolor1;
	document.getElementById("rodzaj_wentylacji_mechaniczna60").style.background = kolor1;
	document.getElementById("rodzaj_wentylacji_mechaniczna85").style.background = kolor;
}

function wynik_rodzaj_wentylacji(){
	//do wywalenia

}

//automat

function brakmodernizacji(){
	modernizacja_wymiana_okien_nie();
	modernizacja_ocieplenie_scian_nie();
	modernizacja_wymiana_drzwi_nie();
	modernizacja_ocieplenie_podlogi_nie();
	modernizacja_wymiana_rodzaju_wentylacji_nie();

		
	if(rodzaj_poddasza == "ogrzewany"){
		
		modernizacja_ocieplenie_dachu_nie();
		
	}else if (rodzaj_poddasza == "nieogrzewany"){
		
		modernizacja_ocieplenie_poddasze_nie();
		
	}
	
	modernizacja_wymiana_rodzaju_zrodla_ogrzewania_nie();	
	modernizacja_wymiana_rodzaj_instalacji_CO_nie();	
	modernizacja_rodzaj_ogrzewania_CWU_nie();
	
}

function modernizacjaautomat(){

var ocieplenie_dachu="NIE";

	modernizacja_wymiana_okien_nie();
	modernizacja_ocieplenie_scian_nie();
	modernizacja_wymiana_drzwi_nie();
	modernizacja_ocieplenie_podlogi_nie();
	modernizacja_wymiana_rodzaju_wentylacji_nie();

		
	if(rodzaj_poddasza == "ogrzewany"){
		
		modernizacja_ocieplenie_dachu_nie();
		
	}else if (rodzaj_poddasza == "nieogrzewany"){
		
		modernizacja_ocieplenie_poddasze_nie();
		
	}
	
	modernizacja_wymiana_rodzaju_zrodla_ogrzewania_nie();	
	modernizacja_wymiana_rodzaj_instalacji_CO_nie();	
	modernizacja_rodzaj_ogrzewania_CWU_nie();
	
	if(wiek_budynku=="d19461966" || wiek_budynku=="d1945"){
		
		modernizacja_ocieplenie_podlogi_tak();
		ocieplenie_dachu="TAK"
		modernizacja_wymiana_okien_tak();
		modernizacja_ocieplenie_scian_tak();
		modernizacja_wymiana_drzwi_tak();
		
	}else if (wiek_budynku=="d19671985"){
		
		modernizacja_ocieplenie_podlogi_tak();
		ocieplenie_dachu="TAK"
		modernizacja_wymiana_okien_tak();
		modernizacja_ocieplenie_scian_tak();
		
	}else if (wiek_budynku=="d19862000"){
		
		modernizacja_ocieplenie_podlogi_tak();
		ocieplenie_dachu="TAK"
	}
	

	if (ocieplenie_dachu=="TAK"){		
		if(rodzaj_poddasza == "ogrzewany"){
			
			modernizacja_ocieplenie_dachu_tak();
			
		}else if (rodzaj_poddasza == "nieogrzewany"){
			
			modernizacja_ocieplenie_poddasze_tak();
			
		}

	}
	
	
	if(rodzaj_ogrzewania_CO=="stary_piec_kaflowy_025" || rodzaj_ogrzewania_CO=="stary_kominek_040"){
		
	modernizacja_wymiana_rodzaju_zrodla_ogrzewania_tak();	
	modernizacja_rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85();
	modernizacja_wymiana_rodzaj_instalacji_CO_tak();
	modernizacja_rodzaj_instalacji_CO_podlogowe_miejscowe_089();
		
	}else if (rodzaj_ogrzewania_CO=="stary_kociol_biomasa_070"){
		
	modernizacja_wymiana_rodzaju_zrodla_ogrzewania_tak();
	modernizacja_rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85();
		
	}else if (rodzaj_ogrzewania_CO=="stary_piec_weglowy_060" || rodzaj_ogrzewania_CO=="stary_piec_weglowy_065" ){
		
	modernizacja_wymiana_rodzaju_zrodla_ogrzewania_tak();
	modernizacja_rodzaj_ogrzewania_CO_nowy_piec_weglowy_082();
		
	}else if (rodzaj_ogrzewania_CO=="elektryczne_99"){
		
	modernizacja_wymiana_rodzaju_zrodla_ogrzewania_tak();	
	modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_poziomy_400();
	modernizacja_wymiana_rodzaj_instalacji_CO_tak();
	modernizacja_rodzaj_instalacji_CO_podlogowe_miejscowe_089();
	
	}else if (rodzaj_ogrzewania_CO=="piec_gazkowy_087"){
		
	modernizacja_wymiana_rodzaju_zrodla_ogrzewania_tak();	
	modernizacja_rodzaj_ogrzewania_CO_piec_gazkowy_094();	
	}
	
	
	if(rodzaj_instalacji_ogrzewania_CO=="grzejniki_centralna_077"){
		
	modernizacja_wymiana_rodzaj_instalacji_CO_tak();	
	modernizacja_rodzaj_instalacji_CO_grzejniki_miejscowe_093();
	
	}else if (rodzaj_instalacji_ogrzewania_CO=="podlogowe_centralna_076"){
		
	modernizacja_wymiana_rodzaj_instalacji_CO_tak();	
	modernizacja_rodzaj_instalacji_CO_podlogowe_miejscowe_089();
	
	}


	if(rodzaj_ogrzewania_CWU=="piec_gazowy_bojler_040" ||rodzaj_ogrzewania_CWU=="piec_gazowy_2000_065" ){
		
	modernizacja_rodzaj_ogrzewania_CWU_tak();	
	modernizacja_rodzaj_ogrzewania_CWU_piec_gazowy_kondensacyjny_085();	
	}		
	
}


function supereko(){
	
		modernizacja_wymiana_okien_nie();
	modernizacja_ocieplenie_scian_nie();
	modernizacja_wymiana_drzwi_nie();
	modernizacja_ocieplenie_podlogi_nie();
	modernizacja_wymiana_rodzaju_wentylacji_nie();

		
	if(rodzaj_poddasza == "ogrzewany"){
		
		modernizacja_ocieplenie_dachu_nie();
		
	}else if (rodzaj_poddasza == "nieogrzewany"){
		
		modernizacja_ocieplenie_poddasze_nie();
		
	}
	
	modernizacja_wymiana_rodzaju_zrodla_ogrzewania_nie();	
	modernizacja_wymiana_rodzaj_instalacji_CO_nie();	
	modernizacja_rodzaj_ogrzewania_CWU_nie();
	
	
	modernizacja_wymiana_okien_tak();
	modernizacja_ocieplenie_scian_tak();
	modernizacja_wymiana_drzwi_tak();
	modernizacja_ocieplenie_podlogi_tak();
	modernizacja_wymiana_rodzaju_wentylacji_tak();
	modernizacja_wymiana_rodzaju_wentylacji_mechaniczna_85();
	
	
	if(rodzaj_poddasza == "ogrzewany"){
		
		modernizacja_ocieplenie_dachu_tak();
		
	}else if (rodzaj_poddasza == "nieogrzewany"){
		
		modernizacja_ocieplenie_poddasze_tak();
		
	}
	
	modernizacja_wymiana_rodzaju_zrodla_ogrzewania_tak();
	modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_poziomy_400();
	
	modernizacja_wymiana_rodzaj_instalacji_CO_tak();
	modernizacja_rodzaj_instalacji_CO_podlogowe_miejscowe_089();
	
	modernizacja_rodzaj_ogrzewania_CWU_tak();
	modernizacja_rodzaj_ogrzewania_CWU_powietrzna_pompa_ciepla_260();
	
}

//modernizacja budynku

var wymiana_okien;

function modernizacja_wymiana_okien_tak(){
	wymiana_okien="wymienic_okna"
	document.getElementById("modernizacja_wymiana_okien_nie").style.display = "none";
	document.getElementById("modernizacja_wymiana_okien_tak").style.display = "block";
	wynik_wymiana_okien();
}

function modernizacja_wymiana_okien_nie(){
	wymiana_okien="nie_wymienic_okna"
	document.getElementById("modernizacja_wymiana_okien_nie").style.display = "block";
	document.getElementById("modernizacja_wymiana_okien_tak").style.display = "none";
	wynik_wymiana_okien();
}



function wynik_wymiana_okien(){
	//do wywalenia

}

var ocieplenie_scian;

function modernizacja_ocieplenie_scian_tak(){
	ocieplenie_scian="ocieplenie_scian"
	document.getElementById("modernizacja_ocieplenie_scian_nie").style.display = "none";
	document.getElementById("modernizacja_ocieplenie_scian_tak").style.display = "block";
	wynik_ocieplenie_scian();
}

function modernizacja_ocieplenie_scian_nie(){
	ocieplenie_scian="nie_ocieplenie_scian"
	document.getElementById("modernizacja_ocieplenie_scian_nie").style.display = "block";
	document.getElementById("modernizacja_ocieplenie_scian_tak").style.display = "none";
	wynik_ocieplenie_scian();
}



function wynik_ocieplenie_scian(){
	//do wywalenia

}


var ocieplenie_dachu;
var ocieplenie_poddasze;

function dach_czy_poddasze(){
		if (rodzaj_poddasza == "nieogrzewany"){
			document.getElementById("modernizacja_ocieplenie_poddasze_nie").style.display = "block";
			document.getElementById("modernizacja_ocieplenie_poddasze_tak").style.display = "none";	
			ocieplenie_poddasze="nie_ocieplenie_poddasze"			
			document.getElementById("modernizacja_ocieplenie_dachu_nie").style.display = "none";
			document.getElementById("modernizacja_ocieplenie_dachu_tak").style.display = "none";
			
		}else{
			document.getElementById("modernizacja_ocieplenie_poddasze_nie").style.display = "none";
			document.getElementById("modernizacja_ocieplenie_poddasze_tak").style.display = "none";	
			ocieplenie_dachu="nie_ocieplenie_dachu"
			document.getElementById("modernizacja_ocieplenie_dachu_nie").style.display = "block";
			document.getElementById("modernizacja_ocieplenie_dachu_tak").style.display = "none";
		}	 

}



function modernizacja_ocieplenie_dachu_tak(){
	ocieplenie_dachu="ocieplenie_dachu"
	document.getElementById("modernizacja_ocieplenie_dachu_nie").style.display = "none";
	document.getElementById("modernizacja_ocieplenie_dachu_tak").style.display = "block";
	wynik_ocieplenie_dachu();
}

function modernizacja_ocieplenie_dachu_nie(){
	ocieplenie_dachu="nie_ocieplenie_dachu"
	document.getElementById("modernizacja_ocieplenie_dachu_nie").style.display = "block";
	document.getElementById("modernizacja_ocieplenie_dachu_tak").style.display = "none";
	wynik_ocieplenie_dachu();
}

function wynik_ocieplenie_dachu(){
	//do wywalenia

}

function modernizacja_ocieplenie_poddasze_tak(){
	ocieplenie_poddasze="ocieplenie_poddasze"
	document.getElementById("modernizacja_ocieplenie_poddasze_nie").style.display = "none";
	document.getElementById("modernizacja_ocieplenie_poddasze_tak").style.display = "block";
	wynik_ocieplenie_poddasze();
}

function modernizacja_ocieplenie_poddasze_nie(){
	ocieplenie_poddasze="nie_ocieplenie_poddasze"
	document.getElementById("modernizacja_ocieplenie_poddasze_nie").style.display = "block";
	document.getElementById("modernizacja_ocieplenie_poddasze_tak").style.display = "none";
	wynik_ocieplenie_poddasze();
}

function wynik_ocieplenie_poddasze(){
	//do wywalenia
	
}

var wymiana_drzwi;

function modernizacja_wymiana_drzwi_tak(){
	wymiana_drzwi="wymiana_drzwi"
	document.getElementById("modernizacja_wymiana_drzwi_nie").style.display = "none";
	document.getElementById("modernizacja_wymiana_drzwi_tak").style.display = "block";
	wynik_wymiana_drzwi();
}

function modernizacja_wymiana_drzwi_nie(){
	wymiana_drzwi="nie_wymiana_drzwi"
	document.getElementById("modernizacja_wymiana_drzwi_nie").style.display = "block";
	document.getElementById("modernizacja_wymiana_drzwi_tak").style.display = "none";
	wynik_wymiana_drzwi();
}




function wynik_wymiana_drzwi(){
	//do wywalenia
	
}


var ocieplenie_podlogi;

function modernizacja_ocieplenie_podlogi_tak(){
	ocieplenie_podlogi="ocieplenie_podlogi"
	document.getElementById("modernizacja_ocieplenie_podlogi_nie").style.display = "none";
	document.getElementById("modernizacja_ocieplenie_podlogi_tak").style.display = "block";
	wynik_ocieplenie_podlogi();
}

function modernizacja_ocieplenie_podlogi_nie(){
	ocieplenie_podlogi="nie_ocieplenie_podlogi"
	document.getElementById("modernizacja_ocieplenie_podlogi_nie").style.display = "block";
	document.getElementById("modernizacja_ocieplenie_podlogi_tak").style.display = "none";
	wynik_ocieplenie_podlogi();
}



function wynik_ocieplenie_podlogi(){
	//do wywalenia


}

var wymiana_rodzaju_wentylacji;

function modernizacja_wymiana_rodzaju_wentylacji_tak(){
	wymiana_rodzaju_wentylacji="mechaniczna_60"
	document.getElementById("modernizacja_wymiana_rodzaju_wentylacji_nie").style.display = "none";
	document.getElementById("modernizacja_wymiana_rodzaju_wentylacji_tak").style.display = "block";
	
	document.getElementById("modernizacja_wymiana_rodzaju_wentylacji_rodzaj").style.display = "block";
	document.getElementById("modernizacja_wymiana_rodzaju_wentylacji_rodzaj").style.display = "block";
	
	wynik_wymiana_rodzaju_wentylacji();
}

function modernizacja_wymiana_rodzaju_wentylacji_nie(){
	wymiana_rodzaju_wentylacji="nie_wymiana_rodzaju_wentylacji"
	document.getElementById("modernizacja_wymiana_rodzaju_wentylacji_nie").style.display = "block";
	document.getElementById("modernizacja_wymiana_rodzaju_wentylacji_tak").style.display = "none";
	
	document.getElementById("modernizacja_wymiana_rodzaju_wentylacji_rodzaj").style.display = "none";
	document.getElementById("modernizacja_wymiana_rodzaju_wentylacji_rodzaj").style.display = "none";
	
	wynik_wymiana_rodzaju_wentylacji();
}




function modernizacja_wymiana_rodzaju_wentylacji_mechaniczna_60(){
	wymiana_rodzaju_wentylacji="mechaniczna_60"
	wynik_wymiana_rodzaju_wentylacji();
	
	document.getElementById("modernizacja_wymiana_rodzaju_wentylacji_mechaniczna_60").style.background = kolor;
	document.getElementById("modernizacja_wymiana_rodzaju_wentylacji_mechaniczna_85").style.background = kolor1;
}

function modernizacja_wymiana_rodzaju_wentylacji_mechaniczna_85(){
	wymiana_rodzaju_wentylacji="mechaniczna_85"
	wynik_wymiana_rodzaju_wentylacji();
	
	document.getElementById("modernizacja_wymiana_rodzaju_wentylacji_mechaniczna_60").style.background = kolor1;
	document.getElementById("modernizacja_wymiana_rodzaju_wentylacji_mechaniczna_85").style.background = kolor;
}


function wynik_wymiana_rodzaju_wentylacji(){
	//do wywalenia


}


var modernizacja_rodzaj_ogrzewania_CO;




function modernizacja_wymiana_rodzaju_zrodla_ogrzewania_tak(){
	modernizacja_rodzaj_ogrzewania_CO="nowy_piec_weglowy_082"
	document.getElementById("modernizacja_wymiana_rodzaju_zrodla_ogrzewania_nie").style.display = "none";
	document.getElementById("modernizacja_wymiana_rodzaju_zrodla_ogrzewania_tak").style.display = "block";
	
	document.getElementById("modernizacja_wymiana_rodzaju_zrodla_ogrzewania_rodzaj").style.display = "block";
	document.getElementById("modernizacja_wymiana_rodzaju_zrodla_ogrzewania_rodzaj").style.display = "block";
	modernizacja_rodzaj_instalacji_CO_hidden();
	wynik_modernizacja_rodzaj_ogrzewania_CO();
}

function modernizacja_wymiana_rodzaju_zrodla_ogrzewania_nie(){
	modernizacja_rodzaj_ogrzewania_CO="nie_wymiana_rodzaju_zrodla_ogrzewania"
	modernizacja_rodzaj_instalacji_ogrzewania_CO="nie_modernizacja_rodzaj_instalacji_ogrzewania_CO";
	document.getElementById("modernizacja_wymiana_rodzaju_zrodla_ogrzewania_nie").style.display = "block";
	document.getElementById("modernizacja_wymiana_rodzaju_zrodla_ogrzewania_tak").style.display = "none";
	
	document.getElementById("modernizacja_wymiana_rodzaju_zrodla_ogrzewania_rodzaj").style.display = "none";
	document.getElementById("modernizacja_wymiana_rodzaju_zrodla_ogrzewania_rodzaj").style.display = "none";
	modernizacja_rodzaj_instalacji_CO_hidden();
	wynik_modernizacja_rodzaj_ogrzewania_CO();
}



function modernizacja_rodzaj_ogrzewania_CO_nowy_piec_weglowy_082(){
	modernizacja_rodzaj_ogrzewania_CO="nowy_piec_weglowy_082";
	modernizacja_rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	modernizacja_rodzaj_instalacji_CO_hidden();
	wynik_modernizacja_rodzaj_ogrzewania_CO();
		
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_poziomy_400").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_pionowy_400").style.background = kolor1;
	
}


function modernizacja_rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85(){
	modernizacja_rodzaj_ogrzewania_CO="nowy_kociol_biomasa_85";
	modernizacja_rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	modernizacja_rodzaj_instalacji_CO_hidden();
	wynik_modernizacja_rodzaj_ogrzewania_CO();
	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_poziomy_400").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_pionowy_400").style.background = kolor1;
}

function modernizacja_rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070(){
	modernizacja_rodzaj_ogrzewania_CO="kominek_plaszcz_wodny_070";
	modernizacja_rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	modernizacja_rodzaj_instalacji_CO_hidden();
	wynik_modernizacja_rodzaj_ogrzewania_CO();
	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_poziomy_400").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_pionowy_400").style.background = kolor1;	
}

function modernizacja_rodzaj_ogrzewania_CO_elektryczne_99(){
	modernizacja_rodzaj_ogrzewania_CO="elektryczne_99";
	modernizacja_rodzaj_instalacji_ogrzewania_CO="miejscowe_elektryczne_091";
	modernizacja_rodzaj_instalacji_CO_hidden();
	wynik_modernizacja_rodzaj_ogrzewania_CO();

	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_poziomy_400").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_pionowy_400").style.background = kolor1;	
}

function modernizacja_rodzaj_ogrzewania_CO_piec_olejowy_084(){
	modernizacja_rodzaj_ogrzewania_CO="piec_olejowy_084";
	modernizacja_rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	modernizacja_rodzaj_instalacji_CO_hidden();
	wynik_modernizacja_rodzaj_ogrzewania_CO();
	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_poziomy_400").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_pionowy_400").style.background = kolor1;
}


function modernizacja_rodzaj_ogrzewania_CO_piec_gazkowy_094(){
	modernizacja_rodzaj_ogrzewania_CO="piec_gazowy_094";
	modernizacja_rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	modernizacja_rodzaj_instalacji_CO_hidden();
	wynik_modernizacja_rodzaj_ogrzewania_CO();
	
		document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_poziomy_400").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_pionowy_400").style.background = kolor1;
}

function modernizacja_rodzaj_ogrzewania_CO_wezel_cieplowniczy_098(){
	modernizacja_rodzaj_ogrzewania_CO="wezel_cieplowniczy_098";
	modernizacja_rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	modernizacja_rodzaj_instalacji_CO_hidden();
	wynik_modernizacja_rodzaj_ogrzewania_CO();
	
		document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_poziomy_400").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_pionowy_400").style.background = kolor1;
}

function modernizacja_rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300(){
	modernizacja_rodzaj_ogrzewania_CO="powietrzna_pompa_ciepla_300";
	modernizacja_rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	modernizacja_rodzaj_instalacji_CO_hidden();
	wynik_modernizacja_rodzaj_ogrzewania_CO();
	
		document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_poziomy_400").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_pionowy_400").style.background = kolor1;
}

function modernizacja_rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160(){
	modernizacja_rodzaj_ogrzewania_CO="gazowa_pompa_ciepla_160";
	modernizacja_rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	modernizacja_rodzaj_instalacji_CO_hidden();
	wynik_modernizacja_rodzaj_ogrzewania_CO();
	
		document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_poziomy_400").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_pionowy_400").style.background = kolor1;
}

function modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_poziomy_400(){
	modernizacja_rodzaj_ogrzewania_CO="gruntowa_pompa_ciepla_poziomy_400";
	modernizacja_rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	modernizacja_rodzaj_instalacji_CO_hidden();
	wynik_modernizacja_rodzaj_ogrzewania_CO();
	
		document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_poziomy_400").style.background = kolor;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_pionowy_400").style.background = kolor1;
}

function modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_pionowy_400(){
	modernizacja_rodzaj_ogrzewania_CO="gruntowa_pompa_ciepla_pionowy_400";
	modernizacja_rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	modernizacja_rodzaj_instalacji_CO_hidden();
	wynik_modernizacja_rodzaj_ogrzewania_CO();
	
		document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_piec_weglowy_082").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_nowy_kociol_biomasa_85").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_kominek_plaszcz_wodny_070").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_elektryczne_99").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_olejowy_084").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_piec_gazkowy_094").style.background = kolor1;	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_wezel_cieplowniczy_098").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_powietrzna_pompa_ciepla_300").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gazowa_pompa_ciepla_160").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_poziomy_400").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_ogrzewania_CO_gruntowa_pompa_ciepla_pionowy_400").style.background = kolor;
}



function wynik_modernizacja_rodzaj_ogrzewania_CO(){
	//do wywalenia

}


function modernizacja_rodzaj_instalacji_CO_hidden(){
		if (modernizacja_rodzaj_ogrzewania_CO == "elektryczne_99" ||  (modernizacja_rodzaj_ogrzewania_CO=="nie_wymiana_rodzaju_zrodla_ogrzewania" && 
		
		
		(rodzaj_ogrzewania_CO == "elektryczne_99" || rodzaj_ogrzewania_CO == "stary_piec_kaflowy_025" || rodzaj_ogrzewania_CO == "stary_kominek_040" ) )   
		
		
		){
			modernizacja_rodzaj_instalacji_ogrzewania_CO="nie_modernizacja_rodzaj_instalacji_ogrzewania_CO"
			document.getElementById("modernizacja_wymiana_rodzaj_instalacji_CO_rodzaj_czy_mozliwe").style.display = "none";
				
		}else{
			document.getElementById("modernizacja_wymiana_rodzaj_instalacji_CO_rodzaj_czy_mozliwe").style.display = "block";
		}

				
	}


var modernizacja_rodzaj_instalacji_ogrzewania_CO;

function modernizacja_wymiana_rodzaj_instalacji_CO_tak(){
	modernizacja_rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077"
	document.getElementById("modernizacja_wymiana_rodzaj_instalacji_CO_nie").style.display = "none";
	document.getElementById("modernizacja_wymiana_rodzaj_instalacji_CO_tak").style.display = "block";
	
	document.getElementById("modernizacja_wymiana_rodzaj_instalacji_CO_rodzaj").style.display = "block";
	document.getElementById("modernizacja_wymiana_rodzaj_instalacji_CO_rodzaj").style.display = "block";
	
	wynik_modernizacja_rodzaj_instalacji_ogrzewania_CO();
		
	
}

function modernizacja_wymiana_rodzaj_instalacji_CO_nie(){
	modernizacja_rodzaj_instalacji_ogrzewania_CO="nie_modernizacja_rodzaj_instalacji_ogrzewania_CO";
	document.getElementById("modernizacja_wymiana_rodzaj_instalacji_CO_nie").style.display = "block";
	document.getElementById("modernizacja_wymiana_rodzaj_instalacji_CO_tak").style.display = "none";
	
	document.getElementById("modernizacja_wymiana_rodzaj_instalacji_CO_rodzaj").style.display = "none";
	document.getElementById("modernizacja_wymiana_rodzaj_instalacji_CO_rodzaj").style.display = "none";
	
	wynik_modernizacja_rodzaj_instalacji_ogrzewania_CO();
	

}



function modernizacja_rodzaj_instalacji_CO_grzejniki_centralna_077(){
	modernizacja_rodzaj_instalacji_ogrzewania_CO="grzejniki_centralna_077";
	wynik_modernizacja_rodzaj_instalacji_ogrzewania_CO();
	
	document.getElementById("modernizacja_rodzaj_instalacji_CO_grzejniki_centralna_077").style.background = kolor;
	document.getElementById("modernizacja_rodzaj_instalacji_CO_grzejniki_miejscowe_093").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_instalacji_CO_podlogowe_centralna_076").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_instalacji_CO_podlogowe_miejscowe_089").style.background = kolor1;
}

function modernizacja_rodzaj_instalacji_CO_grzejniki_miejscowe_093(){
	modernizacja_rodzaj_instalacji_ogrzewania_CO="grzejniki_miejscowe_093";
	wynik_modernizacja_rodzaj_instalacji_ogrzewania_CO();
	
	document.getElementById("modernizacja_rodzaj_instalacji_CO_grzejniki_centralna_077").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_instalacji_CO_grzejniki_miejscowe_093").style.background = kolor;
	document.getElementById("modernizacja_rodzaj_instalacji_CO_podlogowe_centralna_076").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_instalacji_CO_podlogowe_miejscowe_089").style.background = kolor1;
}

function modernizacja_rodzaj_instalacji_CO_podlogowe_centralna_076(){
	modernizacja_rodzaj_instalacji_ogrzewania_CO="podlogowe_centralna_076";
	wynik_modernizacja_rodzaj_instalacji_ogrzewania_CO();
	
	document.getElementById("modernizacja_rodzaj_instalacji_CO_grzejniki_centralna_077").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_instalacji_CO_grzejniki_miejscowe_093").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_instalacji_CO_podlogowe_centralna_076").style.background = kolor;
	document.getElementById("modernizacja_rodzaj_instalacji_CO_podlogowe_miejscowe_089").style.background = kolor1;
}

function modernizacja_rodzaj_instalacji_CO_podlogowe_miejscowe_089(){
	modernizacja_rodzaj_instalacji_ogrzewania_CO="podlogowe_miejscowe_089";
	wynik_modernizacja_rodzaj_instalacji_ogrzewania_CO();
	
	document.getElementById("modernizacja_rodzaj_instalacji_CO_grzejniki_centralna_077").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_instalacji_CO_grzejniki_miejscowe_093").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_instalacji_CO_podlogowe_centralna_076").style.background = kolor1;
	document.getElementById("modernizacja_rodzaj_instalacji_CO_podlogowe_miejscowe_089").style.background = kolor;
}


function wynik_modernizacja_rodzaj_instalacji_ogrzewania_CO(){
	//do wywalenia

}

var rodzaj_ogrzewania_CWU

function modernizacja_rodzaj_ogrzewania_CWU_tak(){
	modernizacja_rodzaj_ogrzewania_CWU="piec_gazowy_kondensacyjny_085"
	document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_nie").style.display = "none";
	document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_tak").style.display = "block";
	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_rodzaj").style.display = "block";
	document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_rodzaj").style.display = "block";
	
	wynik_modernizacja_rodzaj_ogrzewania_CWU();
}


function modernizacja_rodzaj_ogrzewania_CWU_nie(){
	modernizacja_rodzaj_ogrzewania_CWU="nie_modernizacja_rodzaj_instalacji__CWU"
	document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_nie").style.display = "block";
	document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_tak").style.display = "none";
	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_rodzaj").style.display = "none";
	document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_rodzaj").style.display = "none";
	
	wynik_modernizacja_rodzaj_ogrzewania_CWU();
}


function modernizacja_rodzaj_ogrzewania_CWU_piec_gazowy_kondensacyjny_085(){
	modernizacja_rodzaj_ogrzewania_CWU="piec_gazowy_kondensacyjny_085";
	wynik_modernizacja_rodzaj_ogrzewania_CWU();
	
	
document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_piec_gazowy_kondensacyjny_085").style.background = kolor;
document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_podgrzewacz_elektryczny_096").style.background = kolor1;
document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_powietrzna_pompa_ciepla_260").style.background = kolor1;
document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_wezel_cieplowniczy_098").style.background = kolor1;

	
}

function modernizacja_rodzaj_ogrzewania_CWU_podgrzewacz_elektryczny_096(){
	modernizacja_rodzaj_ogrzewania_CWU="podgrzewacz_elektryczny_096";
	wynik_modernizacja_rodzaj_ogrzewania_CWU();
	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_piec_gazowy_kondensacyjny_085").style.background = kolor1;
document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_podgrzewacz_elektryczny_096").style.background = kolor;
document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_powietrzna_pompa_ciepla_260").style.background = kolor1;
document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_wezel_cieplowniczy_098").style.background = kolor1;
}

function modernizacja_rodzaj_ogrzewania_CWU_powietrzna_pompa_ciepla_260(){
	modernizacja_rodzaj_ogrzewania_CWU="powietrzna_pompa_ciepla_260";
	wynik_modernizacja_rodzaj_ogrzewania_CWU();
	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_piec_gazowy_kondensacyjny_085").style.background = kolor1;
document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_podgrzewacz_elektryczny_096").style.background = kolor1;
document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_powietrzna_pompa_ciepla_260").style.background = kolor;
document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_wezel_cieplowniczy_098").style.background = kolor1;
}


function modernizacja_rodzaj_ogrzewania_CWU_wezel_cieplowniczy_098(){
	modernizacja_rodzaj_ogrzewania_CWU="wezel_cieplowniczy_098";
	wynik_modernizacja_rodzaj_ogrzewania_CWU();
	
	document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_piec_gazowy_kondensacyjny_085").style.background = kolor1;
document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_podgrzewacz_elektryczny_096").style.background = kolor1;
document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_powietrzna_pompa_ciepla_260").style.background = kolor1;
document.getElementById("modernizacja_rodzaj_ogrzewania_CWU_wezel_cieplowniczy_098").style.background = kolor;
}

function wynik_modernizacja_rodzaj_ogrzewania_CWU(){
	//do wywalenia
	
}




function paliwo(){
	
	if (rodzaj_ogrzewania_CO=="stary_piec_kaflowy_025" || rodzaj_ogrzewania_CO=="stary_kominek_040"
		|| rodzaj_ogrzewania_CO=="stary_piec_weglowy_060" || rodzaj_ogrzewania_CO=="stary_piec_weglowy_065" 
			|| rodzaj_ogrzewania_CO=="nowy_piec_weglowy_082" || rodzaj_ogrzewania_CO=="nowy_piec_weglowy_082" ){
		rodzaj_paliwa_kosztcoprzed = "wegiel"
		rodzaj_paliwa_kosztcoprzed_widok = "Węgiel"
		kosztcoprzed =1.2
		jednostka_paliwa_kosztcoprzed = "tys zł/tonę"
		
		
	} else if (rodzaj_ogrzewania_CO=="stary_kociol_biomasa_070" || rodzaj_ogrzewania_CO=="nowy_kociol_biomasa_85" || rodzaj_ogrzewania_CO=="kominek_plaszcz_wodny_070"){
		rodzaj_paliwa_kosztcoprzed = "drewno"
		rodzaj_paliwa_kosztcoprzed_widok = "Drewno"
		kosztcoprzed =0.33
		jednostka_paliwa_kosztcoprzed = "tys zł/m<sup>3</sup>"
		

		
	} else if (rodzaj_ogrzewania_CO=="elektryczne_99" || rodzaj_ogrzewania_CO=="powietrzna_pompa_ciepla_300" || rodzaj_ogrzewania_CO=="gruntowa_pompa_ciepla_400" ){
		rodzaj_paliwa_kosztcoprzed = "energia_elektryczna"
		rodzaj_paliwa_kosztcoprzed_widok = "Energia elektryczna"
		kosztcoprzed =0.60
		jednostka_paliwa_kosztcoprzed = "zł/kWh"
		

		
	} else if (rodzaj_ogrzewania_CO=="piec_olejowy_084"){
		rodzaj_paliwa_kosztcoprzed_widok = "Olej opałowy"
		rodzaj_paliwa_kosztcoprzed = "olej_opalowy"
		kosztcoprzed =5.00
		jednostka_paliwa_kosztcoprzed = "złdm<sup>3</sup>"
		

		
	} else if (rodzaj_ogrzewania_CO=="wezel_cieplowniczy_098"){
		rodzaj_paliwa_kosztcoprzed = "siec_cieplownicza"
		rodzaj_paliwa_kosztcoprzed_widok = "Sieć ciepłownicza"
		kosztcoprzed =50.00
		jednostka_paliwa_kosztcoprzed = "zł/GJ"
		

		
	} else if (rodzaj_ogrzewania_CO=="piec_gazkowy_087" || rodzaj_ogrzewania_CO=="piec_gazkowy_094" || rodzaj_ogrzewania_CO=="gazowa_pompa_ciepla_160"){
		rodzaj_paliwa_kosztcoprzed = "gaz_ziemny"
		rodzaj_paliwa_kosztcoprzed_widok = "Gaz ziemny"
		kosztcoprzed =2
		jednostka_paliwa_kosztcoprzed = "zł/m<sup>3</sup>"
		

	}
	
		document.getElementById("rodzaj_paliwa_kosztcoprzed").innerHTML = rodzaj_paliwa_kosztcoprzed_widok
		document.getElementById("kosztcoprzed").value = kosztcoprzed
		document.getElementById("jednostka_paliwa_kosztcoprzed").innerHTML = jednostka_paliwa_kosztcoprzed


//cwu przed
	
	if (rodzaj_ogrzewania_CWU=="piec_gazowy_bojler_040" || rodzaj_ogrzewania_CWU=="piec_gazowy_2000_065"
		|| rodzaj_ogrzewania_CWU=="piec_gazowy_niekondensacyjny_083" || rodzaj_ogrzewania_CWU=="piec_gazowy_kondensacyjny_085" ){
		rodzaj_paliwa_kosztcwuprzed = "gaz_ziemny"
		rodzaj_paliwa_kosztcwuprzed_widok = "Gaz ziemny"
		kosztcwuprzed =2
		jednostka_paliwa_kosztcwuprzed = "zł/m<sup>3</sup>"
				
	} else if (rodzaj_ogrzewania_CWU=="podgrzewacz_elektryczny_096" || rodzaj_ogrzewania_CWU=="powietrzna_pompa_ciepla_260" ){
		rodzaj_paliwa_kosztcwuprzed = "energia_elektryczna"
		rodzaj_paliwa_kosztcwuprzed_widok = "Energia elektryczna"
		kosztcwuprzed =0.60
		jednostka_paliwa_kosztcwuprzed = "zł/kWh"

	} else if (rodzaj_ogrzewania_CWU=="wezel_cieplowniczy_098"  ){
		rodzaj_paliwa_kosztcwuprzed = "siec_cieplownicza"
		rodzaj_paliwa_kosztcwuprzed_widok = "Sieć ciepłownicza"
		kosztcwuprzed =50
		jednostka_paliwa_kosztcwuprzed = "zł/GJ"
	}
		
		document.getElementById("rodzaj_paliwa_kosztcwuprzed").innerHTML = rodzaj_paliwa_kosztcwuprzed_widok
		document.getElementById("kosztcwuprzed").value = kosztcwuprzed
		document.getElementById("jednostka_paliwa_kosztcwuprzed").innerHTML = jednostka_paliwa_kosztcwuprzed
	
//co po

	if (modernizacja_rodzaj_ogrzewania_CO=="nie_wymiana_rodzaju_zrodla_ogrzewania"){
		rodzaj_paliwa_kosztcopo = rodzaj_paliwa_kosztcoprzed
		rodzaj_paliwa_kosztcopo_widok = rodzaj_paliwa_kosztcoprzed_widok
		kosztcopo = kosztcoprzed
		jednostka_paliwa_kosztcopo = jednostka_paliwa_kosztcoprzed

	} else if ( modernizacja_rodzaj_ogrzewania_CO=="nowy_piec_weglowy_082" ){
		rodzaj_paliwa_kosztcopo = "wegiel"
		rodzaj_paliwa_kosztcopo_widok = "Węgiel"
		kosztcopo =1.2
		jednostka_paliwa_kosztcopo = "tys zł/tonę"
		
		
	} else if ( modernizacja_rodzaj_ogrzewania_CO=="nowy_kociol_biomasa_85" || modernizacja_rodzaj_ogrzewania_CO=="kominek_plaszcz_wodny_070"){
		rodzaj_paliwa_kosztcopo = "drewno"
		rodzaj_paliwa_kosztcopo_widok = "Drewno"
		kosztcopo =0.33
		jednostka_paliwa_kosztcopo = "tys zł/m<sup>3</sup>"
		
		
	} else if (modernizacja_rodzaj_ogrzewania_CO=="elektryczne_99" || modernizacja_rodzaj_ogrzewania_CO=="powietrzna_pompa_ciepla_300"
				|| modernizacja_rodzaj_ogrzewania_CO=="gruntowa_pompa_ciepla_poziomy_400" || modernizacja_rodzaj_ogrzewania_CO=="gruntowa_pompa_ciepla_pionowy_400" ){
		rodzaj_paliwa_kosztcopo = "energia_elektryczna"
		rodzaj_paliwa_kosztcopo_widok = "Energia elektryczna"
		kosztcopo =0.60
		jednostka_paliwa_kosztcopo = "zł/kWh"
		

		
	} else if (modernizacja_rodzaj_ogrzewania_CO=="piec_olejowy_084"){
		rodzaj_paliwa_kosztcopo = "olej_opalowy"
		rodzaj_paliwa_kosztcopo_widok = "Olej opałowy"
		kosztcopo=5.00
		jednostka_paliwa_kosztcopo = "złdm<sup>3</sup>"
		

		
	} else if (modernizacja_rodzaj_ogrzewania_CO=="wezel_cieplowniczy_098"){
		rodzaj_paliwa_kosztcopo = "siec_cieplownicza"
		rodzaj_paliwa_kosztcopo_widok = "Sieć ciepłownicza"
		kosztcopo =50.00
		jednostka_paliwa_kosztcopo = "zł/GJ"
		

		
	} else if ( modernizacja_rodzaj_ogrzewania_CO=="piec_gazowy_094" || modernizacja_rodzaj_ogrzewania_CO=="gazowa_pompa_ciepla_160"){
		rodzaj_paliwa_kosztcopo = "gaz_ziemny"
		rodzaj_paliwa_kosztcopo_widok = "Gaz ziemny"
		kosztcopo =2
		jednostka_paliwa_kosztcopo = "zł/m<sup>3</sup>"
		
	}
	
		document.getElementById("rodzaj_paliwa_kosztcopo").innerHTML = rodzaj_paliwa_kosztcopo_widok
		document.getElementById("kosztcopo").value = kosztcopo
		document.getElementById("jednostka_paliwa_kosztcopo").innerHTML = jednostka_paliwa_kosztcopo
	
// cwu po

	
	if ( modernizacja_rodzaj_ogrzewania_CWU== "nie_modernizacja_rodzaj_instalacji__CWU") {
		rodzaj_paliwa_kosztcwupo = rodzaj_paliwa_kosztcwuprzed		
		rodzaj_paliwa_kosztcwupo_widok = rodzaj_paliwa_kosztcwuprzed_widok
		kosztcwupo = kosztcwuprzed
		jednostka_paliwa_kosztcwupo = jednostka_paliwa_kosztcwuprzed
	
	} else if( modernizacja_rodzaj_ogrzewania_CWU=="piec_gazowy_kondensacyjny_085" ){
		rodzaj_paliwa_kosztcwupo = "gaz_ziemny"
		rodzaj_paliwa_kosztcwupo_widok = "Gaz ziemny"
		kosztcwupo =2
		jednostka_paliwa_kosztcwupo = "zł/m<sup>3</sup>"
				
	} else if (modernizacja_rodzaj_ogrzewania_CWU=="podgrzewacz_elektryczny_096" || modernizacja_rodzaj_ogrzewania_CWU=="powietrzna_pompa_ciepla_260" ){
		rodzaj_paliwa_kosztcwupo = "energia_elektryczna"
		rodzaj_paliwa_kosztcwupo_widok = "Energia elektryczna"
		kosztcwupo =0.60
		jednostka_paliwa_kosztcwupo = "zł/kWh"

	} else if (modernizacja_rodzaj_ogrzewania_CWU=="wezel_cieplowniczy_098"  ){
		rodzaj_paliwa_kosztcwupo = "siec_cieplownicza"
		rodzaj_paliwa_kosztcwupo_widok = "Sieć ciepłownicza"
		kosztcwupo =50
		jednostka_paliwa_kosztcwupo = "zł/GJ"
	}	
		
		document.getElementById("rodzaj_paliwa_kosztcwupo").innerHTML = rodzaj_paliwa_kosztcwupo_widok
		document.getElementById("kosztcwupo").value = kosztcwupo
		document.getElementById("jednostka_paliwa_kosztcwupo").innerHTML = jednostka_paliwa_kosztcwupo	
			
		
}

function paliwo1(){

kosztcoprzed=document.getElementById("kosztcoprzed").value 
kosztcwuprzed=document.getElementById("kosztcwuprzed").value 
kosztcopo=document.getElementById("kosztcopo").value 
kosztcwupo=document.getElementById("kosztcwupo").value 

if (rodzaj_paliwa_kosztcwupo==rodzaj_paliwa_kosztcwuprzed){
	kosztcwupo=kosztcwuprzed
	document.getElementById("kosztcwupo").value = kosztcwupo
}

if (rodzaj_paliwa_kosztcopo==rodzaj_paliwa_kosztcoprzed){
	kosztcopo=kosztcoprzed
	document.getElementById("kosztcopo").value = kosztcopo
}

obliczenia();
}


function obliczenia(){

var	dscian=12
var	uokna=1.60
var	udrzwi=2.60
var	dpodlogi=5
var	ddachu=10


switch (wiek_budynku) {
	case "d1945":
	
	dscian=0
	uokna=5.1
	udrzwi=5.0
	dpodlogi=2
	ddachu=2
	
	break;
	case "d19461966":

	dscian=2
	uokna=3.5
	udrzwi=3.5
	dpodlogi=5
	ddachu=2

	break;
	case "d19671985":

	dscian=5
	uokna=2.6
	udrzwi=3.5
	dpodlogi=5
	ddachu=5
	
	break;
	case "d19862000":

	dscian=10
	uokna=1.8
	udrzwi=3.5
	dpodlogi=5
	ddachu=5
	
	break;
	case "d20012008":

	dscian=12
	uokna=1.6
	udrzwi=2.6
	dpodlogi=5
	ddachu=10
	
	break;
	case "po2009":

	dscian=15
	uokna=1.6
	udrzwi=2.6
	dpodlogi=5
	ddachu=15
	
	break;
}

//obliczenia dotyczące u ściany, podłogi, dachu

var Powierzchnia_scian_automatyczna = Math.sqrt(powierzchnia_budynku)*4*2.6;
var Powierzchnia_okien_automatyczna = Math.round((0.25*Powierzchnia_scian_automatyczna)*10)/10;
var Powierzchnia_drzwi_automatyczna = 2.2; 
var Powierzchnia_podlogi_automatyczna = powierzchnia_budynku;
var kubatura_ogrzewana_automatyczna
var Powierzchnia_dachu_automatyczna

var grubosc_dachu 


switch (rodzaj_poddasza) {
	case "nieogrzewany":
	
	kubatura_ogrzewana_automatyczna=powierzchnia_budynku*2.6
	Powierzchnia_dachu_automatyczna=powierzchnia_budynku
	grubosc_dachu = 0.05
	
	break;
	case "ogrzewany":
	
	kubatura_ogrzewana_automatyczna=powierzchnia_budynku*2.6+Math.sqrt(powierzchnia_budynku)*0.21*Math.sqrt(powierzchnia_budynku)
	Powierzchnia_dachu_automatyczna=powierzchnia_budynku*1.3
	grubosc_dachu = 0.15

	break;	
}

var sprawnosc_wytwarzania_co

switch (rodzaj_ogrzewania_CO) {
	case "stary_piec_kaflowy_025":
	
	sprawnosc_wytwarzania_co = 0.25
		
	break;
	case "stary_kominek_040":
	sprawnosc_wytwarzania_co =0.4
	break;	
		case "stary_piec_weglowy_060":
	sprawnosc_wytwarzania_co =	0.6
	break;	
		case "stary_piec_weglowy_065":
	sprawnosc_wytwarzania_co =	0.65
	break;	
		case "nowy_piec_weglowy_082":
	sprawnosc_wytwarzania_co =	0.82
	break;	
		case "stary_kociol_biomasa_070":
	sprawnosc_wytwarzania_co =	0.7
	break;	
		case "nowy_kociol_biomasa_85":
	sprawnosc_wytwarzania_co =	0.85
	break;	
		case "kominek_plaszcz_wodny_070":
	sprawnosc_wytwarzania_co =	0.7
	break;	
		case "elektryczne_99":
	sprawnosc_wytwarzania_co =0.99
	break;	
		case "piec_olejowy_084":
	sprawnosc_wytwarzania_co =0.84
	break;	
		case "piec_gazkowy_087":
	sprawnosc_wytwarzania_co =	0.87
	break;	
		case "piec_gazkowy_094":
	sprawnosc_wytwarzania_co =	0.94
	break;	
		case "wezel_cieplowniczy_098":
	sprawnosc_wytwarzania_co =	0.98
	break;	
		case "powietrzna_pompa_ciepla_300":
	sprawnosc_wytwarzania_co =	3.00
	break;	
		case "gazowa_pompa_ciepla_160":
	sprawnosc_wytwarzania_co =	1.6
	break;	
		case "gruntowa_pompa_ciepla_400":
	sprawnosc_wytwarzania_co =	4.0
	break;	
}	

var	sprawnosc_przesylu_i_regulacji_co

	switch (rodzaj_instalacji_ogrzewania_CO) {
	case "miejscowe_elektryczne_091":
	
	sprawnosc_przesylu_i_regulacji_co=0.91
	
	break;
	case "kaflowe_kominek_070":
	sprawnosc_przesylu_i_regulacji_co=0.7
	break;
	case "grzejniki_centralna_077":
	sprawnosc_przesylu_i_regulacji_co=0.77
	break;
	case "grzejniki_miejscowe_093":
	sprawnosc_przesylu_i_regulacji_co=0.93
	break;
	case "podlogowe_centralna_076":
	sprawnosc_przesylu_i_regulacji_co=0.76
	break;
	case "podlogowe_miejscowe_089":
	sprawnosc_przesylu_i_regulacji_co=0.89
	break;
	}	

var sprawnosc_akumulacji_ciepla	
	
	switch (zbiornik_akumulacyjny) {
	case "nie_ma_zbiornika":
	
	sprawnosc_akumulacji_ciepla=1
	
	break;	
	case "jest_zbiornik":
	
	sprawnosc_akumulacji_ciepla=0.9
	
	break;		
	}

var	sprawnosc_wytwarzania_cwu
	
	
	switch (rodzaj_ogrzewania_CWU) {
	case "piec_gazowy_bojler_040":	
	sprawnosc_wytwarzania_cwu =0.4	
	break;	
	case "piec_gazowy_2000_065":
	sprawnosc_wytwarzania_cwu =0.65
	break;	
	case "piec_gazowy_niekondensacyjny_083":
	sprawnosc_wytwarzania_cwu =0.83
	break;	
	case "piec_gazowy_kondensacyjny_085":
	sprawnosc_wytwarzania_cwu =0.85
	break;	
	case "podgrzewacz_elektryczny_096":
	sprawnosc_wytwarzania_cwu =0.96
	break;	
	case "powietrzna_pompa_ciepla_260":
	sprawnosc_wytwarzania_cwu =2.6
	break;	
	case "wezel_cieplowniczy_098":
	sprawnosc_wytwarzania_cwu =0.98
	break;	
	}	


var	sprawnosc_przesylu_i_regulacji_cwu

	switch (rodzaj_instalacji_ogrzewania_CO) {
	case "miejscowe_elektryczne_091":
	
	sprawnosc_przesylu_i_regulacji_cwu=1
	
	break;
	case "kaflowe_kominek_070":
	sprawnosc_przesylu_i_regulacji_cwu=1
	break;
	case "grzejniki_centralna_077":
	sprawnosc_przesylu_i_regulacji_cwu=0.77
	break;
	case "grzejniki_miejscowe_093":
	sprawnosc_przesylu_i_regulacji_cwu=0.93
	break;
	case "podlogowe_centralna_076":
	sprawnosc_przesylu_i_regulacji_cwu=0.76
	break;
	case "podlogowe_miejscowe_089":
	sprawnosc_przesylu_i_regulacji_cwu=0.89
	break;
	}	
	
var wsk_wentylacji_przed	
	
	switch (rodzaj_wentylacji) {
	case "grawitacyjna":
	
	wsk_wentylacji_przed = 1;
	
	break;	
	case "mechaniczna60":
	
	wsk_wentylacji_przed = 0.49;
	
	break;	
	case "mechaniczna85":
	
	wsk_wentylacji_przed = 0.28;
	
	break;	
	}

var	modernizacja_uokna
var koszt_modernizacja_uokna
	
	switch (wymiana_okien) {
	case "wymienic_okna":
	
	modernizacja_uokna = 0.9
	koszt_modernizacja_uokna = Powierzchnia_okien_automatyczna*700
	break;
	case "nie_wymienic_okna":
	modernizacja_uokna = uokna
	koszt_modernizacja_uokna = 0
	
	break;	
	}

var modernizacja_dscian	
var koszt_modernizacja_dscian
	
	switch (ocieplenie_scian) {
	case "ocieplenie_scian":
	
	modernizacja_dscian	= 20
	koszt_modernizacja_dscian = Powierzchnia_scian_automatyczna*160
	
	break;
	case "nie_ocieplenie_scian":
	
	modernizacja_dscian = dscian
	koszt_modernizacja_dscian = 0
	
	break;	
	}

var modernizacja_ddachu	
var modernizacja_ddachu1	
var koszt_modernizacja_ddachu
	
	switch (ocieplenie_dachu) {
	case "ocieplenie_dachu":
	
	modernizacja_ddachu1 = 20
	koszt_modernizacja_ddachu = Powierzchnia_dachu_automatyczna*80
	koszt_modernizacja_poddasze = 0
	modernizacja_ddachu=0
	break;
	case "nie_ocieplenie_dachu":
	
	modernizacja_ddachu = ddachu
	modernizacja_ddachu1 = 0
	koszt_modernizacja_ddachu = 0
	
	break;	
	}

var koszt_modernizacja_poddasze

if (ocieplenie_dachu=="nie_ocieplenie_dachu")
{	
	switch (ocieplenie_poddasze) {
	case "ocieplenie_poddasze":
	
	modernizacja_ddachu	= 20
	koszt_modernizacja_poddasze = Powierzchnia_dachu_automatyczna*40

	
	break;
	case "nie_ocieplenie_poddasze":
	
	modernizacja_ddachu	= ddachu	
	koszt_modernizacja_poddasze = 0
	
	break;	
	}

}	
	
var modernizacja_udrzwi
var koszt_modernizacja_udrzwi
	
	switch (wymiana_drzwi) {
	case "wymiana_drzwi":
	
	modernizacja_udrzwi = 1.3
	koszt_modernizacja_udrzwi = Powierzchnia_drzwi_automatyczna*2000
	break;
	case "nie_wymiana_drzwi":
	
	modernizacja_udrzwi = udrzwi
	koszt_modernizacja_udrzwi = 0
	break;	
	}

var modernizacja_dpodlogi
var koszt_modernizacja_dpodlogi	
	
	switch (ocieplenie_podlogi) {
	case "ocieplenie_podlogi":
	
	modernizacja_dpodlogi = 10
	koszt_modernizacja_dpodlogi = Powierzchnia_podlogi_automatyczna * 70
	break;
	case "nie_ocieplenie_podlogi":
	
	modernizacja_dpodlogi = dpodlogi
	koszt_modernizacja_dpodlogi = 0
	break;	
	}

var modernizacja_wsp_wentylacji
var koszt_modernizacja_wsp_wentylacji
	
	switch (wymiana_rodzaju_wentylacji) {
	case "nie_wymiana_rodzaju_wentylacji":
	
	modernizacja_wsp_wentylacji = wsk_wentylacji_przed
	koszt_modernizacja_wsp_wentylacji = 0
	
	break;
	case "mechaniczna_60":
	
	modernizacja_wsp_wentylacji = 0.49
	koszt_modernizacja_wsp_wentylacji = 20000
	
	break;	
	case "mechaniczna_85":
	
	modernizacja_wsp_wentylacji = 0.28
	koszt_modernizacja_wsp_wentylacji = 30000
	break;	
	}

var modernizacja_sprawnosc_wytwarzania_co
var koszt_modernizacja_rodzaj_ogrzewania_CO	
	
	switch (modernizacja_rodzaj_ogrzewania_CO) {
	case "nie_wymiana_rodzaju_zrodla_ogrzewania":
	
	modernizacja_sprawnosc_wytwarzania_co = sprawnosc_wytwarzania_co	
	koszt_modernizacja_rodzaj_ogrzewania_CO	=0 
	break;
	case "nowy_piec_weglowy_082":
	modernizacja_sprawnosc_wytwarzania_co = 0.82
	koszt_modernizacja_rodzaj_ogrzewania_CO	= 5000
	break;
	case "nowy_kociol_biomasa_85":
	modernizacja_sprawnosc_wytwarzania_co =0.85
	koszt_modernizacja_rodzaj_ogrzewania_CO	= 10000
	break;
	case "kominek_plaszcz_wodny_070":
	modernizacja_sprawnosc_wytwarzania_co =0.70
	koszt_modernizacja_rodzaj_ogrzewania_CO	= 10000
	break;
	case "elektryczne_99":
	modernizacja_sprawnosc_wytwarzania_co =0.99
	koszt_modernizacja_rodzaj_ogrzewania_CO	= 1500
	break;
	case "piec_olejowy_084":
	modernizacja_sprawnosc_wytwarzania_co =0.84
	koszt_modernizacja_rodzaj_ogrzewania_CO	= 5000
	break;
	case "piec_gazowy_094":
	modernizacja_sprawnosc_wytwarzania_co =0.94
	koszt_modernizacja_rodzaj_ogrzewania_CO	= 6000
	break;
	case "wezel_cieplowniczy_098":
	modernizacja_sprawnosc_wytwarzania_co = 0.98
	koszt_modernizacja_rodzaj_ogrzewania_CO	= 15000
	break;	
	case "powietrzna_pompa_ciepla_300":
	modernizacja_sprawnosc_wytwarzania_co = 3.00
	koszt_modernizacja_rodzaj_ogrzewania_CO	=28000
	break;	
	case "gazowa_pompa_ciepla_160":
	modernizacja_sprawnosc_wytwarzania_co = 1.6
	koszt_modernizacja_rodzaj_ogrzewania_CO	=27500
	break;	
	case "gruntowa_pompa_ciepla_poziomy_400":
	modernizacja_sprawnosc_wytwarzania_co = 4.00
	koszt_modernizacja_rodzaj_ogrzewania_CO	= 35000
	break;		
	case "gruntowa_pompa_ciepla_pionowy_400":
	modernizacja_sprawnosc_wytwarzania_co = 4.00
	koszt_modernizacja_rodzaj_ogrzewania_CO	= 45000
	break;
	}

var	modernizacja_sprawnosc_przesylu_i_regulacji_co
var koszt_modernizacja_rodzaj_instalacji_ogrzewania_CO
	
	switch (modernizacja_rodzaj_instalacji_ogrzewania_CO) {
	case "nie_modernizacja_rodzaj_instalacji_ogrzewania_CO":
	
	modernizacja_sprawnosc_przesylu_i_regulacji_co = sprawnosc_przesylu_i_regulacji_co
	koszt_modernizacja_rodzaj_instalacji_ogrzewania_CO = 0
	
	break;
	case "grzejniki_centralna_077":
	modernizacja_sprawnosc_przesylu_i_regulacji_co =0.77
	koszt_modernizacja_rodzaj_instalacji_ogrzewania_CO = Powierzchnia_podlogi_automatyczna *140
	break;
	case "grzejniki_miejscowe_093":
	modernizacja_sprawnosc_przesylu_i_regulacji_co =0.93
	
	if (rodzaj_instalacji_ogrzewania_CO=="grzejniki_centralna_077"){
		
		koszt_modernizacja_rodzaj_instalacji_ogrzewania_CO = 500;
	}else{
		
	koszt_modernizacja_rodzaj_instalacji_ogrzewania_CO = Powierzchnia_podlogi_automatyczna *140+500;
	}
	

	break;
	case "podlogowe_centralna_076":
	modernizacja_sprawnosc_przesylu_i_regulacji_co =0.76
	koszt_modernizacja_rodzaj_instalacji_ogrzewania_CO = Powierzchnia_podlogi_automatyczna *160
	break;
	case "podlogowe_miejscowe_089":
	modernizacja_sprawnosc_przesylu_i_regulacji_co =0.89
	
	
	if (rodzaj_instalacji_ogrzewania_CO=="podlogowe_centralna_076" ){
		
		koszt_modernizacja_rodzaj_instalacji_ogrzewania_CO = 1500
		
	}else {
		
		koszt_modernizacja_rodzaj_instalacji_ogrzewania_CO = Powierzchnia_podlogi_automatyczna *160+1500
	}
		
	
	
	break;
	}

var	modernizacja_sprawnosc_wytwarzania_cwu
var koszt_modernizacja_rodzaj_ogrzewania_CWU
	
	switch (modernizacja_rodzaj_ogrzewania_CWU) {
	case "nie_modernizacja_rodzaj_instalacji__CWU":
	
	modernizacja_sprawnosc_wytwarzania_cwu = sprawnosc_wytwarzania_cwu
	koszt_modernizacja_rodzaj_ogrzewania_CWU = 0
	break;
	case "piec_gazowy_kondensacyjny_085":
	modernizacja_sprawnosc_wytwarzania_cwu = 0.85
	koszt_modernizacja_rodzaj_ogrzewania_CWU =5000
	break;	
	case "podgrzewacz_elektryczny_096":
	modernizacja_sprawnosc_wytwarzania_cwu = 0.96
	koszt_modernizacja_rodzaj_ogrzewania_CWU =1500
	break;
	case "powietrzna_pompa_ciepla_260":
	modernizacja_sprawnosc_wytwarzania_cwu = 2.60
	koszt_modernizacja_rodzaj_ogrzewania_CWU =2800
	break;
	case "wezel_cieplowniczy_098":
	modernizacja_sprawnosc_wytwarzania_cwu = 0.98
	koszt_modernizacja_rodzaj_ogrzewania_CWU =1500
	break;
	}

	var	modernizacja_sprawnosc_przesylu_i_regulacji_cwu

	switch (modernizacja_rodzaj_instalacji_ogrzewania_CO) {
	case "miejscowe_elektryczne_091":
	
	modernizacja_sprawnosc_przesylu_i_regulacji_cwu=1
	
	break;
	case "kaflowe_kominek_070":
	modernizacja_sprawnosc_przesylu_i_regulacji_cwu=1
	break;
	case "grzejniki_centralna_077":
	modernizacja_sprawnosc_przesylu_i_regulacji_cwu=0.77
	break;
	case "grzejniki_miejscowe_093":
	modernizacja_sprawnosc_przesylu_i_regulacji_cwu=0.93
	break;
	case "podlogowe_centralna_076":
	modernizacja_sprawnosc_przesylu_i_regulacji_cwu=0.76
	break;
	case "podlogowe_miejscowe_089":
	modernizacja_sprawnosc_przesylu_i_regulacji_cwu=0.89
	break;
	case "nie_modernizacja_rodzaj_instalacji_ogrzewania_CO":
	modernizacja_sprawnosc_przesylu_i_regulacji_cwu=sprawnosc_przesylu_i_regulacji_cwu
	break;
	}	
	
	
var obliczeniowy_kosztcoprzed 
	
	switch (rodzaj_paliwa_kosztcoprzed) {
	case "wegiel":
	
	obliczeniowy_kosztcoprzed = kosztcoprzed * 0.144
	wsp_CO2_coprzed = 0.000342
	break;
	case "drewno":
	obliczeniowy_kosztcoprzed =kosztcoprzed * 0.17
	wsp_CO2_coprzed = 0.000403
	break;		
	case "energia_elektryczna":
	obliczeniowy_kosztcoprzed =kosztcoprzed * 1 
	wsp_CO2_coprzed = 0.000698
	break;	
	case "olej_opalowy":
	obliczeniowy_kosztcoprzed =kosztcoprzed * 0.09
	wsp_CO2_coprzed = 0.000275
	break;	
	case "siec_cieplownicza":
	obliczeniowy_kosztcoprzed =kosztcoprzed /278
	wsp_CO2_coprzed = 0.000342
	break;	
	case "gaz_ziemny":
	obliczeniowy_kosztcoprzed =kosztcoprzed * 0.1
	wsp_CO2_coprzed = 0.000198
	break;	
	}

var obliczeniowy_kosztcwuprzed 
	
	switch (rodzaj_paliwa_kosztcwuprzed) {
	case "gaz_ziemny":	
	obliczeniowy_kosztcwuprzed = kosztcwuprzed * 0.1
	wsp_CO2_cwuprzed = 0.000198
	break;
	case "energia_elektryczna":	
	obliczeniowy_kosztcwuprzed = kosztcwuprzed * 1
	wsp_CO2_cwuprzed = 0.000698
	break;		
	case "siec_cieplownicza":	
	obliczeniowy_kosztcwuprzed = kosztcwuprzed /278
	wsp_CO2_cwuprzed = 0.000342
	break;	
	}
	
var obliczeniowy_kosztcopo
	
	switch (rodzaj_paliwa_kosztcopo) {
	case "wegiel":	
	obliczeniowy_kosztcopo = kosztcopo * 0.144
	wsp_CO2_copo = 0.000342
	break;
	case "drewno":	
	obliczeniowy_kosztcopo = kosztcopo * 0.17
	wsp_CO2_copo = 0.000403
	break;		
	case "energia_elektryczna":	
	obliczeniowy_kosztcopo = kosztcopo * 1
	wsp_CO2_copo = 0.000698
	break;	
	case "olej_opalowy":	
	obliczeniowy_kosztcopo = kosztcopo * 0.09
	wsp_CO2_copo = 0.000275
	break;	
	case "siec_cieplownicza":
	obliczeniowy_kosztcopo = kosztcopo /278
	wsp_CO2_copo = 0.000342
	break;	
	case "gaz_ziemny":	
	obliczeniowy_kosztcopo = kosztcopo * 0.10
	wsp_CO2_copo = 0.000198
	break;	
	}
	
var obliczeniowy_kosztcwupo
	
	switch (rodzaj_paliwa_kosztcwupo) {
	case "gaz_ziemny":
	obliczeniowy_kosztcwupo = kosztcwupo * 0.1
	wsp_CO2_cwupo = 0.000198
	break;
	case "energia_elektryczna":	
	obliczeniowy_kosztcwupo = kosztcwupo * 1
	wsp_CO2_cwupo = 0.000698	
	break;	
	case "siec_cieplownicza":
	obliczeniowy_kosztcwupo = kosztcwupo /278
	wsp_CO2_cwupo = 0.000342
	break;		
	}

	var lambdastyropianu = 0.04;
	var lambdawelny = 0.035;
	var lambdascianygolej = 0.35;
	var lambdabeton = 0.35;
	var gruboscscianygolej = 0.2;
	var temperaturasrednioroczna = 4.2;
	var Ldni = 210;
	
	var Rsisciany = 0.13;
	var Rsesciany = 0.04;
	var Rsepodlogi = 0.17;
	var Rsipodlogi = 0.04;
	var Rsedachu = 0.1;
	var Rsidachu = 0.04;
	
//obliczenia przed modernizacja

var gruboscstyropianusciany = dscian/100

	Rscianygolej = gruboscscianygolej/lambdascianygolej;
	Rsciany = Rscianygolej+(gruboscstyropianusciany/lambdastyropianu)+Rsisciany+Rsesciany;
	Usciany=(1/Rsciany)+0.05;

	temperaturawewnetrzna = 20	
	stopniodni = Ldni*(temperaturawewnetrzna-temperaturasrednioroczna);	
	
	Qsciany = (Powierzchnia_scian_automatyczna*stopniodni*Usciany*24)/1000;	
	Qokna = (Powierzchnia_okien_automatyczna*stopniodni*uokna*24)/1000;	
	Qdrzwi = (Powierzchnia_drzwi_automatyczna*stopniodni*udrzwi*24)/1000;

		
var gruboscwelnydach = ddachu/100
	
	grubosc_dachu=grubosc_dachu/100	
	R_dachu = grubosc_dachu/lambdascianygolej;	
	Udachu = 1/((gruboscwelnydach/lambdawelny)+Rsedachu+Rsidachu+R_dachu+0.8)+0.05;	
	Qdachu=(Powierzchnia_dachu_automatyczna*stopniodni*Udachu*24)/1000;
	
var gruboscstyropianpodloga=dpodlogi/100
	
	Rpodlogi =  gruboscscianygolej/lambdabeton;
	
	Rpodloginowe = Rpodlogi+(gruboscstyropianpodloga/lambdastyropianu)+Rsipodlogi+Rsepodlogi;
	Upodloginowe = (1/Rpodloginowe);
	Uekwiwalent =-0.1368*Upodloginowe*Upodloginowe+Upodloginowe*0.5431+0.05

	Qpodlogi=(1.45*stopniodni*Powierzchnia_podlogi_automatyczna*Uekwiwalent*24)/1000;

	
var kubaturaautomatyczna = kubatura_ogrzewana_automatyczna

	n=0.50;
	ropow=1.2;
	
	Qwentylacji = stopniodni*kubaturaautomatyczna*ropow*n*wsk_wentylacji_przed*24/(1*3600);

	EUogrzewania = Qwentylacji+Qpodlogi+Qdachu+Qdrzwi+Qokna+Qsciany

	cosprawnoscwykorzystaniaciepla = 0.96;	
	CO_sprawnosc =sprawnosc_wytwarzania_co*sprawnosc_przesylu_i_regulacji_co*cosprawnoscwykorzystaniaciepla*sprawnosc_akumulacji_ciepla
	CWU_sprawnosc = sprawnosc_wytwarzania_cwu*sprawnosc_przesylu_i_regulacji_cwu*cosprawnoscwykorzystaniaciepla*sprawnosc_akumulacji_ciepla

		
	
var Vdobowe = dobowe_zuzycie_wody
		
	var cw = 4.19;
	var rowody = 1000;
	var twodywyjscie = 45;
	var twodywejscie = 10;
	var tuzytkowania = 365;	
	
	QwodaEu = liczba_uzytkownikow*0.000277*Vdobowe*cw*rowody*(twodywyjscie-twodywejscie)*tuzytkowania/1000;
	EK_cwuwoda = QwodaEu/CWU_sprawnosc;
	
	EK_cwuwoda=Math.round((EK_cwuwoda)*100)/100;
	
	var qint = 6.8;
	var tmwdomu = 2400;
	
	var ci =0.7;
	var li = 1000; 
	var wspzacienienia = 0.95;
	var gg = 0.75;
	
	wewzyskiciepla = qint*tmwdomu*powierzchnia_budynku/1000;
		
	solarnezyskiciepla = ci*li*Powierzchnia_okien_automatyczna*wspzacienienia*gg*(Ldni/365);	

	EK_ogrzewania=(EUogrzewania-wewzyskiciepla-solarnezyskiciepla)/CO_sprawnosc
	
	EK_ogrzewania=Math.round((EK_ogrzewania)*100)/100;
	
	EK_cwuwoda_GJ=EK_cwuwoda*0.0036
	EK_ogrzewania_GJ=EK_ogrzewania*0.0036


//po modernizacji	

var ngruboscstyropianusciany = modernizacja_dscian/100

	nRscianygolej = gruboscscianygolej/lambdascianygolej;
	nRsciany = nRscianygolej+(ngruboscstyropianusciany/lambdastyropianu)+Rsisciany+Rsesciany;
	nUsciany=(1/nRsciany)+0.05;

	nQsciany = (Powierzchnia_scian_automatyczna*stopniodni*nUsciany*24)/1000;	
	nQokna = (Powierzchnia_okien_automatyczna*stopniodni*modernizacja_uokna*24)/1000;	
	nQdrzwi = (Powierzchnia_drzwi_automatyczna*stopniodni*modernizacja_udrzwi*24)/1000;
	
var ngruboscwelnydach = (modernizacja_ddachu+modernizacja_ddachu1)/100
	
	grubosc_dachu=grubosc_dachu
	nR_dachu = grubosc_dachu/lambdascianygolej;	
	nUdachu = 1/((ngruboscwelnydach/lambdawelny)+Rsedachu+Rsidachu+nR_dachu+0.8)+0.05;	
	nQdachu=(Powierzchnia_dachu_automatyczna*stopniodni*nUdachu*24)/1000;

		
var ngruboscstyropianpodloga=modernizacja_dpodlogi/100
	
	
	nRpodloginowe = Rpodlogi+(ngruboscstyropianpodloga/lambdastyropianu)+Rsipodlogi+Rsepodlogi;
	nUpodloginowe = (1/nRpodloginowe);
	nUekwiwalent =-0.1368*nUpodloginowe*nUpodloginowe+nUpodloginowe*0.5431+0.05

	nQpodlogi=(1.45*stopniodni*Powierzchnia_podlogi_automatyczna*nUekwiwalent*24)/1000;


	
var kubaturaautomatyczna = kubatura_ogrzewana_automatyczna

	n=0.50;
	ropow=1.2;
	
	nQwentylacji = stopniodni*kubaturaautomatyczna*ropow*n*modernizacja_wsp_wentylacji*24/(1*3600);
		
	nEUogrzewania = nQwentylacji + nQpodlogi + nQdachu + nQdrzwi + nQokna + nQsciany
		
	ncosprawnoscwykorzystaniaciepla = 0.96;	
	nCO_sprawnosc = modernizacja_sprawnosc_wytwarzania_co*modernizacja_sprawnosc_przesylu_i_regulacji_co*ncosprawnoscwykorzystaniaciepla*sprawnosc_akumulacji_ciepla
	nCWU_sprawnosc = modernizacja_sprawnosc_wytwarzania_cwu*modernizacja_sprawnosc_przesylu_i_regulacji_cwu*ncosprawnoscwykorzystaniaciepla*sprawnosc_akumulacji_ciepla
	
	
	nEK_cwuwoda = QwodaEu/nCWU_sprawnosc;
	
	nEK_cwuwoda=Math.round((nEK_cwuwoda)*100)/100;

	nEK_ogrzewania=(nEUogrzewania-wewzyskiciepla-solarnezyskiciepla)/nCO_sprawnosc
	
	nEK_ogrzewania=Math.round((nEK_ogrzewania)*100)/100;
	
	nEK_cwuwoda_GJ=nEK_cwuwoda*0.0036
	nEK_ogrzewania_GJ=nEK_ogrzewania*0.0036


	
	//wyniki
	
var zuzycie_energii_po_modernizacji 
var zuzycie_energii_przed_modernizacja 
var roznica_kosztow_ogrzewania

var calkowity_koszt_modernizacji
	calkowity_koszt_modernizacji = koszt_modernizacja_rodzaj_ogrzewania_CWU+koszt_modernizacja_rodzaj_instalacji_ogrzewania_CO+koszt_modernizacja_rodzaj_ogrzewania_CO+koszt_modernizacja_wsp_wentylacji+koszt_modernizacja_dpodlogi+koszt_modernizacja_udrzwi+koszt_modernizacja_poddasze+koszt_modernizacja_ddachu+koszt_modernizacja_dscian+koszt_modernizacja_uokna

	

var zuzycie_energii_co_przed_modernizacja=EK_ogrzewania
var zuzycie_energii_co_po_modernizacja=nEK_ogrzewania


var zuzycie_energii_cwu_przed_modernizacja=EK_cwuwoda
var zuzycie_energii_cwu_po_modernizacja=nEK_cwuwoda

var zuzycie_energii_co_przed_modernizacja_GJ=EK_ogrzewania_GJ
var zuzycie_energii_co_po_modernizacja_GJ=nEK_ogrzewania_GJ

var zuzycie_energii_cwu_przed_modernizacja_GJ=EK_cwuwoda_GJ
var zuzycie_energii_cwu_po_modernizacja_GJ=nEK_cwuwoda_GJ


zuzycie_energii_przed_modernizacja_GJ=zuzycie_energii_co_przed_modernizacja_GJ+zuzycie_energii_cwu_przed_modernizacja_GJ
zuzycie_energii_po_modernizacji_GJ=zuzycie_energii_co_po_modernizacja_GJ+zuzycie_energii_cwu_po_modernizacja_GJ




roznica_kosztow_ogrzewania=zuzycie_energii_co_przed_modernizacja*obliczeniowy_kosztcoprzed+zuzycie_energii_cwu_przed_modernizacja*obliczeniowy_kosztcwuprzed-zuzycie_energii_co_po_modernizacja*obliczeniowy_kosztcopo-zuzycie_energii_cwu_po_modernizacja*obliczeniowy_kosztcwupo

var redukcja_emisji_CO2

redukcja_emisji_CO2=wsp_CO2_coprzed*zuzycie_energii_co_przed_modernizacja-wsp_CO2_copo*zuzycie_energii_co_po_modernizacja+wsp_CO2_cwuprzed*zuzycie_energii_cwu_przed_modernizacja-wsp_CO2_cwupo*zuzycie_energii_cwu_po_modernizacja


var koszty_ogrzewania_przed
var koszty_ogrzewania_po

koszty_ogrzewania_przed = zuzycie_energii_co_przed_modernizacja*obliczeniowy_kosztcoprzed+zuzycie_energii_cwu_przed_modernizacja*obliczeniowy_kosztcwuprzed
koszty_ogrzewania_po = zuzycie_energii_co_po_modernizacja*obliczeniowy_kosztcopo+zuzycie_energii_cwu_po_modernizacja*obliczeniowy_kosztcwupo

okres_zwrotu_SPBT=calkowity_koszt_modernizacji/roznica_kosztow_ogrzewania
roznica_zuzycia_energii = zuzycie_energii_przed_modernizacja_GJ-zuzycie_energii_po_modernizacji_GJ

roznica_zuzycia_energii = Math.round((roznica_zuzycia_energii)*100)/100;


zuzycie_energii_po_modernizacji_kWh=zuzycie_energii_po_modernizacji_GJ*278/powierzchnia_budynku;
zuzycie_energii_przed_modernizacja_kWh=zuzycie_energii_przed_modernizacja_GJ*278/powierzchnia_budynku;

zuzycie_energii_po_modernizacji = Math.round((zuzycie_energii_po_modernizacji_kWh)*100)/100;
zuzycie_energii_przed_modernizacja = Math.round((zuzycie_energii_przed_modernizacja_kWh)*100)/100;

roznica_kosztow_ogrzewania = Math.round((roznica_kosztow_ogrzewania)*100)/100;
koszty_ogrzewania_po = Math.round((koszty_ogrzewania_po)*100)/100;
koszty_ogrzewania_przed = Math.round((koszty_ogrzewania_przed)*100)/100;


calkowity_koszt_modernizacji= Math.round((calkowity_koszt_modernizacji)*100)/100;
okres_zwrotu_SPBT= Math.round((okres_zwrotu_SPBT)*100)/100;
redukcja_emisji_CO2= Math.round((redukcja_emisji_CO2)*100)/100;


if (roznica_kosztow_ogrzewania<1){
	okres_zwrotu_SPBT=0
}


//wyniki

document.getElementById("roznica_zuzycia_energii").innerHTML = roznica_zuzycia_energii
document.getElementById("zuzycie_energii_po_modernizacji").innerHTML = zuzycie_energii_po_modernizacji
document.getElementById("zuzycie_energii_przed_modernizacja").innerHTML = zuzycie_energii_przed_modernizacja

document.getElementById("roznica_kosztow_ogrzewania").innerHTML = roznica_kosztow_ogrzewania
document.getElementById("koszty_ogrzewania_po").innerHTML = koszty_ogrzewania_po
document.getElementById("koszty_ogrzewania_przed").innerHTML = koszty_ogrzewania_przed

document.getElementById("calkowity_koszt_modernizacji").innerHTML = calkowity_koszt_modernizacji
document.getElementById("okres_zwrotu_SPBT").innerHTML = okres_zwrotu_SPBT
document.getElementById("redukcja_emisji_CO2").innerHTML = redukcja_emisji_CO2

}





