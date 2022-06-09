import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { ButtonComponent } from 'projects/oasys-lib/src/public-api';
import { RouterTestingModule } from '@angular/router/testing';
import { OasysComponentsModule } from './_OasysComponents.module';

// import ButtonDocumentation from './Button.stories.mdx';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule, OasysComponentsModule]
    })
  ],
  // parameters: {
  //   docs : {
  //     page: ButtonDocumentation
  //   }
  // }
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

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
  buttonText: 'Primary CTA',
};

export const Primary2 = Template.bind({});
Primary2.args = {
  buttonType: 'primary-2',
  buttonText: 'Primary-2 CTA',
};

export const Primary3 = Template.bind({});
Primary3.args = {
  buttonType: 'primary-3',
  buttonText: 'Primary-3 CTA',
};
