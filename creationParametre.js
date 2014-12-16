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
   test.comment("     LOGIN ADMIN     ");
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
   // lib/allerParametres.js
   casper.then(function () {
       test.comment("allerParametres.js");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Parametres']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Parametres']"));
           this.click(x("//a[normalize-space(text())='Parametres']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Parametres']"));
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

   // suppressionParametre.js 
   casper.then(function () {
       test.comment('suppressionParametre.js');
   });

   casper.waitForSelector(x("//a[@data-nom='test']"),
       function success() {
           test.assertExists(x("//a[@data-nom='test']"));
           this.click(x("//a[@data-nom='test']"));
       },
       function fail() {
           test.assertExists(x("//a[@data-nom='test']"));
   });
   casper.waitForSelector("form.confirmation input[type=submit][value='Supprimer']",
       function success() {
           test.assertExists("form.confirmation input[type=submit][value='Supprimer']");
           this.click("form.confirmation input[type=submit][value='Supprimer']");
       },
       function fail() {
           test.assertExists("form.confirmation input[type=submit][value='Supprimer']");
   });
   /* submit form */
   casper.waitForSelector(x("//*[contains(text(), \'Suppression effectuée(test coucou)\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Suppression effectuée(test coucou)\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Suppression effectuée(test coucou)\')]"));
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
