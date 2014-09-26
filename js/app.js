(function(){
  function shuffle(o){ //v1.0
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };
  var app = angular.module("londonWDI7App", []);
  var strings = [];
  app.controller("StudentsController", ["$scope", function($scope){
      $scope.students = shuffle(students);
        for(var i in students) {
          var student = students[i]
          var number = (16-(student.first_name.length));
          var integer = parseInt((Math.random()*number)+1);
          var possible = 'abcdefghijklmnopqrstuvwxyz';
          var stringLength = 16;
          var random = Array.apply(null, new Array(stringLength)).map(function () {
              return possible[Math.floor(Math.random() * possible.length)];
          }).join('');
          var array = random.slice(0, number);
          var newstring = array.substring(0,integer) + student.first_name.toUpperCase() + array.substring(integer);
          student["string"] = newstring
          student["other"] = newstring
          console.log(random)

            };
      $scope.selectStudent = function(student){
        $scope.selectedStudent = student;
      };
      $scope.hoverIn = function(student){
        student["string"] = student.first_name;
          };
      $scope.hoverOut = function(student){
        student["string"] = student.other;
          };
  }]);
  students = [  
    {  
      first_name: "James",
      last_name: "Christie",  
      about: "YOLO skateboard cray pug, meh trust fund blog umami distillery tofu keytar photo booth artisan brunch. Post-ironic deep v Etsy, chia Thundercats Odd Future you probably haven't heard of them tousled selfies. Butcher vinyl stumptown cray, brunch PBR kale chips mumblecore. Aesthetic shabby chic PBR&B, photo booth ennui crucifix selfies wayfarers Bushwick brunch ugh 3 wolf moon freegan Brooklyn. Cosby sweater Intelligentsia sustainable Portland PBR, fixie ethical lo-fi ennui skateboard scenester freegan. Readymade asymmetrical synth mlkshk High Life farm-to-table. Shoreditch chillwave bespoke roof party mlkshk, normcore pork belly retro chia Echo Park semiotics YOLO Helvetica 3 wolf moon try-hard.",  
      image:  "https://avatars2.githubusercontent.com/u/7838784?v=2&s=460", 
      email: "mailto:jwchristie.jc@gmail.com",
      twitter: "https://twitter.com/JameswChristie",
      github: "https://github.com/jchristie55332"
    },  
    {  
      first_name: "Graham",
      last_name: "Curl",  
      about: "YOLO skateboard cray pug, meh trust fund blog umami distillery tofu keytar photo booth artisan brunch. Post-ironic deep v Etsy, chia Thundercats Odd Future you probably haven't heard of them tousled selfies. Butcher vinyl stumptown cray, brunch PBR kale chips mumblecore. Aesthetic shabby chic PBR&B, photo booth ennui crucifix selfies wayfarers Bushwick brunch ugh 3 wolf moon freegan Brooklyn. Cosby sweater Intelligentsia sustainable Portland PBR, fixie ethical lo-fi ennui skateboard scenester freegan. Readymade asymmetrical synth mlkshk High Life farm-to-table. Shoreditch chillwave bespoke roof party mlkshk, normcore pork belly retro chia Echo Park semiotics YOLO Helvetica 3 wolf moon try-hard.",  
      image:  "https://avatars1.githubusercontent.com/u/7911771?v=2&s=460", 
      email: "mailto:gac.curl@googlemail.com",
      twitter: "https://twitter.com/",
      github: "https://github.com/madness7"
    },
    {  
      first_name: "Johanna",
      last_name: "Carlberg",  
      about: "YOLO skateboard cray pug, meh trust fund blog umami distillery tofu keytar photo booth artisan brunch. Post-ironic deep v Etsy, chia Thundercats Odd Future you probably haven't heard of them tousled selfies. Butcher vinyl stumptown cray, brunch PBR kale chips mumblecore. Aesthetic shabby chic PBR&B, photo booth ennui crucifix selfies wayfarers Bushwick brunch ugh 3 wolf moon freegan Brooklyn. Cosby sweater Intelligentsia sustainable Portland PBR, fixie ethical lo-fi ennui skateboard scenester freegan. Readymade asymmetrical synth mlkshk High Life farm-to-table. Shoreditch chillwave bespoke roof party mlkshk, normcore pork belly retro chia Echo Park semiotics YOLO Helvetica 3 wolf moon try-hard.",  
      image:  "https://avatars0.githubusercontent.com/u/4820633?v=2&s=460", 
      email: "mailto:jscarlberg@gmail.com",
      twitter: "https://twitter.com/",
      github: "https://github.com/johannasc"
    },
    {  
      first_name: "Eduardo",
      last_name: "Cordova",    
      about: "YOLO skateboard cray pug, meh trust fund blog umami distillery tofu keytar photo booth artisan brunch. Post-ironic deep v Etsy, chia Thundercats Odd Future you probably haven't heard of them tousled selfies. Butcher vinyl stumptown cray, brunch PBR kale chips mumblecore. Aesthetic shabby chic PBR&B, photo booth ennui crucifix selfies wayfarers Bushwick brunch ugh 3 wolf moon freegan Brooklyn. Cosby sweater Intelligentsia sustainable Portland PBR, fixie ethical lo-fi ennui skateboard scenester freegan. Readymade asymmetrical synth mlkshk High Life farm-to-table. Shoreditch chillwave bespoke roof party mlkshk, normcore pork belly retro chia Echo Park semiotics YOLO Helvetica 3 wolf moon try-hard.",  
      image:  "https://avatars2.githubusercontent.com/u/7901668?v=2&s=460", 
      email: "mailto:eduardo.cordova@penceme.com",
      twitter: "https://twitter.com/",
      github: "https://github.com/ecordova"
    },
    {  
      first_name: "Piers",
      last_name: "Karpinski",  
      about: "YOLO skateboard cray pug, meh trust fund blog umami distillery tofu keytar photo booth artisan brunch. Post-ironic deep v Etsy, chia Thundercats Odd Future you probably haven't heard of them tousled selfies. Butcher vinyl stumptown cray, brunch PBR kale chips mumblecore. Aesthetic shabby chic PBR&B, photo booth ennui crucifix selfies wayfarers Bushwick brunch ugh 3 wolf moon freegan Brooklyn. Cosby sweater Intelligentsia sustainable Portland PBR, fixie ethical lo-fi ennui skateboard scenester freegan. Readymade asymmetrical synth mlkshk High Life farm-to-table. Shoreditch chillwave bespoke roof party mlkshk, normcore pork belly retro chia Echo Park semiotics YOLO Helvetica 3 wolf moon try-hard.",  
      image:  "https://avatars2.githubusercontent.com/u/7806884?v=2&s=460", 
      email: "mailto:piers.karpinski@gmail.com",
      twitter: "https://twitter.com/",
      github: "https://github.com/PiersKarpinski"
    },  
    {  
      first_name: "Sam",
      last_name: "Maton",  
      about: "YOLO skateboard cray pug, meh trust fund blog umami distillery tofu keytar photo booth artisan brunch. Post-ironic deep v Etsy, chia Thundercats Odd Future you probably haven't heard of them tousled selfies. Butcher vinyl stumptown cray, brunch PBR kale chips mumblecore. Aesthetic shabby chic PBR&B, photo booth ennui crucifix selfies wayfarers Bushwick brunch ugh 3 wolf moon freegan Brooklyn. Cosby sweater Intelligentsia sustainable Portland PBR, fixie ethical lo-fi ennui skateboard scenester freegan. Readymade asymmetrical synth mlkshk High Life farm-to-table. Shoreditch chillwave bespoke roof party mlkshk, normcore pork belly retro chia Echo Park semiotics YOLO Helvetica 3 wolf moon try-hard.",  
      image:  "https://avatars1.githubusercontent.com/u/7964931?v=2&s=460", 
      email: "mailto:sam_maton@hotmail.com",
      twitter: "https://twitter.com/",
      github: "https://github.com/smaton1"
    },
    {  
      first_name: "Tobias",
      last_name: "Hale",  
      about: "YOLO skateboard cray pug, meh trust fund blog umami distillery tofu keytar photo booth artisan brunch. Post-ironic deep v Etsy, chia Thundercats Odd Future you probably haven't heard of them tousled selfies. Butcher vinyl stumptown cray, brunch PBR kale chips mumblecore. Aesthetic shabby chic PBR&B, photo booth ennui crucifix selfies wayfarers Bushwick brunch ugh 3 wolf moon freegan Brooklyn. Cosby sweater Intelligentsia sustainable Portland PBR, fixie ethical lo-fi ennui skateboard scenester freegan. Readymade asymmetrical synth mlkshk High Life farm-to-table. Shoreditch chillwave bespoke roof party mlkshk, normcore pork belly retro chia Echo Park semiotics YOLO Helvetica 3 wolf moon try-hard.",  
      image:  "https://avatars1.githubusercontent.com/u/7782211?v=2&s=460", 
      email: "mailto:jthale.android@gmail.com",
      twitter: "https://twitter.com/",
      github: "https://github.com/ThatTobMate"
    },
    {  
      first_name: "Tom",
      last_name: "Walker",    
      about: "YOLO skateboard cray pug, meh trust fund blog umami distillery tofu keytar photo booth artisan brunch. Post-ironic deep v Etsy, chia Thundercats Odd Future you probably haven't heard of them tousled selfies. Butcher vinyl stumptown cray, brunch PBR kale chips mumblecore. Aesthetic shabby chic PBR&B, photo booth ennui crucifix selfies wayfarers Bushwick brunch ugh 3 wolf moon freegan Brooklyn. Cosby sweater Intelligentsia sustainable Portland PBR, fixie ethical lo-fi ennui skateboard scenester freegan. Readymade asymmetrical synth mlkshk High Life farm-to-table. Shoreditch chillwave bespoke roof party mlkshk, normcore pork belly retro chia Echo Park semiotics YOLO Helvetica 3 wolf moon try-hard.",  
      image:  "https://avatars3.githubusercontent.com/u/7816686?v=2&s=460", 
      email: "mailto:tj.walker@live.com",
      twitter: "https://twitter.com/",
      github: "https://github.com/tjwalker2014"
    },
    {  
      first_name: "Alex",
      last_name: "Windett",  
      about: "YOLO skateboard cray pug, meh trust fund blog umami distillery tofu keytar photo booth artisan brunch. Post-ironic deep v Etsy, chia Thundercats Odd Future you probably haven't heard of them tousled selfies. Butcher vinyl stumptown cray, brunch PBR kale chips mumblecore. Aesthetic shabby chic PBR&B, photo booth ennui crucifix selfies wayfarers Bushwick brunch ugh 3 wolf moon freegan Brooklyn. Cosby sweater Intelligentsia sustainable Portland PBR, fixie ethical lo-fi ennui skateboard scenester freegan. Readymade asymmetrical synth mlkshk High Life farm-to-table. Shoreditch chillwave bespoke roof party mlkshk, normcore pork belly retro chia Echo Park semiotics YOLO Helvetica 3 wolf moon try-hard.",  
      image:  "https://avatars2.githubusercontent.com/u/7894325?v=2&s=460", 
      email: "mailto:email@email.com",
      twitter: "https://twitter.com/",
      github: "https://github.com/alex-windett"
    },  
    {  
      first_name: "Andrew",
      last_name: "Fyfe",  
      about: "YOLO skateboard cray pug, meh trust fund blog umami distillery tofu keytar photo booth artisan brunch. Post-ironic deep v Etsy, chia Thundercats Odd Future you probably haven't heard of them tousled selfies. Butcher vinyl stumptown cray, brunch PBR kale chips mumblecore. Aesthetic shabby chic PBR&B, photo booth ennui crucifix selfies wayfarers Bushwick brunch ugh 3 wolf moon freegan Brooklyn. Cosby sweater Intelligentsia sustainable Portland PBR, fixie ethical lo-fi ennui skateboard scenester freegan. Readymade asymmetrical synth mlkshk High Life farm-to-table. Shoreditch chillwave bespoke roof party mlkshk, normcore pork belly retro chia Echo Park semiotics YOLO Helvetica 3 wolf moon try-hard.",  
      image:  "https://avatars2.githubusercontent.com/u/7965116?v=2&s=460", 
      email: "mailto:email@email.com",
      twitter: "https://twitter.com/",
      github: "https://github.com/enumera"
    },
    {  
      first_name: "David",
      last_name: "Rees",  
      about: "YOLO skateboard cray pug, meh trust fund blog umami distillery tofu keytar photo booth artisan brunch. Post-ironic deep v Etsy, chia Thundercats Odd Future you probably haven't heard of them tousled selfies. Butcher vinyl stumptown cray, brunch PBR kale chips mumblecore. Aesthetic shabby chic PBR&B, photo booth ennui crucifix selfies wayfarers Bushwick brunch ugh 3 wolf moon freegan Brooklyn. Cosby sweater Intelligentsia sustainable Portland PBR, fixie ethical lo-fi ennui skateboard scenester freegan. Readymade asymmetrical synth mlkshk High Life farm-to-table. Shoreditch chillwave bespoke roof party mlkshk, normcore pork belly retro chia Echo Park semiotics YOLO Helvetica 3 wolf moon try-hard.",  
      image:  "https://avatars2.githubusercontent.com/u/7965117?v=2&s=460", 
      email: "mailto:email@email.xom",
      twitter: "https://twitter.com/",
      github: "https://github.com/davidarees"
    },
    {  
      first_name: "Gareth",
      last_name: "Roberts",    
      about: "YOLO skateboard cray pug, meh trust fund blog umami distillery tofu keytar photo booth artisan brunch. Post-ironic deep v Etsy, chia Thundercats Odd Future you probably haven't heard of them tousled selfies. Butcher vinyl stumptown cray, brunch PBR kale chips mumblecore. Aesthetic shabby chic PBR&B, photo booth ennui crucifix selfies wayfarers Bushwick brunch ugh 3 wolf moon freegan Brooklyn. Cosby sweater Intelligentsia sustainable Portland PBR, fixie ethical lo-fi ennui skateboard scenester freegan. Readymade asymmetrical synth mlkshk High Life farm-to-table. Shoreditch chillwave bespoke roof party mlkshk, normcore pork belly retro chia Echo Park semiotics YOLO Helvetica 3 wolf moon try-hard.",  
      image:  "https://avatars2.githubusercontent.com/u/4191428?v=2&s=460", 
      email: "mailto:email@email.com",
      twitter: "https://twitter.com/",
      github: "https://github.com/cerico"
    },
    {  
      first_name: "Gwen",
      last_name: "Au",  
      about: "YOLO skateboard cray pug, meh trust fund blog umami distillery tofu keytar photo booth artisan brunch. Post-ironic deep v Etsy, chia Thundercats Odd Future you probably haven't heard of them tousled selfies. Butcher vinyl stumptown cray, brunch PBR kale chips mumblecore. Aesthetic shabby chic PBR&B, photo booth ennui crucifix selfies wayfarers Bushwick brunch ugh 3 wolf moon freegan Brooklyn. Cosby sweater Intelligentsia sustainable Portland PBR, fixie ethical lo-fi ennui skateboard scenester freegan. Readymade asymmetrical synth mlkshk High Life farm-to-table. Shoreditch chillwave bespoke roof party mlkshk, normcore pork belly retro chia Echo Park semiotics YOLO Helvetica 3 wolf moon try-hard.",  
      image:  "https://avatars0.githubusercontent.com/u/7934671?v=2&s=460", 
      email: "mailto:email@email.com",
      twitter: "https://twitter.com/",
      github: "https://github.com/gwenau"
    },  
    {  
      first_name: "Liam",
      last_name: "Collins",  
      about: "YOLO skateboard cray pug, meh trust fund blog umami distillery tofu keytar photo booth artisan brunch. Post-ironic deep v Etsy, chia Thundercats Odd Future you probably haven't heard of them tousled selfies. Butcher vinyl stumptown cray, brunch PBR kale chips mumblecore. Aesthetic shabby chic PBR&B, photo booth ennui crucifix selfies wayfarers Bushwick brunch ugh 3 wolf moon freegan Brooklyn. Cosby sweater Intelligentsia sustainable Portland PBR, fixie ethical lo-fi ennui skateboard scenester freegan. Readymade asymmetrical synth mlkshk High Life farm-to-table. Shoreditch chillwave bespoke roof party mlkshk, normcore pork belly retro chia Echo Park semiotics YOLO Helvetica 3 wolf moon try-hard.",  
      image:  "https://avatars2.githubusercontent.com/u/7957763?v=2&s=460", 
      email: "mailto:email@email.com",
      twitter: "https://twitter.com/",
      github: "https://github.com/liampcollins"
    },
    {  
      first_name: "Toby",
      last_name: "Merlet",  
      about: "YOLO skateboard cray pug, meh trust fund blog umami distillery tofu keytar photo booth artisan brunch. Post-ironic deep v Etsy, chia Thundercats Odd Future you probably haven't heard of them tousled selfies. Butcher vinyl stumptown cray, brunch PBR kale chips mumblecore. Aesthetic shabby chic PBR&B, photo booth ennui crucifix selfies wayfarers Bushwick brunch ugh 3 wolf moon freegan Brooklyn. Cosby sweater Intelligentsia sustainable Portland PBR, fixie ethical lo-fi ennui skateboard scenester freegan. Readymade asymmetrical synth mlkshk High Life farm-to-table. Shoreditch chillwave bespoke roof party mlkshk, normcore pork belly retro chia Echo Park semiotics YOLO Helvetica 3 wolf moon try-hard.",  
      image:  "https://avatars0.githubusercontent.com/u/7794576?v=2&s=460", 
      email: "mailto:email@email.com",
      twitter: "https://twitter.com/",
      github: "https://github.com/tmerlet"
    },
    {  
      first_name: "GA",
      last_name: "WDI 7",    
      about: "YOLO skateboard cray pug, meh trust fund blog umami distillery tofu keytar photo booth artisan brunch. Post-ironic deep v Etsy, chia Thundercats Odd Future you probably haven't heard of them tousled selfies. Butcher vinyl stumptown cray, brunch PBR kale chips mumblecore. Aesthetic shabby chic PBR&B, photo booth ennui crucifix selfies wayfarers Bushwick brunch ugh 3 wolf moon freegan Brooklyn. Cosby sweater Intelligentsia sustainable Portland PBR, fixie ethical lo-fi ennui skateboard scenester freegan. Readymade asymmetrical synth mlkshk High Life farm-to-table. Shoreditch chillwave bespoke roof party mlkshk, normcore pork belly retro chia Echo Park semiotics YOLO Helvetica 3 wolf moon try-hard.",  
      image:  "https://pbs.twimg.com/profile_images/421021208235081728/uM8D51A3.png", 
      email: "mailto:email@email.com",
      twitter: "https://twitter.com/",
      github: "https://github.com/ga-students"
    }
  ]

})();