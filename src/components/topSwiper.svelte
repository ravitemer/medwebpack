<Swiper class="swiper-init swiperInstance" onClick={(s,e) => onSlideClicked(s.clickedIndex)} pagination effect={'coverflow'} centeredSlides={true} slidesPerView={'1'}>
        {#each slides as {title,children},i (i)}
          <SwiperSlide> 
             <BlockTitle>{slideTitle}</BlockTitle>
             <Block inset strong>
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




<script>  
import {Swiper,SwiperSlide,Block,BlockTitle,BlockHeader,BlockFooter,f7} from 'framework7-svelte';

import {createEventDispatcher ,afterUpdate} from 'svelte'

export let slideTitle = "Reading"
export let index = 0
export let slides;

afterUpdate(() => {
    f7.swiper.get(".swiperInstance").$el.map(e => e.swiper.update())
})

const dispatch = createEventDispatcher();
let isOpened = false; 

function onSlideClicked(i){
  dispatch('slideClick', {slide: i});
  isOpened = true;
  }
  	
</script>







<style> 


</style>
