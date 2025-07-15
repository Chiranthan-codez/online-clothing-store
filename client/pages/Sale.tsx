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
      "https://tse4.mm.bing.net/th/id/OIP.jAJwd-1KLzyG6w74sWrJwgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3",
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
      "data:image/webp;base64,UklGRgQTAABXRUJQVlA4IPgSAADwbwCdASplAQIBPp1Kn0wlpCKlJNTqILATiWlu+F6oaA5sAIxQ0vtI2oU7fWHsUdD1Pz2Z/L7UC/Hf6FvuoBvz3+9+m7OA/IWIGgB5SP+55J/rj2DvLi9mf7x+zT+5hJ0Azp5AVcLbAM6eQFXAmBHYjDbqq8zht1VeZw9nKd/lliy8KI4ym3jQu0qNqmp7sZp/alyFtwAtww26wElGzMm1svVwFnSkIH37WNb8hrk8j87XTjGfxG0g3JRsyvyMn4SrBCdZLdigFZRsnmcNusBJ6672KiZcrf40W+cvycFcCYDMNCz415UWfAK0BNS6Rs/3NwEesJxlX/Wt1Tlsb0BPRrvwljRTWtoNNJ6Q64SpJyK1TSwxb5dSEXv9JAyzOWXTmCYfUR13ZxZa4YLpoNp1tS40I8EyPkYcTJi12hksOrDGOQvd4Rpiq7H+5FkGTuYxNwmPToYru/6IZ9V84bd/89KBIxEFY3/H76MiIycaOZ5qu6tsalV/hB7ceM0XwmFyjl2lsadbmqTb9CekdYlXUvbM7RwUJdv3353OkDQ9rJ0xa772cfkx1G1+T/JmSXa+f7/yNkU/kX9ljGf0BdJHq3/+l9zoNQs2am066VFpU+SjQK+/5IGFBKgFvCbBXrrDK+Lmv0e7wFehM+0QqraaOntvjyyUmDAi4mxWP9ITPhrBS2qUXljb/3hsuw3ccqfGxNbjooTw3Nykme/Z0fXEa5vgWFO/t3JNT2S78n+klEf2wK7mYSkmI/oKzXpXfWiDOy/3oY2c9JalJNpW5gw3fpAnnX/1yUF37ogbFjEt7WMvzPf7Dibmk/Z9WZxYzSrlIwW2AMxpT0ERUzdTBK1xxN2rslu0TcE1+Di5520zW3mztoYlKJkBgMxU+OmlOuez6fiUGYV5ZhcWMRVfz80pIe0t7F4brJ7I9AsmJaD6pH/y0ZhpLbsj1fnaWRCiSKvSBs2zzNZP8nER76eOljSoSkXcvZdKYSZi+C73AE8nq5yh8gDs2geZ++t/sZ0984sXsbuyyX+HxU4oCvXAIL2HFWXfAqLitP6cKwLXeSLqhBE0JIiff/T/v8uWBn+/bR8pOhO+ZCuNulAqtCaT2aJtYT6mDTjcCTaaw4Dyn15Ar61zb4eLbqElen5IqK5QyXfWbhlVv08RVxKcjMiacMOFnLFOtn5w28EFV5nDbqnLSDDdVXg8AkQAAP7+UovM2JtXUByuQBdd3C1nezeY4TaAHkXnWrk5T0xx0T11hg5P/RzNRG/kua+dwwUavew8PSZNFjfS/yq5AbaGKNoW1abgCtFOR9YfVfEW+C/5nCk4WA1224M0snk+lI3JFY1ygoRnjjRuRSUNxMMLAQL3n15fosZHIZR0X0iEX6kCyNAMJf71zKMbRMLgh3IbyhIN6Rt+jf3/Z5jP4Rbw1RRvdgjORiK7o+de9HOtp7m11k9/ToMPPB84Gy3elkR7jQi+lPiJ+AR6lNuso7dHX/fhA1ayaHqGS4C4DgoZLoiQqEBY2oAAEcseDJg8wRS8cJv+uyjwMyoYir2/W5HfByPyzb5AW4eBzEBlSBwolrqcZmv/9nZUob0IQlNYOZuUt5qylM54+BFP/jyqzXZcVr3JrByr/VW+PL5LGlbiRYG+dd8tieiL8Ma2Rg+YRYykX2OHyBp5XFodlZ41igK7wwIuQ1iseDHqF2TwowmOje6MPJTvnwE88iGDFXbsAGhCf/dp2amtpr3gin4TqYpEy47fJrfN6XTRi4Ea6BhOVEKtflkICCjDLvMH93KpDXe8dlCtJgKkMHLEPHedgcS35GWkswp6DfEW+RGXqFKeuO3csthK6XeOdmgJe1DJDbTSTc9ffddAlXJpTVcHRl0zLbYIOyI5olUhb87tG01cbr7A8en9svdbhdZaXnGR7qna30doBPPiBou3MMrCRs7CgX51jzuiUaJym7lSS9SXAE3IiPDwsN21B/ApMvgdH5VvzF5sXybs+WIr+c7OkJdcVkuv2vZJTIiuPuKDaz3SdBnfW7rWrcjxz966IlINsyFVpxNdADwuMvsjJS3uo7+2S46yw5F4GbYgwG/3cnT9RB6Ar79ZFZIeiKU3L4A00kCaHzG8CDzeHgPlpCTLqNqqz+Y9ebG8qNbaxqAfKupK8nUBHWfJTZM9WOqph7v68fremN07iBhjULlT+Hs6dBdrKj5skiDkizSJHwOtVbyTJZJESNxYgWJ4MgEu3jIxMp8oLjZpaxynjO2itAGaHJt7WpALDE8WV9XgYDOT3BzOoqnWQ8moNzQMo2I54JcdI/a62zdY5AebAbVa3RzYtRtuZCpmIsPQ0dn/xxq2D2xeF+G7CW2KZz8mQPGBTJ4OvBZiXHruXpDSIumBzupmEAbzXA4XDI5NHqjPill58QBlbfWMD8njOCvJsOfhrSnuQnqizwq9ynY8IS8GLDrf+kyQQa4aOewKgh1SIhnzbG7QWeSz1F3RwFwZyO1vyzKkcwSHzcZH9Tu8PIZXnnXpIIFcphO3JRDKFNJ5HW9O+3v4leGB6UM/oTYIkHjqtxc1FKfZ/oRlKL+ZHEsDQFQSfJRt51O9pQuWzPjut0B8oWoltX2JfXf+gzs1P6u6gkEKXd6djUrXAv7c9LWzJBxRieO36Y36b8fN1bl7rph9uvPLaHygeJkMZ0I6nGaswWUaqOLKokFZYYT2BKwIprlZFu3YvVdP/urx0lXZu7XkYP3J+Y2NizyhWWQTXqDoha9i3ioQiT2itDHyglzhccCs1Utpsvn9K5JClTaOe5cvdWznFAccRJ3OseALansSca7Z6CoDZCpKZiiDISvgs5l6CxpvdIaBH38WqHPfRCoQsFxYTgKzeSDTD3wzumU1CGE2TB9OOSDWkpjoJNOyvy53A4WUKLfUUWuL7ISn0FUB1ZvCLyxf3Awuo/5DMpK08cxzazW+QbkVeSwSahycOqTFmxtJeQWFUWQVVCUxcXUzVMpisASp0zntbhwZoTg1mKuinTXdcTDaFI1r5sJI/J0MU7TqKxdXKEeXbpLHwMOHnQ5MiVQBF9mG+MdQT1XixwjtXxQr7BFVGg9u09IyR8neuTs44QPG3ORVEGDVemEQwc+lcofJf3pwWl1NNMVgOD9oKGstLJohMt4csfpbAlyhtnWGXMxtOxHhhtygSmzrh7/t8c5m5cp2mSXbxXVXTmLCtmEPJIy5NEGRlM/peHIOy8lcy4N2G8rt9bCRM0QieT1arLjgUR4ALcqUbZ7mOmsYe4zd3kz04mvDQQDIpYqGUqSJ/k9YMUXK5ZwyOL05Amed80FRnFY7Kn3xvK60fhVE23V0Cg+XZmhnimfLPmjA3n7zPwpjS0k6wd7G7CZfHCGjDDGus7IY7KEVh7nScfDQgYg2lRcFo870/ar4Ov/qjQv/cNAFOvrTU4kOG2VDeVWBIjpTr3Y9rI0W1EvEzh4ZfiXcFEgs4d3XBGW9Hc3mm7C5Y8UnMpbE3O1VvcQQmrtJdIyFizFysQ1IjBIRcsafA0EGiP/ZU81JZAU+1RAfRvJbFqTXBAtpHaNt2UMUfy2n8Ctw0xZg3MpY9HtdP15OToBjxnBbvFHitVMD18nkf81YdytZbM+Ra1bsj41CGBys+rK2kKEgNF+2Dci8YUyNU9f6HcQ0Y/L9VXHEG+poSseU3pybtpQ/DmrilJVq1zye7jUiHNW31yNL/3c1M+R7FCPDON/Vgbt/YKgGrH78vK5oEQB+hKNxsae8L+4ZQ+8G8WIPPm/GtzOUpyJIY1b0uySTiKXz6EEHPELLp1wMZ6I8zGXIv5LkfO5QQoWKXFC4cOoMS0kZklkCZeyxR9nGVQwXpkoLSXYrUJvIDniKfzCp4LuMzFfYp6azmE9JOSAbDAVtQ7uyF+iLPGS0tfba6C0Reqln2K4Tgo4R7Y4+c4AVD86p0cutolyirAckVLK45MIbst9tLz8acGXu5AfasEFJA3dMc11zyVEUmIRlmLsKZHJ/qaHakg7M0qF5Of7zHH7Up4P/0FDu39yiew3upwAii/St1rFGVEMh8HWoqhEDXfoZDGRdaE43NiUe4hZsmDzcDXnobOfnYdYqGtRcHWAp/UobhxD6BqINrN4yz0y/BKMyP8Ph+OnM688/NdmRUX2mSIUEn4uibO+1mj/JZfyGZRQebapSAv27+k1M4A09J8y0AOtldxVsIa2lD9Pwbyi8sscvIRAp9iwIKPkxLz7hAjKvKCh+3aR/PX/dtJKphSRCveXBiO27U+nZjBstTftJXzBMIRs176AYvIvYgfer6ypGCiMoSFpKnVKVGCAAoErq9pBqmhSMUAANmcLEikpPpZ4JeJyjY74YLXwfJDEggUp56XsWM+CTA1FdeZt19BuZncagvCpDDddjnY9y5amR26C1mRf3UiO+GBWyguCPzEg6HITNvc4WEQ+9l1qbw8ezkV4EVCpvWEvUfMrA7LQNtcODDneUJ2kP9C0a7Q6AHzomKxZS80g9Fv7ED6BleGzcRKmORtI4OzQ84Wh5HzAZ6LLE8aU7gWpG9gupras+yHlybyP2hvW/G14e2yjqIY808SiWJRm4qMgavIPClnhVLLV1hwRcsJ+1rg7KPlDZReR1YUrkbPnD2gVEDE5Ydzo82GEbAPgINzlmUfsDAaZc17+h2mmMyWdfQtugZFXQdrK35ixyfhVjgnM1VNLWpFW50f6rZJDlh4B4dlTqsgFsOVcxIVLElnYky3l7tjLkGXiJrSGO+uLGC8IBvnPx3I5asTlKJ0HKiADVGSWmxIpdJrNBEtTIOCfbC3hjs5EXiqKdvQf8qDPbKMnaAy0fIEAGOwEDp7M+uxe5Q+rC9kRWDk5b7quXlDaVbILI55QHn03bzv3LMtRGq7tvs1TaWpzjcp/XBifiHx8+af1NIfRztkZrKklB04LsdfjHIvkGczM34Th6gZxOBBV2m1s9KjnWLXcRlAFHzRHPv16KDuCIALyfUVi1XZ+EOJJqWvZf2QBVOL+ifleLSrTJPKllXlupbvKPMzN6R+t7gjYePQHQTmCTiK8VKX2bzCMqod0v5nspSZJOn/yfUocK085ZBN3zWvOI0aplxdM/3mOX+6kz5pLVxV/j/2IGYJILxSzAv8mA7GYjTkCHGDvr14bZMmAlu+KrE+Gpx7/cjqmd0oO0TTZE4/vIIxFrSTBT7dkoVAJWuF4G5cU8NU1CYGW1/PiCr/gg6gl5K3l+ARlgyeFw+9wY2NoF1I9Dn354LxYYitlESilHeKJEKMeAR33Ae213sGNquFcP40Jwi5oRcWRKTMpz/AKOf9L/keXGuoSFSggXzCod0T0wmCTeR9GJ1TFqVqutOdNv63UIWq5CGLkLYyft+ti4zxwTy9gDczMZfDMqKKsFCe9o/K263nYRKtnNqsu+RJ7U9U66C5bXUqX3owfTh205Lcm8c5u8PGfSIEr4TkcGyKXHAdibo6AdxxWPqNVce8zE20Yko73xqUgkByrPQT+F/fTZ6nHv8fjD0ave5w0IcH/XPIRIGrt8adx742hwBhu3QAQGhquuHEQ8rTr+x673SQ7kqJ0ryvdgQlkg9fCvMeccGjj67hgRksKq95SqQUAVKRAEiICTJ5NzblT8OSOwUJqiCPpU05SOhFnI4gN3djNjexyvbvn+J8JzSVODaxI7NHhhaHYhgQwbwvCuAhSgISkJXDGfchMy+N3KtBOEu9vpRyq8g8vd9QXNyv0CHOHpw8XMuEEd8X9mhxpVV48C75oCteHW05tupmNGUAHbLsb5M8QTeRee5hnAOObV5eF+PM4vKXNB0IiIGZ7Ni+ZR5tuJJNXIQfzbjiVFTJk186iTOxEzKAsVZmY+WXjhMO4MrdQMTPcwsfR2UF6NDTM+cXZZOfAzJweACmxCtrNhEGSPMYRou413I+qo7YhOFsekH0y6tvjxvK1SfCvtC6OVvmRfH9pinrWfZoJ2gl6z49u9zmWEwnVIoESWs8cxJ9bTchRSHi2lcHjuku+0WEAQnbmK/sMbwmr+fJVN6HRa/rSAtH7/iJ0Totv3LGd9b5dCB4I0+Nz1JAUwsaEwhAJqbL357IAFDhk/zIX6jdoimyZlkvO0Yxla6PYljMhoO60X7hUxvf+A3emck/CAZ9OCSCIlHyp+XKDQGgFBHpH0Hib7omabmeiWnuETGk2uWr/W9rTcTr/ezPx6I5jYTYQU9LqyIXCxyCeDZ5CNZm85aVLtkKSXr44S74pD4QAzL42LqoFvSIk7+6X8gftFRYRSdKAAvrYVoK5R0sKKEr/eWE3gR6REMCBEWCrvmxiLYo3J9YuxC6UTk5jzvJwOPouGBDhh8ytGM5l2dFi+qWCp2JwMpm0/LmWJnsfrqOcJcwtqWCbvAOVitAD6UcmQrvnC+paIyNgJI2Hrx1pBQpuRmDf9tf1VWr7oAyuwV71UqpguQKB14xWjr8aQILU+G1pvQ5qgNtYEMaARVeukIp7CKKJ1EAAAAA==",
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
      "https://th.bing.com/th/id/OIP.CHlEpKSmBd8LDMVjHZO2GAHaHa?w=203&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7",
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
      "https://th.bing.com/th/id/OIP.Q4HNzvCXCv40VG82YnuhugHaFj?w=261&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
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
      "https://tse1.mm.bing.net/th/id/OIP.x_4G_kvXstPm2LwgXD7_IQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3",
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
                    src={product.image}
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
