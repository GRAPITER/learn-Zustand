import "./App.css";
import Cart from "./components/Cart";
import IncrementButton from "./components/IncrementButton";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { PRODUCTS_DATA } from "./lib/mockdata";
import { MyStore } from "./store/store";

function App() {
  const cartProduct = MyStore((state) => state.products);
  console.log(cartProduct);
  const addProduct = MyStore((state) => state.addProduct);
  const reserValue = MyStore((state) => state.resetItem);
  return (
    <div className="bg-black  min-h-screen flex w-full">
      <div className="max-w-lg  flex-1 p-10  mx-auto">
        <div className="w-full flex justify-end">
          <Cart />
        </div>
        <h1 className="text-white font-bold text-3xl mb-8">Products:</h1>
        {PRODUCTS_DATA.map((product) => {
          return (
            <Card key={product.id} className="dark m-3  ">
              <CardContent className="">
                <div className="flex justify-between gap-10 items-center flex-col">
                  <h1>{product.title}</h1>
                  <h1>{product.price}$</h1>
                  <div className="flex justify-between gap-10 items-center">
                    {cartProduct.find((item) => item.id === product.id) ? (
                      <IncrementButton productId={product.id} />
                    ) : (
                      <Button onClick={() => addProduct(product)}>
                        Add to Cart
                      </Button>
                    )}

                    <Button
                      className="ml-10"
                      onClick={() => reserValue(product.id)}
                    >
                      Reset Item
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default App;
