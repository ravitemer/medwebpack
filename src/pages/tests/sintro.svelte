<Page>
   <Navbar  large transparent title={"Speaking sub-test"} backLink="Back" />
   <BlockTitle medium>{subtitle}</BlockTitle>
   <Block>
     <p></p>
     <Button href="/WTest/">Continue</Button>
   </Block>
</Page>
<script>
import { Button,Link,Page, Navbar, Block, BlockTitle } from 'framework7-svelte';
import {tempTest,tabs} from '../../js/store.js';
//cccccccccccccccccc
$ : tempTest.set($tabs[3].children["Tests"]["tests"][title])
export let f7router
export let f7route;
let subtitle = f7route.params.title
let type = f7route.params.type
</script>
