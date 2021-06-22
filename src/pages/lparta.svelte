<Page noToolbar>
   <Navbar  sliding={false} title={part}>
     <NavRight>
       <Link onClick={exit} >Exit </Link>
     </NavRight>
   </Navbar>
   {#if part === "Part-A"}
     <PartA {con1} {con2}/>
   {:else if part === "Part-B"}
      <PartB mcqs={partBmcqs}/>
   {:else if part === "Part-C"}
      <PartC {partC1mcqs} {partC2mcqs}/>
   {:else}
      <PartA {con1} {con2}/>
      <PartB mcqs={partBmcqs}/>
      <PartC {partC1mcqs} {partC2mcqs}/>
   {/if}
   
</Page>
<script>
  import { Link,Page, NavRight,Navbar, Block, BlockTitle,BlockHeader } from 'framework7-svelte';
  import PartA from "../components/TestParts/lisPartA.svelte"
  import PartB from "../components/TestParts/lisPartB.svelte"
  import PartC from "../components/TestParts/lisPartC.svelte"
  import {onMount} from 'svelte';
  import {tempTest} from '../js/store.js';
  function exit(){
   f7router.back()
  }
  //import {tabs} from '../js/store.js';
  
  export let f7router
  export let f7route;
  let part = f7route.params.part
 let data = []
 function extractLPartAConsultation(obj){
   let desc = obj.para
   let headings = Object.entries(obj).filter(([key,value]) => key !== "para")
   return {desc,headings}
   
 }
 function getMcqs(obj){
   return Object.entries(obj).filter(([key,value]) => !isNaN(key)).map(([key,value]) => {
     let myoptions = Object.entries(value.options).filter(([key,value]) => !isNaN(key)).map(([key,value]) => value)
     return {text : value.text,options : myoptions, desc : value.desc.para ? value.desc.para : " "}
   })
 }
 
 let con1 = {desc : "",headings : []}
 let con2 = {desc : "",headings : []}
 let partBmcqs = []
 let partC1mcqs = []
 let partC2mcqs = []
 let partBDesc = "In this part, you'll hear six short extracts related to healthcare workplaces. Choose the correct option based on what you hear."
 let partCDesc =  "Change this desc for Listening part C"
  onMount(() => {
   let partA = $tempTest["Part A"]
   let partB = $tempTest["Part B"]["Questions"]
   let partC = $tempTest["Part C"]
   
   
   let pre1 = partC["Audio 1"]
   let pre2 = partC["Audio 2"]
   let one = partA["Consultation 1"]
   let two = partA["Consultation 2"]
   con1 = extractLPartAConsultation(one)
   con2 = extractLPartAConsultation(two)
   partBmcqs = getMcqs(partB)
   partC1mcqs = getMcqs(pre1)
   partC2mcqs = getMcqs(pre2)
   console.log("pre1",pre1)
   console.log("partc1mcqs", partC1mcqs)
    /*let currentTab = $tabs[tab]
    mainTitle = currentTab.title
   
    let currentSlide = currentTab.children[0].children[slide]
    subTitle = currentSlide.title
    //console.log(subTitle)
    let currentObj = JSON.parse(currentSlide.children[0].text)
    html = currentObj.html
    //console.log(mainTitle,subTitle,html)*/
  })
</script>
