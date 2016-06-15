exports.indicator = function(callback){
      var item = Object;

      var tipos = [
      {
            tipoGrupo: "loja",
            descricaoGrupo: "A Loja do iguatemi!",
            titulo: "A Loja do Iquatemi superou as vendas",
            corpo:  "A loja vem vendendo com muita eficiencia as venda, "+
            "A loja vem vendendo com muita eficiencia as venda, "+
            "A loja vem vendendo com muita eficiencia as venda, "+
            "A loja vem vendendo com muita eficiencia as venda!!!"
      },
      {
            tipoGrupo: "loja",
            descricaoGrupo: "A Loja do Zaffari!",
            titulo: "A Loja do Zaffari superou as vendas",
            corpo:  "A loja vem vendendo com muita eficiencia as venda, "+
            "A loja vem vendendo com muita eficiencia as venda, "+
            "A loja vem vendendo com muita eficiencia as venda, "+
            "A loja vem vendendo com muita eficiencia as venda!!!"
      },
      {
            tipoGrupo: "produto",
            descricaoGrupo: "Roupa",
            titulo: "As Roupas superou as vendas",
            corpo:  "As Roupas vem vendendo com muita eficiencia as venda, "+
            "As Roupas vem vendendo com muita eficiencia as venda, "+
            "As Roupas vem vendendo com muita eficiencia as venda, "+
            "As Roupas vem vendendo com muita eficiencia as venda!!!"
      },
      {
            tipoGrupo: "produto",
            descricaoGrupo: "Calçados",
            titulo: "Os Calçados superou as vendas",
            corpo:  "Os Calçados vem vendendo com muita eficiencia as venda, "+
            "Os Calçados vem vendendo com muita eficiencia as venda, "+
            "Os Calçados vem vendendo com muita eficiencia as venda, "+
            "Os Calçados vem vendendo com muita eficiencia as venda!!!"
      },
      {
            tipoGrupo: "categoria",
            descricaoGrupo: "Trajes",
            titulo: "Os Trajes superou as vendas",
            corpo:  "Os Trajes vem vendendo com muita eficiencia as venda, "+
            "Os Trajes vem vendendo com muita eficiencia as venda, "+
            "Os Trajes vem vendendo com muita eficiencia as venda, "+
            "Os Trajes vem vendendo com muita eficiencia as venda!!!"
      },
      {
            tipoGrupo: "categoria",
            descricaoGrupo: "Utencilios",
            titulo: "Os Utencilios superou as vendas",
            corpo:  "Os Utencilios vem vendendo com muita eficiencia as venda, "+
            "Os Utencilios vem vendendo com muita eficiencia as venda, "+
            "Os Utencilios vem vendendo com muita eficiencia as venda, "+
            "Os Utencilios vem vendendo com muita eficiencia as venda!!!"
      }
      ];

      var rndTipo = Math.floor((Math.random() * 6) + 1)-1;

      item = {
            tipoGrupo: tipos[rndTipo].tipoGrupo,
            descricaoGrupo: tipos[rndTipo].descricaoGrupo,
            //idEmpresa: ObjectId("56fd308d71836a3a47d5ede4"),
            data: new Date(),
            tendencia: 1,
            indicador: "media_4_ultimas_semanas",
            tipoDadosComparacao: "vendas",
            valor: 22000.00,
            valorComparacao: 20000.00,
            titulo: tipos[rndTipo].titulo,
            corpo: tipos[rndTipo].corpo
      };

      item.data = new Date();
      item.tendencia = 1;//(item.tendencia * (-1));

      callback(item);
};