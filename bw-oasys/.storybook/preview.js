import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  layout: 'centered',
  themes: {
    default: 'bloomon',
    list: [
      { name: 'bloomon', class: 'bloomon', color: '#FF9F80' },
      { name: 'Bloom & Wild', class: 'bloomandwild', color: '#F9ECD7' }
    ],
  }
}
