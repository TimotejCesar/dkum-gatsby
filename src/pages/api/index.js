import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"

const IndexPage = () => (
  <Layout>
        <p>Nekatere funkcionalnosti DKUM so dosegljive preko
                programskega vmesnika (API-ja), ki omogoča integracijo teh
                funkcionalnosti v druge spletne strani, mobilne in druge aplikacije.
                Trenutno so preko programskega vmesnika dosegljive naslednje
            funkcionalnosti:</p>
        <ul>
            <li>osnovno iskanje,</li>
            <li>napredno iskanje,</li>
            <li>brskanje po kategorijah,</li>
            <li>osnovni izpis podatkov gradiva.</li>
        </ul>
        <p>Na podlagi tega APi-ja je bila izdelana JavaScript aplikacija, ki
          omogoča enostavno vključitev funkcionalnosti DKUM na poljubno spletno
            stran.</p>
        <h3>Demo</h3>
        <p>Primer namestitve JavaScript aplikacije v drugo spletno stran je viden <a
            href="http://sraka.uni-mb.si/tecaj/podrocje.aspx?id=281">tukaj</a>.</p>
        <h3>Namestitev</h3>
        <p>Namestitev JavaScript aplikacije DKUM (v nadaljevanju "aplikacije") zajema naslednje korake:</p>
        <p>1. Prenesemo namestitveni paket <a
            href="https://dk.um.si/info/images/dkWebApp/dkWebApp_v0.9.0.zip">dkWebApp_v0.9.0.zip</a>, ki zajema
            naslednje datoteke:</p>
        <ul>
            <li><strong>dk_webApp.js</strong> - jedro aplikacije. Datoteko namestimo
              na želeno lokacijo na strežniku lastne spletne strani in vključimo v
              spletno stran. Vsebine ne spreminjati!</li>
            <li><strong>jquery.min.js</strong> - knjižnica jQuery 1.9.1 ali novejša.
              Datoteko namestimo na lokacijo poleg prejšnje datoteke, razen če je
              knjižnica že v uporabi. Datoteko vključimo v spletno stran.</li>
            <li><strong>dk_style.css</strong> - določa obliko aplikacije. Datoteko
              namestimo na želeno lokacijo na strežniku in vključimo v spletno stran.
              Obliko poljubno prilagodimo lastni spletni strani.</li>
            <li><strong>index.html</strong> - primer uporabe JS aplikacije, na strežnik je ni potrebno nameščati.</li>
        </ul>
        <p>2. Prve tri datoteke vključimo v lastno spletno stran. Zadostuje, da
          so datoteke vključene samo na podstran, na kateri bo aplikacija
            dosegljiva.</p>
        <p>3. Na poljubno lokacijo v vsebini spletne strani dodamo element, v katerem želimo izpis aplikacije. Npr.:
          </p>
        <pre class="koda">&lt;div id="dkWebApp"&gt;&lt;/div&gt; </pre>
        <p>4. V spletno stran prilepimo naslednjo JavaScript kodo, ki sproži delovanje aplikacije:</p>
        <pre className="koda">
            &lt;script type="text/javascript"&gt;
            <br />$(document).ready(function() {'{'}
            <br />  var dk = new dkWebApp({'{'}<br />    cmd       : 'iskanje',
            <br />    baseURL   : '',<br />    dkURL     : 'http://dkum.uni-mb.si/',
            <br/>    element   : '#dkWebApp',<br/>    langID    : 'slv'
            <br/>    defOrgID  : ''
            <br/>  });
            <br/>});
            <br/>&lt;/script&gt; 
        </pre>
                
                
                <p>5. Nastavimo aplikacijo. Pomen atributov je naslednji:</p>
                <ul>
                    <li><strong>cmd</strong> - določa funkcionalnost, ki jo aplikacija
                      omogoča ob prvem zagonu. Možne vrednosti so "iskanje" (privzeto),
              "naprednoIskanje" in "brskanje".</li>
                    <li><strong>baseURL</strong> - določa naslov vaše spletne strani, kjer
                      se aplikacija nahaja. Privzeto prazen niz. Vrednost obvezno nastavimo,
              če naša spletna stran uporablja svoje URL parametre (npr. ID podstrani).</li>
                    <li><strong>dkURL</strong> - URL naslov spletnega API-ja. Vrednost za DKUM je navedena v koraku 4.</li>
                    <li><strong>element</strong> - navedemo ID elementa, v katerem se izpiše
                      vmesnik aplikacije. Tukaj navedemo ime, kot ga določimo v elementu v
              koraku 3, če da dodamo znak #.</li>
                    <li><strong>langID</strong> - aplikacija je večjezična, s tem atributom nastavimo jezik. Privzeto "slv".
            </li>
                    <li><strong>defOrgID</strong> - privzeto izbran vir iskanja oz.
                      organizacija. Privzeto prazen niz, kar išče po celotni digitalni
                      knjižnici. Vnesti je potrebno ID, nabor ID-jev lahko dobimo v izvorni
              HTML kodi iskalnika.</li>
                </ul>
                <p>6. Testiramo aplikacijo. Če se aplikacija ne naloži, v spletni konzoli brskalnika preverimo morebitne
            izpise napak.</p>
                <p>&nbsp;</p>
                <h3>Uporaba API-ja</h3>
                <p>Če navedena JavaScript aplikacija ni ustrezna, lahko implementirate
                  lastno rešitev z uporabo istih funkcij za dostop do podatkov. Te
            funkcije so dokumentirane posebej in zajemajo:</p>
                <ul>
                    <li><a href="https://dk.um.si/pomoc.php?id=webapi#getSearch">getSearch</a> - enostavno iskanje</li>
                    <li><a href="https://dk.um.si/pomoc.php?id=webapi#getAdvancedSearch">getAdvancedSearch</a> - napredno
              iskanje</li>
                    <li><a href="https://dk.um.si/pomoc.php?id=webapi#getBrowse">getBrowse</a> - brskanje po kategorijah</li>
                    <li><a href="https://dk.um.si/pomoc.php?id=webapi#getDocument">getDocument</a> - osnovni izpis gradiva</li>
                </ul>
  </Layout>
)

export default IndexPage
