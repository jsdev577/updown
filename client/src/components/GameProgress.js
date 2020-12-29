import React from 'react'
import { LinearProgress, Grid } from '@material-ui/core'

export default function GameProgress({ startTime = new Date(), progress = 50,duration=3600 }) {
    return (
        <div>
            <Grid container style={{ marginTop: 10 }}>
                <Grid item xs={12} >
                    <p>Game started at : {`${startTime.toString()}`}</p>
                    <p>Game duration : {`${duration}`}</p>
                </Grid>
                <Grid item xs={12} style={{ marginTop: 10 }}>
                    <LinearProgress variant="determinate" value={progress} />
                </Grid>
            </Grid>
        </div>
    )
}
