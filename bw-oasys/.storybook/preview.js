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
    default: 'twitter',
    list: [
      { name: 'twitter', class: 'theme-twt', color: '#00aced' },
      { name: 'facebook', class: 'theme-fb', color: '#3b5998' }
    ],
  },
}
