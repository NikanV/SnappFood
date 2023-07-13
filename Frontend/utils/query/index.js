
/**
 * @module Query Instances
 * @description Different instances of Query with different default Options
 */

import Query from '~/utilities/query/Query'

export const q = new Query({
    retry: i => i < 5,
    distinctRetry: true,
    deactivateOnWindowHidden: false,
    refetchOnWindowFocus: true
})
