import productAPI from "../../api/productAPI";
import ProductlistAPI from "../../api/productlistAPI";
import { $ } from "../../utlis";
import { v4 as uuidv4 } from "uuid";
import firebase from "../../firebase/index";

const ProductAddPage = {
  async render() {
    const { data: productlist } = await ProductlistAPI.list();

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
                            <a href="/#/adminproduct">Quản lý danh mục</a>
                        </li>
                        <li class="px-5 mx-2 py-2 hover:bg-gray-500 rounded-md text-white ">
                            <i class="fas fa-bacteria mr-2"></i>
                            <a href="/#/adminproduct">Sản phẩm </a>
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
                  <form class="mb-64" id="form-add">
                   <div>
                        <h4 class="mt-5 text-center uppercase font-bold text-white">thêm sản phẩm mới</h4>
                        <p class="border-b w-64 mx-auto mt-2"></p>
                    </div>
                    <div class="grid grid-cols-12 gap-10 mx-10">
                        <div class="col-span-6">
                            <div class="mt-10 ">
                                <p class="text-white">Mời bạn nhập tên:</p>
                                <input class="w-full bg-gray-600 text-green-300 border" type="text" name="" id="product-name">
                            </div>
                            <div class="mt-10 border">
                                <input class="w-full bg-gray-600 text-green-300" type="number" name="" id="product-categoryId">
                            </div>
                            <div class="mt-10 border bg-gray-600 text-green-300">
                                <input class="w-full " type="file" name="" id="product-image">
                            </div>
                        </div>
                        <div class="col-span-6 ">
                            <div class="mt-10">
                                <p class="text-white">Nhập nội dung :</p>
                                <input class="w-full border bg-gray-600 text-green-300 " type="text" name="" id="product-content">
                            </div>
                            <div class="mt-10 ">
                                <input class="w-full bg-gray-600 text-green-300  border" type="text" name="" id="product-price">
                            </div>
                            <div class="mt-10">
                                <input class="w-full bg-gray-600 text-green-300  border" type="text" name="" id="product-priceoff">
                            </div>
                        </div>
                        <div class="mb-20">
                        <select name="" id="product-list">
                            ${productlist
                              .map((productlist) => {
                                return `
                                  <option value="${productlist.name}">${productlist.name}</option>
                               `;
                              }).join("")}
                        </select>
                        </div>
                        <div class="mt-10 mx-auto">
                            <input type="submit" class="p-1 ml-120 bg-green-300 font-bold uppercase text-red-500 rounded-lg hover:bg-green-600 " value='add product'>
                        </div>
                  </form>
            </div>
        </div>
    </div>
     `;
  },
  afterRender() {
    $("#form-add").addEventListener("submit", (e) => {
      e.preventDefault();
      const productImage = $("#product-image").files[0];
      console.log(productImage);
      const name = document.querySelector("#product-name").value;
      const categoryId = document.querySelector("#product-categoryId").value;
      const image = document.querySelector("#product-image").value;
      const content = document.querySelector("#product-content").value;
      const price = document.querySelector("#product-price").value;
      if (name == "") {
        alert("mời bạn nhập name");
      } else if (categoryId == "") {
        alert("bạn chưa nhập categoryId");
      } else if (image == "") {
        alert("bạn chưa nhập image");
      } else if (content == "") {
        alert("bạn chưa nhập content");
      } else if (price == "") {
        alert("bạn chưa nhập content");
      } else {
        let storageRef = firebase.storage().ref(`image/${productImage.name}`);
        storageRef.put(productImage).then(function () {
          storageRef.getDownloadURL().then((url) => {
            const product = {
              id: uuidv4(),
              name: $("#product-name").value,
              categoryId: $("#product-categoryId").value,
              image: url,
              content: $("#product-content").value,
              price: $("#product-price").value,
              priceoff: $("#product-priceoff").value,
              list: $("#product-list").value,
            };
            alert("thêm thành công");
            productAPI.add(product);
          });
        });
      }
    });
  },
};

export default ProductAddPage;
