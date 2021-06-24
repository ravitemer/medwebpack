
<BlockTitle class="margin-top" medium>Practice</BlockTitle>
<List inset>
{#each tests as {title,base},i (i)}
<ListItem href={base+i}>
  <div transition:scale>
   {title}
 </div>
</ListItem>
{/each}
</List>

<script>  
import {Block,BlockTitle,Link,List,ListItem} from 'framework7-svelte';
import {scale} from 'svelte/transition';
import {tabs} from "../js/store.js";
export let tab = 0;

$ :  tests = getTests($tabs,tab) 
function getTests(tabs,tab){
    let arr = []
    let curtests = tabs[tab].children["Tests"]
    //console.log("Got Tests",tab)
    for (let test of curtests) {
      let base = tab === 0 ? `/LMock/${tab}/` : tab === 1 ? `/RTest/${tab}/` : ""
      arr.push({base,title: test.title ? test.title : test})
     }
     return arr
}

</script>
