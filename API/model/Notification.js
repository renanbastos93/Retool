module.exports = {
      attrs: {
            tipoGrupo: String,
            descricaoGrupo: String,
            idEmpresa: String,
            data: Date,
            tendencia: Number,
            indicador: String,
            tipoDadosComparacao: String,
            valor: Number,
            valorComparacao: Number,
            titulo: String,
            corpo: String
      },
      construct: function(tipoGrupo, descricaoGrupo, idEmpresa, data, tendencia, indicador, tipoDadosComparacao, valor, valorComparacao, titulo, corpo){
            this.attrs.tipoGrupo = tipoGrupo;
            this.attrs.descricaoGrupo = descricaoGrupo;
            this.attrs.idEmpresa = idEmpresa;
            this.attrs.data = data;
            this.attrs.tendencia = tendencia;
            this.attrs.indicador = indicador;
            this.attrs.tipoDadosComparacao = tipoDadosComparacao;
            this.attrs.valor = valor;
            this.attrs.valorComparacao = valorComparacao;
            this.attrs.titulo = titulo;
            this.attrs.corpo = corpo;
      },
      constructObj: function(obj){
            this.attrs.tipoGrupo = obj.tipoGrupo;
            this.attrs.descricaoGrupo = obj.descricaoGrupo;
            this.attrs.idEmpresa = obj.idEmpresa;
            this.attrs.data = obj.data;
            this.attrs.tendencia = obj.tendencia;
            this.attrs.indicador = obj.indicador;
            this.attrs.tipoDadosComparacao = obj.tipoDadosComparacao;
            this.attrs.valor = obj.valor;
            this.attrs.valorComparacao = obj.valorComparacao;
            this.attrs.titulo = obj.titulo;
            this.attrs.corpo = obj.corpo;
      },
      getNotification: function(){
            return this.attrs;
      },
      destruct: function(){
            this.attrs.tipoGrupo = '';
            this.attrs.descricaoGrupo = '';
            this.attrs.idEmpresa = '';
            this.attrs.data = '';
            this.attrs.tendencia = '';
            this.attrs.indicador = '';
            this.attrs.tipoDadosComparacao = '';
            this.attrs.valor = '';
            this.attrs.valorComparacao = '';
            this.attrs.titulo = '';
            this.attrs.corpo = '';
      }
};
/*
{
      tipoGrupo: "loja",
      descricaoGrupo: "Retool Praia de Belas",
      idEmpresa: ObjectId("56fd308d71836a3a47d5ede4"),
      data: ISODate("2016-05-11T19:01:37.353Z"),
      tendencia: 1,
      indicador: "media_4_ultimas_semanas",
      tipoDadosComparacao: "vendas",
      valor: 22000.0000000000000000,
      valorComparacao: 20000.0000000000000000,
      titulo: "Retool Praia de Belas – Media Vendas",
      corpo: A loja Retool Praia de belas superou a média de vendas das últimas 4 semanas.""
}
*/