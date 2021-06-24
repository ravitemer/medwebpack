<script>  
import {Swiper,SwiperSlide,Block,BlockHeader,BlockTitle,Button,BlockFooter,List,ListItem,f7} from "framework7-svelte";
let isClicked = false
export let questions = [
  {question : "She was given ......... to adhere to her medication.",
  options : [{text :"Advise", Ans : false},
                        {text :"Advice", Ans : true}],
                        footer : "Advice vs Advise"
  },
  {question : "Adherence means....",
  options : [{text :"Stick to ", Ans : true},
                        {text :"Stick two things", Ans : false}],
                        footer : "Definition : Adherence"
  },
 
]

</script>

<Swiper pagination class="no-padding-vertical swiper-init swiperInstance">
{#each questions as {question,options,footer},i (i)}
 <SwiperSlide>
  <Block class="no-margin-top" strong inset>
    <p style="height : 40px;overflow-y:scroll;font-size:16px;">{question}</p>
    <List class="no-margin-top" simpleList>
    {#each options as option,i (i)}
      <ListItem onClick={() => isClicked = true} noChevron>
      <code class:text-color-green={isClicked && option.Ans} class:text-color-red={isClicked && !option.Ans}>{option.text}</code>
      
      </ListItem>
   
    {/each}
    </List>
    <BlockFooter>{footer}</BlockFooter>
  </Block> 
  </SwiperSlide>
  {/each}
</Swiper>
  <style> 
  </style>
  