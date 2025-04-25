# Usa uma imagem oficial do Node.js
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para o container
COPY package*.json ./
RUN npm install
COPY . .

# Expõe a porta que a aplicação vai usar
EXPOSE 3097

# Comando para rodar a aplicação
CMD ["node", "index.js"]

