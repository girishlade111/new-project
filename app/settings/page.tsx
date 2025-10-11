"use client"

import type React from "react"

import {
  ArrowLeft,
  User,
  Bell,
  Shield,
  CreditCard,
  Globe,
  Camera,
  Eye,
  EyeOff,
  Check,
  X,
  Smartphone,
  Monitor,
  Moon,
  Sun,
  Upload,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)
  const [profileImage, setProfileImage] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const recentLogins = [
    {
      device: "iPhone 14 Pro",
      location: "Mumbai, India",
      date: "Today, 2:30 PM",
      current: true,
    },
    {
      device: "Chrome on Windows",
      location: "Mumbai, India",
      date: "Yesterday, 6:45 PM",
      current: false,
    },
    {
      device: "Safari on MacBook",
      location: "Delhi, India",
      date: "Dec 10, 11:20 AM",
      current: false,
    },
    {
      device: "Chrome on Android",
      location: "Bangalore, India",
      date: "Dec 8, 3:15 PM",
      current: false,
    },
    {
      device: "Firefox on Windows",
      location: "Pune, India",
      date: "Dec 5, 9:30 AM",
      current: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-warm-neutral to-peach-pink/20 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between p-4 bg-white/90 backdrop-blur-md shadow-sm border-b border-white/20">
        <div className="flex items-center gap-3">
          <Link href="/account">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-10 w-10 active:scale-95 transition-transform touch-manipulation"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </Button>
          </Link>
          <h1 className="text-lg sm:text-xl font-semibold text-soft-pink">Settings</h1>
        </div>
      </header>

      <div className="px-4 pb-6 pt-4 max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Profile Settings */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-soft-pink">
                <User className="h-5 w-5" />
                Profile Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Picture */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-soft-pink/20 flex items-center justify-center overflow-hidden">
                    {profileImage ? (
                      <Image
                        src={profileImage || "/placeholder.svg"}
                        alt="Profile"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="h-8 w-8 text-soft-pink" />
                    )}
                  </div>
                  <label
                    htmlFor="profile-upload"
                    className="absolute -bottom-1 -right-1 w-6 h-6 bg-soft-pink rounded-full flex items-center justify-center cursor-pointer hover:bg-soft-pink/80 transition-colors"
                  >
                    <Camera className="h-3 w-3 text-white" />
                  </label>
                  <input
                    id="profile-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">Profile Picture</h3>
                  <p className="text-sm text-gray-500 mb-2">Upload a new profile picture</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-soft-pink text-soft-pink hover:bg-soft-pink/10 bg-transparent"
                    onClick={() => document.getElementById("profile-upload")?.click()}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Choose File
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="Sarah Johnson" className="focus-visible:ring-soft-pink/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="sarah.johnson@email.com"
                    className="focus-visible:ring-soft-pink/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    defaultValue="+91 98765 43210"
                    className="focus-visible:ring-soft-pink/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Preferred Language</Label>
                  <Select defaultValue="english">
                    <SelectTrigger className="focus:ring-soft-pink/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">हिंदी (Hindi)</SelectItem>
                      <SelectItem value="bengali">বাংলা (Bengali)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  defaultValue="123 Main Street, Bandra West, Mumbai, Maharashtra 400050"
                  className="focus-visible:ring-soft-pink/50"
                />
              </div>

              {/* Password Change */}
              <Separator />
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Change Password</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <div className="relative">
                      <Input
                        id="current-password"
                        type={showPassword ? "text" : "password"}
                        className="focus-visible:ring-soft-pink/50 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <div className="relative">
                      <Input
                        id="new-password"
                        type={showNewPassword ? "text" : "password"}
                        className="focus-visible:ring-soft-pink/50 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-soft-pink">
                <Globe className="h-5 w-5" />
                Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Theme Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {darkMode ? <Moon className="h-5 w-5 text-gray-600" /> : <Sun className="h-5 w-5 text-gray-600" />}
                  <div>
                    <h3 className="font-medium text-gray-800">Theme</h3>
                    <p className="text-sm text-gray-500">{darkMode ? "Dark mode" : "Light mode"}</p>
                  </div>
                </div>
                <Switch
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                  className="data-[state=checked]:bg-soft-pink"
                />
              </div>

              <Separator />

              {/* Notification Settings */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Notifications
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-800">Email Notifications</h4>
                      <p className="text-sm text-gray-500">Receive booking confirmations and updates via email</p>
                    </div>
                    <Switch
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                      className="data-[state=checked]:bg-soft-pink"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-800">SMS Notifications</h4>
                      <p className="text-sm text-gray-500">Get appointment reminders via text message</p>
                    </div>
                    <Switch
                      checked={smsNotifications}
                      onCheckedChange={setSmsNotifications}
                      className="data-[state=checked]:bg-soft-pink"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-800">Push Notifications</h4>
                      <p className="text-sm text-gray-500">Receive real-time updates on your device</p>
                    </div>
                    <Switch
                      checked={pushNotifications}
                      onCheckedChange={setPushNotifications}
                      className="data-[state=checked]:bg-soft-pink"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Management */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-soft-pink">
                <CreditCard className="h-5 w-5" />
                Account Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Social Accounts */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Connected Accounts</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">G</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Google</h4>
                        <p className="text-sm text-gray-500">sarah.johnson@gmail.com</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-500 border-red-200 hover:bg-red-50 bg-transparent"
                    >
                      Disconnect
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">f</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Facebook</h4>
                        <p className="text-sm text-gray-500">Not connected</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-blue-600 border-blue-200 hover:bg-blue-50 bg-transparent"
                    >
                      Connect
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Subscription */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Subscription</h3>
                <div className="p-4 bg-gradient-to-r from-soft-pink/10 to-peach-pink/10 rounded-lg border border-soft-pink/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-800">Premium Plan</h4>
                    <span className="text-sm bg-soft-pink text-white px-2 py-1 rounded-full">Active</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Next renewal: January 15, 2025</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-soft-pink hover:bg-soft-pink/80 text-white">
                      Upgrade Plan
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-soft-pink text-soft-pink hover:bg-soft-pink/10 bg-transparent"
                    >
                      Manage Billing
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-soft-pink">
                <Shield className="h-5 w-5" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Two-Factor Authentication */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                </div>
                <Switch
                  checked={twoFactorAuth}
                  onCheckedChange={setTwoFactorAuth}
                  className="data-[state=checked]:bg-soft-pink"
                />
              </div>

              <Separator />

              {/* Recent Login Activity */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Recent Login Activity</h3>
                <div className="space-y-3">
                  {recentLogins.map((login, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          {login.device.includes("iPhone") || login.device.includes("Android") ? (
                            <Smartphone className="h-4 w-4 text-gray-600" />
                          ) : (
                            <Monitor className="h-4 w-4 text-gray-600" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 text-sm">{login.device}</h4>
                          <p className="text-xs text-gray-500">{login.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">{login.date}</p>
                        {login.current && <span className="text-xs text-green-600 font-medium">Current session</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button className="flex-1 bg-soft-pink hover:bg-soft-pink/80 text-white py-3 rounded-xl font-semibold shadow-lg active:scale-95 transition-all duration-150">
              <Check className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-xl font-semibold active:scale-95 transition-all duration-150 bg-transparent"
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-8"></div>
      </div>
    </div>
  )
}
