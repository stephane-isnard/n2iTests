
   //deleteParticipant.js
   casper.then(function () {
       test.comment("deleteParticipant.js");
   });
   casper.waitForSelector("a[data-nom='"+config.participant.prenom+" "+config.participant.nom+"']",
       function success() {
           test.assertExists("a[data-nom='"+config.participant.prenom+" "+config.participant.nom+"']");
           this.click("a[data-nom='"+config.participant.prenom+" "+config.participant.nom+"']");
       },
       function fail() {
           test.assertExists("a[data-nom='"+config.participant.prenom+" "+config.participant.nom+"']");
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
   casper.waitForSelector(x("//*[contains(text(), \'Suppression effectuée("+config.participant.nom+")\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Suppression effectuée("+config.participant.nom+")\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Suppression effectuée("+config.participant.nom+")\')]"));
   });

