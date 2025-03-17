import { defineConfig } from 'vitepress';
import vi from './config/vi';
import en from './config/en';

export default defineConfig({
  title: "VBot",
  description: "VBot tổng đài AI đa tính năng!",
  titleTemplate: 'Tổng đài AI đa tính năng - VBot',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/app-logo.png' }]],
  locales: {
    vi,
    en
  },
  themeConfig: {
    logo: "/app-logo.png",
    search: {
      provider: 'local' 
    },
  },
});
