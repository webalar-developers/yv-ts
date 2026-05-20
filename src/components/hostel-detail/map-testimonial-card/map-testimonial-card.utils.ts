export function getGoogleMapsEmbedUrl(lat: number, lng: number) {
	return `https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
}
