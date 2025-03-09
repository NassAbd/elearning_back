# Utilisation de Node.js
FROM node:18
WORKDIR /app

# Copier les fichiers et installer les dépendances
COPY package.json ./
RUN npm install
COPY . .

# Exposer le port et lancer l'app
EXPOSE 5000
CMD ["npm", "start"]
