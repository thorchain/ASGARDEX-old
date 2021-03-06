import { destroy } from 'mobx-state-tree'
import { IStore, Store } from './Store'

export let store: IStore

export function createStore(snapshot: any) {
  // kill old store to prevent accidental use and run clean up hooks
  if (store) { destroy(store) }

  // create new one
  store = Store.create(snapshot)

  return store
}
