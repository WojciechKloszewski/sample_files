<?php

session_start();

//jesli ktoś już jest zalogowany udaj się do gra.php
if((isset($_SESSSION['zalogowany'])) && ($_SESSION['zalogowany'] == true))
{
	header('Location: biblioteka-strona-glowna');
	exit(); //po tej linijce nic się nie wykona dalej z tego pliku,
}
?>


<!DOCTYPE HTML>

<html lang="pl">

<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
<link rel="stylesheet" href="biblioteka.css" type="text/css"/>

<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title> Strona logowania </title>

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

</head>

<body>

<div id="version" style="text-align: right">
<a href="http://wojklos.com.pl/biblioteka/biblioteka-logowanie" style="text-decoration: none; color: gray;">Wersja polska</a> / <a style="text-decoration: none; color: gray;" href="http://wojklos.com.pl/library/library-login" >English version</a>
</div>

<h1> Logowanie do biblioteki </h1>

<div class="flex" style="justify-content: center;">

<div class="border1">


<form action="zaloguj.php" method="post">

<div> Login: <input type="text" name="login" /> </div>
<div>Hasło: <input type="password" name="haslo" /> </div>


<div class="flex">
<div><input type="submit" value="zaloguj" /></div>
</div>


</form>

<?php
//aby wpisać błąd, ale zapezpieczenie by nie pojawiało się przy pierwszym logowaniu
if(isset($_SESSION['blad'])) 
{
echo $_SESSION['blad'];
}

?>

<div><a href="biblioteka-rejestracja"> Rejestracja nowego użytkownika </a></div>

</div>
</div>

<h3>Testowy login admina: test</h3>
<h3> Testowe hasło admina: qwerty123 </h3>

<h3>Testowy login użytkownika: test1</h3>
<h3> Testowe hasło użytkownika: qwerty123 </h3>

</body>

</html>