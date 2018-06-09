
export default class MinecraftServer {
    private getter: () => Promise<Response>;

    public constructor(getter=()=>fetch("http://minesu.isaacpark.me/")) {
        this.getter = getter;
    }

    public async getPlayers(): Promise<any> {
        const r = await  this.getter();
        const json =  await r.json();
        return json.players;
    }
}