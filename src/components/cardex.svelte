<script>  
import {Card,CardHeader,CardContent,Button,Link} from "framework7-svelte"
</script>



<Card expandable>
      <CardContent padding={false}>
        <div class="bg-color-yellow" style="height: 300px">
          <CardHeader textColor="black" class="display-block">
            Framework7
            <br />
            <small style="opacity: 0.7">Build Mobile Apps</small>
          </CardHeader>
          <Link
            cardClose
            color="white"
            class="card-opened-fade-in"
            style="position: absolute; right: 15px; top: 15px"><i class="fas fa-bars"></i></Link>
        </div>
        <div class="card-content-padding">
          <p>
            Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile
            apps or web apps with iOS or Android (Material) native look and feel. It is also an
            indispensable prototyping apps tool to show working app prototype as soon as possible in
            case you need to. Framework7 is created by Vladimir Kharlampidi.
          </p>
          <p>
            The main approach of the Framework7 is to give you an opportunity to create iOS and
            Android (Material) apps with HTML, CSS and JavaScript easily and clear. Framework7 is
            full of freedom. It doesn't limit your imagination or offer ways of any solutions
            somehow. Framework7 gives you freedom!
          </p>
          <p>
            Framework7 is not compatible with all platforms. It is focused only on iOS and Android
            (Material) to bring the best experience and simplicity.
          </p>
          <p>
            Framework7 is definitely for you if you decide to build iOS and Android hybrid app
            (Cordova or PhoneGap) or web app that looks like and feels as great native iOS or
            Android (Material) apps.
          </p>
          <p>
            <Button fill round large cardClose color="red">Close</Button>
          </p>
        </div>
      </CardContent>
    </Card>




<style> 


</style>
