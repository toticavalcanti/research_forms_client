FROM node:9
ENV INSTALL_PATH /research-forms-client
RUN npm install -g @angular/cli
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY package.json .
COPY . .
RUN npm install
CMD ["npm", "start"]
