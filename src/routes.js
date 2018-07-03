import User from './components/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/UserStart.vue';
import UserEdit from './components/UserEdit.vue';
import UserDetail from './components/UserDetail.vue';


export const routes = [
	{ path : '', component : Home},
	{ path : '/user/', component : User, children : [
	{ path : '', component : UserStart},
	{ path : ':id', component : UserDetail},
	{ path : ':id/edit', component : UserEdit},
	]},
];