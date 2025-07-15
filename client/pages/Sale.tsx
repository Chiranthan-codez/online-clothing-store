import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Eye, ArrowLeft } from "lucide-react";
import { useState } from "react";

const saleShoes = [
  {
    id: 401,
    name: "Classic Air Max",
    brand: "Nike",
    price: 119,
    originalPrice: 199,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
    hoverImage:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 345,
    discount: 40,
    category: "Running",
    colors: ["Red", "Black", "White"],
  },
  {
    id: 402,
    name: "Urban Street Style",
    brand: "Adidas",
    price: 99,
    originalPrice: 159,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center",
    hoverImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 234,
    discount: 38,
    category: "Casual",
    colors: ["Blue", "Gray", "White"],
  },
  {
    id: 403,
    name: "Professional Oxfords",
    brand: "Cole Haan",
    price: 179,
    originalPrice: 299,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    hoverImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 156,
    discount: 40,
    category: "Formal",
    colors: ["Black", "Brown", "Cognac"],
  },
  {
    id: 404,
    name: "Training Beast",
    brand: "Puma",
    price: 89,
    originalPrice: 149,
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop&crop=center",
    hoverImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 198,
    discount: 40,
    category: "Training",
    colors: ["Black", "Orange", "Blue"],
  },
  {
    id: 405,
    name: "Elegant Heels",
    brand: "Jimmy Choo",
    price: 399,
    originalPrice: 649,
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop&crop=center",
    hoverImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    rating: 4.9,
    reviews: 123,
    discount: 39,
    category: "Formal",
    colors: ["Black", "Nude", "Red"],
  },
  {
    id: 406,
    name: "Canvas Classic",
    brand: "Converse",
    price: 49,
    originalPrice: 89,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&crop=center",
    hoverImage:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 289,
    discount: 45,
    category: "Lifestyle",
    colors: ["Black", "White", "Red"],
  },
];

interface SaleProps {
  onBack: () => void;
  onAddToWishlist: (product: any) => void;
  onAddToCart: (product: any) => void;
}

export default function Sale({
  onBack,
  onAddToWishlist,
  onAddToCart,
}: SaleProps) {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 hover:scale-105 transition-transform duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Sale Collection</h1>
            <Badge className="bg-red-500 text-white text-lg px-4 py-2 animate-pulse">
              Up to 45% OFF
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Don't miss out on these incredible deals! Limited time offers on
            premium footwear from top brands.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {saleShoes.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 transform hover:scale-105 hover:-translate-y-3"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted/50 to-card">
                  <img
                    src={
                      hoveredProduct === product.id
                        ? product.hoverImage
                        : product.image
                    }
                    alt={product.name}
                    className="w-full h-full object-cover p-4 group-hover:scale-110 transition-all duration-500 ease-out"
                  />
                  <Badge className="absolute top-3 left-3 bg-red-500 text-white animate-pulse">
                    {product.discount}% OFF
                  </Badge>
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="w-8 h-8 hover:scale-110 transition-transform duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToWishlist(product);
                      }}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="w-8 h-8 hover:scale-110 transition-transform duration-300"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                  <Badge
                    variant="destructive"
                    className="absolute bottom-3 left-3 animate-bounce"
                  >
                    Limited Time
                  </Badge>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">
                      {product.brand}
                    </p>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
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
                      <span className="text-xl font-bold text-red-600">
                        ₹{product.price * 80}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        ₹{product.originalPrice * 80}
                      </span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="text-center text-sm text-green-600 font-medium">
                    You Save: ₹{(product.originalPrice - product.price) * 80}
                  </div>
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/80 transition-all duration-300 transform group-hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
