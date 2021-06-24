 <BlockTitle class="margin-top" medium>Practice</BlockTitle>

  <List class="no-margin-top" accordionList accordionOpposite inset>
  {#each accordionItems as {title,accordItems},i (i)}
   <ListItem accordionItem badge={accordItems.length} badgeColor="teal" title={title}>
      <AccordionContent>
        <List inset>
        {#each accordItems as {title,base},i (i)}
          <ListItem href={base + i} {title}/>
        {/each}
        </List>
      </AccordionContent>
    </ListItem>
  {/each}
  </List>

<script>  
import {List,ListItem,AccordionContent,BlockTitle,Badge} from 'framework7-svelte';
import {scale} from 'svelte/transition';
import {tabs} from "../js/store.js"
export let tab;
$ : accordionItems = generateAccordionItems($tabs,tab) 
  

function generateAccordionItems(tabs,tab){
  //console.log("generated accorditems",tab)
       let types = tab === 2 ? Object.entries(tabs[2].children["Tests"]) : Object.entries(tabs[3].children["Tests"]["types"])
       return types.map(([type,arr]) => {
           let accordItems = getAccordSubItems(arr,type,tab)
           return {
           title : tab === 2 ? type + " letters" : type,
           accordItems}
           })
}
function getAccordSubItems(accordChildren,type,tab){
    let ar = []
    for (let listItem of accordChildren) {
        let base = tab === 2 ? `/WIntro/${type}/` : `/SIntro/${type}/`
        ar.push({base,title: listItem.title ? listItem.title : listItem})
     }
     return ar
}

</script>
