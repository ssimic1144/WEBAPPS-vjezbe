---
description: Web Aplikacije 4
author: Srđan Daniel Simić
license: CC BY-SA
---

![](fipu.png){height=23%}

# Web Aplikacije - Zadaci na satu - 04

1. Kreirajte mali web servis.
Sastoji se od dvije rute. (/dohvatiArtikle, /dodajArtikl)
Unutar POST rute, artiklu se dodijeli id te mu se doda random cijena u range-u od 1-100.
(Artikl ima ime,cijenu i id)
Unutar GET, vraćaju se svi artikli sa cijenom vecom od 30.

2. Unaprijedite prijašnji web servis tako da se može odraditi PATCH cijene i DELETE artikla. 
Ukoliko se odradi PATCH, artiklu se dodaje status o promjeni.
(Sada artikl ima dodatan kljuc status)

