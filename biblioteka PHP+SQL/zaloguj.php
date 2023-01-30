<?php

session_start();

//jeśli nie ma loginu i hasła to przekierowanie do strony logowania

if ((!isset($_POST['login'])) || (!isset($_POST['haslo'])))
{
	header('Location: biblioteka-logowanie');
	exit();
}

require_once "connect.php";
//ustanowienie połączenia
$polaczenie = @new mysqli($servername, $username, $password, $dbname);
//sprawdzenie kontroli błędów - czy udało się nawiązać połączenie
if($polaczenie->connect_errno!=0)
{
	//jeśli jest błąd ma wyświetlić, że jest błąd
	echo "Error: ".$polaczenie->connect_errno;
	
	//."Opis: ".$polaczenie->connect_error; - to była linijka potrzebna programiście, ale na zwnątrz im mniej pokazujemy tym lepiej
}
else
{
$login = $_POST['login'];
$haslo = $_POST['haslo'];


// zabezpieczenie przed wstrzykaniem sql
$login=htmlentities($login,ENT_QUOTES,"UTF-8");
//$haslo=htmlentities($haslo,ENT_QUOTES,"UTF-8");

//sprawdz czy uzytkownik w MySQL istnieje
//na początku kursu - $sql="SELECT*FROM uzytkownicy WHERE user='$login' AND pass='$haslo'";


if ($rezultat=@$polaczenie->query(sprintf("SELECT*FROM haslo WHERE login='%s'", mysqli_real_escape_string($polaczenie,$login))))
{
	
	/*wyciąganie kolumn z tabeli, if - mechanizm zabezpieczeczający
	zapytanie błędne - np. literówka */
	//ile rekordów zwróci nasze zapytanie
	$ile_userow =$rezultat->num_rows;
	if ($ile_userow>0)
	{
		
		$wiersz = $rezultat->fetch_assoc();
		//sprawdzić czy hash jest prawdziwy
		if(password_verify($haslo, $wiersz['haslo']))
			
		
		//password_verify($haslo, $wiersz['haslo'])
		
		
			{
			$_SESSION['zalogowany'] = true; //jeśli komuś udało się zalogowac, to będzie mała zmienną zalogowany o wartości true
			
			
			
			unset($_SESSION['blad']); //jeśli zalogowaliśmy się, to już nie potrzebna ta zmienna
			
			$rezultat->free_result();  //zamknięcie tablicy asocjacyjnej, czy tablicy ze słownym indexem
		
		//przekierować użytkownika
		header('Location: biblioteka-strona-glowna');	
		}else
		{
		//dobry login, ale złe hasło
		$_SESSION['blad'] = '<span style="color:red">Nieprawidłowy login lub hasło! </span>';
		header('Location: biblioteka-logowanie');
		}
	}else{
		
		$rezultat=@$polaczenie->query(sprintf("SELECT*FROM uzytkownicy WHERE login='%s'", mysqli_real_escape_string($polaczenie,$login)));
		$ile_userow =$rezultat->num_rows;
		if ($ile_userow>0){
		
		$wiersz = $rezultat->fetch_assoc();
		if(password_verify($haslo, $wiersz['haslo'])){
				
			$_SESSION['zalogowany'] = true; //jeśli komuś udało się zalogowac, to będzie mała zmienną zalogowany o wartości true
			unset($_SESSION['blad']); //jeśli zalogowaliśmy się, to już nie potrzebna ta zmienna				
			$rezultat->free_result();  //zamknięcie tablicy asocjacyjnej, czy tablicy ze słownym indexem
			//przekierować użytkownika
			
			$_SESSION['kod_identyfikacyjny']=$wiersz['kod_identyfikacyjny'];
			$_SESSION['imie']=$wiersz['imie'];
			$_SESSION['nazwisko']=$wiersz['nazwisko'];
			$_SESSION['idosoby']=$wiersz['id'];
			
			
			header('Location: panel-uzytkownika');	
			}else
			{
			//dobry login, ale złe hasło
			$_SESSION['blad'] = '<span style="color:red">Nieprawidłowy login lub hasło! </span>';
			header('Location: biblioteka-logowanie');
			}
	
		}else{
		//nie ma takiego uzytkownika, do logowania i podać, że dane logowania niepoprawne
		$_SESSION['blad'] = '<span style="color:red">Nieprawidłowy login lub hasło! </span>';
		header('Location: biblioteka-logowanie');
		}
	}

}

$polaczenie->close();
}

?>
