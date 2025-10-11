"use client"

import { ArrowLeft, User, Settings, Heart, Calendar, CreditCard, HelpCircle, LogOut, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AccountPage() {
  const accountMenuItems = [
    { label: "Edit Profile", icon: Edit, href: "/account/profile" },
    { label: "My Bookings", icon: Calendar, href: "/bookings" },
    { label: "Favorites", icon: Heart, href: "/favorites" },
    { label: "Payment Methods", icon: CreditCard, href: "/account/payment" },
    { label: "Settings", icon: Settings, href: "/settings" },
    { label: "Help & Support", icon: HelpCircle, href: "/support" },
  ]

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
          <h1 className="text-lg sm:text-xl font-semibold text-soft-pink">My Account</h1>
        </div>
      </header>

      <div className="px-4 pb-6 pt-4">
        {/* Profile Section */}
        <Card className="mb-6 shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-soft-pink/20 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-soft-pink" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800">Sarah Johnson</h2>
                <p className="text-gray-500">sarah.johnson@email.com</p>
                <p className="text-sm text-gray-400">Member since March 2024</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-soft-pink text-soft-pink hover:bg-soft-pink/10"
              >
                Edit
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card className="shadow-md border-0">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-soft-pink">12</div>
              <div className="text-xs text-gray-500">Bookings</div>
            </CardContent>
          </Card>
          <Card className="shadow-md border-0">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-soft-pink">8</div>
              <div className="text-xs text-gray-500">Favorites</div>
            </CardContent>
          </Card>
          <Card className="shadow-md border-0">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-soft-pink">4.9</div>
              <div className="text-xs text-gray-500">Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Menu Items */}
        <div className="space-y-3 mb-6">
          {accountMenuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <Card className="shadow-md border-0 hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-light-peach/30 rounded-full flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-gray-700" />
                    </div>
                    <span className="font-medium text-gray-700 flex-1">{item.label}</span>
                    <ArrowLeft className="h-4 w-4 text-gray-400 rotate-180" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Premium Upgrade */}
        <Card className="mb-6 shadow-lg border-0 bg-gradient-to-r from-soft-pink to-peach-pink">
          <CardContent className="p-6 text-white">
            <h3 className="text-lg font-bold mb-2">Upgrade to Premium</h3>
            <p className="text-white/90 text-sm mb-4">Get exclusive discounts, priority booking, and premium support</p>
            <Button className="bg-white text-soft-pink hover:bg-white/90 rounded-full px-6">Learn More</Button>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card className="shadow-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 text-red-500">
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Sign Out</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
