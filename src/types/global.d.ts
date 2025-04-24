export {};

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: [string, string, Record<string, unknown>?]) => void;
    gtag_report_conversion: (url: string) => boolean;
  }
}
