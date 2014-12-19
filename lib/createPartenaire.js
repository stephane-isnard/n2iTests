
   //createPartenaire.js
   casper.then(function () {
       test.comment("createPartenaire.js");
   });

   casper.waitForSelector(x("//a[normalize-space(text())='Inscrire un défi']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Inscrire un défi']"));
           this.click(x("//a[normalize-space(text())='Inscrire un défi']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Inscrire un défi']"));
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
           this.sendKeys("input[name='nom']", config.partenaire.nom);
       },
       function fail() {
           test.assertExists("input[name='nom']");
   });
   casper.waitForSelector("input[name='mail']",
       function success() {
           this.sendKeys("input[name='mail']", config.partenaire.mail);
       },
       function fail() {
           test.assertExists("input[name='mail']");
   });
   casper.waitForSelector("form input[type=submit][value='Envoyer ma demande']",
       function success() {
           test.assertExists("form input[type=submit][value='Envoyer ma demande']");
           this.click("form input[type=submit][value='Envoyer ma demande']");
       },
       function fail() {
           test.assertExists("form input[type=submit][value='Envoyer ma demande']");
   });
   /* submit form */
   casper.waitForSelector(x("//*[contains(text(), \'Création effectuée ("+config.partenaire.nom+").\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Création effectuée ("+config.partenaire.nom+").\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Création effectuée ("+config.partenaire.nom+").\')]"));
   });




   casper.waitForSelector('input[type="hidden"][name="password"]',
       function success() {
           test.assertExists('input[type="hidden"][name="password"]');
           var retour = {};
           retour.partenaire = {};
           retour.partenaire.login = config.partenaire.mail;
           retour.partenaire.pwd   = casper.getElementAttribute('input[type="hidden"][name="password"]', 'value') 
           fs.write("./datas/"+fileSansExt+"/retour.json", JSON.stringify(retour), 'w');
         },
       function fail() {
           test.assertExists('input[type="hidden"][name="password"]');
   });
