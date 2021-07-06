import ProductAPI from "../../api/productAPI";
import { $, reRender } from "../../utlis";
const ListProduct = {
  async render() {
    const { data: products } = await ProductAPI.list();
    // console.log(products);
    return /*html*/ `
            <div id="listproduct" class="bg-gray-500 text-white py-4 px-4">
               <table>
                <thead>
                    <tr class="rounded-lg pb-5 text-green-500">
                        <th class="font-bold  uppercase pb-10 ">id</th>
                        <th class="font-bold uppercase  pb-10 ">name</th>
                        <th class="font-bold uppercase  pb-10 ">image</th>
                        <th class="font-bold uppercase  pb-10 ">content</th>
                        <th class="font-bold uppercase  pb-10 ">price</th>
                        <th class="font-bold uppercase pr-5 pb-10 ">priceoff</th>
                        <th class="pb-10"><a class="px-4 py-1 rounded-lg text-white uppercase bg-green-500" href="/#/productadd">thêm sản phẩm</th>
                    </tr>
                </thead>
                <tbody>
                ${products
                  .map((product, index) => {
                    return `<tr class="border-b">
                        <td class="text-center px-2 w-2">${index}</td>
                        <td class=" px-3">${product.name}</td>
                        <td class=" px-3"><img class="w-20" src="${product.image}" /></td>
                        <td class=" px-3">${product.content}</td>
                        <td class=" px-3">${product.price}</td>
                        <td class=" px-3">${product.priceoff}</td>
                        <td class="flex py-3 ">
                            <button class="mx-2 hover:bg-green-600 w-32 rounded-md font-bold text-white bg-green-500"><a href="/#/editproduct/${product.id}">sửa</a></button>
                            <button class="btn mx-2 hover:bg-red-600 bg-red-500 w-32 rounded-md font-bold text-white" data-id="${product.id}">xóa</button>
                            </td>
                    </tr>`;
                  })
                  .join("")}
                </tbody></table>
            </div> 
        `;
  },
  async afterRender() {
    const btns = $("#list-product .btn");
    btns.forEach( btn =>{
      const id = btn.dataset.id;
      console.log(id);
      btn.addEventListener("click", function () {

        console.log(btn.dataset.id);
        ProductAPI.remove(id);
        reRender(ListProduct,"#list-product");
      });
    })
  },
};
export default ListProduct;
