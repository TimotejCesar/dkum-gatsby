import React from "react"
import Layout from "../../../components/Layout"

const IndexPage = () => (
  <Layout>
          {/* <p></p>
          <div id="accordion1"
            class="accordionfaq lightnessfaq headerbackground headerborder contentbackground contentborder round5 faq-accordion selected"
            style="display: block; clear: both;">
            <h3 class="accordionfaqheader accordion1 selected" id="accordion10"><span
                class="accordionfaqicon"></span><span class="autonumber">1.</span><span class="headertext"><a
                  href="https://dk.um.si/info/index.php/slo/faq#faqnoanchor">Pozabil/a sem geslo za prijavo v
                  AIPS.</a></span></h3>
            <div class="accordionfaqitem">
              <p>V DKUM se prijavite z&nbsp;<a
                  href="http://rcum.um.si/programska-oprema/studenti/Strani/Upravljanje-identitet.aspx">digitalno
                  identiteto UM</a>, sledite navodilom na omenjeni povezavi.</p>
            </div>
            <h3 class="accordionfaqheader accordion1" id="accordion11"><span class="accordionfaqicon"></span><span
                class="autonumber">2.</span><span class="headertext"><a
                  href="https://dk.um.si/info/index.php/slo/faq#faqnoanchor">Kako pridobim UDK za svoje zaključno
                  delo?</a></span></h3>
            <div class="accordionfaqitem" style="display: none;">
              <p>UDK dobite samo v knjižnici vaše fakultete. Na spletnih straneh vaše
                fakultete oz. knjižnice preverite, kdaj so uradne ure in katere podatke
                je potrebno dostaviti za dodelitev UDK vrstilca.</p>
            </div>
            <h3 style="line-height: 15.8079996109009px;" class="accordionfaqheader accordion1" id="accordion12"><span
                class="accordionfaqicon"></span><span class="autonumber">3.</span><span class="headertext"><a
                  href="https://dk.um.si/info/index.php/slo/faq#faqnoanchor">Kje so navodila za oddaje zaključnega
                  dela?</a></span></h3>
            <div class="accordionfaqitem" style="display: none;">
              <p style="line-height: 15.8079996109009px;">Navodila so vgrajena v DKUM. Poleg napotkov na samih straneh
                za oddajo je na večini strani dosegljiva ikona&nbsp;<img src="DKUM%20-%20FAQ_files/vprasaj.gif"
                  alt="Pomoč" style="vertical-align: text-bottom;" width="16" height="16"/>,
                ki v novem oknu odpre besedilo s pomočjo. Ikona je skrajno desno od
                glavnega naslova strani ali pri drugih elementih na strani. Pomoč se
                odpre v pojavnem oknu (angl. "pop-up"), kar nekateri brskalniki ali
                dodatna programska oprema blokirajo. Za domeno DKUM poskrbite, da se
                takšna okna lahko odprejo.</p>
            </div>
            <h3 style="line-height: 15.8079996109009px;" class="accordionfaqheader accordion1" id="accordion13"><span
                class="accordionfaqicon"></span><span class="autonumber">4.</span><span class="headertext"><a
                  href="https://dk.um.si/info/index.php/slo/faq#faqnoanchor">Moje zaključno delo še vedno ni objavljeno.
                  Je kaj narobe?</a></span></h3>
            <div class="accordionfaqitem" style="display: none;">
              <p style="line-height: 15.8079996109009px;">Po oddaji zaključnega dela v
                DKUM morate le-to oddati tudi v tiskani obliki. Tiskano obliko oddate
                na referatu vaše fakultete skupaj z vsemi potrebnimi obrazci. Ob oddaji
                tiskane verzije se zaključno delo zaklene. Preden se delo objavi, se ga
                obdela v referatu, nato pa še v knjižnici fakultete. Oboje lahko traja
                nekaj časa, še posebej v jesenskih mesecih, ko je produkcija zaključnih
                del največja. Do objave vašega dela v DKUM lahko preteče tudi več
                mesecev.</p>
            </div>
            <h3 style="line-height: 15.8079996109009px;" class="accordionfaqheader accordion1" id="accordion14"><span
                class="accordionfaqicon"></span><span class="autonumber">5.</span><span class="headertext"><a
                  href="https://dk.um.si/info/index.php/slo/faq#faqnoanchor">Kako dosežem umik mojega zaključnega dela
                  iz DKUM?</a></span></h3>
            <div class="accordionfaqitem" style="display: none;">
              <p style="line-height: 15.8079996109009px;">Trajen umik zaključnega dela
                ni mogoč. Dosežete lahko začasen umik, kar lahko zahteva podjetje
                zaradi zagotavljanja konkurenčne prednosti, varstva industrijske
                lastnine ali tajnosti podatkov naročnika. Začasen umik je mogoč za
                največ 3 leta. Glede umika se pozanimajte na referatu vaše fakultete. Od
                1.10.2011 dalje to ureja nova izjava o istovetnosti, ki jo študentje
                dobijo ob oddaji zaključnega dela v DKUM.</p>
            </div>
            <h3 style="line-height: 15.8079996109009px;" class="accordionfaqheader accordion1" id="accordion15"><span
                class="accordionfaqicon"></span><span class="autonumber">6.</span><span class="headertext"><a
                  href="https://dk.um.si/info/index.php/slo/faq#faqnoanchor">V moji oddani datoteki zaključnega dela je
                  napaka. Datoteko želim zamenjati, vendar je urejanje zapisa v DKUM onemogočeno.</a></span></h3>
            <div class="accordionfaqitem" style="display: none;">
              <p style="line-height: 15.8079996109009px;">Če zaključno delo še ni
                objavljeno, potem se oglasite v referatu fakultete, da se zaključno delo
                začasno odklene. Če je zaključno delo že objavljeno ali je od zagovora
                preteklo več kot 30 dni, potem popravki niso več možni.</p>
            </div>
            <h3 style="line-height: 15.8079996109009px;" class="accordionfaqheader accordion1" id="accordion16"><span
                class="accordionfaqicon"></span><span class="autonumber">7.</span><span class="headertext"><a
                  href="https://dk.um.si/info/index.php/slo/faq#faqnoanchor">Kako dolgo traja izdelava poročila
                  detektorja podobnih vsebin?</a></span></h3>
            <div class="accordionfaqitem" style="display: none;">
              <p style="line-height: 15.8079996109009px;">Izdelava poročila lahko
                traja nekaj minut. Čas izdelave je med drugim odvisen tudi od velikosti
                datoteke in trenutne zasedenosti detektorja. Status izdelave poročila
                preverite na strani, kjer ste poročilo zahtevali. Po izdelavi vi in
                mentor prejmeta obvestilo po e-pošti. Če poročilo ni izdelano v treh
                urah, potem je verjetno prišlo do napake, zato problem javite na podporo
                DKUM.</p>
            </div>
            <h3 style="line-height: 15.8079996109009px;" class="accordionfaqheader accordion1" id="accordion17"><span
                class="accordionfaqicon"></span><span class="autonumber">8.</span><span class="headertext"><a
                  href="https://dk.um.si/info/index.php/slo/faq#faqnoanchor">Povezava za ogled poročila detektorja
                  podobnih vsebin izpiše, da poročilo ni več dosegljivo!</a></span></h3>
            <div class="accordionfaqitem" style="display: none;">
              <p style="line-height: 15.8079996109009px;">Če po izdelavi poročila
                zamenjate ali zbrišete oddano datoteko PDF, potem obstoječe poročilo ni
                več veljavno in se samodejno zbriše. Če ste oddali novo datoteko, potem
                ponovno sprožite izdelano poročila. Poročilo se zbriše tudi po objavi
                zaključenga dela.</p>
            </div>
            <h3 class="accordionfaqheader accordion1" id="accordion18"><span class="accordionfaqicon"></span><span
                class="autonumber">9.</span><span class="headertext"><a
                  href="https://dk.um.si/info/index.php/slo/faq#faqnoanchor">Detektor podobnih vsebin izpisuje odstotke
                  podobnosti. Za katere odstotke se smatra, da je delo plagiat?</a></span></h3>
            <div class="accordionfaqitem" style="display: none;">
              <p>Takšen odstotek ne obstaja. Odstotek pove samo, koliko besedila
                nekega dela je podobnega z besedilom drugega dela. Poglejmo si nekaj
                primerov, zakaj takšnega odstotka ni mogoče določiti:</p>
              <ul>
                <li>recimo, da imamo dokument, ki ima 10% podobnost z drugim. Če naš
                  dokument zajema 20 strani, potem sta podobni največ dve strani. Če naš
                  dokument zajema 200 strani, potem je podobnih kar 20 strani. V drugem
                  primeru je precej bolj verjetno, da bi lahko šlo za plagiat kot v prvem
                  primeru, čeprav je odstotek enak;</li>
                <li>recimo, da naše delo zajema 100 strani popolnoma izvirnega besedila, v katerem izjavimo, da je
                  slavna enačba E=mc<sup>2</sup>
                  naše delo. Odstotek podobnosti je skoraj 0%, ampak gre za krajo ideje,
                  kar je plagiat. Na drugi strani lahko imamo delo npr. s področja prava,
                  kjer komentiramo določen zakon. Dokument je lahko 50% podoben, a ne gre
                  za plagiat (če je pravilno citiran);</li>
                <li>pomembno je tudi, kako so podobnosti porazdeljene. Delo z 10%
                  podrobnostjo lahko ima to podobnost v nekaj nepovezanih povedih, ki so
                  na različnih lokacijah v dokumentu ali pa gre za en sam odsek besedila
                  na eni lokaciji. V drugem primeru je večja verjetnost za plagiat (ali
                  manjkajoči citat), čeprav je odstotek enak.</li>
              </ul>
              <p>Odstotek podobnosti je le vrednost, namenjena urejanju seznama
                podobnih del po podobnosti, da so najbolj podobna dela na vrhu seznama.
                Presoja, ali gre za plagiat ali ne, je še vedno na strani ljudi, npr.
                študenta in mentorja. Detektor zato omogoča interaktivni vpogled v
                poročilo, kjer lahko za najbolj podobne dokumente hitro in enostavno
                preverite, katere so podobne vsebine in kako so porazdeljene. Na podlagi
                tega se lahko odločite, ali gre morda za naključne podobnosti,
                manjkajoči citat ali pa gre za besedilo, zaradi katerega bi lahko prišlo
                do obtožb o plagiatorstvu.</p>
            </div>
            <h3 style="line-height: 15.8079996109009px;" class="accordionfaqheader accordion1" id="accordion19"><span
                class="accordionfaqicon"></span><span class="autonumber">10.</span><span class="headertext"><a
                  href="https://dk.um.si/info/index.php/slo/faq#faqnoanchor">Na DKUM-ov naslov e-pošte sem poslal/a
                  vprašanje, kako hitro lahko pričakujem odziv?</a></span></h3>
            <div class="accordionfaqitem" style="display: none;">
              <p style="line-height: 15.8079996109009px;">Na e-pošto se odgovarja v času delovnih dni med 8. in 14. uro.
                Med vikendi in prazniki se na e-pošto ne odgovarja.</p>
            </div>
          </div>
          <p></p> */}
  </Layout>
)

export default IndexPage
