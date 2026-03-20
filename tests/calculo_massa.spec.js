const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

// Localizando o arquivo de massa
const massaDadosPath = path.resolve(__dirname, '../data/massa.csv');
const registros = parse(fs.readFileSync(massaDadosPath), {
  columns: true,
  skip_empty_lines: true
});

for (const dado of registros) {
  test(`Corrigir R$ ${dado.valor} de ${dado.mes_inicial}/${dado.ano_inicial} até ${dado.mes_final}/${dado.ano_final}`, async ({ page }) => {
    
    // Acessa o formulário de correção pelo IPCA
    await page.goto('https://www3.bcb.gov.br/CALCID/publico/exibirFormCorrecaoValores.do?method=exibirFormCorrecaoIndices&idIndice=433');

    // Preenche os campos
    await page.fill('input[name="dataInicial"]', `${dado.mes_inicial}/${dado.ano_inicial}`);
    await page.fill('input[name="dataFinal"]', `${dado.mes_final}/${dado.ano_final}`);
    await page.fill('input[name="valorCorrecao"]', dado.valor);

    // Clica em Corrigir
    await page.click('input[type="submit"]');

    // Valida se o resultado apareceu
    await expect(page.locator('text=Resultado da Correção')).toBeVisible();
  });
}