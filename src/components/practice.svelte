
<BlockTitle class="margin-top-half" medium>Practice</BlockTitle>
{#key arr}
<List inset>
{#each arr as num,i (i)}
<ListItem href="/Lmock/{tab}/{i}">
  <div transition:scale>
    Test {i + 1}
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
   ar.push(i);
}
  return ar})()
let rows = [
  {title : "Test 1"},
    {title : "Test 2"},
      {title : "Test 3"},
]

</script>
