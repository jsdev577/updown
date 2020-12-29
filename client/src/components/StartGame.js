import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core'

export default function StartGame({ startGame }) {
    const [gameTime, setGameTime] = useState(3600)
    return (
        <>
            <h1>Start Game</h1>
            <Grid container spacing={1}>
                <Grid item xs={5}>
                    <TextField onChange={e => {
                        if (e.target.value > 0) {
                            setGameTime(e.target.value)
                        }
                    }} value={gameTime} id="outlined-basic" label="Time in Seconds" variant="outlined" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={() => startGame(gameTime)} variant="contained" color="primary">
                        Start Game
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}
