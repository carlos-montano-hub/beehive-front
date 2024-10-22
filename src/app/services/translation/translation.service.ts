import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language, languages } from './languages-list';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private _currentLanguage: Language = languages[0];
  private readonly languageStorageKey = 'selectedLanguage';

  constructor(
    private readonly translateService: TranslateService,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const savedLangKey = localStorage.getItem(this.languageStorageKey);
      if (savedLangKey) {
        this.setLanguage(savedLangKey);
        this.translateService.setDefaultLang(this._currentLanguage.key);
      }
    }
  }

  get currentLanguage() {
    return this._currentLanguage;
  }

  private setLanguage(langKey: string) {
    this._currentLanguage =
      languages.find((lang) => lang.key === langKey) ?? languages[0];
    this.translateService.use(this._currentLanguage.key);
  }

  changeLang(langKey: string) {
    this.setLanguage(langKey);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.languageStorageKey, this._currentLanguage.key);
    }
  }
}
