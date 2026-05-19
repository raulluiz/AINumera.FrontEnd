# Frontend

Aplicação React responsável por exibir o dashboard de uso da plataforma por cliente, empresa e usuário.

## Tecnologias

- React
- TypeScript
- Vite
- Lucide React
- CSS puro

## Pré-requisitos

- Node.js instalado
- npm instalado
- Backend rodando em `http://localhost:5078`

## Como rodar localmente

Entre na pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Suba o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```text
http://localhost:5173
```

## Configurar URL da API

Por padrão, o frontend chama a API em:

```text
http://localhost:5078
```

Caso o backend esteja em outra URL, crie um arquivo `.env` na pasta `frontend`:

```env
VITE_API_URL=http://localhost:5078
```

## Estrutura principal

- `src/api`: comunicação com o backend
- `src/components`: componentes da tela
- `src/hooks`: carregamento do dashboard
- `src/types`: tipos TypeScript
- `src/utils`: funções auxiliares
- `src/constants`: valores fixos
