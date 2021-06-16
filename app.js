const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");

var leitor = new Reader();

async function main() {
  var dados = await leitor.Read("./users.csv");
  var dadosProcessados = Processor.process(dados);

  var usuarios = new Table(dadosProcessados);

  console.log(usuarios.RowCount);
  console.log(usuarios.ColumnCount);

}

main();