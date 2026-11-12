"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  Compass,
  MapPin,
  Plane,
  TrendingUp,
  Users,
} from "lucide-react";

export default function FeaturedProjectVisual() {
  return (
    <div className="relative flex h-full items-center justify-center p-6 sm:p-10 lg:p-12">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full max-w-md"
      >
        {/* Dashboard Mockup */}

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl shadow-cyan-950/30 transition-transform duration-500 group-hover:scale-[1.02]">
          {/* Top Bar */}

          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/15">
                <Plane className="h-4 w-4 text-cyan-400" />
              </div>

              <span className="text-sm font-bold text-white">TravelHub</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-[10px] text-slate-400">Dashboard</span>
            </div>
          </div>

          {/* Dashboard Body */}

          <div className="grid grid-cols-[65px_1fr] sm:grid-cols-[80px_1fr]">
            {/* Sidebar */}

            <div className="border-r border-white/10 bg-white/[0.02] p-2.5 sm:p-3">
              <div className="space-y-3">
                <div className="flex h-9 items-center justify-center rounded-lg bg-cyan-400/15">
                  <Compass className="h-4 w-4 text-cyan-400" />
                </div>

                <div className="flex h-9 items-center justify-center rounded-lg bg-white/5">
                  <MapPin className="h-4 w-4 text-slate-500" />
                </div>

                <div className="flex h-9 items-center justify-center rounded-lg bg-white/5">
                  <CalendarCheck className="h-4 w-4 text-slate-500" />
                </div>

                <div className="flex h-9 items-center justify-center rounded-lg bg-white/5">
                  <Users className="h-4 w-4 text-slate-500" />
                </div>
              </div>
            </div>

            {/* Main Content */}

            <div className="min-w-0 p-3 sm:p-4">
              {/* Welcome */}

              <div className="mb-4">
                <p className="text-[10px] text-slate-500">TRAVEL MANAGEMENT</p>

                <h3 className="mt-1 text-sm font-semibold text-white sm:text-base">
                  Explore Dashboard
                </h3>
              </div>

              {/* Statistics */}

              <div className="grid grid-cols-2 gap-2.5">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 sm:p-3">
                  <div className="flex items-center justify-between">
                    <MapPin className="h-4 w-4 text-cyan-400" />

                    <TrendingUp className="h-3 w-3 text-emerald-400" />
                  </div>

                  <p className="mt-3 text-lg font-bold text-white">120+</p>

                  <p className="text-[10px] text-slate-500">Destinations</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 sm:p-3">
                  <div className="flex items-center justify-between">
                    <CalendarCheck className="h-4 w-4 text-violet-400" />

                    <TrendingUp className="h-3 w-3 text-emerald-400" />
                  </div>

                  <p className="mt-3 text-lg font-bold text-white">350+</p>

                  <p className="text-[10px] text-slate-500">Bookings</p>
                </div>
              </div>

              {/* Popular Destinations */}

              <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold text-white">
                    Popular Destinations
                  </p>

                  <Compass className="h-4 w-4 text-cyan-400" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/15">
                      <MapPin className="h-4 w-4 text-cyan-400" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-slate-200">
                        Cox&apos;s Bazar
                      </p>

                      <p className="text-[10px] text-slate-500">
                        Beach Destination
                      </p>
                    </div>

                    <span className="text-[10px] text-emerald-400">
                      Popular
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-400/15">
                      <MapPin className="h-4 w-4 text-violet-400" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-slate-200">
                        Sylhet
                      </p>

                      <p className="text-[10px] text-slate-500">
                        Nature Destination
                      </p>
                    </div>

                    <span className="text-[10px] text-emerald-400">
                      Popular
                    </span>
                  </div>
                </div>
              </div>

              {/* Booking Activity */}

              <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold text-white">
                    Booking Activity
                  </p>

                  <span className="text-[10px] text-slate-500">Overview</span>
                </div>

                <div className="flex h-14 items-end justify-around gap-2">
                  {[35, 55, 42, 72, 50, 90, 65].map((height, index) => (
                    <motion.div
                      key={index}
                      animate={{
                        height: [
                          `${height}%`,
                          `${Math.max(height - 12, 15)}%`,
                          `${height}%`,
                        ],
                      }}
                      transition={{
                        duration: 2 + index * 0.15,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`w-full max-w-5 rounded-t-md ${
                        index === 5 ? "bg-cyan-400/60" : "bg-cyan-400/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Badge */}

        <motion.div
          whileHover={{
            y: -4,
            scale: 1.02,
          }}
          className="relative -mt-6 ml-auto mr-2 flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur-xl"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10">
            <Plane className="h-5 w-5 text-emerald-400" />
          </div>

          <div>
            <p className="text-xs font-medium text-white">Travel Management</p>

            <p className="text-[10px] text-slate-500">
              Explore. Discover. Travel.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
