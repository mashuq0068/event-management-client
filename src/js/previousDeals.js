const getItemsToLs = () => {
    const PreviousDeals = localStorage.getItem('Previous Deals')
    if(PreviousDeals){
        return JSON.parse(PreviousDeals)
    }
    return []
}
const setItemToLS = (id) => {
    const previousDealsIds = getItemsToLs()
    previousDealsIds.push(id)
    const previousDealsIdsStringified = JSON.stringify(previousDealsIds)
    localStorage.setItem('Previous Deals' , previousDealsIdsStringified )
}
 

export {getItemsToLs , setItemToLS}

