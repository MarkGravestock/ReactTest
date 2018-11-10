import * as reducer from '../reducers'
import * as types from '../ActionTypes'

describe('counter reducer', () => {
    it('should return the initial state', () => {
        expect(reducer.counterOperation(undefined, {})).toEqual({count: 0})
    })

    it('should handle INCREMENT', () => {
        expect(
            reducer.counterOperation({count: 2}, {
                type: types.INCREMENT,
            })
        ).toEqual(
            {count: 3}
        )
    })
})