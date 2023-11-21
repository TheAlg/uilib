// Add the link to Google Material Icons in the head of your HTML
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
document.head.appendChild(linkElement);

import NativeButton from "./components/native/c-button.vue";
import NativeContainer from "./components/native/c-container.vue";
import NativeDropdown from "./components/native/c-dropdown.vue";
import NativeImg from "./components/native/c-img.vue";
import NativeList from "./components/native/c-list.vue";
import NativeSnippet from "./components/native/c-snippet.vue";
import NativeSwitch from "./components/native/c-switch.vue";
import NativeTree from "./components/native/c-tree.vue";
export {
    //native
    NativeButton,
    NativeContainer,
    NativeDropdown,
    NativeImg,
    NativeList,
    NativeSnippet,
    NativeSwitch,
    NativeTree
    //composed

    //forms
}

