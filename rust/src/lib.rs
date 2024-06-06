extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

pub fn _add(left: f64, right: f64) -> f64 {
    return left + right;
}

pub fn _fibonacci(n: usize) -> usize {
    match n {
        0 | 1 => n,
        _ => _fibonacci(n - 1) + _fibonacci(n - 2),
    }
}

#[wasm_bindgen]
pub fn plus(left: f64, right: f64) -> f64 {
    return _add(left, right);
}

#[wasm_bindgen]
pub fn fibonacci(n: usize) -> usize {
    return _fibonacci(n);
}
