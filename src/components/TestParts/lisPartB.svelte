<script>  
import {Block,BlockHeader,BlockTitle,List,ListIndex,Chip,ListGroup,ListItem,ListItemRow,ListItemCell,Toggle,Card,CardContent} from 'framework7-svelte';

export let mcqs = []

function onAnswer(e,mcq,op){
  let isAnswer = e.target.value
  let isSelected = e.target.checked
  console.log(mcq,op,isAnswer,isSelected)
}
function onIndexSelect(content,index){
  console.log(content,index)
}
</script>

{#each mcqs as {text,desc,options},mcq (mcq)}
  <div class="sticky"><Chip text={mcq + 25} color={"green"} class="margin-horizontal margin-bottom" ></Chip></div>
  <BlockHeader>{desc}</BlockHeader>
  <Card title={text}>
      <CardContent>
         <List>
           {#each options as {text,to_do},op (op)}
             <ListItem onChange={(e) => onAnswer(e,mcq,op)} checkbox value={to_do.checked}> {text}
               <!--span slot="after"><Toggle /></span-->
             </ListItem>
           {/each} 
         </List>
      </CardContent>
  </Card>
{/each}

<style> 
.sticky {
  position: -webkit-sticky; 
 
  position : sticky;
  top : 0;
  z-index : 1;
}


</style>
