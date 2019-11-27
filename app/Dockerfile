FROM node:6.3.1

RUN mkdir -p /app

ADD . /app
RUN cd /app && npm install --registry=https://registry.npm.taobao.org

EXPOSE 3000

CMD ["node", "/app/server.js"]