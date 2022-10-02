function addAndRemoveElements(cmds) {
    let myArr = []
    for (let i=0; i<=cmds.length;i++){
        if (cmds[i] === 'add'){
            myArr.push(i+1)
        }else if(cmds[i] === 'remove'){
            if (myArr.length === 0){
                continue
            }else{
                myArr.pop()
            }
        }
    }
    if (myArr.length === 0){
        console.log('Empty')
    }else{
        for (const el of myArr) {
            console.log(el)
        }
    }
}

addAndRemoveElements(['add',
'add',
'remove',
'add',
'add'])