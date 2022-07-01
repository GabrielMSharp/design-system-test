import { Injectable } from '@angular/core';
import { WindowService } from './window.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private windowRef: WindowService){}

  /*
  Get the brand name for the currently enable custom property set (ie. /bloomon/variables.css)
  Because variables are scoped via a selector (ie: ':root .bloomon {}')
  we cannot get brand-specific custom properties programatically

  Important: Ensure that the component requiring the brand name has locally scoped the custom property:
  |  ui-icon {
  |    --icon-component-brand: var(--utility-brand-name);
  |  }
  */
  getBrandName(tokenName: string, element: Element): string {
    return this.getTokenValue(tokenName, element);
  }

  getTokenValue(tokenName: string, element?: Element): string {
    const rootElement = element || this.windowRef.nativeWindow.document.documentElement;
    return this.windowRef.nativeWindow.getComputedStyle(rootElement)
      .getPropertyValue(tokenName)
      .trim() || '';
  }

}