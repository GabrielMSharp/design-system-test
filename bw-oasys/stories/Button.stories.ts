import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { TextComponent, IconComponent } from 'projects/oasys-lib/src/public-api';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from '../projects/oasys-lib/src/lib/components/button/button.component';

export default {
  title: 'Example/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({ 
      imports: [RouterTestingModule],
      declarations: [TextComponent, IconComponent]
    })
  ],
  subcomponents: [
    TextComponent
  ]
} as Meta;

export const actionsData = {
  buttonClick: action('buttonClick'),
};


const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    ...args,
    buttonClick: actionsData.buttonClick
  },
});

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
  buttonText: 'Default',
};


