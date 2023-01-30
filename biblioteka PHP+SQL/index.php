<?php

// inicjacja sesji
session_start();


if (!isset($_SESSION['zalogowany']))
{
	header('Location: biblioteka-logowanie');
	exit();
}	


$a=null;
if(isset($_SESSION['zm_sesji'])){
// użycie zmiennej

$a=$_SESSION['zm_sesji'];

unset($_SESSION['zm_sesji']);
}

?>



<!DOCTYPE HTML>
<html lang="pl">

<head>
<meta charset="utf-8" />
<title> Biblioteka </title>
<meta name="keywords" content="baza książek, książki, biblioteka" />
<meta name="description" content="Strona biblioteki" />
<meta name="author" content="WK" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

<link rel="stylesheet" href="biblioteka.css" type="text/css"/>

	<script>
	function lista(){
		
		
	var x = document.getElementById('kol').value;



	switch(x){

		case "kod_wypozyczajacy":
		case "sygnatura_ksiazki":
		document.getElementById('update_str_1').innerHTML ='<input type="text" id="update" name="update" required >';
		break;

		case "data_wypozyczenia":
		case "data_oddania":
		document.getElementById('update_str_1').innerHTML ='<input type="date" id="update" name="update" required >';
		break;

		case "status":
		document.getElementById('update_str_1').innerHTML ='<label for="update">Status:</label><select id="update" name="update" required ><option value="zamowiona">Zamówiona</option> <option value="do_odbioru">Do odbioru</option> <option value="wypozyczona">Wypożyczona</option></select>';
		break;				
		}	
	}
	
	function lista1(){
				
		
	var x = document.getElementById('kol1').value;



	switch(x){

		case "tytul_ksiazki":
		case "sygnatura":
		case "imie_nazwisko_autora":
		document.getElementById('update_str_2').innerHTML ='<input type="text" id="update" name="update" required >';
		break;

		case "rok_wydania":
		case "liczba_dostepnych":
		document.getElementById('update_str_2').innerHTML ='<input type="number" id="update" step="1" min="0" name="update" required >';
		break;
			
		}	
	}
	
		function lista2(){
					

			
	var x = document.getElementById('kol2').value;



	switch(x){

		case "kod_identyfikacyjny":
		case "imie":
		case "nazwisko":
		document.getElementById('update_str_3').innerHTML ='<input type="text" id="update" name="update" required >';
		break;

		case "pesel":
		document.getElementById('update_str_3').innerHTML ='<input type="number" id="update" name="update" required >';
		break;
		case "typ_klienta":
		document.getElementById('update_str_3').innerHTML ='<label for="update">Wybierz typ klienta:</label><select id="update" name="update" required ><option value="uczen_person">Uczeń</option><option value="student_person">Student</option><option value="nauczyciel_person">Nauczyciel</option><option value="zwykly_person">Zwykły</option></select>';
		break;
		}	
	}

	
	function lista3(){
				
	var x = document.getElementById('search_table').value;

	switch(x){

		case "wypozyczenia":
		document.getElementById('kolumna_rodzaj').innerHTML ='<select id="column_search" name="column_search" onclick="lista4()" required ><option value="wypozyczenia_id_wypozyczenia">ID wypożyczenia</option><option value="wypozyczenia_kod_identyfikacyjny">Kod identyfikacyjny osoby</option><option value="wypozyczenia_imie_nazwisko">Imię i nazwisko osoby</option><option value="wypozyczenia_sygnatura_ksiazki">Sygnatura książki</option><option value="wypozyczenia_tytul_ksiazki">Tytuł książki</option><option value="wypozyczenia_data_wypozyczenia">Data wypożyczenia</option><option value="wypozyczenia_data_do_oddania">Data do oddania</option><option value="wypozyczenia_status">Status</option></select>';
		
		
		break;

		case "ksiazki":
		document.getElementById('kolumna_rodzaj').innerHTML ='<select id="column_search" name="column_search" required ><option value="ksiazki_sygnatura">Sygnatura książki </option><option value="ksiazki_tytul_ksiazki">Tytuł książki</option><option value="ksiazki_imie_nazwisko_autora">Imię i nazwisko autora</option><option value="ksiazki_rok_wydania">Rok wydania</option><option value="ksiazki_liczba_dostepnych">Liczba dostępnych książek</option><option value="ksiazki_liczba_ogolem">Liczba książek ogółem w bazie</option></select>';
		break;

		case "uzytkownicy":
		document.getElementById('kolumna_rodzaj').innerHTML ='<select id="column_search" name="column_search" required ><option value="uzytkownicy_kod_identyfikacyjny">Kod identyfikacyjny osoby </option><option value="uzytkownicy_imie">Imię</option><option value="uzytkownicy_nazwisko">Nazwisko</option><option value="uzytkownicy_pesel">Pesel</option><option value="uzytkownicy_typ_klienta">Typ klienta</option></select>';
		break;				
		}

	lista4();
		
	}
	
	function lista4(){
		
		var x = document.getElementById('column_search').value;
		
		
		if (x == "wypozyczenia_imie_nazwisko"){
			
		document.getElementById('search_fraza_div').innerHTML ='<input  type="text" name="search_fraza_imie" id="search_fraza_imie" placeholder="tu wpisz imie"><br/><input  type="text" name="search_fraza_nazwisko" id="search_fraza_nazwisko" placeholder="tu wpisz nazwisko">';	
		}else{
			
		document.getElementById('search_fraza_div').innerHTML ='<input required type="text" name="search_fraza" id="search_fraza" placeholder="tu wpisz szukaną frazę">';

		}
	}
	
	</script>


</head>

<body>

<div id="version" style="text-align: right">
<a href="#" style="text-decoration: none; color: gray;">Wersja polska</a> / <a style="text-decoration: none; color: gray;" href="header.php" >English version</a>
</div>

<h1> Panel administracyjny biblioteki</h1>

<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  background-color: #ACB4BD;
}

.flex-container > div {
  width: 150px;
  margin: 5px;
  text-align: center;
}
</style>


<nav>

<div class="flex-container">
  <div>
  
  	<form action="biblioteka-strona-glowna" method="post" >
	<input hidden type="text" name="name" value="d">
	<button class="spis" type="submit" value="">Wyszukaj</button>
	</form>
  
  </div>
  
  <div>
  	<form action="biblioteka-strona-glowna" method="post" >
	<input hidden type="text" name="name" value="a">
	<button class="spis" type="submit" value="">Wypożyczenia</button>
	</form>
  </div>
  
  <div>
  	<form action="biblioteka-strona-glowna" method="post">
	<input hidden type="text" name="name" value="b">
	<button class="spis" type="submit" value="">Książki</button>
	</form>
  </div> 
  
  <div>
  	<form action="biblioteka-strona-glowna" method="post">
	<input hidden type="text" name="name" value="c">
	<button class="spis" type="submit" value="">Użytkownicy</button>
	</form>
  </div>
  
  <div>
  	<form action="logout.php" method="post" >
	<button class="spis" type="submit" value="">Wyloguj się</button>
	</form>
  </div>

</div>

</nav>



<div id="startowa">

<h2> Strona startowa biblioteki </h2>

<div id="text_startowa">

<h3> Panel symuluje prostą bazę biblioteczną z poziomu bibliotekarza. </h3>
<h3> Panel umożliwia bibliotekarzowi w bazie danych dodawanie nowych wypożyczeń książek oraz usuwanie wypożyczeń przy oddaniu książki przez użytkowników biblioteki. </h3>
<h3> Możliwe jest także dodanie lub usunięcie nowego użytkownika biblioteki oraz dodanie nowych pozycji książkowych lub usunięcie starych. </h3>
<h3> W przypadku pomyłki bibliotekarz ma możliwość korekty danych </h3>
<h3> Wybierz w menu operację, którą chcesz wykonać. </h3>
</div>

</div>


<div id="wyszukaj">

<h2> Wyszukaj </h2>


<div class="flex">


<div class="border1" style="width: 350px;">

	<form action="biblioteka-strona-glowna" method="post">

	<h3> Podaj szukane dane </h3>
	

<div class="alignment">	
<div class="flex2">

	  <label for="status">Wybierz rodzaj tabeli:</label>
	  
	  </div> <div>
	  
	  <select id="search_table" name="search_table" onclick="lista3()" required >
		<option value="wypozyczenia">Wypożyczenia</option>
		<option value="ksiazki">Książki</option>
		<option value="uzytkownicy">Użytkownicy</option>
	  </select>
</div>	  
	  </div>


<div class="alignment">	
<div class="flex2">
	  <label for="status">Wybierz rodzaj kolumny:</label>
	  
	  </div> <div>
	  
<div id="kolumna_rodzaj">  
	  <select id="column_search" name="column_search" onclick="lista4()" required ><option value="wypozyczenia_id_wypozyczenia">ID wypożyczenia</option><option value="wypozyczenia_kod_identyfikacyjny">Kod identyfikacyjny osoby</option><option value="wypozyczenia_imie_nazwisko">Imię i nazwisko osoby</option><option value="wypozyczenia_sygnatura_ksiazki">Sygnatura książki</option><option value="wypozyczenia_tytul_ksiazki">Tytuł książki</option><option value="wypozyczenia_data_wypozyczenia">Data wypożyczenia</option><option value="wypozyczenia_data_do_oddania">Data do oddania</option><option value="wypozyczenia_status">Status</option></select>
</div>	  
	  </div>
</div>


<div class="alignment">	
<div class="flex2">
	  <label for="status">Zakres wyszukiwania:</label>
	  
	  </div> <div>
	  
<div id="kolumna_rodzaj">  
	  <select id="column_search_type" name="column_search_type"  required ><option value="between">Fraza zawierająca podany fragment</option><option value="accurate">Dokładna fraza (nic poza nią) </option><option value="start">Fraza rozpoczyna się podanymi znakami</option><option value="end">Fraza kończy się podanymi znakami</option></select>
</div>	  
	  </div>
</div>

	<div class="alignment">

<div class="flex2">


	Podaj szukaną frazę: </div> 
	
	<div id="search_fraza_div"> 
	
	<input required type="text" name="search_fraza" id="search_fraza" placeholder="tu wpisz szukaną frazę">
	
	</div>
	
</div>

	  	  
	<div class="flex">
		<input type="submit" value="Zatwierdź">
		
	</div>
	
	</form>
</div>


</div>

</div>


<div id="wypozyczenia">

<h2> Wypożyczenia </h2>


<style>
.flex{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
}

</style>



<div class="flex">
<div class="border">
	<form action="insertUser.php" method="post">

	<h3> Dodaj wypożyczenie </h3>
	
	<div class="alignment">
<div class="flex2">
 Kod identyfikacyjny:</div> <div><input required type="text" name="osoba" placeholder="np. WET23"></div>
</div>
	<?php
	if(isset($_SESSION['kodIdentyfikacyjny']))
	{
		echo '<div class="error">'.$_SESSION['kodIdentyfikacyjny'].'</div>';
		unset($_SESSION['kodIdentyfikacyjny']);
	}

	?>
		<div class="alignment">
<div class="flex2">
 Sygnatura książki: </div> <div> <input required type="text" name="ksiazka" placeholder="np. ADF46"></div>
</div>
	<?php
	if(isset($_SESSION['sygnatura']))
	{
		echo '<div class="error">'.$_SESSION['sygnatura'].'</div>';
		unset($_SESSION['sygnatura']);
	}

	?>
<div class="alignment">
<div class="flex2">
	Data wypożyczenia: </div> <div> <input required  type="date" min="<?php echo date("Y-m-d"); ?>" name="dataWypozyczenia"></div>
	
</div>	
	

	<div>Data oddania: Książkę należy oddać w termienie 2 tygodni od daty wypożyczenia</div>
	<div>Data wypożyczenia liczy się od dnia zamówienia książki a nie od dnia odbioru książki</div>
	
<div class="alignment">	
<div class="flex2">


	  <label for="status">Status:</label>
	  
	  </div> <div>
	  
	  
	  <select id="status" name="status" required >
		<option value="zamowiona">Zamówiona</option>
		<option value="do_odbioru">Do odbioru</option>
		<option value="wypozyczono">Wypożyczona</option>
	  </select>
	  
	  </div>
</div>
		  	<?php
	if(isset($_SESSION['liczba_ksiazek']))
	{
		echo '<div class="error">'.$_SESSION['liczba_ksiazek'].'</div>';
		unset($_SESSION['liczba_ksiazek']);
	}

?>  
	  <br/>
	  <br/>
	  <br/>
	  
	  
	<div class="flex1">
		<input type="submit" value="Zatwierdź">
		
	</div>
	
	</form>
</div>


<div class="border">
	<form action="deleteUser.php" method="post">

	<h3> Usuń wypożyczenie </h3>
	
		<div class="alignment">
<div class="flex2">

	ID wypożyczenia: </div><div> <input type="number" min="1" step="1" name="idWypozyczenie" placeholder="np. 1" required ></div>
</div>

	<?php
	if(isset($_SESSION['idwypozyczeniausun']))
	{
		echo '<div class="error">'.$_SESSION['idwypozyczeniausun'].'</div>';
		unset($_SESSION['idwypozyczeniausun']);
	}
	?>

	<div>W przypadku oddania książki do biblioteki przez wypożyczającego należy usunąć wypożyczenie z bazy</div>
	
	
	<br/>
	<br/>
	<br/>
	
<div class="flex1">
	<input type="submit" value="Zatwierdź">
</div>	
	</form>

</div>


<div class="border">

	<form action="updateUser.php" method="post">

	<h3> Zmień dane w tabeli</h3>
	<div class="alignment">
<div class="flex2">
	
	<label for="id">ID wypożyczenia: </label></div>
	<div><input type="number" id="id" name="id" min="1" step="1" placeholder="np. 1" required > </div>
</div>

	<?php
	if(isset($_SESSION['idwypozyczeniaupdate']))
	{
		echo '<div class="error">'.$_SESSION['idwypozyczeniaupdate'].'</div>';
		unset($_SESSION['idwypozyczeniaupdate']);
	}
	?>
	
<div class="alignment">
<div class="flex2">
	

	<label for="kol">Kolumna do zmiany: </label></div>
	<div>

	<select id="kol" name="kol" onclick="lista()" required > 
	<option value="kod_wypozyczajacy">Kod identyfikacyjny osoby</option>
	<option value="sygnatura_ksiazki">Sygnatura książki</option>
	<option value="data_wypozyczenia">Data wypożyczenia</option>
	<option value="data_oddania">Data do oddania książki</option>
	<option value="status">Status</option>
	</select>

	</div>
</div>

<div class="alignment">
<div class="flex2">
	

	Zmienić na: </div>
	<div id="update_str_1"> <input type="text" id="update" name="update" placeholder="tu wpisz na co zmienić" required > </div>
</div>
	<?php
	if(isset($_SESSION['kodIdentyfikacyjny1']))
	{
		echo '<div class="error">'.$_SESSION['kodIdentyfikacyjny1'].'</div>';
		unset($_SESSION['kodIdentyfikacyjny1']);
	}
	?>

	<?php
	if(isset($_SESSION['sygnatura1']))
	{
		echo '<div class="error">'.$_SESSION['sygnatura1'].'</div>';
		unset($_SESSION['sygnatura1']);
	}
	?>
	
	<?php
	if(isset($_SESSION['update_book_sygnatura']))
	{
		echo '<div class="error">'.$_SESSION['update_book_sygnatura'].'</div>';
		unset($_SESSION['update_book_sygnatura']);
	}
	?>
	

	<br/>
	<br/>
	<br/>
	
<div class="flex1">
	<input type="submit" value="Zatwierdź">
</div>
	</form>

</div>

</div>
</div>

<div id="ksiazki">

<h2> Książki </h2>

<div class="flex">

<div class="border">

<form action="insertBook.php" method="post">

<h3> Dodaj książkę </h3>

<div class="alignment">
<div class="flex2">
	

Sygnatura książki: </div><div> <input required type="text" name="sygnatura" placeholder="np. WET23"></div></div>

	<?php
	if(isset($_SESSION['insert_book_sygnatura']))
	{
		echo '<div class="error">'.$_SESSION['insert_book_sygnatura'].'</div>';
		unset($_SESSION['insert_book_sygnatura']);
	}
	?>

<div class="alignment">
<div class="flex2">
	
Tytuł książki: </div><div><input required type="text" name="ksiazka" placeholder="np. Pan Tadeusz"></div></div>

<div class="alignment">
<div class="flex2">
	
Imię i nazwisko autora: </div><div><input required type="text" name="autor" placeholder="np. Adam Mickiewicz"></div></div>

<div class="alignment">
<div class="flex2">
	
Rok wydania: </div><div><input required type="number" name="rok_wydania" placeholder="np. 1999"></div></div>

<div class="alignment">
<div class="flex2">
	
Liczba sztuk ogółem: </div><div><input required type="number" name="liczba_sztuk" placeholder="np. 4"></div></div>
	  <br/>
	  <br/>
	<div class="flex1">

<input type="submit" value="Zatwierdź">

</div>

</form>

</div>

<div class="border">

<form action="deleteBook.php" method="post">

<h3> Usuń książkę </h3>

<div class="alignment">
<div class="flex2">
	
Sygnatura książki: </div><div><input type="text" name="sygnatura" placeholder=" np. ADF46" required ></div></div>

<?php
if(isset($_SESSION['usun_ksiazka']))
{
	echo '<div class="error">'.$_SESSION['usun_ksiazka'].'</div>';
	unset($_SESSION['usun_ksiazka']);
}
?>

	<?php
	if(isset($_SESSION['usun_book_sygnatura']))
	{
		echo '<div class="error">'.$_SESSION['usun_book_sygnatura'].'</div>';
		unset($_SESSION['usun_book_sygnatura']);
	}
	?>

	<br/>
	<br/>
	<br/>

<div class="flex1">

<input type="submit" value="Zatwierdź">

</div>

</form>

</div>

<div class="border">

<form action="updateBook.php" method="post">

<h3> Zmień dane książki </h3>

<div class="alignment">
<div class="flex2">
	
<label for="id">Sygnatura książki: </label></div>
<div><input type="text" id="sygnatura" name="sygnatura" placeholder="np. ADF46" required > </div></div>

	<?php
	if(isset($_SESSION['update_book_sygnatura1']))
	{
		echo '<div class="error">'.$_SESSION['update_book_sygnatura1'].'</div>';
		unset($_SESSION['update_book_sygnatura1']);
	}
	?>

<div class="alignment">
<div class="flex2">
	


<label for="kol1">Kolumna do zmiany: </label></div><div>

<select id="kol1" name="kol1" onclick="lista1()" required > 
<option value="sygnatura">Sygnatura ksiażki</option>
<option value="tytul_ksiazki">Tytuł książki</option>
<option value="imie_nazwisko_autora">Imię i nazwisko autora</option>
<option value="rok_wydania">Rok wydania</option>
<option value="liczba_dostepnych">Liczba sztuk dostępnych</option>
</select>

</div>
</div>


<div class="alignment">
<div class="flex2">
	

Zmienić na: </div>
<div id="update_str_2"> <input type="text" id="update" name="update" placeholder="tu wpisz na co zmienić" required > </div>
</div>

	<?php
	if(isset($_SESSION['update_book_powtorzenie_sygnatury']))
	{
		echo '<div class="error">'.$_SESSION['update_book_powtorzenie_sygnatury'].'</div>';
		unset($_SESSION['update_book_powtorzenie_sygnatury']);
	}
	?>

	<br/>
	<br/>
	<br/>

	<div class="flex1">

<input type="submit" value="Zatwierdź">

</div>

</form>

</div>

</div>
</div>

<div id="uzytkownicy">

<h2> Użytkownicy </h2>

<div class="flex">

<div class="border">

<form action="insertPerson.php" method="post">

<h3> Dodaj użytkownika </h3>

<div class="alignment">
<div class="flex2">
	


Login: </div><div> <input required type="text" name="login_id" placeholder="np. koza1"></div></div>

	<?php
	if(isset($_SESSION['insert_uzytkownicy_login']))
	{
		echo '<div class="error">'.$_SESSION['insert_uzytkownicy_login'].'</div>';
		unset($_SESSION['insert_uzytkownicy_login']);
	}

	?>

<div class="alignment">
<div class="flex2">
	


Hasło: </div><div> <input required type="text" name="haslo_id" placeholder="np. druid2"></div></div>


<div class="alignment">
<div class="flex2">
	

Imię:</div><div> <input required type="text" name="imie" placeholder="np. Jan" title="Imię może składać się tylko z liter" pattern="^[A-z]{1,}$"></div></div>

<div class="alignment">
<div class="flex2">
	

Nazwisko:</div><div> <input required type="text" name="nazwisko" placeholder="np. Kowalski" title="Imię może składać się tylko z liter" pattern="^[A-z]{1,}$"></div></div>

<div class="alignment">
<div class="flex2">
	

Pesel:</div><div> <input required type="text" name="pesel" title="Pesel składa się z 11 cyfr" placeholder="np. 12345678911" pattern="[0-9]{11}"></div></div>

<div class="alignment">
<div class="flex2">
	


<label for="typ">Wybierz typ klienta:</label></div><div>

<select id="typ" name="typ" required > 
<option value="uczen_person">Uczeń</option>
<option value="student_person">Student</option>
<option value="nauczyciel_person">Nauczyciel</option>
<option value="zwykly_person">Zwykły</option>

</select>

</div></div>

	  <br/>
	  <br/>
	  <br/>
	  
	<div class="flex1">

<input type="submit" value="Zatwierdź">

</div>

</form>

</div>

<div class="border">

<form action="deletePerson.php" method="post">

<h3> Usuń użytkownika </h3>

<div class="alignment">
<div class="flex2">
	

Kod identyfikacyjny: </div><div> <input type="text" name="kod_osoba" placeholder="np. WET23" required ></div></div>

<?php
if(isset($_SESSION['usun_osoba']))
{
	echo '<div class="error">'.$_SESSION['usun_osoba'].'</div>';
	unset($_SESSION['usun_osoba']);
}
?>

	<?php
	if(isset($_SESSION['delete_uzytkownicy_kod']))
	{
		echo '<div class="error">'.$_SESSION['delete_uzytkownicy_kod'].'</div>';
		unset($_SESSION['delete_uzytkownicy_kod']);
	}

	?>

	<br/>
	<br/>
	<br/>
	
<div class="flex1">

<input type="submit" value="Zatwierdź">

</div>

</form>

</div>

<div class="border">


	

<form action="updatePerson.php" method="post">

<h3> Zmień dane użytkownika </h3>

<div class="alignment">

<div class="flex2">
	


<label for="id">Kod identyfikacyjny:</label></div><div>


<input type="text" id="id" name="id" placeholder="np. WET23" required > 

</div>

</div>

	<?php
	if(isset($_SESSION['update_uzytkownicy_kod']))
	{
		echo '<div class="error">'.$_SESSION['update_uzytkownicy_kod'].'</div>';
		unset($_SESSION['update_uzytkownicy_kod']);
	}

	?>

<div class="alignment">
<div class="flex2">
	


<label for="kol2">Kolumna do zmiany:</label></div><div>

<select id="kol2" name="kol2" onclick="lista2()" required > 
<option value="kod_identyfikacyjny">Kod identyfikacyjny</option>
<option value="imie">Imię</option>
<option value="nazwisko">Nazwisko</option>
<option value="pesel">Pesel</option>
<option value="typ_klienta">Typ klienta</option>
</select>

</div></div>



<div class="alignment">
<div class="flex2">
	

Zmienić na: </div>
<div id="update_str_3"> <input type="text" id="update" name="update" placeholder="tu wpisz na co zmienić" required > </div></div>

	<?php
	if(isset($_SESSION['update_uzytkownicy_kod_double']))
	{
		echo '<div class="error">'.$_SESSION['update_uzytkownicy_kod_double'].'</div>';
		unset($_SESSION['update_uzytkownicy_kod_double']);
	}

	?>

	<br/>
	<br/>
	<br/>
	
<div class="flex1">


<input type="submit" value="Zatwierdź">

</div>

</form>

</div>

</div>
</div>

<hr/>




<?php
 
 if ((isset($_POST['name'])) ){
	$a = $_POST['name']; 
 }

$_SESSION['zm_sesji'] = $a;

function wypozyczenia(){

	require 'connect.php';

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

		$conn ->query('SET NAMES UTF8');
		$conn ->query('SET CHARACTER_SET utf8_unicode_ci');

	// Check connection
	if ($conn->connect_error) {
	  die("Connection failed: " . $conn->connect_error);
	}

	$sql = "SELECT uzytkownicy.imie, uzytkownicy.nazwisko, uzytkownicy.kod_identyfikacyjny, ksiazki.sygnatura , ksiazki.tytul_ksiazki , wypozyczenia.id, wypozyczenia.id_wypozyczajacy, wypozyczenia.id_ksiazki, wypozyczenia.data_wypozyczenia, wypozyczenia.data_oddania, wypozyczenia.status FROM wypozyczenia, ksiazki, uzytkownicy WHERE ksiazki.id=wypozyczenia.id_ksiazki AND uzytkownicy.id=wypozyczenia.id_wypozyczajacy";
	$result = $conn->query($sql);

	//$count = $result->num_rows; echo count;

	$i=1;


	if ($result->num_rows > 0) {
		
		echo '<h2> Tabela wypożyczeń </h2>';	
		
	  echo '<div style="overflow-x:auto;"><table >'."<tr> <th>Lp</th> <th>ID wypożyczenia</th> <th>Kod identyfikacyjny osoby</th> <th>Imię i nazwisko osoby</th> <th>Sygnatura książki</th> <th>Tytuł książki</th> <th>Data wypożyczenia</th> <th>Data do oddania</th> <th>Status</th> </tr>";
	  // output data of each row
	  while($row = $result->fetch_assoc()) {	  
		  
		echo "<tr> 
		<td>".$i."</td>
		<td>".$row["id"]."</td> 		
		<td>".$row["kod_identyfikacyjny"]."</td> 			
		<td>".$row["imie"]." ".$row["nazwisko"]."</td> 
		<td>".$row["sygnatura"]."</td>
		<td>".$row["tytul_ksiazki"]."</td> 
		<td>".$row["data_wypozyczenia"]."</td>
		<td>".$row["data_oddania"]."</td>
		<td>".$row["status"]."</td>
		</tr>";
		
		$i+=1;
		
	  }
	  echo "</table></div>";
	} else {
	  echo "0 results";
	}
	$conn->close();

}

function ksiazki(){

	require 'connect.php';

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

		$conn ->query('SET NAMES UTF8');
		$conn ->query('SET CHARACTER_SET utf8_unicode_ci');

	// Check connection
	if ($conn->connect_error) {
	  die("Connection failed: " . $conn->connect_error);
	}

	$sql = "SELECT * FROM ksiazki";
	$result = $conn->query($sql);

	//$count = $result->num_rows; echo count;

	$i=1;


	if ($result->num_rows > 0) {
		
		
		echo '<h2> Tabela książek </h2>';	
		
	  echo '<div style="overflow-x:auto;"><table >'."<tr> <th>Lp</th> <th>Sygnatura</th> <th>Tytuł książki</th> <th>Imię i nazwisko autora </th> <th>Rok wydania</th> <th>Liczba sztuk dostępnych</th> 
	  <th>Liczba sztuk ogółem</th> <th>Wypożyczono</th> </tr>";
	  // output data of each row
	  while($row = $result->fetch_assoc()) {	  
		  
		echo "<tr> 
		<td>".$i."</td>
		<td>".$row["sygnatura"]."</td> 
		<td>".$row["tytul_ksiazki"]."</td>
		<td>".$row["imie_nazwisko_autora"]."</td>
		<td>".$row["rok_wydania"]."</td>
		<td>".$row["liczba_dostepnych"]."</td>
		<td>".$row["liczba_ogolem"]."</td>
		<td>".$row["wypozyczono"]."</td>
		</tr>";
		
		$i+=1;
		
	  }
	  echo "</table></div>";
	} else {
	  echo "0 results";
	}
	$conn->close();

}

function uzytkownicy(){

	require 'connect.php';

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

		$conn ->query('SET NAMES UTF8');
		$conn ->query('SET CHARACTER_SET utf8_unicode_ci');

	// Check connection
	if ($conn->connect_error) {
	  die("Connection failed: " . $conn->connect_error);
	}

	$sql = "SELECT kod_identyfikacyjny, imie, nazwisko, pesel, typ_klienta FROM uzytkownicy";
	$result = $conn->query($sql);

	//$count = $result->num_rows; echo count;

	$i=1;


	if ($result->num_rows > 0) {
		
	echo '<h2> Tabela użytkowników </h2>';	
		
	  echo '<div style="overflow-x:auto;"><table >'."<tr> <th>Lp</th> <th>Kod identyfikacyjny</th> <th>Imię</th> <th>Nazwisko</th> <th>Pesel</th> <th>Typ klienta</th> </tr>";
	  // output data of each row
	  while($row = $result->fetch_assoc()) {	  
		  
		echo "<tr> 
		<td>".$i."</td>
		<td>".$row["kod_identyfikacyjny"]."</td> 
		<td>".$row["imie"]."</td>
		<td>".$row["nazwisko"]."</td>
		<td>".$row["pesel"]."</td>
		<td>".$row["typ_klienta"]."</td>
		</tr>";
		
		$i+=1;
		
	  }
	  echo "</table></div>";
	} else {
	  echo "0 results";
	}
	$conn->close();

}

switch($a){
case 'a':	
wypozyczenia();
break;
case 'b':
ksiazki();
break;
case 'c':
uzytkownicy();
break;
}

echo '<div id="var"><input hidden type="text" value="'.$a.'" id="var_a" name="var_a"></div>';



?>

<br/>

<script>

var a = document.getElementById("var_a").value;
	
	switch(a) {
  case "a":
    wypozyczeniawidac();
    break;
  case "b":
    ksiazkiwidac();
    break;
  case "c":
   uzytkownicywidac();
    break;	
case "d":
   wyszukajwidac();
    break;	
  default:
    startowawidac();
} 
		
	function startowawidac() {
	document.getElementById("startowa").style.display = "block";
	document.getElementById("wyszukaj").style.display = "none";	
	document.getElementById("wypozyczenia").style.display = "none";
	document.getElementById("ksiazki").style.display = "none";
	document.getElementById("uzytkownicy").style.display = "none";
	}
	
	function wyszukajwidac() {
	document.getElementById("startowa").style.display = "none";
	document.getElementById("wyszukaj").style.display = "block";	
	document.getElementById("wypozyczenia").style.display = "none";
	document.getElementById("ksiazki").style.display = "none";
	document.getElementById("uzytkownicy").style.display = "none";
	}
	
	function wypozyczeniawidac() {
	document.getElementById("startowa").style.display = "none";
	document.getElementById("wypozyczenia").style.display = "block";
	document.getElementById("ksiazki").style.display = "none";
	document.getElementById("uzytkownicy").style.display = "none";
	document.getElementById("wyszukaj").style.display = "none";	
	}
	
	function ksiazkiwidac() {
	document.getElementById("startowa").style.display = "none";
	document.getElementById("wypozyczenia").style.display = "none";
	document.getElementById("ksiazki").style.display = "block";
	document.getElementById("uzytkownicy").style.display = "none";
	document.getElementById("wyszukaj").style.display = "none";	
	}
	
	function uzytkownicywidac() {
	document.getElementById("startowa").style.display = "none";
	document.getElementById("wypozyczenia").style.display = "none";
	document.getElementById("ksiazki").style.display = "none";
	document.getElementById("uzytkownicy").style.display = "block";
	document.getElementById("wyszukaj").style.display = "none";	
	}
	
</script>


<?php

 if ((!isset($_POST['search_table'])) ){
	exit();
 }

	require_once "connect.php";

	$conn = new mysqli($servername, $username, $password, $dbname);

	$conn ->query('SET NAMES UTF8');
	$conn ->query('SET CHARACTER_SET utf8_unicode_ci');

if ($conn->connect_error){
		die("Error: ".$conn->connect_error);
	}else{	
	
	$table=$_POST['search_table'];
	$column_name=$_POST['column_search'];
	
	
	if(isset($_POST['search_fraza'])){
	$lemma=$_POST['search_fraza'];
	
	
	}else{
	$lemma=$_POST['search_fraza_imie'];
	$lemma1=$_POST['search_fraza_nazwisko'];

	}
	
	
	
	$typ=$_POST['column_search_type'];
		
	
	switch ($column_name) {
  case "wypozyczenia_id_wypozyczenia":
  $column_name="id";
    break;	
  case "wypozyczenia_kod_identyfikacyjny":
  $column_name="kod_identyfikacyjny";
  //do analizy tabela uzytkownicy by znaleźć id
    break;
  case "wypozyczenia_imie_nazwisko":
  $column_name="imie_nazwisko_wypozyczajacy";
  //do analizy tabela uzytkownicy by znaleźć id
  //grubsza sprawa rozbicia imienia i nazwiska
    break;
  case "wypozyczenia_sygnatura_ksiazki":
  $column_name="sygnatura";
  //do analizy tabela ksiazki by znaleźć id
    break;
  case "wypozyczenia_tytul_ksiazki":
    $column_name="tytul_ksiazki";
  //do analizy tabela ksiazki by znaleźć id
    break;
	  case "wypozyczenia_data_wypozyczenia":
  $column_name="data_wypozyczenia";
    break;
	case "wypozyczenia_data_do_oddania":
  $column_name="data_oddania";
    break;
	case "wypozyczenia_status":
  $column_name="status";
    break;
case "ksiazki_sygnatura":
  $column_name="sygnatura";
    break;	
case "ksiazki_tytul_ksiazki":
  $column_name="tytul_ksiazki";
    break;	
case "ksiazki_imie_nazwisko_autora":
  $column_name="imie_nazwisko_autora";
    break;	
case "ksiazki_rok_wydania":
  $column_name="rok_wydania";
    break;	
case "ksiazki_liczba_dostepnych":
  $column_name="liczba_dostepnych";
    break;	
case "ksiazki_liczba_ogolem":
  $column_name="liczba_ogolem";
    break;	
	case "uzytkownicy_kod_identyfikacyjny":
  $column_name="kod_identyfikacyjny";
    break;
	case "uzytkownicy_imie":
  $column_name="imie";
    break;
	case "uzytkownicy_nazwisko":
  $column_name="nazwisko";
    break;
	case "uzytkownicy_pesel":
  $column_name="pesel";
    break;
	case "uzytkownicy_typ_klienta":
  $column_name="typ_klienta";
    break;
  default:
    echo "No option";
}

	switch($typ){
		
	case 'accurate':	
	$like = "LIKE '$lemma'";
	break;
	case 'between':	
	$like = "LIKE '%$lemma%'";
	break;
	case 'start':	
	$like = "LIKE '$lemma%'";
	break;
	case 'end':	
	$like = "LIKE '%$lemma'";
	break;
	}
	
	
		
	function wypozyczenia1($conn, $table, $column_name, $lemma, $wstawka){
	

	$sql = "SELECT uzytkownicy.imie, uzytkownicy.nazwisko, uzytkownicy.kod_identyfikacyjny, ksiazki.sygnatura , ksiazki.tytul_ksiazki , wypozyczenia.id, wypozyczenia.id_wypozyczajacy, wypozyczenia.id_ksiazki, wypozyczenia.data_wypozyczenia, wypozyczenia.data_oddania, wypozyczenia.status FROM wypozyczenia, ksiazki, uzytkownicy WHERE ksiazki.id=wypozyczenia.id_ksiazki AND uzytkownicy.id=wypozyczenia.id_wypozyczajacy AND $wstawka  ";
	$result = $conn->query($sql);

	//$count = $result->num_rows; echo count;

	$i=1;


	if ($result->num_rows > 0) {
		
		echo '<h2> Tabela wypożyczeń </h2>';	
		
	  echo '<div style="overflow-x:auto;"><table >'."<tr> <th>Lp</th> <th>ID wypożyczenia</th> <th>Kod identyfikacyjny osoby</th> <th>Imię i nazwisko osoby</th> <th>Sygnatura książki</th> <th>Tytuł książki</th> <th>Data wypożyczenia</th> <th>Data do oddania</th> <th>Status</th> </tr>";
	  // output data of each row
	  while($row = $result->fetch_assoc()) {	  
		  
		echo "<tr> 
		<td>".$i."</td>
		<td>".$row["id"]."</td> 		
		<td>".$row["kod_identyfikacyjny"]."</td> 			
		<td>".$row["imie"]." ".$row["nazwisko"]."</td> 
		<td>".$row["sygnatura"]."</td>
		<td>".$row["tytul_ksiazki"]."</td> 
		<td>".$row["data_wypozyczenia"]."</td>
		<td>".$row["data_oddania"]."</td>
		<td>".$row["status"]."</td>
		</tr>";
		
		$i+=1;
		
	  }
	  echo "</table></div>";
	} else {
	  echo "0 results";
	}
	$conn->close();

}

function ksiazki1($conn, $table, $column_name, $lemma, $wstawka){


	$sql = "SELECT * FROM ksiazki WHERE $wstawka ";
	$result = $conn->query($sql);

	//$count = $result->num_rows; echo count;

	$i=1;


	if ($result->num_rows > 0) {
		
		
		echo '<h2> Tabela książek </h2>';	
		
	  echo '<div style="overflow-x:auto;"><table >'."<tr> <th>Lp</th> <th>Sygnatura</th> <th>Tytuł książki</th> <th>Imię i nazwisko autora </th> <th>Rok wydania</th> <th>Liczba sztuk dostępnych</th> 
	  <th>Liczba sztuk ogółem</th> <th>Wypożyczono</th> </tr>";
	  // output data of each row
	  while($row = $result->fetch_assoc()) {	  
		  
		echo "<tr> 
		<td>".$i."</td>
		<td>".$row["sygnatura"]."</td> 
		<td>".$row["tytul_ksiazki"]."</td>
		<td>".$row["imie_nazwisko_autora"]."</td>
		<td>".$row["rok_wydania"]."</td>
		<td>".$row["liczba_dostepnych"]."</td>
		<td>".$row["liczba_ogolem"]."</td>
		<td>".$row["wypozyczono"]."</td>
		</tr>";
		
		$i+=1;
		
	  }
	  echo "</table></div>";
	} else {
	  echo "0 results";
	}
	$conn->close();

}

function uzytkownicy1($conn, $table, $column_name, $lemma, $wstawka){

	$sql = "SELECT kod_identyfikacyjny, imie, nazwisko, pesel, typ_klienta FROM uzytkownicy WHERE $wstawka ";
	$result = $conn->query($sql);

	//$count = $result->num_rows; echo count;

	$i=1;

	if ($result->num_rows > 0) {
		
	echo '<h2> Tabela użytkowników </h2>';	
		
	  echo '<div style="overflow-x:auto;"><table >'."<tr> <th>Lp</th> <th>Kod identyfikacyjny</th> <th>Imię</th> <th>Nazwisko</th> <th>Pesel</th> <th>Typ klienta</th> </tr>";
	  // output data of each row
	  while($row = $result->fetch_assoc()) {	  
		  
		echo "<tr> 
		<td>".$i."</td>
		<td>".$row["kod_identyfikacyjny"]."</td> 
		<td>".$row["imie"]."</td>
		<td>".$row["nazwisko"]."</td>
		<td>".$row["pesel"]."</td>
		<td>".$row["typ_klienta"]."</td>
		</tr>";
		
		$i+=1;
		
	  }
	  echo "</table></div>";
	} else {
	  echo "0 results";
	}
	$conn->close();

}	
				
		//header('Location: index.php');			
	
	switch($table){
			
	case 'wypozyczenia':
		if ($column_name == "kod_identyfikacyjny"){
		$wstawka = "uzytkownicy.$column_name $like";	
		}else if($column_name=="imie_nazwisko_wypozyczajacy"){

			switch($typ){
		
				case 'accurate':	
				$like1 = "LIKE '$lemma1'";
				break;
				case 'between':	
				$like1 = "LIKE '%$lemma1%'";
				break;
				case 'start':	
				$like1 = "LIKE '$lemma1%'";
				break;
				case 'end':	
				$like1 = "LIKE '%$lemma1'";
				break;
			}


		$wstawka = "uzytkownicy.imie $like AND uzytkownicy.nazwisko $like1";

		//grubsza sprawa
		
		}else if($column_name == "sygnatura"){
		$wstawka = "ksiazki.$column_name $like";

		}else if($column_name == "tytul_ksiazki"){
		$wstawka = "ksiazki.$column_name $like";

		}else{
		$wstawka = "wypozyczenia.$column_name $like";	
		}
						
	wypozyczenia1($conn, $table, $column_name, $lemma, $wstawka);
		
	break;
	
	case 'ksiazki':
		
	$wstawka = "$column_name $like";
	
	ksiazki1($conn, $table, $column_name, $lemma, $wstawka);
	break;
	case 'uzytkownicy':
	
	$wstawka = "$column_name $like";
	
	uzytkownicy1($conn, $table, $column_name, $lemma, $wstawka );
	break;
	}
	
	}	
?>


<footer>
<p>Wszystkie prawa zastrzeżone. All rights reserved. 2020 &copy; Author: Wojciech Kłoszewski. Created with HTML5, CSS, JS, SQL, PHP </p>
</footer>

</body>

</html>

