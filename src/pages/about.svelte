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
  
  import {tabs} from '../js/store.js';
  
  export let f7router
  export let f7route;
  
 let mainTitle;
 let subTitle;
 let html;
  
  onMount(() => {
   
    let {tab,slide} = f7route.params
   
    let currentTab = $tabs[tab]
    mainTitle = currentTab.title
   
    let currentSlide = currentTab.children[0].children[slide]
    subTitle = currentSlide.title
    //console.log(subTitle)
    let currentObj = JSON.parse(currentSlide.children[0].text)
    html = currentObj.html
    //console.log(mainTitle,subTitle,html)
  })
</script>
