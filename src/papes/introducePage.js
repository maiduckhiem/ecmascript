import productAPI from "../api/productAPI";
import Header from "../components/website/header";
import footer from "../components/website/footer";
const IntroducePage = {
  async render() {
    try {
      const { data: products } = await productAPI.list();
      return /*html*/ `
      ${await Header.render()}
        <section class="lg:container mx-auto mt-5 mb-10">
        <h5 class="text-sm "><a class="hover:text-green-500" href="/#/">trang chủ</a> / <a class="hover:text-green-500"
                href="/#/introduce">Liên hệ</a></h5>

        <div class="grid grid-cols-12 mt-10">
            <div class="col-span-4">
                <h4 class="font-bold uppercase text-xl">THÔNG TIN LIÊN HỆ</h4>
                <p class=" mt-5 ">Chúng tôi là Evo Pizza. Thương hiệu thuộc quyền sở hữu của tập đoàn Evo Group, một trong những tập
                    đoàn hàng đầu châu Á
                    về ngành khách sạn và ẩm thực cao cấp.</p>
                <h4 class="mt-5 "><span class="font-bold">Địa chỉ:</span> 30 Đường 2/9, Phường Bình Hiên, Quận Hải Châu, Đà Nẵng
                </h4>
                <div class="mt-2 ">
                    <h4 class="font-bold">Điện thoại:<span
                            class="font-bold text-green-500 hover:text-black hover:underline"> 0123 456 789</span></h4>
                </div>
                <div class="mt-2 ">
                    <h4 class="font-bold">Email<span
                            class="font-bold text-green-500 hover:text-black hover:underline"> duckhiem1223@gmail.com</span></h4>
                </div>
            </div>
            <div class="col-span-8">
                <div class="border rounded-lg p-10">
                    <form action="">
                        <h4 class="font-bold uppercase text-xl">LIÊN HỆ VỚI CHÚNG TÔI</h4>
                        <div class="grid grid-cols-12 gap-5 mt-5">
                            <div class="col-span-4">
                                <h5 class="font-bold">Họ và tên*</h5>
                                <div class="border-2 mt-2 border-green-500 rounded-md ">
                                    <input class="w-full p-2 outline-none" type="text" name="" id="" placeholder="Nhập họ và tên">
                                </div>
                            </div>
                            <div class="col-span-4">
                                <h5 class="font-bold">Email*</h5>
                                <div class="border-2 mt-2 border-green-500 rounded-md ">
                                    <input class="w-full p-2 outline-none" type="text" name="" id="" placeholder="Nhập địa chỉ Email">
                                </div>
                            </div>
                            <div class="col-span-4">
                                <h5 class="font-bold">Điện thoại*</h5>
                                <div class="border-2 mt-2 border-green-500 rounded-md ">
                                    <input class="w-full p-2 outline-none" type="text" name="" id="" placeholder="Nhập số điện thoại">
                                </div>
                            </div>
                        </div>
                        <h5 class="font-bold mt-5">Nội dung*</h5>
                        <textarea class="border-2 outline-none border-green-500 rounded-md p-4 mt-2" name="" id="" cols="100%" rows="5"></textarea>
                        <h5 class="bg-green-500 font-bold uppercase w-40 p-2 text-center rounded-md text-white hover:bg-green-700 ml-auto mt-10 "><a href="">gửi tin nhắn</a></h5>
                    </form>
                </div>
            </div>
        </div>
    </section>
    ${await footer.render()}
        `;
    } catch (error) {
      console.log(error);
    }
  },
};
export default IntroducePage;
