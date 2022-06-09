import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { TextComponent } from 'projects/oasys-lib/src/public-api';
import { OasysComponentsModule } from './OasysComponents.module';

export default {
  title: 'Components/Text',
  component: TextComponent,
  decorators: [
    moduleMetadata({ 
      imports: [OasysComponentsModule]
    })
  ]
} as Meta;



const Template: Story<TextComponent> = (args: TextComponent) => ({
  props: args,
  template: `<ui-text>{{ ngContent }}</ui-text>`
});

export const Text = Template.bind({});
Text.args = {
  ngContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, metus a finibus congue.',
  // buttonText: 'Default',
};
// Text.template =`
// <ui-text>
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, metus a finibus congue, nibh purus efficitur tellus, id egestas elit neque at odio. Integer sodales odio eget justo sollicitudin tristique. Sed ut tortor tellus. Proin hendrerit elementum semper. Quisque ultrices vitae felis eget ultrices. Phasellus vel placerat magna, ut.
// </ui-text>`
