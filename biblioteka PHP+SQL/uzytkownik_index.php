<?php

// inicjacja sesji
session_start();


if (!isset($_SESSION['zalogowany']))
{
	header('Location: biblioteka-logowanie');
	exit();
}	
		$idosoby=$_SESSION['idosoby'];
		$kod=$_SESSION['kod_identyfikacyjny'];
		$imie=$_SESSION['imie'];
		$nazwisko=$_SESSION['nazwisko'];



$a=null;
if(isset($_SESSION['zm_sesji'])){
// użycie zmiennej

$a=$_SESSION['zm_sesji'];

unset($_SESSION['zm_sesji']);
}

$cfg['file'] = "../licznikbiblioteka.txt"; // ścieżka z plikiem
$cfg['read'] = file_get_contents($cfg['file']); // odczytuje plik

if(!isset($_COOKIE['licznik1'])) {
    setcookie('licznik1', 'licznik', time() + 3600); // wysyła ciasteczko do przeglądarki użytkownika
    $fp = fopen($cfg['file'], "w"); // otwiera plik
    flock($fp, 2); // blokuje plik
    fwrite($fp, $cfg['read']+1); // zapis do pliku
    flock($fp,3); // blokuje plik
    fclose($fp); // zamyka plik
}


    echo "Stronę biblioteki odwiedzono w sumie ".$cfg['read']." razy. Wejścia zliczane są w systemie co godzinę używając plików cookies."; // wyświetlenie liczby odwiedzin


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

		case "sygnatura_ksiazki":
		document.getElementById('update_str_1').innerHTML ='<input type="text" id="update" name="update" required >';
		break;

		case "data_wypozyczenia":
		document.getElementById('update_str_1').innerHTML ='<input type="date" id="update" name="update" required >';
		break;			
		}	
	}

	
	</script>


</head>

<body>

<div id="version" style="text-align: right">
<a href="#" style="text-decoration: none; color: gray;">Wersja polska</a> / <a style="text-decoration: none; color: gray;" href="http://wojklos.com.pl/library/panel-user" >English version</a>

<div style="text-align: left" ><?php echo 'Witaj '.$imie." ".$nazwisko; ?></div>


</div>

<h1> Panel użytkownika biblioteki</h1>

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
  
  	<form action="panel-uzytkownika" method="post" >
	<input hidden type="text" name="name" value="d">
	<button class="spis" type="submit" value="">Wyszukaj książkę</button>
	</form>
  
  </div>
  
  <div>
  	<form action="panel-uzytkownika" method="post" >
	<input hidden type="text" name="name" value="a">
	<button class="spis" type="submit" value=""> Moje wypożyczenia</button>
	</form>
  </div>
  
   
  <div>
  	<form action="logout.php" method="post" >
	<button class="spis" type="submit" value="">Wyloguj się z biblioteki</button>
	</form>
  </div>

</div>

</nav>



<div id="startowa">

<h2> Strona startowa biblioteki </h2>

<div id="text_startowa">

<h3> Panel symuluje prostą bazę biblioteczną z poziomu użytkownika. </h3>
<h3> Panel umożliwia użytkownikowi wyszukać książkę z bazy, zobaczyć swoje wypożyczenia oraz zamówione książki. </h3>
<h3> Możliwe jest także dodanie lub usunięcie nowego zamówienia książki. </h3>
<h3> W przypadku pomyłki przy zamówieniu użytkownik ma możliwość korekty danych </h3>
<h3> Wybierz w menu operację, którą chcesz wykonać. </h3>
</div>

</div>


<div id="wyszukaj">

<h2> Wyszukaj książkę </h2>


<div class="flex">


<div class="border1" style="width: 350px;">

	<form action="panel-uzytkownika" method="post">

	<h3> Podaj szukane dane </h3>
	

<div class="alignment">	
<div class="flex2">

	  <label for="status">Wybierz rodzaj tabeli:</label>
	  
	  </div> <div>
	  
	  <select id="search_table" name="search_table" required >
		<option value="ksiazki">Książki</option>
	  </select>
</div>	  
	  </div>


<div class="alignment">	
<div class="flex2">
	  <label for="status">Wybierz rodzaj kolumny:</label>
	  
	  </div> <div>
	  
<div id="kolumna_rodzaj">  

<select id="column_search" name="column_search" required ><option value="ksiazki_sygnatura">Sygnatura książki </option><option value="ksiazki_tytul_ksiazki">Tytuł książki</option><option value="ksiazki_imie_nazwisko_autora">Imię i nazwisko autora</option><option value="ksiazki_rok_wydania">Rok wydania</option><option value="ksiazki_liczba_dostepnych">Liczba dostępnych książek</option><option value="ksiazki_liczba_ogolem">Liczba książek ogółem w bazie</option></select>

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

<h2> Moje wypożyczenia i zamówienia </h2>


<style>
.flex{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
}

</style>



<div class="flex">
<div class="border">
	<form action="insertOrder.php" method="post">

	<h3> Dodaj zamówienie </h3>
	
	<div class="alignment">
<div class="flex2">






 Kod identyfikacyjny: <?php echo $kod; ?> </div> <div><input type="hidden" type="text" name="osoba" value="<?php echo $kod; ?>"></div>
</div>
	
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
	<form action="deleteOrder.php" method="post">

	<h3> Usuń zamówienie </h3>
	
		<div class="alignment">
<div class="flex2">


<input type="text" hidden name="idosoby" id="idosoby" value="<?php echo $idosoby; ?> " >

	ID wypożyczenia: </div><div> <input type="number" min="1" step="1" name="idWypozyczenie" placeholder="np. 1" required ></div>
</div>

	<?php
	if(isset($_SESSION['idwypozyczeniausun']))
	{
		echo '<div class="error">'.$_SESSION['idwypozyczeniausun'].'</div>';
		unset($_SESSION['idwypozyczeniausun']);
	}
	?>

	<div>W przypadku oddania książki do biblioteki przez wypożyczającego bibliotekarz powinien usunąć wypożyczenie z bazy. Jeśli wypożyczenie nie zostało usunięte należy zgłosić się do biblioteki w tej sprawie</div>
	
		<div>Istnieje jedynie możliwość usunięcia zamówień na etapie zamówiono lub do odbioru. Zrealizowanych wypożyczeń nie można usunąć</div>
	
	<br/>
	<br/>
	<br/>
	
<div class="flex1">
	<input type="submit" value="Zatwierdź">
</div>	
	</form>

</div>


<div class="border">
	<form action="updateOrder.php" method="post">

	<h3> Zmień dane zamówienia </h3>
	<div class="alignment">
<div class="flex2">

<input type="text" hidden name="idosoby" id="idosoby" value="<?php echo $idosoby; ?> " >
	
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
	<option value="sygnatura_ksiazki">Sygnatura książki</option>
	<option value="data_wypozyczenia">Data wypożyczenia</option>
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
	
	<div>Istnieje jedynie możliwość zmiany danych na etapie zamówienia. Zrealizowanych wypożyczeń lub do odbioru nie można zmienić</div>

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
	
	$kod=$_SESSION['kod_identyfikacyjny'];
	

	$sql = "SELECT uzytkownicy.imie, uzytkownicy.nazwisko, uzytkownicy.kod_identyfikacyjny, ksiazki.sygnatura , ksiazki.tytul_ksiazki , wypozyczenia.id, wypozyczenia.id_wypozyczajacy, wypozyczenia.id_ksiazki, wypozyczenia.data_wypozyczenia, wypozyczenia.data_oddania, wypozyczenia.status FROM wypozyczenia, ksiazki, uzytkownicy WHERE ksiazki.id=wypozyczenia.id_ksiazki AND uzytkownicy.id=wypozyczenia.id_wypozyczajacy AND uzytkownicy.kod_identyfikacyjny='$kod' ";
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

switch($a){
case 'a':	
wypozyczenia();
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

	}
	
	function wyszukajwidac() {
	document.getElementById("startowa").style.display = "none";
	document.getElementById("wyszukaj").style.display = "block";	
	document.getElementById("wypozyczenia").style.display = "none";

	}
	
	function wypozyczeniawidac() {
	document.getElementById("startowa").style.display = "none";
	document.getElementById("wyszukaj").style.display = "none";
	document.getElementById("wypozyczenia").style.display = "block";

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

						
	
	switch($table){
			
	
	case 'ksiazki':
		
	$wstawka = "$column_name $like";
	
	ksiazki1($conn, $table, $column_name, $lemma, $wstawka);
	break;
	

	}
	
	}	
?>

<br/>
<footer>
<p>Wszystkie prawa zastrzeżone. All rights reserved. 2020 &copy; Author: Wojciech Kłoszewski. Created with HTML5, CSS, JS, SQL, PHP </p>
</footer>

</body>

</html>

