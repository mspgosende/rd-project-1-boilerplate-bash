FROM ubuntu:latest

RUN apt update && \
    apt install -y curl nano tree

WORKDIR /project

CMD [ "bash" ]
