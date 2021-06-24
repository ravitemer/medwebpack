<Page>
   <Navbar  large transparent title={type + " letter"} backLink="Back" />
   <BlockTitle medium>Writing Test : {new Number(num) + 1}</BlockTitle>
   <Link href="/WTest/">Continue</Link>
</Page>
<script>
  import { Link,Page, Navbar, Block, BlockTitle } from 'framework7-svelte';
  import {tempTest,tabs} from '../../js/store.js';
  $ : tempTest.set($tabs[2].children["Tests"][type][num])
  export let f7router
  export let f7route;
 let num = f7route.params.number
 let type = f7route.params.type
</script>
