# HyWar Discord Bot

Bot simples em Node.js que responde ao comando `!ip` com um embed bonito no Discord.

## Requisitos

- Node.js 18+
- Um bot criado no [Discord Developer Portal](https://discord.com/developers/applications)

## Configuração

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Copie o arquivo de exemplo e preencha o token do bot:
   ```bash
   cp .env.example .env
   ```
3. Inicie o bot:
   ```bash
   npm start
   ```

## Uso

No servidor do Discord onde o bot está presente, digite `!ip` em um canal de texto.
O bot irá responder com um embed contendo o IP público.
