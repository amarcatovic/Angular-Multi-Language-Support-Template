# Angular i18n | Multi Language Translations

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

## Steps

npm i @ngx-translate/core @ngx-translate/http-loader

Add 

HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => { return new TranslateHttpLoader(http, './assets/i18n/', '.json'); },
        deps: [HttpClient]
      }
    }),

to module.ts

Add i18n folder to assets and create en.json file


