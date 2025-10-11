"use client"

import { ArrowLeft, MapPin, Search, Star, MapPinIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"
import MapView from "@/components/map-view"
import Link from "next/link"

export default function SkinCareServices() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [searchFocused, setSearchFocused] = useState(false)
  const [isMapOpen, setIsMapOpen] = useState(false)

  const filterButtons = [
    { label: "Near Me", icon: MapPinIcon },
    { label: "Price: $–$$$" },
    { label: "Rating: 4+", icon: Star },
    { label: "Facials" },
    { label: "Treatments" },
    { label: "Consultations" },
  ]

  const specialists = [
    {
      id: 1,
      name: "Dr. Aditi Sharma",
      specialty: "Dermatologist",
      rating: "5.0",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 2,
      name: "Dr. Rajesh Iyer",
      specialty: "Esthetician",
      rating: "4.9",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 3,
      name: "Dr. Meera Nair",
      specialty: "Cosmetic Surgeon",
      rating: "4.8",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 4,
      name: "Dr. Arjun Desai",
      specialty: "Facial Specialist",
      rating: "5.0",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 5,
      name: "Dr. Kavita Reddy",
      specialty: "Anti-Aging Expert",
      rating: "4.9",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 6,
      name: "Dr. Vikram Gupta",
      specialty: "Acne Specialist",
      rating: "4.7",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 7,
      name: "Dr. Sneha Joshi",
      specialty: "Chemical Peel Expert",
      rating: "4.8",
      image: "/placeholder.svg?height=120&width=120",
    },
  ]

  const handleFilterClick = (filterLabel: string) => {
    if (filterLabel === "Near Me") {
      setIsMapOpen(true)
    } else {
      setActiveFilter(activeFilter === filterLabel ? null : filterLabel)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-warm-neutral to-peach-pink/20 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between p-4 bg-white/90 backdrop-blur-md shadow-sm border-b border-white/20">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-10 w-10 active:scale-95 transition-transform touch-manipulation"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </Button>
          </Link>
          <h1 className="text-lg sm:text-xl font-semibold text-soft-pink truncate">Skin Care Services</h1>
        </div>
        <Button
          size="icon"
          className="rounded-full bg-light-peach hover:bg-light-peach/80 text-gray-700 shadow-md h-10 w-10 active:scale-95 transition-transform duration-150 touch-manipulation"
          onClick={() => setIsMapOpen(true)}
          aria-label="Open map view"
        >
          <MapPin className="h-5 w-5" />
        </Button>
      </header>

      <div className="px-4 pb-6 pt-2">
        {/* Search Bar */}
        <div className="mt-4 mb-6">
          <div className="relative flex items-center">
            <Input
              placeholder="Search for skin care services or specialists"
              className={`pr-16 h-12 sm:h-14 rounded-2xl border-0 bg-white shadow-lg text-gray-700 placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-soft-pink/50 text-base transition-all duration-200 ${
                searchFocused ? "shadow-xl scale-[1.02]" : ""
              }`}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <Button
              size="icon"
              className="absolute right-2 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-soft-pink hover:bg-soft-pink/80 active:bg-soft-pink/90 text-white shadow-md active:scale-95 transition-all duration-150 touch-manipulation"
            >
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mb-6">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
            {filterButtons.map((filter, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleFilterClick(filter.label)}
                className={`flex-shrink-0 rounded-full px-4 py-2.5 sm:py-3 h-auto bg-white border-soft-pink/30 text-gray-700 hover:bg-soft-pink/10 hover:border-soft-pink shadow-sm active:scale-95 transition-all duration-150 touch-manipulation snap-start text-sm sm:text-base whitespace-nowrap ${
                  activeFilter === filter.label ? "bg-soft-pink/20 border-soft-pink text-soft-pink font-medium" : ""
                } ${filter.label === "Near Me" ? "border-soft-pink text-soft-pink" : ""}`}
              >
                {filter.icon && <filter.icon className="h-4 w-4 mr-2 flex-shrink-0" />}
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="mb-6 rounded-3xl bg-gradient-to-r from-soft-pink to-peach-pink p-4 sm:p-6 shadow-lg active:shadow-xl transition-shadow duration-200 touch-manipulation">
          <div className="flex items-center justify-between">
            <div className="flex-1 pr-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Special Offer</h2>
              <p className="text-white/90 mb-4 text-sm sm:text-base leading-relaxed">
                Get 20% off your first facial treatment this week!
              </p>
              <Button className="bg-white text-soft-pink hover:bg-white/90 active:bg-white/80 rounded-full px-6 py-2.5 sm:py-3 font-semibold shadow-md active:scale-95 transition-all duration-150 touch-manipulation text-sm sm:text-base">
                Book Now
              </Button>
            </div>
            <div className="w-16 h-12 sm:w-24 sm:h-20 bg-gray-800 rounded-2xl flex-shrink-0"></div>
          </div>
        </div>

        {/* Specialists Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-soft-pink">Skin Care Specialists</h2>
            <Button
              variant="link"
              className="text-muted-green hover:text-muted-green/80 p-2 active:scale-95 transition-transform touch-manipulation text-sm sm:text-base"
            >
              View All
            </Button>
          </div>

          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-1 px-1">
            {specialists.map((specialist) => (
              <div
                key={specialist.id}
                className="flex-shrink-0 w-36 sm:w-40 bg-white rounded-2xl p-3 sm:p-4 shadow-lg hover:shadow-xl active:shadow-2xl transition-all duration-300 snap-start active:scale-[0.98] touch-manipulation"
              >
                <div className="relative mb-3">
                  <Image
                    src={specialist.image || "/placeholder.svg"}
                    alt={specialist.name}
                    width={120}
                    height={120}
                    className="w-full h-20 sm:h-24 object-cover rounded-xl"
                  />
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-soft-pink text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                    {specialist.rating}
                    <Star className="h-3 w-3 fill-current" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 text-xs sm:text-sm mb-1 leading-tight line-clamp-2">
                    {specialist.name}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-1">{specialist.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Services */}
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg active:shadow-xl transition-shadow duration-200 touch-manipulation">
            <h3 className="text-lg font-semibold text-soft-pink mb-4">Popular Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Anti-Aging Facials", "Acne Treatment", "Chemical Peels", "Microdermabrasion"].map((service) => (
                <div
                  key={service}
                  className="bg-warm-neutral rounded-xl p-3 sm:p-4 text-center active:scale-95 transition-transform duration-150 touch-manipulation cursor-pointer"
                >
                  <p className="text-sm font-medium text-gray-700">{service}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Reviews */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-soft-pink mb-4">Recent Reviews</h3>
            <div className="space-y-4">
              {[
                {
                  name: "Priya Kapoor",
                  rating: "5.0",
                  review:
                    "Dr. Aditi's treatment completely transformed my skin! The acne scars are barely visible now.",
                },
                {
                  name: "Rohan Malhotra",
                  rating: "4.8",
                  review: "Excellent facial treatment by Dr. Rajesh. My skin feels refreshed and glowing.",
                },
                {
                  name: "Kavya Singh",
                  rating: "5.0",
                  review: "Amazing chemical peel session with Dr. Sneha. Results exceeded my expectations!",
                },
                {
                  name: "Anil Menon",
                  rating: "4.9",
                  review: "Dr. Meera's anti-aging treatment worked wonders. Highly recommend her expertise.",
                },
                {
                  name: "Deepika Rao",
                  rating: "5.0",
                  review:
                    "Professional service and great results from Dr. Arjun. My skin texture has improved significantly.",
                },
                {
                  name: "Arjun Patel",
                  rating: "4.7",
                  review: "Dr. Vikram's acne treatment plan really helped clear my stubborn breakouts. Very satisfied!",
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="border-l-4 border-soft-pink pl-4 active:bg-gray-50/50 transition-colors duration-150 touch-manipulation rounded-r-lg py-2 -my-2"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-gray-800 text-sm">{review.name}</span>
                    <div className="flex items-center gap-1 text-soft-pink">
                      <Star className="h-3 w-3 fill-current" />
                      <span className="text-xs">{review.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{review.review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-8 sm:h-4"></div>
      </div>

      <MapView isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} specialists={specialists} />
    </div>
  )
}
