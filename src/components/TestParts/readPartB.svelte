<script>  
import {Page,BlockTitle,Block,BlockHeader,Checkbox} from 'framework7-svelte';

export let desc;
export let data = []
</script>

<Page>
   <Block>{@html desc}</Block>
   {#each data as {passage,options,question},i (i)}
     <Block strong>
       <h3>{question}</h3>
       {#each options as {text,to_do},i (i)}
           <p>{text}</p>
       {/each}
      {@html passage}
     </Block>
   {/each}
</Page>