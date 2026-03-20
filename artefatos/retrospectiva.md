# Relatório de Retrospectiva

## Maiores Desafios Técnicos
* **Configuração da Massa de Dados:** Integrar a leitura de arquivos CSV com o Playwright exigiu o uso da biblioteca `csv-parse`, garantindo que o robô repetisse o ciclo de teste corretamente para cada linha.

## Uso de Inteligência Artificial
* A IA foi utilizada como um "parceiro de pair programming", auxiliando na estruturação rápida do ambiente Node.js e na conversão da lógica de mapeamento de processos para scripts funcionais de automação.
* Auxiliou na criação de cenários de borda que garantem a cobertura de erros do sistema.

## Melhorias Futuras
* Implementar o padrão **Page Objects** para tornar o código mais reutilizável.
* Adicionar testes de acessibilidade automatizados (ex: @axe-core/playwright). 