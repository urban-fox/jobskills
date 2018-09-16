FROM node:8.11.3

ENV NPM_CONFIG_LOGLEVEL warn
ARG app_env
ENV APP_ENV $app_env

RUN mkdir -p /job-skills
WORKDIR /job-skills
COPY ./job-skills ./

RUN npm install

CMD if [ ${APP_ENV} = production ]; \
	then \
	npm install -g http-server && \
	npm run build && \
	cd build && \
	hs -p 3000; \
	else \
	npm run start; \
	fi