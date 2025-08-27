// https://vitepress.dev/guide/custom-theme
import { defineComponent, h, nextTick, onMounted, watch } from 'vue';
import { useRoute, type Theme } from 'vitepress';
import mediumZoom from 'medium-zoom';
import DefaultTheme from 'vitepress/theme';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout: defineComponent(() => {
    const route = useRoute();
    const initZoom = () => {
      if (import.meta.env.SSR) return;
      //mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // enable for images with tag ![](path/to/file.jpg){data-zoomable}
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // enable for all images
    };
    onMounted(() => initZoom());
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    );

    return () =>
      h(DefaultTheme.Layout, null, {
        // https://vitepress.dev/guide/extending-default-theme#layout-slots
      });
  }),
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
