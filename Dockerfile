FROM node:14

WORKDIR /smtp
ENV PATH="./node_modules/.bin:$PATH"
COPY . .

RUN npm install
RUN npm run build

CMD ["serve", "-s", "build"]