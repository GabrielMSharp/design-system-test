// .storybook/manager.js

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';


addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  theme: themes.dark,
  selectedPanel: 'Docs',
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: false },
    fullscreen: { hidden: true },
  },
});