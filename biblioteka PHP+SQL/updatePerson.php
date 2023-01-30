<?php

session_start();

// utworzenie zmiennej sesji
$_SESSION['zm_sesji'] = $_SESSION['zm_sesji'];

	require_once "connect.php";

	$conn = new mysqli($servername, $username, $password, $dbname);

	$conn ->query('SET NAMES UTF8');
	$conn ->query('SET CHARACTER_SET utf8_unicode_ci');

if ($conn->connect_error){
		die("Error: ".$conn->connect_error);
	}else{
			
		$kod=$_POST['id'];
		$kol=$_POST['kol2'];
		$update=$_POST['update'];
		
		
		$sql="SELECT id FROM uzytkownicy WHERE kod_identyfikacyjny='$kod' ";
		
		$rezultat=$conn->query($sql);
		
		if ($rezultat->num_rows < 1) {
			
			$_SESSION['update_uzytkownicy_kod'] = "Zmiana jest niemożliwa, gdyż nie ma użytkownika o takim kodzie identyfikacyjnym";
			
			header('Location: biblioteka-strona-glowna');
			
			exit();
			
		}else{
			$row=$rezultat->fetch_assoc();	
				
			$id=$row['id'];	 
		}
		
		
		
		
		if ($kol == "typ_klienta"){
			
			
			
			if ($update == "uczen_person"){
			$update = "uczeń";
			}else if ($update == "student_person"){
			$update = "student";
			}else if ($update == "nauczyciel_person"){
			$update = "nauczyciel";
			}else if ($update == "zwykly_person"){
			$update = "zwykły";
			}	
		}
		
		if ($kol == "kod_identyfikacyjny" ){

				$sql="SELECT kod_identyfikacyjny FROM uzytkownicy WHERE kod_identyfikacyjny='$update' ";
				
				$rezultat=$conn->query($sql);
				
				if ($rezultat->num_rows >0 ) {
					
					$_SESSION['update_uzytkownicy_kod_double'] = "Nie może być dwóch osób o tym samym kodzie identyfikacyjnym";
					
					header('Location: biblioteka-strona-glowna');
					
					exit();
					
				}

			}			
		
					
		$sql = "UPDATE uzytkownicy SET $kol='$update' WHERE id='$id'";

		if ($conn->query($sql) === TRUE) {
		  echo "Record updated successfully";
		  header('Location: biblioteka-strona-glowna');
		} else {
		  echo "Error updating record: " . $conn->error;
		}
	}

$conn->close();
?>


