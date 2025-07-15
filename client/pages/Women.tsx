import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Eye, ArrowLeft } from "lucide-react";
import { useState } from "react";

const womenShoes = [
  {
    id: 201,
    name: "Rose Gold Runner",
    brand: "Nike",
    price: 189,
    originalPrice: 219,
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop&crop=center",
    hoverImage:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center",
    previewImages: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600&h=600&fit=crop&crop=center",
    ],
    rating: 4.9,
    reviews: 234,
    isNew: true,
    category: "Running",
    colors: ["Rose Gold", "White", "Pink"],
  },
  {
    id: 202,
    name: "Elegant Heel",
    brand: "Jimmy Choo",
    price: 599,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&crop=center",
    hoverImage:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 167,
    isNew: false,
    category: "Formal",
    colors: ["Black", "Nude", "Red"],
  },
  {
    id: 203,
    name: "Casual Comfort",
    brand: "Adidas",
    price: 159,
    originalPrice: 189,
    image:
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=400&h=400&fit=crop&crop=center",
    hoverImage:
      "https://images.unsplash.com/photo-1522016384738-5de5bc184fbe?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 198,
    isNew: true,
    category: "Casual",
    colors: ["White", "Gray", "Pink"],
  },
  {
    id: 204,
    name: "Yoga Flex",
    brand: "Adidas",
    price: 129,
    originalPrice: null,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.1VrREEymv24b-VRcVrJx9QHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3",
    hoverImage:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 145,
    isNew: false,
    category: "Training",
    colors: ["Purple", "Black", "Teal"],
  },
  {
    id: 205,
    name: "Fashion casual shoes",
    brand: "Jimmy Choo",
    price: 279,
    originalPrice: 319,
    image:
      "https://th.bing.com/th/id/OIP.OyFLG034e_Mr_pn3xhnQKQHaHu?w=192&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    hoverImage:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 112,
    isNew: false,
    category: "Lifestyle",
    colors: ["Chestnut", "Black", "Gray"],
  },
  {
    id: 206,
    name: "Ballet Flat Classic",
    brand: "New Balance",
    price: 249,
    originalPrice: null,
    image:
      "data:image/webp;base64,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",
    hoverImage:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 178,
    isNew: true,
    category: "Formal",
    colors: ["Nude", "Black", "Navy"],
  },
];

interface WomenProps {
  onBack: () => void;
  onAddToWishlist: (product: any) => void;
  onAddToCart: (product: any) => void;
}

export default function Women({
  onBack,
  onAddToWishlist,
  onAddToCart,
}: WomenProps) {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/30 dark:to-red-900/30 py-16">
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
            Women's Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Elegant and comfortable footwear for the modern woman. From
            professional elegance to athletic performance.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {womenShoes.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 transform hover:scale-105 hover:-translate-y-3"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted/50 to-card">
                  <img
                    src={product.image}
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
