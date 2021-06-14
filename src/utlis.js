export const parseRequestUrl = () => {
    const url  = window.location.hash.toLowerCase();
    const request = url.split('/'); //
    return {
      resource: request[1],
      id: request[2],
    };
}
export const $ = (selecter) => {
  let elements = document.querySelectorAll(selecter);
  return elements.length == 1 ? elements[0] : [...elements];
};
export const reRender = async (component,position="")=>{
  if(position){
    $(position).innerHTML = await component.render();
  }else{
    $("#root").innerHTML = await component.render();
  }
  await component.afterRender();
}