<script>  
import {ListIndex,PageContent,Tabs,Tab,Segmented,Button,Page,BlockTitle,Block,BlockHeader} from 'framework7-svelte';

export let desc;
export let data;
 
let activeTab = 0;

function onIndexSelect(itemContent, itemIndex) {
   document.querySelector(`#rcmcq${itemContent}`).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
  }
</script>

<!--HTML-->

<Page hideBarsOnScroll>
     <div class="margin-top-half" style="z-index:2;margin:auto;width:40%">
      <Segmented tabbar position="top">
        <Button onClick={() => activeTab = 0} outline tabLinkActive tabLink={`#rctab-1`}>27-34</Button>
        <Button onClick={() => activeTab = 1} outline tabLink={`#rctab-2`}>35-42</Button>
      </Segmented>
    </div>
    <ListIndex
        indexes={activeTab === 0 ? [27,28,29,30,31,32,33,34] : [35,36,37,38,38,40,41,42]}
        iosItemHeight={20}
        label={true}
        onListIndexSelect={onIndexSelect} />
    <Tabs>
        {#each data as passage,p (p)}
          <Tab id={`rctab-${p + 1}`} class="no-padding no-margin page-content" tabActive={p === 0}>
            <Block>{@html desc}</Block>
            <!--Paragraphs-->
            {#each passage.paragraphs as para,i (i)}
               <Block inset> {@html para}</Block>
            {/each}
            <!--Mcqs-->
            <div class="rcList">
              {#each passage.mcqs as {text,options,desc},m (m)}
                 <Block strong>
                   <h3 id={`rcmcq${p === 0 ? m + 27 : m + 35}`} style="overflow:hidden">{text}</h3>
                   {#each options as op,i (i)}
                     <p>{op.text}</p>
                   {/each}
                 </Block>
              {/each}
            </div>
          </Tab>
       {/each}
    </Tabs>
</Page>










