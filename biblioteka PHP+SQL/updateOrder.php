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
			
		$id=$_POST['id'];
		$kol=$_POST['kol'];
		$update=$_POST['update'];
		$idosoby=$_POST['idosoby'];
		
		$sql="SELECT id FROM wypozyczenia WHERE id='$id' ";
		$rezultat=$conn->query($sql);
		
			if ($rezultat->num_rows < 0.5) {
				
				$_SESSION['idwypozyczeniaupdate']= "Brak podanego ID wypożyczenia w bazie";
				header('Location: panel-uzytkownika');
				exit();
			}		
		
				//określenie ID wypożyczającego, czy dane wypożyczenie należy do danej osoby, aby nie było usunięcia wypożyczenia innej osoby
		
		$sql="SELECT id_wypozyczajacy FROM wypozyczenia WHERE id='$id' ";
		$rezultat=$conn->query($sql);
		
			if ($rezultat->num_rows >0) {
				
				$row=$rezultat->fetch_assoc();
				$id_wypozyczajacy=$row['id_wypozyczajacy'];
				
				$x=settype($id_wypozyczajacy, 'integer');
				$y=settype($idosoby, 'integer');
				
				
				if ($idosoby != $id_wypozyczajacy){
				$_SESSION['idwypozyczeniaupdate']= "Dana osoba nie ma takiego ID wypożyczenia";
				header('Location: panel-uzytkownika');
				exit();
				}
			}
		
		$sql="SELECT status FROM wypozyczenia WHERE id='$id' ";
		$rezultat=$conn->query($sql);
		
			if ($rezultat->num_rows >0) {
				
				$row=$rezultat->fetch_assoc();
				$status=$row['status'];
				
				if (($status == "wypożyczono") || ($status == "do odbioru")){
				$_SESSION['update_book_sygnatura']= "Nie można zmienić w bazie zrealizowanego wypożyczenia lub do odbioru";
				header('Location: panel-uzytkownika');
				exit();
				}
			}



	if ($kol=="sygnatura_ksiazki"){
		
		//przypisanie id do podanej sygnatury		
		$sql="SELECT id FROM ksiazki WHERE sygnatura='$update' ";	
			
		$rezultat=$conn->query($sql);
		//sprawdzenie czy ksiazka o podanej sygnaturze istnieje
			if ($rezultat->num_rows > 0) {
				
				$row=$rezultat->fetch_assoc();						
				$ksiazka_id=$row['id'];
							
		//sprawdzenie czy nie chcemy zmienić wypożyczenia na takie gdzie już jest zero możliwych dalszych wypożyczeń	
		$sql="SELECT liczba_dostepnych FROM ksiazki WHERE id='$ksiazka_id' ";	
		$rezultat=$conn->query($sql);

					if ($rezultat->num_rows > 0) {
					
					$row=$rezultat->fetch_assoc();						
					$liczba_dostepnych_ksiazek=$row['liczba_dostepnych'];
					
						if ($liczba_dostepnych_ksiazek <1 ){
							$_SESSION['update_book_sygnatura'] = "Zmiana książki niemożliwa, gdyż liczba dostepnych egzemplarzy wynosi zero";
							header('Location: panel-uzytkownika');
							exit();
						}else{
							update_book($liczba_dostepnych_ksiazek, $ksiazka_id, $id, $conn);
						}
	
					}
			
					
			}	else{
				$_SESSION['sygnatura1']= "Brak książki o podanej sygnaturze";
				header('Location: panel-uzytkownika');
			}	
		
	}else if ($kol=="data_wypozyczenia"){
		
		//Update danych data do oddania
		
			$stara_data = date( $update );
			$dataOddania = date( 'y-m-d', strtotime( $stara_data .' +14 day' ));	
		
		$sql="UPDATE wypozyczenia SET data_oddania='$dataOddania' WHERE id='$id' ";
				
		if ($conn->query($sql)===false){						
				echo "Błąd update danej do bazy";
		}	
		
		
		//Update danych data wypozyczenia
					
		$sql="UPDATE wypozyczenia SET $kol='$update' WHERE id='$id' ";
				
		if ($conn->query($sql)===true){						
			$conn->close();
			header('Location: panel-uzytkownika');
		}else{
			echo "Błąd update danej do bazy";
		}

		
	}else{

		//Update danych
					
		$sql="UPDATE wypozyczenia SET $kol='$update' WHERE id='$id' ";
				
		if ($conn->query($sql)===true){						
			$conn->close();
			header('Location: panel-uzytkownika');
		}else{
			echo "Błąd update danej do bazy";
		}
	}		
$conn->close();
}
		
function update_book($liczba_dostepnych_ksiazek, $ksiazka_id, $id, $conn){
	
			//$ksiazka_id - id książki która ma zostać wypożyczona update 
			//$id - id wypożyczenia
	
			//znajdz id obecnego wypozyczenia

		$sql="SELECT id_ksiazki FROM wypozyczenia WHERE id='$id' ";	
		$rezultat=$conn->query($sql);

					if ($rezultat->num_rows > 0) {
					
					$row=$rezultat->fetch_assoc();						
					$ksiazka_id_obecna=$row['id_ksiazki'];
					
						$sql="SELECT liczba_dostepnych FROM ksiazki WHERE id='$ksiazka_id_obecna' ";	
						$rezultat=$conn->query($sql);

						if ($rezultat->num_rows > 0) {
								
							$row=$rezultat->fetch_assoc();						
							$liczba_dostepnych_ksiazek_obecna=$row['liczba_dostepnych'];
						}					
					
					$liczba_dostepnych_ksiazek=$liczba_dostepnych_ksiazek-1;
					$liczba_dostepnych_ksiazek_obecna=$liczba_dostepnych_ksiazek_obecna+1;
										
					}else{
						echo "Błąd update wypozyczenia do bazy";
						exit();
					}			
			
			//upadate id - sygnatury
			$sql="UPDATE wypozyczenia SET id_ksiazki='$ksiazka_id' WHERE id='$id' ";
					
			if ($conn->query($sql)===true){
									
				echo "connection and update - success";
				
			}else{
				echo "Błąd update wypozyczenia sygnatura ksiazki do bazy";
				}

					//rozpoczęcie zupadotwania - ile wypożyczono 1-wypierz ile teraz wypożyczono 2 - dodaj, odejmij, 3- wstaw update ile teraz wypożyczono

				$sql="SELECT wypozyczono FROM ksiazki WHERE id='$ksiazka_id' ";	
						$rezultat=$conn->query($sql);

						if ($rezultat->num_rows > 0) {
								
							$row=$rezultat->fetch_assoc();						
							$liczba_wypozyczono_stan_teraz_po_zmianie=$row['wypozyczono'];
						}					
						
				$sql="SELECT wypozyczono FROM ksiazki WHERE id='$ksiazka_id_obecna' ";	
						$rezultat=$conn->query($sql);

						if ($rezultat->num_rows > 0) {
								
							$row=$rezultat->fetch_assoc();						
							$liczba_wypozyczono_stan_teraz=$row['wypozyczono'];
						}						
				//2		
					$liczba_wypozyczono_stan_teraz_po_zmianie+=1;
			
					$liczba_wypozyczono_stan_teraz-=1;
					
				//3 upadate - liczba książek
				$sql="UPDATE ksiazki SET wypozyczono='$liczba_wypozyczono_stan_teraz_po_zmianie' WHERE id='$ksiazka_id' ";
						
				if ($conn->query($sql)===true){
										
				echo "connection and update - success";	
					
				}else{
					echo "Błąd update wypozyczenia sygnatura ksiazki do bazy";
					}
				
				//3 upadate - liczba książek
				$sql="UPDATE ksiazki SET wypozyczono='$liczba_wypozyczono_stan_teraz' WHERE id='$ksiazka_id_obecna' ";
						
				if ($conn->query($sql)===true){
										
				echo "connection and update - success";	
				
				}else{
					echo "Błąd update wypozyczenia sygnatura ksiazki do bazy";
					}


			//upadate - liczba książek
			$sql="UPDATE ksiazki SET liczba_dostepnych='$liczba_dostepnych_ksiazek' WHERE id='$ksiazka_id' ";
					
			if ($conn->query($sql)===true){
									
			echo "connection and update - success";	
				
			}else{
				echo "Błąd update wypozyczenia sygnatura ksiazki do bazy";
				}
			
			//upadate - liczba książek
			$sql="UPDATE ksiazki SET liczba_dostepnych='$liczba_dostepnych_ksiazek_obecna' WHERE id='$ksiazka_id_obecna' ";
					
			if ($conn->query($sql)===true){
									
				$conn->close();
				header('Location: panel-uzytkownika');
			}else{
				echo "Błąd update wypozyczenia sygnatura ksiazki do bazy";
				}
			
	}
	
	
	
	
?>