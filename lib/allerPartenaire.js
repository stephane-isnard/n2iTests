   // lib/allerPartenaire.js
   casper.then(function () {
       test.comment("allerPartenaire.js");
   });

   casper.waitForSelector(x("//a[normalize-space(text())='Partenaires']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Partenaires']"));
           this.click(x("//a[normalize-space(text())='Partenaires']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Partenaires']"));
   });
