FROM rom4ikitechart/chrome_for_wdio

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "test" ]

