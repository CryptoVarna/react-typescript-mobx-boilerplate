import { observable, makeObservable, action, computed } from "mobx";
import { createContext, useContext } from "react";

export default class SampleStore {
    @observable _ready = false;

    constructor() {
        makeObservable(this);
    }

    dispose(): void {
        this._ready = false;
    }

    @computed get isReady(): boolean {
        return this._ready;
    }

    @action setReady(value: boolean): void {
        this._ready = value;
    }

    @action async init(): Promise<void> {
        await new Promise((resolve) => {
            setTimeout(() => {
                // sleep
                this.setReady(true);
                resolve(true);
            }, 1000);
        });
    }
}

export const SampleStoreContext = createContext<SampleStore>({} as SampleStore);
export const useSampleStore = (): SampleStore => useContext(SampleStoreContext);
