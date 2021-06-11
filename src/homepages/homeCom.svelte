<MyNavBar {title}/>
<BlockTitle class="margin-top-half" medium>Structure</BlockTitle>
<TopSwiper on:slideClick={e => handleSlideClick(e.detail.slide)} {slides} />
<Practice />
<slot><h1>Default Slot</h1></slot>



<script>  
import {Page,Block,BlockTitle,BlockHeader,BlockFooter,List,Link,f7,ListItem} from 'framework7-svelte';

export let f7router
export let f7route
export let title = ""
export let index = 0

import TopSwiper from "../components/topSwiper.svelte";
import MyNavBar from '../components/mynavbar.svelte';
import Practice from '../components/practice.svelte';

import {tabs,temp} from "../js/store.js"

$ : slides = $tabs[index].children[0].children.filter(b => b.type === "children")

function handleSlideClick(slide){
  f7router.navigate(`/about/${index}/${slide}/`)
  //console.log(f7route)
  //f7router.navigate(`/about/`)
}

</script> 

   
   
   
<style> 

</style>
