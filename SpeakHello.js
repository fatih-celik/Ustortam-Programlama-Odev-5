// Adım 2'de SpeakHello.js'deki bütün içerikler IIFE içine alındı
(function (window) {

// Adım 3'te speak metoduna bağlanacak ve global kullanım için gerekli olan 'helloSpeaker' nesnesi oluşturuldu.
var helloSpeaker = {};

var speakWord = "Hello";

// Adım 4'te speak fonksiyonu helloSpeaker objesine bağlanarak yeniden yazıldı.
helloSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}


//Adım 5'te 'helloSpeaker' objesi global scope'a alındı
window.helloSpeaker = helloSpeaker;

})(window);