import { Grid } from '@material-ui/core'
import React from 'react'
import PlaceBetAndWithdraw from './PlaceBetAndWithdraw'
import ReportResult from './ReportResult'
import SetBonus from './SetBonus'
import StartGame from './StartGame'
import GameProgress from './GameProgress'

export default function Home({startGame,setBonus,reportResult,placeBet,withdrawGain}) {
    return (
        <Grid container style={{ width: "60%", marginRight: "auto", marginLeft: "auto", border: "5px solid black", padding: 30 }}>

            <Grid item xs={12}>
                <h1>Welcome to UpDown Game</h1>
            </Grid>
            <Grid item xs={12}>
                <StartGame startGame={startGame} />
            </Grid>
            <Grid item xs={12}>
                <SetBonus setBonus={setBonus}/>
            </Grid>
            <Grid item xs={12}>
                <ReportResult reportResult={reportResult} />
            </Grid>
            <Grid item xs={12}>
                <GameProgress />
            </Grid>
            <Grid item xs={12}>
                <PlaceBetAndWithdraw placeBet={placeBet} withdrawGain={withdrawGain}/>
            </Grid>

        </Grid>
    )
}
