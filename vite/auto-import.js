/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入
 */
import AutoImport from 'unplugin-auto-import/vite';

export default function createAutoImport() {
    return AutoImport({
        imports: ['vue', 'uni-app', 'pinia'],
        dts: false,
        vueTemplate: true,
    })
}