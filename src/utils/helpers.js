export function triggerFeedbackVibration(duration = 20) {
  if (navigator.vibrate) {
    navigator.vibrate(duration);
  } else {
    console.log("Vibration API not supported on this device/browser.");
  }
}

export function capitalizeFirstLetter(string) {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}
