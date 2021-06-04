  <Navbar sliding><NavLeft><h2 id="logo">{name}</h2></NavLeft><NavRight sliding> <Link icon="fas fa-user-md" popupOpen="right"></Link>  <Link icon="fas fa-bars" popupOpen="right"></Link> </NavRight></Navbar>
 
 <script>
 import {Navbar,NavLeft,NavRight,Link} from "framework7-svelte";
 export let name = "Ace Oet"
 </script>
 
 <style> 
 #logo {
  font-family : noteworthy;
  padding : 5px;
}
 
 
 </style>
 