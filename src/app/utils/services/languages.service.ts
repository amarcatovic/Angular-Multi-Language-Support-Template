import { Language } from './../../shared/models/language';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  private languages: Language[] = [
    {
      id: 1,
      name: "ENGLISH_LANGUAGE",
      abbreviation: "en",
      iconPath: "assets/imgs/flags/en.svg"
    },
    {
      id: 2,
      name: "BOSNIAN_LANGUAGE",
      abbreviation: "ba",
      iconPath: "assets/imgs/flags/ba.svg"
    },
    {
      id: 1,
      name: "GERMAN_LANGUAGE",
      abbreviation: "de",
      iconPath: "assets/imgs/flags/de.svg"
    },
  ];

  constructor() { }

  getLanguages(): Language[] {
    return this.languages;
  }
}
