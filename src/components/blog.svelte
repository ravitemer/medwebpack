<script>  
import {List,Segmented,Tabs,Tab,SkeletonBlock,Link,ListItem,BlockTitle,Button,Page,Block} from 'framework7-svelte';
import {scale} from 'svelte/transition'
//import MyNavBar from "../components/mynavbar.svelte";
//import {request} from 'framework7';
//= = ======================================= = =//
import Quiz from "../components/quiz.svelte";

let ops = [{name:"All",view:"All",icon:"bars"},
              {name:"Listening",view:"Listening",icon:"headphones-alt"},
              {name:"Reading",view:"Reading",icon:"book-reader"},
              {name:"Writing",view:"Writing",icon:"pencil-alt"},
              {name:"Speaking",view:"Speaking",icon:"user-friends"},
]

</script>

  
  
  
<Page>
   <BlockTitle medium>Blog</BlockTitle>
   <Block strong>
   <div class="display-flex justify-content-space-between align-items-center">
     {#each ops as {icon,view},i (i)}
         <a href={`/blog/${view}`}><i class={`fas fa-${icon} myicon`}></i></a>
     {/each} 
   </div>
 </Block>
 <BlockTitle medium>Daily Dose</BlockTitle>
 <Quiz/>

</Page>

<style> 

.myicon {
 background : var(--f7-theme-color);
 color: white;
  padding : 10px;
  border-radius : 50%;
  font-size : 18px;
}

</style>
