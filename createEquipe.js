var fs         = require('fs');
var configjson = fs.read('config/config.json');
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


   //createLeader.js
   casper.then(function () {
       test.comment("createLeader.js");
   });
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


   //loginLeader.js
   casper.then(function () {
       test.comment("loginLeader.js");
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


  //deleteEquipe.js 
   casper.then(function () {
       test.comment("deleteEquipe.js");
   });
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


//FOOT
   casper.run(function() {test.done();});
});
