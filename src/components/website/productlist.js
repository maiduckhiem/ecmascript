import ProductlistAPI from "../../api/productlistAPI";
import { $, reRender } from "../../utlis";

const Productlist = {
  async render() {
    const { data: productlists } = await ProductlistAPI.list();
    return /*html*/ `
            <div class="bg-gray-500 text-white py-4 px-4" id="productlist">
                <table>
                <thead >
                    <tr class="rounded-lg pb-5 text-green-500">
                        <th class="font-bold  uppercase px-5 pb-10 ">id</th>
                        <th class="font-bold uppercase px-48 pb-10 ">name</th>
                        <th class="pb-10"><a class="ml-96 px-4 py-1 rounded-lg text-white uppercase bg-green-500" href="/#/addlist">thêm sản phẩm</th>
                    </tr>
                </thead>
                <tbody>
                    ${productlists
                      .map((products, index) => {
                        return `
                            <tr class="border">
                                <td class="text-center px-2 py-5">${index}</td>
                                <td class="px-48 py-5" >${products.name}</td>
                                <td class="flex ml-96 py-5">
                                    <button class="mx-2 hover:bg-green-600 w-32 rounded-md font-bold text-white bg-green-500"><a href="/#/editlist/${products.id}">sửa</a></button>
                                    <button class="btn mx-2 hover:bg-red-600 bg-red-500 w-32 rounded-md font-bold text-white" data-id="${products.id}">xóa</button>
                                </td>
                            </tr>                             
                        `;
                      })
                      .join("")}
                </tbody>
            </table>
            </div>
       `;
  },
  async afterRender() {
    const btns = $("#productlist .btn");
   btns.forEach( btn => {
       const id = btn.dataset.id;
       btn.addEventListener("click",function(){
           ProductlistAPI.remove(id);
           reRender(Productlist,"#productlist");
       })
   });
  },
};
export default Productlist;
