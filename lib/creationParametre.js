
   // lib/creationParametre.js
   casper.then(function () {
       test.comment('creationParametre.js');
   });
   casper.waitForSelector(x("//a[@href='"+config.url+"/parametres/create']"),
       function success() {
           test.assertExists(x("//a[@href='"+config.url+"/parametres/create']"));
           this.click(x("//a[@href='"+config.url+"/parametres/create']"));
       },
       function fail() {
           test.assertExists(x("//a[@href='"+config.url+"/parametres/create']"));
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
           this.sendKeys("input[name='nom']", "test");
       },
       function fail() {
           test.assertExists("input[name='nom']");
   });
   casper.waitForSelector("form input[name='valeur']",
       function success() {
           test.assertExists("form input[name='valeur']");
           this.click("form input[name='valeur']");
       },
       function fail() {
           test.assertExists("form input[name='valeur']");
   });
   casper.waitForSelector("input[name='valeur']",
       function success() {
           this.sendKeys("input[name='valeur']", "coucou");
       },
       function fail() {
           test.assertExists("input[name='valeur']");
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
   casper.waitForSelector(".alert.alert-info.alert-dismissible",
       function success() {
           test.assertExists(".alert.alert-info.alert-dismissible");
           this.click(".alert.alert-info.alert-dismissible");
       },
       function fail() {
           test.assertExists(".alert.alert-info.alert-dismissible");
   });
   casper.waitForSelector(".alert.alert-info.alert-dismissible",
       function success() {
           test.assertExists(".alert.alert-info.alert-dismissible");
           this.click(".alert.alert-info.alert-dismissible");
       },
       function fail() {
           test.assertExists(".alert.alert-info.alert-dismissible");
   });
   casper.waitForSelector(x("//*[contains(text(), \'Création effectuée (test coucou)\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Création effectuée (test coucou)\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Création effectuée (test coucou)\')]"));
   });
