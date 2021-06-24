<Page ptr>
  <Main {...props}> 
   <!--Block>h1 on:click={() => f7.sheet.open(".step")}>Writing Slot</h1</Block-->
  </Main>

  
</Page>

<script>  
import {Page,f7,Block,Sheet,PageContent,BlockTitle} from 'framework7-svelte';

import Main from './homeCom.svelte';

export let f7router
export let f7route

let props = {
  title : "Speaking",
  slideTitle : "Structure",
  tab : 3,
  f7router,f7route,
}

</script>



