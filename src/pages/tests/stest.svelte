<script>
import { View,Popup,Link,Page, NavRight,Navbar, Block, Toolbar,BlockTitle,BlockHeader,Button ,Chip} from 'framework7-svelte';
import {onMount} from 'svelte';

import {tempTest} from '../../js/store.js';

export let f7router

let desc = `<p>Read the case notes and complete the writing task which follows.</p>`

function exit(){
 f7router.back()
}
</script>

<Page noSwipeback noToolbar>
   <Navbar title={"Speaking Test"}>
     <NavRight>
       <Link onClick={exit} >Exit </Link>
     </NavRight>
   </Navbar>
   <h1>Speaking Test!</h1>
</Page>

