const FetchDatas = async ()=>{
    const getData = await fetch("https://dummyjson.com/products")
    const changeData = awiat getData.json()
    console.log(getData);

    
    
}