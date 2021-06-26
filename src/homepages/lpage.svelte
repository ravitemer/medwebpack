<Page ptr>

  <Main  {...props}>
   <Block><h1 on:click={() => f7.sheet.open(".step")}>Listening Slot</h1></Block>
  </Main>

</Page>

<script>  
import {Page,Block,f7} from 'framework7-svelte'; 
//👉🏻👉🏻👉🏻👉🏻
import {onMount} from 'svelte';
import {request} from 'framework7';
import {ltests,tabs} from '../js/store.js';

import Main from './homeCom.svelte';

export let f7router
export let f7route
let props = {
  title : "Listening",
  slideTitle : "Listening",
  tab : 0,
  f7router,f7route,
}
onMount(async () => {

  //let data = (await request.json("https://untitled-6u5g49yuwqup.runkit.sh/tabs")).data

  if (true){
  let appdata = (await request.json("https://aceoetexam-default-rtdb.firebaseio.com/appdata.json")).data
  //tabs.set(data)
  //console.log("##
  tabs.set(appdata)
  console.log("## Loaded Appdata  from firebase: Data stored to tabs")
  //console.log($tabs)
  }
})

</script>
