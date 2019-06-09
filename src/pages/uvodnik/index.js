import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"

const IndexPage = () => (
    <Layout>
        <p>
            Digitalna knjižnica Univerze v Mariboru (DKUM) je
            institucionalni repozitorij Univerze v Mariboru. Podpira odprti dostop
            do znanstvenoraziskovalnih, strokovnih in drugih del in raziskovalnih
            podatkov, ki nastajajo na univerzi v procesih raziskovanja in
            izobraževanja.</p>
        <p>
            Objava del v DKUM krepi družbeno odgovornost, izmenjavo znanstvenih
            informacij, povečuje vpliv raziskovalnih rezultatov znanstvenikov in
            ugled univerze. DKUM tudi omogoča izpolnjevanje zahtev financerjev
            raziskav glede odprte dostopnosti vseh recenziranih objav in
            raziskovalnih podatkov sofinanciranih iz javnih sredstev. Evropska
            komisija je za naslednji okvirni program za sofinanciranje raziskovalne
            dejavnosti in inoviranja, poimenovan Obzorje 2020, določila, da bo
            obvezna odprta dostopnost vseh recenziranih objav iz sofinanciranih
            projektov.</p>
        <p>
            DKUM vsebuje dela vseh članic Univerze v Mariboru. Zraven diplomskih,
            magistrskih, doktorskih in drugih del študentov vključujemo tudi
            recenzirane objave iz sofinanciranih projektov, elektronske visokošolske
            učbenike in učna gradiva ter druga dela, katerih avtorji so sodelavci
                Univerze v Mariboru ali je Univerza v Mariboru njih založnik.</p>
        <p>
            <Link to="/slo/pogoji-uporabe">Pogoji uporabe</Link>
        </p>
    </Layout>
)

export default IndexPage