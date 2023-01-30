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
			
		$sygnatura=$_POST['sygnatura'];
		$kol=$_POST['kol1'];
		$update=$_POST['update'];
			

		$sql="SELECT id FROM ksiazki WHERE sygnatura='$sygnatura' ";
		
		$rezultat=$conn->query($sql);
		
		if ($rezultat->num_rows < 1) {
			
			$_SESSION['update_book_sygnatura1'] = "Zmiana jest niemożliwa, gdyż nie ma książki o takiej sygnaturze";
			
			header('Location: biblioteka-strona-glowna');
			
			exit();
			
		}else{
			$row=$rezultat->fetch_assoc();	
				
			$id=$row['id'];	 
		}

if ($kol == "sygnatura" ){

		$sql="SELECT sygnatura FROM ksiazki WHERE sygnatura='$update' ";
		
		$rezultat=$conn->query($sql);
		
		if ($rezultat->num_rows >0 ) {
			
			$_SESSION['update_book_powtorzenie_sygnatury'] = "Nie może być dwóch książek o takiej samej sygnaturze";
			
			header('Location: biblioteka-strona-glowna');
			
			exit();
			
		}

	}	


			
		$sql = "UPDATE ksiazki SET $kol='$update' WHERE id='$id'";

		if ($conn->query($sql) === TRUE) {
		  echo "Record updated successfully";
		  
		  
				if ($kol == "liczba_dostepnych" ){

						$sql="SELECT wypozyczono FROM ksiazki WHERE id='$id' ";
						
						$rezultat=$conn->query($sql);
						
						if ($rezultat->num_rows >0 ) {
							
							$row=$rezultat->fetch_assoc();	
								
							$wypozyczone=$row['wypozyczono'];	
							
						$ogolem = $wypozyczone+$update;	
				
						$sql = "UPDATE ksiazki SET liczba_ogolem='$ogolem' WHERE id='$id'";

								if ($conn->query($sql) === TRUE) {
								  echo "Record updated successfully";
								}else {
								  echo "Error updating record: " . $conn->error;
								}
						}

					}			  
		  
		  
  
		  header('Location: biblioteka-strona-glowna');
		} else {
		  echo "Error updating record: " . $conn->error;
		}
	}

$conn->close();
?>