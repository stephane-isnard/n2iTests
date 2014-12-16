
   // suppressionParametre.js 
   casper.then(function () {
       test.comment('suppressionParametre.js');
   });

   casper.waitForSelector(x("//a[@data-nom='test']"),
       function success() {
           test.assertExists(x("//a[@data-nom='test']"));
           this.click(x("//a[@data-nom='test']"));
       },
       function fail() {
           test.assertExists(x("//a[@data-nom='test']"));
   });
   casper.waitForSelector("form.confirmation input[type=submit][value='Supprimer']",
       function success() {
           test.assertExists("form.confirmation input[type=submit][value='Supprimer']");
           this.click("form.confirmation input[type=submit][value='Supprimer']");
       },
       function fail() {
           test.assertExists("form.confirmation input[type=submit][value='Supprimer']");
   });
   /* submit form */
   casper.waitForSelector(x("//*[contains(text(), \'Suppression effectuée(test coucou)\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Suppression effectuée(test coucou)\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Suppression effectuée(test coucou)\')]"));
   });
