<script>  
import {Card,CardHeader,CardContent,CardFooter,Link} from "framework7-svelte"
export let fields;
function style(src){
  return `background-image: url(${src});`
}
</script>

<Card class="demo-card-header-pic">
    <div style="--img : url({fields.imgurl})" class="no-border no-margin header">
   
    </div>
    <CardHeader>{fields.title}</CardHeader>
    
    <CardContent>
      <p class="desc">{fields.description}</p>
      <div class="display-flex justify-content-space-between">
       <span class="date text-color-gray">{fields.postdate}</span>
       <span><Link> Read more</Link></span>
      </div> 
    </CardContent>
   
  </Card>





<style> 
:root {
    --f7-card-border-radius: 8px;
    --f7-card-header-font-weight: 400;
    --f7-card-header-font-size: 16px;
  
}

.desc {

  max-height: 40px; 
  overflow: scroll;
  text-overflow: ellipsis; 
}


.header {
  border-radius : 8px 8px 0 0;
 
  background-image: var(--img); /* The image used */
 /* Used if the image is unavailable */
  height: 100px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}


</style>
