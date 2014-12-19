
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
