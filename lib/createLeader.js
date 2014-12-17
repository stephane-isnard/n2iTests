
   casper.waitForSelector(x("//a[normalize-space(text())='Inscrire une équipe']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Inscrire une équipe']"));
           this.click(x("//a[normalize-space(text())='Inscrire une équipe']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Inscrire une équipe']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Toulouse']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Toulouse']"));
           this.click(x("//a[normalize-space(text())='Toulouse']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Toulouse']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Cliquer ici pour vous inscrire']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Cliquer ici pour vous inscrire']"));
           this.click(x("//a[normalize-space(text())='Cliquer ici pour vous inscrire']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Cliquer ici pour vous inscrire']"));
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
           this.sendKeys("input[name='prenom']", config.leader.prenom);
       },
       function fail() {
           test.assertExists("input[name='prenom']");
   });
   casper.waitForSelector("input[name='nom']",
       function success() {
           this.sendKeys("input[name='nom']", config.leader.nom);
       },
       function fail() {
           test.assertExists("input[name='nom']");
   });
   casper.waitForSelector("input[name='mail']",
       function success() {
           this.sendKeys("input[name='mail']", config.leader.mail);
       },
       function fail() {
           test.assertExists("input[name='mail']");
   });
   casper.waitForSelector("form input[name='niveauBac']",
       function success() {
           test.assertExists("form input[name='niveauBac']");
           this.click("form input[name='niveauBac']");
       },
       function fail() {
           test.assertExists("form input[name='niveauBac']");
   });
   casper.waitForSelector("input[name='niveauBac']",
       function success() {
           this.sendKeys("input[name='niveauBac']", config.leader.niveauBac);
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
   casper.waitForSelector('input[type="hidden"][name="password"]',
       function success() {
           test.assertExists('input[type="hidden"][name="password"]');
           var retour = {};
           retour.leader = {};
           retour.leader.login = config.leader.mail;
           retour.leader.pwd   = casper.getElementAttribute('input[type="hidden"][name="password"]', 'value') 
           fs.write("./datas/"+fileSansExt+"/retour.json", JSON.stringify(retour), 'w');
         },
       function fail() {
           test.assertExists('input[type="hidden"][name="password"]');
   });

