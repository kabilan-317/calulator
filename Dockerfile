FROM node:latest
WORKDIR /calculator
COPY calculator1.js .
EXPOSE 3000
CMD ["node", "calculator1.js"]