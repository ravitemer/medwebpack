
<BlockTitle class="margin-top" medium>Practice</BlockTitle>
{#key arr}
<List inset>
{#each arr as {testNum,href},i (i)}
<ListItem {href}>
  <div transition:scale>
    Test {testNum + 1}
 </div>
</ListItem>
{/each}
</List>
{/key} 

<script>  
import {Block,BlockTitle,Link,List,ListItem} from 'framework7-svelte';
import {tabs} from '../js/store.js';
import {scale} from 'svelte/transition';
export let tab;
$ : noOfTests = $tabs[tab].children["Tests"].length ? $tabs[tab].children["Tests"].length : 0
$ : arr = (() => {
  let ar = []
for (var i = 0; i < noOfTests; i++) {
  let base = tab === 0 ? `/LMock/${tab}/${i}` : tab === 1 ? `/RTest/${tab}/${i}` : ""
   ar.push({testNum : i,href : base});
}
  return ar})()
let rows = [
  {title : "Test 1"},
    {title : "Test 2"},
      {title : "Test 3"},
]

</script>
