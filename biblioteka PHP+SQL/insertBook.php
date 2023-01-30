<?php

session_start();

$_SESSION['zm_sesji'] = $_SESSION['zm_sesji'];

	require_once "connect.php";

	$conn = new mysqli($servername, $username, $password, $dbname);

	$conn ->query('SET NAMES UTF8');
	$conn ->query('SET CHARACTER_SET utf8_unicode_ci');

	if ($conn->connect_error){
		die("Error: ".$conn->connect_error);
		header('Location: biblioteka-strona-glowna');
	}else{	
	
			$sygnatura=$_POST['sygnatura'];
			$ksiazka=$_POST['ksiazka'];
			$autor=$_POST['autor'];
			$rok_wydania=$_POST['rok_wydania'];
			$liczba_sztuk=$_POST['liczba_sztuk'];
			
			//nie mogą być dwie książki o tej samej sygnaturze
			
			$sql="SELECT sygnatura FROM ksiazki WHERE sygnatura='$sygnatura' ";
		
		$rezultat=$conn->query($sql);
		
			if ($rezultat->num_rows > 0) {
				
			$_SESSION['insert_book_sygnatura'] = "Nie można dodać dwa razy książki o tej samej sygnaturze";
			
			header('Location: biblioteka-strona-glowna');
				exit();
			}
			
			//dodaj wypozyczenie
			$sql="INSERT INTO ksiazki VALUES (NULL,'$sygnatura', '$ksiazka', '$autor', '$rok_wydania' , '$liczba_sztuk' , '$liczba_sztuk', 0)";
		
			if ($conn->query($sql)===true){	

			header('Location: biblioteka-strona-glowna');
							
			}else{
			echo "Błąd dodania wypozyczenia do bazy";
			header('Location: biblioteka-strona-glowna');
			}
	}
	
	$conn->close();
	
?>