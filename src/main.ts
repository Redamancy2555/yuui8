import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
const app = createApp(App)
import { NavBar,Form, Field, CellGroup,Button,Tabbar, TabbarItem,Swipe, SwipeItem,Col, Row,Sidebar, SidebarItem  } from 'vant';
app.use(NavBar);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Button);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Swipe);
app.use(SwipeItem);
app.use(Col);
app.use(Row);
app.use(Sidebar);
app.use(SidebarItem);


app.use(store).use(router).mount('#app')

