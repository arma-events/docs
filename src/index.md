<script setup>
import { onMounted } from 'vue'
import { useRouter, useData } from 'vitepress'

const router = useRouter();

const { site } = useData()
const SUPPORTED_LANGS = Object.keys(site.value.locales); 

onMounted(() => {
    const langs = window.navigator.languages.map(x => x.split('-')[0]);
    const lang = langs.find(x => SUPPORTED_LANGS.includes(x)) ?? 'en';
    
    router.go(`/${lang}/`)
})

</script>
