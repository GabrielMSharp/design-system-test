import { componentWrapperDecorator, Meta, moduleMetadata } from '@storybook/angular';
import { TestComponent } from './test.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Test',
  component: TestComponent,
  decorators: [
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
} as Meta;

export const Primarybutton = () => ({
  
});
