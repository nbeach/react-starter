import { addParameters, configure } from "@storybook/react";
import "../src/style/index.scss";
import "bootstrap";

addParameters({
    options: {
        showPanel: false,
    },
})

function loadStories() {
    try {
        function requireAll(r) { r.keys().forEach(r); }
        requireAll(require.context("../src/component", true, /\.stories\.tsx$/));
    } catch (e) {
        const sneakyRequire = (value) => require(value.toString());
        const glob = sneakyRequire( "glob" );
        const path = sneakyRequire( "path" );
        glob.sync( "./src/component/**/*.stories.tsx" ).forEach(file => require(path.resolve(file)));
    }
}

configure(loadStories, module);
