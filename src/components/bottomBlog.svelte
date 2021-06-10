<script>  
import {Tabs,Tab,Navbar,Page,Block,BlockTitle,List,ListItem} from "framework7-svelte";
export let f7route;

import {request} from 'framework7';
import {scale} from 'svelte/transition'
let tabs = [{name:"All",view:"All",icon:"bars"},
              {name:"Listening",view:"Listening",icon:"headphones-alt"},
              {name:"Reading",view:"Reading",icon:"book-reader"},
              {name:"Writing",view:"Writing",icon:"pencil-alt"},
              {name:"Speaking",view:"Speaking",icon:"user-friends"},

]

let id ="app9S9jVaNIO0b7LF"
let table="articles" 

let ops = [{name:"All",view:"All",icon:"bars"},
              {name:"Listening",view:"Listening",icon:"headphones-alt"},
              {name:"Reading",view:"Reading",icon:"book-reader"},
              {name:"Writing",view:"Writing",icon:"pencil-alt"},
              {name:"Speaking",view:"Speaking",icon:"user-friends"},

]

const Load = async (view="Grid view") =>{
                         let params = {maxRecords:10,view:view}
                         let options = {
                          url : "https://api.airtable.com/v0/" + id + "/" + table,
                          method : "GET",
                          data : params,
                          headers : {Authorization : "Bearer keyX4ugTRmF0cbHdc"},
                          dataType : "json",
                          success: (d,x,y) => console.log("success",y),
                          error : (e) => console.log("error",e)
                                            }
                          let records = (await request(options)).data.records
                          return records
                }
                

</script>

<!--Segmented strong raised class="no-margin-bottom margin-horizontal">
{#each tabs as ele,i (i)}
<Button tabLink={`#tab-${ele.name}`} tabLinkActive={i === 0}>{@html i === 0 ? "All" : `<i class="fas fa-${ele.icon}"></i>`}</Button>
{/each}
</Segmented-->
<!--div class="display-flex padding-horizontal justify-content-space-between">
{#each tabs as ele,i (i)}
<Button tabLink={`#tab-${ele.name}`} tabLinkActive={i === 0}>{@html i === 0 ? "All" : `<i class="fas fa-${ele.icon}"></i>`}</Button>
{/each}
</div-->
<Page>
<Navbar large transparent title={` ${f7route.params.type} `} backLink="Back"/>
{#await Load(f7route.params.type)}
<List inset strong mediaList>
  {#each [0,1,2,3,4,5,6,7,8,9,10] as ele,i (i)}
   
       <ListItem> <div class="skeleton-effect-wave skeleton-text" transition:scale> <span style="font-size:13px">This is the title that will be loaded in the title section.</span> </div> </ListItem>
   
  {/each}
</List>
{:then records}
   <List inset strong mediaList>
    {#each records as {fields:{imgurl,postdate,title,description,postlink}},i (i)}
     
        <ListItem noChevron target="_blank" external href={postlink}> 
      
            <img style="border-radius:8px;" alt="fu" slot="media" src={imgurl} width="60" /> <div transition:scale>
            <span style="font-size:13px"> {title}</span>
        </div>
        </ListItem>
    
    {/each}
  </List>
{/await}

</Page>