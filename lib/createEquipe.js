
   //createEquipe.js
   casper.waitForSelector(x("//a[normalize-space(text())='Login']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Login']"));
           this.click(x("//a[normalize-space(text())='Login']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Login']"));
   });
   casper.waitForSelector("form input[name='login']",
       function success() {
           test.assertExists("form input[name='login']");
           this.click("form input[name='login']");
       },
       function fail() {
           test.assertExists("form input[name='login']");
   });
   casper.waitForSelector("input[name='login']",
       function success() {
           var retour = JSON.parse(fs.read("./datas/"+fileSansExt+"/retour.json"));
           this.sendKeys("input[name='login']", retour.leader.login);
       },
       function fail() {
           test.assertExists("input[name='login']");
   });
   casper.waitForSelector("form input[name='password']",
       function success() {
           test.assertExists("form input[name='password']");
           this.click("form input[name='password']");
       },
       function fail() {
           test.assertExists("form input[name='password']");
   });
   casper.waitForSelector("input[name='password']",
       function success() {
           var retour = JSON.parse(fs.read("./datas/"+fileSansExt+"/retour.json"));
           this.sendKeys("input[name='password']", retour.leader.pwd);
       },
       function fail() {
           test.assertExists("input[name='password']");
   });
   casper.waitForSelector("form input[type=submit][value='Se connecter']",
       function success() {
           test.assertExists("form input[type=submit][value='Se connecter']");
           this.click("form input[type=submit][value='Se connecter']");
       },
       function fail() {
           test.assertExists("form input[type=submit][value='Se connecter']");
   });
   /* submit form */
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

