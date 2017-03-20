// @flow

import emptyGrid_tests from './store/grid-utils/empty-grid/emptyGrid.test.js'
import findSameDomainCells_tests from './store/grid-utils/find-same-domain-cells/findSameDomainCells.test.js'
import setActualValues_tests from './store/grid-utils/set-actual-values/setActualValues.test.js'

export default () => {

    emptyGrid_tests()
    findSameDomainCells_tests()
    setActualValues_tests()
}