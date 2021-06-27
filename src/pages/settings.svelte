<script>  
import {Page,Block,BlockTitle,BlockFooter,BlockHeader,Navbar,NavLeft,NavRight,Link,PageContent,List,ListItem,ListInput} from "framework7-svelte";

let inputs = [
  {icon : "car",color:"teal",type:"text",label : "Theme",placeholder:"Select a theme"},
  {icon : "cogs",color:"purple",type:"text",label : "Plan",placeholder:"What's your plan?"}, 
  {icon : "pen",color:"green",type:"text",label : "Email",placeholder:"Pick a date"}, 
  {icon : "car",color:"red",type:"text",label : "Profession",placeholder:"Select a Color"},
  {icon : "car",color:"yellow",type:"number",label : "Settings" , placeholder:"Change settings"} ]
</script>

<Page>

  <Navbar  large transparent title="Settings">
    <NavRight>
      <Link popupClose>Close</Link>
    </NavRight>
  </Navbar>

  <BlockTitle class="no-margin-top" medium> Profile</BlockTitle>
  <List mediaList>
    <ListItem title="Raviteja Medarametla" subtitle="Medicine" >
      <img style="border-radius:50%;" src="https://picsum.photos/780" alt="pic" slot="media" width="50"/>
    </ListItem>
  </List>
  <List inlineLabels>
  {#each inputs as inputItem}
    <ListInput {...inputItem }>
      <div class={`bg-color-${inputItem.color}`} style="display:flex;justify-content:center;align-items:center;border-radius:5px;width:2em;height:2em;" slot="media"><span class={`fas fa-${inputItem.icon}`} ></span></div>
    </ListInput>
  {/each}
  </List>
    <!--Block class="no-padding no-margin-top " strong>
      <Row  style="padding:8px" class=" align-items-center no-margin">
        <Col class="justify-content-center align-items-center" width="25">
          <img style="height:54px;width:54px;border-radius:50%;" alt="profile-pic" src="https://picsum.photos/780.jpg"/>
        </Col>
        <Col  width="75">
         <p style="margin:0;font-weight:400;font-size:1.4em" >Raviteja Medarametla<br/>
         <small class="text-color-gray">Plan,Score,Profile</small>
         </p>
         
        
        </Col>
      </Row>
    </Block-->
    <BlockFooter>
      Here goes some description￼ is that clear￼
    </BlockFooter>
</Page>