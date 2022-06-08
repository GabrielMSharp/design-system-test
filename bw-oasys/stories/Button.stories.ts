import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { TextComponent } from 'projects/oasys-lib/src/public-api';
import { ButtonComponent } from '../projects/oasys-lib/src/lib/components/button/button.component';
import { RouterTestingModule } from '@angular/router/testing';
export default {
  title: 'Example/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({ 
      imports: [RouterTestingModule],
    })
  ],
  subcomponents: [
    TextComponent
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
