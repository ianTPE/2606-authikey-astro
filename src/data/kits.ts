// Shared kit data — used by the per-brand product pages (/product/tpm-for-*)
// and the /shop landing. Keep in sync with the combined table on
// src/pages/products.astro.

export interface Kit {
	id: string;
	slug: string; // matches the legacy WooCommerce URL: /product/{slug}/
	brand: string;
	adapter: string;
	headers: string;
	intelDirect: string;
	intelAdapter: string;
	amd: string;
	note: string;
}

export const kits: Kit[] = [
	{
		id: "asus",
		slug: "tpm-for-asus",
		brand: "ASUS",
		adapter: "ASUS 14-1 pin TPM connector adapter board",
		headers: "20-1 pin (direct) or 14-1 pin (via adapter)",
		intelDirect: "X99, X79, Z97, H97, Z87, H87, B85, H81, Z77, H77, B75",
		intelAdapter:
			"Z390, H370, B365, B360, Z370, H310, Q370, X299, C621, C422, C246, Q270, B250, Z270, H270, Z170, H170, H110, Q170, B150",
		amd: "AM4 (300 / 400 series), AM3+, FM2+",
		note: "Z170–Z390 era boards use the 14-1 pin header; older boards use the 20-1 pin header directly.",
	},
	{
		id: "gigabyte",
		slug: "tpm-for-giga",
		brand: "Gigabyte",
		adapter: "Gigabyte 12-1 pin TPM connector adapter board",
		headers: "20-1 pin (direct) or 12-1 pin (via adapter)",
		intelDirect:
			"X99, X79, C606, Z97, H97, Z87, H87, B85, Z77, H77, B75, Q270, B250, Z270, H270, Z170, H170, H110, Q170, B150",
		intelAdapter: "Z390, H370, B365, B360, Z370, H310, Q370, X299, C621, C246",
		amd: "AM4 300 / 400 series (20-1 pin), AM4 500 series (12-1 pin)",
		note: "Newer Gigabyte boards (Z370/Z390, AM4 500) use the 12-1 pin header; older boards use 20-1 pin.",
	},
	{
		id: "msi",
		slug: "tpm-for-msi",
		brand: "MSI",
		adapter: "MSI 14-1 pin TPM connector adapter board",
		headers: "20-1 pin (direct) or 14-1 pin JTPM1 (via adapter)",
		intelDirect: "X99, X79, C606, Z97, H97, Z87, H87, H81, B85, Z77, H77, B75",
		intelAdapter:
			"Z390, H370, B365, B360, Z370, H310, Q370, X299, C621, C246, Q270, B250, Z270, H270, Z170, H170, H110, Q170, B150",
		amd: "AM4 (300 / 400 series)",
		note: "Most MSI boards in range use the 14-1 pin JTPM1 header.",
	},
	{
		id: "asrock",
		slug: "tpm-for-asrock",
		brand: "ASRock",
		adapter: "ASRock 18-1 pin TPM connector adapter board",
		headers: "20-1 pin (direct) or 18-1 pin (via adapter)",
		intelDirect: "X99, X79, C606, Z97, H97, Z87, H87, H81, B85, Z77, H77, B75",
		intelAdapter: "Z390, H370, B365, X299, Q270, Z270, H270, Z170, H170, H110",
		amd: "AM4 (300 / 400 series)",
		note: "ASRock boards use an 18-1 pin TPM header.",
	},
];

export const getKit = (slug: string): Kit | undefined =>
	kits.find((k) => k.slug === slug);
