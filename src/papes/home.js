import productAPI from "../api/productAPI";
import Footer from "../components/website/footer";
import Header from "../components/website/header";
const Home = {
  async render() {
    const { data: products} = await productAPI.list();
    const perpage = 6;
    const perpage1 = 6;
    const currentpage = 1;
    const start = 0;
    const end = perpage;
    const end1 = perpage1;

    return /*html*/ `
    ${await Header.render()}
    <div class="lg:container mx-auto">
            <img class="w-full mt-6 rounded-md" src="image/slider_3.jpg" alt="">
    </div>
    <section class="content bg-gray-100">
        <div class="grid grid-cols-12 mt-3 pt-7 pb-7 lg:container mx-auto">
            <div class="col-span-6">
                <div class="mt-32">
                    <div>
                        <p class="text-center text-green-500 ">Evo Pizza</p>
                        <p class="border-b-2 border-green-500 w-28 mx-auto"></p>
                    </div>
                    <h3 class="text-center font-bold text-3xl text-green-500 mt-2">Về chúng tôi</h3>
                    <p class="mr-5 mt-5">
                        Chúng tôi là Evo Pizza. Thương hiệu thuộc quyền sở hữu của tập đoàn Evo Group, một trong những
                        tập
                        đoàn hàng đầu
                        châu Á
                        về ngành khách sạn và ẩm thực cao cấp.
                        Bên cạnh những sản phẩm Pizza độc đáo, phong cách phục vụ nhiệt tình, thân thiện, dịch vụ giao
                        hàng
                        tiện lợi, cùng
                        với
                        sự nghiêm túc và tập trung đầu tư phát triển chúng tôi tin tưởng Evo Pizza sẽ làm thỏa mãn khẩu
                        vị
                        của những khách
                        hàng
                        Việt Nam sành điệu nhất.
                    </p>
                    <h4
                        class="uppercase front-bold mx-auto bg-green-600 mt-10 hover:bg-green-800 text-center w-28 rounded-md text-white p-2">
                        <a href="/#/product">xem thêm</a>
                    </h4>
                </div>
            </div>
            <div class="col-span-6">
                <img src="image/feature_search_image_1.png" alt="">
            </div>
        </div>
    </section>

    <section class="mt-10 lg:container mx-auto">
        <div class="">
            <h2 class="text-center font-bold text-2xl">THỰC ĐƠN NGON - ĐẶT MÓN NGAY</h2>
        </div>
        <div class="text-center mt-5">
            <ul class="border-b-2 border-green-500">
                <li class="inline-block px-15 py-2 hover:bg-green-500 font-bold"><a href="#">Pizza</a></li>
                <li class="inline-block px-15 py-2 hover:bg-green-500 font-bold"><a href="#">Mỳ ý</a></li>
                <li class="inline-block px-15 py-2 hover:bg-green-500 font-bold"><a href="#">Cơm</a></li>
                <li class="inline-block px-15 py-2 hover:bg-green-500 font-bold"><a href="#">Salad</a></li>
                <li class="inline-block px-15 py-2 hover:bg-green-500 font-bold"><a href="#">Giai khát</a></li>
                <li class="inline-block px-15 py-2 hover:bg-green-500 font-bold"><a href="#">Tráng miệng</a></li>
                <li class="inline-block px-15 py-2 hover:bg-green-500 font-bold"><a href="#">Khai vị</a></li>
            </ul>
        </div>
        <div class="grid grid-cols-12 mt-5 gap-5">
            <div class="grid grid-cols-12 col-span-8 gap-5">
            ${products.map((product,index)=>{
                if(index >= start && index < end){
                    return /*html*/`<div class="col-span-4">
                    <div class="border-2 rounded-md pb-2">
                        <div class="overflow-hidden">
                            <img class="rounded-md hover:scale-110 duration-1000 transform "
                                src="${product.image}" alt=" ">
                        </div>
                        <div class="mx-2">
                            <h3 class="hover:text-green-500 font-bold mt-3"><a href="/#/productdetail/${product.id}">${product.name}</a></h3>
                            <P class="mt-3 text-sm">${product.content}</P>
                            <div class="mt-3">
                                <span class="text-red-500 font-bold ">${product.price}</span>
                            </div>
                            <h4
                                class="font-bold uppercase mt-2 text-white bg-green-500 text-sm text-center py-2 hover:bg-green-600 duration-200 rounded-md">
                                <a href="#">đặt món</a>
                            </h4>
                        </div>
                    </div>
                </div>`;
                }
            }).join("")} 
                <div class="col-span-12">
                    <h4
                        class=" bg-gray-300 w-32 py-2 mx-auto text-center rounded-md hover:bg-green-600 hover:text-white">
                        <a href="/#/category/2">Xem thêm</a></h4>
                </div>
            </div>
            <div class="col-span-4">
                <div class="border-2 rounded-lg sticky top-20">
                    <h2 class="text-center my-4 text-gray-400">Bạn ơi . thêm món gì vào rỏ đi</h2>
                    <div class="bg-gray-300 p-3">
                        <div>
                            <h3 class="text-center bg-green-500 mt-2 p-2 text-white font-bold uppercase rounded-md">
                                <a href="#">thanh toán</a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="mt-10">
        <img class="mx-auto" src="image/feature_banner_1.jpg" alt="">
    </div>
    <div>
    
    </div>
    </section>
        <section class="lg:container mx-auto mt-10">
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-8">
                <div class="grid grid-cols-12">
                    <div class="col-span-6">
                        <h3 class="font-bold uppercase text-xl hover:text-green-500 hover:underline">MÓN ĂN NỔI BẬT
                        </h3>
                    </div>
                    <div class="flex col-span-6 ml-auto">
                        <h4 class="hover:text-green-500 hover:underline"><a href="#">Xem thêm</a></h4>
                        <i class="fas fa-chevron-right mt-2 ml-2"></i>
                    </div>
                </div>
                <div class="grid grid-cols-12 mt-10 gap-5">
                    ${products.map((product,index)=>{
                        if (index >= start && index < end1){
                            return /*html*/`
                                <div class="col-span-6 flex border-2 rounded-lg">
                        <div class="p-2">
                            <img class="h-32 rounded-lg" src="${product.image}" width="210" alt="">
                        </div>
                        <div class="p-2">
                            <h4 class="font-bold text-xl">${product.name}</h4>
                            <p class="text-sm">${product.content}</p>
                            <div class="mt-3">
                                <span class="text-red-500 font-bold ">${product.price}</span>
                                <span class="font-bold ml-2"><del>${product.priceoff}</del></span>
                            </div>
                        </div>
                    </div>
                            `;
                        }
                    }).join("")}
                    
                </div>
            </div>
            <div class="col-span-4">
                <img src="image/evo_col_product_feature.jpg" alt="">
            </div>
        </div>
        <div class="mt-10 mb-10">
            <div class="grid grid-cols-12">
                <div class="col-span-6">
                    <h4 class="font-bold uppercase text-xl">tin nổi bật</h4>
                </div>
                <div class="col-span-6 flex ml-auto">
                    <h5 class="hover:underline hover:text-green-500 text-md">xem thêm</h5>
                    <i class="fas fa-chevron-right mt-2 ml-2"></i>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-5 mt-10">
                <div class="col-span-3 border-2 rounded-lg">
                    <div class="p-2">
                        <img class="rounded-lg" src="image/pizza-rau-cu-ae6375ac-4b2a-44e6-b280-0bb4c0fba700.jpg" alt="">
                    </div>
                    <div class="p-2">
                        <h4 class="font-bold text-lg text-gray-600">Bữa ăn sao Michelin rẻ nhất thế giới ở Singapore</h4>
                        <p class="text-sm mt-2 text-gray-500">Hawker Chan là quán ăn đường phố đầu tiên trên thế giới được trao tặng sao Michelin. Địa chỉ ẩm ...</p>
                        <div class="mt-5 text-gray-500">
                            <i class="far fa-calendar-alt"></i>
                            <span>14/02/2022</span>
                        </div>
                    </div>
                </div>
                <div class="col-span-3 border-2 rounded-lg">
                    <div class="p-2">
                        <img class="rounded-lg" src="image/pizza-rau-cu-ae6375ac-4b2a-44e6-b280-0bb4c0fba700.jpg" alt="">
                    </div>
                    <div class="p-2">
                        <h4 class="font-bold text-lg text-gray-600">Bữa ăn sao Michelin rẻ nhất thế giới ở Singapore</h4>
                        <p class="text-sm mt-2 text-gray-500">Hawker Chan là quán ăn đường phố đầu tiên trên thế giới được trao tặng sao
                            Michelin. Địa chỉ ẩm ...</p>
                        <div class="mt-5 text-gray-500">
                            <i class="far fa-calendar-alt"></i>
                            <span>14/02/2022</span>
                        </div>
                    </div>
                </div>
                <div class="col-span-3 border-2 rounded-lg">
                    <div class="p-2">
                        <img class="rounded-lg" src="image/pizza-rau-cu-ae6375ac-4b2a-44e6-b280-0bb4c0fba700.jpg" alt="">
                    </div>
                    <div class="p-2">
                        <h4 class="font-bold text-lg text-gray-600">Bữa ăn sao Michelin rẻ nhất thế giới ở Singapore</h4>
                        <p class="text-sm mt-2 text-gray-500">Hawker Chan là quán ăn đường phố đầu tiên trên thế giới được trao tặng sao
                            Michelin. Địa chỉ ẩm ...</p>
                        <div class="mt-5 text-gray-500">
                            <i class="far fa-calendar-alt"></i>
                            <span>14/02/2022</span>
                        </div>
                    </div>
                </div>
                <div class="col-span-3 border-2 rounded-lg">
                    <div class="p-2">
                        <img class="rounded-lg" src="image/pizza-rau-cu-ae6375ac-4b2a-44e6-b280-0bb4c0fba700.jpg" alt="">
                    </div>
                    <div class="p-2">
                        <h4 class="font-bold text-lg text-gray-600">Bữa ăn sao Michelin rẻ nhất thế giới ở Singapore</h4>
                        <p class="text-sm mt-2 text-gray-500">Hawker Chan là quán ăn đường phố đầu tiên trên thế giới được trao tặng sao
                            Michelin. Địa chỉ ẩm ...</p>
                        <div class="mt-5 text-gray-500">
                            <i class="far fa-calendar-alt"></i>
                            <span>14/02/2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    ${await Footer.render()}
    `;
  },
};

export default Home;
