<script>
import {Block} from 'framework7-svelte';
let src = "https://www.countryflags.io/be/shiny/64.png";
</script>
<Block inset strong>

<h1> From Image</h1>
{#each [0,1,2,3] as num}
<img alt="img" {src}/>
{/each}

</Block>