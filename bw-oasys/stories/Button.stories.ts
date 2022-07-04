import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { ButtonComponent } from 'projects/oasys-lib/src/public-api';
import { RouterTestingModule } from '@angular/router/testing';
import { OasysComponentsModule } from './_OasysComponents.module';

// import ButtonDocumentation from './Button.stories.mdx';

export default {
  title: 'Components/Actions/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule, OasysComponentsModule]
    })
  ],
  parameters: {
    cssprops: {
      "component-color-button-primary-background": {
        value: "#464646",
        description: "This value is hard coded but if changed the component does update",
      },
    }
  }
} as Meta;

const actionsData = {
  buttonClick: action('buttonClick'),
};


const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    ...args,
    buttonClick: actionsData.buttonClick
  },
});

console.log('template', Template.args);

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
  buttonText: 'Primary CTA',
};

export const Primary2 = Template.bind({});
Primary2.args = {
  buttonType: 'secondary',
  buttonText: 'Primary-2 CTA',
};

export const Primary3 = Template.bind({});
Primary3.args = {
  buttonType: 'tertiary',
  buttonText: 'Primary-3 Yeah',
};
