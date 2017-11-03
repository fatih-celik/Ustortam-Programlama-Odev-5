// Adım 1'de script.js'deki bütün içerikler IIFE içine alındı
(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim" , "Fatih" , "Hilal" , "Jale"];

// Adım 10'da dizideki isimler üzerinden dönecek ve baş harfine göre 
// helloSpeaker ya da byeSpeaker'a bağlı speak metodunun çalışmasını sağlayan for döngüsü yazıldı
for (var i = 0; i < names.length; i++) {

  // Adım 11'de isimlerin ilk harfinin elde edilmesini sağladık. 
  // charAt yardımıyla ilk harfi alıp toLowerCase yardımıyla büyük, küçük harf durumunu kontrol ettik.
  var ilkHarf = names[i].charAt(0).toLowerCase();


  // Adım 12'de ilk harf j ise baySpeaker, değilse helloSpeaker metodunun çağırılmasını sağlayan koşullu döngü yazıldı.
  if (ilkHarf === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();