<script>  
import {Page,Navbar} from 'framework7-svelte';
import Card from "../components/card.svelte";

</script>
<Page>
<Navbar title="Reading"/>
<div class="hor">
<Card/>

<Card/>

<Card/>

</div>
</Page>


<style> 
.hor {

  background : white;
  width : 100%;
  height : 300px;
}
</style>
