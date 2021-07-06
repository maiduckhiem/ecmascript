import ProductAPI from "../api/productAPI";
import header from "../components/website/header";
import footer from "../components/website/footer";
const ProductPage = {
    async render(){
        const listpage = 12;
        const start = 0;
        const nextpage = 1;
        const end = listpage;

        const {data:product} = await ProductAPI.list();
        const result = product.map((item,index)=>{
                    return /*html*/ ` <div class="col-span-3 mt-10">
                    <div class="border-2 rounded-md pb-2">
                        <div class="overflow-hidden">
                            <img class="rounded-md hover:scale-110 duration-1000 transform "
                                src="${item.image}" alt=" ">
                        </div>
                        <div class="mx-2">
                            <h3 class="hover:text-green-500 font-bold mt-3"><a href="/#/productDetail/${item.id}">${item.name}</a></h3>
                            <P class="mt-3 text-sm">${item.content}</P>
                            <div class="mt-3">
                                <span class="text-red-500 font-bold ">${item.price}</span>
                                <span class="font-bold ml-2"><del>${item.priceoff}</del></span>
                            </div>
                            <h4
                                class="font-bold uppercase mt-2 text-white bg-green-500 text-sm text-center py-2 hover:bg-green-600 duration-200 rounded-md">
                                <a href="#">đặt món</a>
                            </h4>
                        </div>
                    </div>
                </div>`;
        }).join("");
        return `${await header.render()}<section class="lg:container mx-auto mt-5 mb-10">
        <h5 class="text-sm "><a class="hover:text-green-500" href="/#/">trang chủ</a> / <a class="hover:text-green-500" href="/#/product">Tất cả món ăn</a></h5>
        <div class="mt-2">
            <h4 class="font-bold uppercase text-2xl">Tất cả món ăn</h4>
        </div>
        <div class="grid grid-cols-12 gap-5 mt-5">
            <div class="col-span-6 ">
                <img src="image/cate_slider_1.jpg" alt="">
            </div>
            <div class="col-span-6">
            <img src="image/cate_slider_2.jpg" alt="">
            </div>
        </div>
        <div><h4 class="font-bold uppercase text-center mt-10 text-xl">danh sách sản phẩm</h4>
            <p class="border-b-2 border-green-500 w-64 mx-auto"></p>
            <div class="grid grid-cols-12 gap-5 mt-5">
                ${result}
            </div>
        </div>
        </section>
        ${await footer.render()}`;
    }
}
export default ProductPage;