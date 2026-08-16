"use client";

import { useState } from "react";
import { MapPin, Phone, ExternalLink } from "lucide-react";

/*
 * ─── Partner pharmacy locations ───
 *
 * `mapQuery` is what gets sent to Google Maps for both the embedded map and
 * the directions link, so keep it a full, unambiguous address. Everything is
 * derived from this array — add or remove a pharmacy here and the map, the
 * list, and the directions links all follow.
 *
 * Addresses and phone numbers below were taken from each retailer's own store
 * locator. Re-check them if a partnership changes.
 *
 * TODO (clinic staff): the partner list also names "ShopRite" with no branch.
 * There are several ShopRite pharmacies around New Haven and we do not know
 * which one is the partner, so it is deliberately NOT pinned on the map —
 * sending a patient to the wrong store is worse than omitting it. Add it here
 * once you confirm the location.
 */

export interface PharmacyLocation {
  name: string;
  branch: string;
  address: string;
  mapQuery: string;
  phone: string;
  tel: string;
  note?: string;
}

const LOCATIONS: PharmacyLocation[] = [
  {
    name: "CVS Pharmacy",
    branch: "Church Street, New Haven",
    address: "123 Church St, New Haven, CT 06510",
    mapQuery: "CVS Pharmacy, 123 Church St, New Haven, CT 06510",
    phone: "(203) 498-9442",
    tel: "2034989442",
    note: "Closest to the clinic. About a 10 minute drive from 800 Howard Ave.",
  },
  {
    name: "Stop & Shop Pharmacy",
    branch: "Amity Plaza, New Haven",
    address: "112 Amity Rd, New Haven, CT 06515",
    mapQuery: "Stop & Shop Pharmacy, 112 Amity Road, New Haven, CT 06515",
    phone: "(203) 389-8863",
    tel: "2033898863",
  },
  {
    name: "Stop & Shop Pharmacy",
    branch: "West Haven",
    address: "460 Elm St, West Haven, CT 06516",
    mapQuery: "Stop & Shop Pharmacy, 460 Elm Street, West Haven, CT 06516",
    phone: "(203) 931-9478",
    tel: "2039319478",
  },
  {
    name: "Stop & Shop Pharmacy",
    branch: "East Haven",
    address: "370 Hemingway Ave, East Haven, CT 06512",
    mapQuery: "Stop & Shop Pharmacy, 370 Hemingway Avenue, East Haven, CT 06512",
    phone: "(203) 468-1113",
    tel: "2034681113",
  },
];

function embedUrl(query: string) {
  return `https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1s${encodeURIComponent(
    query
  )}`;
}

function directionsUrl(query: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    query
  )}`;
}

export function PharmacyMap() {
  const [selected, setSelected] = useState(0);
  const active = LOCATIONS[selected];

  return (
    <div>
      <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8">
        We are partnered with the pharmacies below. Pick a location to see it on
        the map, get directions, or call the counter directly. You can still use
        your own pharmacy, but we cannot promise the lower price there.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-6 md:gap-8">
        {/* Map */}
        <div className="order-1 border border-[#00356b]/15 bg-[#f7f9fc]">
          <iframe
            key={active.mapQuery}
            src={embedUrl(active.mapQuery)}
            title={`Map showing ${active.name}, ${active.address}`}
            className="w-full h-[300px] sm:h-[380px] lg:h-[460px] block border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="px-5 py-4 border-t border-[#00356b]/15 flex flex-wrap items-center justify-between gap-3">
            <p className="font-['Poppins',sans-serif] text-black text-[14px] md:text-[15px]">
              <span className="font-semibold text-[#00356b]">{active.name}</span>
              {", "}
              {active.address}
            </p>
            <a
              href={directionsUrl(active.mapQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[14px] md:text-[15px] underline hover:no-underline shrink-0"
            >
              Get directions
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>

        {/* Location list */}
        <ul className="order-2 flex flex-col gap-3">
          {LOCATIONS.map((location, i) => {
            const isActive = i === selected;
            return (
              <li key={`${location.name}-${location.branch}`}>
                <div
                  className={`border p-4 md:p-5 transition-colors ${
                    isActive
                      ? "border-[#00356b] bg-[#00356b]/5"
                      : "border-[#00356b]/15 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setSelected(i)}
                    aria-pressed={isActive}
                    className="w-full text-left flex items-start gap-3 cursor-pointer group"
                  >
                    <MapPin
                      className={`w-5 h-5 mt-0.5 shrink-0 ${
                        isActive ? "text-[#00356b]" : "text-[#00356b]/40"
                      }`}
                    />
                    <span className="block">
                      <span className="block font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] md:text-[16px] group-hover:underline">
                        {location.name}
                      </span>
                      <span className="block font-['Poppins',sans-serif] text-black/60 text-[13px] md:text-[14px]">
                        {location.branch}
                      </span>
                      <span className="block font-['Poppins',sans-serif] text-black text-[13px] md:text-[14px] leading-relaxed mt-1.5">
                        {location.address}
                      </span>
                    </span>
                  </button>

                  <a
                    href={`tel:${location.tel}`}
                    className="mt-3 ml-8 inline-flex items-center gap-2 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[14px] md:text-[15px] hover:underline"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    {location.phone}
                  </a>

                  {location.note && (
                    <p className="mt-2 ml-8 font-['Poppins',sans-serif] text-black/60 text-[13px] leading-relaxed">
                      {location.note}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Dispensary of Hope is not a walk-in location, so it sits outside the map. */}
      <div className="mt-6 border border-[#00356b]/15 bg-[#f7f9fc] px-5 py-5 md:px-6 md:py-6">
        <h4 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[16px] md:text-[17px] mb-2">
          Dispensary of Hope
        </h4>
        <p className="font-['Poppins',sans-serif] text-black text-[14px] md:text-[16px] leading-relaxed">
          Dispensary of Hope is not a storefront you can visit. It is a
          charitable medication supplier that ships certain medications to the
          clinic for us to give you directly. If one of your medications comes
          through Dispensary of Hope, your care team will tell you and you will
          pick it up at HAVEN, not at a pharmacy.
        </p>
      </div>
    </div>
  );
}
