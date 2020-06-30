FROM rom4ikitechart/chrome_for_wdio

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .


#RUN ln -s /usr/src/app/docker-entrypoint.sh / # backwards compat
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["npm", "-v"]