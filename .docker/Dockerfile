FROM fox1t/turborepo-remote-cache

USER root

RUN mkdir -p /apps/cache/turbo

USER app

VOLUME [ "/apps/cache/turbo" ]

CMD ["node", "--enable-source-maps", "build/index.js"]
