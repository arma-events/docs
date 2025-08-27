import config from '../.vitepress/config.mts';

const SUPPORTED_LANGS = Object.keys(config.locales ?? {});

export default {
  async paths() {
    return SUPPORTED_LANGS.map((lang) => ({ params: { lang } }));
  },
};
