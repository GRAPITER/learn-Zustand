import { MyStore } from "@/store/store";
import { Button } from "./ui/button";

export default function IncrementButton({ productId }: { productId: string }) {
  const addquantity = MyStore((state) => state.incQuantity);
  const decquantity = MyStore((state) => state.decQuantity);
  const cartProduct = MyStore((state) => state.products);
  return (
    <div>
      <Button onClick={() => decquantity(productId)}>-</Button>

      {cartProduct.map((pro) => {
        if (pro.id === productId) {
          return pro.quantity;
        }
      })}
      <Button onClick={() => addquantity(productId)}>+</Button>
    </div>
  );
}
