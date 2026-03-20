# Mapeamento de Cenários de Teste

**Alvo:** Calculadora do Cidadão (BCB) - Índice IPCA
**Tecnologia:** Playwright + Massa de Dados (CSV)

## 1. Cenário: Correção de Valor pelo IPCA (Massa de Dados)
* **Objetivo:** Validar o cálculo de correção monetária utilizando múltiplas entradas via CSV.
* **Tipo:** Positivo / Funcional.
* **Dados:** Consumidos de `data/massa.csv`.
* **Resultado esperado:** O sistema deve processar cada linha e exibir a tabela de "Resultado da Correção".

## 2. Cenário: Data Final Anterior à Inicial
* **Objetivo:** Validar a consistência cronológica do formulário.
* **Tipo:** Negativo.
* **Dados:** Data Inicial: 01/2026 | Data Final: 01/2025.
* **Resultado esperado:** O sistema deve exibir um alerta impeditivo.

## 3. Cenário: Valor de Correção com Limite Mínimo
* **Objetivo:** Testar o comportamento com valor de R$ 0,01.
* **Tipo:** Borda.
* **Resultado esperado:** O sistema deve realizar o cálculo normalmente sem arredondamentos indevidos.

## 4. Cenário: Data Futura sem Índice Disponível
* **Objetivo:** Validar erro ao tentar calcular períodos onde o IPCA ainda não foi divulgado.
* **Tipo:** Negativo.
* **Dados:** Data Final: 12/2026.
* **Resultado esperado:** Mensagem informando que o índice não está disponível para o período.

## 5. Cenário: Navegação e Limpeza de Campos
* **Objetivo:** Validar se o botão "Limpar" limpa todos os inputs do formulário.
* **Tipo:** Funcional / Interface.
* **Resultado esperado:** Todos os campos devem retornar ao estado vazio/padrão.

