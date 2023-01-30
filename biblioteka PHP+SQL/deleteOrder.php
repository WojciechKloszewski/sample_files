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
			
		$id=$_POST['idWypozyczenie'];
	
		$idosoby=$_POST['idosoby'];
	
		
	
	
		//$sql="SELECT id FROM ksiazki WHERE sygnatura='$sygnatura' ";	
	
//znalezienie co wypozyczyla osoba o danym id do późniejszego usunięcia
		
		//określenie ID wypożyczającego, czy dane wypożyczenie należy do danej osoby, aby nie było usunięcia wypożyczenia innej osoby
		
		$sql="SELECT id_wypozyczajacy FROM wypozyczenia WHERE id='$id' ";
		$rezultat=$conn->query($sql);
		
			if ($rezultat->num_rows >0) {
				
				$row=$rezultat->fetch_assoc();
				$id_wypozyczajacy=$row['id_wypozyczajacy'];
				
				$x=settype($id_wypozyczajacy, 'integer');
				$y=settype($idosoby, 'integer');
				
				
				if ($id_wypozyczajacy != $idosoby){
				$_SESSION['idwypozyczeniausun']= "Dana osoba nie ma takiego ID wypożyczenia";
				header('Location: panel-uzytkownika');
				exit();
				}
			}
			
		
		
		$sql="SELECT status FROM wypozyczenia WHERE id='$id' ";
		$rezultat=$conn->query($sql);
		
			if ($rezultat->num_rows >0) {
				
				$row=$rezultat->fetch_assoc();
				$status=$row['status'];
				
				if ($status == "wypożyczono"){
				$_SESSION['idwypozyczeniausun']= "Nie można usunąć z bazy zrealizowanego wypożyczenia";
				header('Location: panel-uzytkownika');
				exit();
				}
			}
		
		
		
		$sql="SELECT id FROM wypozyczenia WHERE id='$id' ";
		$rezultat=$conn->query($sql);
		
			if ($rezultat->num_rows < 1) {
				
				$_SESSION['idwypozyczeniausun']= "Brak podanego ID wypożyczenia w bazie";
				header('Location: panel-uzytkownika');
				exit();
			}
		
		$sql="SELECT id_ksiazki FROM wypozyczenia WHERE id='$id' ";
		
		$rezultat=$conn->query($sql);
		
			if ($rezultat->num_rows > 0) {
				
			$row=$rezultat->fetch_assoc();	
				
			$ksiazka=$row['id_ksiazki'];		
			
		$co=$ksiazka;
		
//zwiekszenie ilosci dostepnych ksiazek po usunieciu wypozyczenia		
		$sql="SELECT liczba_dostepnych FROM ksiazki WHERE id='$co' ";
				
		$rezultat=$conn->query($sql);
		
			if ($rezultat->num_rows > 0) {
				
			$row=$rezultat->fetch_assoc();	
				
			$ksiazka=$row['liczba_dostepnych'];

			//	echo $ksiazka;
				
			$ile=$ksiazka+1;	
			
			//echo $ile;
				
			$sql="UPDATE ksiazki SET liczba_dostepnych='$ile' WHERE id='$co'";
			
				if ($conn->query($sql) === TRUE) {
				echo "Record updated successfully";
				} else {
				echo "Error updating record: " . $conn->error;
				}			
			
			//zmniejszenie ilości wypożyczonych książek
			$sql="SELECT wypozyczono FROM ksiazki WHERE id='$co' ";
				
		$rezultat=$conn->query($sql);
		
			if ($rezultat->num_rows > 0) {
				
			$row=$rezultat->fetch_assoc();	
				
			$ksiazka1=$row['wypozyczono'];

			//	echo $ksiazka;
				
			$ile1=$ksiazka1-1;	
			
			echo $ile;
				
			$sql="UPDATE ksiazki SET wypozyczono='$ile1' WHERE id='$co'";
			
				if ($conn->query($sql) === TRUE) {
				echo "Record updated successfully";
				} else {
				echo "Error updating record: " . $conn->error;
				}		
			}else{
			echo "Bład konktaktu z bazą";
			}		
			
			
			
			
			}
				
		}else{
			echo "Bład konktaktu z bazą";
		}		
//usuwanie rekordu
			$sql="DELETE FROM wypozyczenia WHERE id='$id' ";
		
		if ($conn->query($sql)===true){
			$conn->close();
			header('Location: panel-uzytkownika');
		}else{
			echo "Błąd dodania osoby do bazy";
		}
	
	
	$conn->close();
	
?>
