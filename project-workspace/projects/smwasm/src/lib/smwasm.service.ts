import { Injectable } from '@angular/core';

import { sm_hub } from './wasm/smwasmload';

@Injectable({
  providedIn: 'root'
})
export class SmwasmService {
  constructor() {
  }

  loadwasms(wasm_paths: any) {
    sm_hub.loadwasms(wasm_paths)
  }

  call(ask: any) {
    return sm_hub.call(ask)
  }

  loadsm(imp: any, lib_path: any) {
    sm_hub.loadsm(imp, lib_path)
  }

  info() {
    return sm_hub.info()
  }

  is_ready() {
    return sm_hub.is_ready()
  }
}
