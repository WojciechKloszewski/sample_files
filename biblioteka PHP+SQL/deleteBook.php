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
			
		$sygnatura=$_POST['sygnatura'];

	
			
//znalezienie  id na bazie sygnatury do późniejszego usunięcia
		
		$sql="SELECT id FROM ksiazki WHERE sygnatura='$sygnatura' ";
		
		$rezultat=$conn->query($sql);
		
		if ($rezultat->num_rows < 1) {
			
			$_SESSION['usun_book_sygnatura'] = "Usunięcie książki z bazy jest niemożliwe, gdyż nie ma książki o takiej sygnaturze";
			
			header('Location: biblioteka-strona-glowna');
			
			exit();
			
		}
			else if ($rezultat->num_rows > 0) {
				
			$row=$rezultat->fetch_assoc();	
				
			$id_ksiazka=$row['id'];		
					
//sprawdzenie czy ktos nie wypozyczyl ksiazki o podanym id w tabeli wypozyczenia		
		$sql="SELECT id_ksiazki FROM wypozyczenia WHERE id='$id_ksiazka' ";
				
		$rezultat=$conn->query($sql);
		
			if ($rezultat->num_rows > 0) {
				
			$_SESSION['usun_ksiazka'] = "Usunięcie książki z bazy jest niemożliwe, gdyż co najmniej jedna książka jest wypożyczona";
			
			header('Location: biblioteka-strona-glowna');
			
				} else {
				
			$sql="DELETE FROM ksiazki WHERE id='$id_ksiazka' ";		
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
