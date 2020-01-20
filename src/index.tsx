import React from "react"
import ReactDOM from "react-dom"

import "./style/index.scss"
import {initializeStore} from "./store/store"
import {Provider} from "react-redux"
import {App} from "./component/presentation/App"

ReactDOM.render(
    <Provider store={initializeStore()}>
        <App/>
    </Provider>,
    document.getElementById("root"),
)
