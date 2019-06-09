import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"

const IndexPage = () => (
    <Layout>
        <p style="line-height: 15.8079996109009px;"></p>
        <p style="line-height: 15.8079996109009px;">Če želite oddati diplomsko, magistrsko ali doktorsko nalogo,
            se&nbsp;<a href="https://dk.um.si/prijava.php"
                style="padding: 1px 2px; background-color: #dedede;">prijavite</a>&nbsp;v
          DKUM. Prijava poteka preko avtentikacijskega sistema ArnesAAI, za
          prijavo vpišite podatke vaše digitalne identitete UM, podobno kot za
          prijavo v AIPS. Po prijavi kliknite na "Oddaja zaključnega dela za
            študente" in sledite navodilom na strani.</p>
        <p style="line-height: 15.8079996109009px;"><span style="line-height: 1.3em;">V DKUM je potrebno oddati
              zaključno delo v eni datoteki formata PDF.&nbsp;</span><span
                style="line-height: 15.8079996109009px;">Navodila
                za pretvorbo v PDF in navodila za oddajo zaključnega dela so dosegljiva
                v prilogah spodaj. Dodatna navodila so dosegljiva v DKUM bodisi na
                vsaki strani oddaje oz. preko vgrajene pomoči, ki jo odprete s klikom na
              ikono&nbsp;<img src="DKUM%20-%20Oddaja%20dela_files/vprasaj.gif" alt="Pomoč" width="16"
                    height="16" />.&nbsp;</span><span style="line-height: 1.3em;">V primeru težav z uporabo digitalne
              knjižnice najprej preberite&nbsp;</span><a href="https://dk.um.si/info/index.php/slo/faq"
                style="padding: 1px 2px; background-color: #dedede;">pogosto zastavljena vprašanja</a><span
                    style="line-height: 1.3em;">. Če odgovora tam ne najdete, pišite na&nbsp;</span><a
                        href="mailto:dkum@um.si?subject=[DKUM Student] - Te%C5%BEava"
                        style="padding: 1px 2px; background-color: #dedede;">dkum@um.si</a>
            <span style="line-height: 1.3em;">. V
            sporočilu obvezno navedite ID študenta (ne vpisne številke).
              </span>
        </p>
        <p><strong>Pozor:</strong> po zaključku študija (po uspešnem zagovoru) mora študent v roku <strong>30
              dni</strong> v DKUM oddati končno verzijo zaključnega dela. <strong>Po tem roku oddaja dela za študente ni
              več možna.</strong> V takem primeru upoštevajte navodila referata vaše fakultete.<br /><br /></p>
        <p style="font-weight: bold;">Priloge:</p>
        <p><img src="../img/html.gif" width="16" height="16" /> <a
            href="http://libguides.ukm.um.si/dkum" target="_blank">Vodič oddaje zaključnega dela</a><br /><img
                src="DKUM%20-%20Oddaja%20dela_files/pdf.gif" width="16" height="16" /> <a
                    href="https://dk.um.si/info/images/docs/Navodila.za.pretvorbo.MS.Word.dokumentov.v.PDF.pdf"
                    target="_blank">Navodila za pretvorbo MS Word dokumentov v PDF</a><br /><img
                src="DKUM%20-%20Oddaja%20dela_files/doc.gif" width="16" height="16" /> <a
                    href="https://dk.um.si/doc/izjave/izjava.o.avtorstvu.in.istovetnosti_170105.docx" target="_blank">Prazna
              izjava o istovetnosti - dodiplomski študij / 1. stopnja</a><br /><img
                src="DKUM%20-%20Oddaja%20dela_files/doc.gif" width="16" height="16" /> <a
                    href="https://dk.um.si/doc/izjave/izjava.o.avtorstvu.in.istovetnosti_170105.docx" target="_blank">Prazna
              izjava o istovetnosti - magistrski študij / 2. stopnja</a><br /><img
                src="DKUM%20-%20Oddaja%20dela_files/doc.gif" width="16" height="16" /> <a
                    href="https://dk.um.si/doc/izjave/izjava.o.avtorstvu.in.istovetnosti_dr_180524.docx"
                    target="_blank">Prazna izjava o istovetnosti - doktorski študij / 3. stopnja</a></p>
    </Layout>
)

export default IndexPage
