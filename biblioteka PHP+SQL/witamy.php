<?php

session_start();

//jesli ktoś już jest zalogowany udaj się do index.php
if((isset($_SESSSION['udanarejestracja'])))
{
	header('Location: panel-uzytkownika');
	exit(); //po tej linijce nic się nie wykona dalej z tego pliku, od razu przekierowanie do index.php
}
else
{
	unset($_SESSION['udanarejestracja']);
}

	//usuwamy zmienne pamiętające wartości w razie nieudanej walidacji
	
	if(isset($_SESSION['fr_imie'])) unset($_SESSION['fr_imie']);
	if(isset($_SESSION['fr_nazwisko'])) unset($_SESSION['fr_nazwisko']);
	if(isset($_SESSION['fr_pesel'])) unset($_SESSION['fr_pesel']);
	if(isset($_SESSION['fr_login'])) unset($_SESSION['fr_login']);
	if(isset($_SESSION['fr_haslo1'])) unset($_SESSION['fr_haslo1']);
	if(isset($_SESSION['fr_haslo2'])) unset($_SESSION['fr_haslo2']);
	if(isset($_SESSION['fr_regulamin'])) unset($_SESSION['fr_regulamin']);
	
	//usuwanie błędów rejestracji
	
	if(isset($_SESSION['e_nick'])) unset($_SESSION['e_nick']);
	if(isset($_SESSION['e_email'])) unset($_SESSION['e_email']);
	if(isset($_SESSION['e_haslo'])) unset($_SESSION['e_haslo']);
	if(isset($_SESSION['e_regulamin'])) unset($_SESSION['e_regulamin']);
	if(isset($_SESSION['e_bot'])) unset($_SESSION['e_bot']);
	
?>

<style>

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

<!DOCTYPE HTML>

<head>
<meta charset="utf-8" />
<title> Biblioteka </title>
<meta name="keywords" content="baza książek, książki, biblioteka" />
<meta name="description" content="Strona biblioteki" />
<meta name="author" content="WK" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<link rel="stylesheet" href="biblioteka.css" type="text/css"/>

<title> Strona logowania </title>
</head>

<body>

<h1>Dziękujemy za rejestrację </h1>

<h2>
<a href="biblioteka-logowanie"> Powrót do strony logowania </a><br/><br/>
</h2>


</body>

</html>