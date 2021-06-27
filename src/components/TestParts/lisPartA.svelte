<script>  
import {BlockTitle,Block,BlockHeader} from 'framework7-svelte';

export let extract1
export let extract2
export let desc;
</script>
   

 <Block>{@html desc}</Block>
 <BlockTitle medium>Extract 1 : Q1-12</BlockTitle>
 <Block>
   <BlockHeader>{@html extract1.desc}</BlockHeader>
   {#each extract1.headings as [subheading,content],i (i)}
      <h3 class="text-color-teal">{subheading}</h3>
      <div style="font-size:1.3em">
     {@html content.para.replaceAll(/{[^{].*}/g, '<input  class="text-color-green" style=";border-radius:2px;border-bottom:1px solid gray;width:120px;padding:3px;display:inline" type="text"/>')}
      </div>
    {/each}
 </Block>
 <BlockTitle medium>Extract 2 : Q13-24</BlockTitle>
 <Block>
    <BlockHeader>{@html extract2.desc}</BlockHeader>
    {#each extract2.headings as [subheading,content],i (i)}
    
      <h3 class="text-color-teal">{subheading}</h3>
      <div style="font-size:1.3em">
      {@html content.para.replaceAll(/{[^{].*}/g, '<input  class="text-color-green" style="color:green;border-radius:2px;border-bottom:1px solid gray;width:120px;padding:3px;display:inline" type="text"/>')}
      </div>
    {/each}
</Block>
