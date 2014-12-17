
   //createParticipant.js
   casper.then(function () {
       test.comment("createParticipant.js");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Ajouter un participant']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Ajouter un participant']"));
           this.click(x("//a[normalize-space(text())='Ajouter un participant']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Ajouter un participant']"));
   });
   casper.waitForSelector("form input[name='prenom']",
       function success() {
           test.assertExists("form input[name='prenom']");
           this.click("form input[name='prenom']");
       },
       function fail() {
           test.assertExists("form input[name='prenom']");
   });
   casper.waitForSelector("input[name='prenom']",
       function success() {
           this.sendKeys("input[name='prenom']", config.participant.prenom);
       },
       function fail() {
           test.assertExists("input[name='prenom']");
   });
   casper.waitForSelector("form input[name='nom']",
       function success() {
           test.assertExists("form input[name='nom']");
           this.click("form input[name='nom']");
       },
       function fail() {
           test.assertExists("form input[name='nom']");
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
           this.sendKeys("input[name='nom']", config.participant.nom);
       },
       function fail() {
           test.assertExists("input[name='nom']");
   });
   casper.waitForSelector("form input[name='mail']",
       function success() {
           test.assertExists("form input[name='mail']");
           this.click("form input[name='mail']");
       },
       function fail() {
           test.assertExists("form input[name='mail']");
   });
   casper.waitForSelector("input[name='mail']",
       function success() {
           this.sendKeys("input[name='mail']", config.participant.mail);
       },
       function fail() {
           test.assertExists("input[name='mail']");
   });
   casper.waitForSelector("input[name='niveauBac']",
       function success() {
           this.sendKeys("input[name='niveauBac']", config.participant.niveauBac);
       },
       function fail() {
           test.assertExists("input[name='niveauBac']");
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

