// Teste de conversão dos arquivos OFX para JSON

const fs = require('fs');
const ofx = require('ofx-convertjs');

const file = fs.readFileSync('file.ofx', 'utf8')
const data = ofx.toJson(file);

const content = JSON.stringify(data)

try {
  fs.writeFileSync('file.json', content);
  // arquivo gravado com sucesso
} catch (err) {
  console.error(err);
}
