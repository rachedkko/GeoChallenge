

function resolvePromise(prms, promiseState) {

    function saveResultsACB(result){
        if(promiseState.promise == prms){
            promiseState.data = result
        }
    }

    function errorACB(error){
        if(promiseState.promise == prms){
            promiseState.error = error
        }
    }

    promiseState.promise= prms;
    promiseState.data= null;
    promiseState.error= null;

    if(prms == null){
        return;
    }

    prms.then(saveResultsACB).catch(errorACB)
}





export default resolvePromise