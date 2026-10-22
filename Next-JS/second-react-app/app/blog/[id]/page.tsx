// import React from "react";

// type ProductPageProp = {
//   params: Promise<{
//     id: string;
//   }>;
// };

// const page = async ({ params }: ProductPageProp) => {
//   const { id } = await params;

//   console.log(id);

//   const response = await fetch(`https://dummyjson.com/products/${id}`);
//   const data = await response.json();
//   console.log(data);

//   return <div>page</div>;
// };

// export default page;




"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ShoppingBag, Zap, CheckCircle, X, ExternalLink, Maximize2 } from "lucide-react";

interface ProductClientActionsProps {
  product: any;
  originalPrice?: string;
  isInteractiveFormOnly?: boolean;
}

export default function ProductClientActions({ product, originalPrice, isInteractiveFormOnly = false }: ProductClientActionsProps) {
  const minQty = product?.minimumOrderQuantity || 1;
  const [quantity, setQuantity] = useState<number>(minQty);
  const [selectedImage, setSelectedImage] = useState<string>(product?.images?.[0] || product?.thumbnail);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => {
    if (quantity > minQty) {
      setQuantity(prev => prev - 1);
    } else {
      showNotification(`Minimum order quantity is ${minQty} units.`);
    }
  };

  const handleAddToCart = () => {
    showNotification(`Successfully added ${quantity} units of ${product.title} to your bag!`);
  };

  // If this renders just the image gallery section in the left column
  if (!isInteractiveFormOnly) {
    return (
      <div className="space-y-4">
        {/* Main Image Display Card */}
        <div className="relative bg-white border border-stone-200/80 rounded-3xl overflow-hidden shadow-sm group aspect-square flex items-center justify-center p-8">
          <span className="absolute top-4 left-4 z-10 bg-amber-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-xs">
            -{product?.discountPercentage}% Off
          </span>
          <button 
            onClick={() => setIsLightboxOpen(true)}
            aria-label="Expand image"
            className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-md text-stone-700 hover:text-stone-900 p-2.5 rounded-full shadow-xs opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
          
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt={product?.title} 
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Thumbnail Switcher */}
        <div className="grid grid-cols-4 gap-3">
          {product?.images?.map((img: string, index: number) => (
            <button 
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`border-2 rounded-2xl overflow-hidden aspect-square bg-white p-2 shadow-xs transition-all cursor-pointer ${selectedImage === img ? 'border-amber-700' : 'border-transparent hover:border-stone-300'}`}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-contain" />
            </button>
          ))}
        </div>

        {/* Lightbox Modal */}
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-3xl w-full bg-white rounded-3xl p-6 shadow-2xl flex flex-col items-center">
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 bg-stone-100 hover:bg-stone-200 text-stone-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">{product?.title} - High Res View</h3>
              <div className="relative w-full h-[60vh] flex items-center justify-center">
                <img src={selectedImage} alt="Expanded Preview" className="max-h-full max-w-full object-contain rounded-2xl" />
              </div>
            </div>
          </div>
        )}

        {/* Toast Notification Popup */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-stone-900 text-white px-5 py-4 rounded-2xl shadow-2xl border border-stone-800 animate-fade-in text-sm font-medium">
            <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    );
  }

  // Otherwise, render the interactive Quantity Controller & Add-to-Cart form buttons on the right column
  return (
    <div className="space-y-4 pt-2">
      {/* Toast Notification Container for Form actions */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-stone-900 text-white px-5 py-4 rounded-2xl shadow-2xl border border-stone-800 text-sm font-medium">
          <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-stone-700">Quantity:</span>
        <div className="flex items-center border border-stone-300 rounded-2xl bg-white overflow-hidden shadow-xs">
          <button 
            onClick={handleDecrement}
            className="px-4 py-3 text-stone-600 hover:bg-stone-100 transition-colors font-medium cursor-pointer"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <input 
            type="number" 
            min={minQty}
            value={quantity}
            onChange={(e) => {
              const val = parseInt(e?.target?.value);
              if (!isNaN(val) && val >= minQty) setQuantity(val);
            }}
            className="w-16 text-center font-semibold text-stone-900 focus:outline-none bg-transparent text-sm"
          />
          <button 
            onClick={handleIncrement}
            className="px-4 py-3 text-stone-600 hover:bg-stone-100 transition-colors font-medium cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
        <span className="text-xs text-stone-400">Min {minQty} units</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <button 
          onClick={handleAddToCart}
          className="w-full bg-stone-900 text-white font-medium py-4 px-6 rounded-2xl hover:bg-stone-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart ($ {(product.price * quantity).toFixed(2)})
        </button>
        <button 
          onClick={() => {
            handleAddToCart();
            showNotification("Redirecting to secure express checkout...");
          }}
          className="w-full bg-amber-700 text-white font-medium py-4 px-6 rounded-2xl hover:bg-amber-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
        >
          <Zap className="w-4 h-4" />
          Buy Now
        </button>
      </div>
    </div>
  );
}