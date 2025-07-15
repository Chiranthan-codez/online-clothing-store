import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Eye, ArrowLeft } from "lucide-react";
import { useState } from "react";

const menShoes = [
  {
    id: 101,
    name: "Air Max Professional",
    brand: "Nike",
    price: 199,
    originalPrice: 249,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
    hoverImage:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    previewImages: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop&crop=center",
    ],
    rating: 4.8,
    reviews: 156,
    isNew: true,
    category: "Running",
    colors: ["Black", "White", "Red"],
  },
  {
    id: 102,
    name: "Classic Leather Boot",
    brand: "Timberland",
    price: 249,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    hoverImage:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 203,
    isNew: false,
    category: "Casual",
    colors: ["Brown", "Black", "Tan"],
  },
  {
    id: 103,
    name: "Sport Runner Elite",
    brand: "Adidas",
    price: 179,
    originalPrice: 199,
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop&crop=center",
    hoverImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 134,
    isNew: true,
    category: "Training",
    colors: ["Blue", "Gray", "Black"],
  },
  {
    id: 104,
    name: "Business Oxford",
    brand: "Cole Haan",
    price: 299,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    hoverImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
    rating: 4.9,
    reviews: 89,
    isNew: false,
    category: "Formal",
    colors: ["Black", "Brown", "Cognac"],
  },
  {
    id: 105,
    name: "Street Style Sneaker",
    brand: "Puma",
    price: 149,
    originalPrice: 179,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&crop=center",
    hoverImage:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 167,
    isNew: false,
    category: "Lifestyle",
    colors: ["White", "Black", "Gray"],
  },
  {
    id: 106,
    name: "Trail Running Pro",
    brand: "Merrell",
    price: 189,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center",
    hoverImage:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 142,
    isNew: true,
    category: "Outdoor",
    colors: ["Green", "Brown", "Black"],
  },
];

interface MenProps {
  onBack: () => void;
  onAddToWishlist: (product: any) => void;
  onAddToCart: (product: any) => void;
}

export default function Men({
  onBack,
  onAddToWishlist,
  onAddToCart,
}: MenProps) {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-brand-100/20 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 hover:scale-105 transition-transform duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Men's Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover our premium collection of men's footwear designed for every
            occasion. From athletic performance to professional style.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menShoes.map((product) => (
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
                  {product.isNew && (
                    <Badge className="absolute top-3 left-3 bg-primary animate-bounce">
                      New
                    </Badge>
                  )}
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
                  {product.originalPrice && (
                    <Badge
                      variant="destructive"
                      className="absolute bottom-3 left-3 animate-pulse"
                    >
                      Sale
                    </Badge>
                  )}
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
                      <span className="text-xl font-bold">
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
                  <Button
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:scale-105"
                    style={{ backgroundColor: "rgba(220, 38, 38, 1)" }}
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
