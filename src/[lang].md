<script setup>
import { useRouter, useData } from 'vitepress'

const router = useRouter();
const { params } = useData()

router.go(`/${params.value.lang}/`)
</script>
