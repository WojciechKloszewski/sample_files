<?php

session_start();

if (!isset($_SESSION['zalogowany']))
{
	header('Location: library-login');
	exit();
}	


header('Location: http://wojklos.com.pl/library/library-main-page');

?>
