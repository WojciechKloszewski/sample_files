-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Czas generowania: 22 Gru 2022, 17:30
-- Wersja serwera: 10.6.10-MariaDB-cll-lve
-- Wersja PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `u931849715_biblioteka`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `haslo`
--

CREATE TABLE `haslo` (
  `id` int(11) NOT NULL,
  `login` text COLLATE utf16_polish_ci NOT NULL,
  `haslo` text COLLATE utf16_polish_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf16 COLLATE=utf16_polish_ci;

--
-- Zrzut danych tabeli `haslo`
--

INSERT INTO `haslo` (`id`, `login`, `haslo`) VALUES
(1, 'test', '$2y$10$REZZlYT/P6FyTE1mLgBf.u6DkW552SUtL/FEmVc1Y4Mm5HLnci/5.');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ksiazki`
--

CREATE TABLE `ksiazki` (
  `id` int(11) NOT NULL,
  `sygnatura` text CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci NOT NULL,
  `tytul_ksiazki` text CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci NOT NULL,
  `imie_nazwisko_autora` text CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci NOT NULL,
  `rok_wydania` int(11) NOT NULL,
  `liczba_dostepnych` int(11) NOT NULL,
  `liczba_ogolem` int(11) NOT NULL,
  `wypozyczono` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf16 COLLATE=utf16_polish_ci;

--
-- Zrzut danych tabeli `ksiazki`
--

INSERT INTO `ksiazki` (`id`, `sygnatura`, `tytul_ksiazki`, `imie_nazwisko_autora`, `rok_wydania`, `liczba_dostepnych`, `liczba_ogolem`, `wypozyczono`) VALUES
(1, 'ADF46', 'Zbrodnia i kara', 'Fiodor Dostojewski', 1999, 1, 6, 5),
(2, 'BDR34', 'Pan Tadeusz', 'Adam Mickiewicz', 1999, 3, 7, 4),
(3, 'FRY53', 'Balladyna', 'Juliusz Słowacki', 2015, 3, 3, 0),
(5, 'RYT66', 'Latarnik', 'Henryk Sienkiewicz', 2001, 3, 4, 1),
(12, 'YUI72', 'Katarynka', 'Bolesław Prus', 1999, 4, 4, 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uzytkownicy`
--

CREATE TABLE `uzytkownicy` (
  `id` int(11) NOT NULL,
  `kod_identyfikacyjny` text CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci NOT NULL,
  `imie` text CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci NOT NULL,
  `nazwisko` text CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci NOT NULL,
  `pesel` bigint(12) NOT NULL,
  `typ_klienta` text CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci NOT NULL,
  `login` text COLLATE utf16_polish_ci NOT NULL,
  `haslo` text COLLATE utf16_polish_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf16 COLLATE=utf16_polish_ci;

--
-- Zrzut danych tabeli `uzytkownicy`
--

INSERT INTO `uzytkownicy` (`id`, `kod_identyfikacyjny`, `imie`, `nazwisko`, `pesel`, `typ_klienta`, `login`, `haslo`) VALUES
(1, 'WET1', 'Piotr', 'Jankowski', 54112437245, 'uczeń', 'test1', '$2y$10$REZZlYT/P6FyTE1mLgBf.u6DkW552SUtL/FEmVc1Y4Mm5HLnci/5.'),
(2, 'WET2', 'Beata', 'Milka', 88102405432, 'student', 'koza2', '$2y$10$REZZlYT/P6FyTE1mLgBf.u6DkW552SUtL/FEmVc1Y4Mm5HLnci/5.'),
(3, 'WET3', 'Patryk', 'Liczewski', 77012107532, 'nauczyciel', 'owca1', '$2y$10$REZZlYT/P6FyTE1mLgBf.u6DkW552SUtL/FEmVc1Y4Mm5HLnci/5.'),
(4, 'WET4', 'Wanda', 'Fibel', 77012107532, 'zwykły', 'lama5', '$2y$10$REZZlYT/P6FyTE1mLgBf.u6DkW552SUtL/FEmVc1Y4Mm5HLnci/5.'),
(9, 'WET5', 'Jan', 'Kowalski', 88082304321, 'uczeń', 'tuba1', '$2y$10$REZZlYT/P6FyTE1mLgBf.u6DkW552SUtL/FEmVc1Y4Mm5HLnci/5.'),
(10, 'WET6', 'Darek', 'Finn', 13245678912, 'uczeń', 'Ponytail', '$2y$10$Kzn.Zd9FEZgX5T03whmbXu3JfKM2U5wsrspsy9dSokNEXGz1bhZdi'),
(11, 'WET7', 'Alibaba', 'Blik', 12345678916, 'zwykły', 'Alibaba', '$2y$10$GqsrlD69eqc.bYfbG6KVQ.odNiaksgQ8DgzJ28/LVH1ns3D1foDXG'),
(12, 'WET8', 'Ere', 'Erte', 12345678912, 'uczeń', 'qwerty', '$2y$10$VlWXOMjuk8jcUaZweZ9N6ebXOgqmFRQBuPFqyfN6Cr3DOH9M1pTUy'),
(15, 'WET9', 'Welek', 'Filo', 12345678916, 'student', 'Wilo', '$2y$10$Ru8RVsVZsDk0ScH9dhd8NOAQnlaAejpr/WRpdZRDypgez.fsg6ATC');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wypozyczenia`
--

CREATE TABLE `wypozyczenia` (
  `id` int(11) NOT NULL,
  `id_wypozyczajacy` text CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci NOT NULL,
  `id_ksiazki` text CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci NOT NULL,
  `data_wypozyczenia` date NOT NULL,
  `data_oddania` date NOT NULL,
  `status` text CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf16 COLLATE=utf16_polish_ci;

--
-- Zrzut danych tabeli `wypozyczenia`
--

INSERT INTO `wypozyczenia` (`id`, `id_wypozyczajacy`, `id_ksiazki`, `data_wypozyczenia`, `data_oddania`, `status`) VALUES
(1, '3', '2', '2020-08-12', '2020-08-28', 'wypożyczono'),
(2, '2', '2', '2020-08-27', '2020-05-26', 'do odbioru'),
(54, '12', '5', '2020-08-26', '2020-09-09', 'do odbioru'),
(34, '1', '2', '2020-08-05', '2020-08-19', 'wypożyczono'),
(40, '3', '1', '2020-08-12', '2020-08-26', 'do odbioru'),
(41, '3', '1', '2020-08-11', '2020-08-25', 'zamówiona'),
(42, '3', '1', '2020-08-18', '2020-09-01', 'zamówiona'),
(43, '3', '1', '2020-08-28', '2020-09-11', 'zamówiona'),
(47, '3', '2', '2020-08-11', '2020-08-25', 'zamówiona'),
(51, '1', '12', '2020-08-19', '2020-09-02', 'zamówiona'),
(55, '10', '1', '2020-08-29', '2020-09-12', 'zamówiona');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `haslo`
--
ALTER TABLE `haslo`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `ksiazki`
--
ALTER TABLE `ksiazki`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `wypozyczenia`
--
ALTER TABLE `wypozyczenia`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `haslo`
--
ALTER TABLE `haslo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT dla tabeli `ksiazki`
--
ALTER TABLE `ksiazki`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT dla tabeli `wypozyczenia`
--
ALTER TABLE `wypozyczenia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
