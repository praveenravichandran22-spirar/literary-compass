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

// This is a placeholder for cart functionality.
// In a real app, this would come from a cart context or API.
const cartItems = [
  {
    id: "lessons-in-chemistry",
    title: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    price: 17.99,
    imageUrl: "https://images.unsplash.com/photo-1667039487487-2af414218c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Ym9vayUyMGRlc2lnbnxlbnwwfHx8fDE3NTg2MTA1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    quantity: 1,
  },
];

const cartTotal = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
const shippingCost = 5.99;

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-headline font-bold tracking-tight">
        Your Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="mt-8 text-center">
          <p className="text-lg text-muted-foreground">Your cart is empty.</p>
          <Button asChild className="mt-4">
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ul role="list" className="divide-y divide-border">
              {cartItems.map((item) => (
                <li key={item.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-border">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={96}
                      height={144}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-foreground">
                        <h3>
                          <Link href={`/book/${item.id}`}>{item.title}</Link>
                        </h3>
                        <p className="ml-4">${item.price.toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.author}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Label htmlFor={`quantity-${item.id}`} className="sr-only">Quantity</Label>
                        <Input
                          id={`quantity-${item.id}`}
                          type="number"
                          min="1"
                          defaultValue={item.quantity}
                          className="w-16"
                        />
                      </div>

                      <div className="flex">
                        <Button
                          type="button"
                          variant="link"
                          className="font-medium text-primary hover:text-primary/80"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Order summary</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Subtotal</dt>
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
