"use client";

import { useEffect, useState } from "react";

// Hidden anti-spam fields for form intake:
//  - "website" is a honeypot: invisible and inert for real users, but bots
//    that auto-fill every field will populate it, and the server rejects it.
//  - "_ts" is set on mount so the server can reject near-instant submits.
// Drop this inside any <form> that posts to a guarded intake route.
export function SpamGuardFields() {
  const [ts, setTs] = useState("");
  useEffect(() => setTs(String(Date.now())), []);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Company website (leave blank)
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>
      </div>
      <input type="hidden" name="_ts" value={ts} readOnly />
    </>
  );
}
