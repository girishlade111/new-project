"use client"

import { Menu, MapPin, Search, Star, MapPinIcon, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"
import MapView from "@/components/map-view"
import Link from "next/link"

export default function BetterULanding() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [searchFocused, setSearchFocused] = useState(false)
  const [isMapOpen, setIsMapOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const filterButtons = [
    { label: "Near Me", icon: MapPinIcon },
    { label: "Price: ₹–₹₹₹" },
    { label: "Rating: 4+", icon: Star },
    { label: "Facials" },
    { label: "Treatments" },
    { label: "Consultations" },
  ]

  const specialists = [
    {
      id: 1,
      name: "Dr. Krishnamurty",
      specialty: "Dermatologist",
      rating: "5.0",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 2,
      name: "Vijay Majumdar",
      specialty: "Hair Stylist",
      rating: "4.9",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 3,
      name: "Dr. House",
      specialty: "Physiotherapist",
      rating: "4.8",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 4,
      name: "Kriti Chowdhury",
      specialty: "Yoga Instructor",
      rating: "5.0",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 5,
      name: "Mohak Rajpal",
      specialty: "Personal Trainer",
      rating: "4.9",
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

  const menuItems = [
    { label: "Home", href: "/", icon: "🏠" },
    { label: "My Account", href: "/account", icon: "👤" },
    { label: "Skin Care", href: "/skincare", icon: "✨" },
    { label: "Physiotherapy", href: "/physiotherapy", icon: "🏥" },
    { label: "Gym Services", href: "/gym", icon: "💪" },
    { label: "Hair Care", href: "/haircare", icon: "💇" },
    { label: "Yoga", href: "/yoga", icon: "🧘" },
    { label: "My Bookings", href: "/bookings", icon: "📅" },
    { label: "Favorites", href: "/favorites", icon: "❤️" },
    { label: "Settings", href: "/settings", icon: "⚙️" },
    { label: "Help & Support", href: "/support", icon: "❓" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-warm-neutral to-peach-pink/20 font-sans">
      {/* Header - Enhanced with menu */}
      <header className="sticky top-0 z-40 flex items-center justify-between p-4 bg-white/90 backdrop-blur-md shadow-sm border-b border-white/20">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-10 w-10 active:scale-95 transition-transform touch-manipulation"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </Button>
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl font-bold text-soft-pink">BetterU</h1>
            <p className="text-xs text-gray-500 hidden sm:block">Wellness & Beauty Services</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            className="rounded-full bg-light-peach hover:bg-light-peach/80 text-gray-700 shadow-md h-10 w-10 active:scale-95 transition-transform touch-manipulation"
            onClick={() => setIsMapOpen(true)}
            aria-label="Open map view"
          >
            <MapPin className="h-5 w-5" />
          </Button>
          <Link href="/account">
            <Button
              size="icon"
              className="rounded-full bg-light-peach hover:bg-light-peach/80 text-gray-700 shadow-md h-10 w-10 active:scale-95 transition-transform touch-manipulation"
            >
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Side Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div className="flex-1 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />

          {/* Menu Panel */}
          <div className="w-80 bg-white shadow-2xl">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-soft-pink">BetterU</h2>
                  <p className="text-sm text-gray-500">Your Wellness Journey</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-8 w-8"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="p-4">
              <nav className="space-y-2">
                {menuItems.map((item, index) => (
                  <Link key={index} href={item.href} onClick={() => setIsMenuOpen(false)}>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-soft-pink/10 active:bg-soft-pink/20 transition-colors touch-manipulation">
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium text-gray-700">{item.label}</span>
                    </div>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="p-4 border-t border-gray-100 mt-auto">
              <div className="bg-gradient-to-r from-soft-pink to-peach-pink rounded-xl p-4 text-white">
                <h3 className="font-semibold mb-1">Premium Membership</h3>
                <p className="text-sm text-white/90 mb-2">Unlock exclusive benefits</p>
                <Button className="bg-white text-soft-pink hover:bg-white/90 text-sm px-4 py-1 h-auto">
                  Upgrade Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="px-4 pb-6 pt-2">
        {/* Welcome Section */}
        <div className="mt-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Welcome to <span className="text-soft-pink">BetterU</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">Discover wellness, beauty, and fitness services near you</p>
        </div>

        {/* Search Bar - Mobile optimized */}
        <div className="mb-6">
          <div className="relative flex items-center">
            <Input
              placeholder="Search for services, specialists, or treatments"
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

        {/* Filter Pills - Enhanced mobile scrolling */}
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

        {/* Service Categories */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/skincare">
              <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl active:shadow-2xl transition-all duration-300 active:scale-[0.98] touch-manipulation cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-soft-pink/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Skin Care</h3>
                    <p className="text-gray-500 text-sm">Beauty and dermatology services</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/physiotherapy">
              <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl active:shadow-2xl transition-all duration-300 active:scale-[0.98] touch-manipulation cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-light-peach/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Physiotherapy</h3>
                    <p className="text-gray-500 text-sm">Physical rehabilitation services</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/gym">
              <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl active:shadow-2xl transition-all duration-300 active:scale-[0.98] touch-manipulation cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-peach-pink/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💪</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Gym Services</h3>
                    <p className="text-gray-500 text-sm">Fitness and personal training</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/haircare">
              <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl active:shadow-2xl transition-all duration-300 active:scale-[0.98] touch-manipulation cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-warm-neutral rounded-full flex items-center justify-center">
                    <span className="text-2xl">💇</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Hair Care</h3>
                    <p className="text-gray-500 text-sm">Hair styling and treatments</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/yoga">
              <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl active:shadow-2xl transition-all duration-300 active:scale-[0.98] touch-manipulation cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-soft-pink/15 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🧘</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Yoga</h3>
                    <p className="text-gray-500 text-sm">Mindfulness and yoga classes</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Promotional Banner - Mobile optimized */}
        <div className="mb-6 rounded-3xl bg-gradient-to-r from-soft-pink to-peach-pink p-4 sm:p-6 shadow-lg active:shadow-xl transition-shadow duration-200 touch-manipulation">
          <div className="flex items-center justify-between">
            <div className="flex-1 pr-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Special Offer</h2>
              <p className="text-white/90 mb-4 text-sm sm:text-base leading-relaxed">
                Get 20% off your first service booking this week!
              </p>
              <Button className="bg-white text-soft-pink hover:bg-white/90 active:bg-white/80 rounded-full px-6 py-2.5 sm:py-3 font-semibold shadow-md active:scale-95 transition-all duration-150 touch-manipulation text-sm sm:text-base">
                Book Now
              </Button>
            </div>
            <div className="w-16 h-12 sm:w-24 sm:h-20 bg-white/20 rounded-2xl flex-shrink-0 flex items-center justify-center">
              <span className="text-2xl sm:text-3xl">🎉</span>
            </div>
          </div>
        </div>

        {/* Featured Specialists Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Featured Specialists</h2>
            <Button
              variant="link"
              className="text-muted-green hover:text-muted-green/80 p-2 active:scale-95 transition-transform touch-manipulation text-sm sm:text-base"
            >
              View All
            </Button>
          </div>

          {/* Specialists Grid - Mobile optimized */}
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

        {/* Quick Actions */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link href="/bookings">
              <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center touch-manipulation active:scale-95">
                <span className="text-2xl mb-2 block">📅</span>
                <p className="text-sm font-medium text-gray-700">My Bookings</p>
              </div>
            </Link>
            <Link href="/favorites">
              <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center touch-manipulation active:scale-95">
                <span className="text-2xl mb-2 block">❤️</span>
                <p className="text-sm font-medium text-gray-700">Favorites</p>
              </div>
            </Link>
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center touch-manipulation active:scale-95">
              <span className="text-2xl mb-2 block">🎁</span>
              <p className="text-sm font-medium text-gray-700">Offers</p>
            </div>
            <Link href="/support">
              <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center touch-manipulation active:scale-95">
                <span className="text-2xl mb-2 block">💬</span>
                <p className="text-sm font-medium text-gray-700">Support</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">What Our Users Say</h3>
          <div className="space-y-4">
            {[
              {
                name: "Binod G.",
                rating: "5.0",
                review: "Amazing platform! Found the perfect skin care specialist.",
                service: "Skin Care",
              },
              {
                name: "Rohit S.",
                rating: "4.8",
                review: "Great yoga classes and easy booking process.",
                service: "Yoga",
              },
              {
                name: "Gurpreet S.",
                rating: "5.0",
                review: "Excellent hair stylist recommendation. Love my new look!",
                service: "Hair Care",
              },
              {
                name: "Subham T.",
                rating: "4.9",
                review: "Outstanding physiotherapy sessions helped me recover from my injury quickly.",
                service: "Physiotherapy",
              },
              {
                name: "Rinku S.",
                rating: "5.0",
                review: "The gym trainers are fantastic! Lost 10kg in 3 months with their guidance.",
                service: "Gym Services",
              },
              {
                name: "Soumya P.",
                rating: "4.7",
                review: "Very convenient app with great service providers. Highly recommend BetterU!",
                service: "General",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="border-l-4 border-soft-pink pl-4 active:bg-gray-50/50 transition-colors duration-150 touch-manipulation rounded-r-lg py-2 -my-2"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-gray-800 text-sm">{review.name}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">{review.service}</span>
                  <div className="flex items-center gap-1 text-soft-pink ml-auto">
                    <Star className="h-3 w-3 fill-current" />
                    <span className="text-xs">{review.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{review.review}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom spacing for mobile navigation */}
        <div className="h-8 sm:h-4"></div>
      </div>

      {/* Map View */}
      <MapView isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} specialists={specialists} />
    </div>
  )
}
