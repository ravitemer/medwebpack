<script>  
import {Page,Block,BlockTitle,BlockFooter,BlockHeader,Navbar,NavLeft,NavRight,Link,PageContent,Col,Row} from "framework7-svelte";


</script>

<Page>
  <Navbar large transparent title="Settings">
    <NavRight>
      <Link popupClose>Close</Link>
    </NavRight>
  </Navbar>
  <BlockTitle medium> Profile</BlockTitle>
    <Block class="padding-half" strong>
    <div>
      <Row class="align-items-center" resizable>
        <Col width="25">
          <img style="width:64px;border-radius:50%;" alt="profile-pic" src="https://picsum.photos/780.jpg"/>
        </Col>
        <Col  width="75">
          <p style="font-size:1.2em">Raviteja Medarametla<br/> <small class="text-color-gray">Medicine</small> </p>
        
        </Col>
      </Row>
     </div>
    </Block>
    <BlockFooter>
      Here goes some description￼ is that clear￼
    </BlockFooter>
</Page>