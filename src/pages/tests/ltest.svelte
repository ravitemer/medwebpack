<script>
import {Toolbar,Tabs,Tab, Link,Page, NavRight,Navbar, Block, BlockTitle,BlockHeader } from 'framework7-svelte';
import {onMount} from 'svelte';

import PartA from "../../components/TestParts/lisPartA.svelte"
import PartB from "../../components/TestParts/lisPartB.svelte"
import {tempTest} from '../../js/store.js';

export let f7router;

let extract1 = {desc : "",headings : []}
let extract2 = {desc : "",headings : []}
let partBmcqs = []
let partC1mcqs = []
let partC2mcqs = []
let partADesc = `<p>In this part of the test, you’ll hear two different extracts. In each extract, a health professional is talking to a patient.</p> <p>For questions 1-24, complete the notes with information that you hear. Now, look at the notes for extract one.</p> `
 let partBDesc = `<p>In this part, you'll hear six short extracts related to healthcare workplaces. Choose the correct option based on what you hear.</p> <p> For questions 25-30, choose the answer (A, B or C) which fits best according to what you hear. You’ll have time to read each question before you listen. Complete your answers as you listen.</p>
<p>Now look at question 25. </p>`
 let partCDesc =  `<p> In this part of the test, you’ll hear two different extracts. In each extract, you’ll hear health professionals talking about aspects of their work.</p>
<p>For questions 31-42, choose the answer (A, B or C) which fits best according to what you hear. Complete your answers as you listen.</p>
<p>Now look at extract one. </p>`

 
function exit(){
   f7router.back()
}
function extractLPartAConsultation(obj){
   let desc = obj.para
   let headings = Object.entries(obj).filter(([key,value]) => key !== "para")
   return {desc,headings}
}
function getMcqs(obj){
   return Object.entries(obj).filter(([key,mcq]) => !isNaN(key)).map(([index,mcq]) => {
     let myoptions = Object.entries(mcq.options).filter(([index,option]) => !isNaN(index)).map(([index,option]) => option)
     return {text : mcq.text,options : myoptions, desc : mcq.desc.para ? mcq.desc.para : " "}
   })
}

onMount(() => {
   let currentTest = $tempTest.children
   //ccccc
   extract1 = extractLPartAConsultation(currentTest["Part A"]["Extract 1"])
   extract2 = extractLPartAConsultation(currentTest["Part A"]["Extract 2"])
   partBmcqs = getMcqs(currentTest["Part B"]["Questions"])
   partC1mcqs = getMcqs(currentTest["Part C"]["Audio 1"])
   partC2mcqs = getMcqs(currentTest["Part C"]["Audio 2"])
  })
</script>

<!--HTML-->
<Page noSwipeback noToolbar>
   <Navbar  sliding={false} title={"Listening Test"}>
     <NavRight>
       <Link onClick={exit} >Exit </Link>
     </NavRight>
   </Navbar>
   <Toolbar tabbar position="top">
    <Link tabLink={`#ltab-1`} tabLinkActive>Part A</Link>
    <Link tabLink={`#ltab-2`}>Part B</Link>
    <Link tabLink={`#ltab-3`}>Part C</Link>
  </Toolbar>
  <Tabs animated>
      <Tab id={`ltab-1`} class="no-padding no-margin page-content" tabActive>
        <PartA desc={partADesc} {extract1} {extract2}/>
      </Tab>
      <Tab id={`ltab-2`} class="no-padding no-margin page-content">
         <PartB desc={partBDesc} mcqs={partBmcqs}/>
      </Tab>
      <Tab id={`ltab-3`} class="no-padding no-margin page-content">
         <Block>{@html partCDesc}</Block>
         <BlockTitle>Audio 1 : 31-36</BlockTitle>
         <PartB mcqs={partC1mcqs} />
         <BlockTitle>Audio 1 : 37-42</BlockTitle>
         <PartB mcqs={partC2mcqs} />
      </Tab>
  </Tabs>
</Page>
