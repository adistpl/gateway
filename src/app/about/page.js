// app/components/IframePaytm.js
"use client";

import { useEffect, useState } from "react";

export default function IframePaytm() {
  const [canEmbed, setCanEmbed] = useState(true);

  useEffect(() => {
    // Test embedding on client side
    const testIframe = document.createElement("iframe");
    testIframe.src = "https://paytm.com";
    testIframe.onload = () => setCanEmbed(true);
    testIframe.onerror = () => setCanEmbed(false);
  }, []);

  return (
    <div className="w-full h-screen p-4">
      {canEmbed ? (
        <iframe
          src="https://paytm.com"
          className="w-full h-full border rounded-xl"
          title="Paytm"
        />
      ) : (
        <div className="text-red-500 text-center mt-10">
          ❌ Paytm.com cannot be embedded in an iframe due to browser security policies.
        </div>
      )}
    </div>
  );
}
