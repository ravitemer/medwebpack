  <Navbar sliding><NavLeft><h2 id="logo">{title}</h2></NavLeft>
 
     <NavRight sliding> 
       <Link icon="fas fa-user-md" onClick={() => trigger.set("profile")} popupOpen="#envPopup"></Link>  
       <Link icon="fas fa-cogs" onClick={() => trigger.set("settings")} popupOpen="#envPopup"></Link> 
     </NavRight>
  </Navbar>
 
 <script>
 import {Navbar,NavLeft,NavRight,Link} from "framework7-svelte";
 
 import {trigger} from "../js/store.js"
 export let title = "Ace Oet"
 </script>
 
 <style> 
 #logo {
  font-family : noteworthy;
  padding : 5px;
}
 
 
 </style>
 