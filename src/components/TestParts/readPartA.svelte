<script>  
 import {Page,BlockTitle,Block,BlockHeader,ListIndex,ListGroup,ListItem,Badge,List} from 'framework7-svelte';
 import {onMount} from 'svelte';
 
 function onIndexSelect(itemContent, itemIndex) {
    console.log(passageA);
  }
 export let data = {"Passage A" : {html : {para : ""}}, "Passage B" : {html : {para : ""}}, "Passage C" : {html : {para : ""}}, "Passage D" : {html : {para : ""}}, "Blanks" : {"1" : {para : ""}}}
$: sections = ["Passage A", "Passage B", "Passage C", "Passage D"].map(p => data[p].html.para)
$ : blanks = Object.entries(data["Blanks"]).filter(([key,value]) => !isNaN(key)).map(([key,value]) => value.para)
 let arr = Array.from(new Array(20)).map((x, i) => `Q${ i + 1}`)

</script>

<Page>
    <ListIndex
    indexes={arr}
    listEl=".indexlist"
    scrollList={true}
    label={true}
    onListIndexSelect={onIndexSelect} />
    
    {#each sections as section,i (i)}
    
    <Block inset strong>
       {@html section}
    </Block>
    
    {/each}
    
    
    
    
   <div class="indexlist">
     <List ul={false}>
     {#each blanks as blank,i (i)}
       <ListGroup>
         <ListItem title={`Q${i + 1}`} groupTitle><Badge color="teal">{`Q${i + 1}`}</Badge> </ListItem>
         <Block class="no-margin" strong>    
           <BlockTitle>{ i + 1}</BlockTitle>   
           <p>{blank}</p>
         </Block>
       </ListGroup>
     {/each}
     </List>
   </div>
</Page>

<style> 


</style>
