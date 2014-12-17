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
   casper.waitForSelector(x("//*[contains(text(), \' admin\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \' admin\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \' admin\')]"));
   });
