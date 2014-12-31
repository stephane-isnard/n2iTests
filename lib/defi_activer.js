
   //activerDefi.js
   casper.then(function () {
       test.comment("activerDefi.js");
   });

   casper.waitForSelector("form input[name='actif']",
       function success() {
           test.assertExists("form input[name='actif']");
           this.click("form input[name='actif']");
       },
       function fail() {
           test.assertExists("form input[name='actif']");
   });
   casper.waitForSelector("form input[type=submit][value='Modifier']",
       function success() {
           test.assertExists("form input[type=submit][value='Modifier']");
           this.click("form input[type=submit][value='Modifier']");
       },
       function fail() {
           test.assertExists("form input[type=submit][value='Modifier']");
   });
   /* submit form */
   casper.waitForSelector(x("//*[contains(text(), \'Modification effectuée ("+config.defi.nom+")\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Modification effectuée ("+config.defi.nom+")\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Modification effectuée ("+config.defi.nom+")\')]"));
   });
