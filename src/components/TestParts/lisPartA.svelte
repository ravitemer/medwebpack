<script>  
import {BlockTitle,Block,BlockHeader} from 'framework7-svelte';

export let extract1
export let extract2
export let desc;
</script>
   

 <Block>{@html desc}</Block>
 <BlockTitle medium>Extract 1 : Q1-12</BlockTitle>
 <Block>
   <BlockHeader>{extract1.desc}</BlockHeader>
   {#each extract1.headings as [subheading,content],i (i)}
      <h3 class="text-color-blue">{subheading}</h3>
      {@html content.para}
    {/each}
 </Block>
 <BlockTitle medium>Extract 2 : Q13-24</BlockTitle>
 <Block>
    <BlockHeader>{extract2.desc}</BlockHeader>
    {#each extract2.headings as [subheading,content],i (i)}
      <h3 class="text-color-blue">{subheading}</h3>
      {@html content.para}
    {/each}
</Block>
