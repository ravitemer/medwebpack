<MyNavBar {title}/>
<TopSwiper on:slideClick={e => handleSlideClick(e.detail.slide)} {index} {slides} {slideTitle}/>
<slot><h1>Default Slot</h1></slot>



<script>  
import {Page,Block,BlockTitle,BlockHeader,BlockFooter,List,Link,f7,ListItem} from 'framework7-svelte';

export let f7router
export let f7route
export let title = "Listening"
export let slideTitle = "Listening"
export let index = 0

import TopSwiper from "../components/topSwiper.svelte";
import MyNavBar from '../components/mynavbar.svelte';
import {tabs} from "../js/store.js"

$ : slides = $tabs[index].children[0].children.filter(b => b.type === "children")

function handleSlideClick(slide){
  f7router.navigate(`/about/${index}/${slide}`)
}

</script> 

   
   
   
<style> 

</style>
