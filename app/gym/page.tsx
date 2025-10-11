"use client"

import {
  ArrowLeft,
  MapPin,
  User,
  ChevronDown,
  ChevronUp,
  Star,
  Search,
  Dumbbell,
  Heart,
  Users,
  Target,
  Zap,
  UserCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"

export default function GymServices() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [searchFocused, setSearchFocused] = useState(false)

  const filterButtons = [
    { label: "Location", icon: MapPin, hasDropdown: true },
    { label: "Today", icon: Target, hasDropdown: true },
    { label: "Price", icon: Target, hasDropdown: true },
    { label: "Workout Type", icon: Dumbbell, hasDropdown: true },
    { label: "Trainer Specialization", icon: UserCheck, hasDropdown: true },
    { label: "Rating", icon: Star, hasDropdown: true },
  ]

  const trainers = [
    {
      id: 1,
      name: "Arjun Kapoor",
      specialty: "Weight Training",
      rating: "4.9",
      image: "/placeholder.svg?height=120&width=120",
      experience: "5 years",
    },
    {
      id: 2,
      name: "Priya Sharma",
      specialty: "Yoga & Pilates",
      rating: "5.0",
      image: "/placeholder.svg?height=120&width=120",
      experience: "8 years",
    },
    {
      id: 3,
      name: "Vikram Singh",
      specialty: "CrossFit",
      rating: "4.8",
      image: "/placeholder.svg?height=120&width=120",
      experience: "6 years",
    },
    {
      id: 4,
      name: "Kavya Reddy",
      specialty: "HIIT Training",
      rating: "4.9",
      image: "/placeholder.svg?height=120&width=120",
      experience: "4 years",
    },
    {
      id: 5,
      name: "Rajesh Nair",
      specialty: "Personal Training",
      rating: "5.0",
      image: "/placeholder.svg?height=120&width=120",
      experience: "10 years",
    },
    {
      id: 6,
      name: "Sneha Gupta",
      specialty: "Functional Training",
      rating: "4.7",
      image: "/placeholder.svg?height=120&width=120",
      experience: "7 years",
    },
    {
      id: 7,
      name: "Rohit Malhotra",
      specialty: "Strength & Conditioning",
      rating: "4.8",
      image: "/placeholder.svg?height=120&width=120",
      experience: "9 years",
    },
  ]

  const workoutCategories = [
    { name: "Strength", icon: Dumbbell, color: "bg-soft-pink/20" },
    { name: "Cardio", icon: Heart, color: "bg-peach-pink/20" },
    { name: "Yoga", icon: Users, color: "bg-light-peach/30" },
    { name: "Pilates", icon: Target, color: "bg-soft-pink/15" },
    { name: "HIIT", icon: Zap, color: "bg-peach-pink/25" },
    { name: "Personal Training", icon: UserCheck, color: "bg-light-peach/25" },
  ]

  const memberReviews = [
    {
      id: 1,
      name: "Deepika R.",
      rating: "5.0",
      review: "Amazing gym with top-notch equipment and fantastic trainers. Arjun helped me achieve my fitness goals!",
      date: "1 week ago",
      initials: "DR",
    },
    {
      id: 2,
      name: "Aditya T.",
      rating: "4.8",
      review: "Great variety of classes and very clean facilities. Priya's yoga sessions are incredible!",
      date: "2 weeks ago",
      initials: "AT",
    },
    {
      id: 3,
      name: "Ananya L.",
      rating: "5.0",
      review: "The HIIT classes with Kavya are challenging but so rewarding. Highly recommend this gym!",
      date: "3 weeks ago",
      initials: "AL",
    },
  ]

  const faqs = [
    {
      question: "What facilities are included in membership?",
      answer:
        "Our membership includes access to all gym equipment, group fitness classes, locker rooms with showers, sauna, and free Wi-Fi. Premium memberships also include access to personal training sessions and nutrition consultations.",
    },
    {
      question: "Do you offer trial sessions?",
      answer:
        "Yes! We offer a complimentary 3-day trial pass for new members. This includes access to all facilities and one group fitness class. Contact us to schedule your trial session.",
    },
    {
      question: "How do I book a personal trainer?",
      answer:
        "You can book personal training sessions through our mobile app, website, or at the front desk. We recommend booking 24-48 hours in advance to ensure availability with your preferred trainer.",
    },
    {
      question: "Are group classes included in the monthly plan?",
      answer:
        "Yes, all group fitness classes are included in our standard monthly membership. This includes yoga, pilates, HIIT, spin classes, and more. Check our schedule for class times and availability.",
    },
    {
      question: "What are your operating hours?",
      answer:
        "We're open Monday-Friday 5:00 AM to 11:00 PM, Saturday-Sunday 6:00 AM to 10:00 PM. Holiday hours may vary, and we'll notify members of any schedule changes in advance.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-peach-pink/10 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between p-4 bg-white/90 backdrop-blur-md shadow-sm border-b border-white/20">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-10 w-10 active:scale-95 transition-transform touch-manipulation"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Button>
          <h1 className="text-lg sm:text-xl font-semibold text-soft-pink truncate">Gym Services</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            className="rounded-full bg-light-peach hover:bg-light-peach/80 text-gray-700 shadow-md h-10 w-10 active:scale-95 transition-transform touch-manipulation"
          >
            <MapPin className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            className="rounded-full bg-light-peach hover:bg-light-peach/80 text-gray-700 shadow-md h-10 w-10 active:scale-95 transition-transform touch-manipulation"
          >
            <User className="h-5 w-5" />
          </Button>
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
                className={`flex-shrink-0 rounded-full px-4 py-2.5 sm:py-3 h-auto bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300 shadow-sm active:scale-95 transition-all duration-150 touch-manipulation snap-start text-sm sm:text-base whitespace-nowrap ${
                  activeFilter === filter.label ? "bg-soft-pink/20 border-soft-pink text-soft-pink font-medium" : ""
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
              placeholder="Search for gyms or personal trainers"
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
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Special Offer</h2>
              <p className="text-white/90 mb-4 text-sm sm:text-base leading-relaxed">
                10% Off on Monthly Memberships! Limited time offer.
              </p>
              <Button className="bg-white text-soft-pink hover:bg-white/90 active:bg-white/80 rounded-full px-6 py-2.5 sm:py-3 font-semibold shadow-md active:scale-95 transition-all duration-150 touch-manipulation text-sm sm:text-base">
                Join Now
              </Button>
            </div>
            <div className="w-16 h-12 sm:w-24 sm:h-20 bg-white/20 rounded-2xl flex-shrink-0 flex items-center justify-center">
              <Dumbbell className="h-8 w-8 sm:h-12 sm:w-12 text-white" />
            </div>
          </div>
        </div>

        {/* Available Trainers Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-soft-pink">Available Trainers</h2>
            <Button
              variant="link"
              className="text-muted-green hover:text-muted-green/80 p-2 active:scale-95 transition-transform touch-manipulation text-sm sm:text-base"
            >
              View All
            </Button>
          </div>

          {/* Trainers Grid */}
          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-1 px-1">
            {trainers.map((trainer) => (
              <Card
                key={trainer.id}
                className="flex-shrink-0 w-40 sm:w-44 shadow-lg hover:shadow-xl active:shadow-2xl transition-all duration-300 snap-start active:scale-[0.98] touch-manipulation border-0"
              >
                <CardContent className="p-3 sm:p-4">
                  <div className="relative mb-3">
                    <Image
                      src={trainer.image || "/placeholder.svg"}
                      alt={trainer.name}
                      width={120}
                      height={120}
                      className="w-full h-20 sm:h-24 object-cover rounded-xl"
                    />
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-soft-pink text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                      {trainer.rating}
                      <Star className="h-3 w-3 fill-current" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-800 text-xs sm:text-sm mb-1 leading-tight line-clamp-2">
                      {trainer.name}
                    </h3>
                    <p className="text-gray-500 text-xs line-clamp-1 mb-1">{trainer.specialty}</p>
                    <p className="text-gray-400 text-xs">{trainer.experience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Workout Categories Section */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-soft-pink mb-4 sm:mb-6">Workout Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {workoutCategories.map((category) => (
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

        {/* Member Reviews Section */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-soft-pink mb-4 sm:mb-6">Member Feedback</h2>
          <div className="space-y-4">
            {memberReviews.map((review) => (
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
