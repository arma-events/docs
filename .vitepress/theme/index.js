// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';

import './index.css';

export default {
  ...DefaultTheme,

  setup() {
    const route = useRoute();
    const initZoom = () => {
      //mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // enable for images with tag ![](path/to/file.jpg){data-zoomable}
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // enable for all images
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};