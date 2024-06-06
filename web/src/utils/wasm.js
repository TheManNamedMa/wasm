

let wasm_plus, wasm_fibonacci

const init = async () => {
	// eslint-disable-next-line no-undef
	const { plus, fibonacci } = await wasm_bindgen('/pkg/package_bg.wasm');

	wasm_plus = plus
	wasm_fibonacci = fibonacci
};

init()

export const plus = async (...args) => {
	if (wasm_plus) {
		return wasm_plus(...args);
	}
	await init();
	return wasm_plus(...args);
};


export const fibonacci = async (...args) => {
	if (wasm_fibonacci) {
		return wasm_fibonacci(...args);
	}
	await init();
	return wasm_fibonacci(...args);
};


