"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import type { Book } from "@/lib/types";

export function AddToCartButton({ book }: { book: Book }) {
  const { addToCart } = useCart();
  return (
    <Button size="lg" className="mt-6 w-full sm:w-auto" onClick={() => addToCart(book)}>
      Add to Cart
    </Button>
  );
}
