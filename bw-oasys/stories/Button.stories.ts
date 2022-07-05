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
  argTypes: {
    buttonDisabled: { control: 'boolean' },
    buttonType: { control: 'radio' },
    buttonIcon: { control: 'select' },
  },
  args: {
    buttonDisabled: false,
  },
  parameters: {
    cssprops: {
      "component-color-button-primary-background": {
        value: "#464646",
        description: "This value is hard coded but if changed the component does update",
      },
    }
  }
} as Meta;


const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    ...args,
  },
});

console.log('template', Template.args);

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
  buttonText: 'Primary CTA',
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: 'secondary',
  buttonText: 'Secondary CTA',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  buttonType: 'tertiary',
  buttonText: 'Tertiary CTA',
};

export const PrimaryInverse = Template.bind({});
PrimaryInverse.args = {
  buttonType: 'primary-inverse',
  buttonText: 'Primary CTA',
};

export const SecondaryInverse = Template.bind({});
SecondaryInverse.args = {
  buttonType: 'secondary-inverse',
  buttonText: 'Seconary CTA',
};
SecondaryInverse.story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const TertiaryInverse = Template.bind({});
TertiaryInverse.args = {
  buttonType: 'tertiary-inverse',
  buttonText: 'Tertiary CTA',
};
TertiaryInverse.story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const expressive = Template.bind({});
expressive.args = {
  buttonType: 'expressive',
  buttonText: 'expressive CTA',
};

export const Danger = Template.bind({});
Danger.args = {
  buttonType: 'danger',
  buttonText: 'Danger CTA',
};

export const Facebook = Template.bind({});
Facebook.args = {
  buttonType: 'facebook',
  buttonText: 'Facebook CTA',
};

export const Paypal = Template.bind({});
Paypal.args = {
  buttonType: 'paypal',
  buttonText: 'Paypal CTA',
};

export const Trustpilot = Template.bind({});
Trustpilot.args = {
  buttonType: 'trustpilot',
  buttonText: 'Trustpilot CTA',
};

