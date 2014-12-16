   // lib/allerParametres.js
   casper.then(function () {
       test.comment("allerParametres.js");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Parametres']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Parametres']"));
           this.click(x("//a[normalize-space(text())='Parametres']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Parametres']"));
   });
