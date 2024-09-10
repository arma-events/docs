<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter();

const SUPPORTED_LANGS = ['de', 'en']; 

onMounted(() => {
    const langs = window.navigator.languages.map(x => x.split('-')[0]);
    const lang = langs.find(x => SUPPORTED_LANGS.includes(x)) ?? 'en';
    
    router.go(`/${lang}/`)
})

</script>
