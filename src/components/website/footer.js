import categoryAPI from '../../api/categoryAPI';

const Footer = {
render(){
        try{
            return `<div class="footer bg-black">
        <div class="lg:container mx-auto p-5">
            <div class="grid grid-cols-12 gap-4 mb-10">
                <div class="col-span-3 text-white mt-10">
                    <h4 class="font-bold text-lg">Tổng đài hỗ trợ</h4>
                    <h4 class="font-bold text-1sm mt-5">Hotline: <a
                            class="hover:text-white text-green-500 hover:underline" href="#">0123 456 789</a></h4>
                    <h4 class="font-bold text-1sm">Địa chỉ: gốc cây số 10 trần duy hưng</h4>
                    <h4 class="font-bold text-1sm">Email: <a class="hover:text-green-500 hover:underline"
                            href="#">evoteamthemes@gmail.com</a></h4>
                </div>
                <div class="col-span-3 text-white mt-10">
                    <h4 class="font-bold text-lg">Giới thiệu</h4>
                    <ul class="mt-5">
                        <li class="text-1sm hover:text-green-500 hover:underline"><a href="">Hệ thống nhà hàng</a>
                        </li>
                        <li class="text-1sm hover:text-green-500 hover:underline"><a href="">Câu chuyện thương
                                hiệu</a></li>
                        <li class="text-1sm hover:text-green-500 hover:underline"><a href="">Ưu đãi thành viên</a>
                        </li>
                        <li class="text-1sm hover:text-green-500 hover:underline"><a href="">Tin tức và sự kiện</a>
                        </li>
                        <li class="text-1sm hover:text-green-500 hover:underline"><a href="">Tuyển dụng</a></li>
                    </ul>
                </div>
                <div class="col-span-3 text-white mt-10">
                    <h4 class="font-bold text-lg">Liên hệ</h4>
                    <ul class="mt-5 text-1sm">
                        <li class="hover:text-green-500 hover:underline"><a href="">Liên hệ</a></li>
                        <li class="hover:text-green-500 hover:underline"><a href="">Hướng dẫn mua hàng</a></li>
                        <li class="hover:text-green-500 hover:underline"><a href="">Chính sách mua hàng</a></li>
                        <li class="hover:text-green-500 hover:underline"><a href="">Chính sách bảo mật</a></li>
                        <li class="hover:text-green-500 hover:underline"><a href="">Điều khoản và điều kiện</a>
                        </li>
                    </ul>
                </div>
                <div class="col-span-3 text-white mt-10">
                    <h4 class="font-bold text-lg">Đăng ký nhận tin</h4>
                    <h5 class="mt-5 text-1sm">Nhận thông tin sản phẩm mới nhất , tin khuyến mãi và nhiều hơn
                        nữa.</h5>
                    <div class="mt-3">
                        <input class="w-full outline-none border p-2 rounded-lg bg-black" type="text" name="" id=""
                            placeholder="  Mời bạn nhập gmail">
                        <a href="#">
                            <h4
                                class="text-center bg-green-600 py-2 mt-2 rounded-lg font-bold uppercase hover:bg-green-700">
                                đăng ký</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-green-500">
            <div class="grid grid-cols-12 py-5">
                <div class="col-span-6 mx-auto">
                    <h4 class="text-white">© Bản quyền thuộc về Đức Khiêm | Cung cấp bởi Đức Khiêm</h4>
                </div>
                <div class="col-span-6 mx-auto flex">
                    <div class="mx-5 hover:bg-white hover:text-green-500 rounded-full">
                        <a href=""><i class="fab fa-facebook-f border rounded-full p-2 w-9 text-center"></i></a>
                    </div>
                    <div class="mx-5 hover:bg-white hover:text-green-500 rounded-full"><a href=""><i class="fab fa-instagram border rounded-full p-2"></i></a></div>
                    <div class="mx-5 hover:bg-white hover:text-green-500 rounded-full"><a href=""><i class="fab fa-youtube border rounded-full p-2"></i></a></div>
                    <div class="mx-5 hover:bg-white hover:text-green-500 rounded-full"><a href=""><i class="fab fa-twitter border rounded-full p-2 "></i></a></div>
                </div>
            </div>
        </div>
    </div>`; 
        }catch(error){
            console.log(error);
        }
    }
};
export default Footer;