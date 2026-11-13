import { useEffect, useState } from 'react';
import ProductCard from './product-card';

const BASE_URL = 'https://fakestoreapi.com';

export default function RandomProduct() {
	const [productId, setProductId] = useState(1);
	const [product, setProduct] = useState(null);

	useEffect(() => {
		fetch(`${BASE_URL}/products/${productId}`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, [productId]);

	function randomize() {
		const nextId = Math.floor(Math.random() * 20) + 1;
		setProductId(nextId);
	}

	if (!product) {
		return <div className="text-gray-500">Loading random product...</div>;
	}

	return (
		<div className="space-y-4">
			<div className="flex justify-end">
				<button
					type="button"
					className="rounded-md bg-violet-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-violet-500"
					onClick={randomize}
				>
					Randomize product
				</button>
			</div>
			<ProductCard {...product} />
		</div>
	);
}
