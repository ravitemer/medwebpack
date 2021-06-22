<Page>
   <Navbar  sliding={false} title={tab} backLink="Back" />
   <BlockTitle medium>Listening Test : {num}</BlockTitle>
<div class="timeline">
  {#each subtests as subtest,i (i)}
    <div class="timeline-item">
      <div class="timeline-item-date">{subtest.qs}</div>
      <div class="timeline-item-divider"></div>
         <div class="timeline-item-content">
           <!--div class="timeline-item-subtitle">{"subtitle"}</div-->
           <div class="timeline-item-inner">{@html `<a href="${subtest.href}" class='padding-horizontal'><h3>${subtest.name}</h3></a>`}</div>
         </div>
    </div>
  {/each}
</div>
</Page>
<script>
  import { Page, Navbar, Block, BlockTitle } from 'framework7-svelte';
  import {onMount} from 'svelte';
  
  import {tempTest,tabs} from '../js/store.js';
  $ : tempTest.set($tabs[tab].children["Tests"][num].children)
  export let f7router
  export let f7route;
 let subtests = [
    {name : "Full Test",qs: "Q : 1-42",href:"/LpartA/Full Test"},
   {name : "Part A",qs : "Q : 1-24",href:`/LpartA/Part-A`},
   {name : "Part B",qs : "Q : 25-30",href:"/LpartA/Part-B"},
   {name : "Part C",qs: "Q : 31-42",href:"/LpartA/Part-C"},

 ]
 let num = f7route.params.number
 let tab = f7route.params.tab
  onMount(() => {
   //console.log($tempTest )
    /*let {number} = f7route.params
   num = number
    let currentTab = $tabs[tab]
    mainTitle = currentTab.title
   
    let currentSlide = currentTab.children[0].children[slide]
    subTitle = currentSlide.title
    //console.log(subTitle)
    let currentObj = JSON.parse(currentSlide.children[0].text)
    html = currentObj.html
    //console.log(mainTitle,subTitle,html)*/
  })
</script>
