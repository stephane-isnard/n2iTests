
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

