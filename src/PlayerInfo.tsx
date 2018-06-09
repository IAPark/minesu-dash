import * as React from 'react';

import Skin from './model/Skin';

import {distanceInWords} from 'date-fns'

export interface IPlayerData {
    "name": string,
    "lastOnline": number,
    "UUID": string
}

export default function PlayerInfo(props: IPlayerData) {
    return (
      <div className="playerInfo">
        <span className="username">{props.name}</span>
        <img className="face" src={Skin.fromUUID(props.UUID).faceUrl}/>
        <span className="last-online">{Date.now()/1000>props.lastOnline?
                                        distanceInWords(new Date(), new Date(props.lastOnline*1000)) + " ago"
                                        :
                                        "now"}</span>
      </div>
    );
}

