import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import tabBar from "@/components/g-tabBar/index"
import uviewPlus from 'uview-plus';
export function createApp() {
	const app = createSSRApp(App);
	app.use(uviewPlus);
	app.component('tabBar', tabBar)
	return {
		app,
	};
}
