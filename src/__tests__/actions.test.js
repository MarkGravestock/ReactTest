import * as actions from '../actions'
import * as types from '../actionTypes'

describe('actions', () => {
    it('should create an action to decrement', () => {
        const expectedAction = {
            type: types.DECREMENT,
        }
        expect(actions.decrement).toEqual(expectedAction)
    })
})