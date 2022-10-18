---
description: Blic 1
author: Srđan Daniel Simić
license: CC BY-SA
---

![](fipu.png){height=23%}

# Web Aplikacije - Blic 1

1. Funkcija uzima Array Object-a.
Vraća listu u kojoj se nalaze samo Object-i s jednim ključem.

> Ispis : [ { '1': 'A' }, { '1': 'C', '2': 'A' }, { '2': 'C' } ] -> [ { '1': 'A' }, { '2': 'C' } ]

2. Napišite funkciju koja za parametar uzima String, te vraća točno drugu polovicu danog stringa. (Zaokrožite na nižu, u slučaju floata)

> Ispis : "Javascript i nije tolko los" -> "nije tolko los"

3. Funkcija uzima Array brojeva i stringova.
Vraća sortirani Array u kojemu brojevi dolaze na pocetku, a stringovi na kraju, po veličini.

> Ispis : [321,63,"Mermelada",4,"Kruh",1,1234,"Tanjur",50] -> [ 1, 4, 50, 63, 321, 1234, 'Kruh', 'Tanjur', 'Mermelada' ]

4. Funkcija uzima Object.
Ako je vrijednost Array zbroji sve brojeve, izbaci ih iz Array-a, te zbroj, ako je paran broj, korjenuje i zaokruzi na dvije decimale i spremi u Array.
(Mora biti float)

> Ispis : { '1': [ 143, 'A', 21 ], '2': 'B', '3': [ 12, 11, 'C' ] }  -> { '1': [ 'A', 12.81 ], '2': 'B', '3': [ 'C' ] }

