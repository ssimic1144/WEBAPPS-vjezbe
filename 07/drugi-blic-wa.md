---
description: Blic 2
author: Srđan Daniel Simić
license: CC BY-SA
---

![](fipu.png){height=23%}

# Web Aplikacije - Blic 2

Kreirajte web servis koji se sastoji od 4 rute.
Servis je spojen s MongoDB.
Prva ruta (`/saveItem`) sprema artikl u bazu podataka.
Očekivani JSON izgleda :
```json
{
        data:{
                item:{
                        name:"Hlace",
                        price:70.53,
                        brand:"New"
                    }

            }
    }
```
Vraća pozitivan odgovor u slučaju da sve prođe uredu.
Odgovor izgleda :
```json
{
        status:"OK",
        message:"Item Hlace saved in DB"
    }
```
Ukoliko je negativan vraća odgovarajuću poruku.

Druga ruta (`/getBrand`) vraća sve artikl istog branda.
Ruta za testiranje onda izgleda npr. `/getBrand?brand=New`.
Ukoliko brand postoji, odgovor je sljedeći:
```json
{
        status:"OK",
        data:{
                brand:"New",
                items:[
                    {name:"Hlace", price:70.53},
                    {name:"Jakna", price:250.1}
                ]
            }
    }
```
Ukoliko ne postoji vraća odgovarajuću poruku :
```json
{
        status:"Failed",
        message:"Brand New not found in DB"
    }
```

Treća ruta (`/getItemById`) vraća jedan artikl.
Ruta za testiranje onda izgleda npr. `/getItemById?id=123`.
Ukoliko artikl postoji, odgovor je sljedeći:
```json
{
        status:"OK",
        data:{
                item:{
                        name:"Hlace",
                        price:70.53,
                        brand:"New"
                    }
            }
    }
```

Četvrta ruta (`/updateItemPrice`) mjenja cijenu jednog artikla.
Ruta za testiranje onda izgleda npr. `/updateItemPrice?id=123`.
Nova cijena se šalje kao JSON i izgleda : 
```json
{
        newPrice:80.5
    }
```
Kad se promjeni cijena u DB za određeni artikl, servis odgovara sa JSON-om:
```json
{
        status:"OK",
        message:"Item 123 updated with new price 80.5"
    }
```
Ukoliko je neuspješno, šalje odgovarajuću poruku.
