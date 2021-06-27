/**
 * Framework7 6.0.17
 * Full featured mobile HTML framework for building iOS & Android apps
 * https://framework7.io/
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 30, 2021
 */

//import $ from './shared/dom7';
import Framework7 from '../../node_modules/framework7/esm/components/app/app-class';
//import request from './shared/request';
//import * as utils from './shared/utils';
//import { getSupport } from './shared/get-support';
//import { getDevice } from './shared/get-device';
//import DeviceModule from '../../node_modules/framework7/esm/modules/device/device';
//import SupportModule from '../../node_modules/framework7/esm/modules/support/support';
//import UtilsModule from '../../node_modules/framework7/esm/modules/utils/utils';
//import ResizeModule from '../../node_modules/framework7/esm/modules/resize/resize';
//import RequestModule from '../../node_modules/framework7/esm/modules/request/request';
//import TouchModule from '../../node_modules/framework7/esm/modules/touch/touch';
//import ClicksModule from '../../node_modules/framework7/esm/modules/clicks/clicks';
//import RouterModule from '../../node_modules/framework7/esm/modules/router/router';
//import HistoryModule from '../../node_modules/framework7/esm/modules/history/history';
//import ServiceWorkerModule from '../../node_modules/framework7/esm/modules/service-worker/service-worker';
//import StoreModule, { createStore } from '../../node_modules/framework7/esm/modules/store/store';
////import Statusbar from '../../node_modules/framework7/esm/components/statusbar/statusbar';
import View from '../../node_modules/framework7/esm/components/view/view';
////import Navbar from '../../node_modules/framework7/esm/components/navbar/navbar';
////import Toolbar from '../../node_modules/framework7/esm/components/toolbar/toolbar';
////import Subnavbar from '../../node_modules/framework7/esm/components/subnavbar/subnavbar';
////import TouchRipple from '../../node_modules/framework7/esm/components/touch-ripple/touch-ripple';
//import Modal from '../../node_modules/framework7/esm/components/modal/modal';
//import Appbar from '../../node_modules/framework7/esm/components/appbar/appbar';
//import Dialog from '../../node_modules/framework7/esm/components/dialog/dialog';
import Popup from '../../node_modules/framework7/esm/components/popup/popup';
//import LoginScreen from './components/login-screen/login-screen';
////import Popover from '../../node_modules/framework7/esm/components/popover/popover';
//import Actions from './components/actions/actions';
import Sheet from '../../node_modules/framework7/esm/components/sheet/sheet';
// import Toast from './components/toast/toast';
////import Preloader from '../../node_modules/framework7/esm/components/preloader/preloader'; 
//import Progressbar from './components/progressbar/progressbar';
//import Sortable from './components/sortable/sortable';
//import Swipeout from './components/swipeout/swipeout';
import Accordion from '../../node_modules/framework7/esm/components/accordion/accordion';
//import ContactsList from './components/contacts-list/contacts-list';
//import VirtualList from './components/virtual-list/virtual-list';
////import ListIndex from '../../node_modules/framework7/esm/components/list-index/list-index';
////import Timeline from '../../node_modules/framework7/esm/components/timeline/timeline';
import Tabs from '../../node_modules/framework7/esm/components/tabs/tabs';
//import Panel from './components/panel/panel';
////import Card from '../../node_modules/framework7/esm/components/card/card';
////import Chip from '../../node_modules/framework7/esm/components/chip/chip';
// import Form from './components/form/form';
//import Input from '../../node_modules/framework7/esm/components/input/input';
////import Checkbox from '../../node_modules/framework7/esm/components/checkbox/checkbox';
//import Radio from './components/radio/radio';
//import Toggle from './components/toggle/toggle';
//import Range from './components/range/range';
//import Stepper from './components/stepper/stepper';
//import SmartSelect from './components/smart-select/smart-select';
//import Grid from '../../node_modules/framework7/esm/components/grid/grid';
//import Calendar from './components/calendar/calendar';
//import Picker from './components/picker/picker';
//import InfiniteScroll from './components/infinite-scroll/infinite-scroll';
import PullToRefresh from '../../node_modules/framework7/esm/components/pull-to-refresh/pull-to-refresh';
////import Lazy from '../../node_modules/framework7/esm/components/lazy/lazy';
//import DataTable from './components/data-table/data-table';
//import Fab from './components/fab/fab';
////import Searchbar from '../../node_modules/framework7/esm/components/searchbar/searchbar';
//import Messages from '../../node_modules/framework7/esm/components/messages/messages';
//import Messagebar from '../../node_modules/framework7/esm/components/messagebar/messagebar';
////import Swiper from '../../node_modules/framework7/esm/components/swiper/swiper';
//import PhotoBrowser from './components/photo-browser/photo-browser';
//import Notification from './components/notification/notification';
//import Autocomplete from './components/autocomplete/autocomplete';
//import Tooltip from './components/tooltip/tooltip';
////import Skeleton from '../../node_modules/framework7/esm/components/skeleton/skeleton';
//import Menu from './components/menu/menu';
//import ColorPicker from './components/color-picker/color-picker';
//import Treeview from './components/treeview/treeview';
//import TextEditor from './components/text-editor/text-editor';
//import Elevation from '../../node_modules/framework7/esm/components/elevation/elevation';
//import Typography from '../../node_modules/framework7/esm/components/typography/typography';
Framework7.use([
  //DeviceModule, 
  //SupportModule, 
  //UtilsModule, 
  //ResizeModule, 
  //RequestModule, 
  //TouchModule, 
  //ClicksModule, 
  //RouterModule, 
  //HistoryModule, 
  //ServiceWorkerModule, 
  //StoreModule, 
  //Statusbar, 
  //View, 
  //Navbar, 
  //Toolbar, 
  //Subnavbar, 
  //TouchRipple, 
  //Modal, 
  //Appbar, 
  //Dialog, 
  Popup, 
  //LoginScreen, 
  //Popover, 
  //Actions, 
  Sheet, 
  //Toast, 
  //Preloader, 
  //Progressbar, 
  //Sortable, 
  //Swipeout, 
  Accordion, 
  //ContactsList, 
  //VirtualList, 
  //ListIndex, 
  // Timeline, 
  Tabs, 
  //Panel, 
  //Card, 
  //Chip, 
  //Form, 
//Input, 
  //Checkbox, 
  //Radio, 
  //Toggle, 
  //Range, 
  //Stepper, 
  //SmartSelect, 
  //Grid, 
  //Calendar, 
  //Picker, 
  //InfiniteScroll, 
  PullToRefresh, 
  //Lazy, 
  //DataTable, 
  //Fab, 
  //Searchbar, 
  //Messages, 
  //Messagebar, 
  //Swiper, 
  //PhotoBrowser, 
  //Notification, 
  //Autocomplete, 
  //Tooltip, 
  //Skeleton, 
  //Menu, 
  //ColorPicker, 
  //Treeview, 
  //TextEditor, 
  //Typography,
 //Elevation
 ]);
//export { $ as Dom7, getDevice, getSupport, createStore };
export default Framework7;
