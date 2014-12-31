
   //allerEditDefi.js
   casper.then(function () {
       test.comment("allerEditDefi.js");
   });
  casper.waitForSelector(x("//a[normalize-space(text())='"+config.defi.nom+"']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='"+config.defi.nom+"']"));
           this.click(x("//a[normalize-space(text())='Test DEFI']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='"+config.defi.nom+"']"));
   });
   casper.waitForSelector("h1",
       function success() {
           test.assertExists("h1");
           this.click("h1");
       },
       function fail() {
           test.assertExists("h1");
   });
   casper.waitForSelector(x("//*[contains(text(), \'Modifier\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Modifier\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Modifier\')]"));
   });

