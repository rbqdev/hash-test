export default function getParamsFromUrl(): URLSearchParams {
  return new URLSearchParams(window.location.search);
}
