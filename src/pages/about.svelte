<Page>
 <Navbar large transparent title={mainTitle} backLink="Back" />
 <BlockTitle medium>{subTitle}</BlockTitle>
 <Block strong>
 {@html html}
</Block>
</Page>
<script>
import { Page, Navbar, Block, BlockTitle } from 'framework7-svelte';
import {onMount} from 'svelte';

import {tempObj} from '../js/store.js';

export let f7router
export let f7route;

 let mainTitle;
 let subTitle;
 let html;

onMount(() => {
 
  let {tab,slide} = f7route.params
  let currentSlide = $tempObj[tab][slide]
  mainTitle = currentSlide.title 
  subTitle = currentSlide.title 
  html = currentSlide.content.html ? currentSlide.content.html.para : "Working on this..."
  
  
  /*let currentTab = $tabs[tab].children
  let slidesToggle = currentTab["Slides"]
  let currentSlide = (() => {
    let keys = Object.keys(slidesToggle) 
    let title = keys[slide]
    let html = slidesToggle[title].html ? slidesToggle[title].html.para : ""
    return {title,html};
  })()*/
 
  //console.log(subTitle)
  //let currentObj = JSON.parse(currentSlide.children[0].text)
 
  //console.log(mainTitle,subTitle,html)
})
</script>
