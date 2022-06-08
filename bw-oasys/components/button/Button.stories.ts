// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';
// import { FakeComponent } from './fakebutton.component';

export default {
  title: 'Example/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent]
    })
  ]
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
  buttonText: 'Default',
};
