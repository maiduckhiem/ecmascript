import header from "../components/website/header";
import footer from "../components/website/footer";
import { $ } from "../utlis";
const UserPage = {
  async render() {
    return /*html*/ `
        ${await header.render()}
        <div class="lg:container mx-auto mt-5 mb-10">
        <h5 class="text-sm "><a class="hover:text-green-500" href="/#/">trang chủ</a> / <a class="text-green-500"
                href="/#/user">Đăng nhập tài khoản</a></h5>
        <div class="justify-center flex mt-10">
            <div class="border rounded-md pb-10 p-5">
                    <div class="flex gap-10 ">
                        <div class="mx-20 font-bold uppercase">đăng nhập</div>|
                        <div class="mx-20 font-bold uppercase">
                            đăng ký
                        </div>
                    </div>
                <form id="form-validate">
                    <p class="border-b-2 w-full mt-3"></p>
                    <div class="mt-5">
                        <h5 class="uppercase">email*</h5>
                        <input id="user-email" class="border outline-none w-full p-2 rounded-md mt-1 hover:border-green-500" type="email" name="" id="" placeholder="mời bạn nhập email">
                        <span class="text-sm text-red-500" id="check-validate"></span>
                    </div>
                    <div class="mt-5">
                        <h5 class="uppercase">password*</h5>
                        <input id="user-password" class="border outline-none w-full p-2 rounded-md mt-1 hover:border-green-500" placeholder="mời bạn nhập password" type="password" name="">
                        <span class="text-sm text-red-500" id="check-validate-pass"></span>
                        <p class="text-right text-green-500 text-sm mt-2"><a href="#">quên mật khẩu ?</a></p>
                    </div>
                        <h4><button class="bg-green-500 w-full uppercase rounded-md p-2 mt-10 text-white hover:bg-green-800" type="submit">ĐĂNG NHẬP</button></h4>
                </form>
            </div>
        </div>
    </div>
    ${footer.render()}
    `;
  },
  afterRender() {
    $("#form-validate").addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.querySelector("#user-email").value;
      const password = document.querySelector("#user-password").value;
      if (email == "") {
        document.getElementById("user-email").style.border = "1px solid red";
        document.getElementById("check-validate").innerHTML =
          "Xin mời nhập Email";
      } else if (password == "") {
        document.getElementById("user-password").style.border = "1px solid red";
        document.getElementById("check-validate-pass").innerHTML =
          "Xin mời nhập Password";
      } else {
         window.location.hash = "/admin";
      }
    });
  },
};
export default UserPage;
