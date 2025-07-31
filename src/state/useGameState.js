import { createArray } from "../utils/array";
import { createWarship } from "../utils/battlefield";
import { useState } from 'react';
import { CHECKED_SHIP, CHECKED_WATER, WATER, SHIP } from "./cellstate";

const MAX_MATRIX_LENGTH = 10;

const createEmptyButtlefield = () => createArray(MAX_MATRIX_LENGTH, ()=>createArray(MAX_MATRIX_LENGTH, () => {
    return 0;
}));

const createBattlefield = () => {
    const emptyBattlefield = createEmptyButtlefield();
    const newWarShip = createWarship(4, MAX_MATRIX_LENGTH);

    newWarShip.forEach(({x, y}) => {
        emptyBattlefield[y][x] = SHIP;
    })

    return emptyBattlefield;
}

export const useGameState = () => {
    const [state, setState] = useState({
        matrix: createBattlefield(),
        turn: 0,
        won: false,
    })

    const reset = () => {
      setState({
        matrix: createBattlefield(),
        turn: 0,
        won: false,
      })
    }
    
    const fire = (x, y) => {

        const cell = state.matrix[y][x];

        if (cell === CHECKED_WATER || cell === CHECKED_SHIP) {
            return;
        }
        const newState = cell === WATER ? CHECKED_WATER : CHECKED_SHIP;

        state.matrix[y][x] = newState;
        const won = state.matrix.every(line => line.every(x => x !== SHIP));

        setState({...state, turn: state.turn + 1, won})
    }

    const {turn, matrix, won} = state;
    return {turn, reset, matrix, fire, won};
}