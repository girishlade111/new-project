"use client"

import { useEffect, useRef, useState } from "react"
import { X, Loader2, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface MapViewProps {
  isOpen: boolean
  onClose: () => void
  specialists: Array<{
    id: number
    name: string
    specialty: string
    rating: string
    image: string
    location?: {
      lat: number
      lng: number
    }
  }>
}

export default function MapView({ isOpen, onClose, specialists }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [selectedSpecialist, setSelectedSpecialist] = useState<number | null>(null)

  // Mock locations for specialists (in a real app, these would come from your database)
  const specialistsWithLocations = specialists.map((specialist, index) => ({
    ...specialist,
    location: {
      lat: 34.052235 + (Math.random() * 0.02 - 0.01), // Random locations around Los Angeles
      lng: -118.243683 + (Math.random() * 0.02 - 0.01),
    },
  }))

  useEffect(() => {
    if (!isOpen) return

    // Simulate getting user location
    const getUserLocation = () => {
      setLoading(true)
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            })
            setLoading(false)
          },
          () => {
            // Default location if user denies permission
            setUserLocation({ lat: 34.052235, lng: -118.243683 }) // Los Angeles
            setLoading(false)
          },
        )
      } else {
        // Default location if geolocation not supported
        setUserLocation({ lat: 34.052235, lng: -118.243683 }) // Los Angeles
        setLoading(false)
      }
    }

    getUserLocation()

    // In a real implementation, we would initialize the map here
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      {/* Map Header */}
      <div className="p-4 border-b flex items-center justify-between bg-white shadow-sm">
        <h2 className="text-lg font-semibold text-soft-pink">Skin Care Specialists Near Me</h2>
        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Map Container */}
      <div className="flex-1 relative">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="flex flex-col items-center">
              <Loader2 className="h-8 w-8 text-soft-pink animate-spin mb-2" />
              <p className="text-gray-600">Finding specialists near you...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Map Placeholder - In a real app, this would be a Mapbox or Google Maps component */}
            <div
              ref={mapRef}
              className="absolute inset-0 bg-[#e8e8e8]"
              style={{
                backgroundImage: "url('/placeholder.svg?height=600&width=800')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* User location marker */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="h-6 w-6 rounded-full bg-blue-500 border-2 border-white shadow-lg flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs font-semibold bg-white px-2 py-0.5 rounded-full shadow-md">
                  You
                </div>
              </div>

              {/* Specialist markers */}
              {specialistsWithLocations.map((specialist) => (
                <div
                  key={specialist.id}
                  className={`absolute cursor-pointer transition-all duration-200 ${
                    selectedSpecialist === specialist.id ? "scale-110 z-10" : ""
                  }`}
                  style={{
                    left: `${(specialist.location?.lng || 0) * 10 + 50}%`,
                    top: `${(specialist.location?.lat || 0) * 10 + 50}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onClick={() => setSelectedSpecialist(specialist.id)}
                >
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-soft-pink border-2 border-white shadow-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    {selectedSpecialist === specialist.id && (
                      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg w-40 z-10">
                        <div className="flex items-center gap-2">
                          <Image
                            src={specialist.image || "/placeholder.svg"}
                            alt={specialist.name}
                            width={40}
                            height={40}
                            className="rounded-full h-10 w-10 object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-xs truncate">{specialist.name}</p>
                            <p className="text-gray-500 text-xs truncate">{specialist.specialty}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Bottom Specialist List */}
      <div className="bg-white border-t shadow-lg">
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Nearby Specialists</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x">
            {specialistsWithLocations.map((specialist) => (
              <div
                key={specialist.id}
                className={`flex-shrink-0 p-2 rounded-lg snap-start cursor-pointer transition-all duration-200 ${
                  selectedSpecialist === specialist.id
                    ? "bg-soft-pink/10 border border-soft-pink"
                    : "bg-gray-50 border border-transparent"
                }`}
                onClick={() => setSelectedSpecialist(specialist.id)}
              >
                <div className="flex items-center gap-2 w-48">
                  <Image
                    src={specialist.image || "/placeholder.svg"}
                    alt={specialist.name}
                    width={40}
                    height={40}
                    className="rounded-full h-10 w-10 object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{specialist.name}</p>
                    <div className="flex items-center gap-1">
                      <p className="text-gray-500 text-xs truncate">{specialist.specialty}</p>
                      <span className="text-soft-pink text-xs font-medium">★ {specialist.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
