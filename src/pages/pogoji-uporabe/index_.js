import React from "react"
import Layout from "../../components/Layout"

const IndexPage = () => (
  <Layout>     
            <div className="moz-text-html" lang="x-central-euro">
            <h2>Pogoji uporabe metapodatkov</h2>
            za podatke, ki opisujejo zapise v repozitoriju
            <ol>
              <li>Dostop do vseh ali nekaterih metapodatkov je nadzorovan.</li>
              <li>Metapodatke se lahko ponovno uporabi v poljubnem mediju brez predhodnega dovoljenja za neprofitne
                namene pod pogojem, da:
                <ul>
                  <li>je podan OAI identifikator ali URL povezava do izvornega metapodatkovnega zapisa</li>
                  <li>je omenjena DKUM (Digitalna knjižnica Univerza v Mariboru)</li>
                </ul>
              </li>
            </ol>
            <h2>Pogoji uporabe podatkov</h2>
            za zapise s polnim besedilom ali druge oblike polne vsebine
            <ol>
              <li>Dostop do vseh ali nekaterih zapisov je nadzorovan.</li>
              <li>Kopijo zapisa v polni obliki se lahko uporabi za:
                <ul>
                  <li>prikaz ali izvedbo v poljubnem formatu ali mediju</li>
                  <li>za osebno študijo ali raziskavo, za izobraževalne in neprofitne namene brez predhodnega dovoljenja
                    ali plačila pod pogojem, da:
                    <ul>
                      <li>so navedeni avtorji, naslov in polni bibliografski podatki</li>
                      <li>je naveden URL naslov in/ali povezava do izvorne spletne strani metapodatkovnega zapisa</li>
                      <li>je navedena izvirna izjava o avtorskih pravicah</li>
                      <li>je navedena izvirna izjava z dovoljenji za uporabo</li>
                      <li>polna vsebina ni spremenjena na noben način</li>
                    </ul>
                  </li>
                  <li>Polne vsebine se ne sme zbirati s pomočjo robotov, razen prehodno za
                    indeksiranje polnega besedila za potrebe iskanja ali analize
                    citiranosti</li>
                  <li>Polne vsebine se ne sme komercialno prodajati v nobenem formatu ali
                    mediju brez predhodnega dovoljenja od nosilca avtorskih pravic.</li>
                  <li>Nekatere polne vsebine so označene z različnimi dovoljenji za uporabo in pogoji uporabe.</li>
                </ul>
              </li>
            </ol>
            <h2>Pogoji uporabe vsebin</h2>
            za različne tipe dokumentov in zbirk v repozitoriju
            <ol>
              <li>To je institucionarni repozitorij.</li>
              <li>DKUM (Digitalna knjižnica Univerze v Mariboru) zajema vse tipe gradiv.</li>
              <li>Oddana gradiva lahko zajemajo:
                <ul>
                  <li>oddane različice (kot poslane revijam v recenzijo)</li>
                  <li>sprejete različice (avtorjev končni recenziran osnutek)</li>
                  <li>objavljene različice (datoteke, izdelane pri založniku)</li>
                </ul>
              </li>
              <li>Zapisi so individualno označeni z:
                <ul>
                  <li>tipom verzije in datumom.</li>
                  <li>statusom recenzije.</li>
                  <li>statusom objave.</li>
                </ul>
              </li>
              <li>Glavni jeziki: slovenščina, angleščina, nemščina, hrvaščina</li>
            </ol>
            <h2>Pogoji oddaje zapisov</h2>
            glede deponentov zapisov, kvalitete in avtorskih pravic
            <ol>
              <li>Zapise lahko oddajo samo akreditirani člani, akademsko osebje, registrirani študentje in zaposleni na
                instituciji.</li>
              <li>Avtorji lahko oddajo samo lastna dela za arhiviranje.</li>
              <li>Upravičeni deponenti morajo navesti bibliografske metapodatke vseh svojih publikacij.</li>
              <li>Upravičeni deponenti morajo deponirati polno besedilo vseh svojih
                publikacij, a lahko zahtevajo zakasnjeno javno objavo zapisa za potrebe
                uveljavljanja embarga založnika.</li>
              <li>Knjižničarji inštitucij, ki so vključene v DKUM, so zadolženi za
                preverjanje bibliografskih enot, ki jih vnesejo avtorji. Knjižničarji
                preverijo avtorstvo, upravičenost vnosa, vnesene dokumente, avtorske
                pravice in primernost publikacij za objavo. Po končanem preverjanju delo
                katalogizirajo v COBISS-u.</li>
              <li>Veljavnost in avtentičnost deponiranih zapisov preverjajo interni specialisti za določeno tematiko.
              </li>
              <li>Zapise se lahko deponira kadarkoli, a niso javno objavljeni do poteka vseh embargov založnika.</li>
              <li>Za kakršnekoli kršitve avtorskih pravic odgovarjajo izključno avtorji oz. deponenti.</li>
              <li>Če DKUM (Digitalna knjižnica Univerza v Mariboru) prejme dokazi o kršitvi avtorskih pravic, se
                relevanten zapis nemudoma umakne.</li>
            </ol>
            <h2>Pogoji ohranitve zapisov</h2>
            <ol>
              <li>Zapise se ohrani vsaj 20 let od datuma deponiranja.</li>
              <li>DKUM (Digitalna knjižnica Univerza v Mariboru) redno izvaja
                varnostno kopiranje podatkov v skladu z trenutno znanimi dobrimi
                praksami.</li>
              <li>Izvorne datoteke se ohranja za vse zapise, vključno z nadgrajenimi formati.</li>
              <li>Zapis se lahko umakne na zahtevo avtorja ali nosilca avtorskih pravic, a se to ne priporoča.</li>
              <li>Med upravičenimi razlogi za umik zapisa so:
                <ul>
                  <li>pravila založnika</li>
                  <li>dokazana kršitev avtorskih pravic ali plagiatorstvo</li>
                  <li>pravne zahteve in dokazane kršitve</li>
                  <li>nacionalna varnost</li>
                  <li>ponarejene raziskave</li>
                </ul>
              </li>
              <li>Umaknjene zapise se zbriše v celoti iz podatkovne baze.</li>
              <li>Identifikatorjev in URL naslovov umaknjenih del se ne ohranja.</li>
              <li>Novejšo različico zapisa se lahko deponira, če to potrebno.
                <ul>
                  <li>Predhodno različico se ob objavi novejše različice umakne iz javne objave</li>
                </ul>
              </li>
              <li>V primeru ukinitve oz. zaprtja DKUM (Digitalne knjižnice Univerze v Mariboru) se podatkovno bazo
                prenese na drug primeren arhiv.</li>
            </ol>
          </div>
  </Layout>
)

export default IndexPage
