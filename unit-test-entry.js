// @flow

import generateGrid from './store/action-creators/generateGrid.js'

import emptyGrid_tests from './store/grid-utils/empty-grid/emptyGrid.test.js'
import findSameDomainCells_tests from './store/grid-utils/find-same-domain-cells/findSameDomainCells.test.js'

export default () => {

    const x : number = 5

    console.assert(false, 'test assertion')

    emptyGrid_tests()

    findSameDomainCells_tests()
}