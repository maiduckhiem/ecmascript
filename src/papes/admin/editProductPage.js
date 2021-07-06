import productAPI from "../../api/productAPI";
import { parseRequestUrl, $ } from "../../utlis";
import firebase from "../../firebase/index";

const EditProductPage = {
  async render() {
    const { id } = parseRequestUrl();
    const { data: product } = await productAPI.read(id);
    console.log(product);
    return /*html*/ `
    <div class="grid grid-cols-12 h-5/6">
        <div class="col-span-2 bg-gray-700 border-r border-gray-500">
            <div class="">
                <div class="border-b flex py-3 px-5">
                    <img src="image/AdminLTELogo.png" alt="" class="w-8">
                    <h5 class="text-white mt-1 mx-2 hover:text-green-500 cursor-pointer">Admin LTE</h5>
                </div>
                <div class="py-5 px-3 flex border-b mx-2">
                    <img class="w-8 rounded-full" src="image/user2-160x160.jpg" alt="">
                    <h5 class="text-white mx-2 mt-1 hover:text-green-500"><a href="">Alexander Pierce</a></h5>
                </div>
                <div class="h-40 mt-2">
                    <ul>
                        <li class="px-5 mx-2 py-2 hover:bg-gray-500 rounded-md text-white ">
                            <i class="fas fa-bacteria mr-2"></i>
                            <a href="/#/adminproduct">List sản phẩm</a>
                        </li>
                        <li class="px-5 mx-2 py-2 hover:bg-gray-500 rounded-md text-white ">
                            <i class="fas fa-bacteria mr-2"></i>
                            <a href="">Sản phẩm </a>
                        </li>
                        <li class="px-5 mx-2 py-2 hover:bg-gray-500 rounded-md text-white ">
                            <i class="fas fa-bacteria mr-2"></i>
                            <a href="">Quản lý</a>
                        </li>
                        <li class="px-5 mx-2 py-2 hover:bg-gray-500 rounded-md text-white ">
                            <i class="fas fa-bacteria mr-2"></i>
                            <a href="">List sản phẩm</a>
                        </li>
                        <li class="px-5 mx-2 py-2 hover:bg-gray-500 rounded-md text-white ">
                            <i class="fas fa-bacteria mr-2"></i>
                            <a href="">Quản lý tài khoản</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-span-10 bg-gray-700">
            <div class="flex px-5 bg-gray-800 text-white py-4">
                <h5 class="mx-2 hover:text-green-500"><a href="/#/">Home</a></h5>
                <h5 class="mx-2 hover:text-green-500"><a href="">Contact</a></h5>
            </div>
            <div class="pb-20">
                  <form class="mb-64" id="form-update">
                   <div>
                        <h4 class="mt-5 text-center uppercase font-bold text-white">sửa sản phẩm</h4>
                        <p class="border-b w-64 mx-auto mt-2"></p>
                    </div>
                    <div class="grid grid-cols-12 gap-10 mx-10">
                        <div class="col-span-6">
                            <div class="mt-10 ">
                                <p class="text-white">Mời bạn nhập tên:</p>
                                <input value="  ${product.name}" class="w-full bg-gray-600 text-green-300 border" type="text" name="" id="product-name">
                            </div>
                            <div class="mt-10 border">
                                <input value="${product.categoryId}" class="w-full bg-gray-600 text-green-300" type="number" name="" id="product-categoryId">
                            </div>
                            <div class="mt-10 border bg-gray-600 text-green-300">
                                <input value="" class="w-full " type="file" name="" id="product-image">
                            </div>
                        </div>
                        <div class="col-span-6 ">
                            <div class="mt-10">
                                <p class="text-white">Nhập nội dung :</p>
                                <input value="  ${product.content}" class="w-full border bg-gray-600 text-green-300 " type="text" name="" id="product-content">
                            </div>
                            <div class="mt-10 ">
                                <input value="  ${product.price}" class="w-full bg-gray-600 text-green-300  border" type="text" name="" id="product-price">
                            </div>
                            <div class="mt-10">
                                <input value="  ${product.priceoff}" class="w-full bg-gray-600 text-green-300  border" type="text" name="" id="product-priceoff">
                            </div>
                        </div>
                        <div class=" mx-auto">
                            <input type="submit" class="p-1 bg-green-300 font-bold uppercase text-red-500 rounded-lg hover:bg-green-600 " value='add product'>
                        </div>
                  </form>
            </div>
        </div>
    </div>
      `;
  },

  async afterRender() {
    const { id } = parseRequestUrl();
    const { data: product } = await productAPI.read(id);

    $("#form-update").addEventListener("submit", (e) => {
      e.preventDefault();

      const productImage = $("#product-image").files[0];
      console.log(productImage);
        let storageRef = firebase.storage().ref(`image/${productImage.name}`);
        storageRef.put(productImage).then(function () {
          storageRef.getDownloadURL().then((url) => {
            const newProduct = {
              ...product,
              name: $("#product-name").value,
              categoryId: $("#product-categoryId").value,
              image: url,
              content: $("#product-content").value,
              price: $("#product-price").value,
              priceoff: $("#product-priceoff").value,
            };
            productAPI.update(id, newProduct);
            confirm("update thành công")
            window.location.hash = "/adminproduct";
          });
        });
    });
  },
};
export default EditProductPage;
