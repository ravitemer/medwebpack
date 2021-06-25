<script>  
import {Block,BlockHeader,BlockTitle,List,ListIndex,Chip,ListGroup,ListItem,ListItemRow,ListItemCell,Toggle,Card,CardContent} from 'framework7-svelte';

export let mcqs = []
export let desc;

function onAnswer(e,mcq,op){
  let isAnswer = e.target.value
  let isSelected = e.target.checked
  console.log(mcq,op,isAnswer,isSelected)
}
</script>

<Block>{@html desc}</Block>
{#each mcqs as {text,desc,options},mcq (mcq)}
<BlockHeader>{desc}</BlockHeader>
<Card title={text}>
    <CardContent>
        <List>
           {#each options as {text,to_do},op (op)}
             <ListItem onChange={(e) => onAnswer(e,mcq,op)} checkbox value={to_do.checked}> {text}
             </ListItem>
           {/each} 
        </List>
     </CardContent>
</Card>
{/each}
