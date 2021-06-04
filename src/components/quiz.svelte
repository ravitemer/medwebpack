<script>  
import {Block,BlockHeader,Sheet,PageContent,BlockTitle,Button,BlockFooter,List,ListItem,Progressbar,f7} from "framework7-svelte";
export let options= [{text :"Advise", Ans : false},
                        {text :"Advice", Ans : true},


]
export let footer = "Advice vs Advise"
let isClicked = false
export let question = "She was given ......... to adhere to her medication."

</script>


  <Block strong inset>
    <BlockHeader><p style="color:white;font-size:16px;">{question}</p></BlockHeader>
    <List simpleList>
    {#each options as option,i (i)}
      <ListItem onClick={() => isClicked = true} noChevron>
      <code class:text-color-green={isClicked && option.Ans} class:text-color-red={isClicked && !option.Ans}>{option.text}</code>
      
      </ListItem>
   
    {/each}
    </List>
    <BlockFooter>{footer}</BlockFooter>
  </Block> 

  <style> 
  </style>
  