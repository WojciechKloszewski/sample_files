<?php

session_start();

$_SESSION['zm_sesji'] = $_SESSION['zm_sesji'];

	require_once "connect.php";

	$conn = new mysqli($servername, $username, $password, $dbname);

	$conn ->query('SET NAMES UTF8');
	$conn ->query('SET CHARACTER_SET utf8_unicode_ci');

if ($conn->connect_error){
		die("Error: ".$conn->connect_error);
	//	header('Location: index.php');
	}else{	
	
			$login=$_POST['login_id'];
            $haslo=$_POST['haslo_id'];
			$imie=$_POST['imie'];
			$nazwisko=$_POST['nazwisko'];
			$pesel=$_POST['pesel'];
			$typ_klienta=$_POST['typ'];
		
		

            $sql="SELECT id FROM uzytkownicy WHERE login='$login'";

            $rezultat=$conn->query($sql);

            if ($rezultat->num_rows > 0) {
			
					$_SESSION['insert_uzytkownicy_login']="Istnieje już konto o takim loginie";
            header('Location: biblioteka-strona-glowna');
                    exit(0);    
            }

			
                $sql="SELECT id FROM uzytkownicy";

                $rezultat=$conn->query($sql);

            if ($rezultat->num_rows > 0) {    
				
				$ile_wierszy = $rezultat->num_rows;
			
			$ile_wierszy+=1;
			
			$kod_identyfikacyjny='WET'.$ile_wierszy;

            }


            $haslo_hash=password_hash($haslo,PASSWORD_DEFAULT);

		
			if ($typ_klienta == "uczen_person"){
			$typ_klienta = "uczeń";
			}else if ($typ_klienta == "student_person"){
			$typ_klienta = "student";
			}else if ($typ_klienta == "nauczyciel_person"){
			$typ_klienta = "nauczyciel";
			}else if ($typ_klienta == "zwykly_person"){
			$typ_klienta = "zwykły";
			}	
					
			//dodaj wypozyczenie
			$sql="INSERT INTO uzytkownicy VALUES (NULL,'$kod_identyfikacyjny', '$imie', '$nazwisko', '$pesel' , '$typ_klienta','$login','$haslo_hash')";
		
			if ($conn->query($sql)===true){	

			header('Location: biblioteka-strona-glowna');
							
			}else{
			echo "Błąd dodania wypozyczenia do bazy";
		//	header('Location: index.php');
			}
	}
	
	$conn->close();
	
?>