FROM node:alpine as hr-aggregator
WORKDIR /app
COPY . ./
RUN yarn build
COPY . /build

FROM nginx:alpine
COPY --from=hr-aggregator /app/build /usr/share/nginx/html
EXPOSE 80
cmd ["nginx","-g","deamon off;"]