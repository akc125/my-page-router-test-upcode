import { ServiceBase } from "./service-base";

export default class ProductService extends ServiceBase {
  static getProduct = async () => {
    const res = await fetch(
      this.getUrl("/products")
    );
    const data = res.json();
    return data;
  };
  
  static getProductById = async (id:any) => {
    const res = await fetch(this.getUrl(`/products/+${id}`));
    const data = res.json();
    return data;
  };
}
