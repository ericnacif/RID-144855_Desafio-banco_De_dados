```mermaid
erDiagram
    Clientes {
        int id PK
        varchar nome
        varchar email
        varchar telefone
        timestamp data_cadastro
    }

    Vendas {
        int id PK
        int cliente_id FK
        timestamp data_venda
        decimal valor_total
        varchar status_pedido
    }

    ItensVenda {
        int id PK
        int venda_id FK
        int produto_id FK
        int quantidade
        decimal preco_unitario
    }

    Produtos {
        int id PK
        varchar nome
        text descricao
        decimal preco
        int quantidade_estoque
        timestamp data_criacao
    }

    Clientes ||--o{ Vendas : "realiza"
    Vendas ||--|{ ItensVenda : "contém"
    Produtos ||--o{ ItensVenda : "é vendido em"
