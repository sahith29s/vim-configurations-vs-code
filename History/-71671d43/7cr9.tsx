import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../redux/hooks'

import { decrement, increment } from '../redux/feature/counter/counterSlice'

export function Counter() {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector((state : Roo) => state.counter.value)
    const dispatch = useAppDispatch()

    // omit rendering logic
    return (
        <>
        sahith
        </>
    )
}