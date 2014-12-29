var fs         = require('fs');
var configjson = fs.read('./config/config.json');
var config     = JSON.parse(configjson);
var x          = require('casper').selectXPath;
var filename   = casper.cli.get(0);
var res = filename.split(".");
var fileSansExt= res[0];
casper.options.viewportSize = {width: config.viewportSize.x, height: config.viewportSize.y};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Test url: '+config.url, function(test) {
   casper.start(config.url);
   if(config.authHttp.actif) {
      casper.setHttpAuth(config.authHttp.login, config.authHttp.pwd);
   }


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


   //loginPartenaire.js
   casper.then(function () {
       test.comment("loginPartenaire.js");
   });

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
           this.sendKeys("input[name='login']", retour.partenaire.login);
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
           this.sendKeys("input[name='password']", retour.partenaire.pwd);
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

   // CAPTURE ECRAN
   casper.then(function () {
       if ( config.capture ) {
           var i = 0;
           while(fs.exists("./datas/"+fileSansExt+"/captures/capture-"+i+".png")) {
             i++; 
           }
           casper.capture("./datas/"+fileSansExt+"/captures/capture-"+i+".png");
           test.comment("CAPTURE: ./datas/"+fileSansExt+"/captures/capture-"+i+".png");
       }
   });


   //logout.js
   casper.then(function () {
       test.comment("logout.js");
   });

   casper.waitForSelector(x("//a[normalize-space(text())='Logout']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Logout']"));
           this.click(x("//a[normalize-space(text())='Logout']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Logout']"));
   });
   casper.waitForSelector(x("//*[contains(text(), \'Login\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Login\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Login\')]"));
   });
   casper.then(function () {
       test.comment("     LOGIN ADMIN     ");
   });
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
           this.sendKeys("input[name='login']", config.admin.login);
       },
       function fail() {
           test.assertExists("input[name='login']");
   });
   casper.waitForSelector("input[name='password']",
       function success() {
           this.sendKeys("input[name='password']", config.admin.pwd);
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
   casper.waitForSelector(x("//*[contains(text(), \' admin\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \' admin\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \' admin\')]"));
   });

   //allerEditDefi.js
   casper.then(function () {
       test.comment("allerEditDefi.js");
   });
  casper.waitForSelector(x("//a[normalize-space(text())='"+config.defi.nom+"']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='"+config.defi.nom+"']"));
           this.click(x("//a[normalize-space(text())='Test DEFI']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='"+config.defi.nom+"']"));
   });
   casper.waitForSelector("h1",
       function success() {
           test.assertExists("h1");
           this.click("h1");
       },
       function fail() {
           test.assertExists("h1");
   });
   casper.waitForSelector(x("//*[contains(text(), \'Modifier\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Modifier\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Modifier\')]"));
   });


   //activerDefi.js
   casper.then(function () {
       test.comment("activerDefi.js");
   });

   casper.waitForSelector("form input[name='actif']",
       function success() {
           test.assertExists("form input[name='actif']");
           this.click("form input[name='actif']");
       },
       function fail() {
           test.assertExists("form input[name='actif']");
   });
   casper.waitForSelector("form input[type=submit][value='Modifier']",
       function success() {
           test.assertExists("form input[type=submit][value='Modifier']");
           this.click("form input[type=submit][value='Modifier']");
       },
       function fail() {
           test.assertExists("form input[type=submit][value='Modifier']");
   });
   /* submit form */
   casper.waitForSelector(x("//*[contains(text(), \'Modification effectuée ("+config.defi.nom+")\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Modification effectuée ("+config.defi.nom+")\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Modification effectuée ("+config.defi.nom+")\')]"));
   });

   //logout.js
   casper.then(function () {
       test.comment("logout.js");
   });

   casper.waitForSelector(x("//a[normalize-space(text())='Logout']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Logout']"));
           this.click(x("//a[normalize-space(text())='Logout']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Logout']"));
   });
   casper.waitForSelector(x("//*[contains(text(), \'Login\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Login\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Login\')]"));
   });
   casper.then(function () {
       test.comment("     LOGIN ADMIN     ");
   });
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
           this.sendKeys("input[name='login']", config.admin.login);
       },
       function fail() {
           test.assertExists("input[name='login']");
   });
   casper.waitForSelector("input[name='password']",
       function success() {
           this.sendKeys("input[name='password']", config.admin.pwd);
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
   casper.waitForSelector(x("//*[contains(text(), \' admin\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \' admin\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \' admin\')]"));
   });

   // lib/allerDefi.js
   casper.then(function () {
       test.comment("allerDefi.js");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Défis']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Défis']"));
           this.click(x("//a[normalize-space(text())='Défis']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Défis']"));
   });

   //deleteDefi.js
   casper.then(function () {
       test.comment("deleteDefi.js");
   });

   casper.waitForSelector("a[data-nom='"+config.defi.nom+"']",
       function success() {
           test.assertExists("a[data-nom='"+config.defi.nom+"']");
           this.click("a[data-nom='"+config.defi.nom+"']");
       },
       function fail() {
           test.assertExists("a[data-nom='"+config.defi.nom+"']");
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
   casper.waitForSelector(x("//*[contains(text(), \'Suppression effectuée("+config.defi.nom+")\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Suppression effectuée("+config.defi.nom+")\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Suppression effectuée("+config.defi.nom+")\')]"));
   });
   // lib/allerPartenaire.js
   casper.then(function () {
       test.comment("allerPartenaire.js");
   });

   casper.waitForSelector(x("//a[normalize-space(text())='Partenaires']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Partenaires']"));
           this.click(x("//a[normalize-space(text())='Partenaires']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Partenaires']"));
   });

   //deletePartenaire.js
   casper.then(function () {
       test.comment("deletePartenaire.js");
   });

   casper.waitForSelector("a[data-nom='"+config.partenaire.nom+"']",
       function success() {
           test.assertExists("a[data-nom='"+config.partenaire.nom+"']");
           this.click("a[data-nom='"+config.partenaire.nom+"']");
       },
       function fail() {
           test.assertExists("a[data-nom='"+config.partenaire.nom+"']");
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
   casper.waitForSelector(x("//*[contains(text(), \'Suppression effectuée("+config.partenaire.nom+")\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Suppression effectuée("+config.partenaire.nom+")\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Suppression effectuée("+config.partenaire.nom+")\')]"));
   });

   // CAPTURE ECRAN
   casper.then(function () {
       if ( config.capture ) {
           var i = 0;
           while(fs.exists("./datas/"+fileSansExt+"/captures/capture-"+i+".png")) {
             i++; 
           }
           casper.capture("./datas/"+fileSansExt+"/captures/capture-"+i+".png");
           test.comment("CAPTURE: ./datas/"+fileSansExt+"/captures/capture-"+i+".png");
       }
   });


   //logout.js
   casper.then(function () {
       test.comment("logout.js");
   });

   casper.waitForSelector(x("//a[normalize-space(text())='Logout']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Logout']"));
           this.click(x("//a[normalize-space(text())='Logout']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Logout']"));
   });
   casper.waitForSelector(x("//*[contains(text(), \'Login\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Login\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Login\')]"));
   });

//FOOT
   casper.run(function() {test.done();});
});
