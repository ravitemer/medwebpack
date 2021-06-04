<script>  
import {List,Segmented,Tabs,Tab,SkeletonBlock,Link,ListItem,BlockTitle,Button,Page,Block} from 'framework7-svelte';
import {scale} from 'svelte/transition'
//import MyNavBar from "../components/mynavbar.svelte";
import {request} from 'framework7';
//= = ======================================= = =//
import Quiz from "../components/quiz.svelte";
//let records = [ ]
let id ="app9S9jVaNIO0b7LF"
let table="articles" 
let tabs = [{name:"All",view:"All",icon:"bars"},
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

  
  
  
<Page>
   <BlockTitle medium>Daily Dose</BlockTitle>
  <!-- searchContainer=".search-list"   searchIn=".item-title" disableButton={!theme.aurora}-->
   <Quiz/>
<Segmented strong raised class="margin-horizontal">
{#each tabs as ele,i (i)}
<Button tabLink={`#tab-${ele.name}`} tabLinkActive={i === 0}>{@html i === 0 ? "All" : `<i class="fas fa-${ele.icon}"></i>`}</Button>
{/each}
</Segmented>
<Tabs swipeable>
{#each tabs as ele,i (i)}
<Tab id={`tab-${ele.name}`} class="page-content no-margin no-padding" tabActive={i === 0}>
{#await Load(ele.view)}
<List inset strong mediaList>
  {#each [0,1,2,3] as ele,i (i)}
    <div class="skeleton-effect-wave skeleton-text" transition:scale>
       <ListItem> <span style="font-size:13px">This is the title that will be loaded in the title section.</span></ListItem>
    </div>
  {/each}
</List>
{:then records}
   <BlockTitle class="margin-vertical-half">{ele.name}</BlockTitle>
   <List inset strong mediaList>
    {#each records as {fields:{imgurl,postdate,title,description,postlink}},i (i)}
      <div transition:scale>
        <ListItem noChevron target="_blank" external href={postlink}> 
            <img style="border-radius:8px;" alt="fu" slot="media" src={imgurl} width="60" />
            <span style="font-size:13px"> {title}</span>
        </ListItem>
      </div>
    {/each}
  </List>
{/await}
</Tab>
{/each}
</Tabs>
</Page>