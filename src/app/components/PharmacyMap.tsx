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
 * locator or from public pharmacy directories. Re-check them if a partnership
 * changes.
 *
 * The ShopRite entry is the East Haven store on Foxon Road, and the Walgreens
 * is the York Street store beside the medical campus — both confirmed with the
 * clinic. Their numbers came from public listings rather than the retailers'
 * own pages, so verify them the next time someone is on the phone with either
 * counter.
 *
 * The North Haven entry is the Dispensary of Hope partner site. Dispensary of
 * Hope itself is a charitable supplier with no storefront, and this page used
 * to say so and stop there — which left patients with no idea where to collect
 * a medication filled through it. The dispensing pharmacy is Yale New Haven
 * Health's own counter at the North Haven Medical Center, so it belongs on the
 * map like any other.
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
    note: "About a 10 minute drive from 800 Howard Ave.",
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
  {
    name: "Walgreens Pharmacy",
    branch: "York Street, New Haven",
    address: "88 York St, New Haven, CT 06511",
    mapQuery: "Walgreens, 88 York Street, New Haven, CT 06511",
    phone: "(203) 752-9893",
    tel: "2037529893",
    note: "The closest counter to the clinic — walking distance, just up Howard Avenue.",
  },
  {
    name: "ShopRite Pharmacy",
    branch: "Foxon Road, East Haven",
    address: "745 Foxon Rd, East Haven, CT 06513",
    mapQuery: "ShopRite Pharmacy, 745 Foxon Road, East Haven, CT 06513",
    phone: "(475) 202-5184",
    tel: "4752025184",
  },
  {
    name: "Yale New Haven Health Pharmacy",
    branch: "North Haven Medical Center",
    address: "6 Devine St, North Haven, CT 06473",
    mapQuery:
      "Yale New Haven Health Pharmacy, 6 Devine Street, North Haven, CT 06473",
    phone: "(203) 230-3940",
    tel: "2032303940",
    note: "Our Dispensary of Hope partner site. It is in North Haven, a drive from the clinic, so call before you go.",
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

      {/*
        Dispensary of Hope is the supplier, not the counter. The name is what
        appears on the paperwork, so patients need it explained — but the thing
        they actually need is the address of the pharmacy that fills it, which
        is the North Haven entry above.
      */}
      <div className="mt-6 border border-[#00356b]/15 border-l-4 border-l-[#00356b] bg-[#f7f9fc] px-5 py-5 md:px-6 md:py-6">
        <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b]/60 text-[11px] uppercase tracking-wide mb-1.5">
          The program behind some free medications
        </p>
        <h4 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[16px] md:text-[18px] mb-2">
          Dispensary of Hope
        </h4>
        <p className="font-['Poppins',sans-serif] text-black text-[14px] md:text-[16px] leading-relaxed mb-3">
          Dispensary of Hope is a charitable medication supplier, not a store.
          Manufacturers donate medications to it, and it distributes them
          through partner pharmacies for uninsured patients at no cost. It
          carries a lot of what our patients take every day, including
          medications for blood pressure, cholesterol, diabetes, and stomach
          conditions.
        </p>
        <p className="font-['Poppins',sans-serif] text-black text-[14px] md:text-[16px] leading-relaxed">
          Locally, those prescriptions are filled at the{" "}
          <span className="font-semibold">
            Yale New Haven Health Pharmacy at the North Haven Medical Center, 6
            Devine Street
          </span>{" "}
          — the last entry on the list above. If one of your medications comes
          through Dispensary of Hope, your care team will tell you, confirm that
          you qualify, and send the prescription there. Call{" "}
          <a
            href="tel:2032303940"
            className="text-[#00356b] font-semibold hover:underline"
          >
            (203) 230-3940
          </a>{" "}
          before you make the trip — it is in North Haven, not walking distance
          from the clinic.
        </p>
      </div>
    </div>
  );
}
