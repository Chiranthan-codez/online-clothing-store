import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingBag, Search, User, Menu } from "lucide-react";
import { useState } from "react";

const featuredProducts = [
  {
    id: 1,
    name: "Air Max Revolution",
    brand: "SportFlow",
    price: 179,
    originalPrice: 199,
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 124,
    isNew: true,
    category: "Running",
  },
  {
    id: 2,
    name: "Urban Walker Pro",
    brand: "CityStep",
    price: 139,
    originalPrice: null,
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 89,
    isNew: false,
    category: "Casual",
  },
  {
    id: 3,
    name: "Elite Performance",
    brand: "PowerFit",
    price: 199,
    originalPrice: 249,
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 156,
    isNew: true,
    category: "Training",
  },
  {
    id: 4,
    name: "Classic Canvas",
    brand: "RetroStyle",
    price: 89,
    originalPrice: null,
    image: "/placeholder.svg",
    rating: 4.4,
    reviews: 67,
    isNew: false,
    category: "Lifestyle",
  },
];

const categories = [
  { name: "Running", icon: "🏃", description: "Performance running shoes" },
  { name: "Casual", icon: "👟", description: "Everyday comfort" },
  { name: "Training", icon: "💪", description: "Gym & fitness" },
  { name: "Lifestyle", icon: "✨", description: "Fashion forward" },
];

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-brand-600 bg-clip-text text-transparent">
                StepUp
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                Men
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                Women
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                Kids
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                Sale
              </a>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search shoes..."
                  className="pl-10 pr-4 py-2 w-64 bg-muted rounded-full border-0 focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-4 py-4 space-y-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search shoes..."
                  className="pl-10 pr-4 py-2 w-full bg-muted rounded-full border-0 focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              <a
                href="#"
                className="block text-foreground hover:text-primary transition-colors"
              >
                Men
              </a>
              <a
                href="#"
                className="block text-foreground hover:text-primary transition-colors"
              >
                Women
              </a>
              <a
                href="#"
                className="block text-foreground hover:text-primary transition-colors"
              >
                Kids
              </a>
              <a
                href="#"
                className="block text-foreground hover:text-primary transition-colors"
              >
                Sale
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-background to-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  New Collection 2024
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Step Into Your
                  <span className="block bg-gradient-to-r from-primary to-brand-600 bg-clip-text text-transparent">
                    Best Performance
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Discover premium athletic footwear designed for comfort,
                  style, and peak performance. From running to lifestyle, find
                  your perfect pair.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Shop Collection
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Explore Brands
                </Button>
              </div>
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">✓</span>
                  </div>
                  Free shipping over ₹6000
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">↩</span>
                  </div>
                  30-day returns
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/5 to-brand-100/50 rounded-3xl p-8 relative overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Featured Shoe"
                  className="w-full h-full object-contain transform rotate-12 scale-110"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-300/30 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Shop by Category</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the perfect shoes for every activity and style preference
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/50"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Featured Products
              </h2>
              <p className="text-lg text-muted-foreground">
                Handpicked favorites from our latest collection
              </p>
            </div>
            <Button variant="outline" className="hidden sm:flex">
              View All Products
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden border-0"
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted/50 to-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-3 left-3 bg-primary">
                      New
                    </Badge>
                  )}
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  {product.originalPrice && (
                    <Badge
                      variant="destructive"
                      className="absolute bottom-3 left-3"
                    >
                      Sale
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4 space-y-3">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      {product.brand}
                    </p>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">
                        ₹{product.price * 80}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{product.originalPrice * 80}
                        </span>
                      )}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Button variant="outline">View All Products</Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-primary to-brand-600 text-primary-foreground border-0">
            <CardContent className="p-8 lg:p-12 text-center space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold">
                Stay in the Loop
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Be the first to know about new arrivals, exclusive deals, and
                style tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground focus:ring-2 focus:ring-primary-foreground focus:outline-none"
                />
                <Button variant="secondary" className="px-8">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-brand-600 bg-clip-text text-transparent mb-4">
                StepUp
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Premium athletic footwear for the modern athlete. Step up your
                game with our collection.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  f
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  𝕏
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  in
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Men's Shoes
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Women's Shoes
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Kids' Shoes
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Sale
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Size Guide
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Returns
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Shipping
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 StepUp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
