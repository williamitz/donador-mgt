export interface ICurrentLottery {
    pkLottery: number;
    fkTypeLottery: number;
    codeLottery: string;
    nameSport: string;
    urlImg: string;
    statusLottery: number;
    dateStart: string;
    dateEnd: string;

    events: eventLottery[];
    awards: awardLottery[];
    
}

export interface eventLottery {
    fkEvent: number;
    nameLeague: string;
    nameTeamOne: string;
    nameTeamTwo: string;
    nameCountry: string;
    dateEvent: string;
    nIndex: string;
    urlImgTeamOne: string;
    urlImgTeamTwo: string;
}

export interface awardLottery {
    nameAward: string;
    urlImg: string;
    hits: string;
    nIndex: number;
}

export interface IInfoLottery {
    lottery: ICurrentLottery;
    time: ITimeLottery;
    currentTime: ITimeLottery;
}

export interface ITimeLottery {
    hour: number;
    minutes: number;
    seconds: number;
}
