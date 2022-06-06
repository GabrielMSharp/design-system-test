// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular';
import { ButtonComponent } from 'oasys-lib';


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: ButtonComponent,

} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Button = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Button.args = {
  buttonType: 'primary',
  buttonText: 'Button',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   buttonType: 'secondary',
//   buttonText: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   buttonSize: 'large',
//   buttonText: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   buttonSize: 'small',
//   buttonText: 'Button',
// };
