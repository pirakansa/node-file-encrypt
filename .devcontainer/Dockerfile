###### Dockerfile
FROM node:22-alpine3.20

ENV DEBIAN_FRONTEND=noninteractive \
    LANG=C.UTF-8 \
    LANGUAGE=en_US:en \
    LC_ALL=C.UTF-8

###### Run
RUN install --owner=node --directory /work ; \
    apk add git bash; \
    rm -rf /var/cache/apk/* ; \
    rm -rf /var/log/* ; \
    rm -rf /var/tmp/* ; \
    rm -rf /tmp/* ;

###### login user
USER node

###### working directory
WORKDIR /work

CMD ["/bin/bash"]


