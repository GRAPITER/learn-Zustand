import { ShoppingBag, Trash } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { MyStore } from "@/store/store";
import { Card, CardContent } from "./ui/card";
import IncrementButton from "./IncrementButton";
import { Button } from "./ui/button";

export default function Cart() {
  const cartProduct = MyStore((state) => state.products);
  const resetValue = MyStore((state) => state.resetItem);
  return (
    <>
      <Popover>
        <PopoverTrigger className="relative">
          <ShoppingBag className="text-white " size={60} />
          {cartProduct.length > 0 && (
            <div className="border-1 w-5 h-5 rounded-full bg-red-400 absolute -top-2 -right-1"></div>
          )}
        </PopoverTrigger>
        <PopoverContent className="dark min-w-4xl min-h-80">
          <div>
            {cartProduct
              ? cartProduct.map((product) => {
                  return (
                    <Card key={product.id} className="mb-10">
                      <CardContent>
                        <div className="flex justify-between gap-10 items-center flex-col">
                          <h1>{product.title}</h1>
                          <h1>{product.price}$</h1>
                          <div className="flex gap 10 justify-between w-sm">
                            <IncrementButton productId={product.id} />
                            <Button onClick={() => resetValue(product.id)}>
                              <Trash />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })
              : "there is not item nowas"}
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
