<script>  
import {BlockTitle,Block} from 'framework7-svelte';
import PartB from "./lisPartB.svelte"

export let partC1mcqs;
export let partC2mcqs;
export let desc;
</script>

<Block>{@html desc}</Block>
<BlockTitle>Audio 1 : 31-36</BlockTitle>
<PartB mcqs={partC1mcqs} />


<BlockTitle>Audio 2 : 37-42</BlockTitle>
<PartB mcqs={partC2mcqs} />