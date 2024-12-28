FROM node:22.12 AS api-base
RUN mkdir -p /home/app
COPY . /home/app
WORKDIR /home/app
RUN npm install
EXPOSE 3001

FROM api-base AS api-dev
CMD ["npm", "run", "dev"]


FROM api-base AS api-prod
CMD ["npm", "run", "build", "&&", "npm", "run", "start"]