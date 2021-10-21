FROM node:17.0-buster-slim

WORKDIR /UI

COPY ./ /UI


# Image installing Cypress Test Runner system dependencies
RUN apt-get update && \
    apt-get install --no-install-recommends -y \
    # install cypress system dependencies
    libgtk2.0-0 \
    libgtk-3-0 \
    libnotify-dev \
    libgconf-2-4 \
    libgbm-dev \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    tidy \
    xauth \
    xvfb \
    # clean up
    && rm -rf /var/lib/apt/lists/*


RUN npm install

CMD ["npm", "run", "start-in_container"]