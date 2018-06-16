import * as React from 'react';

import PlayerInfo, {IPlayerData} from './PlayerInfo';

import MinecraftServer from './model/MinecraftServer';


export default class Players extends React.Component<{}, {players: IPlayerData[]}> {
    public constructor(props: {}) {
        super(props);
        this.state = {players: []};
    }
    public componentDidMount() {
        const server = new MinecraftServer();
        server.getPlayers()
            .then( p => this.setState(() => ({players: p})));
    }
    
    public render() {
        return <div className="players">
                {this.state.players
                    .sort((a, b) => b.lastOnline - a.lastOnline)
                    .map(player => <PlayerInfo {...player} key={player.UUID}/>)}
               </div>
      }
}