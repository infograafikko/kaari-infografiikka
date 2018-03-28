window.onload = function () {
    
    var options = {
          useEasing : true, 
          useGrouping : true,
          separator : '', 
          decimal : ',', 
          prefix : '', 
          suffix : '' 
        };
    
    var kavijat = new CountUp("kavijat", 0, 16, 0, 2.8, options);
    var myynti = new CountUp("myynti", 0, 10, 0, 2.3, options);
    var prisma = new CountUp("prisma", 0, 24, 0, 1.8, options);
    var liikkeet = new CountUp("liikkeet", 0, 77, 0, 2.1, options);
    var stadium = new CountUp("stadium", 0, 1000, 0, 2.8, options);


    if (!kavijat.error) {
            kavijat.start();
            myynti.start();
            prisma.start();
            liikkeet.start();
            stadium.start();
        } else {
          console.error(kavijat.error);
        }

}
