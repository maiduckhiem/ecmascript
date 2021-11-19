import CategoryAPI from "../../api/categoryAPI";
const Header = {
  async render() {
    try {
      const { data: categories } = await CategoryAPI.list();
      return /*html*/ `
      <section class="header lg:container mx-auto">
        <div class="grid grid-cols-12 mt-2">
            <div class="col-span-4 ">
                <p class="text-sm mt-4 text-green-500">Giao hàng tiết kiệm cho đơn hàng trên 499.000₫</p>
            </div>
            <div class="col-span-4 mx-auto">
            <a href="/#/"><img class="w-32" src="image/logo.png" alt=""></a>
            </div>
            <div class="col-span-4 flex ml-auto ">
                <img class="w-10" src="image/delivery-man.svg" alt="">
                <div class="ml-3">
                    <h5 class="opacity-50">Gọi người đặt</h5>
                    <h4 class="text-xl font-bold text-red-500">01234345455</h4>
                </div>
                <div class="mt-3 ml-4">
                    <a href=""><i class="far fa-heart text-2xl mr-2"></i></a>
                    <a href="/#/user"><i class="far fa-user text-2xl"></i></a>
                </div>
            </div>
        </div>
        <div class="mt-3 bg-green-600 rounded-md flex">
            <ul class=" p-4 font-bold  text-white">
                ${categories.map((index) => {
                    return `<li class="inline-block px-2">
                    <a class="hover:text-red-600 " href="/#/category/${index.id}">${index.name}</a>
                </li>`;
                  })
                  .join("")}
                <li class="inline-block px-2">
                    <a class="hover:text-red-600 " href="/#/introduce">Liên hệ</a>
                </li>
            </ul>
            <div class="ml-auto mr-10 pt-1 bg-white my-3 px-3 rounded-full">
                <input type="text" name="" id="" size="15" class="outline-none" placeholder="  Tìm món ăn">
                <a href=""><i class="fas fa-search"></i></a>
            </div>
        </div>
        
    </section>
    `;
    } catch (error) {
      console.log(error);
    }
  },
};

export default Header;
