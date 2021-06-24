{#key slides}
<Swiper class="swiper-init no-padding padding-horizontal swiperInstance" {centeredSlides} onClick={(s,e) => onSlideClicked(s.clickedIndex)} slidesPerView={no}>
        {#each slides as {title},i (i)}
          <SwiperSlide> 
             <Block class="no-margin margin-right" inset strong>
                <h1>{title}</h1>
                <p>{"Later..."}</p>
                <p>60 minutes</p>
                <BlockFooter class=" display-flex justify-content-space-between">
                        {isOpened ? "Completed" : "Not Completed"} <p>2 mins</p>
                </BlockFooter>
             </Block>
          </SwiperSlide>
        {/each}
</Swiper>
{/key}
<svelte:window bind:outerWidth={w}/>

<script>  
import {Swiper,SwiperSlide,Block,BlockTitle,BlockHeader,BlockFooter,f7} from 'framework7-svelte';
import {onMount} from "svelte";
import {createEventDispatcher ,afterUpdate} from 'svelte'
import {tabs,tempObj} from '../js/store.js';
let no = 1.02
let w ; 
let centeredSlides = true;
//let slides = []
export let tab = 0
$ : slides = Object.entries($tabs[tab].children["Slides"]).filter(([key,value]) => key !== "para").map(([key,value]) => {return { title: key, content : value }})
$ : {
  let currentSlides = {}
  currentSlides[tab] = slides
  tempObj.update(obj => obj = {...obj,...currentSlides})
}

$: if (w > 500) { no = 2.02;centeredSlides = false} else {no = 1.02;centeredSlides = true}

const dispatch = createEventDispatcher();
let isOpened = false; 

function onSlideClicked(i){
  dispatch('slideClick', {slide: i});
  isOpened = true;
  }
  	
</script>







<style> 

:global(.swiper-pagination-bullet){
  opacity : 0.2;
  background : var(--f7-theme-color)
}

:global(.swiper-pagination-bullet-active){
  opacity : 1;
  background : var(--f7-theme-color)
}

</style>
