<MyNavBar {title}/>
<BlockTitle class="margin-top" medium>Structure</BlockTitle>
<TopSwiper {tab} on:slideClick={e => handleSlideClick(e.detail.slide)} />
{#if tab === 0 || tab === 1}
<LRPractice {tab}/>
{/if}
{#if tab === 2 || tab === 3}
<WSPractice {tab}/>
{/if}
<slot></slot>

<script>  
import {Page,Block,BlockTitle,BlockHeader,BlockFooter,List,Link,f7,ListItem} from 'framework7-svelte';

export let f7router
export let f7route
export let title = ""
export let tab = 0
import TopSwiper from "../components/topSwiper.svelte";
import MyNavBar from '../components/mynavbar.svelte';
import LRPractice from '../components/lrpractice.svelte';
import WSPractice from '../components/wspractice.svelte';

import {onMount} from "svelte";
import {tabs,tempObj} from "../js/store.js"

function handleSlideClick(slide){f7router.navigate(`/about/${tab}/${slide}/`)}

</script> 
