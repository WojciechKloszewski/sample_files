
function wczytaj(){

document.getElementById("1zuzwodyselect").innerHTML = '<label for="zuzwodyselect"></label><select id="zuzwodyselect" name="zuzwodyselect" ontouchend="wodazatwierdz()" onclick="zuzwodyselect()"><option value="niskie" selected>Niskie</option><option value="srednie">Średnie</option><option value="wysokie">Wysokie</option></select>';
	
document.getElementById("1rodzajdomu").innerHTML ='<label for="1rodzajdomu">Podaj orientacyjny wiek budynku lub okres w którym nastąpiła ostatnia głęboka modernizacja: </label><select id="1rodzajdomu" name="1rodzajdomu" onclick="rodzajdomu()" ontouchend="rodzajdomuzatwierdz()"><option value="przed1945">Dom niemodernizowany od co najmniej 1945</option><option value="19461966">Dom niemodernizowany od co najmniej 1946-1966 </option><option value="19671985">Dom niemodernizowany od co najmniej 1967-1985 </option><option value="19862000">Dom niemodernizowany od co najmniej 1986-2000 </option><option value="20012008" selected>Dom niemodernizowany od co najmniej 2001-2008 </option><option value="po2009">Dom niemodernizowany od ok 2009 </option></select>';

	
document.getElementById("1Adomu").innerHTML ='<label><input type="number" id="Adomu" name="Adomu" value="150" oninput="Adomu()"> m<sup>2</sup></label>';	
	
document.getElementById("1czystrychczydach").innerHTML ='<label for="czystrychczydach"></label><input type="checkbox" id="czystrychczydach" name="czystrychczydach" value="ogrzewanystrych" onclick="czystrychczydach()">';	


document.getElementById("1osob").innerHTML ='<label><input type="number" id="losob" name="losob" value="4"></label>';


document.getElementById("1zuzwody").innerHTML ='<label><input type="number" id="zuzwody" name="zuzwody" value="35"> dm<sup>3</sup></label>';	

	
document.getElementById("1rodzajco").innerHTML ='<label for="rodzajco">Rodzaj co:</label><select id="rodzajco" name="rodzajco" onclick="rodzajco()"  ontouchend="rodzajcoprzedzatwierdz()"><option value="copieckaflowy">Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" selected>Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option><option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option><option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option><option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';

document.getElementById("1rodzajinstalacjico").innerHTML ='<label for="rodzajinstalacjico">Rodzaj instalacji co: </label><select id="rodzajinstalacjico" name="rodzajinstalacjico"><option value="coprzesylgrzejnikibezregulacji" selected>Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja">Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji">Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>';

document.getElementById("1zbiornikco").innerHTML ='<label for="czyzbiornikco">Czy w budynku znajduje się zbiornik akumulacyjny ciepła? Jeśli tak, proszę zaznaczyć pole: </label><input type="checkbox" id="czyzbiornikco" name="czyzbiornikco" value="zbiornikco" >';
	
document.getElementById("1rodzajcwu").innerHTML = '<label for="rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="rodzajcwu" name="rodzajcwu"><option value="cwupiecstarygazowy">Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" selected>Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';	
	
document.getElementById("cobedziemodernizowane").innerHTML ='<input type="checkbox" id="modernizacjasciany" name="modernizacjasciany" value="modernizacjasciany" onclick="modernizacja()"><label for="modernizacjasciany"> Ocieplenie wszystkich ścian</label></br><input type="checkbox" id="modernizacjaokien" name="modernizacjaokien" value="modernizacjaokien" onclick="modernizacja()"><label for="modernizacjaokien"> Wymiana wszystkich okien </label></br><input type="checkbox" id="modernizacjadrzwi" name="modernizacjadrzwi" value="modernizacjadrzwi" onclick="modernizacja()"><label for="modernizacjadrzwi"> Wymiana wszystkich drzwi</label></br><input type="checkbox" id="modernizacjapodlogi" name="modernizacjapodlogi" value="modernizacjapodlogi" onclick="modernizacja()"><label for="modernizacjapodlogi"> Ocieplenie całej podłogi</label></br><input type="checkbox" id="modernizacjadachu" name="modernizacjadachu" value="modernizacjadachu" onclick="modernizacja()"><label for="modernizacjadachu"> Ocieplenie całej przegrody dachowej</label></br><input type="checkbox" id="modernizacjaco" name="modernizacjaco" value="modernizacjaco" onclick="modernizacjaco()" ><label for="modernizacjaco"> Zmiana źródła ciepła do ogrzewania domu</label></br><div style="margin-left: 25px;" id="2nrodzajco"><label for="21nieaktywnyrodzajco">Rodzaj co:</label><select id="21nieaktywnyrodzajco" name="21nieaktywnyrodzajco" disabled ><option value="copieckaflowy">Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" selected>Stary piec węglowy -aktywuj listę rozwijaną klikając pole checkbox  </option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select></div><div id="rodzajco1zatwierdz"></div><div style="margin-left: 25px;" id="2nrodzajinstalacjico"><label for="21nieaktywnyrodzajinstalacjico">Rodzaj instalacji co: </label><select id="21nieaktywnyrodzajinstalacjico" name="21nieaktywnyrodzajinstalacjico" disabled><option value="coprzesylgrzejnikibezregulacji">Ogrzewanie wodne, grzejniki, regulacja centralna -aktywuj listę rozwijaną klikając pole checkbox </option><option value="coprzesylgrzejnikizregulacja">Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji">Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select></div><div id="rodzajinstalacjico1zatwierdz"></div><div style="margin-left: 25px;" id="2nzbiornikco"> <label for="x">Czy w budynku znajduje się zbiornik akumulacyjny ciepła? -aktywuj pole klikając na checkbox  zmiana źródła ciepła</label><input type="checkbox" id="x" name="x" value="x" disabled></div>   <input type="checkbox" id="modernizacjacwu" name="modernizacjacwu" value="modernizacjacwu" onclick="modernizacjacwu()"> <label for="modernizacjacwu"> Zmiana źródła przygotowania ciepłej wody użytkowej</label></br><div style="margin-left: 25px;" id="2nrodzajcwu"><label for="21nieaktywnyrodzajcwu">Rodzaj źródła ciepła do przygotowania ciepłej wody użytkowej: </label><select    id="21nieaktywnyrodzajcwu" name="21nieaktywnyrodzajcwu" disabled><option value="cwupiecstarygazowy">Piec stary gazowy sprzed 1980 (bojler) η=0,40 </option><option value="cwustarygazowy2000" selected>Piec stary gazowy -aktywuj listę rozwijaną klikając pole checkbox ☐</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select></div><div id="rodzajinstalacjicwu1zatwierdz"></div><input type="checkbox" id="modernizacjawentylacji" name="modernizacjawentylacji" value="modernizacjawentylacji" onclick="modernizacjawentylacji()"><label for="modernizacjawentylacji"> Zmiana rodzaju wentylacji budynku</label></br><div style="margin-left: 25px;" id="1nieaktywnyrodzajwentylacji"><label for="1nrodzajwentylacji">Rodzaj wentylacji: </label><select id="1nrodzajwentylacji" name="1nrodzajwentylacji" disabled ><option value="wentylacjagrawitacyjna">Grawitacyjna-aktywuj listę rozwijaną klikając pole checkbox ☐ </option><option value="wentylacjamechaniczna60">Mechaniczna z rekuperacją 60%</option><option value="wentylacjamechaniczna85">Mechaniczna z rekuperacją 85%</option></select></div><div id="rodzajwentylacji1zatwierdz"></div>';

	
document.getElementById("1powscian").innerHTML ='<label> Powierzchnia ścian <input type="number" id="powscian" name="powscian" value="102"> m<sup>2</sup></label>';	

document.getElementById("1powokien").innerHTML ='<label> Powierzchnia okien <input type="number" id="powokien" name="powokien" step="0.1" value="31.9"> m<sup>2</sup></label>';

document.getElementById("1powdrzwi").innerHTML ='<label> Powierzchnia drzwi <input type="number" id="powdrzwi" name="powdrzwi" step="0.1" value="2.2"> m<sup>2</sup></label>';

document.getElementById("1powpodlogi").innerHTML ='<label> Powierzchnia podłogi <input type="number" id="powpodlogi" name="powpodlogi" value="150"> m<sup>2</sup></label>';

document.getElementById("1powdachu").innerHTML ='<label> Powierzchnia stropu pod nieogrzewanym poddaszem <input type="number" id="powdachu" name="powdachu" size="5" value="150"> m<sup>2</sup></label>';

document.getElementById("1Vdomu").innerHTML ='<label><input type="number" id="Vdomu" name="Vdomu" value="390"> m<sup>3</sup></label>';

document.getElementById("1tw").innerHTML ='<label><input type="number" id="tw" name="tw" value="20"> <sup>o</sup>C</label>';
	
document.getElementById("1dscian").innerHTML ='<label> Grubość docieplenia ścian zewnętrznych <input type="number" id="dscian" name="dscian" value="12"> cm </label>';	



document.getElementById("1rodzajokien").innerHTML ='<label for="rodzajokien">Rodzaj okien </label><select id="rodzajokien" name="rodzajokien" onclick= "rodzajokien()" ontouchend="rodzajokienzatwierdz()"><option value="oknadrewstare51">Stare nieszczelne okna drewniane</option><option value="oknadrewstare35">Stare szczelne okna drewniane szklone pojedynczo</option><option value="oknadrew26">Stare szczelne okna drewniane szklone podwójnie</option><option value="oknadrew20">Stare szczelne okna drewniane szklone potrójnie</option><option value="oknapcvstare16" selected>Stare szczelne okna PCV</option><option value="oknapcvnowe13">Nowe okna spełniające WT 2014</option><option value="oknapcvnowe11">Nowe okna spełniające WT 2017</option><option value="oknapcvnowe09">Nowe okna spełniające WT 2021</option></select>';

document.getElementById("1uokna").innerHTML ='<label> U okien <input type="number" id="uokna" name="uokna" step="0.1" value="1.6">W/(m<sup>2</sup>K)</label>';

document.getElementById("1rodzajdrzwi").innerHTML ='<label for="rodzajdrzwi">Rodzaj drzwi </label><select id="rodzajdrzwi" name="rodzajdrzwi" onclick="rodzajdrzwi()" ontouchend="rodzajdrzwizatwierdz()"><option value="drzwidrewstare50">Stare nieszczelne drzwi drewniane</option><option value="drzwidrewstare35">Stare szczelne drzwi drewniane</option><option value="drzwipcv26" selected>Stare szczelne drzwi PCV</option><option value="drzwipcvnowe17">Nowe drzwi spełniające WT 2014</option><option value="drzwipcvnowe15">Nowe drzwi spełniające WT 2017</option><option value="drzwipcvnowe13">Nowe drzwi spełniające WT 2021</option></select>';

document.getElementById("1udrzwi").innerHTML ='<label> U drzwi <input type="number" id="udrzwi" name="udrzwi" step="0.1" value="2.6"> W/(m<sup>2</sup>K)</label>';

document.getElementById("1upodlogi").innerHTML ='<label> Grubość docieplenia podłogi <input type="number" id="upodlogi" name="upodlogi" value="5"> cm </label>';

document.getElementById("1udachu").innerHTML ='<label> Grubość docieplenia stropu pod nieogrzewanym poddaszem <input type="number" id="udachu" name="udachu" value="10"> cm </label>';

document.getElementById("1rodzajwentylacji").innerHTML ='<label for="rodzajwentylacji">Rodzaj wentylacji: </label><select id="rodzajwentylacji" name="rodzajwentylacji"><option value="wentylacjagrawitacyjna" selected>Grawitacyjna</option><option value="wentylacjamechaniczna60">Mechaniczna z rekuperacją 60%</option><option value="wentylacjamechaniczna85">Mechaniczna z rekuperacją 85%</option></select>';




document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()" ontouchend="rodzajcopozatwierdz()"><option value="copieckaflowy">Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" selected>Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000" >Piec węglowy produkcji po 2000 η=0,82</option><option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option><option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option><option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option><option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';

document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co:</label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylgrzejnikibezregulacji">Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja">Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji">Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>';

document.getElementById("2zbiornikco").innerHTML ='<label for="pozbiornikco"> Czy w budynku będzie znajdować się zbiornik akumulacyjny ciepła? Jeśli tak, proszę zaznaczyć pole: </label><input type="checkbox" id="pozbiornikco" name="pozbiornikco" value="pozbiornikco" >';


document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła ciepła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy">Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" selected>Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';

document.getElementById("2rodzajwentylacji").innerHTML ='<label for="21rodzajwentylacji">Rodzaj wentylacji: </label><select id="21rodzajwentylacji" name="21rodzajwentylacji"><option value="wentylacjagrawitacyjna" selected>Grawitacyjna</option><option value="wentylacjamechaniczna60">Mechaniczna z rekuperacją 60%</option><option value="wentylacjamechaniczna85">Mechaniczna z rekuperacją 85%</option></select>';

document.getElementById("2dscian").innerHTML ='<label> Grubość docieplenia ścian zewnętrznych <input type="number" id="21dscian" name="21dscian" size="5" value="12"> cm </label>';

document.getElementById("2uokna").innerHTML ='<label> U okien <input type="number" id="21uokna" name="21uokna" step="0.1" value="1.6">W/(m<sup>2</sup>K)</label>';


document.getElementById("2udrzwi").innerHTML ='<label> U drzwi <input type="number" id="21udrzwi" name="21udrzwi" step="0.1" value="2.6"> W/(m<sup>2</sup>K)</label>';

document.getElementById("2upodlogi").innerHTML ='<label> Grubość docieplenia podłogi <input type="number" id="21upodlogi" name="21upodlogi" value="5"> cm </label>';



document.getElementById("2udachu").innerHTML ='<label> Grubość docieplenia stropu pod nieogrzewanym poddaszem <input type="number" id="21udachu" name="21udachu" value="10"> cm </label>';


document.getElementById("1nieaktywnyrodzajco").innerHTML ='<label for="nieaktywnyrodzajco"></label><select id="nieaktywnyrodzajco" name="nieaktywnyrodzajco" onclick="rodzajco1()" ontouchend="rodzajcozatwierdz()" ontouchend="rodzajcozatwierdz()"><option value="copieckaflowy">Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" selected>Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option><option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';

document.getElementById("1nieaktywnyrodzajinstalacjico").innerHTML ='<label for="nieaktywnyrodzajinstalacjico"></label><select id="nieaktywnyrodzajinstalacjico" name="nieaktywnyrodzajinstalacjico" onclick="rodzajconadole()" ontouchend="rodzajinstalacjicozatwierdz()"><option value="coprzesylgrzejnikibezregulacji">Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja">Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji">Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>';

document.getElementById("1nieaktywnyzbiornikco").innerHTML ='<label for="nieaktywnyczyzbiornikco"></label><input type="checkbox" id="nieaktywnyczyzbiornikco" name="nieaktywnyczyzbiornikco" value="zbiornikco" onclick="niekatywnyzbirnikco()">';

document.getElementById("1nieaktywnyrodzajcwu").innerHTML ='<label for="nieaktywnyrodzajcwu"></label><select id="nieaktywnyrodzajcwu" name="nieaktywnyrodzajcwu"  onclick="selectnieaktywnyrodzajcwu()" ontouchend="rodzajinstalacjicwuzatwierdz()"><option value="cwupiecstarygazowy">Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" selected>Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';

}

function selectnieaktywnyrodzajcwu(){	
	
	var rodzajcwu = document.getElementById("nieaktywnyrodzajcwu").value;	
	
	 if(rodzajcwu == "cwupiecstarygazowy"){
		 
      document.getElementById("1rodzajcwu").innerHTML ='<label for="rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="rodzajcwu" name="rodzajcwu"><option value="cwupiecstarygazowy" selected>Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';
	  
   }else if(rodzajcwu  == "cwustarygazowy2000"){
      document.getElementById("1rodzajcwu").innerHTML ='<label for="rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="rodzajcwu" name="rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" selected>Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';
   }else if(rodzajcwu  == "cwunowygazowy"){
      document.getElementById("1rodzajcwu").innerHTML ='<label for="rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="rodzajcwu" name="rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy" selected>Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';
   }else if(rodzajcwu  == "cwupiecgazowykondensacyjny"){
      document.getElementById("1rodzajcwu").innerHTML ='<label for="rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="rodzajcwu" name="rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" selected>Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';
   }else if(rodzajcwu  == "cwupodgrzewaczelektryczny"){
      document.getElementById("1rodzajcwu").innerHTML ='<label for="rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="rodzajcwu" name="rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny" selected>Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';
   }else if(rodzajcwu  == "cwupowietrznapompacieplacwu"){
      document.getElementById("1rodzajcwu").innerHTML ='<label for="rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="rodzajcwu" name="rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu" selected>Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';	
   }else if(rodzajcwu  == "cwugruntowapompaciepla"){
      document.getElementById("1rodzajcwu").innerHTML ='<label for="rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="rodzajcwu" name="rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla" selected>Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';
   }else if(rodzajcwu  == "cwugazowapompaciepla"){
      document.getElementById("1rodzajcwu").innerHTML ='<label for="rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="rodzajcwu" name="rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla" selected>Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';	
   }else if(rodzajcwu  == "cwuwezelcieplny"){
      document.getElementById("1rodzajcwu").innerHTML ='<label for="rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="rodzajcwu" name="rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny" selected>Węzeł ciełowniczy η=0,98</option></select>';	
   }

	
}

function zuzwodyselect(){
	
	var zuzwody = document.getElementById("zuzwodyselect").value;
	
	if(zuzwody == "niskie"){
	document.getElementById("1zuzwody").innerHTML = '<label><input type="number" id="zuzwody" name="zuzwody" value="35"> dm<sup>3</sup></label>';	
	}else if (zuzwody == "srednie"){
	document.getElementById("1zuzwody").innerHTML = '<label><input type="number" id="zuzwody" name="zuzwody" value="50"> dm<sup>3</sup></label>';		
	}else if (zuzwody == "wysokie"){
	document.getElementById("1zuzwody").innerHTML = '<label><input type="number" id="zuzwody" name="zuzwody" value="70"> dm<sup>3</sup></label>';		
	}
}

function selectzbiornikcopo(){
	
	if (document.getElementById("21nieaktywnyczyzbiornikco").checked == true) {
		document.getElementById("2zbiornikco").innerHTML = '<label for="pozbiornikco">Czy w budynku znajduje się zbiornik akumulacyjny ciepła? Jeśli tak, proszę zaznaczyć pole:</label><input type="checkbox" id="pozbiornikco" name="pozbiornikco" value="zbiornikco" checked>';
	}else{
		document.getElementById("2zbiornikco").innerHTML = '<label for="pozbiornikco">Czy w budynku znajduje się zbiornik akumulacyjny ciepła? Jeśli tak, proszę zaznaczyć pole:</label><input type="checkbox" id="pozbiornikco" name="pozbiornikco" value="zbiornikco">';
	}
}

function selectrodzajinstalacjico1(){
	
	var rodzajco = document.getElementById("21nieaktywnyrodzajco").value;


if(rodzajco == "copieckaflowy"){

	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()" ontouchend="rodzajcopozatwierdz()"><option value="copieckaflowy" selected>Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
	  
   }else if (rodzajco == "coweglowyprzed1980"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()" ontouchend="rodzajcopozatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" selected>Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "coweglowy19802000"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()" ontouchend="rodzajcopozatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000" selected>Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "coweglowy2000"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()" ontouchend="rodzajcopozatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000" selected>Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';   
   }else if (rodzajco == "cokociolnabiomasestary"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()" ontouchend="rodzajcopozatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary" selected>Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';  
   }else if (rodzajco == "cokociolnabiomasenowy"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()" ontouchend="rodzajcopozatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy" selected>Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';  
   }else if (rodzajco == "cokominekzplaszczem"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()" ontouchend="rodzajcopozatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem" selected>Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "cokominekzwykly"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()" ontouchend="rodzajcopozatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly" selected>Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "cogrzejnikelektryczny"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()" ontouchend="rodzajcopozatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny" selected>Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';  
   }else if (rodzajco == "copiecolejowy"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()" ontouchend="rodzajcopozatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy" selected>Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "costarypiecgazowy"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()" ontouchend="rodzajcopozatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy" selected>Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>'; 
   }else if (rodzajco == "copiecgazowykondensacyjny"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()" ontouchend="rodzajcopozatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" selected>Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "cogruntowapompaciepla"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()" ontouchend="rodzajcopozatwierdz()"><option value="copieckaflowy" selected>Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla" selected>Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';  
   }else if (rodzajco == "copowietrznapompaciepla"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()" ontouchend="rodzajcopozatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla" selected>Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "cogazowapompaciepla"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()" ontouchend="rodzajcopozatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla" selected>Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>'; 
   }else if (rodzajco == "cowezelciepla"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()" ontouchend="rodzajcopozatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla" selected>Węzeł ciepłowniczy (sieć) η=0,98</option></select>'; 
   }


rodzajco2();
}

function selectrodzajinstalacjico2(){
	
	var rodzajinstalacjico = document.getElementById("21nieaktywnyrodzajinstalacjico").value;
	var aprzedrodzajco = document.getElementById("21nieaktywnyrodzajco").value;

	
	
	if (aprzedrodzajco == "copieckaflowy") {     
	document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co: </label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylogrzewaniekominkowe">Ogrzewanie z pieca kaflowego lub kominka η=0,7</option></select>';  

	} else if (aprzedrodzajco == "cokominekzwykly") {     
	document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co:</label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylogrzewaniekominkowe">Ogrzewanie z pieca kaflowego lub kominka η=0,7</option></select>';  

	} 

	else if (aprzedrodzajco == "cogrzejnikelektryczny") {     
	document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co:</label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylogrzewanieelektryczne">Ogrzewanie elektryczne miejscowe η=0,91</option></select>';  
	
	} else {
		
		if (rodzajinstalacjico == "coprzesylgrzejnikibezregulacji"){
			
			document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co:</label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylgrzejnikibezregulacji" selected>Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja">Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji">Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>'; 
		}else if (rodzajinstalacjico == "coprzesylgrzejnikizregulacja"){
			document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co:</label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylgrzejnikibezregulacji" >Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja" selected>Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji">Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>'; 
		}else if (rodzajinstalacjico == "coprzesylpodlogabezregulacji"){
			document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co:</label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylgrzejnikibezregulacji" >Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja" >Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji" selected>Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>'; 
		} else if (rodzajinstalacjico == "coprzesylpodlogazregulacja"){
			document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co:</label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylgrzejnikibezregulacji" >Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja" >Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji" >Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja" selected>Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>';
		}	
	
	}
		
}

function niekatywnyzbirnikco(){
	
	if (document.getElementById("nieaktywnyczyzbiornikco").checked == true) {
		document.getElementById("1zbiornikco").innerHTML = '<label for="czyzbiornikco">Czy w budynku znajduje się zbiornik akumulacyjny ciepła? Jeśli tak, proszę zaznaczyć pole:</label><input type="checkbox" id="czyzbiornikco" name="czyzbiornikco" value="zbiornikco" checked>';
	}else{
		document.getElementById("1zbiornikco").innerHTML = '<label for="czyzbiornikco">Czy w budynku znajduje się zbiornik akumulacyjny ciepła? Jeśli tak, proszę zaznaczyć pole:</label><input type="checkbox" id="czyzbiornikco" name="czyzbiornikco" value="zbiornikco">';
	}
	
}


function rodzajdomu(){
	
	if (document.getElementById("1rodzajdomu").value == "przed1945") {

document.getElementById("1dscian").innerHTML ='<label> Grubość docieplenia ścian zewnętrznych <input type="number" id="dscian" name="dscian" value="0"> cm </label>';



document.getElementById("1rodzajokien").innerHTML ='<label for="rodzajokien">Rodzaj okien </label><select id="rodzajokien" name="rodzajokien" onclick="rodzajokien()" ontouchend="rodzajokienzatwierdz()"><option value="oknadrewstare51" selected>Stare nieszczelne okna drewniane</option><option value="oknadrewstare35">Stare szczelne okna drewniane szklone pojedynczo</option><option value="oknadrew26">Stare szczelne okna drewniane szklone podwójnie</option><option value="oknadrew20">Stare szczelne okna drewniane szklone potrójnie</option><option value="oknapcvstare16">Stare szczelne okna PCV</option><option value="oknapcvnowe13">Nowe okna spełniające WT 2014</option><option value="oknapcvnowe11">Nowe okna spełniające WT 2017</option><option value="oknapcvnowe09">Nowe okna spełniające WT 2021</option></select>';

	  
 document.getElementById("1uokna").innerHTML ='<label> U okien <input type="number" id="uokna" name="uokna" step="0.1" value="5.1"> W/(m<sup>2</sup>K)</label>';	  



document.getElementById("1rodzajdrzwi").innerHTML ='<label for="rodzajdrzwi">Rodzaj drzwi </label><select id="rodzajdrzwi" name="rodzajdrzwi" onclick="rodzajdrzwi()" ontouchend="rodzajdrzwizatwierdz()"><option value="drzwidrewstare50" selected>Stare nieszczelne drzwi drewniane</option><option value="drzwidrewstare35">Stare szczelne drzwi drewniane</option><option value="drzwipcv26">Stare szczelne drzwi PCV</option><option value="drzwipcvnowe17">Nowe drzwi spełniające WT 2014</option><option value="drzwipcvnowe15">Nowe drzwi spełniające WT 2017</option><option value="drzwipcvnowe13">Nowe drzwi spełniające WT 2021</option></select>';
	 
document.getElementById("1udrzwi").innerHTML ='<label> U drzwi <input type="number" id="udrzwi" name="udrzwi" step="0.1" value="5.0"> W/(m<sup>2</sup>K)</label>';	

document.getElementById("1upodlogi").innerHTML ='<label> Grubość docieplenia podłogi <input type="number" id="upodlogi" name="upodlogi" value="0"> cm</label>';	

document.getElementById("1udachu").innerHTML ='<label> Grubość docieplenia stropu pod nieogrzewanym poddaszem <input type="number" id="udachu" name="udachu" value="0"> cm </label>';

document.getElementById("2dscian").innerHTML ='<label> Grubość docieplenia ścian zewnętrznych <input type="number" id="21dscian" name="21dscian" value="0"> cm </label>';	

document.getElementById("2uokna").innerHTML ='<label> U okien <input type="number" id="21uokna" name="21uokna" step="0.1" value="5.1">W/(m<sup>2</sup>K)</label>';

document.getElementById("2udrzwi").innerHTML ='<label> U drzwi <input type="number" id="21udrzwi" name="21udrzwi" step="0.1" value="5.0"> W/(m<sup>2</sup>K)</label>';

document.getElementById("2upodlogi").innerHTML ='<label> Grubość docieplenia podłogi <input type="number" id="21upodlogi" name="21upodlogi" value="0"> cm </label>';

document.getElementById("2udachu").innerHTML ='<label> Grubość docieplenia stropu pod nieogrzewanym poddaszem <input type="number" id="21udachu" name="21udachu" value="0"> cm </label>';



}else if (document.getElementById("1rodzajdomu").value == "19461966"){
		
document.getElementById("1dscian").innerHTML ='<label> Grubość docieplenia ścian zewnętrznych <input type="number" id="dscian" name="dscian" value="0"> cm </label>';

document.getElementById("1rodzajokien").innerHTML ='<label for="rodzajokien">Rodzaj okien </label><select id="rodzajokien" name="rodzajokien" ontouchend="rodzajokienzatwierdz()" onclick="rodzajokien()"><option value="oknadrewstare51" >Stare nieszczelne okna drewniane</option><option value="oknadrewstare35" selected>Stare szczelne okna drewniane szklone pojedynczo</option><option value="oknadrew26">Stare szczelne okna drewniane szklone podwójnie</option><option value="oknadrew20">Stare szczelne okna drewniane szklone potrójnie</option><option value="oknapcvstare16">Stare szczelne okna PCV</option><option value="oknapcvnowe13">Nowe okna spełniające WT 2014</option><option value="oknapcvnowe11">Nowe okna spełniające WT 2017</option><option value="oknapcvnowe09">Nowe okna spełniające WT 2021</option></select>';

	  
 document.getElementById("1uokna").innerHTML ='<label> U okien <input type="number" id="uokna" name="uokna" step="0.1" value="3.5"> W/(m<sup>2</sup>K)</label>';	  

document.getElementById("1rodzajdrzwi").innerHTML ='<label for="rodzajdrzwi">Rodzaj drzwi </label><select id="rodzajdrzwi" name="rodzajdrzwi" onclick="rodzajdrzwi()" ontouchend="rodzajdrzwizatwierdz()" ><option value="drzwidrewstare50" >Stare nieszczelne drzwi drewniane</option><option value="drzwidrewstare35" selected>Stare szczelne drzwi drewniane</option><option value="drzwipcv26">Stare szczelne drzwi PCV</option><option value="drzwipcvnowe17">Nowe drzwi spełniające WT 2014</option><option value="drzwipcvnowe15">Nowe drzwi spełniające WT 2017</option><option value="drzwipcvnowe13">Nowe drzwi spełniające WT 2021</option></select>';
	 
document.getElementById("1udrzwi").innerHTML ='<label> U drzwi <input type="number" id="udrzwi" name="udrzwi" step="0.1"value="3.5"> W/(m<sup>2</sup>K)</label>';	

document.getElementById("1upodlogi").innerHTML ='<label> Grubość docieplenia podłogi <input type="number" id="upodlogi" name="upodlogi" value="0"> cm</label>';	

document.getElementById("1udachu").innerHTML ='<label> Grubość docieplenia stropu pod nieogrzewanym poddaszem <input type="number" id="udachu" name="udachu" value="1"> cm </label>';

document.getElementById("2dscian").innerHTML ='<label> Grubość docieplenia ścian zewnętrznych <input type="number" id="21dscian" name="21dscian" value="0"> cm </label>';	

document.getElementById("2uokna").innerHTML ='<label> U okien <input type="number" id="21uokna" name="21uokna" step="0.1" value="3.5">W/(m<sup>2</sup>K)</label>';

document.getElementById("2udrzwi").innerHTML ='<label> U drzwi <input type="number" id="21udrzwi" name="21udrzwi" step="0.1"  value="3.5"> W/(m<sup>2</sup>K)</label>';

document.getElementById("2upodlogi").innerHTML ='<label> Grubość docieplenia podłogi <input type="number" id="21upodlogi" name="21upodlogi"  value="0"> cm </label>';

document.getElementById("2udachu").innerHTML ='<label> Grubość docieplenia stropu pod nieogrzewanym poddaszem <input type="number" id="21udachu" name="21udachu" value="1"> cm </label>';
	
}


else if (document.getElementById("1rodzajdomu").value == "19671985"){
		
document.getElementById("1dscian").innerHTML ='<label> Grubość docieplenia ścian zewnętrznych <input type="number" id="dscian" name="dscian"  value="1"> cm </label>';


document.getElementById("1rodzajokien").innerHTML ='<label for="rodzajokien">Rodzaj okien </label><select id="rodzajokien" name="rodzajokien" onclick="rodzajokien()" ontouchend="rodzajokienzatwierdz()"><option value="oknadrewstare51" >Stare nieszczelne okna drewniane</option><option value="oknadrewstare35" >Stare szczelne okna drewniane szklone pojedynczo</option><option value="oknadrew26" selected>Stare szczelne okna drewniane szklone podwójnie</option><option value="oknadrew20">Stare szczelne okna drewniane szklone potrójnie</option><option value="oknapcvstare16">Stare szczelne okna PCV</option><option value="oknapcvnowe13">Nowe okna spełniające WT 2014</option><option value="oknapcvnowe11">Nowe okna spełniające WT 2017</option><option value="oknapcvnowe09">Nowe okna spełniające WT 2021</option></select>';

	  
 document.getElementById("1uokna").innerHTML ='<label> U okien <input type="number" id="uokna" name="uokna" step="0.1" value="2.6"> W/(m<sup>2</sup>K)</label>';	  

document.getElementById("1rodzajdrzwi").innerHTML ='<label for="rodzajdrzwi">Rodzaj drzwi </label><select id="rodzajdrzwi" name="rodzajdrzwi" onclick="rodzajdrzwi()" ontouchend="rodzajdrzwizatwierdz()"><option value="drzwidrewstare50" >Stare nieszczelne drzwi drewniane</option><option value="drzwidrewstare35" selected>Stare szczelne drzwi drewniane</option><option value="drzwipcv26">Stare szczelne drzwi PCV</option><option value="drzwipcvnowe17">Nowe drzwi spełniające WT 2014</option><option value="drzwipcvnowe15">Nowe drzwi spełniające WT 2017</option><option value="drzwipcvnowe13">Nowe drzwi spełniające WT 2021</option></select>';
	 
document.getElementById("1udrzwi").innerHTML ='<label> U drzwi <input type="number" id="udrzwi" name="udrzwi" step="0.1" value="3.5"> W/(m<sup>2</sup>K)</label>';	

document.getElementById("1upodlogi").innerHTML ='<label> Grubość docieplenia podłogi <input type="number" id="upodlogi" name="upodlogi" value="0"> cm</label>';	

document.getElementById("1udachu").innerHTML ='<label> Grubość docieplenia stropu pod nieogrzewanym poddaszem <input type="number" id="udachu" name="udachu" value="1"> cm </label>';

document.getElementById("2dscian").innerHTML ='<label> Grubość docieplenia ścian zewnętrznych <input type="number" id="21dscian" name="21dscian" value="1"> cm </label>';	

document.getElementById("2uokna").innerHTML ='<label> U okien <input type="number" id="21uokna" name="21uokna" step="0.1" value="2.6">W/(m<sup>2</sup>K)</label>';

document.getElementById("2udrzwi").innerHTML ='<label> U drzwi <input type="number" id="21udrzwi" name="21udrzwi" step="0.1" value="3.5"> W/(m<sup>2</sup>K)</label>';

document.getElementById("2upodlogi").innerHTML ='<label> Grubość docieplenia podłogi <input type="number" id="21upodlogi" name="21upodlogi" value="0"> cm </label>';

document.getElementById("2udachu").innerHTML ='<label> Grubość docieplenia stropu pod nieogrzewanym poddaszem <input type="number" id="21udachu" name="21udachu" value="1"> cm </label>';
	
}else if (document.getElementById("1rodzajdomu").value == "19862000"){
		
document.getElementById("1dscian").innerHTML ='<label> Grubość docieplenia ścian zewnętrznych <input type="number" id="dscian" name="dscian" value="7"> cm </label>';

document.getElementById("1rodzajokien").innerHTML ='<label for="rodzajokien">Rodzaj okien </label><select id="rodzajokien" name="rodzajokien" onclick="rodzajokien()" ontouchend="rodzajokienzatwierdz()"><option value="oknadrewstare51" >Stare nieszczelne okna drewniane</option><option value="oknadrewstare35" >Stare szczelne okna drewniane szklone pojedynczo</option><option value="oknadrew26" selected>Stare szczelne okna drewniane szklone podwójnie</option><option value="oknadrew20">Stare szczelne okna drewniane szklone potrójnie</option><option value="oknapcvstare16">Stare szczelne okna PCV</option><option value="oknapcvnowe13">Nowe okna spełniające WT 2014</option><option value="oknapcvnowe11">Nowe okna spełniające WT 2017</option><option value="oknapcvnowe09">Nowe okna spełniające WT 2021</option></select>';

	  
 document.getElementById("1uokna").innerHTML ='<label> U okien <input type="number" id="uokna" name="uokna" step="0.1" value="2.6"> W/(m<sup>2</sup>K)</label>';	  

document.getElementById("1rodzajdrzwi").innerHTML ='<label for="rodzajdrzwi">Rodzaj drzwi </label><select id="rodzajdrzwi" name="rodzajdrzwi" onclick="rodzajdrzwi()" ontouchend="rodzajdrzwizatwierdz()" ><option value="drzwidrewstare50" >Stare nieszczelne drzwi drewniane</option><option value="drzwidrewstare35" selected>Stare szczelne drzwi drewniane</option><option value="drzwipcv26">Stare szczelne drzwi PCV</option><option value="drzwipcvnowe17">Nowe drzwi spełniające WT 2014</option><option value="drzwipcvnowe15">Nowe drzwi spełniające WT 2017</option><option value="drzwipcvnowe13">Nowe drzwi spełniające WT 2021</option></select>';
	 
document.getElementById("1udrzwi").innerHTML ='<label> U drzwi <input type="number" id="udrzwi" name="udrzwi" step="0.1" value="3.5"> W/(m<sup>2</sup>K)</label>';	

document.getElementById("1upodlogi").innerHTML ='<label> Grubość docieplenia podłogi <input type="number" id="upodlogi" name="upodlogi" value="0"> cm</label>';	

document.getElementById("1udachu").innerHTML ='<label> Grubość docieplenia stropu pod nieogrzewanym poddaszem <input type="number" id="udachu" name="udachu" value="5"> cm </label>';

document.getElementById("2dscian").innerHTML ='<label> Grubość docieplenia ścian zewnętrznych <input type="number" id="21dscian" name="21dscian" value="7"> cm </label>';	

document.getElementById("2uokna").innerHTML ='<label> U okien <input type="number" id="21uokna" name="21uokna" step="0.1" value="2.6">W/(m<sup>2</sup>K)</label>';

document.getElementById("2udrzwi").innerHTML ='<label> U drzwi <input type="number" id="21udrzwi" name="21udrzwi" step="0.1" value="3.5"> W/(m<sup>2</sup>K)</label>';

document.getElementById("2upodlogi").innerHTML ='<label> Grubość docieplenia podłogi <input type="number" id="21upodlogi" name="21upodlogi" value="0"> cm </label>';

document.getElementById("2udachu").innerHTML ='<label> Grubość docieplenia stropu pod nieogrzewanym poddaszem <input type="number" id="21udachu" name="21udachu" value="5"> cm </label>';
	
}else if (document.getElementById("1rodzajdomu").value == "20012008"){
		
document.getElementById("1dscian").innerHTML ='<label> Grubość docieplenia ścian zewnętrznych <input type="number" id="dscian" name="dscian" value="12"> cm </label>';

document.getElementById("1rodzajokien").innerHTML ='<label for="rodzajokien">Rodzaj okien </label><select id="rodzajokien" name="rodzajokien" onclick="rodzajokien()" ontouchend="rodzajokienzatwierdz()" ><option value="oknadrewstare51" >Stare nieszczelne okna drewniane</option><option value="oknadrewstare35" >Stare szczelne okna drewniane szklone pojedynczo</option><option value="oknadrew26">Stare szczelne okna drewniane szklone podwójnie</option><option value="oknadrew20">Stare szczelne okna drewniane szklone potrójnie</option><option value="oknapcvstare16" selected>Stare szczelne okna PCV</option><option value="oknapcvnowe13">Nowe okna spełniające WT 2014</option><option value="oknapcvnowe11">Nowe okna spełniające WT 2017</option><option value="oknapcvnowe09">Nowe okna spełniające WT 2021</option></select>';

	  
 document.getElementById("1uokna").innerHTML ='<label> U okien <input type="number" id="uokna" name="uokna" step="0.1" value="1.6"> W/(m<sup>2</sup>K)</label>';	  

document.getElementById("1rodzajdrzwi").innerHTML ='<label for="rodzajdrzwi">Rodzaj drzwi </label><select id="rodzajdrzwi" name="rodzajdrzwi" onclick="rodzajdrzwi()" ontouchend="rodzajdrzwizatwierdz()"><option value="drzwidrewstare50" >Stare nieszczelne drzwi drewniane</option><option value="drzwidrewstare35" >Stare szczelne drzwi drewniane</option><option value="drzwipcv26" selected>Stare szczelne drzwi PCV</option><option value="drzwipcvnowe17">Nowe drzwi spełniające WT 2014</option><option value="drzwipcvnowe15">Nowe drzwi spełniające WT 2017</option><option value="drzwipcvnowe13">Nowe drzwi spełniające WT 2021</option></select>';
	 
document.getElementById("1udrzwi").innerHTML ='<label> U drzwi <input type="number" id="udrzwi" name="udrzwi" step="0.1" value="2.6"> W/(m<sup>2</sup>K)</label>';	

document.getElementById("1upodlogi").innerHTML ='<label> Grubość docieplenia podłogi <input type="number" id="upodlogi" name="upodlogi" value="5"> cm</label>';	

document.getElementById("1udachu").innerHTML ='<label> Grubość docieplenia stropu pod nieogrzewanym poddaszem <input type="number" id="udachu" name="udachu" value="10"> cm </label>';

document.getElementById("2dscian").innerHTML ='<label> Grubość docieplenia ścian zewnętrznych <input type="number" id="21dscian" name="21dscian" value="12"> cm </label>';	

document.getElementById("2uokna").innerHTML ='<label> U okien <input type="number" id="21uokna" name="21uokna" step="0.1" value="1.6">W/(m<sup>2</sup>K)</label>';

document.getElementById("2udrzwi").innerHTML ='<label> U drzwi <input type="number" id="21udrzwi" name="21udrzwi" step="0.1" value="2.6"> W/(m<sup>2</sup>K)</label>';

document.getElementById("2upodlogi").innerHTML ='<label> Grubość docieplenia podłogi <input type="number" id="21upodlogi" name="21upodlogi" value="5"> cm </label>';

document.getElementById("2udachu").innerHTML ='<label> Grubość docieplenia stropu pod nieogrzewanym poddaszem <input type="number" id="21udachu" name="21udachu" value="10"> cm </label>';
	
}else if (document.getElementById("1rodzajdomu").value == "po2009"){
		
document.getElementById("1dscian").innerHTML ='<label> Grubość docieplenia ścian zewnętrznych <input type="number" id="dscian" name="dscian" value="15"> cm </label>';

document.getElementById("1rodzajokien").innerHTML ='<label for="rodzajokien">Rodzaj okien </label><select id="rodzajokien" name="rodzajokien" onclick="rodzajokien()" ontouchend="rodzajokienzatwierdz()" ><option value="oknadrewstare51" >Stare nieszczelne okna drewniane</option><option value="oknadrewstare35" >Stare szczelne okna drewniane szklone pojedynczo</option><option value="oknadrew26">Stare szczelne okna drewniane szklone podwójnie</option><option value="oknadrew20">Stare szczelne okna drewniane szklone potrójnie</option><option value="oknapcvstare16" selected>Stare szczelne okna PCV</option><option value="oknapcvnowe13">Nowe okna spełniające WT 2014</option><option value="oknapcvnowe11">Nowe okna spełniające WT 2017</option><option value="oknapcvnowe09">Nowe okna spełniające WT 2021</option></select>';

	  
 document.getElementById("1uokna").innerHTML ='<label> U okien <input type="number" id="uokna" name="uokna" step="0.1" value="1.6"> W/(m<sup>2</sup>K)</label>';	  

document.getElementById("1rodzajdrzwi").innerHTML ='<label for="rodzajdrzwi">Rodzaj drzwi </label><select id="rodzajdrzwi" name="rodzajdrzwi" onclick="rodzajdrzwi()" ontouchend="rodzajdrzwizatwierdz()" ><option value="drzwidrewstare50" >Stare nieszczelne drzwi drewniane</option><option value="drzwidrewstare35" >Stare szczelne drzwi drewniane</option><option value="drzwipcv26" selected>Stare szczelne drzwi PCV</option><option value="drzwipcvnowe17">Nowe drzwi spełniające WT 2014</option><option value="drzwipcvnowe15">Nowe drzwi spełniające WT 2017</option><option value="drzwipcvnowe13">Nowe drzwi spełniające WT 2021</option></select>';
	 
document.getElementById("1udrzwi").innerHTML ='<label> U drzwi <input type="number" id="udrzwi" name="udrzwi" step="0.1" value="2.6"> W/(m<sup>2</sup>K)</label>';	

document.getElementById("1upodlogi").innerHTML ='<label> Grubość docieplenia podłogi <input type="number" id="upodlogi" name="upodlogi" value="5"> cm</label>';	

document.getElementById("1udachu").innerHTML ='<label> Grubość docieplenia stropu pod nieogrzewanym poddaszem <input type="number" id="udachu" name="udachu" value="12"> cm </label>';

document.getElementById("2dscian").innerHTML ='<label> Grubość docieplenia ścian zewnętrznych <input type="number" id="21dscian" name="21dscian" value="15"> cm </label>';	

document.getElementById("2uokna").innerHTML ='<label> U okien <input type="number" id="21uokna" name="21uokna" step="0.1" value="1.6">W/(m<sup>2</sup>K)</label>';

document.getElementById("2udrzwi").innerHTML ='<label> U drzwi <input type="number" id="21udrzwi" name="21udrzwi" step="0.1" value="2.6"> W/(m<sup>2</sup>K)</label>';

document.getElementById("2upodlogi").innerHTML ='<label> Grubość docieplenia podłogi <input type="number" id="21upodlogi" name="21upodlogi" value="5"> cm </label>';

document.getElementById("2udachu").innerHTML ='<label> Grubość docieplenia stropu pod nieogrzewanym poddaszem <input type="number" id="21udachu" name="21udachu" value="12"> cm </label>';
	
}

czystrychczydach();


}

function czystrychczydach(){
	
	var rodzajstrychu;
	
	var grubosc;
	var grubosc1;
	var Powierzchniadachuautomatyczna;
	
	grubosc = document.getElementById("udachu").value;
	grubosc1 = document.getElementById("21udachu").value;
	Powierzchniadachuautomatyczna = document.getElementById("powdachu").value;
	
	var Abudynku = document.getElementById("Adomu").value;

	if (document.getElementById("czystrychczydach").checked == false) {
     var rodzajstrychu = "nieogrzewany";
	  
	}else{
	var rodzajstrychu = "ogrzewany";	
	}
	
	
	if(rodzajstrychu == "nieogrzewany"){
	
	Powierzchniadachuautomatyczna = Abudynku;	
	
	Powierzchniadachuautomatyczna = Abudynku;
	kubaturaautomatyczna = Math.round(Abudynku*2.6);
	
	document.getElementById("1Vdomu").innerHTML ='<label><input type="number" id="Vdomu" name="Vdomu" value="'+kubaturaautomatyczna+'"> m<sup>3</sup></label>';
		
    document.getElementById("1udachu").innerHTML ='<label> Grubość docieplenia stropu pod nieogrzewanym poddaszem <input type="number" id="udachu" name="udachu" value="'+grubosc+'">cm</label>';
	document.getElementById("2udachu").innerHTML ='<label> Grubość docieplenia stropu pod nieogrzewanym poddaszem <input type="number" id="21udachu" name="21udachu" value="'+grubosc1+'">cm</label>';
	document.getElementById("1powdachu").innerHTML ='<label> Powierzchnia stropu pod nieogrzewanym poddaszem <input type="number" id="powdachu" name="powdachu" value="'+Powierzchniadachuautomatyczna+'">m<sup>2</sup></label>';
	
	
	
	}
	
	else {
	   
	Powierzchniadachuautomatyczna = Math.round(1.3*Abudynku);  
	kubaturaautomatyczna = Math.round(Abudynku*2.6+Abudynku/2*Math.sqrt(Abudynku)*0.3/2);
	  
	document.getElementById("1Vdomu").innerHTML ='<label><input type="number" id="Vdomu" name="Vdomu" value="'+kubaturaautomatyczna+'"> m<sup>3</sup></label>';
		
    document.getElementById("1udachu").innerHTML ='<label> Grubość docieplenia dachu <input type="number" id="udachu" name="udachu" value="'+grubosc+'"> cm</label>';
	document.getElementById("2udachu").innerHTML ='<label> Grubość docieplenia dachu <input type="number" id="21udachu" name="21udachu" value="'+grubosc1+'"> cm</label>';
	document.getElementById("1powdachu").innerHTML ='<label> Powierzchnia dachu <input type="number" id="powdachu" name="powdachu" value="'+Powierzchniadachuautomatyczna+'">m<sup>2</sup></label>';
   }
     
}


function Adomu(){

var Abudynku = document.getElementById("Adomu").value;

var Powierzchniascianautomatyczna = Math.round(Math.sqrt(Abudynku)*4*2.6*0.8);
var Powierzchniaokienautomatyczna = Math.round(((0.25/0.8)*Powierzchniascianautomatyczna)*10)/10;
var Powierzchniadrzwiautomatyczna = 2.2; 
var Apodlogi=Abudynku;

	if (document.getElementById("czystrychczydach").checked == false) {
      var rodzajstrychu = "nieogrzewany";
	}else{
	var rodzajstrychu = "ogrzewany";	
	}

	if(rodzajstrychu == "nieogrzewany"){
      Powierzchniadachuautomatyczna = Abudynku;
	  document.getElementById("1powdachu").innerHTML ='<label> Powierzchnia stropu pod nieogrzewanym poddaszem <input type="number" id="powdachu" name="powdachu" value="'+Powierzchniadachuautomatyczna+'">m<sup>2</sup></label>';
	  
	  kubaturaautomatyczna = Math.round(Abudynku*2.6);
	  document.getElementById("1Vdomu").innerHTML ='<label><input type="number" id="Vdomu" name="Vdomu" value="'+kubaturaautomatyczna+'">m<sup>3</sup></label>';
   }else {
      Powierzchniadachuautomatyczna = Math.round(1.3*Abudynku);
	// przypadek nieogrzewany strych, ale ocieplenie wełną dachu: tstrychu = temperaturawewnetrzna-b_dachu*(temperaturawewnetrzna-temperaturasrednioroczna);
	// Sd_strychu = Ldni*(temperaturawewnetrzna-tstrychu);
	document.getElementById("1powdachu").innerHTML ='<label> Powierzchnia dachu <input type="number" id="powdachu" name="powdachu" value="'+Powierzchniadachuautomatyczna+'">m<sup>2</sup></label>';
	
	kubaturaautomatyczna = Math.round(Abudynku*2.6+Abudynku/2*Math.sqrt(Abudynku)*0.3/2);
	
		document.getElementById("1Vdomu").innerHTML ='<label><input type="number" id="Vdomu" name="Vdomu" value="'+kubaturaautomatyczna+'">m<sup>3</sup></label>';
   }
	
document.getElementById("1powscian").innerHTML ='<label> Powierzchnia ścian <input type="number" id="powscian" name="powscian" value="'+Powierzchniascianautomatyczna+'">m<sup>2</sup></label>';

document.getElementById("1powokien").innerHTML ='<label> Powierzchnia okien <input type="number" id="powokien" name="powokien" step="0.1" value="'+Powierzchniaokienautomatyczna+'">m<sup>2</sup></label>';

document.getElementById("1powdrzwi").innerHTML ='<label> Powierzchnia drzwi <input type="number" id="powdrzwi" name="powdrzwi" step="0.1" value="'+Powierzchniadrzwiautomatyczna+'">m<sup>2</sup></label>';

document.getElementById("1powpodlogi").innerHTML ='<label> Powierzchnia podłogi <input type="number" id="powpodlogi" name="powpodlogi" value="'+Apodlogi+'">m<sup>2</sup></label>';

}


function rodzajco(){

	var przedrodzajco = document.getElementById("rodzajco").value;

	if (przedrodzajco == "copieckaflowy") {     
	document.getElementById("1rodzajinstalacjico").innerHTML ='<label for="rodzajinstalacjico">Rodzaj instalacji co: </label><select id="rodzajinstalacjico" name="rodzajinstalacjico"><option value="coprzesylogrzewaniekominkowe">Ogrzewanie z pieca kaflowego lub kominka η=0,7</option></select>';  

	} else if (przedrodzajco == "cokominekzwykly") {     
	document.getElementById("1rodzajinstalacjico").innerHTML ='<label for="rodzajinstalacjico">Rodzaj instalacji co:</label><select id="rodzajinstalacjico" name="rodzajinstalacjico"><option value="coprzesylogrzewaniekominkowe">Ogrzewanie z pieca kaflowego lub kominka η=0,7</option></select>';  

	} 

	else if (przedrodzajco == "cogrzejnikelektryczny") {     
	document.getElementById("1rodzajinstalacjico").innerHTML ='<label for="rodzajinstalacjico">Rodzaj instalacji co:</label><select id="rodzajinstalacjico" name="rodzajinstalacjico"><option value="coprzesylogrzewanieelektryczne">Ogrzewanie elektryczne miejscowe η=0,91</option></select>';  

	} else {
		
	document.getElementById("1rodzajinstalacjico").innerHTML ='<label for="rodzajinstalacjico">Rodzaj instalacji co:</label><select id="rodzajinstalacjico" name="rodzajinstalacjico"><option value="coprzesylgrzejnikibezregulacji">Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja">Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji">Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>';  	

	}
	
}

function rodzajco1(){

	var przedrodzajco = document.getElementById("nieaktywnyrodzajco").value;

	if (przedrodzajco == "copieckaflowy") {     
	document.getElementById("1nieaktywnyrodzajinstalacjico").innerHTML ='<label for="nieaktywnyrodzajinstalacjico"></label><select id="nieaktywnyrodzajinstalacjico" name="nieaktywnyrodzajinstalacjico" onclick="rodzajconadole()" ontouchend="rodzajinstalacjicozatwierdz()"><option value="coprzesylogrzewaniekominkowe">Ogrzewanie z pieca kaflowego lub kominka η=0,7</option></select>';  

	} else if (przedrodzajco == "cokominekzwykly") {     
	document.getElementById("1nieaktywnyrodzajinstalacjico").innerHTML ='<label for="nieaktywnyrodzajinstalacjico"></label><select id="nieaktywnyrodzajinstalacjico" name="nieaktywnyrodzajinstalacjico" onclick="rodzajconadole()" ontouchend="rodzajinstalacjicozatwierdz()"><option value="coprzesylogrzewaniekominkowe">Ogrzewanie z pieca kaflowego lub kominka η=0,7</option></select>';  

	} 

	else if (przedrodzajco == "cogrzejnikelektryczny") {     
	document.getElementById("1nieaktywnyrodzajinstalacjico").innerHTML ='<label for="nieaktywnyrodzajinstalacjico"></label><select id="nieaktywnyrodzajinstalacjico" name="nieaktywnyrodzajinstalacjico" onclick="rodzajconadole()" ontouchend="rodzajinstalacjicozatwierdz()"><option value="coprzesylogrzewanieelektryczne">Ogrzewanie elektryczne miejscowe η=0,91</option></select>';  

	} else {
		
	document.getElementById("1nieaktywnyrodzajinstalacjico").innerHTML ='<label for="nieaktywnyrodzajinstalacjico"></label><select id="nieaktywnyrodzajinstalacjico" name="nieaktywnyrodzajinstalacjico" onclick="rodzajconadole()" ontouchend="rodzajinstalacjicozatwierdz()"><option value="coprzesylgrzejnikibezregulacji">Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja">Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji">Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>';  	

	}
	
	//aby też robiło kopie dla rodzaju instalacji ogrzewania aktywnego
	
	var aprzedrodzajco = document.getElementById("nieaktywnyrodzajco").value;

	if (aprzedrodzajco == "copieckaflowy") {     
	document.getElementById("1rodzajinstalacjico").innerHTML ='<label for="rodzajinstalacjico">Rodzaj instalacji co: </label><select id="rodzajinstalacjico" name="rodzajinstalacjico"><option value="coprzesylogrzewaniekominkowe">Ogrzewanie z pieca kaflowego lub kominka η=0,7</option></select>';  

	} else if (aprzedrodzajco == "cokominekzwykly") {     
	document.getElementById("1rodzajinstalacjico").innerHTML ='<label for="rodzajinstalacjico">Rodzaj instalacji co:</label><select id="rodzajinstalacjico" name="rodzajinstalacjico"><option value="coprzesylogrzewaniekominkowe">Ogrzewanie z pieca kaflowego lub kominka η=0,7</option></select>';  

	} 

	else if (aprzedrodzajco == "cogrzejnikelektryczny") {     
	document.getElementById("1rodzajinstalacjico").innerHTML ='<label for="rodzajinstalacjico">Rodzaj instalacji co:</label><select id="rodzajinstalacjico" name="rodzajinstalacjico"><option value="coprzesylogrzewanieelektryczne">Ogrzewanie elektryczne miejscowe η=0,91</option></select>';  

	} else {
		
	document.getElementById("1rodzajinstalacjico").innerHTML ='<label for="rodzajinstalacjico">Rodzaj instalacji co:</label><select id="rodzajinstalacjico" name="rodzajinstalacjico"><option value="coprzesylgrzejnikibezregulacji">Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja">Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji">Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>';  	

	}
	
	rodzajaktywnyco();
	
}


function rodzajconadole(){
	
	var rodzajinstalacjico = document.getElementById("nieaktywnyrodzajinstalacjico").value;
	var aprzedrodzajco = document.getElementById("nieaktywnyrodzajco").value;
	
	
	
	
	if (aprzedrodzajco == "copieckaflowy") {     
	document.getElementById("1rodzajinstalacjico").innerHTML ='<label for="rodzajinstalacjico">Rodzaj instalacji co: </label><select id="rodzajinstalacjico" name="rodzajinstalacjico"><option value="coprzesylogrzewaniekominkowe">Ogrzewanie z pieca kaflowego lub kominka η=0,7</option></select>';  

	} else if (aprzedrodzajco == "cokominekzwykly") {     
	document.getElementById("1rodzajinstalacjico").innerHTML ='<label for="rodzajinstalacjico">Rodzaj instalacji co:</label><select id="rodzajinstalacjico" name="rodzajinstalacjico"><option value="coprzesylogrzewaniekominkowe">Ogrzewanie z pieca kaflowego lub kominka η=0,7</option></select>';  

	} 

	else if (aprzedrodzajco == "cogrzejnikelektryczny") {     
	document.getElementById("1rodzajinstalacjico").innerHTML ='<label for="rodzajinstalacjico">Rodzaj instalacji co:</label><select id="rodzajinstalacjico" name="rodzajinstalacjico"><option value="coprzesylogrzewanieelektryczne">Ogrzewanie elektryczne miejscowe η=0,91</option></select>';  
	
	} else {
		
		if (rodzajinstalacjico == "coprzesylgrzejnikibezregulacji"){
			
			document.getElementById("1rodzajinstalacjico").innerHTML ='<label for="rodzajinstalacjico">Rodzaj instalacji co:</label><select id="rodzajinstalacjico" name="rodzajinstalacjico"><option value="coprzesylgrzejnikibezregulacji" selected>Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja">Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji">Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>'; 
		}else if (rodzajinstalacjico == "coprzesylgrzejnikizregulacja"){
			document.getElementById("1rodzajinstalacjico").innerHTML ='<label for="rodzajinstalacjico">Rodzaj instalacji co:</label><select id="rodzajinstalacjico" name="rodzajinstalacjico"><option value="coprzesylgrzejnikibezregulacji" >Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja" selected>Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji">Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>'; 
		}else if (rodzajinstalacjico == "coprzesylpodlogabezregulacji"){
			document.getElementById("1rodzajinstalacjico").innerHTML ='<label for="rodzajinstalacjico">Rodzaj instalacji co:</label><select id="rodzajinstalacjico" name="rodzajinstalacjico"><option value="coprzesylgrzejnikibezregulacji" >Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja" >Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji" selected>Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>'; 
		} else if (rodzajinstalacjico == "coprzesylpodlogazregulacja"){
			document.getElementById("1rodzajinstalacjico").innerHTML ='<label for="rodzajinstalacjico">Rodzaj instalacji co:</label><select id="rodzajinstalacjico" name="rodzajinstalacjico"><option value="coprzesylgrzejnikibezregulacji" >Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja" >Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji" >Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja" selected>Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>';
		}
	 	

	}
	
}

function rodzajaktywnyco(){
	
var rodzajco = document.getElementById("nieaktywnyrodzajco").value;


if(rodzajco == "copieckaflowy"){

	document.getElementById("1rodzajco").innerHTML ='<label for="rodzajco">Rodzaj co:</label><select id="rodzajco" name="rodzajco" onclick="rodzajco()" ontouchend="rodzajcoprzedzatwierdz()" ><option value="copieckaflowy" selected>Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
	  
   }else if (rodzajco == "coweglowyprzed1980"){
	document.getElementById("1rodzajco").innerHTML ='<label for="rodzajco">Rodzaj co:</label><select id="rodzajco" name="rodzajco" onclick="rodzajco()" ontouchend="rodzajcoprzedzatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" selected>Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "coweglowy19802000"){
	document.getElementById("1rodzajco").innerHTML ='<label for="rodzajco">Rodzaj co:</label><select id="rodzajco" name="rodzajco" onclick="rodzajco()" ontouchend="rodzajcoprzedzatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000" selected>Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "coweglowy2000"){
	document.getElementById("1rodzajco").innerHTML ='<label for="rodzajco">Rodzaj co:</label><select id="rodzajco" name="rodzajco" onclick="rodzajco()" ontouchend="rodzajcoprzedzatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000" selected>Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';   
   }else if (rodzajco == "cokociolnabiomasestary"){
	document.getElementById("1rodzajco").innerHTML ='<label for="rodzajco">Rodzaj co:</label><select id="rodzajco" name="rodzajco" onclick="rodzajco()" ontouchend="rodzajcoprzedzatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary" selected>Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';  
   }else if (rodzajco == "cokociolnabiomasenowy"){
	document.getElementById("1rodzajco").innerHTML ='<label for="rodzajco">Rodzaj co:</label><select id="rodzajco" name="rodzajco" onclick="rodzajco()" ontouchend="rodzajcoprzedzatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy" selected>Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';  
   }else if (rodzajco == "cokominekzplaszczem"){
	document.getElementById("1rodzajco").innerHTML ='<label for="rodzajco">Rodzaj co:</label><select id="rodzajco" name="rodzajco" onclick="rodzajco()" ontouchend="rodzajcoprzedzatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem" selected>Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "cokominekzwykly"){
	document.getElementById("1rodzajco").innerHTML ='<label for="rodzajco">Rodzaj co:</label><select id="rodzajco" name="rodzajco" onclick="rodzajco()" ontouchend="rodzajcoprzedzatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly" selected>Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "cogrzejnikelektryczny"){
	document.getElementById("1rodzajco").innerHTML ='<label for="rodzajco">Rodzaj co:</label><select id="rodzajco" name="rodzajco" onclick="rodzajco()" ontouchend="rodzajcoprzedzatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny" selected>Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';  
   }else if (rodzajco == "copiecolejowy"){
	document.getElementById("1rodzajco").innerHTML ='<label for="rodzajco">Rodzaj co:</label><select id="rodzajco" name="rodzajco" onclick="rodzajco()" ontouchend="rodzajcoprzedzatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy" selected>Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "costarypiecgazowy"){
	document.getElementById("1rodzajco").innerHTML ='<label for="rodzajco">Rodzaj co:</label><select id="rodzajco" name="rodzajco" onclick="rodzajco()" ontouchend="rodzajcoprzedzatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy" selected>Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>'; 
   }else if (rodzajco == "copiecgazowykondensacyjny"){
	document.getElementById("1rodzajco").innerHTML ='<label for="rodzajco">Rodzaj co:</label><select id="rodzajco" name="rodzajco" onclick="rodzajco()" ontouchend="rodzajcoprzedzatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" selected>Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "cogruntowapompaciepla"){
	document.getElementById("1rodzajco").innerHTML ='<label for="rodzajco">Rodzaj co:</label><select id="rodzajco" name="rodzajco" onclick="rodzajco()" ontouchend="rodzajcoprzedzatwierdz()"><option value="copieckaflowy" selected>Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla" selected>Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';  
   }else if (rodzajco == "copowietrznapompaciepla"){
	document.getElementById("1rodzajco").innerHTML ='<label for="rodzajco">Rodzaj co:</label><select id="rodzajco" name="rodzajco" onclick="rodzajco()" ontouchend="rodzajcoprzedzatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla" selected>Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "cogazowapompaciepla"){
	document.getElementById("1rodzajco").innerHTML ='<label for="rodzajco">Rodzaj co:</label><select id="rodzajco" name="rodzajco" onclick="rodzajco()" ontouchend="rodzajcoprzedzatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla" selected>Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>'; 
   }else if (rodzajco == "cowezelciepla"){
	document.getElementById("1rodzajco").innerHTML ='<label for="rodzajco">Rodzaj co:</label><select id="rodzajco" name="rodzajco" onclick="rodzajco()" ontouchend="rodzajcoprzedzatwierdz()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla" selected>Węzeł ciepłowniczy (sieć) η=0,98</option></select>'; 
   }


rodzajco();	
	
}


function selectrodzajcwu(){
	
var rodzajcwu = document.getElementById("21nieaktywnyrodzajcwu").value;	
	
	 if(rodzajcwu == "cwupiecstarygazowy"){
		 
      document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy" selected>Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';
	  
   }else if(rodzajcwu  == "cwustarygazowy2000"){
      document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" selected>Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';
   }else if(rodzajcwu  == "cwunowygazowy"){
      document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy" selected>Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';
   }else if(rodzajcwu  == "cwupiecgazowykondensacyjny"){
      document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" selected>Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';
   }else if(rodzajcwu  == "cwupodgrzewaczelektryczny"){
      document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny" selected>Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';
   }else if(rodzajcwu  == "cwupowietrznapompacieplacwu"){
      document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu" selected>Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';	
   }else if(rodzajcwu  == "cwugruntowapompaciepla"){
      document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla" selected>Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';
   }else if(rodzajcwu  == "cwugazowapompaciepla"){
      document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla" selected>Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';	
   }else if(rodzajcwu  == "cwuwezelcieplny"){
      document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny" selected>Węzeł ciełowniczy η=0,98</option></select>';	
   }	
}


function rodzajco2(){
	
	var porodzajco = document.getElementById("21rodzajco").value;

	if (porodzajco == "copieckaflowy") {     
	document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co:</label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylogrzewaniekominkowe">Ogrzewanie z pieca kaflowego lub kominka η=0,7</option></select>';  

	} else if (porodzajco == "cokominekzwykly") {     
	document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co:</label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylogrzewaniekominkowe">Ogrzewanie z pieca kaflowego lub kominka η=0,7</option></select>';  

	} 

	else if (porodzajco == "cogrzejnikelektryczny") {     
	document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co:</label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylogrzewanieelektryczne">Ogrzewanie elektryczne miejscowe η=0,91</option></select>';  

	} else {
		
	document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co:</label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylgrzejnikibezregulacji">Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja">Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji">Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>';  	

	}

}


function rodzajco3(){

	var porodzajco = document.getElementById("2nrodzajco").value;

	if (porodzajco == "copieckaflowy") {     
	document.getElementById("2nrodzajinstalacjico").innerHTML ='<label for="2nrodzajinstalacjico">Rodzaj instalacji co:</label><select id="2nrodzajinstalacjico" name="2nrodzajinstalacjico"><option value="coprzesylogrzewaniekominkowe">Ogrzewanie z pieca kaflowego lub kominka η=0,7</option></select>';  

	} else if (porodzajco == "cokominekzwykly") {     
	document.getElementById("2nrodzajinstalacjico").innerHTML ='<label for="2nrodzajinstalacjico">Rodzaj instalacji co:</label><select id="2nrodzajinstalacjico" name="2nrodzajinstalacjico"><option value="coprzesylogrzewaniekominkowe">Ogrzewanie z pieca kaflowego lub kominka η=0,7</option></select>';  

	} 

	else if (porodzajco == "cogrzejnikelektryczny") {     
	document.getElementById("2nrodzajinstalacjico").innerHTML ='<label for="2nrodzajinstalacjico">Rodzaj instalacji co:</label><select id="2nrodzajinstalacjico" name="2nrodzajinstalacjico"><option value="coprzesylogrzewanieelektryczne">Ogrzewanie elektryczne miejscowe η=0,91</option></select>';  

	} else {
		
	document.getElementById("2nrodzajinstalacjico").innerHTML ='<label for="2nrodzajinstalacjico">Rodzaj instalacji co:</label><select id="2nrodzajinstalacjico" name="2nrodzajinstalacjico"><option value="coprzesylgrzejnikibezregulacji">Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja">Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji">Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>';  	

	}

}


function rodzajco4(){

	var porodzajco = document.getElementById("21nieaktywnyrodzajco").value;

	if (porodzajco == "copieckaflowy") {     
	document.getElementById("2nrodzajinstalacjico").innerHTML ='<label for="21nieaktywnyrodzajinstalacjico">Rodzaj instalacji co:</label><select id="21nieaktywnyrodzajinstalacjico" name="21nieaktywnyrodzajinstalacjico" onclick="selectrodzajinstalacjico2()" ontouchend="rodzajinstalacjico1zatwierdz()"><option value="coprzesylogrzewaniekominkowe">Ogrzewanie z pieca kaflowego lub kominka η=0,7</option></select>';  

	} else if (porodzajco == "cokominekzwykly") {     
	document.getElementById("2nrodzajinstalacjico").innerHTML ='<label for="21nieaktywnyrodzajinstalacjico">Rodzaj instalacji co:</label><select id="21nieaktywnyrodzajinstalacjico" name="21nieaktywnyrodzajinstalacjico" onclick="selectrodzajinstalacjico2()" ontouchend="rodzajinstalacjico1zatwierdz()"><option value="coprzesylogrzewaniekominkowe">Ogrzewanie z pieca kaflowego lub kominka η=0,7</option></select>';  

	} 

	else if (porodzajco == "cogrzejnikelektryczny") {     
	document.getElementById("2nrodzajinstalacjico").innerHTML ='<label for="21nieaktywnyrodzajinstalacjico">Rodzaj instalacji co:</label><select id="21nieaktywnyrodzajinstalacjico" name="21nieaktywnyrodzajinstalacjico" onclick="selectrodzajinstalacjico2()" ontouchend="rodzajinstalacjico1zatwierdz()"><option value="coprzesylogrzewanieelektryczne">Ogrzewanie elektryczne miejscowe η=0,91</option></select>';  

	} else {
		
	document.getElementById("2nrodzajinstalacjico").innerHTML ='<label for="21nieaktywnyrodzajinstalacjico">Rodzaj instalacji co:</label><select id="21nieaktywnyrodzajinstalacjico" name="21nieaktywnyrodzajinstalacjico" onclick="selectrodzajinstalacjico2()" ontouchend="rodzajinstalacjico1zatwierdz()"><option value="coprzesylgrzejnikibezregulacji">Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja">Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji">Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>';  	

	}

selectrodzajinstalacjico1();


}


function rodzajokien(){

var typokien = document.getElementById("rodzajokien").value;


if (typokien == "oknadrewstare51") {     
document.getElementById("1uokna").innerHTML ='<label> U okien <input type="number" id="uokna" name="uokna" step="0.1" value="5.1">W/(m<sup>2</sup>K)</label>';  
}
else if(typokien == "oknadrewstare35"){
document.getElementById("1uokna").innerHTML ='<label> U okien <input type="number" id="uokna" name="uokna" step="0.1"  value="3.5">W/(m<sup>2</sup>K)</label>';  	  
}
else if(typokien == "oknadrew26"){
document.getElementById("1uokna").innerHTML ='<label> U okien <input type="number" id="uokna" name="uokna" step="0.1"  value="2.6">W/(m<sup>2</sup>K)</label>';  	  
}
else if(typokien == "oknadrew20"){
document.getElementById("1uokna").innerHTML ='<label> U okien <input type="number" id="uokna" name="uokna" step="0.1" value="2.0">W/(m<sup>2</sup>K)</label>';  	  
}
else if(typokien == "oknapcvstare16"){
document.getElementById("1uokna").innerHTML ='<label> U okien <input type="number" id="uokna" name="uokna" step="0.1"  value="1.6">W/(m<sup>2</sup>K)</label>';  	  
}
else if(typokien == "oknapcvnowe13"){
document.getElementById("1uokna").innerHTML ='<label> U okien <input type="number" id="uokna" name="uokna" step="0.1"  value="1.3">W/(m<sup>2</sup>K)</label>';  	  
}
else if(typokien == "oknapcvnowe11"){
document.getElementById("1uokna").innerHTML ='<label> U okien <input type="number" id="uokna" name="uokna" step="0.1" value="1.1">W/(m<sup>2</sup>K)</label>';  	  
}
else if(typokien == "oknapcvnowe09"){
document.getElementById("1uokna").innerHTML ='<label> U okien <input type="number" id="uokna" name="uokna" step="0.1" value="0.9">W/(m<sup>2</sup>K)</label>';  	  
}

}

function rodzajdrzwi(){

var typdrzwi = document.getElementById("rodzajdrzwi").value;


if (typdrzwi == "drzwidrewstare50") {     
document.getElementById("1udrzwi").innerHTML ='<label> U drzwi <input type="number" id="udrzwi" name="udrzwi" step="0.1" value="5.0"> W/(m<sup>2</sup>K)</label>';  
}
else if(typdrzwi == "drzwidrewstare35"){
document.getElementById("1udrzwi").innerHTML ='<label> U drzwi <input type="number" id="udrzwi" name="udrzwi" step="0.1" value="3.5"> W/(m<sup>2</sup>K)</label>';  	  
}
else if(typdrzwi == "drzwipcv26"){
document.getElementById("1udrzwi").innerHTML ='<label> U drzwi <input type="number" id="udrzwi" name="udrzwi" step="0.1" value="2.6"> W/(m<sup>2</sup>K)</label>';  	  
}
else if(typdrzwi == "drzwipcvnowe17"){
document.getElementById("1udrzwi").innerHTML ='<label> U drzwi <input type="number" id="udrzwi" name="udrzwi" step="0.1" value="1.7"> W/(m<sup>2</sup>K)</label>';  	  
}
else if(typdrzwi == "drzwipcvnowe15"){
document.getElementById("1udrzwi").innerHTML ='<label> U drzwi <input type="number" id="udrzwi" name="udrzwi" step="0.1" value="1.5"> W/(m<sup>2</sup>K)</label>';  	  
}
else if(typdrzwi == "drzwipcvnowe13"){
document.getElementById("1udrzwi").innerHTML ='<label> U drzwi <input type="number" id="udrzwi" name="udrzwi" step="0.1" value="1.3"> W/(m<sup>2</sup>K)</label>';  	  
}

}


function modernizacja(){
	
	if (document.getElementById("modernizacjasciany").checked == true) {
      
	document.getElementById("2dscian").innerHTML ='<label> Grubość docieplenia ścian zewnętrznych <input type="number" id="21dscian" name="21dscian" value="25"> cm </label>';  
	  
	}else{
	
	var grubosc = document.getElementById("dscian").value;
	document.getElementById("2dscian").innerHTML ='<label> Grubość docieplenia ścian zewnętrznych <input type="number" id="21dscian" name="21dscian" value="'+grubosc+'"> cm </label>';	
	}	
	if (document.getElementById("modernizacjaokien").checked == true) {
    document.getElementById("2uokna").innerHTML ='<label> U okien <input type="number" id="21uokna" name="21uokna" step="0.1" value="0.9"> W/(m<sup>2</sup>K)</label>';    
	}else{	
	var grubosc = document.getElementById("uokna").value;
	document.getElementById("2uokna").innerHTML ='<label> U okien <input type="number" id="21uokna" name="21uokna" step="0.1" value="'+grubosc+'"> W/(m<sup>2</sup>K)</label>';    
	}		
	if (document.getElementById("modernizacjadrzwi").checked == true) {
    document.getElementById("2udrzwi").innerHTML ='<label> U drzwi <input type="number" id="21udrzwi" name="21udrzwi" step="0.1" value="1.3"> W/(m<sup>2</sup>K)</label>';    
	}else{
	var grubosc = document.getElementById("udrzwi").value;
	document.getElementById("2udrzwi").innerHTML ='<label> U drzwi <input type="number" id="21udrzwi" name="21udrzwi" step="0.1" value="'+grubosc+'"> W/(m<sup>2</sup>K)</label>';   		
	}	
	if (document.getElementById("modernizacjapodlogi").checked == true) {
    document.getElementById("2upodlogi").innerHTML ='<label> Grubość docieplenia podłogi <input type="number" id="21upodlogi" name="21upodlogi"  value="10"> cm </label>';    
	}else{
	var grubosc = document.getElementById("upodlogi").value;
	document.getElementById("2upodlogi").innerHTML ='<label> Grubość docieplenia podłogi <input type="number" id="21upodlogi" name="21upodlogi"  value="'+grubosc+'"> cm </label>';    	
	}		
	if (document.getElementById("modernizacjadachu").checked == true) {
    document.getElementById("2udachu").innerHTML ='<label> Grubość docieplenia stropu pod nieogrzewanym poddaszem <input type="number" id="21udachu" name="21udachu" value="20"> cm </label>';    
	}else{
	var grubosc = document.getElementById("udachu").value;
	document.getElementById("2udachu").innerHTML ='<label> Grubość docieplenia stropu pod nieogrzewanym poddaszem <input type="number" id="21udachu" name="21udachu" value="'+grubosc+'"> cm </label>';		
	}		


	
czystrychczydach();
}


function modernizacjaco(){
	
		if (document.getElementById("modernizacjaco").checked == true) {
      
	 document.getElementById("2nrodzajco").innerHTML ='<label for="21nieaktywnyrodzajco">Rodzaj co:</label><select id="21nieaktywnyrodzajco" name="21nieaktywnyrodzajco" onclick="rodzajco4()" ontouchend="rodzajco1zatwierdz()"><option value="copieckaflowy">Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" selected>Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>'; 
	 
	 document.getElementById("2nrodzajinstalacjico").innerHTML ='<label for="21nieaktywnyrodzajinstalacjico">Rodzaj instalacji co: </label><select id="21nieaktywnyrodzajinstalacjico" name="21nieaktywnyrodzajinstalacjico" onclick="selectrodzajinstalacjico2()" ontouchend="rodzajinstalacjico1zatwierdz()"><option value="coprzesylgrzejnikibezregulacji">Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja">Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji">Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>';
	 
	 
	 document.getElementById("2nzbiornikco").innerHTML ='<label for="21nieaktywnyczyzbiornikco">Czy w budynku znajduje się zbiornik akumulacyjny ciepła? Jeśli tak, proszę zaznaczyć pole:</label><input type="checkbox" id="21nieaktywnyczyzbiornikco" name="21nieaktywnyczyzbiornikco" value="zbiornikco" onclick="selectzbiornikcopo()">';
	
	}else{
	document.getElementById("2nrodzajco").innerHTML ='<label for="21nieaktywnyrodzajco">Rodzaj co:</label><select id="21nieaktywnyrodzajco" name="21nieaktywnyrodzajco" disabled ><option value="copieckaflowy">Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" selected>Stary piec węglowy -aktywuj listę rozwijaną klikając pole checkbox ☐ </option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
	
	var rodzajco = document.getElementById("rodzajco").value;


if(rodzajco == "copieckaflowy"){

	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()"><option value="copieckaflowy" selected>Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
	  
   }else if (rodzajco == "coweglowyprzed1980"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" selected>Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "coweglowy19802000"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000" selected>Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "coweglowy2000"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000" selected>Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';   
   }else if (rodzajco == "cokociolnabiomasestary"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary" selected>Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';  
   }else if (rodzajco == "cokociolnabiomasenowy"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy" selected>Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';  
   }else if (rodzajco == "cokominekzplaszczem"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem" selected>Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "cokominekzwykly"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly" selected>Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "cogrzejnikelektryczny"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny" selected>Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';  
   }else if (rodzajco == "copiecolejowy"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy" selected>Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "costarypiecgazowy"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy" selected>Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>'; 
   }else if (rodzajco == "copiecgazowykondensacyjny"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" selected>Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "cogruntowapompaciepla"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()"><option value="copieckaflowy" selected>Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla" selected>Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';  
   }else if (rodzajco == "copowietrznapompaciepla"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla" selected>Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>';
   }else if (rodzajco == "cogazowapompaciepla"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla" selected>Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla">Węzeł ciepłowniczy (sieć) η=0,98</option></select>'; 
   }else if (rodzajco == "cowezelciepla"){
	document.getElementById("2rodzajco").innerHTML ='<label for="21rodzajco">Rodzaj ogrzewania co:</label><select id="21rodzajco" name="21rodzajco" onclick="rodzajco2()"><option value="copieckaflowy" >Stary piec kaflowy η=0,25</option><option value="coweglowyprzed1980" >Stary piec węglowy sprzed 1980 η=0,6</option><option value="coweglowy19802000">Stary piec węglowy produkcji 1980-2000 η=0,65</option><option value="coweglowy2000">Piec węglowy produkcji po 2000 η=0,82</option> <option value="cokociolnabiomasestary">Stary kocioł na biomasę η=0,7</option> <option value="cokociolnabiomasenowy">Nowoczesny kocioł na biomasę η=0,85</option> <option value="cokominekzplaszczem">Kominek z płaszczem wodnym η=0,7</option> <option value="cokominekzwykly">Stary kominek η=0,4</option><option value="cogrzejnikelektryczny">Miejscowe ogrzewanie elektryczne η=0,99</option><option value="copiecolejowy">Piec olejowy η=0,84</option><option value="costarypiecgazowy">Stary piec gazowy η=0,87</option><option value="copiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,94</option><option value="cogruntowapompaciepla">Gruntowa pompa ciepła napęd elektryczny η=4,0</option><option value="copowietrznapompaciepla">Powietrzna pompa ciepła napęd elektryczny η=3,0</option><option value="cogazowapompaciepla">Gazowa pompa ciepła typu glikol/woda η=1,6</option><option value="cowezelciepla" selected>Węzeł ciepłowniczy (sieć) η=0,98</option></select>'; 
   }


rodzajco2();
	
	document.getElementById("2nrodzajinstalacjico").innerHTML ='<label for="21nieaktywnyrodzajinstalacjico">Rodzaj instalacji co: </label><select id="21nieaktywnyrodzajinstalacjico" name="21nieaktywnyrodzajinstalacjico" disabled><option value="coprzesylgrzejnikibezregulacji">Ogrzewanie wodne, grzejniki, regulacja centralna -aktywuj listę rozwijaną klikając pole checkbox ☐</option><option value="coprzesylgrzejnikizregulacja">Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji">Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>';
	
	
	var rodzajinstalacjico = document.getElementById("rodzajinstalacjico").value;
	var aprzedrodzajco = document.getElementById("rodzajco").value;
	
	
	if (aprzedrodzajco == "copieckaflowy") {     
	document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co: </label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylogrzewaniekominkowe">Ogrzewanie z pieca kaflowego lub kominka η=0,7</option></select>';  

	} else if (aprzedrodzajco == "cokominekzwykly") {     
	document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co:</label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylogrzewaniekominkowe">Ogrzewanie z pieca kaflowego lub kominka η=0,7</option></select>';  

	} 

	else if (aprzedrodzajco == "cogrzejnikelektryczny") {     
	document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co:</label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylogrzewanieelektryczne">Ogrzewanie elektryczne miejscowe η=0,91</option></select>';  
	
	} else {
		
		if (rodzajinstalacjico == "coprzesylgrzejnikibezregulacji"){
			
			document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co:</label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylgrzejnikibezregulacji" selected>Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja">Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji">Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>'; 
		}else if (rodzajinstalacjico == "coprzesylgrzejnikizregulacja"){
			document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co:</label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylgrzejnikibezregulacji" >Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja" selected>Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji">Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>'; 
		}else if (rodzajinstalacjico == "coprzesylpodlogabezregulacji"){
			document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co:</label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylgrzejnikibezregulacji" >Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja" >Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji" selected>Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja">Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>'; 
		} else if (rodzajinstalacjico == "coprzesylpodlogazregulacja"){
			document.getElementById("2rodzajinstalacjico").innerHTML ='<label for="21rodzajinstalacjico">Rodzaj instalacji co:</label><select id="21rodzajinstalacjico" name="21rodzajinstalacjico"><option value="coprzesylgrzejnikibezregulacji" >Ogrzewanie wodne, grzejniki, regulacja centralna η=0,77</option><option value="coprzesylgrzejnikizregulacja" >Ogrzewanie wodne, grzejniki, regulacja miejscowa (zawory termostatyczne) η=0,93</option><option value="coprzesylpodlogabezregulacji" >Ogrzewanie wodne, podłogowe, regulacja centralna η=0,76</option><option value="coprzesylpodlogazregulacja" selected>Ogrzewanie wodne, podłogowe, regulacja miejscowa (panel z regulacją miejscową) η=0,89</option></select>';
		}
	
	}
	
	
	document.getElementById("2nzbiornikco").innerHTML = '<label for="x">Czy w budynku znajduje się zbiornik akumulacyjny ciepła? -aktywuj pole klikając na checkbox ☐ zmiana źródła ciepła</label><input type="checkbox" id="x" name="x" value="x" disabled>';
	
	
		if (document.getElementById("czyzbiornikco").checked == true) {
		document.getElementById("2zbiornikco").innerHTML = '<label for="pozbiornikco">Czy w budynku znajduje się zbiornik akumulacyjny ciepła? Jeśli tak, proszę zaznaczyć pole:</label><input type="checkbox" id="pozbiornikco" name="pozbiornikco" value="zbiornikco" checked>';
	}else{
		document.getElementById("2zbiornikco").innerHTML = '<label for="pozbiornikco">Czy w budynku znajduje się zbiornik akumulacyjny ciepła? Jeśli tak, proszę zaznaczyć pole:</label><input type="checkbox" id="pozbiornikco" name="pozbiornikco" value="zbiornikco">';
	}
	
		
		
	}	
	
		
}

function modernizacjacwu(){
	
		if (document.getElementById("modernizacjacwu").checked == true) {
    
	document.getElementById("2nrodzajcwu").innerHTML ='<label for="21nieaktywnyrodzajcwu">Rodzaj źródła ciepła do przygotowania ciepłej wody użytkowej: </label><select    id="21nieaktywnyrodzajcwu" name="21nieaktywnyrodzajcwu" onclick="selectrodzajcwu()" ontouchend="rodzajinstalacjicwu1zatwierdz()"><option value="cwupiecstarygazowy">Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" selected>Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>'; 

	
	}else{
	document.getElementById("2nrodzajcwu").innerHTML ='<label for="21nieaktywnyrodzajcwu">Rodzaj źródła ciepła do przygotowania ciepłej wody użytkowej: </label><select    id="21nieaktywnyrodzajcwu" name="21nieaktywnyrodzajcwu" disabled><option value="cwupiecstarygazowy">Piec stary gazowy sprzed 1980 (bojler) η=0,40 </option><option value="cwustarygazowy2000" selected>Piec stary gazowy -aktywuj listę rozwijaną klikając pole checkbox ☐</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>'; 
		
	
	var rodzajcwu = document.getElementById("rodzajcwu").value;	
	
	 if(rodzajcwu == "cwupiecstarygazowy"){
		 
      document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy" selected>Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';
	  
   }else if(rodzajcwu  == "cwustarygazowy2000"){
      document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" selected>Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';
   }else if(rodzajcwu  == "cwunowygazowy"){
      document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy" selected>Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';
   }else if(rodzajcwu  == "cwupiecgazowykondensacyjny"){
      document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" selected>Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';
   }else if(rodzajcwu  == "cwupodgrzewaczelektryczny"){
      document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny" selected>Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';
   }else if(rodzajcwu  == "cwupowietrznapompacieplacwu"){
      document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu" selected>Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';	
   }else if(rodzajcwu  == "cwugruntowapompaciepla"){
      document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla" selected>Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';
   }else if(rodzajcwu  == "cwugazowapompaciepla"){
      document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla" selected>Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny">Węzeł ciełowniczy η=0,98</option></select>';	
   }else if(rodzajcwu  == "cwuwezelcieplny"){
      document.getElementById("2rodzajcwu").innerHTML ='<label for="21rodzajcwu">Rodzaj źródła do przygotowania ciepłej wody użytkowej: </label><select id="21rodzajcwu" name="21rodzajcwu"><option value="cwupiecstarygazowy" >Piec stary gazowy sprzed 1980 (bojler) η=0,40</option><option value="cwustarygazowy2000" >Piec stary gazowy sprzed 2000 η=0,65</option><option value="cwunowygazowy">Piec nowy gazowy niekondensacyjny η=0,83</option><option value="cwupiecgazowykondensacyjny" >Piec gazowy kondensacyjny η=0,85</option><option value="cwupodgrzewaczelektryczny">Podgrzewacz elektryczny η=0,96</option><option value="cwupowietrznapompacieplacwu">Powietrzna pompa ciepła η=2,6</option><option value="cwugruntowapompaciepla">Gruntowa pompa ciepła η=3,0</option><option value="cwugazowapompaciepla">Gazowa pompa ciepła η=1,3</option><option value="cwuwezelcieplny" selected>Węzeł ciełowniczy η=0,98</option></select>';	
   }

	} 
	
}


function modernizacjawentylacji(){
	
		if (document.getElementById("modernizacjawentylacji").checked == true) {
    
	document.getElementById("1nieaktywnyrodzajwentylacji").innerHTML ='<label for="1nrodzajwentylacji">Rodzaj wentylacji: </label><select id="1nrodzajwentylacji" name="1nrodzajwentylacji" onclick="wentylacjaselect()" ontouchend="rodzajwentylacji1zatwierdz()"><option value="wentylacjagrawitacyjna">Grawitacyjna</option><option value="wentylacjamechaniczna60">Mechaniczna z rekuperacją 60%</option><option value="wentylacjamechaniczna85">Mechaniczna z rekuperacją 85%</option></select>'; 
	
	}else{
	document.getElementById("1nieaktywnyrodzajwentylacji").innerHTML ='<label for="1nrodzajwentylacji">Rodzaj wentylacji: </label><select id="1nrodzajwentylacji" name="1nrodzajwentylacji" disabled ><option value="wentylacjagrawitacyjna">Grawitacyjna-aktywuj listę rozwijaną klikając pole checkbox ☐ </option><option value="wentylacjamechaniczna60">Mechaniczna z rekuperacją 60%</option><option value="wentylacjamechaniczna85">Mechaniczna z rekuperacją 85%</option></select>';  
	
	var wentylacja = document.getElementById("rodzajwentylacji").value;
	
	if (wentylacja == "wentylacjagrawitacyjna"){
		
	document.getElementById("2rodzajwentylacji").innerHTML = '<label for="21rodzajwentylacji">Rodzaj wentylacji: </label><select id="21rodzajwentylacji" name="1rodzajwentylacji"><option value="wentylacjagrawitacyjna" selected>Grawitacyjna</option><option value="wentylacjamechaniczna60">Mechaniczna z rekuperacją 60%</option><option value="wentylacjamechaniczna85">Mechaniczna z rekuperacją 85%</option></select>';
	
	}else if (wentylacja == "wentylacjamechaniczna60"){
		
	document.getElementById("2rodzajwentylacji").innerHTML = '<label for="21rodzajwentylacji">Rodzaj wentylacji: </label><select id="21rodzajwentylacji" name="1rodzajwentylacji"><option value="wentylacjagrawitacyjna" >Grawitacyjna</option><option value="wentylacjamechaniczna60" selected>Mechaniczna z rekuperacją 60%</option><option value="wentylacjamechaniczna85">Mechaniczna z rekuperacją 85%</option></select>';	
		
	}else if (wentylacja == "wentylacjamechaniczna85"){
		
	document.getElementById("2rodzajwentylacji").innerHTML = '<label for="21rodzajwentylacji">Rodzaj wentylacji: </label><select id="21rodzajwentylacji" name="1rodzajwentylacji"><option value="wentylacjagrawitacyjna" >Grawitacyjna</option><option value="wentylacjamechaniczna60">Mechaniczna z rekuperacją 60%</option><option value="wentylacjamechaniczna85" selected>Mechaniczna z rekuperacją 85%</option></select>';
		
	}
	
	
	}	
	
}


function wentylacjaselect(){
	
	var wentylacja = document.getElementById("1nrodzajwentylacji").value;
	
	
	if (wentylacja == "wentylacjagrawitacyjna"){
		
	document.getElementById("2rodzajwentylacji").innerHTML = '<label for="21rodzajwentylacji">Rodzaj wentylacji: </label><select id="21rodzajwentylacji" name="21rodzajwentylacji"><option value="wentylacjagrawitacyjna" selected>Grawitacyjna</option><option value="wentylacjamechaniczna60">Mechaniczna z rekuperacją 60%</option><option value="wentylacjamechaniczna85">Mechaniczna z rekuperacją 85%</option></select>';
	
	}else if (wentylacja == "wentylacjamechaniczna60"){
		
	document.getElementById("2rodzajwentylacji").innerHTML = '<label for="21rodzajwentylacji">Rodzaj wentylacji: </label><select id="21rodzajwentylacji" name="21rodzajwentylacji"><option value="wentylacjagrawitacyjna" >Grawitacyjna</option><option value="wentylacjamechaniczna60" selected>Mechaniczna z rekuperacją 60%</option><option value="wentylacjamechaniczna85">Mechaniczna z rekuperacją 85%</option></select>';	
		
	}else if (wentylacja == "wentylacjamechaniczna85"){
		
	document.getElementById("2rodzajwentylacji").innerHTML = '<label for="21rodzajwentylacji">Rodzaj wentylacji: </label><select id="21rodzajwentylacji" name="21rodzajwentylacji"><option value="wentylacjagrawitacyjna" >Grawitacyjna</option><option value="wentylacjamechaniczna60">Mechaniczna z rekuperacją 60%</option><option value="wentylacjamechaniczna85" selected>Mechaniczna z rekuperacją 85%</option></select>';
		
	}
	
	
	
	
}


function obliczenia(){

	var Rsisciany = 0.13;
	var Rsesciany = 0.04;
	var Rsepodlogi = 0.17;
	var Rsipodlogi = 0.04;
	var Rsedachu = 0.1;
	var Rsidachu = 0.04;
	
	
	var lambdastyropianu = 0.04;
	var lambdawelny = 0.035;
	var gruboscstyropianusciany;
	var Ustarejsciany;
	var Rstarejsciany;
	var Rnowe;
	var Unowe;
	var Ldni = 210;
	var temperaturasrednioroczna = 4.2;
	var temperaturawewnetrzna;
	var stopniodni;
	var Abudynku;
	var Powierzchniascianautomatyczna;
	var Qsciany;
	var qsciany;
	var Powierzchniaokienautomatyczna;
	var Uokna;
	var Qokna;
	var qokna;
	var Powierzchniadrzwiautomatyczna = 2.2;
	var Udrzwi;
	var Qdrzwi;
	var qdrzwi;	
	var Powierzchniadachuautomatyczna;
	var b_dachu = 0.7;
	var tstrychu;
	var Sd_strychu;	
	var gruboscwelnydach;
	var Udachu;
	var Qdachu;
	var qdachu;	
	var Apodlogi;	
	var gruboscstyropianpodloga;
	var Upodlogi = 2;
	var Rpodlogi;
	var Upodloginowe;
	var Rpodloginowe;
	var Uekwiwalent;
	var Qpodlogi;
	var qpodlogi;	
	var n=0.5;
	var kubaturaautomatyczna;
	var ropow=1.2;
	var Qwentylacji;
	var qwentylacji;
	var Euogrzewania;
	var cosprawnosc;
	var cwusprawnosc;
	
	var Liczbaosob;
	var Vdobowe;
	var cw = 4.19;
	var rowody = 1000;
	var twodywyjscie = 45;
	var twodywejscie = 10;
	var tuzytkowania = 365;
	
	var QwodaEu;
	var QwodaEK;
	var qwodaEK;
	
	var qint = 6.8;
	var tmwdomu = 2400;
	var wewzyskiciepla;
	
	var ci =0.7;
	var li = 1000; 
	var wspzacienienia = 0.95;
	var gg = 0.75;
	var solarnezyskiciepla;
	var zyskicieplacalkowitedopowierzchni;
	
	var qelpompa = 0.5;
	var tel = 6700;
	var Elnaogrzewanie;
	var jElnaogrzewanie;
	
	var wodaqelpompa = 0.04;
	var wodatel = 7300;
	var wodaElnaogrzewanie;
	var wodajElnaogrzewanie;
	
	var rodzajstrychu;
	
	var Eu_calkowite;
	var Ek_calkowite;
	var Ep_calowite;
	
	
	var Ek_calkowite_kWh;
	var Ek_calkowite_GJ;
	
	var Ep_CO2;
	var wskCO2;
	
	// wartosci po modernizacji
	
	var ngruboscstyropianusciany;
	var nUstarejsciany;
	var nRstarejsciany;
	var nRnowe;
	var nUnowe;

	var nQsciany;
	var nqsciany;
	var nUokna;
	var nQokna;
	var nqokna;
	var nUdrzwi;
	var nQdrzwi;
	var nqdrzwi;	
	var ngruboscwelnydach;
	var nUdachu;
	var nQdachu;
	var nqdachu;	
	var ngruboscstyropianpodloga;
	var nUpodloginowe;
	var nRpodloginowe;
	var nUekwiwalent;
	var nQpodlogi;
	var nqpodlogi;	
	var nQwentylacji;
	var nqwentylacji;
	var nEuogrzewania;
	var ncosprawnosc;
	var ncwusprawnosc;

	
	var nQwodaEu;
	var nQwodaEK;
	var nqwodaEK;
			
	var nrodzajstrychu;
	
	var nEu_calkowite;
	var nEk_calkowite;
	var nEp_calowite;
	
	
	var nEk_calkowite_kWh;
	var nEk_calkowite_GJ;
	
	
	var delta_Ek_calkowite;
	var delta_Ek_calkowite_kWh;
	var delta_Ek_calkowite_GJ;	
	var delta_koszt_paliwa;
	var delta_Ep_CO2;

	
	
	var wsk_wentylacji_przed;
	var wsk_wentylacji_po;
	
	var dane_wentylacja_przed;
	var dane_wentylacja_po;
	
	//ogrzewanie:
	
	var rodzajco;
	var nrodzajco;
	var rodzajinstalacjico;
	var nrodzajinstalacjico;
	
	var cosprawnoscwytwarzania;
	var cosprawonoscregulacjiiwykorzystania; 
	var cosprawnoscprzesyluciepla;
	var cosprawnoscakumulacji;
	var wsk_CO2_co;		
	var cocena_paliwa;
	var Ep_co_wsk;
	
	
	var ncosprawnoscwytwarzania;
	var ncosprawonoscregulacjiiwykorzystania;
	var ncosprawnoscprzesyluciepla;
	var ncosprawnoscakumulacji;
	var nwsk_CO2_co;
	var ncocena_paliwa;
	var nEp_co_wsk;
	
	//ciepła woda:
	
	var rodzajcwu;
	var nrodzajcwu;	
	
	var wodasprawnoscwytwarzania;
	var wodasprawonosprzesylu;
	var wodasprawnoscwykorzystania = 1;
	var wodasprawnoscakumulacji;	
	var wsk_CO2_cwu;
	var Ep_cwu_wsk;
	var cwucena_paliwa;
	
	
	var nwodasprawnoscwytwarzania;
	var nwodasprawonosprzesylu;
	var nwodasprawnoscwykorzystania =1;
	var nwodasprawnoscakumulacji;
	var nwsk_CO2_cwu;
	var nEp_cwu_wsk;
	var ncwucena_paliwa;
	
	var nkoszt_paliwa;	
	var koszt_paliwa;
	
	var Ep_co;
	var EP_CO2_co;
	var Ek_co_kWh;
	
	var EP_cwu;
	var EP_CO2_cwu;
	var Ek_cwu_kWh;
	
	var nEp_co;
	var nEP_CO2_co;
	var nEk_co_kWh;
	
	var nEP_cwu;
	var nEP_CO2_cwu;
	var nEk_cwu_kWh;
	
	var zyskiEk_calkowite;
	var nzyskiEk_calkowite;
	
	//warstwa zmienna danych wskaźnikowych
	
	
	dane_wentylacja_przed = document.getElementById("rodzajwentylacji").value;
	
	
	dane_wentylacja_po = document.getElementById("21rodzajwentylacji").value;
	
	
	
	if (dane_wentylacja_przed == "wentylacjagrawitacyjna") {
		
		wsk_wentylacji_przed = 1;
		
	}else if(dane_wentylacja_przed == "wentylacjamechaniczna60") {
		
		wsk_wentylacji_przed = 0.49;
		
	}else if(dane_wentylacja_przed == "wentylacjamechaniczna85") {
		
		wsk_wentylacji_przed = 0.28;
		
	}
	
	if (dane_wentylacja_po == "wentylacjagrawitacyjna") {
		
		wsk_wentylacji_po = 1;
		
	}else if(dane_wentylacja_po == "wentylacjamechaniczna60") {
		
		wsk_wentylacji_po = 0.49;
		
	}else if(dane_wentylacja_po == "wentylacjamechaniczna85") {
		
		wsk_wentylacji_po = 0.28;
		
	}
		
	
	if (document.getElementById("czyzbiornikco").checked == false) {
		cosprawnoscakumulacji = 1;
		wodasprawnoscakumulacji = cosprawnoscakumulacji;
	}else{
		cosprawnoscakumulacji = 0.9;
		wodasprawnoscakumulacji = cosprawnoscakumulacji;
	}
	
	
		if (document.getElementById("pozbiornikco").checked == false) {
			ncosprawnoscakumulacji = 1;
			nwodasprawnoscakumulacji = 1;
		}else{
			ncosprawnoscakumulacji = 0.9;
			nwodasprawnoscakumulacji = 0.9;
		}	
			
	
	
	rodzajcwu = document.getElementById("rodzajcwu").value;
	
	 if(rodzajcwu == "cwupiecstarygazowy"){
      wodasprawnoscwytwarzania = 0.4;
	  wodasprawonosprzesylu = 1;
	  cwucena_paliwa = 0.2;
	  Ep_cwu_wsk = 1.1;
	  wsk_CO2_cwu = 56.1;
	  
   }else if(rodzajcwu  == "cwustarygazowy2000"){
      wodasprawnoscwytwarzania = 0.65;
	  wodasprawonosprzesylu = 0.8;
	  cwucena_paliwa = 0.2;
	  Ep_cwu_wsk = 1.1;
	  wsk_CO2_cwu = 56.1;
   }else if(rodzajcwu  == "cwunowygazowy"){
      wodasprawnoscwytwarzania = 0.83;
	  wodasprawonosprzesylu = 0.8;
	  cwucena_paliwa = 0.2;
	  Ep_cwu_wsk = 1.1;
	  wsk_CO2_cwu = 56.1;
   }else if(rodzajcwu  == "cwupiecgazowykondensacyjny"){
      wodasprawnoscwytwarzania = 0.85;
	  wodasprawonosprzesylu = 0.8;
	  cwucena_paliwa = 0.2;
	  Ep_cwu_wsk = 1.1;
	  wsk_CO2_cwu = 56.1;
   }else if(rodzajcwu  == "cwupodgrzewaczelektryczny"){
      wodasprawnoscwytwarzania = 0.96;
	  wodasprawonosprzesylu = 1;
	  cwucena_paliwa = 0.6;
	  Ep_cwu_wsk = 3.0;
	  wsk_CO2_cwu = 223.91;
   }else if(rodzajcwu  == "cwupowietrznapompacieplacwu"){
      wodasprawnoscwytwarzania = 2.6;
	  wodasprawonosprzesylu = 0.8;
	  cwucena_paliwa = 0.6;
	  Ep_cwu_wsk = 0;
	  wsk_CO2_cwu = 223.91;	
   }else if(rodzajcwu  == "cwugruntowapompaciepla"){
      wodasprawnoscwytwarzania = 3.0;
	  wodasprawonosprzesylu = 0.8;
	  cwucena_paliwa = 0.6;
	  Ep_cwu_wsk = 0;
	  wsk_CO2_cwu = 223.91;	
   }else if(rodzajcwu  == "cwugazowapompaciepla"){
      wodasprawnoscwytwarzania = 1.3;
	  wodasprawonosprzesylu = 0.8;
	  cwucena_paliwa = 0.2;
	  Ep_cwu_wsk = 0;
	  wsk_CO2_cwu = 56.1;	
   }else if(rodzajcwu  == "cwuwezelcieplny"){
      wodasprawnoscwytwarzania = 0.98;
	  wodasprawonosprzesylu = 0.8;
	  cwucena_paliwa = 0.24;
	  Ep_cwu_wsk = 1.3;
	  wsk_CO2_cwu = 95.48;	
   }



	nrodzajcwu = document.getElementById("21rodzajcwu").value;			
	
	
	if(nrodzajcwu == "cwupiecstarygazowy"){
      nwodasprawnoscwytwarzania = 0.4;
	  nwodasprawonosprzesylu = 1;
	  ncwucena_paliwa = 0.2;
	  nEp_cwu_wsk = 1.1;
	  nwsk_CO2_cwu = 56.1;	  
   }else if(nrodzajcwu  == "cwustarygazowy2000"){
      nwodasprawnoscwytwarzania = 0.65;
	  nwodasprawonosprzesylu = 0.8;
	  ncwucena_paliwa = 0.2;
	  nEp_cwu_wsk = 1.1;
	  nwsk_CO2_cwu = 56.1;
   }else if(nrodzajcwu  == "cwunowygazowy"){
      nwodasprawnoscwytwarzania = 0.83;
	  nwodasprawonosprzesylu = 0.8;
	  ncwucena_paliwa = 0.2;
	  nEp_cwu_wsk = 1.1;
	  nwsk_CO2_cwu = 56.1;
   }else if(nrodzajcwu  == "cwupiecgazowykondensacyjny"){
      nwodasprawnoscwytwarzania = 0.85;
	  nwodasprawonosprzesylu = 0.8;
	  ncwucena_paliwa = 0.2;
	nEp_cwu_wsk = 1.1;
	  nwsk_CO2_cwu = 56.1;
   }else if(nrodzajcwu  == "cwupodgrzewaczelektryczny"){
      nwodasprawnoscwytwarzania = 0.96;
	  nwodasprawonosprzesylu = 1;
	  ncwucena_paliwa = 0.6;
	  nEp_cwu_wsk = 3.0;
	  nwsk_CO2_cwu = 223.91;
   }else if(nrodzajcwu  == "cwupowietrznapompacieplacwu"){
      nwodasprawnoscwytwarzania = 2.6;
	  nwodasprawonosprzesylu = 0.8;
	  ncwucena_paliwa = 0.6;
	  nEp_cwu_wsk = 0;
	  nwsk_CO2_cwu = 223.91;	
   }else if(nrodzajcwu  == "cwugruntowapompaciepla"){
      nwodasprawnoscwytwarzania = 3.0;
	  nwodasprawonosprzesylu = 0.8;
	  ncwucena_paliwa = 0.6;
	  nEp_cwu_wsk = 0;
	  nwsk_CO2_cwu = 223.91;	
   }else if(nrodzajcwu  == "cwugazowapompaciepla"){
      nwodasprawnoscwytwarzania = 1.3;
	  nwodasprawonosprzesylu = 0.8;
	  ncwucena_paliwa = 0.2;
	  nEp_cwu_wsk = 0;
	  nwsk_CO2_cwu = 56.1;	
   }else if(nrodzajcwu  == "cwuwezelcieplny"){
      nwodasprawnoscwytwarzania = 0.98;
	  nwodasprawonosprzesylu = 0.8;
	  ncwucena_paliwa = 0.24;
	  nEp_cwu_wsk = 1.3;
	  nwsk_CO2_cwu = 95.48;	
   }
	

	rodzajco = document.getElementById("rodzajco").value;
	
	rodzajinstalacjico = document.getElementById("rodzajinstalacjico").value;

	if(rodzajco == "copieckaflowy"){
      cosprawnoscwytwarzania = 0.25;
	  cosprawnoscprzesyluciepla = 1;
	  cocena_paliwa = 0.14;
	  Ep_co_wsk = 1.1;
	  wsk_CO2_co = 94.69;
	  
   }else if (rodzajco == "coweglowyprzed1980"){
	cosprawnoscwytwarzania = 0.6;
	cosprawnoscprzesyluciepla = 0.96;
	cocena_paliwa = 0.14;
	Ep_co_wsk = 1.1;
	wsk_CO2_co = 94.69;   
   }else if (rodzajco == "coweglowy19802000"){
	cosprawnoscwytwarzania = 0.65;
	cosprawnoscprzesyluciepla = 0.96;
	cocena_paliwa = 0.14;
	Ep_co_wsk = 1.1;
	wsk_CO2_co = 94.69;   
   }else if (rodzajco == "coweglowy2000"){
	cosprawnoscwytwarzania = 0.82;
	cosprawnoscprzesyluciepla = 0.96;
	cocena_paliwa = 0.14;
	Ep_co_wsk = 1.1;
	wsk_CO2_co = 94.69;   
   }else if (rodzajco == "cokociolnabiomasestary"){
	cosprawnoscwytwarzania = 0.7;
	cosprawnoscprzesyluciepla = 0.96;
	cocena_paliwa = 0.12;
	Ep_co_wsk = 0.2;
	wsk_CO2_co = 112.00;   
   }else if (rodzajco == "cokociolnabiomasenowy"){
	cosprawnoscwytwarzania = 0.85;
	cosprawnoscprzesyluciepla = 0.96;
	cocena_paliwa = 0.2;
	Ep_co_wsk = 0.2;
	wsk_CO2_co = 112.00;   
   }else if (rodzajco == "cokominekzplaszczem"){
	cosprawnoscwytwarzania = 0.7;
	cosprawnoscprzesyluciepla = 0.96;
	cocena_paliwa = 0.12;
	Ep_co_wsk = 0.2;
	wsk_CO2_co = 112.00;   
   }else if (rodzajco == "cokominekzwykly"){
	cosprawnoscwytwarzania = 0.4;
	cosprawnoscprzesyluciepla = 1;
	cocena_paliwa = 0.12;
	Ep_co_wsk = 0.2;
	wsk_CO2_co = 112.00;   
   }else if (rodzajco == "cogrzejnikelektryczny"){
	cosprawnoscwytwarzania = 0.99;
	cosprawnoscprzesyluciepla = 0.96;
	cocena_paliwa = 0.6;
	Ep_co_wsk = 3.0;
	wsk_CO2_co = 223.91;   
   }else if (rodzajco == "copiecolejowy"){
	cosprawnoscwytwarzania = 0.84;
	cosprawnoscprzesyluciepla = 0.96;
	cocena_paliwa = 0.4;
	Ep_co_wsk = 1.1;
	wsk_CO2_co = 74.10;   
   }else if (rodzajco == "costarypiecgazowy"){
	cosprawnoscwytwarzania = 0.87;
	cosprawnoscprzesyluciepla = 0.96;
	cocena_paliwa = 0.2;
	Ep_co_wsk = 1.1;
	wsk_CO2_co = 56.10;   
   }else if (rodzajco == "copiecgazowykondensacyjny"){
	cosprawnoscwytwarzania = 0.94;
	cosprawnoscprzesyluciepla = 0.96;
	cocena_paliwa = 0.2;
	Ep_co_wsk = 1.1;
	wsk_CO2_co = 56.10;   
   }else if (rodzajco == "cogruntowapompaciepla"){
	cosprawnoscwytwarzania = 4.0;
	cosprawnoscprzesyluciepla = 0.96;
	cocena_paliwa = 0.6;
	Ep_co_wsk = 0;
	wsk_CO2_co = 223.91;   
   }else if (rodzajco == "copowietrznapompaciepla"){
	cosprawnoscwytwarzania = 3.0;
	cosprawnoscprzesyluciepla = 0.96;
	cocena_paliwa = 0.6;
	Ep_co_wsk = 0;
	wsk_CO2_co = 223.91;   
   }else if (rodzajco == "cogazowapompaciepla"){
	cosprawnoscwytwarzania = 1.6;
	cosprawnoscprzesyluciepla = 0.96;
	cocena_paliwa = 0.2;
	Ep_co_wsk = 0;
	wsk_CO2_co = 56.1;   
   }else if (rodzajco == "cowezelciepla"){
	cosprawnoscwytwarzania = 0.98;
	cosprawnoscprzesyluciepla = 0.96;
	cocena_paliwa = 0.24;
	Ep_co_wsk = 1.3;
	wsk_CO2_co = 95.48;   
   }
   
   
   	if(rodzajinstalacjico == "coprzesylogrzewaniekominkowe"){
	   cosprawonoscregulacjiiwykorzystania = 0.7;  
	}else if(rodzajinstalacjico == "coprzesylogrzewanieelektryczne"){
	   cosprawonoscregulacjiiwykorzystania = 0.91;  
	}else if(rodzajinstalacjico == "coprzesylgrzejnikibezregulacji"){
	   cosprawonoscregulacjiiwykorzystania = 0.77;  
	}else if(rodzajinstalacjico == "coprzesylgrzejnikizregulacja"){
	   cosprawonoscregulacjiiwykorzystania = 0.93;  
	}else if(rodzajinstalacjico == "coprzesylpodlogabezregulacji"){
	   cosprawonoscregulacjiiwykorzystania = 0.76;  
	}else if(rodzajinstalacjico == "coprzesylpodlogazregulacja"){
		cosprawonoscregulacjiiwykorzystania = 0.89;  
	}
    

		nrodzajco = document.getElementById("21rodzajco").value;	
		nrodzajinstalacjico = document.getElementById("21rodzajinstalacjico").value;
			
	
	

	 if(nrodzajco == "copieckaflowy"){
      ncosprawnoscwytwarzania = 0.25;
	  ncosprawnoscprzesyluciepla = 1;
	  ncocena_paliwa = 0.14;
	  nEp_co_wsk = 1.1;
	  nwsk_CO2_co = 94.69;
	  
   }else if (nrodzajco == "coweglowyprzed1980"){
	ncosprawnoscwytwarzania = 0.6;
	ncosprawnoscprzesyluciepla = 0.96;
	ncocena_paliwa = 0.14;
	nEp_co_wsk = 1.1;
	nwsk_CO2_co = 94.69;   
   }else if (nrodzajco == "coweglowy19802000"){
	ncosprawnoscwytwarzania = 0.65;
	ncosprawnoscprzesyluciepla = 0.96;
	ncocena_paliwa = 0.14;
	nEp_co_wsk = 1.1;
	nwsk_CO2_co = 94.69;   
   }else if (nrodzajco == "coweglowy2000"){
	ncosprawnoscwytwarzania = 0.82;
	ncosprawnoscprzesyluciepla = 0.96;
	ncocena_paliwa = 0.14;
	nEp_co_wsk = 1.1;
	nwsk_CO2_co = 94.69;   
   }else if (nrodzajco == "cokociolnabiomasestary"){
	ncosprawnoscwytwarzania = 0.7;
	ncosprawnoscprzesyluciepla = 0.96;
	ncocena_paliwa = 0.12;
	nEp_co_wsk = 0.2;
	nwsk_CO2_co = 112.00;   
   }else if (nrodzajco == "cokociolnabiomasenowy"){
	ncosprawnoscwytwarzania = 0.85;
	ncosprawnoscprzesyluciepla = 0.96;
	ncocena_paliwa = 0.2;
	nEp_co_wsk = 0.2;
	nwsk_CO2_co = 112.00;   
   }else if (nrodzajco == "cokominekzplaszczem"){
	ncosprawnoscwytwarzania = 0.7;
	ncosprawnoscprzesyluciepla = 0.96;
	ncocena_paliwa = 0.12;
	nEp_co_wsk = 0.2;
	nwsk_CO2_co = 112.00;   
   }else if (nrodzajco == "cokominekzwykly"){
	ncosprawnoscwytwarzania = 0.4;
	ncosprawnoscprzesyluciepla = 1;
	ncocena_paliwa = 0.12;
	nEp_co_wsk = 0.2;
	nwsk_CO2_co = 112.00;   
   }else if (nrodzajco == "cogrzejnikelektryczny"){
	ncosprawnoscwytwarzania = 0.99;
	ncosprawnoscprzesyluciepla = 0.96;
	ncocena_paliwa = 0.6;
	nEp_co_wsk = 3.0;
	nwsk_CO2_co = 223.91;   
   }else if (nrodzajco == "copiecolejowy"){
	ncosprawnoscwytwarzania = 0.84;
	ncosprawnoscprzesyluciepla = 0.96;
	ncocena_paliwa = 0.4;
	nEp_co_wsk = 1.1;
	nwsk_CO2_co = 74.10;   
   }else if (nrodzajco == "costarypiecgazowy"){
	ncosprawnoscwytwarzania = 0.87;
	ncosprawnoscprzesyluciepla = 0.96;
	ncocena_paliwa = 0.2;
	nEp_co_wsk = 1.1;
	nwsk_CO2_co = 56.10;   
   }else if (nrodzajco == "copiecgazowykondensacyjny"){
	ncosprawnoscwytwarzania = 0.94;
	ncosprawnoscprzesyluciepla = 0.96;
	ncocena_paliwa = 0.2;
	nEp_co_wsk = 1.1;
	nwsk_CO2_co = 56.10;   
   }else if (nrodzajco == "cogruntowapompaciepla"){
	ncosprawnoscwytwarzania = 4.0;
	ncosprawnoscprzesyluciepla = 0.96;
	ncocena_paliwa = 0.6;
	nEp_co_wsk = 0;
	nwsk_CO2_co = 223.91;   
   }else if (nrodzajco == "copowietrznapompaciepla"){
	ncosprawnoscwytwarzania = 3.0;
	ncosprawnoscprzesyluciepla = 0.96;
	ncocena_paliwa = 0.6;
	nEp_co_wsk = 0;
	nwsk_CO2_co = 223.91;   
   }else if (nrodzajco == "cogazowapompaciepla"){
	ncosprawnoscwytwarzania = 1.6;
	ncosprawnoscprzesyluciepla = 0.96;
	ncocena_paliwa = 0.2;
	nEp_co_wsk = 0;
	nwsk_CO2_co = 56.1;   
   }else if (nrodzajco == "cowezelciepla"){
	ncosprawnoscwytwarzania = 0.98;
	ncosprawnoscprzesyluciepla = 0.96;
	ncocena_paliwa = 0.24;
	nEp_co_wsk = 1.3;
	nwsk_CO2_co = 95.48;   
   }
   
   
   	if(nrodzajinstalacjico == "coprzesylogrzewaniekominkowe"){
	   ncosprawonoscregulacjiiwykorzystania = 0.7;  
	}else if(nrodzajinstalacjico == "coprzesylogrzewanieelektryczne"){
	   ncosprawonoscregulacjiiwykorzystania = 0.91;  
	}else if(nrodzajinstalacjico == "coprzesylgrzejnikibezregulacji"){
	   ncosprawonoscregulacjiiwykorzystania = 0.77;  
	}else if(nrodzajinstalacjico == "coprzesylgrzejnikizregulacja"){
	   ncosprawonoscregulacjiiwykorzystania = 0.93;  
	}else if(nrodzajinstalacjico == "coprzesylpodlogabezregulacji"){
	   ncosprawonoscregulacjiiwykorzystania = 0.76;  
	}else if(nrodzajinstalacjico == "coprzesylpodlogazregulacja"){
		ncosprawonoscregulacjiiwykorzystania = 0.89;  
	}
   

	
		//Warstwa obliczeń przed modernizacją
	
	gruboscstyropianusciany = document.getElementById("dscian").value/100;
	Ustarejsciany = 2;
	Rstarejsciany = 1/Ustarejsciany;
	Rnowe = Rstarejsciany+((gruboscstyropianusciany)/lambdastyropianu)+Rsisciany+Rsesciany;
	Unowe=(1/Rnowe)+0.05;
	
	temperaturawewnetrzna = document.getElementById("tw").value;
	stopniodni = Ldni*(temperaturawewnetrzna-temperaturasrednioroczna);
	
	Abudynku = document.getElementById("Adomu").value;
	
	Powierzchniascianautomatyczna = document.getElementById("powscian").value
		
	Qsciany = (Powierzchniascianautomatyczna*stopniodni*Unowe*24)/1000;
	qsciany = Qsciany/Abudynku;	
		
	Powierzchniaokienautomatyczna = document.getElementById("powokien").value
	
	Uokna = document.getElementById("uokna").value;
	
	Qokna = (Powierzchniaokienautomatyczna*stopniodni*Uokna*24)/1000;
	qokna = Qokna/Abudynku;	
		
	Udrzwi = document.getElementById("udrzwi").value;
	
	Powierzchniadrzwiautomatyczna = document.getElementById("powdrzwi").value
	
	Qdrzwi = (Powierzchniadrzwiautomatyczna*stopniodni*Udrzwi*24)/1000;
	qdrzwi = Qdrzwi/Abudynku;	
		
	gruboscwelnydach = document.getElementById("udachu").value/100;
	
	Udachu = 1/((gruboscwelnydach/lambdawelny)+Rsedachu+Rsidachu+0.8)+0.05;
		
	Powierzchniadachuautomatyczna = document.getElementById("powdachu").value
	
	Qdachu=(Powierzchniadachuautomatyczna*stopniodni*Udachu*24)/1000;
	qdachu=Qdachu/Abudynku;	
	
	Apodlogi= document.getElementById("powpodlogi").value
	
	gruboscstyropianpodloga = document.getElementById("upodlogi").value/100;
	
	Rpodlogi = 1/Upodlogi;
	
	Rpodloginowe = Rpodlogi+(gruboscstyropianpodloga/lambdastyropianu)+Rsipodlogi+Rsepodlogi;
	Upodloginowe = (1/Rpodloginowe)+0.05;
	Uekwiwalent =-0.1368*Upodloginowe*Upodloginowe+Upodloginowe*0.5431+0.05

	Qpodlogi=(1.45*stopniodni*Apodlogi*Uekwiwalent*24)/1000;
	qpodlogi=Qpodlogi/Abudynku;		
   
	kubaturaautomatyczna = document.getElementById("Vdomu").value
	
	Qwentylacji = stopniodni*kubaturaautomatyczna*ropow*n*wsk_wentylacji_przed*24/(1*3600);
	qwentylacji = Qwentylacji/Abudynku;
	
	Euogrzewania = qwentylacji + qpodlogi + qdachu + qokna + qdrzwi + qsciany;
		
	
	cosprawnosc = cosprawnoscwytwarzania*cosprawonoscregulacjiiwykorzystania*cosprawnoscprzesyluciepla*cosprawnoscakumulacji;
	cwusprawnosc = wodasprawnoscwytwarzania*wodasprawonosprzesylu*wodasprawnoscakumulacji*wodasprawnoscwykorzystania;
	
		
	Liczbaosob = document.getElementById("losob").value;
	Vdobowe = document.getElementById("zuzwody").value/100;
	
	QwodaEu = Liczbaosob*0.000277*24*Vdobowe*cw*rowody*(twodywyjscie-twodywejscie)*tuzytkowania/1000;
	QwodaEK = QwodaEu/cwusprawnosc;
	qwodaEK = QwodaEK/Abudynku;
		
	wewzyskiciepla = qint*tmwdomu*Abudynku/1000;
		
	solarnezyskiciepla = ci*li*Powierzchniaokienautomatyczna*wspzacienienia*gg*Ldni/365;
	
	zyskicieplacalkowitedopowierzchni = (solarnezyskiciepla+wewzyskiciepla)/Abudynku;
		
	Elnaogrzewanie = qelpompa*tel*Abudynku/1000;
	jElnaogrzewanie=Elnaogrzewanie/Abudynku;
	
	wodaElnaogrzewanie = wodaqelpompa*wodatel*Abudynku/1000;
	wodajElnaogrzewanie=wodaElnaogrzewanie/Abudynku;
	
	Eu_calkowite = Euogrzewania+QwodaEu/Abudynku-zyskicieplacalkowitedopowierzchni+wodajElnaogrzewanie+jElnaogrzewanie;
	Eu_calkowite = Math.round(Eu_calkowite*100)/100;
	

	zyskiEk_calkowite=Euogrzewania-zyskicieplacalkowitedopowierzchni;
	
	if (zyskiEk_calkowite<0) { zyskiEk_calkowite = 0;}
	
	Ek_calkowite = (zyskiEk_calkowite)/cosprawnosc+qwodaEK+wodajElnaogrzewanie+jElnaogrzewanie;
	Ek_calkowite = Math.round(Ek_calkowite*100)/100;
	
	Ek_calkowite_kWh = Math.round(Ek_calkowite*Abudynku);
	
	Ek_calkowite_GJ = Math.round(Ek_calkowite_kWh*0.0036*100)/100;
	
	Ep_calkowite=(Math.round((Ek_calkowite_GJ*1.1)*100))/100;
	
	koszt_paliwa = cocena_paliwa*(Ek_calkowite*Abudynku - QwodaEK)+ cwucena_paliwa*QwodaEK;
	koszt_paliwa = (Math.round((koszt_paliwa)*100))/100;
	
	
	Ek_co_GJ = ((Ek_calkowite-qwodaEK)*Abudynku)*0.0036;
	
	Ek_cwu_GJ = QwodaEK*0.0036;
	
	
	Ep_co=Ep_co_wsk*Ek_co_GJ;
	
	EP_cwu=Ep_cwu_wsk*Ek_cwu_GJ;
	
	
	EP_CO2_co = wsk_CO2_co*Ep_co;
	
	EP_CO2_cwu = wsk_CO2_cwu*EP_cwu;	
	
	Ep_CO2 = Math.round((EP_CO2_co+EP_CO2_cwu)*100/1000)/100;
		

	
	//po modernizacji
	
	ngruboscstyropianusciany = document.getElementById("21dscian").value/100;
	nRnowe = Rstarejsciany+((ngruboscstyropianusciany)/lambdastyropianu)+Rsisciany+Rsesciany;
	nUnowe=(1/nRnowe)+0.05;

	
	nQsciany = (Powierzchniascianautomatyczna*stopniodni*nUnowe*24)/1000;
	nqsciany = nQsciany/Abudynku;	
	

	nUokna = document.getElementById("21uokna").value;
	
	nQokna = (Powierzchniaokienautomatyczna*stopniodni*nUokna*24)/1000;
	nqokna = nQokna/Abudynku;	
		
	nUdrzwi = document.getElementById("21udrzwi").value;
	
	nQdrzwi = (Powierzchniadrzwiautomatyczna*stopniodni*nUdrzwi*24)/1000;
	nqdrzwi = nQdrzwi/Abudynku;	
	

	ngruboscwelnydach = document.getElementById("21udachu").value/100;
	
	nUdachu = 1/((ngruboscwelnydach/lambdawelny)+Rsedachu+Rsidachu+0.8)+0.05;
	
	nQdachu=(Powierzchniadachuautomatyczna*stopniodni*nUdachu*24)/1000;
	nqdachu=nQdachu/Abudynku;	
	
	
	ngruboscstyropianpodloga = document.getElementById("21upodlogi").value/100;
		
	nRpodloginowe = Rpodlogi+(ngruboscstyropianpodloga/lambdastyropianu)+Rsipodlogi+Rsepodlogi;
	nUpodloginowe = (1/nRpodloginowe)+0.05;
	nUekwiwalent =-0.1368*nUpodloginowe*nUpodloginowe+nUpodloginowe*0.5431+0.05

	nQpodlogi=(1.45*stopniodni*Apodlogi*nUekwiwalent*24)/1000;
	nqpodlogi=nQpodlogi/Abudynku;		

	nQwentylacji = stopniodni*kubaturaautomatyczna*ropow*n*wsk_wentylacji_po*24/(1*3600);
	nqwentylacji = nQwentylacji/Abudynku;
		
	nEuogrzewania = nqwentylacji + nqpodlogi + nqdachu + nqokna + nqdrzwi + nqsciany;
			
	ncosprawnosc = ncosprawnoscwytwarzania*ncosprawonoscregulacjiiwykorzystania*ncosprawnoscprzesyluciepla*ncosprawnoscakumulacji;
	ncwusprawnosc = nwodasprawnoscwytwarzania*nwodasprawonosprzesylu*nwodasprawnoscakumulacji*nwodasprawnoscwykorzystania;
		
	nQwodaEK = QwodaEu/ncwusprawnosc;
	nqwodaEK = nQwodaEK/Abudynku;
	
	nEu_calkowite = nEuogrzewania+QwodaEu/Abudynku-zyskicieplacalkowitedopowierzchni+wodajElnaogrzewanie+jElnaogrzewanie;
		
	nEu_calkowite = Math.round(nEu_calkowite*100)/100;
	

	
	nzyskiEk_calkowite = nEuogrzewania-zyskicieplacalkowitedopowierzchni;
	
	if (nzyskiEk_calkowite<0) { nzyskiEk_calkowite = 0;}
	
	nEk_calkowite = (nzyskiEk_calkowite)/ncosprawnosc+nqwodaEK+wodajElnaogrzewanie+jElnaogrzewanie;
	nEk_calkowite = Math.round(nEk_calkowite*100)/100;
	
	nEk_calkowite_kWh = Math.round(nEk_calkowite*Abudynku);
	
	nEk_calkowite_GJ = Math.round(nEk_calkowite_kWh*0.0036*100)/100;
	
	
	nEk_co_GJ = ((nEk_calkowite-nqwodaEK)*Abudynku)*0.0036;
	
	nEk_cwu_GJ = nQwodaEK*0.0036;
	
	
	nEp_co=nEp_co_wsk*nEk_co_GJ;
	
	nEP_cwu=nEp_cwu_wsk*nEk_cwu_GJ;

	
	nEP_CO2_co = nwsk_CO2_co*nEp_co;
	
	nEP_CO2_cwu = nwsk_CO2_cwu*nEP_cwu;	
	
	nEp_CO2 = Math.round((nEP_CO2_co+nEP_CO2_cwu)*100/1000)/100;

	
	delta_Ek_calkowite = Math.round((Ek_calkowite-nEk_calkowite)*100)/100;
	delta_Ek_calkowite_kWh = Math.round((Ek_calkowite_kWh-nEk_calkowite_kWh)*100)/100;
	delta_Ek_calkowite_GJ = Math.round((Ek_calkowite_GJ-nEk_calkowite_GJ)*100)/100;	
	
	delta_Ep_CO2 = Math.round((Ep_CO2-nEp_CO2)*100)/100;
	
	
	nkoszt_paliwa = ncocena_paliwa*(nEk_calkowite*Abudynku - nQwodaEK)+ ncwucena_paliwa*nQwodaEK;
	nkoszt_paliwa = (Math.round((nkoszt_paliwa)*100))/100;
	
	delta_koszt_paliwa = Math.round((koszt_paliwa-nkoszt_paliwa)*100)/100;
	
	//wyniki przed modernizacją
	
	document.getElementById("Uscian").innerHTML =  (Math.round(Unowe*100))/100;
	document.getElementById("Udachu").innerHTML = (Math.round(Udachu*100))/100;
	document.getElementById("Upodlogi").innerHTML =  (Math.round(Uekwiwalent*100))/100;
	
	
	document.getElementById("wynik1").innerHTML =  Ek_calkowite;
	document.getElementById("wynik2").innerHTML = Ek_calkowite_kWh;
	document.getElementById("wynik2GJ").innerHTML = Ek_calkowite_GJ;
	
	
	document.getElementById("wynik4").innerHTML = koszt_paliwa;
	document.getElementById("wynik5").innerHTML = Ep_CO2;
	
	document.getElementById("kosztpaliwaprzed").innerHTML ='<label> Przyjęty jednostkowy koszt paliwa do CO przed modernizacją: <input type="number" id="kosztcoprzed" name="kosztcoprzed" step="0.01" value="'+cocena_paliwa+'" oninput="kosztypaliw()"> zł/kWh</label>';

	
	document.getElementById("kosztpaliwaprzedcwu").innerHTML = '<label> Przyjęty jednostkowy koszt paliwa do CWU przed modernizacją: <input type="number" id="kosztcwuprzed" name="kosztcwuprzed" step="0.01" value="'+cwucena_paliwa+'" oninput="kosztypaliw()"> zł/kWh</label>';
	
	

	//po modernizacji
	
	document.getElementById("Uscianpo").innerHTML = (Math.round(nUnowe*100))/100;
	document.getElementById("Udachupo").innerHTML =  (Math.round(nUdachu*100))/100 ;
	document.getElementById("Upodlogipo").innerHTML =  (Math.round(nUekwiwalent*100))/100 ;
	
	document.getElementById("wynik6").innerHTML =  nEk_calkowite;
	
	document.getElementById("wynik7").innerHTML =  nEk_calkowite_kWh ;
	document.getElementById("wynik7GJ").innerHTML =   nEk_calkowite_GJ ;
	
	
	document.getElementById("wynik9").innerHTML = nkoszt_paliwa ;
	document.getElementById("wynik10").innerHTML = nEp_CO2 ;

	document.getElementById("kosztpaliwapo").innerHTML = '<label> Przyjęty jednostkowy koszt paliwa do CO po modernizacji: <input type="number" id="kosztcopo" name="kosztcopo" step="0.01" value="'+ncocena_paliwa+'" oninput="kosztypaliw()"> zł/kWh</label>';
		
	
	document.getElementById("kosztpaliwapocwu").innerHTML = '<label> Przyjęty jednostkowy koszt paliwa do CWU po modernizacji: <input type="number" id="kosztcwupo" name="kosztcwupo" step="0.01" value="'+ncwucena_paliwa+'" oninput="kosztypaliw()"> zł/kWh</label>';
	

	//różnice
	
	
	document.getElementById("wynik12").innerHTML ='<div class="p5">'+delta_Ek_calkowite_kWh+'</div';
	document.getElementById("wynik12GJ").innerHTML ='<div class="p5">'+delta_Ek_calkowite_GJ+'</div>';
	
	document.getElementById("wynik14").innerHTML = '<div class="p5">'+delta_koszt_paliwa+'</div>';
	document.getElementById("wynik15").innerHTML = '<div class="p5">'+delta_Ep_CO2+'</div>';

	//do kosztów paliw
	document.getElementById("1wynikQwodaEK").innerHTML = '<input type="number" id="wynikQwodaEK" name="wynikQwodaEK" value="'+QwodaEK+'" >';	
	document.getElementById("1wyniknQwodaEK").innerHTML = '<input type="number" id="wyniknQwodaEK" name="wyniknQwodaEK" value="'+nQwodaEK+'" >';
	document.getElementById("1wynikEk_calkowite").innerHTML = '<input type="number" id="wynikEk_calkowite" name="wynikEk_calkowite" value="'+Ek_calkowite+'" >';	
	document.getElementById("1wyniknEk_calkowite").innerHTML = '<input type="number" id="wyniknEk_calkowite" name="wyniknEk_calkowite" value="'+nEk_calkowite+'" >';		

}

//kliki do wersji mobilnej

function wodazatwierdz(){
	document.getElementById("wodazatwierdz").innerHTML = '<button onclick="wodazatwierdz1()">Zatwierdź</button>';	
}

function wodazatwierdz1(){
	zuzwodyselect();
	document.getElementById("wodazatwierdz").innerHTML = '';
}
//---
function rodzajdomuzatwierdz(){
	document.getElementById("rodzajdomuzatwierdz").innerHTML = '<button onclick="rodzajdomuzatwierdz1()">Zatwierdź</button>';	
}

function rodzajdomuzatwierdz1(){
	rodzajdomu();
	document.getElementById("rodzajdomuzatwierdz").innerHTML = '';
}
//---
function rodzajcozatwierdz(){
	document.getElementById("rodzajcozatwierdzb").innerHTML = '<button onclick="rodzajcozatwierdz1()">Zatwierdź</button>';	
}

function rodzajcozatwierdz1(){
	rodzajco1();
	document.getElementById("rodzajcozatwierdzb").innerHTML = '';
	
}
//---
function rodzajinstalacjicozatwierdz(){
	document.getElementById("rodzajinstalacjicozatwierdz").innerHTML = '<button onclick="rodzajinstalacjicozatwierdz1()">Zatwierdź</button>';	
}

function rodzajinstalacjicozatwierdz1(){
	rodzajconadole();
	document.getElementById("rodzajinstalacjicozatwierdz").innerHTML = '';
	document.getElementById("rodzajcozatwierdzb").innerHTML = '';
}
//---
function rodzajinstalacjicwuzatwierdz(){
	document.getElementById("rodzajinstalacjicwuzatwierdz").innerHTML = '<button onclick="rodzajinstalacjicwuzatwierdz1()">Zatwierdź</button>';	
}

function rodzajinstalacjicwuzatwierdz1(){
	selectnieaktywnyrodzajcwu();
	document.getElementById("rodzajinstalacjicwuzatwierdz").innerHTML = '';
}
//---
function rodzajco1zatwierdz(){
	document.getElementById("rodzajco1zatwierdz").innerHTML = '<button onclick="rodzajco1zatwierdz1()">Zatwierdź</button>';	
}

function rodzajco1zatwierdz1(){
	rodzajco4();
	document.getElementById("rodzajco1zatwierdz").innerHTML = '';
}
//---
function rodzajinstalacjico1zatwierdz(){
	document.getElementById("rodzajinstalacjico1zatwierdz").innerHTML = '<button onclick="rodzajinstalacjico1zatwierdz1()">Zatwierdź</button>';	
}

function rodzajinstalacjico1zatwierdz1(){
	selectrodzajinstalacjico2();
	document.getElementById("rodzajinstalacjico1zatwierdz").innerHTML = '';
}
//---
function rodzajinstalacjicwu1zatwierdz(){
	document.getElementById("rodzajinstalacjicwu1zatwierdz").innerHTML = '<button onclick="rodzajinstalacjicwu1zatwierdz1()">Zatwierdź</button>';	
}

function rodzajinstalacjicwu1zatwierdz1(){
	selectrodzajcwu();
	document.getElementById("rodzajinstalacjicwu1zatwierdz").innerHTML = '';
}
//---
function rodzajwentylacji1zatwierdz(){
	document.getElementById("rodzajwentylacji1zatwierdz").innerHTML = '<button onclick="rodzajwentylacji1zatwierdz1()">Zatwierdź</button>';	
}

function rodzajwentylacji1zatwierdz1(){
	wentylacjaselect();
	document.getElementById("rodzajwentylacji1zatwierdz").innerHTML = '';
}

//---
function rodzajdrzwizatwierdz(){
	document.getElementById("rodzajdrzwizatwierdz").innerHTML = '<button onclick="rodzajdrzwizatwierdz1()">Zatwierdź</button>';	
}

function rodzajdrzwizatwierdz1(){
	rodzajdrzwi();
	document.getElementById("rodzajdrzwizatwierdz").innerHTML = '';
}
//---
function rodzajokienzatwierdz(){
	document.getElementById("rodzajokienzatwierdz").innerHTML = '<button onclick="rodzajokienzatwierdz1()">Zatwierdź</button>';	
}

function rodzajokienzatwierdz1(){
	rodzajokien();
	document.getElementById("rodzajokienzatwierdz").innerHTML = '';
}
//---
function rodzajcoprzedzatwierdz(){
	document.getElementById("rodzajcoprzedzatwierdz").innerHTML = '<button onclick="rodzajcoprzedzatwierdz1()">Zatwierdź</button>';	
}

function rodzajcoprzedzatwierdz1(){
	rodzajco();
	document.getElementById("rodzajcoprzedzatwierdz").innerHTML = '';
}

//---
function rodzajcopozatwierdz(){
	document.getElementById("rodzajcopozatwierdz").innerHTML = '<button onclick="rodzajcopozatwierdz1()">Zatwierdź</button>';	
}

function rodzajcopozatwierdz1(){
	rodzajco2();
	document.getElementById("rodzajcopozatwierdz").innerHTML = '';
}


//koniec kliknij do wersji mobilnej

function kosztypaliw(){
	
	var Abudynku = document.getElementById("Adomu").value;	
	
	var QwodaEK = document.getElementById("wynikQwodaEK").value;
	var nQwodaEK = document.getElementById("wyniknQwodaEK").value;
	
	
	var Ek_calkowite = document.getElementById("wynikEk_calkowite").value;
	var nEk_calkowite = document.getElementById("wyniknEk_calkowite").value;
	


	var cocena_paliwa = document.getElementById("kosztcoprzed").value;
	var cwucena_paliwa = document.getElementById("kosztcwuprzed").value;
	
	var ncocena_paliwa = document.getElementById("kosztcopo").value;
	var ncwucena_paliwa = document.getElementById("kosztcwupo").value;	
	
	
	var koszt_paliwa = cocena_paliwa*(Ek_calkowite*Abudynku - QwodaEK)+ cwucena_paliwa*QwodaEK;
	koszt_paliwa = (Math.round((koszt_paliwa)*100))/100;
	
	
	var nkoszt_paliwa = ncocena_paliwa*(nEk_calkowite*Abudynku - nQwodaEK)+ ncwucena_paliwa*nQwodaEK;
	nkoszt_paliwa = (Math.round((nkoszt_paliwa)*100))/100;
	
	delta_koszt_paliwa = Math.round((koszt_paliwa-nkoszt_paliwa)*100)/100;
		
	
	document.getElementById("wynik4").innerHTML = koszt_paliwa;
	document.getElementById("wynik9").innerHTML = nkoszt_paliwa ;
	document.getElementById("wynik14").innerHTML = '<div class="p5">'+delta_koszt_paliwa+'</div>';

	
}


function unhide(){

	
	
	document.getElementById("daneszczegolowe").style.display = "block";
	document.getElementById("obliczwstepne").style.display = "none";
	document.getElementById("obliczwstepne1").style.display = "block";
	} 

function hide(){


	document.getElementById("daneszczegolowe").style.display = "none";
	document.getElementById("obliczwstepne").style.display = "block";
	document.getElementById("obliczwstepne1").style.display = "none";
}
	
	


