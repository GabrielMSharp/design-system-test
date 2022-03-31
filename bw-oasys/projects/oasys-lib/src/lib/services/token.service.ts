import { Injectable } from '@angular/core';
import { WindowService } from './window.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private windowRef: WindowService){}
  
  getTokenValue(tokenName: string): string {
    return this.windowRef.nativeWindow.getComputedStyle(
      this.windowRef.nativeWindow.document.documentElement
    ).getPropertyValue(tokenName).trim() || '';
  }
  
}