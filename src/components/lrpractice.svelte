<script>  
import {Block,BlockTitle,Link,List,ListItem} from 'framework7-svelte';
import {scale} from 'svelte/transition';

import {tabs} from "../js/store.js";

export let tab = 0;

$ :  tests = getTests($tabs,tab) 

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
<BlockTitle class="margin-top" medium>Practice</BlockTitle>

<List inset>
{#each tests as {testTitle, testHref},i (i)}
<ListItem href={testHref}>
  <div transition:scale>
   {testTitle}
 </div>
</ListItem>
{/each}
</List>
