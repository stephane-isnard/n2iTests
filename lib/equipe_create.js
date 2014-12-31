
   //createEquipe.js
   casper.then(function () {
       test.comment("createEquipe.js");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Créer mon équipe']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Créer mon équipe']"));
           this.click(x("//a[normalize-space(text())='Créer mon équipe']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Créer mon équipe']"));
   });
   casper.waitForSelector("form input[name='nom']",
       function success() {
           test.assertExists("form input[name='nom']");
           this.click("form input[name='nom']");
       },
       function fail() {
           test.assertExists("form input[name='nom']");
   });
   casper.waitForSelector("input[name='nom']",
       function success() {
           this.sendKeys("input[name='nom']", config.equipe.nom);
       },
       function fail() {
           test.assertExists("input[name='nom']");
   });
   casper.waitForSelector("input[name='slogan']",
       function success() {
           this.sendKeys("input[name='slogan']", config.equipe.slogan);
       },
       function fail() {
           test.assertExists("input[name='slogan']");
   });
   casper.waitForSelector("form input[type=submit][value='Ajouter']",
       function success() {
           test.assertExists("form input[type=submit][value='Ajouter']");
           this.click("form input[type=submit][value='Ajouter']");
       },
       function fail() {
           test.assertExists("form input[type=submit][value='Ajouter']");
   });
   /* submit form */
   casper.waitForSelector(x("//*[contains(text(), \'Création effectuée ("+config.equipe.nom+")\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Création effectuée ("+config.equipe.nom+")\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Création effectuée ("+config.equipe.nom+")\')]"));
   });

