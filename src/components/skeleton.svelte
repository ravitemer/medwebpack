<script>  
import {Card,SkeletonBlock,Link,CardHeader,CardContent,CardFooter} from "framework7-svelte";

</script>

 
<Card class="skeleton-text skeleton-effect-wave">
      <SkeletonBlock style="height: 100px; border-radius : 8px 8px 0 0;"/>
    <CardHeader>This is a Header</CardHeader>
    
    <CardContent>
  
      <p class="desc">This is a description about the post. It may be short or long doesn't matter because this is a skelton element</p>
        <p class="date">25-10-2021</p>
    </CardContent>
  </Card>
  
  <style> 
:root {
    --f7-card-border-radius: 8px;
    --f7-card-header-font-weight: 350;
    --f7-card-header-font-size: 15px;
  
}

.desc {

  height: 40px; 
  overflow: scroll;
  text-overflow: ellipsis; 
}



</style>