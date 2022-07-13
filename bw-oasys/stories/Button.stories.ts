import { Story, Meta, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';

import { OasysButtonComponent } from 'projects/oasys-lib/src/public-api';
import { RouterTestingModule } from '@angular/router/testing';
import { OasysComponentsModule } from './_OasysComponents.module';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
  component: OasysButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule, OasysComponentsModule]
    }),
    componentWrapperDecorator(
      (story) => `<div>{{buttonTextcontent}} ${story}</div>`
    )
  ],
  argTypes: {
    buttonDisabled: { control: 'boolean' },
    buttonFullWidth: { control: 'boolean' },
    buttonType: { control: 'radio' },
    buttonIcon: { control: 'select' }
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

const actionsData = {
  click: action('onClick'),
};

const Template: Story<OasysButtonComponent> = (args: OasysButtonComponent) => ({
  props: {
    ...args,
    click: actionsData.click
  },
  template: `
  <ui-button
  [buttonSize]="buttonSize"
  [buttonFullWidth]="buttonFullWidth"
  [buttonType]="buttonType"
  [buttonDisabled]="buttonDisabled"
  [buttonIcon]="buttonIcon"
  [buttonIconPlacement]="buttonIconPlacement"
  (click)="click($event)">
    <span #buttonText>{{buttonTextContent}}</span>
  </ui-button>

  `
});

console.log('template', Template.args);

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
  buttonTextContent: 'Primary CTA',
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: 'secondary',
  buttonTextContent: 'Secondary CTA',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  buttonType: 'tertiary',
  buttonTextContent: 'Tertiary CTA',
};

export const PrimaryInverse = Template.bind({});
PrimaryInverse.args = {
  buttonType: 'primary-inverse',
  buttonTextContent: 'Primary CTA',
};

export const SecondaryInverse = Template.bind({});
SecondaryInverse.args = {
  buttonType: 'secondary-inverse',
  buttonTextContent: 'Seconary CTA',
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
  buttonTextContent: 'Tertiary CTA',
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
  buttonTextContent: 'expressive CTA',
};

export const Danger = Template.bind({});
Danger.args = {
  buttonType: 'danger',
  buttonTextContent: 'Danger CTA',
};

export const Facebook = Template.bind({});
Facebook.args = {
  buttonType: 'facebook',
  buttonTextContent: 'Facebook CTA',
};

export const Paypal = Template.bind({});
Paypal.args = {
  buttonType: 'paypal',
  buttonTextContent: 'Paypal CTA',
};

export const Trustpilot = Template.bind({});
Trustpilot.args = {
  buttonType: 'trustpilot',
  buttonTextContent: 'Trustpilot CTA',
};

export const LongString = Template.bind({});
LongString.args = {
  buttonType: 'secondary-inverse',
  buttonTextContent: 'Continue without buying a vase and do not save £5',
  buttonIcon: 'pin'
};

