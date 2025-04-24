export const gtag_report_conversion = (url: string) => {
  const callback = function () {
    if (typeof url !== "undefined") {
      window.location.href = url;
    }
  };
  if (window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-11500664693/D7rMCM2hl_gZEPXu-Osq",
      value: 1.0,
      currency: "BRL",
      event_callback: callback,
    });
  }
  return false;
};
