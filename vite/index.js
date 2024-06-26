import uniPlugin from '@dcloudio/vite-plugin-uni';

import createAutoImport from './auto-import'
export default function createVitePlugins(isBuild = false) {
    const vitePlugins = [uniPlugin()]
    vitePlugins.push(createAutoImport())
    return vitePlugins
}