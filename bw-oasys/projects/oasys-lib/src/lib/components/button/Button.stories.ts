// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { FakeComponent } from './fakebutton.component';

export default {
  title: 'Example/Button',
  component: FakeComponent,
  decorators: [
    moduleMetadata({
      declarations: [FakeComponent]
    })
  ]
} as Meta;

const Template: Story<FakeComponent> = (args: FakeComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
  buttonText: 'Default',
};
