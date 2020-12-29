import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { Grid, TextField } from '@material-ui/core'

export default function PlaceBetAndWithdraw({ placeBet, withdrawGain }) {
    const [upAmount, setUpAmount] = useState(0)
    const [downAmount, setDownAmount] = useState(0)
    return (
        <>
            <h1> Up Down Place Bet Withdraw</h1>
            <Grid container spacing={1}>
                <Grid container item xs={6}>
                    <Grid item xs={6}>
                        <TextField onChange={(e) => {
                            if (e.target.value >= 0) {
                                setUpAmount(e.target.value)
                            }
                        }} value={upAmount} id="outlined-basic" variant="outlined" label="Enter amount to bet on Up" type="number" InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={() => placeBet(0, upAmount)} variant="contained" color="primary">
                            Up
                    </Button>
                    </Grid>

                </Grid>
                <Grid container item xs={6}>
                    <Grid item xs={6}>
                        <TextField onChange={(e) => {
                            if (e.target.value >= 0) {
                                setDownAmount(e.target.value)
                            }
                        }} value={downAmount} id="outlined-basic" variant="outlined" label="Enter amount to bet on Down" type="number" InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={() => placeBet(1, downAmount)} variant="contained" color="primary">
                            Down
                    </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={withdrawGain} variant="contained" color="primary">
                        Withdraw Gain
                </Button>
                </Grid>

            </Grid>
        </>
    )
}
