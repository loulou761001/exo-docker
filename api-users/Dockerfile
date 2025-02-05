FROM node:22.10.0-alpine AS builder
LABEL maintainer="louis.cherik@gmail.com"
COPY package* ./
RUN npm install
COPY . .


FROM node:22.10.0-alpine
COPY --from=builder .. .
EXPOSE 3000

CMD ["npm", "start"]
