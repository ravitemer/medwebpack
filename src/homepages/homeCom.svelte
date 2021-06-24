<MyNavBar {title}/>
<BlockTitle class="margin-top" medium>Structure</BlockTitle>
<TopSwiper on:slideClick={e => handleSlideClick(e.detail.slide)} {slides} />
{#if index === 0 || index === 1}
<Practice tab={index}/>
{/if}
{#if index === 2}
<WritingPractice />
{/if}
<slot></slot>



<script>  
import {Page,Block,BlockTitle,BlockHeader,BlockFooter,List,Link,f7,ListItem} from 'framework7-svelte';

export let f7router
export let f7route
export let title = ""
export let index = 0

import TopSwiper from "../components/topSwiper.svelte";
import MyNavBar from '../components/mynavbar.svelte';
import Practice from '../components/practice.svelte';
import WritingPractice from '../components/writingPractice.svelte';

import {onMount} from "svelte";
import {tabs,tempObj} from "../js/store.js"

$ : slidesObj = $tabs[index].children["Slides"]
$ : slides = Object.entries(slidesObj).filter(([key,value]) => key !== "para").map(([key,value]) => {
  return { title: key, content : value }
})
/*(() => {
  let arr = [];
  for (let [key, value] of Object.entries(slidesObj)) {
    if (key !== "para") arr.push({ title: key, content : value });
  }
  return arr;
})()*/
//$ : slides = $tabs[index].children[0].children.filter(b => b.type === "children")
$ : {
  let currentSlides = {}
  currentSlides[index] = slides
  tempObj.update(obj => obj = {...obj,...currentSlides})
  //console.log(tempObj)
}
function handleSlideClick(slide){
  f7router.navigate(`/about/${index}/${slide}/`)
  //console.log(f7route)
  //f7router.navigate(`/about/`)
}
onMount(() => {
 
 
})

</script> 

   
   
   
<style> 

</style>
