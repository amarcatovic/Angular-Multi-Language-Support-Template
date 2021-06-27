import { TranslationService } from './../../../utils/services/translation.service';
import { LanguagesService } from './../../../utils/services/languages.service';
import { Component, OnInit } from '@angular/core';
import { Language } from '../../models/language';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  languages: Language[];
  currentLanguage: string;

  constructor (
    private translationService: TranslationService,
    private languagesService: LanguagesService,
  ) { }

  ngOnInit(): void {
    this.languages = this.languagesService.getLanguages() || [];
    this.currentLanguage = this.translationService.getCurrentLanguage();
    this.translationService.onLanguageChange.subscribe((language:string) => {
      this.currentLanguage = language;
    });
  }

  changeLanguage(abbreviation: string): void {
    this.translationService.changeLanguage(abbreviation);
  }

}
