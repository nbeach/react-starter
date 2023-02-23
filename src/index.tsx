import React from "react"
import {createRoot} from "react-dom/client"

import {initializeStore} from "./store/store"
import {Provider} from "react-redux"
import {App} from "./component/presentation/App"

createRoot(document.getElementById("root")!)
    .render(<Provider store={initializeStore()}>
        <App/>
    </Provider>,
)
