# Verkefni 6

Verkefni 6 snýst um að setja upp Next.js vef sem [nýtir vefþjónustu úr verkefni 4](https://github.com/vefforritun/vef2-2019-v4-synilausn) til að birta verkefnalista.

## Verkefnið keyrandi á vefnum
Hér er hægt að skoða verkefnið mitt, það tekur smá stund fyrir verkefnið að byrja að keyra eftir að þið opnið linkinn

* https://bjorgvin-v6.herokuapp.com/ 


## Virkni

Birta skal á forsíðu öll verkefni frá vefþjónustu. Hægt er að merkja hvert verkefni sem klárað eða ekki á forsíðu. Fyrir ofan lista er takki sem breytir því hvort kláruð verkefni séu sýnd eða ekki (kall í `/?completed=true`). Ef smellt er á titil verkefnis er opnuð síða fyrir það verkefni eftir `id` á `/:id`. Ef verkefni hefur dagsetningu sem klára ætti fyrir er hún birt við hliðina. Breyting var gerð á virkni í vefþjónustu þ.a. ekki er raðað eftir `position` heldur `created`.

Fyrir neðan verkefnalista er form sem leyfir að bæta við verkefni á verkefnalista, með titli og hugsanlega dagsetningu sem klára ætti fyrir. Validation á að meðhöndla gegnum vefþjónustu.

Á síðu fyrir verkefni er hægt að uppfæra titil og dagsetningu sem klára ætti fyrir ásamt því að birta dags búið til og dags seinast uppfært. Einnig á að vera hægt að eyða verkefni, eftir að það tekst eru birt skilaboð um það ásamt hlekk til baka á forsíðu.

Dagsetningar þarf ekki að forma sérstaklega.

Meðan kallað er í vefþjónustur þarf að sýna loading state. Ef villa kemur upp skal sýna villu state.

## Útlit

Gefið er útlit í `utlit/` ásamt CSS fyrir layout og componenta. Setja þarf upp CSS fyrir next til að það virki. Ekki er krafa um að nota CSS (þ.e.a.s. nota má Sass eða álika) og leyfilegt er að skrifa sitt eigið.

## Útfærsla

Nota skal `isomorphic-fetch` til að geta notað `fetch` bæði á client og server. Slóð á API skal setja í config gegnum `env` og `next.config.js`.

Gögn skal server rendera, bæði fyrir forsíðu og hvert verkefni, þ.e.a.s. þegar skoðað er source á síðu skulu upprunaleg gögn (áður en nokkrar breytingar voru gerðar á síðu) vera þar.

Í þróun getur verið gott að setja upp vefþjónustu upp og keyra á localhost. Þá er sýnilausn fyrir verkefni 4 notuð, eða ykkar eigin lausn. Hún keyrð í öðru terminal á sér porti og forrit stillt á að nota það port. T.d. keyrir vefur á `http://localhost:3000` en vefþjónusta á `http://localhost:5000`.

## Git og GitHub

Verkefni þetta er sett fyrir á GitHub og almennt ætti að skila því úr einka (private) repo nemanda. Nemendur geta fengið gjaldfrjálsan aðgang að einkarepos á meðan námi stendur, sjá https://education.github.com/.

Til að byrja er hægt að afrita þetta repo og bæta við á sínu eigin:

```bash
> git clone https://github.com/vefforritun/vef2-2019-v6.git
> cd vef2-2019-v6
> git remote remove origin # fjarlægja remote sem verkefni er í
> git remote add origin <slóð á repo> # bæta við í þínu repo
> git push -u origin master # ýta á nýtt origin og tracka branch
```

## Mat

* 50% – Forsíða með verkefnalista sem hægt er að filtera
* 40% – Síða fyrir stakt verkefni þar sem hægt er að breyta og eyða
* 10% – Verkefni uppsett á Heroku

## Sett fyrir

Verkefni sett fyrir í fyrirlestri fimmtudaginn 21. mars 2019.

## Skil

Skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags föstudaginn 5. apríl 2019.

Skilaboð skulu innihalda:

* Slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo (sjá leiðbeiningar). Notendanöfn þeirra eru `freyrdanielsson`, `gunkol`, `kth130`
* Slóð á verkefni keyrandi á Heroku

## Einkunn

Sett verða fyrir sex minni verkefni þar sem fimm bestu gilda 6% hvert, samtals 30% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 15%, samtals 30% af lokaeinkunn.

Verkefnahluti gildir 60% og lokapróf gildir 40%. Ná verður *bæði* verkefnahluta og lokaprófi með lágmarkseinkunn 5.

---

> Útgáfa 0.1

| Útgáfa | Lýsing                            |
|--------|-----------------------------------|
| 0.1    | Fyrsta útgáfa                     |
