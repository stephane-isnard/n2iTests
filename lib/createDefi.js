
   //createDefi.js
   casper.then(function () {
       test.comment("createDefi.js");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Créer un défi']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Créer un défi']"));
           this.click(x("//a[normalize-space(text())='Créer un défi']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Créer un défi']"));
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
           this.sendKeys("input[name='nom']", config.defi.nom);
       },
       function fail() {
           test.assertExists("input[name='nom']");
   });
   casper.waitForSelector("form input[name='parrain']",
       function success() {
           test.assertExists("form input[name='parrain']");
           this.click("form input[name='parrain']");
       },
       function fail() {
           test.assertExists("form input[name='parrain']");
   });
   casper.waitForSelector("input[name='parrain']",
       function success() {
           this.sendKeys("input[name='parrain']", config.defi.parrain);
       },
       function fail() {
           test.assertExists("input[name='parrain']");
   });
   casper.waitForSelector("form input[name='parrainMail']",
       function success() {
           test.assertExists("form input[name='parrainMail']");
           this.click("form input[name='parrainMail']");
       },
       function fail() {
           test.assertExists("form input[name='parrainMail']");
   });
   casper.waitForSelector("input[name='parrainMail']",
       function success() {
           this.sendKeys("input[name='parrainMail']", config.defi.parrainMail);
       },
       function fail() {
           test.assertExists("input[name='parrainMail']");
   });
   casper.waitForSelector("#site_id",
       function success() {
           test.assertExists("#site_id");
           this.click("#site_id");
       },
       function fail() {
           test.assertExists("#site_id");
   });
   casper.waitForSelector("input[name='charteAcceptee']",
       function success() {
           test.assertExists("input[name='charteAcceptee']");
           this.click("input[name='charteAcceptee']");
       },
       function fail() {
           test.assertExists("input[name='charteAcceptee']");
   });
   casper.waitForSelector("input[type=submit][value='Ajouter']",
       function success() {
           test.assertExists("input[type=submit][value='Ajouter']");
           this.click("input[type=submit][value='Ajouter']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Ajouter']");
   });
   /* submit form */
