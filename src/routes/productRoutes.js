export async function routes_Products(app) {
  const { controller_Products } = await import("../controllers/index.js");

  app.post("/product", controller_Products.addProduct);

  app.get("/products", controller_Products.getAllProduct);

  app
    .route("/product/:id")
    .get(controller_Products.getOneProduct)
    .delete(controller_Products.deleteProduct);
}
