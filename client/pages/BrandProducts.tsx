import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Eye, ArrowLeft } from "lucide-react";
import { useState } from "react";

const brandProductsData: { [key: string]: any[] } = {
  nike: [
    {
      id: 1001,
      name: "Air Max Revolution",
      brand: "Nike",
      price: 179,
      originalPrice: 199,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
      rating: 4.8,
      reviews: 124,
      isNew: true,
      category: "Running",
      colors: ["Red", "Black", "White"],
    },
    {
      id: 1002,
      name: "Air Zoom Pegasus",
      brand: "Nike",
      price: 219,
      originalPrice: 249,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
      rating: 4.8,
      reviews: 342,
      isNew: true,
      category: "Running",
      colors: ["Blue", "Black", "White"],
    },
    {
      id: 1003,
      name: "Air Max Professional",
      brand: "Nike",
      price: 199,
      originalPrice: 249,
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/efbef650-d3bf-4808-8988-f1212d3dcce4/air-max-90-shoes-kkLZj6.png",
      hoverImage:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
      rating: 4.8,
      reviews: 156,
      isNew: true,
      category: "Training",
      colors: ["Black", "White", "Red"],
    },
    {
      id: 1004,
      name: "Metcon 8",
      brand: "Nike",
      price: 199,
      originalPrice: 229,
      image:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
      rating: 4.7,
      reviews: 298,
      isNew: true,
      category: "Training",
      colors: ["Black", "Orange", "White"],
    },
    {
      id: 1005,
      name: "Blazer Mid '77",
      brand: "Nike",
      price: 149,
      originalPrice: 169,
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop&crop=center",
      rating: 4.5,
      reviews: 387,
      isNew: true,
      category: "Lifestyle",
      colors: ["White", "Black", "Cream"],
    },
    {
      id: 1006,
      name: "Rose Gold Runner",
      brand: "Nike",
      price: 189,
      originalPrice: 219,
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center",
      rating: 4.9,
      reviews: 234,
      isNew: true,
      category: "Women",
      colors: ["Rose Gold", "White", "Pink"],
    },
    {
      id: 1007,
      name: "Air Force 1 Low",
      brand: "Nike",
      price: 119,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1520256862855-398228c41684?w=400&h=400&fit=crop&crop=center",
      rating: 4.7,
      reviews: 892,
      isNew: false,
      category: "Lifestyle",
      colors: ["White", "Black", "Red"],
    },
    {
      id: 1008,
      name: "React Element 55",
      brand: "Nike",
      price: 169,
      originalPrice: 199,
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8a9efd65-db93-482c-94f0-ad34a3b21265/air-max-270-mens-shoes-KkLcGR.png",
      hoverImage:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop&crop=center",
      rating: 4.6,
      reviews: 445,
      isNew: false,
      category: "Running",
      colors: ["Gray", "Blue", "Black"],
    },
    {
      id: 1009,
      name: "Dunk Low Premium",
      brand: "Nike",
      price: 139,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d2f?w=400&h=400&fit=crop&crop=center",
      rating: 4.8,
      reviews: 567,
      isNew: true,
      category: "Lifestyle",
      colors: ["White", "Green", "Orange"],
    },
  ],
  adidas: [
    {
      id: 2001,
      name: "UltraBoost DNA",
      brand: "Adidas",
      price: 199,
      originalPrice: null,
      image:
        "https://footwearnews.com/wp-content/uploads/2023/02/Ultraboost_Light_Running_Shoes_Black_HQ6339_01_standard-e1677164866275.jpg",
      hoverImage:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
      rating: 4.7,
      reviews: 287,
      isNew: false,
      category: "Running",
      colors: ["White", "Black", "Gray"],
    },
    {
      id: 2002,
      name: "Stan Smith Classic",
      brand: "Adidas",
      price: 129,
      originalPrice: 149,
      image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/3e0a851dc25f4404981abd72fe8d02ee_9366/Solarcontrol_2.0_Shoes_Black_HP9648_01_standard.jpg",
      hoverImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
      rating: 4.6,
      reviews: 456,
      isNew: false,
      category: "Casual",
      colors: ["White", "Green", "Navy"],
    },
    {
      id: 2003,
      name: "Forum Low",
      brand: "Adidas",
      price: 139,
      originalPrice: null,
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3ddf058eeae74c769a571c9500b0f19a_9366/Ultraboost_5_Shoes_White_JH9070_HM1.jpg",
      hoverImage:
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop&crop=center",
      rating: 4.4,
      reviews: 234,
      isNew: false,
      category: "Lifestyle",
      colors: ["White", "Blue", "Black"],
    },
    {
      id: 2004,
      name: "DropSet Trainer",
      brand: "Adidas",
      price: 189,
      originalPrice: 219,
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/90c6a6fa827a4da18102d9ede0382778_9366/Adizero_Boston_12_Shoes_Black_ID4234_HM1.jpg",
      hoverImage:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center",
      rating: 4.8,
      reviews: 167,
      isNew: true,
      category: "Training",
      colors: ["Gray", "Black", "Green"],
    },
    {
      id: 2007,
      name: "Superstar Shell Toe",
      brand: "Adidas",
      price: 99,
      originalPrice: null,
      image:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f3d1378302174857a14819683114d7cf_9366/adizero-boston-12-running-shoes.jpg",
      hoverImage:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center",
      rating: 4.8,
      reviews: 1234,
      isNew: false,
      category: "Lifestyle",
      colors: ["White", "Black", "Gold"],
    },
    {
      id: 2008,
      name: "NMD R1 V2",
      brand: "Adidas",
      price: 179,
      originalPrice: 199,
      image:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d5949e110c4d46618e34adf9017834ec_9366/solarglide-5-shoes.jpg",
      hoverImage:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop&crop=center",
      rating: 4.5,
      reviews: 678,
      isNew: true,
      category: "Lifestyle",
      colors: ["Black", "Red", "Blue"],
    },
    {
      id: 2009,
      name: "Solar Glide 5",
      brand: "Adidas",
      price: 149,
      originalPrice: null,
      image:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/21ba89e1a28e4ce6961d0b4eeb044354_9366/adizero-sl2-running-shoes.jpg",
      hoverImage:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
      rating: 4.6,
      reviews: 345,
      isNew: false,
      category: "Running",
      colors: ["Blue", "Orange", "White"],
    },
  ],
  puma: [
    {
      id: 3001,
      name: "Velocity Nitro",
      brand: "Puma",
      price: 159,
      originalPrice: null,
      image:
        "https://images-static.nykaa.com/media/catalog/product/d/a/da48daa19325616_n5_.jpg",
      hoverImage:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
      rating: 4.5,
      reviews: 167,
      isNew: false,
      category: "Running",
      colors: ["Green", "Black", "Yellow"],
    },
    {
      id: 3002,
      name: "Suede Classic",
      brand: "Puma",
      price: 119,
      originalPrice: 139,
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop&crop=center",
      rating: 4.3,
      reviews: 198,
      isNew: false,
      category: "Casual",
      colors: ["Blue", "Red", "Black"],
    },
    {
      id: 3003,
      name: "Cross Trainer Elite",
      brand: "Puma",
      price: 159,
      originalPrice: 179,
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
      rating: 4.4,
      reviews: 143,
      isNew: false,
      category: "Training",
      colors: ["Yellow", "Black", "Blue"],
    },
    {
      id: 3007,
      name: "RS-X Puzzle",
      brand: "Puma",
      price: 129,
      originalPrice: 149,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center",
      rating: 4.4,
      reviews: 289,
      isNew: true,
      category: "Lifestyle",
      colors: ["Multi", "Black", "White"],
    },
    {
      id: 3008,
      name: "Clyde All-Pro",
      brand: "Puma",
      price: 189,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d2f?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop&crop=center",
      rating: 4.7,
      reviews: 156,
      isNew: false,
      category: "Training",
      colors: ["White", "Red", "Blue"],
    },
  ],
  converse: [
    {
      id: 4001,
      name: "Chuck Taylor All Star",
      brand: "Converse",
      price: 89,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop&crop=center",
      rating: 4.4,
      reviews: 623,
      isNew: false,
      category: "Casual",
      colors: ["Black", "White", "Red"],
    },
    {
      id: 4002,
      name: "Classic Canvas",
      brand: "Converse",
      price: 49,
      originalPrice: 89,
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop&crop=center",
      rating: 4.4,
      reviews: 289,
      isNew: false,
      category: "Lifestyle",
      colors: ["Black", "White", "Red"],
    },
    {
      id: 4007,
      name: "Chuck 70 High Top",
      brand: "Converse",
      price: 109,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&crop=center",
      rating: 4.6,
      reviews: 445,
      isNew: false,
      category: "Lifestyle",
      colors: ["Black", "White", "Cream"],
    },
    {
      id: 4008,
      name: "Run Star Hike",
      brand: "Converse",
      price: 129,
      originalPrice: 149,
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop&crop=center",
      rating: 4.3,
      reviews: 267,
      isNew: true,
      category: "Lifestyle",
      colors: ["Black", "Pink", "Yellow"],
    },
  ],
  reebok: [
    {
      id: 5001,
      name: "Nano X2",
      brand: "Reebok",
      price: 179,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d2f?w=400&h=400&fit=crop&crop=center",
      rating: 4.6,
      reviews: 234,
      isNew: false,
      category: "Training",
      colors: ["Blue", "Black", "Red"],
    },
    {
      id: 5002,
      name: "Classic Leather",
      brand: "Reebok",
      price: 119,
      originalPrice: 139,
      image:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop&crop=center",
      rating: 4.6,
      reviews: 198,
      isNew: false,
      category: "Lifestyle",
      colors: ["White", "Black", "Gray"],
    },
  ],
  "new balance": [
    {
      id: 6001,
      name: "Fresh Foam X",
      brand: "New Balance",
      price: 169,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d2f?w=400&h=400&fit=crop&crop=center",
      rating: 4.6,
      reviews: 156,
      isNew: false,
      category: "Running",
      colors: ["Gray", "Blue", "White"],
    },
    {
      id: 6002,
      name: "Training Flex",
      brand: "New Balance",
      price: 149,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d2f?w=400&h=400&fit=crop&crop=center",
      rating: 4.6,
      reviews: 198,
      isNew: true,
      category: "Training",
      colors: ["Navy", "Gray", "White"],
    },
  ],
  vans: [
    {
      id: 7001,
      name: "Old Skool",
      brand: "Vans",
      price: 99,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop&crop=center",
      rating: 4.7,
      reviews: 342,
      isNew: false,
      category: "Casual",
      colors: ["Black", "White", "Checkered"],
    },
  ],
  "under armour": [
    {
      id: 8001,
      name: "HIIT Trainer",
      brand: "Under Armour",
      price: 169,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d2f?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop&crop=center",
      rating: 4.5,
      reviews: 189,
      isNew: false,
      category: "Training",
      colors: ["Red", "Black", "White"],
    },
  ],
  asics: [
    {
      id: 9001,
      name: "Gel-Nimbus 24",
      brand: "ASICS",
      price: 189,
      originalPrice: 219,
      image:
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d2f?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop&crop=center",
      rating: 4.9,
      reviews: 198,
      isNew: true,
      category: "Running",
      colors: ["Orange", "Blue", "Black"],
    },
  ],
  brooks: [
    {
      id: 10001,
      name: "Ghost 14",
      brand: "Brooks",
      price: 179,
      originalPrice: 199,
      image:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
      rating: 4.8,
      reviews: 234,
      isNew: true,
      category: "Running",
      colors: ["Black", "Red", "White"],
    },
  ],
  timberland: [
    {
      id: 11001,
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
      category: "Outdoor",
      colors: ["Brown", "Black", "Tan"],
    },
  ],
  skechers: [
    {
      id: 12001,
      name: "Princess Sparkle",
      brand: "Skechers",
      price: 59,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop&crop=center",
      rating: 4.9,
      reviews: 203,
      isNew: false,
      category: "Casual",
      colors: ["Pink", "Purple", "Silver"],
    },
  ],
};

interface BrandProductsProps {
  brandName: string;
  onBack: () => void;
  onAddToWishlist: (product: any) => void;
  onAddToCart: (product: any) => void;
}

export default function BrandProducts({
  brandName,
  onBack,
  onAddToWishlist,
  onAddToCart,
}: BrandProductsProps) {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = brandProductsData[brandName.toLowerCase()] || [];
  const brandDisplayName =
    brandName.charAt(0).toUpperCase() + brandName.slice(1);

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
            Back to Brands
          </Button>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {brandDisplayName} Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover the complete {brandDisplayName} collection. Premium quality
            and innovative design in every pair.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {products.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground">
                {brandDisplayName} products will be available soon. Check back
                later!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
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
                      <Badge className="absolute top-3 left-3 bg-red-500 animate-bounce">
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
                      <h3 className="font-semibold text-lg group-hover:text-red-600 transition-colors duration-300">
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
          )}
        </div>
      </section>
    </div>
  );
}
