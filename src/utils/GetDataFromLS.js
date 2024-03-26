const getData=(dataCategory)=>{
  const data = localStorage.getItem(dataCategory);
  if(data){
    return JSON.parse(data)
  }
  return []
}
export default getData;