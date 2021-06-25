<script>  
 import {Page,BlockTitle,Block,BlockHeader,ListIndex,ListGroup,ListItem,Badge,List} from 'framework7-svelte';
 import {onMount} from 'svelte';
 
export let desc;
export let data = {sections : [],blanks : []}

let arr = Array.from(new Array(20)).map((x, i) => `${ i + 1}`)

function onIndexSelect(itemContent, itemIndex) {
    //console.log(passageA);
  }
</script>

<Page>
    <ListIndex
      indexes={arr}
      listEl=".indexlist"
      scrollList={true}
      label={true}
      onListIndexSelect={onIndexSelect} />
    
    <Block>{@html desc}</Block>
    {#each data.sections as section,i (i)}
       <Block inset strong>
          {@html section}
       </Block>
    {/each}
   <div class="indexlist">
     <List ul={false}>
     {#each data.blanks as blank,i (i)}
       <ListGroup>
         <ListItem title={`${i + 1}`} groupTitle><Badge>{`Q${i + 1}`}</Badge> </ListItem>
         <Block class="no-margin" strong>    
           <BlockTitle>{ i + 1}</BlockTitle>   
           <p>{blank}</p>
         </Block>
       </ListGroup>
     {/each}
     </List>
   </div>
</Page>