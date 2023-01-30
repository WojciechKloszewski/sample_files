<?php

session_start();

//upewnić się, że ktoś wysłał formularz, aby walidacja była dopiero po kliknięciu submit


if (isset($_POST['login']))
{
	//udana walidacja
	$wszystko_OK=true;
	
	//sprawdz imie
	$imie=$_POST['imie'];
	//sprawdzenie długości imienia
	if ((strlen($imie)<3)||(strlen($imie)>20))
	{
		$wszystko_OK=false;
		$_SESSION['e_imie']="Imię musi posiadać od 3 do 20 znaków!";
	}
	
	    if (!preg_match("/^[a-zA-Z ]*$/",$imie)) {
     $_SESSION['e_imie']= "Imię może składać się tylko z liter i białych znaków(spacja)";
    }
	
		//sprawdz nazwisko
	$nazwisko=$_POST['nazwisko'];
	//sprawdzenie długości nazwiska
	if ((strlen($nazwisko)<3)||(strlen($nazwisko)>20))
	{
		$wszystko_OK=false;
		$_SESSION['e_nazwisko']="Nazwisko musi posiadać od 3 do 20 znaków!";
	}
	
	    if (!preg_match("/^[a-zA-Z ]*$/",$nazwisko)) {
      $_SESSION['e_nazwisko']= "Nazwisko może składać się tylko z liter i białych znaków(spacja)";
    }
	
	//sprawdz pesel
	$pesel=$_POST['pesel'];
	//sprawdzenie długości peselu
	if ((strlen($pesel)<11)||(strlen($pesel)>11))
	{
		$wszystko_OK=false;
		$_SESSION['e_pesel']="Pesel składa się z 11 cyfr!";
	}
	
	    if (!preg_match("/^[0-9]*$/",$pesel)) {
      $_SESSION['e_pesel']= "Pesel może składać się tylko z cyfr";
    }
	
	
	//konwersja typ_klienta
	
	$typ_klienta=$_POST['typ_klienta'];
	
	if($typ_klienta=="uczen"){
	$typklienta="uczeń";
	}else if ($typ_klienta=="student"){
	$typklienta="student";
	}else if ($typ_klienta=="nauczyciel"){
	$typklienta="nauczyciel";
	}else if ($typ_klienta=="zwykly"){
	$typklienta="zwykły";
	}
	
	
		//sprawdz login
	$login=$_POST['login'];
	//sprawdzenie długości loginu
	if ((strlen($login)<3)||(strlen($login)>20))
	{
		$wszystko_OK=false;
		$_SESSION['e_login']="Login musi posiadać od 3 do 20 znaków!";
	}
	
	if (ctype_alnum($login)==false)
	{
		$wszystko_OK=false;
		$_SESSION['e_login']="Login może składać się tylko z liter i cyfr, bez polskich znaków";
	}	
	

		//Sprawdź poprawność hasła
		$haslo1 = $_POST['haslo1'];
		$haslo2 = $_POST['haslo2'];
		
		if ((strlen($haslo1)<5) || (strlen($haslo1)>20))
		{
			$wszystko_OK=false;
			$_SESSION['e_haslo']="Hasło musi posiadać od 5 do 20 znaków";
		}	


		if ($haslo1!=$haslo2)
		{
			$wszystko_OK=false;
			$_SESSION['e_haslo1']="Hasło powtórzone musi być identyczne";
		}	
	
		$haslo_hash=password_hash($haslo1,PASSWORD_DEFAULT);
		//wersja robocza do okreslenia zahaszowania hasła z hasła zwykłego echo $haslo_hash; exit();
	
		//czy zaakceptowano regulamin
		
		if (!isset($_POST['regulamin']))
		{
			$wszystko_OK=false;
			$_SESSION['e_regulamin']="Regulamin musi zostać zaakceptowany";
		}	
		
	
		//echo $_POST['regulamin']; 
	
		//czy zaznaczono capatcha
		
		$sekret="6LciXTojAAAAAKp4Mk4Zvntr48BJt02S0rjGulrV";
		//pobierz zawartość pliku do zmiennej z serwera google dotyczącej captcha
		$sprawdz = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$sekret.'&response='.$_POST['g-recaptcha-response']);
		//zdekodowanie z json do zwykłej f-cji
		$odpowiedz = json_decode($sprawdz);
		//czy jest sukces?
		if($odpowiedz->success==false)
		{
			$wszystko_OK=false;
			$_SESSION['e_bot']="Potwierdź, że nie jesteś botem";
		}
		
		//zapamiętaj wprowadzone dane
		
		$_SESSION['fr_imie']=$imie;
		$_SESSION['fr_nazwisko']=$nazwisko;
		$_SESSION['fr_pesel']=$pesel;

		$_SESSION['fr_login']=$login;
		$_SESSION['fr_haslo1']=$haslo1;
		$_SESSION['fr_haslo2']=$haslo2;
		if(isset($_POST['regulamin'])) $_SESSION['fr_regulamin']=true;
		

		require_once "connect.php";
		//określanie sposobu raportowania błędów, np. by na ekranie nie pojawiały się wszystkie komunikaty o błędach
		mysqli_report(MYSQLI_REPORT_STRICT);
		
		try
		{
			
			//połączyć się z bazą danych
			$polaczenie = new mysqli($servername, $username,$password,$dbname);
			
				$polaczenie ->query('SET NAMES UTF8');
				$polaczenie ->query('SET CHARACTER_SET utf8_unicode_ci');
			
			
			if($polaczenie->connect_errno!=0)
			{
				throw new Exception(mysqli_connect_errno()); //rzuć nowym wyjątkiem
			}
			else
			{
				//sukcep połączenia
				//czy login już istnieje?
				$rezultat = $polaczenie->query("SELECT id FROM uzytkownicy WHERE login='$login'");
				
				//niepowodzenie
				
				if (!$rezultat) throw new Exception($polaczenie->error);
				
				$ile_takich_loginow = $rezultat->num_rows;
				if($ile_takich_loginow>0)
				{
					$wszystko_OK=false;
					$_SESSION['e_email']="Istnieje już konto o takim loginie";
				}else{
			
			$rezultat = $polaczenie->query("SELECT id FROM uzytkownicy");
			
			if (!$rezultat) throw new Exception($polaczenie->error);
				
				$ile_wierszy = $rezultat->num_rows;
			
			$ile_wierszy+=1;
			
			$sygnatura='WET'.$ile_wierszy;

				}					
		


	if($wszystko_OK==true)
	{
		//wszystko, ok dodanie osoby do bazy
		if ($polaczenie->query("INSERT INTO uzytkownicy VALUES(NULL,'$sygnatura','$imie','$nazwisko','$pesel','$typklienta','$login','$haslo_hash')"))
		{
		$_SESSION['udanarejestracja']=true;
		header('Location: biblioteka-witamy');

		}
		else
		{
		throw new Exception($polaczenie->error);
		}			

	}
				
				$polaczenie->close();
			}
					
		}
		catch(Exception $e)  //złap wyjątki jeśli jakieś zostały rzucone
		{
			echo '<span style="color:red;">Błąd serwera. Prośba o rejestrację w późniejszym terminie</span>';
			echo '<br/>Informacja developerska:'.$e; //na etapie wstępnym, potem w wersji produkcyjnej opatrzeć w komentarz bo co to interesuje usera
		}
	
	if($wszystko_OK==true)
	{
		//wszystko ok, dodanie osoby do bazy
		echo "Udana walidacja"; exit();
	}
}
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

<title> Strona logowania </title>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>


 <script>
   function onSubmit(token) {
     document.getElementById("demo-form").submit();
   }
 </script>



<link rel="stylesheet" href="biblioteka.css" type="text/css"/>

<style>  
.error
{
	color:red;
	margin-top: 10px;
	margin-bottom: 10px;
}


a:link{
text-decoration: none;	
color: grey;
}
a:visited{
text-decoration: none;	
color: grey;
}
a:active{
text-decoration: none;	
}
a:hover{

color: #555555;
}


</style>

</head>

<body>


<div><a href="biblioteka-logowanie"> Rezygnacja z rejestracji. Powrót do strony logowania </a></div>



<h1> Rejestracja </h1>

<div class="flex" style="justify-content: center;">

<div class="border1">

<form method="post">

<div> Imię: <div/> <div> <input type="text" value="<?php 
	if(isset($_SESSION['fr_imie']))
	{
		echo $_SESSION['fr_imie'];
		unset($_SESSION['fr_imie']);
	}
?>" name="imie" /> <div/>
<?php
if(isset($_SESSION['e_imie']))
{
	echo '<div class="error">'.$_SESSION['e_imie'].'</div>';
	unset($_SESSION['e_imie']);
}
?>


<div> Nazwisko:  <div/> <div> <input type="text" value="<?php 
	if(isset($_SESSION['fr_nazwisko']))
	{
		echo $_SESSION['fr_nazwisko'];
		unset($_SESSION['fr_nazwisko']);
	}
?>" name="nazwisko" /> <div/>
<?php
if(isset($_SESSION['e_nazwisko']))
{
	echo '<div class="error">'.$_SESSION['e_nazwisko'].'</div>';
	unset($_SESSION['e_nazwisko']);
}
?>


<div> Pesel: <div/> <div> <input type="text" value="<?php 
	if(isset($_SESSION['fr_pesel']))
	{
		echo $_SESSION['fr_pesel'];
		unset($_SESSION['fr_pesel']);
	}
?>" name="pesel" /> <div/>
<?php
if(isset($_SESSION['e_pesel']))
{
	echo '<div class="error">'.$_SESSION['e_pesel'].'</div>';
	unset($_SESSION['e_pesel']);
}
?>

<div>
<label for="typ_klienta">Wybierz typ klienta:</label>

<div/>
<div>
<select id="typ_klienta" name="typ_klienta" required ><option value="uczen">Uczeń</option><option value="student">Student</option><option value="nauczyciel">Nauczyciel</option><option value="zwykly">Zwykły</option></select>

<div/>

<div>Login: <div/> <div> <input type="text" value="<?php 
	if(isset($_SESSION['fr_login']))
	{
		echo $_SESSION['fr_login'];
		unset($_SESSION['fr_login']);
	}
?>
" name="login" /> <div/>

<?php
if(isset($_SESSION['e_login']))
{
	echo '<div class="error">'.$_SESSION['e_login'].'</div>';
	unset($_SESSION['e_login']);
}
?>

<div> Twoje hasło: <div/> <div> <input type="password" value="<?php 
	if(isset($_SESSION['fr_haslo1']))
	{
		echo $_SESSION['fr_haslo1'];
		unset($_SESSION['fr_haslo1']);
	}
?>
"




name="haslo1" /> <div/>

<?php
if(isset($_SESSION['e_haslo']))
{
	echo '<div class="error">'.$_SESSION['e_haslo'].'</div>';
	unset($_SESSION['e_haslo']);
}
?>

<div> Powtórz hasło: <div/> <div>  <input type="password" value="<?php 
	if(isset($_SESSION['fr_haslo2']))
	{
		echo $_SESSION['fr_haslo2'];
		unset($_SESSION['fr_haslo2']);
	}
?>
"



name="haslo2" /> <div/>

<?php
if(isset($_SESSION['e_haslo1']))
{
	echo '<div class="error">'.$_SESSION['e_haslo1'].'</div>';
	unset($_SESSION['e_haslo1']);
}
?>

<div>
<label><input type="checkbox" name="regulamin" 
<?php
if(isset($_SESSION['fr_regulamin']))
{
	echo "checked";
	unset($_SESSION['fr_regulamin']);
}


?>
/> Akceptuję regulamin</label> <div/>

<div>
<?php
if(isset($_SESSION['e_regulamin']))
{
	echo '<div class="error">'.$_SESSION['e_regulamin'].'</div>';
	unset($_SESSION['e_regulamin']);
}
?>

 <div/>

<div class="g-recaptcha" data-sitekey="6LciXTojAAAAAPV7xMixgcByx0_fvyChvxyq-83G"></div>



<?php
if(isset($_SESSION['e_bot']))
{
	echo '<div class="error">'.$_SESSION['e_bot'].'</div>';
	unset($_SESSION['e_bot']);
}
?>

<input type="submit" value="Zarejestruj nowego użytkownika">


</form>

</div>
</div>

</body>

</html>