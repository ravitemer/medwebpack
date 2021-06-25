<script>
import { Button,Link,Page, Navbar, Block, BlockTitle } from 'framework7-svelte';

import {tempTest,tabs} from '../../js/store.js';

export let f7router
export let f7route;

let tab = f7route.params.tab
let tabTitle = tab === "0" ? "Listening" : tab === "1" ? "Reading" : tab === "2" ? "Writing" : "Speaking"
let testTitle = f7route.params.testTitle
let subTestHref = tab === "0" ? "/LTest/" : tab === "1" ? "/RTest/" : tab === "2" ? "/WTest/" : "/STest/" 

//cccccccccccccccccc
let thisTab = $tabs[tab].children
const subTestIntro = thisTab["Intro"].para
const testsOfThisTab = thisTab["Tests"]["tests"]
const currentTest = testsOfThisTab[testTitle]
$ : tempTest.set(currentTest)

</script>

<!--HTML-->
<Page>
   <Navbar  large transparent title={`${tabTitle} sub-test`} backLink="Back" />
   <BlockTitle medium>{testTitle}</BlockTitle>
   <Block>
     {@html subTestIntro}
     <div style="width:70%;margin:auto;">
        <Button href={subTestHref}>Continue</Button>
     </div>
   </Block>
</Page>
