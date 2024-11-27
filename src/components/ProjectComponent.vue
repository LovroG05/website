<script setup lang="ts">
  defineProps({
    ime: {type: String, required: true},
    icon: {type: String, required: true},
    opis: {type: String, required: true},
    url: {type: String, required: true},
  })



</script>

<template>
  <div class="bg">
    <img :src="icon" />
    <div class="txt">
      <h3>{{ime}}</h3>
      <a :href=url target="_blank">Link</a>
      <hr>
      <p>{{opis}}</p>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-color: var(--color-bg-2);
  border-radius: 15px;
  padding: 15px;
  width: 75%;
  margin: auto;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}

.txt {
  display: flex;
  flex-direction: column;
  margin: 5px;
  text-align: left;
  width: 100%
}

img {
  width: 128px;
  height: 128px;
  margin:5px;
  border-radius: 10px;
}

a {
  padding: 0px;
}

p {
  margin: 0px;
  text-align: left;
}

hr {
  width: 25%;
  margin-left: 0px;
  color: var(--color-background);
  margin-top: 5px;
  margin-bottom: 5px;
}

h3 {
  font-size: 22px;
  font-weight: bold;

}

</style>
