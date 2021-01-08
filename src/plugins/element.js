import Vue from 'vue'
import {
  Button,
  Container,
  Header,
  Main,
  Menu,
  MenuItem,
  Card,
  Form,
  FormItem,
  Input,
  Avatar,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Message,
} from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'small' }

Vue.use(Button)
Vue.component(Container.name, Container)
Vue.component(Header.name, Header)
Vue.component(Main.name, Main)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Card.name, Card)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(Avatar.name, Avatar)
Vue.component(Dropdown.name, Dropdown)
Vue.component(DropdownMenu.name, DropdownMenu)
Vue.component(DropdownItem.name, DropdownItem)

Vue.prototype.$message = Message
