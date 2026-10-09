FROM node:22
WORKDIR /src
RUN npm install -g bun
COPY package.json bun.lock ./
RUN bun install --ignore-scripts
COPY . .
RUN bunx prisma generate
RUN bun run build
EXPOSE 3000
CMD ["bun", "run", "start"]