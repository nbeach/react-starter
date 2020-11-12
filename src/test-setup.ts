import {JSDOM} from "jsdom"
import {defaultsDeep} from "lodash"

const window = new JSDOM("<!doctype html><html><body></body></html>", { url: "http://localhost"}).window
defaultsDeep(global as any, window)

// eslint-disable-next-line functional/immutable-data
global.Event = window.Event

