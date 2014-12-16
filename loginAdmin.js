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
casper.test.begin('Test', function(test) {
   casper.start(config.URL);
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

   // CAPTURE ECRAN
   casper.then(function () {
       if ( config.capture ) {
           casper.capture("./datas/"+fileSansExt+"/captures/capture.png");
           test.comment("CAPTURE: ./datas/"+fileSansExt+"/captures/capture.png");
       }
   });


   // CAPTURE ECRAN
   casper.then(function () {
       if ( config.capture ) {
           casper.capture("./datas/"+fileSansExt+"/captures/capture.png");
           test.comment("CAPTURE: ./datas/"+fileSansExt+"/captures/capture.png");
       }
   });


//FOOT
   casper.run(function() {test.done();});
});
