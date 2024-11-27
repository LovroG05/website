<script setup lang="ts">
import ContactsComponent from '../components/ContactsComponent.vue';
import ProjectComponent from '../components/ProjectComponent.vue';
</script>

<template>
  <main>
    <p>
          Pozdravljen/a! Sem študent FERIja, v prostem času
          pa se med drugim ukvarjam z razvijanjem programske opreme. To počnem že od
          svojega 12. leta.
          <br />
          Skupaj z ekipo
          <a href="https://vegovasat.si">VegaSat</a> sem v 2023 sodeloval na tekmovanju
          CanSat Evropske vesoljske agencije, nekaj mojih ostalih projektov pa si lahko ogledate na mojem <a href="https://github.com/LovroG05">GitHubu.</a>

          <br />

          Veliko prostega časa zapravim z poslušanjem glasbe, po Spotifyevih
          podatkih največ poslušam Pink Floyde, drugačne pa važno da je rock n' roll!
      </p>
      <hr>
      <ContactsComponent></ContactsComponent>
      <hr>
      <ProjectComponent
        ime="Šah"
        icon="/icons8-chess-128.png"
        opis="Zaledni strežnik za preverjanje pravil pri šahu, napisan kot seminarska naloga. Uporabniški vmesnik je LovroG05/chessboard-seminarska."
        url="https://github.com/LovroG05/chess-seminarska" />
      <ProjectComponent
        ime="Hamlog"
        icon="/hamlog.png"
        opis="Informacijski sistem radioamaterskega dnevnika zvez, napisan za maturitetno nalogo pri računalništvu. Uporabniški vmesnik je napisan v ogrodju Flutter, zaledni strežnik pa v Spring boot-u."
        url="https://github.com/LovroG05/hamlog" />
      <ProjectComponent
        ime="VegaSat"
        icon="https://cansat.esa.int/wp-content/uploads/2023/08/ESA_Edu_Cansat_RGB-300x300.png"
        opis="Skupaj z ekipo prijateljev sem sodeloval v tekmovanju CanSat, ki ga organizira Evropska vesoljska agencija.
              Namen tekmovanja je, da skupaj z ekipo sestavimo sondo v velikosti pločevinke Coca-Cole, ki opravlja določeno
              misijo. Sonda ekipe naše ekipe je imela nalogo vodenega pristanka."
        url="https://cansat.si" />
      <ProjectComponent
        ime="Homelab"
        icon="https://avatars.githubusercontent.com/u/53482242?s=200&v=4"
        opis="Doma imam postavljen svoj 'Homelab', ki temelji na TrueNAS SCALE strežniku, v katerem uporabljam Docker. Gostujem storitve, kot so Nextcloud, Home Assistant in Crafty, ki so z javnostjo povezane skozi Nginx reverse proxy."
        url="https://homepage.govekar.net" />
      <hr>
      <div class="folk">
        <h2>Zanimivi ljudje</h2>
        <ul>
          <li>
            <a href="https://fortuna.wf/">Jurij Fortuna</a>
          </li>
          <li>
            <a href="https://gapi.me/">Gašper Dobrovoljc</a>
          </li>
          <li>
            <a href="https://golobii.com/">Luka Golob Cerar</a>
          </li>
          <li>
            <a href="https://babnik.io/">Matic Babnik</a>
          </li>
          <li>
            <a href="https://aikenahac.com/">Aiken <b>Tine</b> Ahac</a>
          </li>
          <li>
            <a href="https://www.zigakralj.com/"
              >Žiga Kralj (za prijatelje hlapec)</a
            >
          </li>
          <li>
            <a href="https://asavkovic.xyz/">Aleksandar Savković</a>
          </li>
        </ul>
      </div>
  </main>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.folk {
  text-align: center;
  width: 100%;
  margin:auto;
}

h2 {
  font-size: 26px;
  font-weight: bold;
  padding-bottom: 20px;
}

li a {
  font-size: 18px;
}
</style>
