// const form = document.getElementById('upload-form');
// const fileInput = document.getElementById('file-input');
// const submitBtn = document.getElementById('submit-btn');
// const resultDiv = document.getElementById('result');
// const endSessionBtn = document.getElementById('end-session-btn');

// // const BASE_URL = 'http://7174-122-173-24-198.ngrok.io'
// let trackingArr = []
// let changed = true
// let startTime;



// const EVENT_TYPES = {
//     CLICK: 'click',
//     MOUSE: 'mouse',
//     URL: 'url',
//     INPUT: 'input'
// }
// let count = 0

// window.onload = init

// function init() {
//     startTime = new Date().getTime()
//     const p = setInterval(() => {
//         console.log("changed=>>>>", changed)
//         if (changed) {
//             count++;
//             captureScreenShot()
//         }
//         if (count > 20) clearInterval(p)
//     }, 200);
// }

// // Define the interval (in milliseconds) between captures
// const interval = 1000;

// // Define the key to use for the local storage item
// const storageKey = 'domHistory';

// // Initialize an array to hold the captured DOMs
// let domHistory = [];

// // Define a function to capture the DOM and save it to the array and local storage
// // async function captureDom() {
// //     // Fetch the external CSS files and convert them to inline styles
// //     const cssUrls = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(link => link.href);
// //     const cssPromises = cssUrls.map(url => fetch(url).then(res => res.text()));
// //     const cssTexts = await Promise.all(cssPromises);
// //     const inlineStyles = cssTexts.map(cssText => `<style>${cssText}</style>`).join('');

// //     // Capture the HTML of the page and include the inline styles
// //     const dom = document.documentElement.outerHTML;
// //     const domWithStyles = `${dom.replace(/<\/head>/i, `${inlineStyles}</head>`)}`
// //     domHistory.push(domWithStyles);
// //     localStorage.setItem(storageKey, JSON.stringify(domHistory));
// // }

// // Call the captureDom() function every 2 seconds


// // Capture user input events
// // document.addEventListener('click', function (event) {
// //     // Send user input data to server
// //     event.preventDefault()
// //     console.log("Click Event =>>>", event.target.id, new Date())
// //     trackingArr.push({ time: new Date().toTimeString(), event: EVENT_TYPES.CLICK, name: event.target.tagName, elemId: event.target.id })
// // });

// // // Capture changes in browser history
// // window.onpopstate = function (event) {
// //     trackingArr.push({ time: new Date().toTimeString(), event: EVENT_TYPES.URL, name: event.state.url, })
// //     console.log("URL change Event =>>>", event.state.url, new Date())
// // };

// // const hanldeSubmit = (e) => {
// //     e.preventDefault()
// // }

// // // Track mouse movements
// document.addEventListener('mousemove', (event) => {
//     trackingArr.push({ time: new Date().toTimeString(), event: EVENT_TYPES.MOUSE, x: event.pageX, y: event.pageY, })
// });

// // // Track input on form fields
// // const formFields = document.querySelectorAll('input, textarea');

// // formFields.forEach((field) => {
// //     field.addEventListener('input', (event) => {
// //         console.log('Input changed:', field.name, field.value);
// //         changed = true
// //         // trackingArr.push({ time: new Date().toTimeString(), event: EVENT_TYPES.INPUT, name: field.name, value: field.value, elemId: event.target.id })
// //     });
// // });

// const formFields = document.querySelectorAll('input')

// formFields.forEach((field) => {
//     field.addEventListener('input', (event) => {
//         console.log('Input changed:', field.name, field.value);
//         changed = true
//         // trackingArr.push({ time: new Date().toTimeString(), event: EVENT_TYPES.INPUT, name: field.name, value: field.value, elemId: event.target.id })
//     });
// });

// endSessionBtn.addEventListener('click', async (e) => {

//     e.preventDefault()
//     const duration = new Date().getTime() - startTime
//     captureScreenShot()

//     fetch('/sessionend', {
//         method: 'post',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ data: trackingArr, duration })
//     }).catch((err) => {
//         console.log("err", err.code, err.message);
//         // alert('Something went Wrong')
//     })
//     document.removeEventListener('mousemove')
//     document.removeEventListener('click')
//     trackingArr = []
// })

// /**
//  * Image size is Approx 32kb
//  */

// // document.getElementById('capture').addEventListener('click', function () {
// //     html2canvas(document.body).then(function (canvas) {
// //         document.body.appendChild(canvas);

// //         // Convert canvas to data URL
// //         var dataURL = canvas.toDataURL();

// //         // Send data URL to server
// //         fetch('/uploadfile', {
// //             method: 'POST',
// //             body: JSON.stringify({ dataURL: dataURL }),
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             }
// //         }).then(function (response) {
// //             console.log('Screenshot saved');
// //         });

// //     });
// // });


// /**
//  * Image size is Approx 16KB
//  */

// document.getElementById('capture').addEventListener('click', function () {
//     captureScreenShot()
// });

// function captureScreenShot() {
//     html2canvas(document.body).then(function (canvas) {
//         sendCanvasToApi(canvas)
//         changed = false
//     });
// }

// function sendCanvasToApi(canvas) {
//     canvas.toBlob((blob) => {
//         // Send data URL to server
//         fetch('/save-file', {
//             method: 'POST',
//             // body: JSON.stringify({ dataURL: dataURL }),
//             body: blob,
//             headers: {
//                 'Content-Type': 'application/octet-stream'
//             }
//         }).then(function (response) {
//             console.log('Screenshot saved');
//         }).catch((Err) => {
//             console.log("error=>>>", Err)
//         })
//     }, 'image/jpeg', 50);
// }

// // const observer = new MutationObserver(() => {
// //     const element = document.documentElement;
// //     // html2canvas(element).then(canvas => {
// //     console.log("___________");
// //     // sendCanvasToApi(canvas)
// //     // const screenshot = canvas.toDataURL();
// //     // axios.post('https://example.com/api/screenshots', { screenshot });
// //     // });
// // });

// // observer.observe(document.documentElement, {
// //     childList: true,
// //     subtree: true,
// //     attributes: true,
// //     characterData: true,
// // });





// window.onload = function () {

//     const node = {
//         nodeType: document.documentElement.tagName.toLowerCase(),
//         attributes: {},
//         children: []
//     };

//     document.documentElement.childNodes.forEach(function (child) {
//         if (child.nodeType === Node.ELEMENT_NODE) {
//             const tagName = child.tagName.toLowerCase();
//             if (tagName === 'style') {
//                 const css = child.textContent;
//                 // Add CSS styles to the attributes object
//                 node.attributes.style = css;
//             } else if (tagName === 'link' && child.getAttribute('rel') === 'stylesheet') {
//                 const cssFile = child.getAttribute('href');
//                 // Read external CSS file and add to attributes object
//                 fetch(cssFile)
//                     .then(response => response.text())
//                     .then(css => {
//                         // Parse the CSS rules into an object
//                         const cssRules = {};
//                         const cssParser = new DOMParser();
//                         const cssDoc = cssParser.parseFromString(`<style>${css}</style>`, 'text/html');
//                         cssDoc.querySelectorAll('style')[0].sheet.cssRules.forEach(function (rule) {
//                             cssRules[rule.selectorText] = rule.style.cssText;
//                         });
//                         // Add inline styles to child nodes
//                         node.children.forEach(function (childNode) {
//                             function applyStyles(node) {
//                                 // Apply styles to current node
//                                 const selector = node.nodeType;
//                                 const styles = cssRules[selector];
//                                 if (styles) {
//                                     node.attributes.style = node.attributes.style || '';
//                                     node.attributes.style += styles;
//                                 }
//                                 // Recursively apply styles to child nodes
//                                 node.children.forEach(function (childNode) {
//                                     applyStyles(childNode);
//                                 });
//                             }
//                             applyStyles(childNode);
//                         });
//                     })
//                     .catch(error => console.error(error));
//             }
//             else {
//                 const childNode = {
//                     nodeType: tagName,
//                     attributes: {},
//                     children: []
//                 };
//                 // Add attributes to child node
//                 for (const attr of child.getAttributeNames()) {
//                     childNode.attributes[attr] = child.getAttribute(attr);
//                 }
//                 // Add text content to child node if present
//                 if (child.textContent.trim()) {
//                     childNode.textContent = child.textContent.trim();
//                 }
//                 // Recursively add child nodes
//                 if (child.childNodes.length) {
//                     child.childNodes.forEach(function (grandchild) {
//                         if (grandchild.nodeType === Node.ELEMENT_NODE) {
//                             const grandchildNode = {
//                                 nodeType: grandchild.tagName.toLowerCase(),
//                                 attributes: {},
//                                 children: []
//                             };
//                             // Add attributes to grandchild node
//                             for (const attr of grandchild.getAttributeNames()) {
//                                 grandchildNode.attributes[attr] = grandchild.getAttribute(attr);
//                             }
//                             // Add text content to grandchild node if present
//                             if (grandchild.textContent.trim()) {
//                                 grandchildNode.textContent = grandchild.textContent.trim();
//                             }
//                             childNode.children.push(grandchildNode);
//                         }
//                     });
//                 }
//                 node.children.push(childNode);
//             }
//         }
//     });

//     console.log(node);


// }


window.onload = function () {
    const node = {
        nodeType: document.documentElement.tagName.toLowerCase(),
        attributes: {},
        children: []
    };

    function parseChildNodes(parentNode, cssRules) {
        const childNodes = parentNode.childNodes;
        if (!childNodes) return;

        parentNode.childNodes.forEach(function (child) {

            if (child.nodeType === Node.ELEMENT_NODE) {
                const tagName = child.tagName.toLowerCase();
                if (tagName === 'style') {
                    const css = child.textContent;
                    // Parse the CSS rules into an object
                    const cssParser = new DOMParser();
                    const cssDoc = cssParser.parseFromString(`<style>${css}</style>`, 'text/html');
                    cssDoc.querySelectorAll('style')[0].sheet.cssRules.forEach(function (rule) {
                        cssRules[rule.selectorText] = rule.style.cssText;
                    });
                } else if (tagName === 'link' && child.getAttribute('rel') === 'stylesheet') {
                    const cssFile = child.getAttribute('href');
                    // Read external CSS file and add to cssRules object
                    fetch(cssFile)
                        .then(response => response.text())
                        .then(css => {
                            const cssParser = new DOMParser();
                            const cssDoc = cssParser.parseFromString(`<style>${css}</style>`, 'text/html');
                            cssDoc.querySelectorAll('style')[0].sheet.cssRules.forEach(function (rule) {
                                cssRules[rule.selectorText] = rule.style.cssText;
                            });
                            // Recursively parse child nodes after CSS has been loaded
                            parentNode.childNodes.forEach(function (childNode) {
                                if (childNode.nodeType === Node.ELEMENT_NODE) {
                                    parseChildNodes(childNode, cssRules);
                                }
                            });
                        })
                        .catch(error => console.error(error));
                    return;
                }
                const childNode = {
                    nodeType: tagName,
                    attributes: {},
                    children: []
                };
                // Add attributes to child node
                for (const attr of child.getAttributeNames()) {
                    childNode.attributes[attr] = child.getAttribute(attr);
                }
                // Add text content to child node if present
                if (child.textContent.trim()) {
                    childNode.textContent = child.textContent.trim();
                }
                // Add inline styles to child node
                const selector = childNode.nodeType;
                const styles = cssRules[selector];
                if (styles) {
                    childNode.attributes.style = styles;
                }
                // Recursively add child nodes
                if (child.childNodes.length) {
                    parseChildNodes(childNode, cssRules);
                }
                if (!Array.isArray(parentNode.children)) {
                    parentNode.children = [childNode];
                } else {
                    parentNode.children.push(childNode);
                }
            }
        });
    }

    parseChildNodes(document.documentElement, {});

    console.log(node);

}