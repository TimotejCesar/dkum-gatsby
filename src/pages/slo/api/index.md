---
templateKey: content-page
title: API
header: Vključitev DKUM v druge spletne strani
---
Nekatere funkcionalnosti DKUM so dosegljive preko programskega vmesnika (API-ja), ki omogoča integracijo teh funkcionalnosti v druge spletne strani, mobilne in druge aplikacije. Trenutno so preko programskega vmesnika dosegljive naslednje funkcionalnosti:

*   osnovno iskanje,
*   napredno iskanje,
*   brskanje po kategorijah,
*   osnovni izpis podatkov gradiva.

Na podlagi tega APi-ja je bila izdelana JavaScript aplikacija, ki omogoča enostavno vključitev funkcionalnosti DKUM na poljubno spletno stran.

### Demo

Primer namestitve JavaScript aplikacije v drugo spletno stran je viden [tukaj](http://sraka.uni-mb.si/tecaj/podrocje.aspx?id=281).

### Namestitev

Namestitev JavaScript aplikacije DKUM (v nadaljevanju "aplikacije") zajema naslednje korake:

1\. Prenesemo namestitveni paket [dkWebApp_v0.9.0.zip](https://dk.um.si/info/images/dkWebApp/dkWebApp_v0.9.0.zip), ki zajema naslednje datoteke:

*   **dk_webApp.js** - jedro aplikacije. Datoteko namestimo na želeno lokacijo na strežniku lastne spletne strani in vključimo v spletno stran. Vsebine ne spreminjati!
*   **jquery.min.js** - knjižnica jQuery 1.9.1 ali novejša. Datoteko namestimo na lokacijo poleg prejšnje datoteke, razen če je knjižnica že v uporabi. Datoteko vključimo v spletno stran.
*   **dk_style.css** - določa obliko aplikacije. Datoteko namestimo na želeno lokacijo na strežniku in vključimo v spletno stran. Obliko poljubno prilagodimo lastni spletni strani.
*   **index.html** - primer uporabe JS aplikacije, na strežnik je ni potrebno nameščati.

2\. Prve tri datoteke vključimo v lastno spletno stran. Zadostuje, da so datoteke vključene samo na podstran, na kateri bo aplikacija dosegljiva.

3\. Na poljubno lokacijo v vsebini spletne strani dodamo element, v katerem želimo izpis aplikacije. Npr.:

<pre class="koda">&lt;div id="dkWebApp"&gt;&lt;/div&gt; </pre>

4\. V spletno stran prilepimo naslednjo JavaScript kodo, ki sproži delovanje aplikacije:

<pre class="koda">
&lt;script type="text/javascript"&gt;
$(document).ready(function() {
  var dk = new dkWebApp({
    cmd       : 'iskanje',
    baseURL   : '',
    dkURL     : 'http://dkum.uni-mb.si/',
    element   : '#dkWebApp',
    langID    : 'slv'
    defOrgID  : ''
  });
});
&lt;/script&gt; 
</pre>

5\. Nastavimo aplikacijo. Pomen atributov je naslednji:

*   **cmd** - določa funkcionalnost, ki jo aplikacija omogoča ob prvem zagonu. Možne vrednosti so "iskanje" (privzeto), "naprednoIskanje" in "brskanje".
*   **baseURL** - določa naslov vaše spletne strani, kjer se aplikacija nahaja. Privzeto prazen niz. Vrednost obvezno nastavimo, če naša spletna stran uporablja svoje URL parametre (npr. ID podstrani).
*   **dkURL** - URL naslov spletnega API-ja. Vrednost za DKUM je navedena v koraku 4.
*   **element** - navedemo ID elementa, v katerem se izpiše vmesnik aplikacije. Tukaj navedemo ime, kot ga določimo v elementu v koraku 3, če da dodamo znak #.
*   **langID** - aplikacija je večjezična, s tem atributom nastavimo jezik. Privzeto "slv".
*   **defOrgID** - privzeto izbran vir iskanja oz. organizacija. Privzeto prazen niz, kar išče po celotni digitalni knjižnici. Vnesti je potrebno ID, nabor ID-jev lahko dobimo v izvorni HTML kodi iskalnika.

6\. Testiramo aplikacijo. Če se aplikacija ne naloži, v spletni konzoli brskalnika preverimo morebitne izpise napak.
<br><br><br>

### Uporaba API-ja

Če navedena JavaScript aplikacija ni ustrezna, lahko implementirate lastno rešitev z uporabo istih funkcij za dostop do podatkov. Te funkcije so dokumentirane posebej in zajemajo:

*   [getSearch](https://dk.um.si/pomoc.php?id=webapi#getSearch) - enostavno iskanje
*   [getAdvancedSearch](https://dk.um.si/pomoc.php?id=webapi#getAdvancedSearch) - napredno iskanje
*   [getBrowse](https://dk.um.si/pomoc.php?id=webapi#getBrowse) - brskanje po kategorijah
*   [getDocument](https://dk.um.si/pomoc.php?id=webapi#getDocument) - osnovni izpis gradiva