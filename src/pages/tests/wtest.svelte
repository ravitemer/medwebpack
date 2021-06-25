<script>
import { View,Popup,Link,Page, NavRight,Navbar, Block, Toolbar,BlockTitle,BlockHeader,Button ,Chip} from 'framework7-svelte';
import {onMount} from 'svelte';

import WAnswer from "./wanswer.svelte";
import {tempTest} from '../../js/store.js';

export let f7router

let {Notes,Task,Answer} = $tempTest.children
let {Age,Diagnosis,Patient} = $tempTest.props
let desc = `<p>Read the case notes and complete the writing task which follows.</p>`
let chips = Object.keys(Notes).filter(key => !key.startsWith("-") && key !== "para")
let newNotes = Object.entries(Notes).filter(([key,value]) => key !== "para").map(([key,value]) => {
  let newKey = ""
  if (key.startsWith("-")) {newKey = key.slice(1) }else {newKey = key}
  let newValue = value.para
  return {heading : newKey,content : newValue}
  })

function onChipClick(e){
  let val = e.target.innerHTML
document.querySelector("#wtc-"+ val.replaceAll(" ","")).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
}

function exit(){
 f7router.back()
}
</script>

<Page noSwipeback noToolbar>
   <Navbar title={"Writing Test"}>
     <NavRight>
       <Link onClick={exit} >Exit </Link>
     </NavRight>
   </Navbar>
   <Toolbar scrollable tabbar position="top">
     <Chip onClick={onChipClick} class="margin-right-half" outline><span class="mychip">{"Task"}</span></Chip>
     {#each chips as chip,i (i)}
       <Chip onClick={onChipClick} class="margin-right-half" outline><span class="mychip">{chip}</span></Chip>
     {/each}
   </Toolbar>
   <!--Desc-->
   <Block>{@html desc}</Block>
   <!--Notes-->
   {#each newNotes as {heading,content},i (i)}
      <Block class="margin-bottom-half">
         <h3 id={`wtc-${heading.replaceAll(" ","")}`} class="text-color-teal" style="font-family:noteworthy">{heading}</h3>
         <p>{@html content}</p>
      </Block>
   {/each}
   <!--Task-->
   <Block>
       <h3 id={`wtc-Task`} class="text-color-teal" style="font-family:noteworthy">{"Task"}</h3>
       {@html Task.para} 
   </Block>
   <div style="margin:auto;width:70%">
       <Button id="wtc-RevealAnswer" popupOpen=".wanswer-popup-push" fill>Reveal Answer</Button>
   </div>
   <!--Answer Popup-->
 <Popup swipeToClose={"to-bottom"} push class="wanswer-popup-push">
    <View>
      <Page>
        <Navbar title={"Model letter"} large transparent>
          <NavRight>
            <Link popupClose><i class="fas fa-car"></i></Link>
          </NavRight>
        </Navbar>
         <WAnswer answer={Answer}/>
      </Page>
    </View>
  </Popup>

</Page>

<style> 
.mychip:hover {
  color : teal;
  }
</style>


