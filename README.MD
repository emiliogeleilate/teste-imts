
##  Tecnologias Utilizadas

* **Playwright:** Framework de automação de testes moderno e rápido.
* **Node.js:** Ambiente de execução.
* **csv-parse:** Biblioteca para integração e leitura de massa de dados externa.
* **GitHub Actions:** Pipeline de CI/CD configurada para execução automatizada.

---

##  Estrutura do Projeto

A organização foi pensada para separar a lógica de teste da documentação estratégica:

* **`tests/`**: Contém o script principal `calculo_massa.spec.js`.
* **`data/`**: Armazena o arquivo `massa.csv` com os cenários de teste.
* **`artefatos/`**: Documentação detalhada do projeto:
    * `CENARIOS.md`: Mapeamento de casos de teste.
    * `PERFORMANCE.md`: Relatório de tempos de execução e evidências.
    * `PRODUTO.md`: Sugestões de melhorias e uso de IA no produto.
    * `RETROSPECTIVA.md`: Lições aprendidas e desafios técnicos.

---

##  Como Executar o Projeto

Para rodar os testes localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/emiliogeleilate/teste-imts.git](https://github.com/emiliogeleilate/teste-imts.git)
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Execute os testes:**
    ```bash
    npx playwright test
    ```
4.  **Visualize o relatório de execução:**
    ```bash
    npx playwright show-report
    ```
