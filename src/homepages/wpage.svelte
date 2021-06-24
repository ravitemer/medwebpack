<Page ptr>
  <Main {...props}> 
   <!--h1 on:click={() => f7.sheet.open(".step")}>Writing Slot</h1-->
  </Main>

</Page>

<script>  
import {Page,f7} from 'framework7-svelte';

import Main from './homeCom.svelte';

export let f7router
export let f7route

let props = {
  title : "Writing",
  slideTitle : "Structure",
  tab : 2,
  f7router,f7route,
}

</script>
