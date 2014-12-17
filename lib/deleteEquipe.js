
  //deleteEquipe.js 
   casper.waitForSelector(x("//a[normalize-space(text())='Supprimer mon equipe']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Supprimer mon equipe']"));
           this.click(x("//a[normalize-space(text())='Supprimer mon equipe']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Supprimer mon equipe']"));
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
   casper.waitForSelector(x("//*[contains(text(), \'Suppression effectuée(Test équipe)\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Suppression effectuée(Test équipe)\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Suppression effectuée(Test équipe)\')]"));
   });
