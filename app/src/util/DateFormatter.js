export function formatDateTime(str) {
  const d = new Date(str);
  if (window.navigator.language.indexOf("en") === 0) {
    return "on " + d.toLocaleString().replace(",", " at");
  }
  return d.toLocaleString();
}