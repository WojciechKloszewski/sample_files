<?php

session_start();

$_SESSION['zm_sesji'] = $_SESSION['zm_sesji'];

	require_once "connect.php";

	$conn = new mysqli($servername, $username, $password, $dbname);

	$conn ->query('SET NAMES UTF8');
	$conn ->query('SET CHARACTER_SET utf8_unicode_ci');
	
	if ($conn->connect_error){
		die("Error: ".$conn->connect_error);
	}
			
		$kod_osoba=$_POST['kod_osoba'];
				
//znalezienie  id na bazie sygnatury do późniejszego usunięcia
		
		$sql="SELECT id FROM uzytkownicy WHERE kod_identyfikacyjny='$kod_osoba' ";
		
		$rezultat=$conn->query($sql);
		
		if ($rezultat->num_rows < 1) {
			
			$_SESSION['delete_uzytkownicy_kod'] = "Usunięcie osoby z bazy jest niemożliwe, gdyż nie ma osoby o takiej sygnaturze";
			
			header('Location: biblioteka-strona-glowna');
			
			exit();
			
		}	else if ($rezultat->num_rows > 0) {
				
			$row=$rezultat->fetch_assoc();	
				
			$id_osoby=$row['id'];		
					
//sprawdzenie czy ktos nie wypozyczyl ksiazki o podanym id w tabeli wypozyczenia		
		$sql="SELECT id FROM wypozyczenia WHERE id_wypozyczajacy='$id_osoby' ";
				
		$rezultat=$conn->query($sql);
		
			if ($rezultat->num_rows > 0) {
				
			$_SESSION['usun_osoba'] = "Usunięcie osoby z bazy jest niemożliwe, gdyż co najmniej jedna książka jest wypożyczona przez tą osobę";
			
			header('Location: biblioteka-strona-glowna');
			
				} else {
				
			$sql="DELETE FROM uzytkownicy WHERE id='$id_osoby' ";		
			if ($conn->query($sql)===true){
			$conn->close();
			header('Location: biblioteka-strona-glowna');
			}
			
			else{
				
			echo "Błąd usuniecia ksiazki";
			}
								
			//	header('Location: index.php');
				}			
						
			}
						
//usuwanie rekordu

	
?>
