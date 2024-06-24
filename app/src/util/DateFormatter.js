
const FORMAT_OPTION_FULL = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
const FORMAT_OPTION_THIS_YEAR = { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
const FORMAT_OPTION_THIS_WEEK = { weekday: 'long', hour: 'numeric', minute: '2-digit',hour12: true };
const FORMAT_OPTION_TIME_ONLY = { hour: '2-digit', minute: '2-digit', hour12: true };

const DAY_VALUE = 24 * 60 * 60 * 1000;

const lang = window.navigator.language;

export function formatDateTime(str) {
  const d = new Date(str + " UTC");
  if (lang.indexOf("en") < 0) d.toLocaleString();

  const now = new Date(Date.now());
  if (now - d < DAY_VALUE) { // today 
    return "Today at " + d.toLocaleTimeString(lang, FORMAT_OPTION_TIME_ONLY);
  }
  if (now - d < now.getDay() * DAY_VALUE) { // This week
    return "on " + d.toLocaleString(lang, FORMAT_OPTION_THIS_WEEK);
  }
  if (now.getFullYear() === d.getFullYear()) { // This year
    console.log("this year", d);
    return "on " + d.toLocaleString(lang, FORMAT_OPTION_THIS_YEAR);
  }
  if (lang.indexOf("en") === 0) {
    console.log("old", d);
    return "on " + d.toLocaleString(lang, FORMAT_OPTION_FULL);
  }
}