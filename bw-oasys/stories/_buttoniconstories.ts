// import { Story, Meta, moduleMetadata } from '@storybook/angular';
// import { action } from '@storybook/addon-actions';

// import { OasysButtonComponent } from 'projects/oasys-lib/src/public-api';
// import { RouterTestingModule } from '@angular/router/testing';
// import { OasysComponentsModule } from './_OasysComponents.module';

// // import ButtonDocumentation from './Button.stories.mdx';

// export default {
//   title: 'Components/Actions/Icon Button',
//   component: OasysButtonComponent,
//   decorators: [
//     moduleMetadata({
//       imports: [RouterTestingModule, OasysComponentsModule]
//     })
//   ]
// } as Meta;

// const actionsData = {
//   buttonClick: action('buttonClick'),
// };


// const Template: Story<OasysButtonComponent> = (args: OasysButtonComponent) => ({
//   props: {
//     ...args,
//     buttonClick: actionsData.buttonClick
//   },
// });

// console.log('template', Template.args);

// export const Bloomandwild  = Template.bind({});
// Bloomandwild.args = {
//   buttonType: 'primary',
//   // buttonText: 'Primary CTA',
//   buttonIcon: 'basket'
// };
// Bloomandwild.story = {
//   parameters: {
//     themes: {
//       default: 'Bloom & Wild',
//     },
//   },
// };

// export const Bloomon  = Template.bind({});
// Bloomon.args = {
//   buttonType: 'primary',
//   // buttonText: 'Primary CTA',
//   buttonIcon: 'basket'
// };
// Bloomon.story = {
//   parameters: {
//     themes: {
//       default: 'bloomon',
//     },
//   },
// };
