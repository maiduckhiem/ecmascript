import Home from "./papes/home";
import ProductPage from "./papes/productpage";
import { parseRequestUrl , $ } from "./utlis";
import Error404Page from "./papes/Error404page";
import CategoryPage from "./papes/categoryPage";
import IntroducePage from "./papes/introducePage";
import Admin from "./papes/admin/admin";
import ProductAddPage from "../src/papes/admin/productAddPage";
import AdminproductPage from "./papes/admin/adminproductPage";
import EditProductPage from "../src/papes/admin/editProductPage";
import UserPage from "./papes/userPage";
import ListAddPage from "./papes/admin/listAddPage";
import Editlist from "./papes/admin/editList";
import ProductDetail from "./papes/productDetail";

const routes = {
  "/": Home,
  "/product": ProductPage,
  "/category/:id": CategoryPage,
  "/introduce": IntroducePage,
  "/admin": Admin,
  "/adminproduct": AdminproductPage,
  "/productadd": ProductAddPage,
  "/editproduct/:id": EditProductPage,
  "/user": UserPage,
  "/productdetail/:id": ProductDetail,
  "/addlist":ListAddPage,
  "/editlist/:id": Editlist
};

const router = async () => {
  const { resource, id } = parseRequestUrl();
  const parseUrl = (resource ? `/${resource}` : "/") + (id ? "/:id" : "");
  const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;
  
  $("#root").innerHTML = await page.render();
  if (page.afterRender) {
   await page.afterRender();
  }
};

window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);
