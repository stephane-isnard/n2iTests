
   // lib/allerDefi.js
   casper.then(function () {
       test.comment("allerDefi.js");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Défis']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Défis']"));
           this.click(x("//a[normalize-space(text())='Défis']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Défis']"));
   });
