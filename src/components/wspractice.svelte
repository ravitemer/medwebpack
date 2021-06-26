<script>  
import {List,ListItem,AccordionContent,BlockTitle,Badge,Button} from 'framework7-svelte';
import {fade,scale,slide,fly,blur} from 'svelte/transition';

import {tabs} from "../js/store.js"

export let f7router;
export let tab;

let showAccordion = true;
$ : accordionItems = generateAccordionItems($tabs,tab) 
$ :  tests = showAccordion ? [] : getTests($tabs,tab) 
   
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

function getTests(tabs,tab){
    let arr = []
    //cccccc 
    let curtests = tabs[tab].children["Tests"]["tests"]
    for (let testTitle of Object.keys(curtests)) {
      //ccccc
      let testHref = `/TestIntro/${tab}/${testTitle}`;
      //cccc
      arr.push({testHref,testTitle})
     }
     return arr
}

</script>

<!--HTML-->

<BlockTitle class=" display-flex justify-content-space-between margin-top" medium>Practice <Button onClick={() => showAccordion = !showAccordion}><span style="font-size:1.1em" class={showAccordion ? "fas fa-arrows-alt-v" : "fas fa-angle-double-down"}></span></Button> </BlockTitle>
{#if showAccordion}
      <List class="no-margin-top" accordionList accordionOpposite inset>
      {#each accordionItems as {accordionTitle,accordionTests},i (i)}
      <div in:scale>
       <ListItem accordionItem badge={accordionTests.length} badgeColor="teal" title={accordionTitle}>
      
          <AccordionContent>
            <List inset>
            {#each accordionTests as {testTitle, testHref},i (i)}
              <ListItem href={testHref} title={testTitle}/>
            {/each}
            </List>
          </AccordionContent>
        </ListItem>
            </div>
        {/each}
      </List>
{:else}
        <List class="no-margin-top" inset>
      {#each tests as {testTitle, testHref},i (i)}
      <div in:scale>
      <ListItem href={testHref}>
         {testTitle}
      </ListItem>
             </div>
      {/each}
      </List>
{/if}
