var ionicPushServer = require('ionic-push-server');

var Credential = {
  IonicApplicationID: "5828a0f6",
  IonicApplicationAPItoken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJlZjhjY2NlOC1kNTIxLTRjYjQtYmExNy0zOWI0NmEzMGI5NDAifQ.Zi1MjVh3xn5FaJCX2G67cJ3EAZwcXjEQ4BHgMuOhsDc"
};

exports.Information = function(token, profile, titulo, corpo, imagem){
  this.token = token;
  this.profile = profile;
  this.titulo = titulo;
  this.corpo = corpo;
  this.imagem = imagem;
}

exports.Send = function(token, Objeto){
  var tokens = [];
  token.forEach(function(data){
    tokens.push(data.token);
  })
  console.log(tokens);
  notifica = {
    "tokens": tokens,
    "profile": "teste",
    "notification": {
      "title": Objeto.titulo,
      "message": Objeto.corpo,
      "android": {
        "data": {
          "title": Objeto.titulo,
          "message": Objeto.corpo,
          "image": "http://i.imgur.com/hIi3Ihv.png",
          "style": "inbox",
          "summaryText": "Há %n% notificações"
        }
      },
      "ios": {
        "data": {
          "title": Objeto.titulo,
          "message": Objeto.corpo,
          "icon": "http://i.imgur.com/hIi3Ihv.png",
          "style": "inbox",
          "summaryText": "Há %n% notificações"
        }
      }
    }
  };
  ionicPushServer(Credential, notifica);
};

//ionicPushServer(Credential, Notification(notifications[0]));

