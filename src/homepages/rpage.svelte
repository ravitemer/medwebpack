<Page ptr>

  <Main {...props}>
   <h1 on:click={() => f7.sheet.open(".step")}>Reading Slot</h1>
  </Main>

</Page>

<script>  
import {Page,f7} from 'framework7-svelte';

import Main from './homeCom.svelte';

export let f7router
export let f7route

let props = {
  title : "Reading",
  slideTitle : "Reading",
  index : 1,
  f7router,f7route,
}

</script>
