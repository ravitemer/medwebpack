<App { ...f7params } >
 
  <!-- Left panel with cover effect-->
  <!--Panel left cover themeDark>
    <View>
      <Page>
        <Navbar title="Left Panel"/>
        <Block>Left panel content goes here</Block>
      </Page>
    </View>
  </Panel--> 
  
  <!-- Right panel with reveal effect-->
  <!--Panel right reveal themeDark>
    <View>
      <Page>
        <Navbar title="Right Panel"/>
        <Block>Right panel content goes here</Block>
      </Page>
    </View>
  </Panel-->
                            <Views tabs labels class="safe-areas">
                          <MyNavBar />
        <Toolbar id="tool" tabbar bottom>

<Link tabLinkActive tabLink="#view-L"> <i class="fas fa-headphones-alt"></i> </Link>
<Link tabLink="#view-R"> <i class="fas fa-book-reader"></i> </Link>

<Link tabLink="#view-Social"><i style="font-size:25px" class="fas fa-home"></i> </Link>

<Link tabLink="#view-W"> <i class="fas fa-pencil-alt"></i> </Link>
<Link tabLink="#view-S"> <i class="fas fa-user-friends"></i> </Link>
        </Toolbar>
<View id="view-Social" class="safe-areas" name="Social" tab url="/SocialPage/"/>
<View id="view-L" class="safe-areas" name="Listening" tab url="/LPage/"  main tabActive/>
<View id="view-R" class="safe-areas" name="Reading" tab url="/RPage/" />
<View id="view-W" class="safe-areas" name="Writing" tab url="/WPage/" />
<View id="view-S" class="safe-areas" name="Speaking" tab url="/SPage/" />
                            </Views>
<!-- Popup -->

  <Sheet class="demo-sheet">
   
    <PageContent>
      <Block>
        <p>
          Iusto, est corrupti! Totam minus amet praesentium vero temporibus
          obcaecati beatae aspernatur incidunt, perferendis voluptates doloribus?
        </p>
        <p>
          Illum id laborum tempore, doloribus culpa labore ex iusto odit. Quibusdam consequuntur
          totam nam obcaecati, enim cumque nobis, accusamus, quos voluptates, voluptatibus sapiente
          repellendus nesciunt praesentium velit ipsa illo iusto.
        </p>
      </Block>
    </PageContent>
  </Sheet>

 <Popup swipeToClose push id="postPopup" class="demo-popup-push">
    <View>
      <Page>
        <Navbar title="Push Popup" large transparent>
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>
        <Block>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris
            leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac
            urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia
            venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros.
            Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra
            pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero
            mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor.
            Suspendisse a faucibus lectus.
          </p>
       
        </Block>
      </Page>
    </View>
  </Popup>
  
    <Sheet
    class="step"
    style="height: auto"
    swipeToClose
    swipeToStep
    push
    backdrop>
    <div class="swipe-handler" onClick={() => toggleSwipeStep()} />
    <div class="sheet-modal-swipe-step">
      <div class="display-flex padding justify-content-space-between align-items-center">
        <div style="font-size: 18px"><b>Error:</b></div>
        <div style="font-size: 22px"><b>404</b></div>
      </div>
      <div class="padding-horizontal padding-bottom">
        <Button large fill>{$temp.title}</Button>
        <div class="margin-top text-align-center">{$temp.desc}</div>
      </div>
    </div>
  </Sheet>
</App>
<script>
  import { onMount } from 'svelte';
  import { getDevice }  from 'framework7/lite-bundle';
  import MyNavBar from "./mynavbar.svelte";
  import {
    f7,
    f7ready,
    App,
    Panel,
    Sheet,
    Views,
    View,
    Popup,
    Page,
    Navbar,NavLeft,
    Toolbar,
    NavRight,
    Link,
    PageContent,
    Block,
    BlockTitle,
    LoginScreen,
    LoginScreenTitle,
    Button,
    List,
    ListItem,
    ListInput,
    ListButton,
    BlockFooter
  } from 'framework7-svelte';
  //import cordovaApp from '../js/cordova-app';

  import routes from '../js/routes';
 import {temp} from "../js/store.js";
  const device = getDevice();
  // Framework7 Parameters
  let f7params = {
    name: 'Tabs', // App name
    theme: 'auto', // Automatic theme detection
    autoDarkTheme : true,
    panel: {
    swipe: true,
    visibleBreakpoint: 960,
     },
    id: 'io.framework7.myapp', // App bundle ID
    // App store
    //store: store,
    // App routes
    routes: routes,
    // Register service worker
    serviceWorker: {
      path: '../service-worker.js',
    },
    on : {
      init: function () {
      //console.log('App initialized');
     
      },
      tabShow : (t) => {
       
      }
    },

    // Input settings
    input: {
      scrollIntoViewOnFocus: device.cordova && !device.electron,
      scrollIntoViewCentered: device.cordova && !device.electron,
    },
    // Cordova Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };
  onMount(() => {
    f7ready(() => {
      
      if (!f7.online){
        f7.sheet.open(".step")
      }
      // Init cordova APIs (see cordova-app.js)
      if (f7.device.cordova) {
        //cordovaApp.init(f7);
      }

      // Call F7 APIs here
     

    });
  })
  
  function toggleSwipeStep() {
    f7.sheet.stepToggle('.step');
  }
</script>

<style>

:root {
  
   --f7-theme-color: #009688;
  --f7-theme-color-rgb: 0, 150, 136;
  --f7-theme-color-shade: #006d63;
  --f7-theme-color-tint: #00bfad;
  
}

</style>