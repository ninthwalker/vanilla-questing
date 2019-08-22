FROM node:11-alpine
MAINTAINER ninthwalker
ENV UPDATED_ON 22AUG2019

# Install git & vanilla-questing repo
RUN apk add --no-cache git && \
git clone https://github.com/wickstjo/vanilla-questing && \
cd /vanilla-questing && \
npm install

WORKDIR /vanilla-questing
EXPOSE 3000

CMD [ "npm", "start" ]
