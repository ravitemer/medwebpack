<script>  
import {Page,Block,BlockTitle,BlockFooter,BlockHeader,Navbar,NavLeft,NavRight,Link,PageContent} from "framework7-svelte";


</script>

<Page>
  <Navbar large transparent title="Settings">
    <NavRight>
      <Link popupClose>Close</Link>
    </NavRight>
  </Navbar>
  <PageContent>
    <Block strong>
        <img alt="profile-pic" src={"https://i.picsum.photos/id/237/200/300.jpg"}/>
      this is a Block which contains some content can be of 10 words change it to whatever you may like￼
    </Block>
    <BlockFooter>
      Here goes some description￼ is that clear￼
    </BlockFooter>
  </PageContent>
</Page>