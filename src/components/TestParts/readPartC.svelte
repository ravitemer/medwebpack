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
    {#each [passage1Obj,passage2Obj] as passage,p (p)}
      <Tab id={`rctab-${p + 1}`} class="no-padding no-margin page-content" tabActive={p === 0}>
           

           
           
      <!--Paragraphs-->
        {#each passage.paragraphs as para,i (i)}
           <Block inset>
             {@html para}
           </Block>
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











<script>  
   import {ListIndex,PageContent,Tabs,Tab,Segmented,Button,Page,BlockTitle,Block,BlockHeader} from 'framework7-svelte';
let activeTab = 0;

function onIndexSelect(itemContent, itemIndex) {
   document.querySelector(`#rcmcq${itemContent}`).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
  }

export let data = {
     "Passage 1" : {"Paragraphs" : {"0" : {para : "",html : {para : ""}}},"0" :
      {desc: {para : ""}, options: {
        "0" : {text : "",to_do : {isChecked : false}}
      }, text: "Regarding genderand ADHD"}
     },
     "Passage 2" : {"Paragraphs" : {"0" : {para : "",html : {para : ""}}},"0" :
      {desc: {para : ""}, options: {
        "0" : {text : "",to_do : {isChecked : false}}
      }, text: "Regarding genderand ADHD"}
     },}
  $ : passage1Mcqs = Object.entries(data["Passage 1"]).filter(([key,value]) => !isNaN(key)).map(([key,value]) => { 
       let desc = value.desc.para
       let options = Object.entries(value.options).filter(([key,value]) => !isNaN(key)).map(([key,value]) => value)
       let text = value.text
    return {desc,options,text}
  })
 $ : passage2Mcqs = Object.entries(data["Passage 2"]).filter(([key,value]) => !isNaN(key)).map(([key,value]) => { 
       let desc = value.desc.para
       let options = Object.entries(value.options).filter(([key,value]) => !isNaN(key)).map(([key,value]) => value)
       let text = value.text
    return {desc,options,text}
  })
$ : passage1Obj = {mcqs : passage1Mcqs, paragraphs : Object.entries(data["Passage 1"]["Paragraphs"]).filter(([key,value]) => !isNaN(key)).map(([key,value]) => value.html.para)}
$ : passage2Obj = {mcqs : passage2Mcqs, paragraphs : Object.entries(data["Passage 2"]["Paragraphs"]).filter(([key,value]) => !isNaN(key)).map(([key,value]) => value.html.para)}

   </script>
