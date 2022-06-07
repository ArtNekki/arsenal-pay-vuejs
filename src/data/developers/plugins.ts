export function getPlugins() {
	const pluginsOneCol = [
		{
			logo: `logo-ecwid`,
			links: [
				{
					text: `Market`,
					href: `https://www.ecwid.com/apps/paymentgateways/arsenalpay`,
				},
				{
					text: `Инструкция PDF`,
					href: `https://arsenalpay.ru/instructions/Ecwid_%D0%A1%D0%9C%D0%A1_instruction.pdf`,
				},
			],
		},
		{
			logo: `logo-tilda`,
			href: `https://arsenalpay.ru/instructions/Tilda_instruction.pdf`,
		},
		{
			logo: `logo-in-sales`,
			href: `https://arsenalpay.ru/instructions/InSales_instruction.pdf`,
		},
		{
			logo: `logo-joomla`,
			links: [
				{
					text: `Market`,
					href: `https://extensions.joomla.org/extension/e-commerce/payment-gateway/arsenalpay-for-joomshopping/`,
				},
				{
					text: `GitHub`,
					href: `https://github.com/ArsenalPay/Joomshopping-ArsenalPay-CMS`,
				},
				{
					text: `Инструкция PDF`,
					href: `https://arsenalpay.ru/instructions/Joomshopping_%D0%A1%D0%9C%D0%A1_instruction.pdf`,
				},
			],
		},
		{
			logo: `logo-netcat`,
			links: [
				{
					text: `GitHub`,
					href: `https://github.com/ArsenalPay/Netcat-ArsenalPay-CMS`,
				},
				{
					text: `Инструкция PDF`,
					href: `https://arsenalpay.ru/instructions/NetCat_%D0%A1%D0%9C%D0%A1_instruction.pdf`,
				},
			],
		},
		{
			logo: `logo-webasyst`,
			links: [
				{
					text: `Market 7`,
					href: `https://www.webasyst.ru/store/plugin/payment/arsenalpay/`,
				},
				{
					text: `GitHub 7`,
					href: `https://github.com/ArsenalPay/Webasyst-Shop-Script-7`,
				},
				{
					text: `GitHub 4`,
					href: `https://github.com/ArsenalPay/WebAsyst-Shop-Script-ArsenalPay-CMS`,
				},
				{
					text: `Инструкция PDF`,
					href: `https://arsenalpay.ru/instructions/WebAsyst_%D0%A1%D0%9C%D0%A1_instruction.pdf`,
				},
			],
		},
		{
			logo: `logo-umi-cms`,
			links: [
				{
					text: `GitHub`,
					href: `https://github.com/ArsenalPay/UMI-ArsenalPay-CMS`,
				},
				{
					text: `Инструкция <br />Mcommerce PDF`,
					href: `https://arsenalpay.ru/instructions/UMI_%D0%A1%D0%9C%D0%A1_instruction.pdf`,
				},
			],
		},
	];

	const pluginsTwoCol = [
		{
			logo: `logo-bitrix`,
			links: [
				{
					text: `Market`,
					href: `http://marketplace.1c-bitrix.ru/solutions/arsenalmedia.arsenalpay/?sphrase_id=4149924`,
				},
				{
					text: `GitHub`,
					href: `https://github.com/ArsenalPay/Bitrix-ArsenalPay-CMS`,
				},
				{
					text: `Инструкция PDF`,
					href: `https://arsenalpay.ru/instructions/Bitrix_%D0%A1%D0%9C%D0%A1_instruction.pdf`,
				},
			],
		},
		{
			logo: `logo-woocommerce`,
			links: [
				{
					text: `Market`,
					href: `https://wordpress.org/plugins/arsenalpay-for-woocommerce/`,
				},
				{
					text: `GitHub`,
					href: `https://github.com/ArsenalPay/WooCommerce-ArsenalPay-CMS`,
				},
				{
					text: `Инструкция PDF`,
					href: `https://arsenalpay.ru/instructions/WooCommerce_%D0%A1%D0%9C%D0%A1_instruction.pdf`,
				},
			],
		},
		{
			logo: `logo-opencart`,
			links: [
				{
					text: `Market 1.5`,
					href: `https://www.opencart.com/index.php?route=marketplace/extension/info&extension_id=20804&filter_search=arsenalpay`,
				},
				{
					text: `Market 2.0-2.1`,
					href: `https://www.opencart.com/index.php?route=marketplace/extension/info&extension_id=25756&filter_search=arsenalpay`,
				},
				{
					text: `Market 2.3`,
					href: `https://www.opencart.com/index.php?route=marketplace/extension/info&member-token=OzkRUPxd9xfAQs38vLXHFgZyRSlQ6aI4&extension_id=29794`,
				},
				{
					text: `Github 1.5`,
					href: `https://github.com/ArsenalPay/OpenCart1.5.x-ArsenalPay-CMS`,
				},
				{
					text: `Github 2.0-2.1`,
					href: `https://github.com/ArsenalPay/OpenCart2.x-ArsenalPay-CMS`,
				},
				{
					text: `Github 2.3`,
					href: `https://github.com/ArsenalPay/OpenCart2.3.x-ArsenalPay-CMS`,
				},
				{
					text: `Инструкция PDF`,
					href: `https://arsenalpay.ru/instructions/OpenCart_%D0%A1%D0%9C%D0%A1_instruction.pdf`,
				},
			],
		},
		{
			logo: `logo-prestashop`,
			links: [
				{
					text: `GitHub`,
					href: `https://github.com/ArsenalPay/Prestashop-ArsenalPay-CMS`,
				},
				{
					text: `Инструкция PDF`,
					href: `https://arsenalpay.ru/instructions/PrestaShop_%D0%A1%D0%9C%D0%A1_instruction.pdf`,
				},
			],
		},
		{
			logo: `logo-siberian`,
			links: [
				{
					text: `GitHub`,
					href: `https://github.com/ArsenalPay/Siberian-ArsenalPay-CMS`,
				},
				{
					text: `Инструкция <br />Mcommerce PDF`,
					href: `https://arsenalpay.ru/instructions/Siberian_Mcommerce_%D0%A1%D0%9C%D0%A1_instruction.pdf`,
				},
				{
					text: `Инструкция <br class='br br--show-xs br--hide-sm' />Subscription PDF`,
					href: `https://arsenalpay.ru/instructions/Siberian_Subscription_%D0%A1%D0%9C%D0%A1_instruction.pdf`,
				},
			],
		},
		{
			logo: `logo-virtuemart`,
			links: [
				{
					text: `Market 2.6 & 3`,
					href: `https://extensions.joomla.org/extension/e-commerce/payment-gateway/arsenalpay-for-virtuemart/`,
				},
				{
					text: `GitHub 2.6 & 3`,
					href: `https://github.com/ArsenalPay/VirtueMart-ArsenalPay-CMS`,
				},
				{
					text: `GitHub 1.1x`,
					href: `https://github.com/ArsenalPay/VirtueMart1.1.x-ArsenalPay-CMS`,
				},
				{
					text: `Инструкция PDF`,
					href: `https://arsenalpay.ru/instructions/VirtueMart_%D0%A1%D0%9C%D0%A1_instruction.pdf`,
				},
			],
		},
	];

	return [pluginsOneCol, pluginsTwoCol];
}
