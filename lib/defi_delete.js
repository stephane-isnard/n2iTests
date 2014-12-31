
   //deleteDefi.js
   casper.then(function () {
       test.comment("deleteDefi.js");
   });

   casper.waitForSelector("a[data-nom='"+config.defi.nom+"']",
       function success() {
           test.assertExists("a[data-nom='"+config.defi.nom+"']");
           this.click("a[data-nom='"+config.defi.nom+"']");
       },
       function fail() {
           test.assertExists("a[data-nom='"+config.defi.nom+"']");
   });
   casper.waitForSelector("form input[type=submit][value='Supprimer']",
       function success() {
           test.assertExists("form input[type=submit][value='Supprimer']");
           this.click("form input[type=submit][value='Supprimer']");
       },
       function fail() {
           test.assertExists("form input[type=submit][value='Supprimer']");
   });
   /* submit form */
   casper.waitForSelector(x("//*[contains(text(), \'Suppression effectuée("+config.defi.nom+")\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Suppression effectuée("+config.defi.nom+")\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Suppression effectuée("+config.defi.nom+")\')]"));
   });
