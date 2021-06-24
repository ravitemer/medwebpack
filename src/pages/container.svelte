<script>

import {Page,Navbar,Messages,Message,MessagesTitle,Messagebar,MessagebarAttachments,MessagebarAttachment,MessagebarSheet,MessagebarSheetImage,Icon,f7} from "framework7-svelte";
let same = true; 
let sheetVisible = false;
let images = [];
let attachments = [];
let messages = [
  {type : "sent",image:" ",htmlText : "This is my first Message",name:"Raviteja",textFooter:"12:30 pm"},
   {type : "received",image:" ",htmlText : "This is my Reply Message",name:"TejaRavi",textFooter:"12:31pm"},
      {type : "received",image:" ",htmlText : "This is my Reply Message",name:"TejaRavi",textFooter:"12:31pm",sameName:same,sameHeader:same,sameFooter:same,sameAvatar:same}
] 
let messagebarProps = {
  placeholder : "Message",
  attachmentsVisible : false,
  sheetVisible : false,
  value : "",
  onInput: (e) => console.log(e.target.value)
}

</script>

<Page noToolbar name="ChatPage">
<Navbar backLink="Rooms" title="hhhh"/>

<Messagebar {...messagebarProps}>
  <a class="link icon-only" slot="inner-start" on:click={() => sheetVisible = !sheetVisible}> 
      <i class="fas fa-bars"/>
  </a>
  <a class="link icon-only" slot="inner-end">
      <i class="fas fa-pencil-alt"/>
  </a>
  <MessagebarAttachments>
      {#each attachments as image, index (index)}
        <MessagebarAttachment
          key={index}
          image={image}
          onAttachmentDelete={() => {}}
        ></MessagebarAttachment>
      {/each}
    </MessagebarAttachments>
    <MessagebarSheet>
      {#each images as image, index (index)}
        <MessagebarSheetImage
          key={index}
          image={image}
          checked={attachments.indexOf(image) >= 0}
          onChange={{}}
        ></MessagebarSheetImage>
      {/each}
    </MessagebarSheet>
</Messagebar>



<Messages>
 <MessagesTitle><b>Sunday, Feb 9,</b> 12:58</MessagesTitle>
 {#each messages as message,i (i)}
 <Message class="msg" first={false} last={false} tail={false} {...message}/>
 {/each}
 <Message
        type="received"
        typing={true}
        first={false}
        last={true}
        tail={true}
        footer={`Sender is typing`}
       
      ></Message>
</Messages>

</Page>
<style>

</style>