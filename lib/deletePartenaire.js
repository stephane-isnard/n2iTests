
   //deletePartenaire.js
   casper.then(function () {
       test.comment("deletePartenaire.js");
   });

   casper.waitForSelector("a[data-nom='"+config.partenaire.nom+"']",
       function success() {
           test.assertExists("a[data-nom='"+config.partenaire.nom+"']");
           this.click("a[data-nom='"+config.partenaire.nom+"']");
       },
       function fail() {
           test.assertExists("a[data-nom='"+config.partenaire.nom+"']");
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
   casper.waitForSelector(x("//*[contains(text(), \'Suppression effectuée("+config.partenaire.nom+")\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Suppression effectuée("+config.partenaire.nom+")\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Suppression effectuée("+config.partenaire.nom+")\')]"));
   });
