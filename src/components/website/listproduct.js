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
                        <th class="font-bold  uppercase ">id</th>
                        <th class="font-bold uppercase  ">categoryId</th>
                        <th class="font-bold uppercase  ">name</th>
                        <th class="font-bold uppercase  ">image</th>
                        <th class="font-bold uppercase  ">content</th>
                        <th class="font-bold uppercase  ">price</th>
                        <th class="font-bold uppercase pr-5 ">priceoff</th>
                        <th class="border-l"><a class="px-4 py-1 rounded-lg text-white uppercase bg-green-500" href="/#/productadd">thêm sản phẩm</th>
                    </tr>
                </thead>
                <tbody>
                ${products
                  .map((product, index) => {
                    return `<tr class="border-b">
                        <td class="text-center px-2 w-2">${index}</td>
                        <td class="text-center px-2 w-2">${product.categoryId}</td>
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
