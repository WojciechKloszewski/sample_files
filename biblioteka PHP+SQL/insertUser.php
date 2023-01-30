<?php

session_start();

$_SESSION['zm_sesji'] = $_SESSION['zm_sesji'];

	require_once "connect.php";

	$conn = new mysqli($servername, $username, $password, $dbname);

	$conn ->query('SET NAMES UTF8');
	$conn ->query('SET CHARACTER_SET utf8_unicode_ci');

	if ($conn->connect_error){
		die("Error: ".$conn->connect_error);
	}else{			
			$kod=$_POST['osoba'];
			$sygnatura=$_POST['ksiazka'];
			$dataWypozyczenia=$_POST['dataWypozyczenia'];

			//$dataOddania= $dataWypozyczenia + INTERVAL 14 DAY; 

			$stara_data = date( $dataWypozyczenia );
			$dataOddania = date( 'y-m-d', strtotime( $stara_data .' +14 day' ));			
			
			$status=$_POST['status'];	
			
			if ($status == "zamowiona"){
			$status = "zamówiona";
			}else if ($status == "do_odbioru"){
			$status = "do odbioru";
			}else if ($status == "wypozyczono"){
			$status = "wypożyczono";
			}else if ($status == "oddana"){
			$status = "oddana";
			}
		

		//przypisanie id do podanej sygnatury		
		$sql="SELECT id FROM ksiazki WHERE sygnatura='$sygnatura' ";	
			
		$rezultat=$conn->query($sql);
		
			if ($rezultat->num_rows > 0) {
				
				$row=$rezultat->fetch_assoc();	
					
				$ksiazka=$row['id'];

			}else {
			$_SESSION['sygnatura']= "Brak książki o podanej sygnaturze";
			header('Location: biblioteka-strona-glowna');
			}
			
		//przypisanie id do podanego kodu identyfikacyjnego	
		$sql="SELECT id FROM uzytkownicy WHERE kod_identyfikacyjny='$kod' ";	
			
		$rezultat=$conn->query($sql);
		
			if ($rezultat->num_rows > 0) {
				
				$row=$rezultat->fetch_assoc();	
					
				$osoba=$row['id'];

			}else {
			$_SESSION['kodIdentyfikacyjny']= "Brak użytkownika biblioteki o podanym kodzie identyfikacyjnym";
			header('Location: biblioteka-strona-glowna');
			exit();
			}

		
		//	echo $ksiazka;			
		//jest ta linijka później, gdy jest bardziej potrzebna - $sql="INSERT INTO wypozyczenia VALUES (NULL,'$osoba', '$ksiazka', '$dataWypozyczenia', '$dataOddania', '$status')";	

		//usuniecie ksiazki z bazy dostepnych
						
		$sql="SELECT liczba_dostepnych FROM ksiazki WHERE id='$ksiazka' ";
				
		$rezultat=$conn->query($sql);
		
			if ($rezultat->num_rows > 0) {
				
				$row=$rezultat->fetch_assoc();	
					
				$ksiazka1=$row['liczba_dostepnych'];

			//		echo $ksiazka1;
					
				$ile=$ksiazka1-1;	
				
				if ($ile<0){
					
					echo "Brak książek do wypożyczenia! ";
					
					$_SESSION['liczba_ksiazek']="Brak książek do wypożyczenia tego typu - liczba dostępnych zero! Spróbuj ponownie";
						
						header('Location: biblioteka-strona-glowna');
						exit();
					
				}else{					
					//echo $ile;
						
					$sql="UPDATE ksiazki SET liczba_dostepnych='$ile' WHERE id='$ksiazka'";
					
					if ($conn->query($sql) === TRUE) {
					echo "Record updated successfully";
					} else {
					echo "Error updating record: " . $conn->error;
					}								
				
				
				//dodaj liczbę wypozyczonych
				
				$sql="SELECT wypozyczono FROM ksiazki WHERE id='$ksiazka' ";
				
		$rezultat=$conn->query($sql);
		
			if ($rezultat->num_rows > 0) {
				
				$row=$rezultat->fetch_assoc();	
					
				$ksiazka2=$row['wypozyczono'];

			//		echo $ksiazka1;
					
				$ile2=$ksiazka2+1;
				
			}else{
			echo "Brak rezultatów";
			header('Location: biblioteka-strona-glowna');
			}
				
				$sql="UPDATE ksiazki SET wypozyczono='$ile2' WHERE id='$ksiazka'";
			
				if ($conn->query($sql) === TRUE) {
				echo "Record updated successfully";
				} else {
				echo "Error updating record: " . $conn->error;
				}
				
				
					//dodaj wypozyczenie
						$sql="INSERT INTO wypozyczenia VALUES (NULL,'$osoba', '$ksiazka', '$dataWypozyczenia', '$dataOddania' , '$status')";
		
						if ($conn->query($sql)===true){	

						header('Location: biblioteka-strona-glowna');
							
						}else{
							echo "Błąd dodania wypozyczenia do bazy";
						}
				
				}
			}else {
			echo "Brak rezultatów";
			header('Location: biblioteka-strona-glowna');
			}
		
		
	
	$conn->close();
	}
?>