# Используйте официальный образ Node.js как базовый образ
FROM node:18.17.0

# Установите рабочую директорию в контейнере
WORKDIR /app

# Копируйте package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Установите зависимости
RUN npm install

# Копируйте исходный код в рабочую директорию
COPY . .

# Экспортируйте порт, на котором работает приложение
EXPOSE 3000

# Определите команду для запуска приложения
CMD ["npm", "run", "dev"]