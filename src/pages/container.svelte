<script>  
import Image from './_img.svelte';
import Timer from "./_timer.svelte";
import {Page} from "framework7-svelte";
//import {Timeline} from "framework7-svelte";
</script>
<Page themeDark> 

<div class="timeline">
  <!-- Timeline item -->
  <div class="timeline-item">
    <div class="timeline-item-date">21 <small>DEC</small></div>
    <div class="timeline-item-divider"></div>
    <div class="timeline-item-content">Plain text item</div>
  </div>
  <!-- Timeline item with inner -->
  <div class="timeline-item">
    <div class="timeline-item-date">22 <small>DEC</small></div>
    <div class="timeline-item-divider"></div>
    <div class="timeline-item-content">
      <div class="timeline-item-inner">Another text goes here</div>
    </div>
  </div>

</Page> 