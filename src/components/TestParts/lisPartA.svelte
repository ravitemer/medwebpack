   <BlockTitle medium>Audio 1 : 1-12</BlockTitle>
      <Block>
    <BlockHeader>{con1.desc}</BlockHeader>
    {#each con1.headings as [key,value],i (i)}
      <h3 class="text-color-blue">{key}</h3>
      {@html `<p>${value.para}</p>`}
    {/each}
   </Block>
      <BlockTitle medium>Audio 2 : 13-24</BlockTitle>
      <Block>
    <BlockHeader>{con2.desc}</BlockHeader>
    {#each con2.headings as [key,value],i (i)}
      <h3 class="text-color-blue">{key}</h3>
      {@html `<p>${value.para}</p>`}
    {/each}
   </Block>
   <script>  
   import {BlockTitle,Block,BlockHeader} from 'framework7-svelte';
   export let con1
   export let con2
   </script>
   