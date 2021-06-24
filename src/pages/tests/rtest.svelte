<script>  
import {Page,Toolbar,Link,Tabs,Tab,Navbar,NavRight} from 'framework7-svelte'
import {onMount} from 'svelte';

import RPartA from '../../components/TestParts/readPartA.svelte';
import RPartB from '../../components/TestParts/readPartB.svelte';
import RPartC from '../../components/TestParts/readPartC.svelte';

import {tabs} from '../../js/store.js';

function exit(){
   f7router.back()
  }

let partAData
let partBData 
let partCData 

onMount(() => {
  let currentTest = $tabs[tab].children["Tests"][testNumber].children
  partAData = currentTest["Part A"]
  partBData = currentTest["Part B"]
  partCData = currentTest["Part C"]
  
})
export let f7router
export let f7route;
let testNumber = f7route.params.number
let tab = f7route.params.tab
let test = "Reading Test " + (new Number(testNumber) + 1)
</script>

<Page noSwipeback noToolbar pageContent={false}>
   <Navbar  title={test} sliding={false}>
     <NavRight>
       <Link onClick={exit} >Exit </Link>
     </NavRight>
   </Navbar>
  <Toolbar tabbar position="top">
    <Link tabLink={`#rtab-1`} tabLinkActive>Part A</Link>
    <Link tabLink={`#rtab-2`}>Part B</Link>
    <Link tabLink={`#rtab-3`}>Part C</Link>
  </Toolbar>
  <Tabs animated>
      <Tab id={`rtab-1`} class="no-padding no-margin page-content" tabActive>
        <RPartA data={partAData}/>
      </Tab>
       <Tab id={`rtab-2`} class="no-padding no-margin page-content">
         <RPartB data={partBData}/>
      </Tab>
           <Tab id={`rtab-3`} class="no-padding no-margin page-content">
         <RPartC data={partCData}/>
      </Tab>
  </Tabs>
</Page>