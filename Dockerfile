FROM node:20-alpine3.18

# Update .nvm when changing this file:
# docker run --rm -it -w /app -v ${PWD}:/app $(docker build . -q) sh -c 'node -v > .nvmrc'