"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Mail, ArrowRight, ArrowLeft, Check } from "lucide-react"

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Left Panel - Green Gradient */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-500 to-green-600 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-32 left-16 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/10 rounded-full"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-4xl">🥭</div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Reset Password</h1>
            <p className="text-lg text-green-100 leading-relaxed">
              Don't worry! It happens to the best of us. Enter your email address and we'll send you a link to reset
              your password.
            </p>

            <div className="flex items-center space-x-2 text-green-100">
              <div className="w-5 h-5 border-2 border-green-200 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3" />
              </div>
              <span>Secure password reset</span>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="space-y-4">
            <p className="text-green-100">Remember your password?</p>
            <Link href="/auth/signin">
              <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge className="bg-green-600 text-white px-4 py-1">Password Reset</Badge>
            <div>
              <h2 className="text-2xl font-bold text-white">Forgot your password?</h2>
              <p className="text-gray-400 mt-2">Enter your email address and we'll send you a reset link</p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Send Reset Link Button */}
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
              Send Reset Link
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            {/* Back to Sign In */}
            <div className="text-center">
              <Link href="/auth/signin" className="text-gray-400 hover:text-white text-sm">
                <ArrowLeft className="w-4 h-4 inline mr-1" />
                Back to Sign In
              </Link>
            </div>
          </form>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 mt-8">©2025 MangooHost. All rights reserved.</div>
        </div>
      </div>
    </div>
  )
}
