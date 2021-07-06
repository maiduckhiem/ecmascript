import ListProduct from "../../components/website/listproduct";

const AdminproductPage = {
 async render() {
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
                            <a href="/#/admin">Quản lý danh mục</a>
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
                            <a href="">Danh mục sản phẩm</a>
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
             <div id="list-product">${await ListProduct.render()}</div>
        </div>
    </div>
     `;
  },
  async afterRender(){
      return`${ await ListProduct.afterRender()}`;
  }
};

export default AdminproductPage;
