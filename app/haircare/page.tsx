"use client"

import {
  ArrowLeft,
  MapPin,
  User,
  ChevronDown,
  ChevronUp,
  Star,
  Search,
  Scissors,
  Palette,
  Sparkles,
  Users,
  Crown,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function HairCareServices() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [searchFocused, setSearchFocused] = useState(false)

  const filterButtons = [
    { label: "Location", icon: MapPin, hasDropdown: true },
    { label: "Today", icon: Sparkles, hasDropdown: true },
    { label: "Price", icon: Crown, hasDropdown: true },
    { label: "Service Type", icon: Scissors, hasDropdown: true },
    { label: "Stylist Experience", icon: Users, hasDropdown: true },
    { label: "Rating", icon: Star, hasDropdown: true },
  ]

  const hairStylists = [
    {
      id: 1,
      name: "Kavya Sharma",
      specialty: "Color Specialist",
      rating: "5.0",
      image: "/placeholder.svg?height=120&width=120",
      experience: "8 years",
    },
    {
      id: 2,
      name: "Arjun Patel",
      specialty: "Hair Cutting",
      rating: "4.9",
      image: "/placeholder.svg?height=120&width=120",
      experience: "12 years",
    },
    {
      id: 3,
      name: "Priya Nair",
      specialty: "Bridal Styling",
      rating: "5.0",
      image: "/placeholder.svg?height=120&width=120",
      experience: "6 years",
    },
    {
      id: 4,
      name: "Vikram Singh",
      specialty: "Men's Grooming",
      rating: "4.8",
      image: "/placeholder.svg?height=120&width=120",
      experience: "10 years",
    },
    {
      id: 5,
      name: "Sneha Reddy",
      specialty: "Hair Extensions",
      rating: "4.9",
      image: "/placeholder.svg?height=120&width=120",
      experience: "7 years",
    },
    {
      id: 6,
      name: "Rohit Gupta",
      specialty: "Hair Treatments",
      rating: "4.7",
      image: "/placeholder.svg?height=120&width=120",
      experience: "9 years",
    },
    {
      id: 7,
      name: "Meera Joshi",
      specialty: "Curly Hair Expert",
      rating: "4.8",
      image: "/placeholder.svg?height=120&width=120",
      experience: "11 years",
    },
  ]

  const serviceCategories = [
    { name: "Hair Cut", icon: Scissors, color: "bg-soft-pink/20" },
    { name: "Hair Color", icon: Palette, color: "bg-peach-pink/20" },
    { name: "Styling", icon: Sparkles, color: "bg-light-peach/30" },
    { name: "Treatments", icon: Heart, color: "bg-soft-pink/15" },
    { name: "Extensions", icon: Crown, color: "bg-peach-pink/25" },
    { name: "Bridal", icon: Users, color: "bg-light-peach/25" },
  ]

  const clientReviews = [
    {
      id: 1,
      name: "Deepika K.",
      rating: "5.0",
      review: "Kavya gave me the most beautiful balayage! The color is exactly what I wanted.",
      date: "1 week ago",
      initials: "DK",
    },
    {
      id: 2,
      name: "Aditya T.",
      rating: "4.9",
      review: "Vikram is amazing with men's cuts. Professional and skilled barber.",
      date: "2 weeks ago",
      initials: "AT",
    },
    {
      id: 3,
      name: "Ananya L.",
      rating: "5.0",
      review: "Priya made my wedding day perfect with the most gorgeous updo!",
      date: "1 month ago",
      initials: "AL",
    },
  ]

  const faqs = [
    {
      question: "How far in advance should I book my appointment?",
      answer:
        "We recommend booking 1-2 weeks in advance for regular services and 4-6 weeks for special occasions like weddings or major color changes. Popular stylists may require longer lead times.",
    },
    {
      question: "What should I bring to my hair appointment?",
      answer:
        "Bring inspiration photos if you have them, and come with clean, dry hair unless otherwise specified. For color services, avoid washing your hair 24-48 hours before your appointment.",
    },
    {
      question: "Do you offer consultations before major changes?",
      answer:
        "Yes! We offer complimentary consultations for major cuts, color changes, or chemical treatments. This helps ensure you and your stylist are on the same page about your desired look.",
    },
    {
      question: "What's your cancellation policy?",
      answer:
        "We require 24-hour notice for cancellations. Late cancellations or no-shows may be subject to a fee. We understand emergencies happen and will work with you on a case-by-case basis.",
    },
    {
      question: "Do you use organic or natural hair products?",
      answer:
        "Many of our salons offer organic and natural product lines. You can filter by 'Organic Products' when searching, or ask your stylist about eco-friendly options during your consultation.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
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
          <h1 className="text-lg sm:text-xl font-semibold text-soft-pink truncate">Hair Care Services</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            className="rounded-full bg-light-peach hover:bg-light-peach/80 text-gray-700 shadow-md h-10 w-10 active:scale-95 transition-transform touch-manipulation"
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

      <div className="px-4 pb-6 pt-4">
        {/* Filter Pills */}
        <div className="mb-4">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
            {filterButtons.map((filter, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => setActiveFilter(activeFilter === filter.label ? null : filter.label)}
                className={`flex-shrink-0 rounded-full px-4 py-2.5 sm:py-3 h-auto bg-light-peach/30 border-light-peach/50 text-gray-700 hover:bg-light-peach/50 hover:border-light-peach shadow-sm active:scale-95 transition-all duration-150 touch-manipulation snap-start text-sm sm:text-base whitespace-nowrap ${
                  activeFilter === filter.label ? "bg-light-peach/60 border-light-peach text-gray-800 font-medium" : ""
                }`}
              >
                <filter.icon className="h-4 w-4 mr-2 flex-shrink-0" />
                {filter.label}
                {filter.hasDropdown && <ChevronDown className="h-4 w-4 ml-2 flex-shrink-0" />}
              </Button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative flex items-center">
            <Input
              placeholder="Search for hair salons or stylists"
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

        {/* Promotional Banner */}
        <div className="mb-6 rounded-3xl bg-gradient-to-r from-peach-pink via-soft-pink to-peach-pink p-4 sm:p-6 shadow-lg active:shadow-xl transition-shadow duration-200 touch-manipulation">
          <div className="flex items-center justify-between">
            <div className="flex-1 pr-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">New Client Special</h2>
              <p className="text-white/90 mb-4 text-sm sm:text-base leading-relaxed">
                15% Off your first hair service! Book now and transform your look.
              </p>
              <Button className="bg-white text-soft-pink hover:bg-white/90 active:bg-white/80 rounded-full px-6 py-2.5 sm:py-3 font-semibold shadow-md active:scale-95 transition-all duration-150 touch-manipulation text-sm sm:text-base">
                Book Now
              </Button>
            </div>
            <div className="w-16 h-12 sm:w-24 sm:h-20 bg-white/20 rounded-2xl flex-shrink-0 flex items-center justify-center">
              <Scissors className="h-8 w-8 sm:h-12 sm:w-12 text-white" />
            </div>
          </div>
        </div>

        {/* Available Stylists Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-soft-pink">Top Hair Stylists</h2>
            <Button
              variant="link"
              className="text-muted-green hover:text-muted-green/80 p-2 active:scale-95 transition-transform touch-manipulation text-sm sm:text-base"
            >
              View All
            </Button>
          </div>

          {/* Stylists Grid */}
          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-1 px-1">
            {hairStylists.map((stylist) => (
              <Card
                key={stylist.id}
                className="flex-shrink-0 w-40 sm:w-44 shadow-lg hover:shadow-xl active:shadow-2xl transition-all duration-300 snap-start active:scale-[0.98] touch-manipulation border-0"
              >
                <CardContent className="p-3 sm:p-4">
                  <div className="relative mb-3">
                    <Image
                      src={stylist.image || "/placeholder.svg"}
                      alt={stylist.name}
                      width={120}
                      height={120}
                      className="w-full h-20 sm:h-24 object-cover rounded-xl"
                    />
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-soft-pink text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                      {stylist.rating}
                      <Star className="h-3 w-3 fill-current" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-800 text-xs sm:text-sm mb-1 leading-tight line-clamp-2">
                      {stylist.name}
                    </h3>
                    <p className="text-gray-500 text-xs line-clamp-1 mb-1">{stylist.specialty}</p>
                    <p className="text-gray-400 text-xs">{stylist.experience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Categories Section */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-soft-pink mb-4 sm:mb-6">Hair Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {serviceCategories.map((category) => (
              <Card
                key={category.name}
                className={`${category.color} shadow-lg hover:shadow-xl active:shadow-2xl transition-all duration-300 active:scale-[0.98] touch-manipulation border-0 cursor-pointer`}
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <category.icon className="h-8 w-8 sm:h-10 sm:w-10 text-gray-700 mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Reviews Section */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-soft-pink mb-4 sm:mb-6">Client Reviews</h2>
          <div className="space-y-4">
            {clientReviews.map((review) => (
              <Card key={review.id} className="shadow-lg border-0 bg-gradient-to-r from-white to-gray-50/50">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-soft-pink/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-soft-pink font-semibold text-sm">{review.initials}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{review.name}</h4>
                          <div className="flex items-center gap-1 text-soft-pink">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="text-sm font-medium">{review.rating}</span>
                          </div>
                        </div>
                        <span className="text-gray-400 text-xs sm:text-sm">{review.date}</span>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{review.review}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-soft-pink mb-4 sm:mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-lg border-0 overflow-hidden">
                <CardContent className="p-0">
                  <Button
                    variant="ghost"
                    className="w-full p-4 sm:p-6 justify-between text-left hover:bg-soft-pink/5 active:scale-[0.99] transition-all touch-manipulation"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="font-semibold text-soft-pink text-sm sm:text-base pr-4">{faq.question}</h3>
                    {expandedFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-soft-pink flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-soft-pink flex-shrink-0" />
                    )}
                  </Button>
                  {expandedFAQ === index && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 bg-white">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom spacing for mobile navigation */}
        <div className="h-8 sm:h-4"></div>
      </div>
    </div>
  )
}
