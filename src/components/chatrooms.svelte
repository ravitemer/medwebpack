<script>
  import { Page, BlockTitle } from 'framework7-svelte';
  import {onMount} from 'svelte';
  import {scale} from 'svelte/transition';
import {request } from 'framework7';
let records = []
let id ="appizOPdshpJSKP4r"
let table="Sheet1" 
let params = {maxRecords:50,view:"Grid view", "fields[]" : "testdayshort", "fields[] " : "testresult", "fields[]  " : "bookings", "fields[]   " : "isRoomOpen", "fields[]    " : "isResultOpen", "fields[]     " : "isOld"}
const Load = async () =>{
                         let options = {
                          url : "https://api.airtable.com/v0/" + id + "/" + table,
                          method : "GET",
                          data : params,
                          headers : {Authorization : "Bearer keyX4ugTRmF0cbHdc"},
                          dataType : "json",
                          success: (d,x,y) => console.log("success",y),
                          error : (e) => console.log("error",e)
                                            }
                          records = (await request(options)).data.records
                }
onMount(() => {
  Load()
})
    
</script>

                              
<Page id="chat">
<BlockTitle medium>Chat Rooms</BlockTitle>
<div class="timeline"> <!--class:timeline-item-right={type === "result"} timeline-sides-->
{#each records as {fields : {testdayshort,testresult,bookings,isRoomOpen,isOld,isResultOpen}},i (i)}
    <div id={i} class="timeline-item" class:disabled={!isRoomOpen}>
      <div class:text-color-green={isRoomOpen} class="timeline-item-date">{testdayshort}</div>
      <div class="timeline-item-divider"></div>
        <div class="timeline-item-content list links-list inset no-safe-areas">
        <!--div class="timeline-item-subtitle">{@html `Members : <b class="text-color-green">53</b>`}</div-->
        <ul>
        {#each ["All","Medicine","Nursing"] as room (room)}
         <li><a href="/container/">{@html isOld ? `<s>${room}</s>` : room}</a></li>
        {/each}
        </ul>
      </div>
    </div>
    <div class="timeline-item" class:disabled={!isResultOpen}>
      <div class:text-color-green={isResultOpen} class="timeline-item-date"> {@html `<small>@Result</small>`}</div> 
      <div class="timeline-item-divider"></div>
      <div class="timeline-item-content">
        <div class="timeline-item-subtitle">{@html `<small>${testresult}</small>`}</div>
      <div class="timeline-item-inner">{ isResultOpen ? "Active" : (isOld ? "Closed" : `Opens @${testdayshort}`)}</div>
      </div>
    </div>
  {/each}
</div>
</Page>
                                
 





<style>
	.disabled {
color : gray;
	}
</style>