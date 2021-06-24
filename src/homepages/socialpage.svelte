<script>  
import {Segmented,Button,List,Tabs,Tab,Link,ListItem,Navbar,BlockTitle,Searchbar,Swiper,SwiperSlide,Page,Block,Toolbar} from 'framework7-svelte';
import {onMount} from 'svelte';
import {request} from 'framework7';
//= = ======================================= = =//
//import Article from "../components/article.svelte";
import MyNavBar from "../components/mynavbar.svelte";
import Blog from "../components/blog.svelte";
import Chats from "../components/chatrooms.svelte";

//let records = [ ]
let id ="app9S9jVaNIO0b7LF"
let table="articles" 

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
                
 onMount(() => {
   //Load().then(() => {
   
   //})
  
 })
</script>

<Page pageContent={false}>
  <MyNavBar />
  <Toolbar tabbar position="top">
    <Link tabLink={`#tab-1`} tabLinkActive>Blog</Link>
    <Link tabLink={`#tab-2`}>ChatRooms</Link>
  </Toolbar>
  <Tabs animated>
      <Tab id={`tab-1`} class="no-padding no-margin page-content" tabActive>
         <Blog/>
      </Tab>
       <Tab id={`tab-2`} class="no-padding no-margin page-content">
         <Chats/>
      </Tab>
  </Tabs>
</Page>

<style> 
:global(::-webkit-scrollbar) {
    display: none;
}
</style>
