import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(i18n)
// Dynamic meta injection: update document title and meta description on route change
router.afterEach((to) => {
	try {
		const name = String(to.name || '')
		const keyMap: Record<string, string> = {
			Index: 'index',
			Home: 'home',
			About: 'about'
		}
		const pageKey = keyMap[name] || 'index'

		// title: use localized page title if available, otherwise fallback to site title
		const pageTitle = (i18n as any).global.t(`${pageKey}.title`) || (i18n as any).global.t('index.title')
		document.title = `${pageTitle} — ${(i18n as any).global.t('index.title')}`

		// description: try meta.<page>.description, else fallback to index.productDesc
		let description = '' as string
		try {
			description = (i18n as any).global.t(`meta.${pageKey}.description`)
		} catch (e) {
			description = (i18n as any).global.t(`${pageKey}.productDesc`) || ''
		}

		if (description) {
			let descTag = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
			if (!descTag) {
				descTag = document.createElement('meta')
				descTag.setAttribute('name', 'description')
				document.head.appendChild(descTag)
			}
			descTag.setAttribute('content', description)
		}
	} catch (err) {
		// swallow errors to avoid breaking navigation
		// console.warn('meta injection error', err)
	}
})

app.mount('#app')
