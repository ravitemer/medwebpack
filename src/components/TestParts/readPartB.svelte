   <script>  
   import {Page,BlockTitle,Block,BlockHeader,Checkbox} from 'framework7-svelte';
   export let data = {Questions : {"0" : {text : "",options : {0 : {text : "",to_do : {isChecked : false}}},desc : {html : {para : ""}}}}}
  $ : extracts = Object.entries(data["Questions"]).filter(([key,value]) => !isNaN(key)).map(([key,value]) => { 
       let desc = value.desc.html.para
       let options = Object.entries(value.options).filter(([key,value]) => !isNaN(key)).map(([key,value]) => value)
       let text = value.text
    return {desc,options,text}
  })
   </script>

<Page>
   {#each extracts as {desc,options,text},i (i)}
     <Block strong>
       <h3>{text}</h3>
       {#each options as {text,to_do},i (i)}
           <p>{text}</p>
       {/each}
      {@html desc}
     </Block>
   {/each}
</Page>