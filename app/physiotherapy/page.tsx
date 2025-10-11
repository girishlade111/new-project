"use client"

import { ArrowLeft, MapPin, User, ChevronDown, ChevronUp, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"

export default function PhysiotherapyServices() {
  const [aboutExpanded, setAboutExpanded] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const filterButtons = [
    { label: "Location", hasDropdown: true },
    { label: "Today", hasDropdown: true },
    { label: "Price", hasDropdown: true },
    { label: "Specialization", hasDropdown: true },
    { label: "Rating", hasDropdown: true },
  ]

  const physiotherapists = [
    {
      id: 1,
      name: "Dr. Ravi Kumar",
      specialty: "Sports Physiotherapy",
      rating: "4.9",
      image: "/placeholder.svg?height=120&width=120",
      experience: "8 years",
    },
    {
      id: 2,
      name: "Dr. Anjali Mehta",
      specialty: "Orthopedic Rehab",
      rating: "5.0",
      image: "/placeholder.svg?height=120&width=120",
      experience: "12 years",
    },
    {
      id: 3,
      name: "Dr. Suresh Nair",
      specialty: "Neurological Physio",
      rating: "4.8",
      image: "/placeholder.svg?height=120&width=120",
      experience: "6 years",
    },
    {
      id: 4,
      name: "Dr. Priya Sharma",
      specialty: "Pediatric Physio",
      rating: "4.9",
      image: "/placeholder.svg?height=120&width=120",
      experience: "10 years",
    },
    {
      id: 5,
      name: "Dr. Vikram Singh",
      specialty: "Geriatric Care",
      rating: "5.0",
      image: "/placeholder.svg?height=120&width=120",
      experience: "15 years",
    },
    {
      id: 6,
      name: "Dr. Kavita Reddy",
      specialty: "Manual Therapy",
      rating: "4.7",
      image: "/placeholder.svg?height=120&width=120",
      experience: "9 years",
    },
    {
      id: 7,
      name: "Dr. Arjun Desai",
      specialty: "Post-Surgery Rehab",
      rating: "4.8",
      image: "/placeholder.svg?height=120&width=120",
      experience: "11 years",
    },
  ]

  const patientReviews = [
    {
      id: 1,
      name: "Rajesh K.",
      rating: "5.0",
      review: "Excellent treatment for my back pain. Dr. Ravi was very professional and helped me recover quickly.",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Meera S.",
      rating: "4.8",
      review: "Great experience with Dr. Anjali. Her orthopedic expertise really helped with my knee recovery.",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Amit P.",
      rating: "5.0",
      review:
        "Dr. Suresh's neurological physiotherapy sessions have significantly improved my mobility. Highly recommend!",
      date: "3 weeks ago",
    },
  ]

  const faqs = [
    {
      question: "What should I expect during my first physiotherapy session?",
      answer:
        "Your first session will include a comprehensive assessment of your condition, medical history review, physical examination, and development of a personalized treatment plan. The session typically lasts 45-60 minutes.",
    },
    {
      question: "Is physiotherapy covered by insurance?",
      answer:
        "Most insurance plans cover physiotherapy services, especially when prescribed by a physician. We recommend checking with your insurance provider for specific coverage details and any required referrals.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "The number of sessions varies depending on your condition, severity, and individual response to treatment. Most patients see improvement within 4-6 sessions, but your physiotherapist will provide a more specific timeline after your initial assessment.",
    },
    {
      question: "What conditions can physiotherapy help treat?",
      answer:
        "Physiotherapy can help with various conditions including back pain, sports injuries, arthritis, post-surgical recovery, neurological conditions, balance issues, and chronic pain management.",
    },
    {
      question: "Do I need a referral from my doctor?",
      answer:
        "While some insurance plans require a physician referral, many allow direct access to physiotherapy services. You can contact us directly to schedule an appointment and we'll help determine if a referral is needed.",
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
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-10 w-10 active:scale-95 transition-transform touch-manipulation"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Button>
          <h1 className="text-lg sm:text-xl font-semibold text-soft-pink truncate">Physiotherapy Services</h1>
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
        <div className="mb-6">
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
                {filter.label}
                {filter.hasDropdown && <ChevronDown className="h-4 w-4 ml-2 flex-shrink-0" />}
              </Button>
            ))}
          </div>
        </div>

        {/* About Physiotherapy Section */}
        <Card className="mb-6 shadow-lg border-0">
          <CardContent className="p-0">
            <Button
              variant="ghost"
              className="w-full p-4 sm:p-6 justify-between text-left hover:bg-transparent active:scale-[0.99] transition-transform touch-manipulation"
              onClick={() => setAboutExpanded(!aboutExpanded)}
            >
              <h2 className="text-lg sm:text-xl font-bold text-soft-pink">About Physiotherapy</h2>
              {aboutExpanded ? (
                <ChevronUp className="h-5 w-5 text-soft-pink flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-soft-pink flex-shrink-0" />
              )}
            </Button>
            {aboutExpanded && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Physiotherapy is a healthcare profession that helps people restore, maintain, and maximize their
                  physical strength, function, movement, and overall well-being. Our licensed physiotherapists use
                  evidence-based techniques to treat a wide range of conditions including musculoskeletal injuries,
                  neurological disorders, cardiovascular conditions, and chronic pain. Through personalized treatment
                  plans that may include manual therapy, therapeutic exercises, and advanced modalities, physiotherapy
                  can help you recover from injuries, manage chronic conditions, improve mobility, and prevent future
                  problems.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Available Physiotherapists Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-soft-pink">Available Physiotherapists</h2>
            <Button
              variant="link"
              className="text-muted-green hover:text-muted-green/80 p-2 active:scale-95 transition-transform touch-manipulation text-sm sm:text-base"
            >
              View All
            </Button>
          </div>

          {/* Physiotherapists Grid */}
          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-1 px-1">
            {physiotherapists.map((physio) => (
              <Card
                key={physio.id}
                className="flex-shrink-0 w-40 sm:w-44 shadow-lg hover:shadow-xl active:shadow-2xl transition-all duration-300 snap-start active:scale-[0.98] touch-manipulation border-0"
              >
                <CardContent className="p-3 sm:p-4">
                  <div className="relative mb-3">
                    <Image
                      src={physio.image || "/placeholder.svg"}
                      alt={physio.name}
                      width={120}
                      height={120}
                      className="w-full h-20 sm:h-24 object-cover rounded-xl"
                    />
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-soft-pink text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                      {physio.rating}
                      <Star className="h-3 w-3 fill-current" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-800 text-xs sm:text-sm mb-1 leading-tight line-clamp-2">
                      {physio.name}
                    </h3>
                    <p className="text-gray-500 text-xs line-clamp-1 mb-1">{physio.specialty}</p>
                    <p className="text-gray-400 text-xs">{physio.experience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Patient Reviews Section */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-soft-pink mb-4 sm:mb-6">Patient Reviews</h2>
          <div className="space-y-4">
            {patientReviews.map((review) => (
              <Card key={review.id} className="shadow-lg border-0 bg-gradient-to-r from-white to-peach-pink/5">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
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
