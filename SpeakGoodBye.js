// Adım 6'da SpeakGoodBye.js'deki bütün içerikler IIFE içine alındı
(function (window) {


// Adım 7'de speak metoduna bağlanacak ve global kullanım için gerekli olan 'byeSpeaker' nesnesi oluşturuldu.
var byeSpeaker = {};


var speakWord = "Good Bye";

// Adım 8'de speak fonksiyonu byeSpeaker objesine bağlanarak yeniden yazıldı.
byeSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}

//Adım 9'da 'byeSpeaker' objesi global scope'a alındı.
window.byeSpeaker = byeSpeaker;

})(window);