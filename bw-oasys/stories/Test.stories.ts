// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
// import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from 'projects/oasys-lib/src/public-api';
import { TestComponent } from './test.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Test',
  component: TestComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [ButtonComponent],      
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
} as Meta;

export const Primarybutton = () => ({
  
});
