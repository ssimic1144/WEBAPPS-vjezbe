---
description: Web Aplikacije 5
author: Srđan Daniel Simić
license: CC BY-SA
---

![](fipu.png){height=23%}

# Web Aplikacije - Zadaci za doma i na satu - 05

1. Kreirajte web servis za upravljanje obavjestima.
Sastoji se od 4 rute. (dodajObavjest, vratiObavjesti, vratiObavjest, izmjeniObavjest)
Na rutu za dodavanje obavjesti šalje se samo naziv i sadržaj obavjesti.
Unutar funkcije novo dobivenoj obavjesti pridodaje se datum kad je kreirana.
Kad se vraćaju sve obavjesti, vrati se samo naziv i datum.

2. Kreirajte web servis za dodavanje autora.
Sastoji se 3 rute. (dodajAutora, vratiAutore, izbrisiDjeloAutora)
Kod dodavanja autora, očekuje se da se preda naziv i lista djela.
Ukoliko se ne predaju isključivo ta dva ključa (naziv, djela) odgovara sa sljedecim JSON response
Nakon toga provjerava je li duzina imena svakog djela manja od 20 znakova i u slučaju da nije
vraća JSON response sa imenom djela koji je pre dugacak -> `{"Error":"Djelo Process Mining in Practice ima vise od 20 znakova"}`
Vrati autore vraca sve autore i djela.
Ruta za brisanje djela brise iz liste djela autora jedno djelo.
