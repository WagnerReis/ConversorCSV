var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var leitor = new Reader();

async function main() {
  var dados = await leitor.Read("./users.csv");
  var dadosProcessados = Processor.process(dados);

  var usuarios = new Table(dadosProcessados);

  var html = await HtmlParser.Parse(usuarios);

  console.log(html);
}

main();