
import SocialPage from '../homepages/socialpage.svelte';
import LPage from '../homepages/lpage.svelte';
import RPage from '../homepages/rpage.svelte';
import WPage from '../homepages/wpage.svelte';

import SPage from '../homepages/spage.svelte';

import HomePage from '../pages/home.svelte';
import BlogPage from '../components/bottomBlog.svelte';
import AboutPage from '../pages/about.svelte';
import FormPage from '../pages/form.svelte';

import Lmock from '../pages/lmock.svelte';
import LpartA from "../pages/lparta.svelte";

import DynamicRoutePage from '../pages/dynamic-route.svelte';
import RequestAndLoad from '../pages/request-and-load.svelte';
import NotFoundPage from '../pages/404.svelte';
import Container from "../pages/container.svelte";
var routes = [
  {
    path : "/LpartA/:part",
    component : LpartA
  },
  {
    path : "/Lmock/:tab/:number",
    component : Lmock
  },
  {
    path : "/blog/:type",
    component : BlogPage
  },
  {
    path : "/SocialPage/",
    component : SocialPage
  },
  {
    path : "/LPage/",
    component : LPage
  },
  {
    path : "/RPage/",
    component : RPage
  },
  {
    path : "/WPage/",
    component : WPage
  },
  {
    path : "/SPage/",
    component : SPage
  },
  {
    path : "/container/",
    component : Container
  },
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/:tab/:slide/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },


  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
