<Page>

{#if !show}
  <div>
    <BlockTitle>Please note :</BlockTitle>
    <Block>
      <p>First write a letter from the given case notes. Only then, refer to the answer.</p>
      <p>Please note that there is no fixed pattern about how to write a letter whether it may be a referral, a discharge or a transfer. The answer provided is only to be used as a reference and it is not the only answer or the only way to write. </p>
      <p>Keep in mind the mistakes you do and try not to repeat those in your furthur practice.</p>
      <p>You can always refer to common phrases, mistakes, tips etc in the writing tab.</p>
    </Block>
    <div style="margin:auto;width:60%;"> <Button onClick={() => show = true} fill> Continue </Button> </div>
</div>
{:else}
  <div transition:fade>
   <Block>{@html To.para}</Block>
   
   <Block>{@html `<p>${(new Date()).toLocaleDateString()}</p>`}</Block>
   
   <Block>{@html Re.para}</Block>
   
   
   <div id="wta-opening" class="block">{@html Opening.para}</div>
   {#each paras as {info,para},i (i)}
     <div class="block" id={`wta-paras-${i}`}>{@html para}</div>
   {/each}
   <div class="block" id = "wta-ending">{@html Ending.para}</div>
   
   <Block>{@html Yours.para}</Block>
   
  </div>
{/if}
<Popover bind:this={popover} class="wta-popover">
 {@html info}
</Popover>
</Page>

<script>  
import {Page,Block,BlockTitle,Button,Popover} from "framework7-svelte";
import {fade} from 'svelte/transition';
import {onMount} from "svelte";
export let answer = {}
let popover;
let  {To,Salute,Re,Opening,Ending,Yours,...others} = answer;
$ : paras = others ? Object.entries(others).filter(([key,value]) => !isNaN(key)).sort().map(([key,value]) => value) : []
 let words = 0
let show = false
let info = ""

function showPopover(inform){
  info = inform
  console.log(Object.stringify(popover.instance()))
  }
  
function countWords(){
  let arr =  [...Array(paras.length).keys()].map(n => "paras-"+ n)
 for (let word of [...arr,"opening","ending"]) {
   words += document.querySelector(`#wta-opening`)
   }
  }

</script>
