<script>  
import {Page,Block,BlockTitle,BlockHeader,BlockFooter,List,Link,f7,ListItem} from 'framework7-svelte';
import {onMount} from "svelte";

import TopSwiper from "../components/topSwiper.svelte";
import MyNavBar from '../components/mynavbar.svelte';
import Practice from '../components/practice.svelte';
import {tabs,tempObj} from "../js/store.js"

export let f7router
export let f7route
export let title = ""
export let tab = 0

function handleSlideClick(slide){f7router.navigate(`/about/${tab}/${slide}/`)}

</script> 


<!--HTML-->
<MyNavBar {title}/>
<BlockTitle class="margin-top" medium>Structure</BlockTitle>
<TopSwiper {tab} on:slideClick={e => handleSlideClick(e.detail.slide)} />
<Practice {f7router} {tab}/>
<slot></slot>
