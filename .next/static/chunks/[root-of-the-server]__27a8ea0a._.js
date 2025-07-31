(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s({
    "connect": (()=>connect),
    "setHooks": (()=>setHooks),
    "subscribeToUpdate": (()=>subscribeToUpdate)
});
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case "turbopack-connected":
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn("[Fast Refresh] performing full reload\n\n" + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + "You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n" + "Consider migrating the non-React component export to a separate file and importing it into both files.\n\n" + "It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n" + "Fast Refresh requires at least one parent function component in your React tree.");
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error("A separate HMR handler was already registered");
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: "turbopack-subscribe",
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: "turbopack-unsubscribe",
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: "ChunkListUpdate",
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted" || updateA.type === "deleted" && updateB.type === "added") {
        return undefined;
    }
    if (updateA.type === "partial") {
        invariant(updateA.instruction, "Partial updates are unsupported");
    }
    if (updateB.type === "partial") {
        invariant(updateB.instruction, "Partial updates are unsupported");
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: "EcmascriptMergedUpdate",
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted") {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === "deleted" && updateB.type === "added") {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: "partial",
            added,
            deleted
        };
    }
    if (updateA.type === "partial" && updateB.type === "partial") {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: "partial",
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === "added" && updateB.type === "partial") {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: "added",
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === "partial" && updateB.type === "deleted") {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: "deleted",
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    "bug",
    "error",
    "fatal"
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    "bug",
    "fatal",
    "error",
    "warning",
    "info",
    "log"
];
const CATEGORY_ORDER = [
    "parse",
    "resolve",
    "code generation",
    "rendering",
    "typescript",
    "other"
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case "issues":
            break;
        case "partial":
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === "notFound") {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}}),
"[project]/components/ClientSlider.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-slick/lib/index.js [client] (ecmascript)");
;
;
;
;
const ClientSliders = ({ clients })=>{
    const settingsTop = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const settingsBottom = {
        ...settingsTop,
        rtl: true
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-12 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            ...settingsTop,
            children: clients.map((client, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex items-center justify-center px-4 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: client,
                        alt: `Client ${index}`,
                        className: "h-16 w-auto object-contain hover:grayscale-0 transition duration-300"
                    }, void 0, false, {
                        fileName: "[project]/components/ClientSlider.js",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this)
                }, `top-${index}`, false, {
                    fileName: "[project]/components/ClientSlider.js",
                    lineNumber: 51,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/ClientSlider.js",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ClientSlider.js",
        lineNumber: 47,
        columnNumber: 5
    }, this);
};
_c = ClientSliders;
const __TURBOPACK__default__export__ = ClientSliders;
var _c;
__turbopack_context__.k.register(_c, "ClientSliders");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Footer.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [client] (ecmascript)");
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-gray-700 text-gray-800 pt-12 pb-8 px-6 md:px-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-300 pb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-white mb-2",
                                children: "MAS SYSTECH PVT LTD"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 11,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4 text-sm leading-relaxed text-slate-200",
                                children: [
                                    "D-241, Chakan Industrial Area, Phase II, Warale, Khed,",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 13,
                                        columnNumber: 67
                                    }, this),
                                    "Pune - 410507"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mb-1 text-slate-200",
                                children: "📞 +91 92840 35561"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mb-4 text-slate-200",
                                children: "✉️ sales@massystech.com"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://in.linkedin.com/company/mas-systech-private-limited",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "LinkedIn",
                                        className: "hover:text-white text-slate-200 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.js",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://youtube.com/@user-ul8xd3hw7d?si=PFZeTDpPuBcX73M4",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "YouTube",
                                        className: "hover:text-white text-slate-200 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.js",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-white font-semibold mb-3",
                                children: "COMPANY"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2 text-sm",
                                children: [
                                    {
                                        name: "Home",
                                        slug: "/home"
                                    },
                                    {
                                        name: "About us",
                                        slug: "/about-us"
                                    },
                                    {
                                        name: "Contact us",
                                        slug: "/contact"
                                    },
                                    {
                                        name: "Products",
                                        slug: "/products"
                                    },
                                    {
                                        name: "Services",
                                        slug: "/services"
                                    },
                                    {
                                        name: "Media Gallery",
                                        slug: "/media"
                                    }
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/${item.slug}`,
                                            className: "text-slate-200 hover:text-white transition-colors",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.js",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, this)
                                    }, item, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-white font-semibold mb-3",
                                children: "PRODUCTS"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2 text-sm",
                                children: [
                                    {
                                        name: "Case Erector",
                                        slug: "case-erector",
                                        image: "/case_erector.png"
                                    },
                                    {
                                        name: "Case Sealer",
                                        slug: "case-sealer",
                                        image: "/case_sealer.png"
                                    },
                                    {
                                        name: "Shrink Wrap Machine",
                                        slug: "shrink-wrap-machine",
                                        image: "/shrink_wrapping_machine.png"
                                    },
                                    {
                                        name: "Tetra Conveyors",
                                        slug: "tetra-conveyors",
                                        image: "/tetra_conveyors.png"
                                    },
                                    {
                                        name: "Case Packer",
                                        slug: "case-packer",
                                        image: "/case_packer.png"
                                    },
                                    {
                                        name: "Palletizer",
                                        slug: "palletizer",
                                        image: "/palletizer.png"
                                    }
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/products/${item.slug}`,
                                            className: "text-slate-200 hover:text-white transition-colors",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.js",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this)
                                    }, item, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-white font-semibold mb-3",
                                children: "SOLUTIONS"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2 text-sm",
                                children: [
                                    "Food",
                                    "Beverage",
                                    "Home Care",
                                    "Personal Care",
                                    "Edible Oils",
                                    "Lube Oil",
                                    "Paints & Chemicals",
                                    "Agrochemicals"
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-slate-200 hover:text-white transition-colors",
                                            children: item
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.js",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    }, item, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-xs text-slate-200 pt-6",
                children: [
                    "© 2025 MAS SYSTECH PVT LTD. All rights reserved.",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/sitemap.xml",
                        className: "text-slate-200 hover:text-white",
                        children: "sitemap.xml"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.js",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/data/ProductsList.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const productsList = [
    {
        image: "/case_erector.png",
        name: "Case Erector",
        slug: "case-erector",
        features: [
            "Extremely Compact High Speed Case Erector",
            "Fully Cam operated motions",
            "Easy & Simple to operate and Adjust"
        ],
        description: "Manually erecting the cases when it comes to high speed end of line is a hectic task. Mas Systech has developed 3 different modules of case erector machines. Namely CEM 111, CEM 114 & CEM 115.",
        media: [
            {
                type: "image",
                name: "Case Erector",
                path: "/case_erector.png"
            },
            {
                type: "video",
                name: "CEM 111",
                path: "xHJZnSpzTNw"
            },
            {
                type: "video",
                name: "CEM 114",
                path: "AuDzNua_610"
            },
            {
                type: "video",
                name: "CEM 115",
                path: "vnJwqkDikFE"
            }
        ],
        models: [
            {
                name: "CEM-111",
                specs: {
                    "Machine Size (Length)": "2400 mm",
                    "Machine Size (Width)": "1250 mm",
                    "Machine Size (Height)": "1850 mm",
                    Speed: "1-20 cases/min",
                    "Case Size (Length)": "240 -510 mm",
                    "Case Size (Width)": "190- 400 mm",
                    "Case Size (Height)": "120 - 380 0 mm",
                    "Air Consumption": "10 CFM at 5 bar",
                    electicals: "1 kw, 1 ph, 230 V, 50 Hz",
                    "Machine weight": "Approximate 700 kgs"
                }
            },
            {
                name: "CEM-114",
                specs: {
                    "Machine Size (Length)": "2500 mm",
                    "Machine Size (Width)": "2050 mm",
                    "Machine Size (Height)": "1450 mm",
                    Speed: "1-10 cases/min",
                    "Case Size (Length)": "250 -520 mm",
                    "Case Size (Width)": "150- 380 mm",
                    "Case Size (Height)": "150 - 380 mm",
                    "Air Consumption": "10 CFM at 5 bar",
                    electicals: "1 kw, 1 ph 230V, 50Hz",
                    "Machine weight": "Approximate 600 kgs"
                },
                media: [
                    {
                        type: "video",
                        name: "Case Erector- CEM 114",
                        path: "M6nvjeS4LcA"
                    }
                ]
            },
            {
                name: "CEM-115",
                specs: {
                    "Machine Size (Length)": "5650 mm",
                    "Machine Size (Width)": "2170 mm",
                    "Machine Size (Height)": "2060 mm",
                    Speed: "1-40 cases/min",
                    "Case Size (Length)": "240 -510 mm",
                    "Case Size (Width)": "150- 380 mm",
                    "Case Size (Height)": "120 - 380 mm",
                    "Air Consumption": "60 CFM at 5 bar",
                    electicals: "4 kw, 1 ph, 230 V, 50Hz",
                    "Machine weight": "Approximate 1600 kgs"
                }
            }
        ],
        brochure: "/brochure/Case_Erector_CEM.pdf",
        industries: [
            "Food & Beverage",
            "Pharmaceutical",
            "FMCG",
            "Liquor"
        ]
    },
    {
        image: "/case_packer.png",
        name: "Case Packer",
        slug: "case-packer",
        features: [],
        description: "With vast demand of high speed primary lines, case packer plays an important role. We at Mas Systech has developed various case packers namely IRCP- 143 (Industrial robotic case packer), MRP-100 (Mechanical robotic case packer), PPP-140 (Pick &amp; place case packer)",
        media: [
            {
                type: "image",
                name: "Case Packer",
                path: "/case_packer.png"
            },
            {
                type: "video",
                name: "IRCP-143",
                path: "-2z9IRqE_KM"
            },
            {
                type: "video",
                name: "MRP 100",
                path: "BIITvXJHU7U"
            },
            {
                type: "video",
                name: "PPP 140",
                path: "VFvBDEcTyyM"
            }
        ],
        models: [
            {
                name: "INDUSTRIAL ROBOT CASE PACKER (IRCP -143)",
                features: [
                    "High precision movements",
                    "Precise product positioning",
                    "Robust structure",
                    "Open and ergonomic design"
                ],
                specs: {
                    "Machine Size": "As per application",
                    Speed: "1-8 cycles / min",
                    Payload: "80 kgs",
                    "Air Consumption": "3 to 5 CFM",
                    electicals: "15 kw, 3ph, 440 V, 50 Hz",
                    "Machine weight": "Approximate 1200 kgs"
                },
                brochure: "/brochure/Case_Packer_IRCP-143.pdf",
                media: [
                    {
                        type: "video",
                        name: "IRCP-143",
                        path: "-2z9IRqE_KM"
                    },
                    {
                        type: "video",
                        name: "Industrial Robotic Case Packer- (IRCP-143)",
                        path: "7L_SjrKn6DQ"
                    }
                ]
            },
            {
                name: "MECHANICAL ROBOTICARM PACKER: Model MRP-100",
                features: [
                    "Simplified Cam based Mechanical Case Packer",
                    "Quick Changeover",
                    "All controls with PLC command & inbuilt touch screen HMI"
                ],
                brochure: "/brochure/Case_Packer_MRP-100.pdf",
                specs: {
                    "Machine Size (Length)": "2300 mm",
                    "Machine Size (Width)": "2050 mm",
                    "Machine Size (Height)": "2400 mm",
                    Speed: "1-8 cycles/min",
                    Payload: "100 kgs inclusive of Gripper Heads",
                    "Air Consumption": "3 to 5 CFM at 5 bar",
                    electicals: "3 kw, 3 ph, 440 V, 50 Hz",
                    "Product Grippers": "Customized to suit product",
                    "Machine weight": "Approximate 1000 kgs"
                },
                media: [
                    {
                        type: "video",
                        name: "MRP 100",
                        path: "BIITvXJHU7U"
                    }
                ]
            },
            {
                name: "PICK AND PLACE PACKER (PPP-140)",
                features: [
                    "A Simple yet Rigid Pick and Place Case packer",
                    "Robust Structure",
                    "PLC Controlled AC Servo Motors driven"
                ],
                specs: {
                    "Machine Size (Length)": "3700 mm",
                    "Machine Size (Width)": "2400 mm",
                    "Machine Size (Height)": "3650 mm",
                    "Max working height of vertical axis": "3400 mm",
                    Speed: "1-8 cycles/min",
                    Payload: "60 kgs inclusive of Gripper Heads",
                    "Air Consumption": "3 to 5 CFM at 5 bar",
                    electicals: "4 kw, 3 ph, 440 V, 50 Hz",
                    "Product Grippers": "Customized to suit product",
                    Frame: "MS powder coated (SS 304 optional)",
                    "Machine weight": "Approximate 1000 kgs"
                },
                brochure: "/brochure/Case_Packer_PPP-140.pdf",
                media: [
                    {
                        type: "video",
                        name: "PPP 140",
                        path: "VFvBDEcTyyM"
                    },
                    {
                        type: "video",
                        name: "PPP 140",
                        path: "swD83FX5NIQ"
                    },
                    {
                        type: "video",
                        name: "PPP 140",
                        path: "sOmqmcL1Hsw"
                    },
                    {
                        type: "video",
                        name: "PPP 140",
                        path: "fk9kvGVQjD4"
                    },
                    {
                        type: "video",
                        name: "PPP 140",
                        path: "kyN6rWScmUs"
                    },
                    {
                        type: "video",
                        name: "Pick & Place Packer- PPP 140",
                        path: "swD83FX5NIQ"
                    },
                    {
                        type: "video",
                        name: "Case Packer- PPP 140- Carton Box in Box",
                        path: "sK8SGGH34-k"
                    }
                ]
            }
        ],
        industries: [
            "Food & Beverage",
            "Pharmaceutical",
            "FMCG",
            "Liquor"
        ]
    },
    {
        image: "/case_sealer.png",
        name: "Case Sealer",
        slug: "case-sealer",
        features: [],
        description: "Automatic case sealer is required when it comes to shifting your corrugated boxes from one end to another without any contamination. We at Mas Systech have developed 2 different types of case sealers. CSM-170 (Case sealer machine), ETM- 120 (Edge tapping machine)",
        media: [
            {
                type: "image",
                name: "Case Sealer",
                path: "/case_sealer.png"
            },
            {
                type: "video",
                name: "Case Sealing Machine- CSM 170",
                path: "ICI5FMCLwlM"
            },
            {
                type: "video",
                name: "Edge Taping Machine",
                path: "ojL18BFOPqs"
            }
        ],
        models: [
            {
                name: "Case Sealer Machine CSM-170",
                specs: {
                    "Machine Size (Length)": "1800 mm",
                    "Machine Size (Width)": "900 mm",
                    "Machine Size (Height)": "1600 mm",
                    Speed: "8-20 cycles/min",
                    "Packing Size (Length)": "200 - 600 mm",
                    "Packing Size (Width)": "150- 500 mm",
                    "Packing Size (Height)": "150 - 500 mm",
                    "Air Consumption": "1 CFM at 5 bar",
                    electicals: "0.75 kw, 3 ph, 440 V, 50 Hz",
                    Tape: "48 / 60 / 75",
                    "Machine weight": "Approximate 300 kgs"
                },
                features: [
                    "Semi Automatic Flaps closing",
                    "Available in fully enclosed housing",
                    "Optional SS-304 constuction"
                ],
                brochure: "/brochure/Case_Sealer_CSM-170.pdf"
            },
            {
                name: "Edge Tapping Machine ETM-120",
                features: [
                    "Semi-automatic corner sealer for four side sealing",
                    "Manually adjustble to different size of cartons",
                    "90 Degree carton turning coveyer & pusher"
                ],
                brochure: "/brochure/Edge_Taping_Machine_ESM-120.pdf",
                specs: {
                    "Machine Size (Length)": "2000 mm",
                    "Machine Size (Width)": "1200 mm",
                    "Machine Size (Height)": "1600 mm",
                    Speed: "8-10 packs/min",
                    "Package Size (Length)": "320 - 50 mm",
                    "Package Size (Width)": "200- 500 mm",
                    "Package Size (Height)": "180 - 500 mm",
                    "Air Consumption": "5 CFM at 5 bar",
                    electicals: "1 kw, 3 ph 440V, 50Hz",
                    Tape: "48 / 60 / 75",
                    "Machine weight": "Approximate 450 kgs"
                }
            }
        ],
        industries: [
            "Food & Beverage",
            "Pharmaceutical",
            "FMCG",
            "Liquor"
        ]
    },
    {
        image: "/palletizer.png",
        name: "Palletizer",
        slug: "palletizer",
        features: [
            "High-Speed, 4-axis palletizing robot with performance driven design",
            "Increased payload, moment and inertia ratings handles unbalanced loads effectively",
            "Suitable for wide range of applications like Beverages, Food, Oil, Chemicals"
        ],
        description: "Automatically palletizing the corrugated boxes or Sacks is a major challenge. High speed lines require more man power when it comes to palletizing the filled boxes or sacks at a certain hight. We at Mas Systech have delveped the palletizer for both the application with a pay load of 180kg’s for 8 cycles.",
        media: [
            {
                type: "image",
                name: "Palletizer",
                path: "/palletizer.png"
            },
            {
                type: "video",
                name: "Palletizer",
                path: "4_F6J78zMSo"
            }
        ],
        models: [
            {
                name: "default",
                specs: {
                    "Vertical reach": "As per Application",
                    "Horizontal reach": "As per Application",
                    Repeatability: "+/- 0.2 mm",
                    Speed: "1-8 Cycles/min",
                    Payload: "180kgs (with pick-up head)",
                    "pallet size": "1400 mm x 1200 mm",
                    Electricals: "16kw, 3ph 440V, 50Hz",
                    "Machine weight": "Approximate 1700 kgs"
                }
            }
        ],
        brochure: "/brochure/Palletizer.pdf",
        industries: [
            "Food & Beverage",
            "Pharmaceutical",
            "FMCG",
            "Liquor"
        ]
    },
    {
        image: "/shrink_wrapping_machine.png",
        name: "SHRINK WRAPPING MACHINE & TUNNEL",
        slug: "shrink-wrapping-machine",
        features: [
            "Automatic feeding, pushing, film feeding and sealing",
            "Adjustable speed conveyor for feeding",
            "Quick changeover from one type to other",
            "Suitable for wide products like, bottles, cans, beverages, cosmetics etc."
        ],
        description: "Shrink wrapping machine for bottles or boxes are required to collectively bundle the goods & ship to longer distances. We at Mas Systech has developed the shrink wrap machines SWM-150 for Bottles or Box applications.",
        media: [
            {
                type: "image",
                name: "SHRINK WRAPPING MACHINE",
                path: "/shrink_wrapping_machine.png"
            },
            {
                type: "video",
                name: "90 Degree Infeed (SWM-150)",
                path: "z4x1NkFFnLs"
            },
            {
                type: "video",
                name: "Inline Shrink Wrapper (SWM-150)",
                path: "TScLZealwPw"
            },
            {
                type: "video",
                name: "Shrink Wrapper- Bottle on Trey Application",
                path: "bZO1KmNxZgM"
            }
        ],
        models: [
            {
                name: "SWM-150",
                specs: {
                    "Machine Size (Length)": "1400 mm",
                    "Machine Size (Width)": "2200 mm",
                    "Machine Size (Height)": "2000 mm",
                    Speed: "1-18 packs/min",
                    "Cutter/tunnel size": "700 mm",
                    "Air Consumption": "3 to 5 CFM at 5 bar",
                    Electricals: "3 kw,3 ph, 440 V, 50 Hz",
                    "Max Current": "10 A",
                    "Machine weight": "Approximate 500 Kgs"
                }
            },
            {
                name: "SWT-160",
                specs: {
                    "Machine Size (Length)": "2700 mm",
                    "Machine Size (Width)": "1000 mm",
                    "Machine Size (Height)": "1700 mm",
                    Speed: "",
                    "Cutter/tunnel size": "w-600 mm, H-400 mm",
                    "Air Consumption": "",
                    Electricals: "16 kw,3 ph, 440 V, 50 Hz",
                    "Max Current": "35 A",
                    "Machine weight": "Approximate 500 Kgs"
                }
            }
        ],
        brochure: "/brochure/Shrink_Wrapper_Machine.pdf",
        industries: [
            "Food & Beverage",
            "Pharmaceutical",
            "FMCG",
            "Liquor"
        ]
    },
    {
        image: "/tetra_case_packer.png",
        name: "Aseptic Brick Case Packer",
        slug: "tetra-case-packer",
        features: [
            "AB (Aseptic Brick Case Packer) is a fully automatic Case Packing Machine which packs products in cases or trays.",
            "The flat blank sheet is folded & glued around the product to form a Case or Tray."
        ],
        description: "Tetra or Aseptic filling lines are high speed lines with particular machines may speed upto 6000 PPM. Our case packer (WCPT)- 410 plays an important role in this. A high speed case packer designed from 125ml to 1 Litres Tetra Bricks.",
        media: [
            {
                type: "image",
                name: "TETRA CASE PACKER",
                path: "/tetra_case_packer.png"
            },
            {
                type: "video",
                name: "Top Load Tetra Case Packer",
                path: "HpxmT6i_AZA"
            },
            {
                type: "video",
                name: "Aseptic Brick Case Packer",
                path: "knCtrIeLuPY"
            },
            {
                type: "video",
                name: "Case Packer- Wrap Around Tetra Application",
                path: "pZujvxc1lXg"
            }
        ],
        models: [
            {
                name: "WCPT - 410",
                specs: {
                    "Machine Size (Length)": "8300 mm",
                    "Machine Size (Width)": "2300 mm",
                    "Machine Size (Height)": "1950 mm",
                    Speed: "1-10 Cases/min",
                    "Product type": "Tetra Packets",
                    "Packet Size": "125 ml,150 ml,180 ml, 200 ml",
                    "Matrix Size": "3x8, 3x9, 3x10, 4x8, 4x10",
                    "Glue Type": "Hot Melt",
                    "Packing Type": "Carton/Tray",
                    Electricals: "9 kw, 3 ph, 415 V,50Hz",
                    "Machine Weight": "Approximate 2500 KG"
                }
            }
        ],
        brochure: "/brochure/Case_Packer_WCPT-410.pdf",
        industries: [
            "Food & Beverage",
            "Pharmaceutical",
            "FMCG",
            "Liquor"
        ]
    }
];
const __TURBOPACK__default__export__ = productsList;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Navbar.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ProductsList$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/ProductsList.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const Navbar = (props)=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHidden, setIsHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dropdownOpen, setDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Scroll handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 10);
                }
            }["Navbar.useEffect.handleScroll"];
            if (props?.transparentOnTop) {
                window.addEventListener("scroll", handleScroll);
            } else {
                setScrolled(true);
            }
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const navTextColor = scrolled ? "text-white" : "text-white";
    const navBg = scrolled ? "bg-gradient-to-r from-[#0072bc] to-[#001b48] shadow-md" : "bg-transparent";
    // Menu items with sub-links
    const menu = [
        {
            label: "Home",
            href: "/home",
            sub: []
        },
        {
            label: "Products",
            href: "/products",
            sub: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ProductsList$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].map((product)=>product.name)
        },
        {
            label: "Services",
            href: "/services",
            sub: []
        },
        {
            label: "About Us",
            href: "/about-us",
            sub: []
        },
        {
            label: "Contact Us",
            href: "/contact",
            sub: []
        },
        {
            label: "Media",
            href: "/media",
            sub: []
        }
    ];
    const renderLink = (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: `flex items-center space-x-1 ${navTextColor} hover:text-blue-600 transition duration-300`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this),
                        item.sub.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 71,
                            columnNumber: 37
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 66,
                    columnNumber: 11
                }, this),
                item.sub.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-0 mt-2 hidden w-52 rounded-md bg-white shadow-lg group-hover:block z-50",
                    children: item.sub.map((subItem, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `${item.href}/${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ProductsList$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].find((product)=>product.name === subItem).slug}`,
                            className: "block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100",
                            children: subItem
                        }, idx, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 77,
                            columnNumber: 17
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 75,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 88,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.js",
            lineNumber: 65,
            columnNumber: 9
        }, this);
    const renderMobileLink = (item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item.href,
                            className: "text-gray-700 hover:text-blue-600 py-2",
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 96,
                            columnNumber: 9
                        }, this),
                        item.sub.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setDropdownOpen(dropdownOpen === index ? null : index),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 95,
                    columnNumber: 7
                }, this),
                dropdownOpen === index && item.sub.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pl-4 mt-1 space-y-1",
                    children: item.sub.map((subItem, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `${item.href}#${subItem.replace(/\s+/g, "-").toLowerCase()}`,
                            className: "block text-sm text-gray-600 hover:text-blue-600",
                            children: subItem
                        }, idx, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            ]
        }, item.label, true, {
            fileName: "[project]/components/Navbar.js",
            lineNumber: 94,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: !isHidden && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: `fixed top-0 w-full transition-all duration-300 z-50 ${navBg}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full px-6 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo.png",
                                alt: "Logo",
                                className: "h-12 w-30"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 136,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex space-x-6",
                            children: menu.map((item)=>renderLink(item))
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 144,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `md:hidden ${navTextColor}`,
                            onClick: ()=>setIsOpen(!isOpen),
                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 153,
                                columnNumber: 21
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 153,
                                columnNumber: 39
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 149,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 134,
                    columnNumber: 7
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 px-6 pb-4 space-y-2 md:hidden bg-white shadow-md",
                    children: menu.map((item, index)=>renderMobileLink(item, index))
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.js",
            lineNumber: 131,
            columnNumber: 5
        }, this)
    }, void 0, false);
};
_s(Navbar, "+S3wE6jT33zwD0/Jiw9glsnjApo=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/pages/about-us.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// export default function AboutUs() {
//   const roadmap = [
//     { year: "2010", milestone: "Founded in Pune" },
//     { year: "2014", milestone: "First OEM Partnership" },
//     { year: "2018", milestone: "Launched PACK-LINE Series" },
//     { year: "2023", milestone: "Served 500+ Clients" },
//   ];
//   return (
//     <main className="bg-gray-100">
//       <Navbar />
//       <h2 className="text-3xl font-bold text-gray-800 mb-2 pt-34 text-center">
//         About Us
//       </h2>
//       <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
//       <section className=" mx-12 rounded-xl py-12 px-6 md:px-20 py-12 ">
//         {/* <h2 className="text-2xl font-bold mb-6 text-center w-full">About Company</h2> */}
//         <p className="mb-4 text-base md:text-lg">
//           MAS Systech Pvt. Ltd. is India's home-grown manufacturer of Packaging
//           Solutions and related equipment. Since our inception in 2011, we have
//           upheld our motto of providing{" "}
//           <span className="italic font-semibold">
//             “Global Technology at Local Cost”
//           </span>
//           .
//         </p>
//         <p className="text-base md:text-lg">
//           Located in Pune, India we specialize in the{" "}
//           <span className="font-semibold">End of Line</span> Packaging Solutions
//           with completely in-house designed and manufactured machinery under our{" "}
//           <span className="font-bold">PACKLINE</span> Brand. We take pride in
//           being the OEM suppliers to Blue Chip Companies like{" "}
//           <span className="font-bold">Tetra Pak</span> and{" "}
//           <span className="font-bold">Sidel</span> for the{" "}
//           <span className="font-bold">past 10 years</span>.
//         </p>
//       </section>
//       <section className="px-6 md:px-20 py-12 text-[#001b48] bg-white">
//         <h2 className="text-3xl font-bold text-gray-800 mb-2 py-4 text-center w-full">
//         Director’s Message
//       </h2>
//       <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
//         <div className="flex flex-row gap-8">
//           <div className="w-72 rounded-lg overflow-hidden shadow-lg group bg-white relative">
//             <div className="relative">
//               <img
//                 src="ceo.png"
//                 alt="Riddhi Shewani"
//                 className="w-full h-80 object-cover"
//               />
//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white text-center">
//                 <h3 className="text-lg font-semibold">Mallikarjun Kulloli </h3>
//                 <p className="text-sm">
//                   Managing Director - MAS SYSTECH PRIVATE LIMITED
//                 </p>
//               </div>
//             </div>
//             {/* Bottom Section: LinkedIn */}
//             <div className="bg-[#1a2f4d] text-white p-4 relative">
//               <a
//                 href="https://linkedin.com/in/riddhi" // Replace with actual LinkedIn URL
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="absolute bottom-4 right-4 text-white"
//               >
//                 {/* <FaLinkedin className="text-2xl hover:text-blue-400 transition-colors duration-200" /> */}
//               </a>
//             </div>
//           </div>
//           <div className="flex items-center ml-8">
//             <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-800 max-w-3xl">
//               <p>
//                 Since inception, we have been driven by a simple yet powerful
//                 mission: to deliver sustainable, efficient, and high-quality
//                 products.
//               </p>
//               <p>
//                 From precision engineering to seamless automation, our solutions
//                 are designed to meet the evolving needs of our customers.
//               </p>
//               <p>
//                 Our value comes from efficient, and innovative packaging
//                 machines that help our clients enhance productivity, reduce
//                 downtime, and ensure product integrity.
//               </p>
//               <p>
//                 Our strength lies in our people — experienced engineers,
//                 technicians, and designers and strong partnership with our
//                 suppliers.
//               </p>
//               <p>
//                 Thank you for your interest in MAS Systech Pvt Ltd. We look
//                 forward to helping you automate and package with precision.
//               </p>
//             </blockquote>
//           </div>
//         </div>
//       </section>
//       {/* <section className="px-6 md:px-20 py-12 bg-gray-50">
//         <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center w-full">
//           Road Map
//         </h2>
//         <div className="space-y-4">
//           {roadmap.map((item) => (
//             <div key={item.year} className="flex items-start gap-4">
//               <span className="text-blue-600 font-bold w-20">{item.year}</span>
//               <span className="text-gray-700">{item.milestone}</span>
//             </div>
//           ))}
//         </div>
//       </section> */}
//       <section className="px-6 md:px-20 py-12">
//         <h2 className="text-3xl font-bold text-gray-800 mb-2 py-4 text-center w-full">
//         Certificates
//       </h2>
//       <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
//           {/* Replace with actual images */}
//           <img
//             className="my-4 border-2 border-gray-800"
//             src="/certificates/ISO.jpg"
//             alt="ISO"
//           />
//           {/* <img src="/certificates/iso.png" alt="ISO" className="rounded shadow" />
//         <img src="/certificates/award1.png" alt="Award" className="rounded shadow" />
//         <img src="/certificates/award2.png" alt="Award" className="rounded shadow" />
//         <img src="/certificates/cert1.png" alt="Certificate" className="rounded shadow" /> */}
//         </div>
//       </section>
//       <Footer />
//     </main>
//   );
// }
__turbopack_context__.s({
    "default": (()=>AboutUs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ClientSlider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ClientSlider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.js [client] (ecmascript)");
;
;
;
;
function AboutUs() {
    const roadmap = [
        {
            year: "2010",
            milestone: "Founded in Pune"
        },
        {
            year: "2014",
            milestone: "First OEM Partnership"
        },
        {
            year: "2018",
            milestone: "Launched PACK-LINE Series"
        },
        {
            year: "2023",
            milestone: "Served 500+ Clients"
        }
    ];
    const clients = [
        "/clients/AgiGlaa.png",
        "/clients/amul.png",
        "/clients/Diageo.png",
        "/clients/Marico_Logo.svg.png",
        "/clients/pri.jpeg",
        "/clients/Pidilite.png",
        "/clients/Piramal.png",
        "/clients/Sula-Logo.jpg",
        "/clients/tetra.png",
        "/clients/Yak Logo.png"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/about-us.js",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-[#0072bc] to-[#001b48]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "pt-36 px-12 text-center text-3xl font-bold text-white mb-2",
                        children: "About Us"
                    }, void 0, false, {
                        fileName: "[project]/pages/about-us.js",
                        lineNumber: 172,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 h-1 bg-orange-500 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/pages/about-us.js",
                        lineNumber: 175,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mx-6 md:mx-20 p-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-4 text-base md:text-lg text-white leading-relaxed",
                                        children: [
                                            "MAS Systech Pvt. Ltd. is India's home-grown manufacturer of Packaging Solutions and related equipment. Since our inception in 2011, we have upheld our motto of providing",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "italic font-semibold",
                                                children: "“Global Technology at Local Cost”"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/about-us.js",
                                                lineNumber: 183,
                                                columnNumber: 13
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/about-us.js",
                                        lineNumber: 179,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base md:text-lg text-white leading-relaxed",
                                        children: [
                                            "Located in Pune, India we specialize in the",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: "End of Line"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/about-us.js",
                                                lineNumber: 190,
                                                columnNumber: 13
                                            }, this),
                                            " Packaging Solutions with completely in-house designed and manufactured machinery under our ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: "PACKLINE"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/about-us.js",
                                                lineNumber: 192,
                                                columnNumber: 33
                                            }, this),
                                            " ",
                                            "Brand. We take pride in being the OEM suppliers to Blue Chip Companies like ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: "Tetra Pak"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/about-us.js",
                                                lineNumber: 194,
                                                columnNumber: 28
                                            }, this),
                                            " and",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: "Sidel"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/about-us.js",
                                                lineNumber: 195,
                                                columnNumber: 13
                                            }, this),
                                            "for the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: "past 10 years"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/about-us.js",
                                                lineNumber: 196,
                                                columnNumber: 21
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/about-us.js",
                                        lineNumber: 188,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/about-us.js",
                                lineNumber: 178,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/company.png",
                                    alt: "About Us",
                                    className: "h-full px-10 animate-bounce[2s] ease-in-out"
                                }, void 0, false, {
                                    fileName: "[project]/pages/about-us.js",
                                    lineNumber: 200,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/about-us.js",
                                lineNumber: 199,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/about-us.js",
                        lineNumber: 177,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/about-us.js",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                class: "py-16 relative bg-cover bg-no-repeat bg-center ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-gray-800 text-center mb-2",
                        children: "Director’s Message"
                    }, void 0, false, {
                        fileName: "[project]/pages/about-us.js",
                        lineNumber: 212,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 h-1 bg-orange-500 mx-auto mb-8"
                    }, void 0, false, {
                        fileName: "[project]/pages/about-us.js",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        class: "container mx-auto px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            class: "grid md:grid-cols-2 gap-12 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    class: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        class: "relative max-w-sm w-full rounded-lg overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                class: "absolute inset-0 bg-cover bg-center z-0"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/about-us.js",
                                                lineNumber: 221,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                class: "relative w-full object-cover z-10 rounded-full shadow-lg border-gray-400",
                                                alt: "Mallikarjun Kulloli",
                                                src: "/ceo.png"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/about-us.js",
                                                lineNumber: 224,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                class: " z-20 flex flex-col  p-4 text-black text-center h-1/4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        class: "text-lg font-semibold",
                                                        children: "Mallikarjun Kulloli "
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/about-us.js",
                                                        lineNumber: 232,
                                                        columnNumber: 5
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        class: "text-sm",
                                                        children: "Managing Director - MAS SYSTECH PRIVATE LIMITED"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/about-us.js",
                                                        lineNumber: 233,
                                                        columnNumber: 5
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/about-us.js",
                                                lineNumber: 231,
                                                columnNumber: 3
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/about-us.js",
                                        lineNumber: 219,
                                        columnNumber: 7
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pages/about-us.js",
                                    lineNumber: 218,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    class: "text-gray-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-4",
                                        children: "Since inception, we have been driven by a simple yet powerful mission: to deliver sustainable, efficient, and high-quality products. From precision engineering to seamless automation, our solutions are designed to meet the evolving needs of our customers. Our value comes from efficient, and innovative packaging machines that help our clients enhance productivity, reduce downtime, and ensure product integrity. Our strength lies in our people — experienced engineers, technicians, and designers and strong partnership with our suppliers. Thank you for your interest in MAS Systech Pvt Ltd. We look forward to helping you automate and package with precision."
                                    }, void 0, false, {
                                        fileName: "[project]/pages/about-us.js",
                                        lineNumber: 241,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pages/about-us.js",
                                    lineNumber: 239,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/about-us.js",
                            lineNumber: 217,
                            columnNumber: 5
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/about-us.js",
                        lineNumber: 216,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/about-us.js",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 md:px-20 py-16 bg-gradient-to-r from-[#0072bc] to-[#001b48]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-white text-center mb-2",
                        children: "Certificates"
                    }, void 0, false, {
                        fileName: "[project]/pages/about-us.js",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 h-1 bg-orange-500 mx-auto mb-8"
                    }, void 0, false, {
                        fileName: "[project]/pages/about-us.js",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "border-2 border-gray-300 rounded-xl shadow h-96",
                            src: "/certificates/ISO.jpg",
                            alt: "ISO"
                        }, void 0, false, {
                            fileName: "[project]/pages/about-us.js",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/about-us.js",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/about-us.js",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 md:px-20 py-10 bg-white text-[#001b48]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-gray-800 mb-2 text-center",
                        children: "Our Clients"
                    }, void 0, false, {
                        fileName: "[project]/pages/about-us.js",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 h-1 bg-orange-500 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/pages/about-us.js",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ClientSlider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        clients: clients
                    }, void 0, false, {
                        fileName: "[project]/pages/about-us.js",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/about-us.js",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/about-us.js",
                lineNumber: 283,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/about-us.js",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_c = AboutUs;
var _c;
__turbopack_context__.k.register(_c, "AboutUs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/about-us.js [client] (ecmascript)\" } [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const PAGE_PATH = "/about-us";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/about-us.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}}),
"[project]/pages/about-us (hmr-entry)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, m: module } = __turbopack_context__;
{
__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/about-us.js [client] (ecmascript)\" } [client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__27a8ea0a._.js.map