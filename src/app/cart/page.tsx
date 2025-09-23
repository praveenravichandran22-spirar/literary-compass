"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";
import { X } from "lucide-react";

const shippingCost = 5.99;

export default function CartPage() {
  const { cartItems, cartTotal, removeFromCart, updateQuantity, cartCount } = useCart();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-headline font-bold tracking-tight">
        Your Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="mt-8 text-center border-2 border-dashed rounded-lg py-24">
          <p className="text-lg text-muted-foreground">Your cart is empty.</p>
          <Button asChild className="mt-6">
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <ul role="list" className="divide-y divide-border">
              {cartItems.map((item) => (
                <li key={item.book.id} className="flex py-6">
                  <div className="h-32 w-24 flex-shrink-0 overflow-hidden rounded-md border border-border">
                    <Image
                      src={item.book.imageUrl}
                      alt={item.book.title}
                      width={96}
                      height={144}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-foreground">
                        <h3>
                          <Link href={`/book/${item.book.id}`}>{item.book.title}</Link>
                        </h3>
                        <p className="ml-4">${(item.book.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.book.author}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Label htmlFor={`quantity-${item.book.id}`} className="sr-only">Quantity</Label>
                        <Input
                          id={`quantity-${item.book.id}`}
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.book.id, parseInt(e.target.value))}
                          className="w-20"
                        />
                      </div>

                      <div className="flex">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:text-primary"
                          onClick={() => removeFromCart(item.book.id)}
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 sticky top-24">
            <Card>
              <CardHeader>
                <CardTitle>Order summary</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Subtotal ({cartCount} items)</dt>
                  <dd>${cartTotal.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Shipping</dt>
                  <dd>${shippingCost.toFixed(2)}</dd>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <dt>Order total</dt>
                  <dd>${(cartTotal + shippingCost).toFixed(2)}</dd>
                </div>
                <Button size="lg" className="w-full">
                  Checkout
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
