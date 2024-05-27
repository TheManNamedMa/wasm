extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
   
   
   
    pub fn add(left: usize, right: usize) -> usize;
}

#[wasm_bindgen]
pub fn plus(left: usize, right: usize) -> usize {
    return add(left, right);
}
