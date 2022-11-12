---
description: Web Aplikacije 4
author: Srđan Daniel Simić
license: CC BY-SA
---

![](fipu.png){height=23%}

# Web Aplikacije - Zadaci za doma - 04

1. Kreirajte web servis za upravljanje obavjestima.
Sastoji se od 4 rute. (dodajObavjest, vratiObavjesti, vratiObavjest, izmjeniObavjest)
Na rutu za dodavanje obavjesti šalje se samo naziv i sadržaj obavjesti.

    `{"naziv":"Rok za predaju zadace","sadrzaj":"Rok za predaju zadace je 8.11."}`

    Unutar funkcije novo dobivenoj obavjesti pridodaje se id i datum kad je kreirana.
    Sprema se u memoriju.
    Kad se vraćaju sve obavjesti, vrati se samo naziv i datum.
    Kad se vraća jedna obavjest, vrati se naziv, sadržaj i timestamp.

    `{"naziv":"Rok za predaju zadace","sadrzaj":"Rok za predaju zadace je 8.11.", "datum":"Fri Oct 28 2022 08:50:27 GMT+0200 (Central European Summer Time)"}`

    Kod izmjene obavjesti, moguće je samo izmjeniti sadržaj.

2. Kreirajte web servis za dodavanje autora.
Sastoji se 3 rute. (dodajAutora, vratiAutore, izbrisiDjeloAutora)
Kod dodavanja autora, očekuje se da se preda naziv i lista djela.
Ukoliko se ne predaju isključivo ta dva ključa (naziv, djela) odgovara sa sljedecim JSON response -> `{"Error":"Krivi kljucevi"}`.
Nakon toga provjerava je li duzina imena svakog djela manja od 20 znakova i u slučaju da nije
vraća JSON response sa imenom djela koji je pre dugacak -> `{"Error":"Djelo Process Mining in Practice ima vise od 20 znakova"}`
Ako je sve uredu dodaje datum i id, te sprema autora.
Vrati autore vraca sve autore i djela.
Ruta za brisanje djela brise iz liste djela autora jedno djelo.
