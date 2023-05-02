###### Dockerfile
FROM node:20.0-alpine3.17

###### Env 
ARG USER=node
ARG UID=1000

ENV DEBIAN_FRONTEND=noninteractive \
    LANG=C.UTF-8 \
    LANGUAGE=en_US:en \
    LC_ALL=C.UTF-8

###### Run
RUN install --owner=${USER} --directory /work ; \
    apk add git ; \
    rm -rf /var/cache/apk/* ; \
    rm -rf /var/log/* ; \
    rm -rf /var/tmp/* ; \
    rm -rf /tmp/* ;

###### login user
USER ${USER}

###### working directory
WORKDIR /work

CMD ["/bin/sh"]


