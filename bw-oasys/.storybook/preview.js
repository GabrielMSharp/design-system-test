import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

const customViewports = {
  iPhone: {
    name: 'iPhone',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  iPad: {
    name: 'iPad',
    styles: {
      width: '1180px',
      height: '820px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  themes: {
    default: 'bloomon',
    list: [
      { name: 'bloomon', class: 'bloomon', color: '#FF9F80' },
      { name: 'Bloom & Wild', class: 'bloomandwild', color: '#F9ECD7' }
    ],
    clearable: false
  },
  backgrounds: {
    default: 'Neutral',
    values: [
      {
        name: 'Neutral',
        value: '#ddd',
      },
      {
        name: 'linen-20',
        value: '#F9ECD7',
      },
      {
        name: 'light',
        value: '#f7f7f7',
      },
      {
        name: 'dark',
        value: '#262626',
      },
      {
        name: 'blush-light',
        value: '#F8D7BE',
      },
    ],
  },
  viewport: { viewports: customViewports }
}
