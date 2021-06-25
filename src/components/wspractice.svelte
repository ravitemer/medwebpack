<script>  
import {List,ListItem,AccordionContent,BlockTitle,Badge} from 'framework7-svelte';
import {scale} from 'svelte/transition';

import {tabs} from "../js/store.js"

export let f7router;
export let tab;

$ : accordionItems = generateAccordionItems($tabs,tab) 
   
function generateAccordionItems(tabs,tab){
       let acTypes = Object.entries(tabs[tab].children["Tests"]["types"])
       return acTypes.map(([accordionTitle,acArr]) => {
           let accordionTests = getAccordTests(acArr,tab)
           return {accordionTitle , accordionTests}
           })
           
}
function getAccordTests(acChildren,tab){
    let ar = []
    for (let testTitle of acChildren) {
        let testHref = `/TestIntro/${tab}/${testTitle}`
        ar.push({testHref ,testTitle})
     }
     return ar
}

</script>

<!--HTML-->
<BlockTitle class="margin-top" medium>Practice</BlockTitle>

  <List class="no-margin-top" accordionList accordionOpposite inset>
  {#each accordionItems as {accordionTitle,accordionTests},i (i)}
   <ListItem accordionItem badge={accordionTests.length} badgeColor="teal" title={accordionTitle}>
      <AccordionContent>
        <List inset>
        {#each accordionTests as {testTitle, testHref},i (i)}
          <ListItem href={testHref} title={testTitle}/>
        {/each}
        </List>
      </AccordionContent>
    </ListItem>
  {/each}
  </List>
