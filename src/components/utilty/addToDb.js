
let getStoredMarkList = ()=>{
let storedListStr = localStorage.getItem('mark-list');
if (storedListStr){
    let storedList = JSON.parse(storedListStr);
    return storedList;
}
else {
    return [];
}
}

let addToStoreMarkList = (id)=>{
    let storedList = getStoredMarkList();
    if(storedList.includes(id)){
        console.log(id,'all ready exist');
    }
    else{
        storedList.push(id);
        let storedListStr = JSON.stringify(storedList);
        localStorage.setItem('mark-list', storedListStr);
        alert('this book is added')
    }
}
export {addToStoreMarkList,getStoredMarkList}