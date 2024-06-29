import {
	createSSRApp
} from "vue";
import * as Pinia from "pinia";
import { createUnistorage } from 'pinia-plugin-unistorage'
import App from "./App.vue";
import tabBar from "@/components/g-tabBar/index"
export function createApp() {
	const app = createSSRApp(App);
	app.component('tabBar', tabBar)
	//1.创建pinia的实例
	const pinia = Pinia.createPinia();
	//2.持久化数据配置
	pinia.use(createUnistorage());
	//3.注册到app实例中
	app.use(pinia);
	return {
		app,
		pinia
	};
}
