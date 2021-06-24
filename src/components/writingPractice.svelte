 <BlockTitle class="margin-top" medium>Practice</BlockTitle>

  <List class="no-margin-top" accordionList accordionOpposite inset>
  {#each letters as {title,children},i (i)}
   <ListItem accordionItem badge={children.length} badgeColor="teal" title={title}>
      <AccordionContent>
        <List inset>
        {#each children as {testNum,href},i (i)}
          <ListItem {href} title={`Test ${i + 1}`}/>
        {/each}
        </List>
      </AccordionContent>
    </ListItem>
  {/each}
  </List>

<script>  
import {List,ListItem,AccordionContent,BlockTitle,Badge} from 'framework7-svelte';
import {tabs} from '../js/store.js';
import {scale} from 'svelte/transition';

let opened = false
function getHrefs(length,letterType){
  let ar = []
  for (var i = 0; i < length; i++) {
  let base = `/WIntro/${letterType}/${i}` 
   ar.push({testNum : i,href : base});}
return ar
}
$ : letters = letterTypes.map(obj => {
    let children = getHrefs( $tabs[2].children["Tests"][obj.title].length ? $tabs[2].children["Tests"][obj.title].length  : 0, obj.title)
  return {title : obj.title + " letters",children : children}
})
let letterTypes = [
  {title : "Referral"},
    {title : "Discharge"},
      {title : "Transfer"},
]

</script>
