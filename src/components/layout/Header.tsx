import Link from 'next/link';
import { BookOpen, Menu } from 'lucide-react';
import { Logo } from '@/components/icons/Logo';
import { categories } from '@/lib/data';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold text-foreground">
          <Logo className="h-6 w-6 text-primary" />
          <span>Literary Compass</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {category.name}
            </Link>
          ))}
           <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
              About
            </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                   <Logo className="h-6 w-6 text-primary" />
                  <span className="font-headline">Literary Compass</span>
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/${category.slug}`}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {category.name}
                  </Link>
                ))}
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
