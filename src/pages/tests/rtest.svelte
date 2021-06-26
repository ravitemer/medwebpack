<script>  
import {Page,Toolbar,Link,Tabs,Tab,Navbar,NavRight} from 'framework7-svelte'

import RPartA from '../../components/TestParts/readPartA.svelte';
import RPartB from '../../components/TestParts/readPartB.svelte';
import RPartC from '../../components/TestParts/readPartC.svelte';
import {tempTest} from '../../js/store.js';

export let f7router;

let currentTest = $tempTest.children
let partAData = extractPartA(currentTest["Part A"])
let partBData = extractPartB(currentTest["Part B"])
let partCData = [ extractPartC(currentTest["Part C"]["Passage 1"]) , extractPartC(currentTest["Part C"]["Passage 2"])]

let partADesc = `
<ul>
<li> Look at the four texts A-D, in the separate Text Booklet. </li>
<li>For each question 1-20, look through the texts, A-D, to find the relevant information.</li>
<li> Type your answers in the spaces provided in this Question Paper. </li>
<li> Answer all the questions within the 15-minute time limit. </li>
<li> Your answers should only be taken from texts A-D and must be correctly spelt. </li>
</ul>
`
let partBDesc = `
<p> In this part of the test, there are six short extracts relating to  the work of health professionals. For questions 1-6, choose the answer (A, B or C) which you think fits best according to the text. </p>
`
let partCDesc = `
<p>In this part of the test, there are two texts about different aspects of healthcare. For questions 7-22, choose the answer (A, B, C or D) which you think fits best according to the text.</p>
`
function exit(){
   f7router.back("/RPage/",{force:true})
}
function extractPartA({Blanks,para,unsupportedText,...Passages}){
  //ccccc 
  //{Blanks,para} = obj
  let sections = Object.values(Passages).map(value => value.html.para)
  let blanks = Object.entries(Blanks).filter(([index,value]) => !isNaN(index)).map(([index,value]) => value.para)
  return {sections,blanks}
  }
function extractPartB(obj){
  return Object.entries(obj["Questions"]).filter(([key,value]) => !isNaN(key)).map(([key,value]) => { 
       let passage = value.desc.html.para
       let options = Object.entries(value.options).filter(([key,value]) => !isNaN(key)).map(([key,value]) => value)
       let question = value.text
    return {passage,options,question}
  })
}
function extractPartC(obj){
   let mcqs = Object.entries(obj).filter(([key,value]) => !isNaN(key)).map(([key,value]) => { 
   //ccccc
       let desc = value.desc.para
       let options = Object.entries(value.options).filter(([key,value]) => !isNaN(key)).map(([key,value]) => value)
       let text = value.text
    return {desc,options,text}
     })
   let paragraphs = Object.entries(obj["Paragraphs"]).filter(([key,value]) => !isNaN(key)).map(([key,value]) => value.html.para)
 return {mcqs,paragraphs}
 }
</script>

<Page noSwipeback noToolbar pageContent={false}>
   <Navbar  title={"Reading Test"} sliding={false}>
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
        <RPartA desc={partADesc} data={partAData}/>
      </Tab>
      <Tab id={`rtab-2`} class="no-padding no-margin page-content">
         <RPartB desc={partBDesc} data={partBData}/>
      </Tab>
      <Tab id={`rtab-3`} class="no-padding no-margin page-content">
         <RPartC desc={partCDesc} data={partCData}/>
      </Tab>
  </Tabs>
</Page>