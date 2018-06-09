import MinecraftServer from './MinecraftServer';


it('should construct', (finish) => {
    const server = new MinecraftServer();
    server.getPlayers().then(v => {
        finish();
    })
});
  