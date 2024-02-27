import { useSSRContext, defineComponent, withCtx, createVNode, renderSlot, mergeProps, ref, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, unref } from "vue";
import { ssrRenderSlotInner, ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import moment from "moment";
import { _ as _export_sfc } from "../ssr.js";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<template>`);
  ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
  _push(`</template>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Transitions/BasicTransition.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const BasicTransition = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CardLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(BasicTransition, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8" }, [
                renderSlot(_ctx.$slots, "default")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/CardLayout.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppSocial",
  __ssrInlineRender: true,
  props: {
    href: {}
  },
  setup(__props) {
    const $props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: $props.href,
        target: "_blank",
        class: "flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</a>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/AppSocial.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: "button",
    class: "text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-tertiary hover:bg-primary text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/AppButton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AppButton = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "mt-5 flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-24 w-24" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/AppLogo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppLogo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "mt-5 flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-48 w-48" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/AppProject.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppProject = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    const posts = ref([
      {
        id: 12,
        avatar: "/images/avatar.jpg",
        name: "Schwarzenegger R. Belonio",
        role: "Admin",
        created_at: "2024-02-18 18:11",
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker incl`
      },
      {
        id: 123,
        avatar: "/images/avatar.jpg",
        name: "Schwarzenegger R. Belonio",
        role: "Admin",
        created_at: "2024-02-18 18:11",
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker incl`
      },
      {
        id: 124,
        avatar: "/images/avatar.jpg",
        name: "Schwarzenegger R. Belonio",
        role: "Admin",
        created_at: "2024-02-18 18:11",
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker incl`
      },
      {
        id: 126,
        avatar: "/images/avatar.jpg",
        name: "Schwarzenegger R. Belonio",
        role: "Admin",
        created_at: "2024-02-18 18:11",
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker incl`
      }
    ]);
    const projects = ref([
      {
        id: 1,
        image: "https://js.cmu.edu.ph/images/header-icon.png",
        title: "CMU Journal of Science",
        href: "https://js.cmu.edu.ph"
      },
      {
        id: 2,
        image: "https://js.cmu.edu.ph/images/header-icon.png",
        title: "CMU Journal of Science",
        href: "https://js.cmu.edu.ph"
      },
      {
        id: 3,
        image: "https://js.cmu.edu.ph/images/header-icon.png",
        title: "CMU Journal of Science",
        href: "https://js.cmu.edu.ph"
      },
      {
        id: 4,
        image: "https://js.cmu.edu.ph/images/header-icon.png",
        title: "CMU Journal of Science",
        href: "https://js.cmu.edu.ph"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="p-4"><div class="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4">`);
      _push(ssrRenderComponent(_sfc_main$5, { class: "lg:row-span-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex items-center gap-x-4"${_scopeId}><img src="/images/avatar.jpg" alt="" class="h-10 w-10 rounded-full ring-1 dark:ring-white/10 ring-primary/5"${_scopeId}><div class="text-sm leading-6"${_scopeId}><p class="font-semibold text-primary dark:text-white"${_scopeId}><a href="#" class="truncate text-ellipsis"${_scopeId}><span class="absolute inset-0"${_scopeId}></span> Schwarzenegger R. Belonio </a></p><p class="text-zinc-500 dark:text-zinc-400"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="h-4 inline-block flex-row justify-center mr-1"${_scopeId}><path fill="#7E7F85" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"${_scopeId}></path></svg> Web Developer | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-4 inline-block flex-row justify-center mr-1"${_scopeId}><path fill="#7E7F85" d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"${_scopeId}></path></svg> BGM Composer </p></div></div><p class="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white"${_scopeId}> Hey, welcome to my portfolio! </p><p class="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl"${_scopeId}> I&#39;m passionate about both technology and music. As a web developer, I bring websites and applications to life using Laravel, Vue, and Inertia. <br${_scopeId}><br${_scopeId}> When I need a break from the digital world, I hit the road on my bike for some fresh air and inspiration, which I often channel into composing my own BGM music. </p>`);
          } else {
            return [
              createVNode("div", { class: "relative flex items-center gap-x-4" }, [
                createVNode("img", {
                  src: "/images/avatar.jpg",
                  alt: "",
                  class: "h-10 w-10 rounded-full ring-1 dark:ring-white/10 ring-primary/5"
                }),
                createVNode("div", { class: "text-sm leading-6" }, [
                  createVNode("p", { class: "font-semibold text-primary dark:text-white" }, [
                    createVNode("a", {
                      href: "#",
                      class: "truncate text-ellipsis"
                    }, [
                      createVNode("span", { class: "absolute inset-0" }),
                      createTextVNode(" Schwarzenegger R. Belonio ")
                    ])
                  ]),
                  createVNode("p", { class: "text-zinc-500 dark:text-zinc-400" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 640 512",
                      class: "h-4 inline-block flex-row justify-center mr-1"
                    }, [
                      createVNode("path", {
                        fill: "#7E7F85",
                        d: "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                      })
                    ])),
                    createTextVNode(" Web Developer | "),
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 512 512",
                      class: "h-4 inline-block flex-row justify-center mr-1"
                    }, [
                      createVNode("path", {
                        fill: "#7E7F85",
                        d: "M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"
                      })
                    ])),
                    createTextVNode(" BGM Composer ")
                  ])
                ])
              ]),
              createVNode("p", { class: "text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white" }, " Hey, welcome to my portfolio! "),
              createVNode("p", { class: "mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl" }, [
                createTextVNode(" I'm passionate about both technology and music. As a web developer, I bring websites and applications to life using Laravel, Vue, and Inertia. "),
                createVNode("br"),
                createVNode("br"),
                createTextVNode(" When I need a break from the digital world, I hit the road on my bike for some fresh air and inspiration, which I often channel into composing my own BGM music. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { class: "flex flex-col" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full"${_scopeId}><p class="text-xl font-normal tracking-tight text-primary dark:text-white lg:text-8xl"${_scopeId}> Find me on </p></div><div class="grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justifycenter w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, { href: "mailto:migfus20@gmail.com" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId2}></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"${_scopeId2}></path><path d="M3 7l9 6l9 -6"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "icon icon-tabler icon-tabler-mail h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50",
                      viewBox: "0 0 24 24",
                      "stroke-width": "0.8",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", {
                        stroke: "none",
                        d: "M0 0h24v24H0z",
                        fill: "none"
                      }),
                      createVNode("path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" }),
                      createVNode("path", { d: "M3 7l9 6l9 -6" })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, { href: "https://github.com/migfus" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId2}></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "icon icon-tabler icon-tabler-brand-github h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50",
                      viewBox: "0 0 24 24",
                      "stroke-width": "0.8",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", {
                        stroke: "none",
                        d: "M0 0h24v24H0z",
                        fill: "none"
                      }),
                      createVNode("path", { d: "M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, { href: "https://freesound.org/people/Migfus20/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${_scopeId2}><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"${_scopeId2}><g id="Atoms-/-Logos-/-Isotype-/-Black" fill="#A0A0A0"${_scopeId2}><path d="M51.7346938,18.9526236 C51.6867034,18.9476055 51.6380063,18.9449197 51.5887437,18.9449197 L50.2727187,18.9449197 L47.1479722,18.9449197 C46.9254071,18.9464746 46.7077895,18.9660524 46.4954727,19.0011794 C46.4898184,19.0021689 46.4843055,19.0033704 46.478722,19.0042186 C45.8019798,19.1190704 45.1793063,19.3931598 44.6249785,19.7584238 C43.8977723,20.2488587 43.2707874,20.9104758 42.9041805,21.7736666 L42.613199,22.4717535 L41.5888623,24.9286632 L41.5441938,25.0358111 L40.8187545,19.7160877 L39.4190467,9.48318088 C39.3861815,9.24966066 39.3516906,9.04667335 39.3018626,8.84842147 C39.2473698,8.70148184 39.1864453,8.54676763 39.033074,8.33621777 C38.9507341,8.22744428 38.8380026,8.09711399 38.6468186,7.9690454 C38.4595218,7.84253172 38.1670561,7.72661975 37.8490049,7.72923484 C37.8164224,7.7290228 37.7842639,7.73043636 37.7523881,7.7325567 C37.4750475,7.75149842 37.2258367,7.85369885 37.0600261,7.9638859 C36.7317266,8.18751119 36.6227411,8.38957969 36.5310717,8.54167881 C36.3006613,8.99140313 36.2567702,9.30372935 36.1744303,9.76935623 L32.9390727,30.6913966 L31.6931604,13.4837695 C31.6672922,13.1413345 31.6366886,12.8704256 31.5708874,12.5920955 C31.5332867,12.4477709 31.4988665,12.305284 31.3797033,12.0820828 C31.315457,11.9706942 31.2300072,11.8296209 31.0411555,11.6642343 C30.8626228,11.5028056 30.5146749,11.3148021 30.1126582,11.3188307 C29.7168613,11.3173465 29.3995876,11.4872565 29.2271332,11.6274817 C28.9198958,11.8858806 28.8533171,12.0646253 28.7766314,12.2049212 C28.5971799,12.6083514 28.5525114,12.8993329 28.4741294,13.3471489 L27.140647,21.7547249 L25.0748695,2.11308774 C25.0380462,1.77482268 24.9995974,1.50758904 24.9268697,1.23547861 C24.8861591,1.0952534 24.8492652,0.957572592 24.7293953,0.743559511 C24.6658557,0.636977039 24.5820316,0.50226471 24.3986927,0.342320323 C24.2247541,0.18803018 23.8862063,-0.00258847259 23.4748602,2.66145962e-05 C23.0658464,-0.00188169227 22.7326702,0.183930854 22.5587315,0.33419235 C22.2492324,0.612593118 22.1928314,0.795083796 22.1208104,0.938630879 C21.9585337,1.34842211 21.9255977,1.6389795 21.8637544,2.09124822 L18.3200993,31.7055557 L16.3676186,16.4722487 C16.3191335,16.1144059 16.2664784,15.8211627 16.1514145,15.503677 C16.0886525,15.3430258 16.0196707,15.1716316 15.8409966,14.9469461 C15.6804161,14.7397181 15.2830642,14.3894378 14.6829371,14.38654 C14.0991365,14.3935371 13.733095,14.7063581 13.5670723,14.8935842 C13.3045034,15.198984 13.2339667,15.4137039 13.1470328,15.6383186 C13.0687215,15.8612372 13.0107655,16.0899513 12.9574743,16.3501878 L11.2686934,24.6765547 L10.0588975,21.7732425 C9.69229056,20.9100517 9.06530574,20.2484346 8.33809947,19.7580705 C7.60545099,19.2753395 6.7537807,18.9511394 5.81503508,18.9444956 L1.37433433,18.9444956 C0.615040234,18.9444956 0,19.5596065 0,20.3191127 C0,21.0773466 0.615040234,21.6925989 1.37433433,21.6925989 L5.81503508,21.6925989 C6.05866226,21.6865912 6.46760535,21.8087229 6.81336228,22.0449289 C7.16442007,22.273643 7.43462218,22.6030733 7.52254566,22.8303031 L10.4570269,29.8704006 C10.6882147,30.4255765 11.260212,30.7675875 11.8589256,30.7091368 C12.4574272,30.650686 12.9518907,30.2042129 13.0710539,29.6149701 L14.425669,22.9347653 L16.7312571,40.9227485 C16.7757843,41.2624978 16.8221491,41.5342548 16.9075988,41.8140691 C16.9553772,41.9583937 17.0016006,42.1034957 17.1363129,42.3182155 C17.2076271,42.424798 17.3032544,42.5573193 17.4906219,42.7039056 C17.6708509,42.8452616 17.9896795,43.0022375 18.3611632,42.9999758 C18.7325763,43.0022375 19.0545854,42.8452616 19.2355918,42.7009371 C19.5568235,42.437308 19.6305407,42.241954 19.7080745,42.0938128 C19.8907772,41.6645144 19.9227237,41.3669599 19.9862632,40.9093903 L23.3961249,12.4174501 L25.2738281,30.2723465 C25.3115702,30.617326 25.3530582,30.8949493 25.4385786,31.1858601 C25.4855795,31.3346373 25.5326511,31.4878673 25.6750673,31.7114926 C25.7494913,31.8225278 25.8514797,31.9602086 26.044148,32.1053106 C26.2299605,32.2474441 26.5473049,32.3910619 26.8991402,32.3880934 C27.2461693,32.3895777 27.5480352,32.2548653 27.7280521,32.1238282 C28.048577,31.8847245 28.1395396,31.6921975 28.2242119,31.5456819 C28.431864,31.1170197 28.4764618,30.8150125 28.5586603,30.3589978 L29.6583398,23.4255535 L30.9188825,40.8361679 C30.9448214,41.176624 30.9745768,41.44619 31.0395299,41.7238133 C31.0763532,41.8658761 31.110208,42.0072322 31.2268267,42.2285958 C31.2902956,42.3403378 31.373413,42.480351 31.5607098,42.6476459 C31.7359206,42.8082263 32.0803346,42.9999758 32.4848957,42.9999758 L32.4971937,42.9999758 C32.9005532,43.0006826 33.2203713,42.8252597 33.3919776,42.6824194 C33.607899,42.4971723 33.7026075,42.3544734 33.7661471,42.2372892 C33.7924393,42.1887334 33.8135013,42.1445596 33.8355529,42.1034957 C34.010269,41.703034 34.0533826,41.4143849 34.1302096,40.9664275 L35.6488685,31.1472699 L37.7504798,17.5583581 L38.3796556,22.157943 L39.2891405,28.8068375 C39.3415129,29.1754941 39.4026494,29.4849226 39.5421679,29.8238944 C39.61744,29.9942285 39.7074131,30.1815253 39.9120967,30.4021114 C40.1015845,30.6130853 40.5084072,30.8884469 41.0184199,30.8854785 C41.508148,30.8839942 41.8678285,30.6508981 42.0591539,30.472436 C42.1241777,30.4102394 42.1799427,30.3507285 42.2283572,30.2931965 C42.2599502,30.2604019 42.2899884,30.2261231 42.3183303,30.190148 C42.3938851,30.0942379 42.457566,29.987302 42.5060511,29.8708246 L42.5555258,29.7520855 C42.5584942,29.7456538 42.5615334,29.7392928 42.5645019,29.7328611 C42.5849985,29.6860016 42.6040816,29.6388593 42.6225992,29.591293 L43.162226,28.2965421 L44.9026019,24.1213081 L44.9135569,24.0949452 L45.4405324,22.8307272 C45.5284558,22.6034973 45.7986579,22.274067 46.149645,22.0453529 C46.4904545,21.8126102 46.8923298,21.6907612 47.1370172,21.6930229 C47.1406217,21.6930229 47.144509,21.6928816 47.1479722,21.6929523 L47.1544746,21.6929523 L47.3385909,21.6929523 L47.5903461,21.6929523 L50.8683932,21.6929523 L51.5887437,21.6929523 C51.9213545,21.6929523 52.2262595,21.5749199 52.4638791,21.3785057 C52.7687841,21.1265385 52.963078,20.7456546 52.963078,20.3195367 C52.963078,19.6093639 52.4252889,19.0254927 51.7346938,18.9526236" id="Fill-1"${_scopeId2}></path></g></g></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50",
                      viewBox: "0 0 50 50",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }, [
                      createVNode("g", {
                        id: "Symbols",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd"
                      }, [
                        createVNode("g", {
                          id: "Atoms-/-Logos-/-Isotype-/-Black",
                          fill: "#A0A0A0"
                        }, [
                          createVNode("path", {
                            d: "M51.7346938,18.9526236 C51.6867034,18.9476055 51.6380063,18.9449197 51.5887437,18.9449197 L50.2727187,18.9449197 L47.1479722,18.9449197 C46.9254071,18.9464746 46.7077895,18.9660524 46.4954727,19.0011794 C46.4898184,19.0021689 46.4843055,19.0033704 46.478722,19.0042186 C45.8019798,19.1190704 45.1793063,19.3931598 44.6249785,19.7584238 C43.8977723,20.2488587 43.2707874,20.9104758 42.9041805,21.7736666 L42.613199,22.4717535 L41.5888623,24.9286632 L41.5441938,25.0358111 L40.8187545,19.7160877 L39.4190467,9.48318088 C39.3861815,9.24966066 39.3516906,9.04667335 39.3018626,8.84842147 C39.2473698,8.70148184 39.1864453,8.54676763 39.033074,8.33621777 C38.9507341,8.22744428 38.8380026,8.09711399 38.6468186,7.9690454 C38.4595218,7.84253172 38.1670561,7.72661975 37.8490049,7.72923484 C37.8164224,7.7290228 37.7842639,7.73043636 37.7523881,7.7325567 C37.4750475,7.75149842 37.2258367,7.85369885 37.0600261,7.9638859 C36.7317266,8.18751119 36.6227411,8.38957969 36.5310717,8.54167881 C36.3006613,8.99140313 36.2567702,9.30372935 36.1744303,9.76935623 L32.9390727,30.6913966 L31.6931604,13.4837695 C31.6672922,13.1413345 31.6366886,12.8704256 31.5708874,12.5920955 C31.5332867,12.4477709 31.4988665,12.305284 31.3797033,12.0820828 C31.315457,11.9706942 31.2300072,11.8296209 31.0411555,11.6642343 C30.8626228,11.5028056 30.5146749,11.3148021 30.1126582,11.3188307 C29.7168613,11.3173465 29.3995876,11.4872565 29.2271332,11.6274817 C28.9198958,11.8858806 28.8533171,12.0646253 28.7766314,12.2049212 C28.5971799,12.6083514 28.5525114,12.8993329 28.4741294,13.3471489 L27.140647,21.7547249 L25.0748695,2.11308774 C25.0380462,1.77482268 24.9995974,1.50758904 24.9268697,1.23547861 C24.8861591,1.0952534 24.8492652,0.957572592 24.7293953,0.743559511 C24.6658557,0.636977039 24.5820316,0.50226471 24.3986927,0.342320323 C24.2247541,0.18803018 23.8862063,-0.00258847259 23.4748602,2.66145962e-05 C23.0658464,-0.00188169227 22.7326702,0.183930854 22.5587315,0.33419235 C22.2492324,0.612593118 22.1928314,0.795083796 22.1208104,0.938630879 C21.9585337,1.34842211 21.9255977,1.6389795 21.8637544,2.09124822 L18.3200993,31.7055557 L16.3676186,16.4722487 C16.3191335,16.1144059 16.2664784,15.8211627 16.1514145,15.503677 C16.0886525,15.3430258 16.0196707,15.1716316 15.8409966,14.9469461 C15.6804161,14.7397181 15.2830642,14.3894378 14.6829371,14.38654 C14.0991365,14.3935371 13.733095,14.7063581 13.5670723,14.8935842 C13.3045034,15.198984 13.2339667,15.4137039 13.1470328,15.6383186 C13.0687215,15.8612372 13.0107655,16.0899513 12.9574743,16.3501878 L11.2686934,24.6765547 L10.0588975,21.7732425 C9.69229056,20.9100517 9.06530574,20.2484346 8.33809947,19.7580705 C7.60545099,19.2753395 6.7537807,18.9511394 5.81503508,18.9444956 L1.37433433,18.9444956 C0.615040234,18.9444956 0,19.5596065 0,20.3191127 C0,21.0773466 0.615040234,21.6925989 1.37433433,21.6925989 L5.81503508,21.6925989 C6.05866226,21.6865912 6.46760535,21.8087229 6.81336228,22.0449289 C7.16442007,22.273643 7.43462218,22.6030733 7.52254566,22.8303031 L10.4570269,29.8704006 C10.6882147,30.4255765 11.260212,30.7675875 11.8589256,30.7091368 C12.4574272,30.650686 12.9518907,30.2042129 13.0710539,29.6149701 L14.425669,22.9347653 L16.7312571,40.9227485 C16.7757843,41.2624978 16.8221491,41.5342548 16.9075988,41.8140691 C16.9553772,41.9583937 17.0016006,42.1034957 17.1363129,42.3182155 C17.2076271,42.424798 17.3032544,42.5573193 17.4906219,42.7039056 C17.6708509,42.8452616 17.9896795,43.0022375 18.3611632,42.9999758 C18.7325763,43.0022375 19.0545854,42.8452616 19.2355918,42.7009371 C19.5568235,42.437308 19.6305407,42.241954 19.7080745,42.0938128 C19.8907772,41.6645144 19.9227237,41.3669599 19.9862632,40.9093903 L23.3961249,12.4174501 L25.2738281,30.2723465 C25.3115702,30.617326 25.3530582,30.8949493 25.4385786,31.1858601 C25.4855795,31.3346373 25.5326511,31.4878673 25.6750673,31.7114926 C25.7494913,31.8225278 25.8514797,31.9602086 26.044148,32.1053106 C26.2299605,32.2474441 26.5473049,32.3910619 26.8991402,32.3880934 C27.2461693,32.3895777 27.5480352,32.2548653 27.7280521,32.1238282 C28.048577,31.8847245 28.1395396,31.6921975 28.2242119,31.5456819 C28.431864,31.1170197 28.4764618,30.8150125 28.5586603,30.3589978 L29.6583398,23.4255535 L30.9188825,40.8361679 C30.9448214,41.176624 30.9745768,41.44619 31.0395299,41.7238133 C31.0763532,41.8658761 31.110208,42.0072322 31.2268267,42.2285958 C31.2902956,42.3403378 31.373413,42.480351 31.5607098,42.6476459 C31.7359206,42.8082263 32.0803346,42.9999758 32.4848957,42.9999758 L32.4971937,42.9999758 C32.9005532,43.0006826 33.2203713,42.8252597 33.3919776,42.6824194 C33.607899,42.4971723 33.7026075,42.3544734 33.7661471,42.2372892 C33.7924393,42.1887334 33.8135013,42.1445596 33.8355529,42.1034957 C34.010269,41.703034 34.0533826,41.4143849 34.1302096,40.9664275 L35.6488685,31.1472699 L37.7504798,17.5583581 L38.3796556,22.157943 L39.2891405,28.8068375 C39.3415129,29.1754941 39.4026494,29.4849226 39.5421679,29.8238944 C39.61744,29.9942285 39.7074131,30.1815253 39.9120967,30.4021114 C40.1015845,30.6130853 40.5084072,30.8884469 41.0184199,30.8854785 C41.508148,30.8839942 41.8678285,30.6508981 42.0591539,30.472436 C42.1241777,30.4102394 42.1799427,30.3507285 42.2283572,30.2931965 C42.2599502,30.2604019 42.2899884,30.2261231 42.3183303,30.190148 C42.3938851,30.0942379 42.457566,29.987302 42.5060511,29.8708246 L42.5555258,29.7520855 C42.5584942,29.7456538 42.5615334,29.7392928 42.5645019,29.7328611 C42.5849985,29.6860016 42.6040816,29.6388593 42.6225992,29.591293 L43.162226,28.2965421 L44.9026019,24.1213081 L44.9135569,24.0949452 L45.4405324,22.8307272 C45.5284558,22.6034973 45.7986579,22.274067 46.149645,22.0453529 C46.4904545,21.8126102 46.8923298,21.6907612 47.1370172,21.6930229 C47.1406217,21.6930229 47.144509,21.6928816 47.1479722,21.6929523 L47.1544746,21.6929523 L47.3385909,21.6929523 L47.5903461,21.6929523 L50.8683932,21.6929523 L51.5887437,21.6929523 C51.9213545,21.6929523 52.2262595,21.5749199 52.4638791,21.3785057 C52.7687841,21.1265385 52.963078,20.7456546 52.963078,20.3195367 C52.963078,19.6093639 52.4252889,19.0254927 51.7346938,18.9526236",
                            id: "Fill-1"
                          })
                        ])
                      ])
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, { href: "https://www.facebook.com/migfus20" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-facebook" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId2}></path><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-facebook",
                      viewBox: "0 0 24 24",
                      "stroke-width": "0.8",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", {
                        stroke: "none",
                        d: "M0 0h24v24H0z",
                        fill: "none"
                      }),
                      createVNode("path", { d: "M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, { href: "https://www.linkedin.com/in/schwarzenegger-belonio-943446154/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-linkedin" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId2}></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"${_scopeId2}></path><path d="M8 11l0 5"${_scopeId2}></path><path d="M8 8l0 .01"${_scopeId2}></path><path d="M12 16l0 -5"${_scopeId2}></path><path d="M16 16v-3a2 2 0 0 0 -4 0"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-linkedin",
                      viewBox: "0 0 24 24",
                      "stroke-width": "0.8",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", {
                        stroke: "none",
                        d: "M0 0h24v24H0z",
                        fill: "none"
                      }),
                      createVNode("path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" }),
                      createVNode("path", { d: "M8 11l0 5" }),
                      createVNode("path", { d: "M8 8l0 .01" }),
                      createVNode("path", { d: "M12 16l0 -5" }),
                      createVNode("path", { d: "M16 16v-3a2 2 0 0 0 -4 0" })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, { href: "https://www.youtube.com/channel/UCGlgOXm1I0bz_QF1nGpkRyQ" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-linkedin" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><path fill-rule="evenodd" clip-rule="evenodd" d="M18.168 19.0028C20.4724 19.0867 22.41 17.29 22.5 14.9858V9.01982C22.41 6.71569 20.4724 4.91893 18.168 5.00282H6.832C4.52763 4.91893 2.58998 6.71569 2.5 9.01982V14.9858C2.58998 17.29 4.52763 19.0867 6.832 19.0028H18.168Z" stroke="#A0A0A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.008 9.17784L15.169 11.3258C15.3738 11.4454 15.4997 11.6647 15.4997 11.9018C15.4997 12.139 15.3738 12.3583 15.169 12.4778L12.008 14.8278C11.408 15.2348 10.5 14.8878 10.5 14.2518V9.75184C10.5 9.11884 11.409 8.77084 12.008 9.17784Z" stroke="#A0A0A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-linkedin",
                      viewBox: "0 0 24 24",
                      "stroke-width": "0.8",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M18.168 19.0028C20.4724 19.0867 22.41 17.29 22.5 14.9858V9.01982C22.41 6.71569 20.4724 4.91893 18.168 5.00282H6.832C4.52763 4.91893 2.58998 6.71569 2.5 9.01982V14.9858C2.58998 17.29 4.52763 19.0867 6.832 19.0028H18.168Z",
                        stroke: "#A0A0A0",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M12.008 9.17784L15.169 11.3258C15.3738 11.4454 15.4997 11.6647 15.4997 11.9018C15.4997 12.139 15.3738 12.3583 15.169 12.4778L12.008 14.8278C11.408 15.2348 10.5 14.8878 10.5 14.2518V9.75184C10.5 9.11884 11.409 8.77084 12.008 9.17784Z",
                        stroke: "#A0A0A0",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, { href: "https://discord.com/users/563556266107076630" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-linkedin" viewBox="0 0 45 45" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><path class="a" d="M17.59,34.1733c-.89,1.3069-1.8944,2.6152-2.91,3.8267C7.3,37.79,4.5,33,4.5,33A44.83,44.83,0,0,1,9.31,13.48,16.47,16.47,0,0,1,18.69,10l1,2.31A32.6875,32.6875,0,0,1,24,12a32.9643,32.9643,0,0,1,4.33.3l1-2.31a16.47,16.47,0,0,1,9.38,3.51A44.8292,44.8292,0,0,1,43.5,33s-2.8,4.79-10.18,5a47.4193,47.4193,0,0,1-2.86-3.81m6.46-2.9c-3.84,1.9454-7.5555,3.89-12.92,3.89s-9.08-1.9446-12.92-3.89"${_scopeId2}></path><circle class="a" cx="17.847" cy="26.23" r="3.35"${_scopeId2}></circle><circle class="a" cx="30.153" cy="26.23" r="3.35"${_scopeId2}></circle></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-linkedin",
                      viewBox: "0 0 45 45",
                      "stroke-width": "1",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", {
                        class: "a",
                        d: "M17.59,34.1733c-.89,1.3069-1.8944,2.6152-2.91,3.8267C7.3,37.79,4.5,33,4.5,33A44.83,44.83,0,0,1,9.31,13.48,16.47,16.47,0,0,1,18.69,10l1,2.31A32.6875,32.6875,0,0,1,24,12a32.9643,32.9643,0,0,1,4.33.3l1-2.31a16.47,16.47,0,0,1,9.38,3.51A44.8292,44.8292,0,0,1,43.5,33s-2.8,4.79-10.18,5a47.4193,47.4193,0,0,1-2.86-3.81m6.46-2.9c-3.84,1.9454-7.5555,3.89-12.92,3.89s-9.08-1.9446-12.92-3.89"
                      }),
                      createVNode("circle", {
                        class: "a",
                        cx: "17.847",
                        cy: "26.23",
                        r: "3.35"
                      }),
                      createVNode("circle", {
                        class: "a",
                        cx: "30.153",
                        cy: "26.23",
                        r: "3.35"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, { href: "https://www.instagram.com/migfus20/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-linkedin" viewBox="2 2 20 20" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z" stroke="#A0A0A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z" stroke="#A0A0A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><rect x="15.5" y="9" width="2" height="2" rx="1" transform="rotate(-90 15.5 9)" fill="#A0A0A0"${_scopeId2}></rect><rect x="16" y="8.5" width="1" height="1" rx="0.5" transform="rotate(-90 16 8.5)" stroke="#A0A0A0" stroke-linecap="round"${_scopeId2}></rect></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-linkedin",
                      viewBox: "2 2 20 20",
                      "stroke-width": "1",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z",
                        stroke: "#A0A0A0",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z",
                        stroke: "#A0A0A0",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("rect", {
                        x: "15.5",
                        y: "9",
                        width: "2",
                        height: "2",
                        rx: "1",
                        transform: "rotate(-90 15.5 9)",
                        fill: "#A0A0A0"
                      }),
                      createVNode("rect", {
                        x: "16",
                        y: "8.5",
                        width: "1",
                        height: "1",
                        rx: "0.5",
                        transform: "rotate(-90 16 8.5)",
                        stroke: "#A0A0A0",
                        "stroke-linecap": "round"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full" }, [
                createVNode("p", { class: "text-xl font-normal tracking-tight text-primary dark:text-white lg:text-8xl" }, " Find me on ")
              ]),
              createVNode("div", { class: "grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justifycenter w-full" }, [
                createVNode(_sfc_main$4, { href: "mailto:migfus20@gmail.com" }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "icon icon-tabler icon-tabler-mail h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50",
                      viewBox: "0 0 24 24",
                      "stroke-width": "0.8",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", {
                        stroke: "none",
                        d: "M0 0h24v24H0z",
                        fill: "none"
                      }),
                      createVNode("path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" }),
                      createVNode("path", { d: "M3 7l9 6l9 -6" })
                    ]))
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$4, { href: "https://github.com/migfus" }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "icon icon-tabler icon-tabler-brand-github h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50",
                      viewBox: "0 0 24 24",
                      "stroke-width": "0.8",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", {
                        stroke: "none",
                        d: "M0 0h24v24H0z",
                        fill: "none"
                      }),
                      createVNode("path", { d: "M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" })
                    ]))
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$4, { href: "https://freesound.org/people/Migfus20/" }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      class: "icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50",
                      viewBox: "0 0 50 50",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }, [
                      createVNode("g", {
                        id: "Symbols",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd"
                      }, [
                        createVNode("g", {
                          id: "Atoms-/-Logos-/-Isotype-/-Black",
                          fill: "#A0A0A0"
                        }, [
                          createVNode("path", {
                            d: "M51.7346938,18.9526236 C51.6867034,18.9476055 51.6380063,18.9449197 51.5887437,18.9449197 L50.2727187,18.9449197 L47.1479722,18.9449197 C46.9254071,18.9464746 46.7077895,18.9660524 46.4954727,19.0011794 C46.4898184,19.0021689 46.4843055,19.0033704 46.478722,19.0042186 C45.8019798,19.1190704 45.1793063,19.3931598 44.6249785,19.7584238 C43.8977723,20.2488587 43.2707874,20.9104758 42.9041805,21.7736666 L42.613199,22.4717535 L41.5888623,24.9286632 L41.5441938,25.0358111 L40.8187545,19.7160877 L39.4190467,9.48318088 C39.3861815,9.24966066 39.3516906,9.04667335 39.3018626,8.84842147 C39.2473698,8.70148184 39.1864453,8.54676763 39.033074,8.33621777 C38.9507341,8.22744428 38.8380026,8.09711399 38.6468186,7.9690454 C38.4595218,7.84253172 38.1670561,7.72661975 37.8490049,7.72923484 C37.8164224,7.7290228 37.7842639,7.73043636 37.7523881,7.7325567 C37.4750475,7.75149842 37.2258367,7.85369885 37.0600261,7.9638859 C36.7317266,8.18751119 36.6227411,8.38957969 36.5310717,8.54167881 C36.3006613,8.99140313 36.2567702,9.30372935 36.1744303,9.76935623 L32.9390727,30.6913966 L31.6931604,13.4837695 C31.6672922,13.1413345 31.6366886,12.8704256 31.5708874,12.5920955 C31.5332867,12.4477709 31.4988665,12.305284 31.3797033,12.0820828 C31.315457,11.9706942 31.2300072,11.8296209 31.0411555,11.6642343 C30.8626228,11.5028056 30.5146749,11.3148021 30.1126582,11.3188307 C29.7168613,11.3173465 29.3995876,11.4872565 29.2271332,11.6274817 C28.9198958,11.8858806 28.8533171,12.0646253 28.7766314,12.2049212 C28.5971799,12.6083514 28.5525114,12.8993329 28.4741294,13.3471489 L27.140647,21.7547249 L25.0748695,2.11308774 C25.0380462,1.77482268 24.9995974,1.50758904 24.9268697,1.23547861 C24.8861591,1.0952534 24.8492652,0.957572592 24.7293953,0.743559511 C24.6658557,0.636977039 24.5820316,0.50226471 24.3986927,0.342320323 C24.2247541,0.18803018 23.8862063,-0.00258847259 23.4748602,2.66145962e-05 C23.0658464,-0.00188169227 22.7326702,0.183930854 22.5587315,0.33419235 C22.2492324,0.612593118 22.1928314,0.795083796 22.1208104,0.938630879 C21.9585337,1.34842211 21.9255977,1.6389795 21.8637544,2.09124822 L18.3200993,31.7055557 L16.3676186,16.4722487 C16.3191335,16.1144059 16.2664784,15.8211627 16.1514145,15.503677 C16.0886525,15.3430258 16.0196707,15.1716316 15.8409966,14.9469461 C15.6804161,14.7397181 15.2830642,14.3894378 14.6829371,14.38654 C14.0991365,14.3935371 13.733095,14.7063581 13.5670723,14.8935842 C13.3045034,15.198984 13.2339667,15.4137039 13.1470328,15.6383186 C13.0687215,15.8612372 13.0107655,16.0899513 12.9574743,16.3501878 L11.2686934,24.6765547 L10.0588975,21.7732425 C9.69229056,20.9100517 9.06530574,20.2484346 8.33809947,19.7580705 C7.60545099,19.2753395 6.7537807,18.9511394 5.81503508,18.9444956 L1.37433433,18.9444956 C0.615040234,18.9444956 0,19.5596065 0,20.3191127 C0,21.0773466 0.615040234,21.6925989 1.37433433,21.6925989 L5.81503508,21.6925989 C6.05866226,21.6865912 6.46760535,21.8087229 6.81336228,22.0449289 C7.16442007,22.273643 7.43462218,22.6030733 7.52254566,22.8303031 L10.4570269,29.8704006 C10.6882147,30.4255765 11.260212,30.7675875 11.8589256,30.7091368 C12.4574272,30.650686 12.9518907,30.2042129 13.0710539,29.6149701 L14.425669,22.9347653 L16.7312571,40.9227485 C16.7757843,41.2624978 16.8221491,41.5342548 16.9075988,41.8140691 C16.9553772,41.9583937 17.0016006,42.1034957 17.1363129,42.3182155 C17.2076271,42.424798 17.3032544,42.5573193 17.4906219,42.7039056 C17.6708509,42.8452616 17.9896795,43.0022375 18.3611632,42.9999758 C18.7325763,43.0022375 19.0545854,42.8452616 19.2355918,42.7009371 C19.5568235,42.437308 19.6305407,42.241954 19.7080745,42.0938128 C19.8907772,41.6645144 19.9227237,41.3669599 19.9862632,40.9093903 L23.3961249,12.4174501 L25.2738281,30.2723465 C25.3115702,30.617326 25.3530582,30.8949493 25.4385786,31.1858601 C25.4855795,31.3346373 25.5326511,31.4878673 25.6750673,31.7114926 C25.7494913,31.8225278 25.8514797,31.9602086 26.044148,32.1053106 C26.2299605,32.2474441 26.5473049,32.3910619 26.8991402,32.3880934 C27.2461693,32.3895777 27.5480352,32.2548653 27.7280521,32.1238282 C28.048577,31.8847245 28.1395396,31.6921975 28.2242119,31.5456819 C28.431864,31.1170197 28.4764618,30.8150125 28.5586603,30.3589978 L29.6583398,23.4255535 L30.9188825,40.8361679 C30.9448214,41.176624 30.9745768,41.44619 31.0395299,41.7238133 C31.0763532,41.8658761 31.110208,42.0072322 31.2268267,42.2285958 C31.2902956,42.3403378 31.373413,42.480351 31.5607098,42.6476459 C31.7359206,42.8082263 32.0803346,42.9999758 32.4848957,42.9999758 L32.4971937,42.9999758 C32.9005532,43.0006826 33.2203713,42.8252597 33.3919776,42.6824194 C33.607899,42.4971723 33.7026075,42.3544734 33.7661471,42.2372892 C33.7924393,42.1887334 33.8135013,42.1445596 33.8355529,42.1034957 C34.010269,41.703034 34.0533826,41.4143849 34.1302096,40.9664275 L35.6488685,31.1472699 L37.7504798,17.5583581 L38.3796556,22.157943 L39.2891405,28.8068375 C39.3415129,29.1754941 39.4026494,29.4849226 39.5421679,29.8238944 C39.61744,29.9942285 39.7074131,30.1815253 39.9120967,30.4021114 C40.1015845,30.6130853 40.5084072,30.8884469 41.0184199,30.8854785 C41.508148,30.8839942 41.8678285,30.6508981 42.0591539,30.472436 C42.1241777,30.4102394 42.1799427,30.3507285 42.2283572,30.2931965 C42.2599502,30.2604019 42.2899884,30.2261231 42.3183303,30.190148 C42.3938851,30.0942379 42.457566,29.987302 42.5060511,29.8708246 L42.5555258,29.7520855 C42.5584942,29.7456538 42.5615334,29.7392928 42.5645019,29.7328611 C42.5849985,29.6860016 42.6040816,29.6388593 42.6225992,29.591293 L43.162226,28.2965421 L44.9026019,24.1213081 L44.9135569,24.0949452 L45.4405324,22.8307272 C45.5284558,22.6034973 45.7986579,22.274067 46.149645,22.0453529 C46.4904545,21.8126102 46.8923298,21.6907612 47.1370172,21.6930229 C47.1406217,21.6930229 47.144509,21.6928816 47.1479722,21.6929523 L47.1544746,21.6929523 L47.3385909,21.6929523 L47.5903461,21.6929523 L50.8683932,21.6929523 L51.5887437,21.6929523 C51.9213545,21.6929523 52.2262595,21.5749199 52.4638791,21.3785057 C52.7687841,21.1265385 52.963078,20.7456546 52.963078,20.3195367 C52.963078,19.6093639 52.4252889,19.0254927 51.7346938,18.9526236",
                            id: "Fill-1"
                          })
                        ])
                      ])
                    ]))
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$4, { href: "https://www.facebook.com/migfus20" }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-facebook",
                      viewBox: "0 0 24 24",
                      "stroke-width": "0.8",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", {
                        stroke: "none",
                        d: "M0 0h24v24H0z",
                        fill: "none"
                      }),
                      createVNode("path", { d: "M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" })
                    ]))
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$4, { href: "https://www.linkedin.com/in/schwarzenegger-belonio-943446154/" }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-linkedin",
                      viewBox: "0 0 24 24",
                      "stroke-width": "0.8",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", {
                        stroke: "none",
                        d: "M0 0h24v24H0z",
                        fill: "none"
                      }),
                      createVNode("path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" }),
                      createVNode("path", { d: "M8 11l0 5" }),
                      createVNode("path", { d: "M8 8l0 .01" }),
                      createVNode("path", { d: "M12 16l0 -5" }),
                      createVNode("path", { d: "M16 16v-3a2 2 0 0 0 -4 0" })
                    ]))
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$4, { href: "https://www.youtube.com/channel/UCGlgOXm1I0bz_QF1nGpkRyQ" }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-linkedin",
                      viewBox: "0 0 24 24",
                      "stroke-width": "0.8",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M18.168 19.0028C20.4724 19.0867 22.41 17.29 22.5 14.9858V9.01982C22.41 6.71569 20.4724 4.91893 18.168 5.00282H6.832C4.52763 4.91893 2.58998 6.71569 2.5 9.01982V14.9858C2.58998 17.29 4.52763 19.0867 6.832 19.0028H18.168Z",
                        stroke: "#A0A0A0",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M12.008 9.17784L15.169 11.3258C15.3738 11.4454 15.4997 11.6647 15.4997 11.9018C15.4997 12.139 15.3738 12.3583 15.169 12.4778L12.008 14.8278C11.408 15.2348 10.5 14.8878 10.5 14.2518V9.75184C10.5 9.11884 11.409 8.77084 12.008 9.17784Z",
                        stroke: "#A0A0A0",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$4, { href: "https://discord.com/users/563556266107076630" }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-linkedin",
                      viewBox: "0 0 45 45",
                      "stroke-width": "1",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", {
                        class: "a",
                        d: "M17.59,34.1733c-.89,1.3069-1.8944,2.6152-2.91,3.8267C7.3,37.79,4.5,33,4.5,33A44.83,44.83,0,0,1,9.31,13.48,16.47,16.47,0,0,1,18.69,10l1,2.31A32.6875,32.6875,0,0,1,24,12a32.9643,32.9643,0,0,1,4.33.3l1-2.31a16.47,16.47,0,0,1,9.38,3.51A44.8292,44.8292,0,0,1,43.5,33s-2.8,4.79-10.18,5a47.4193,47.4193,0,0,1-2.86-3.81m6.46-2.9c-3.84,1.9454-7.5555,3.89-12.92,3.89s-9.08-1.9446-12.92-3.89"
                      }),
                      createVNode("circle", {
                        class: "a",
                        cx: "17.847",
                        cy: "26.23",
                        r: "3.35"
                      }),
                      createVNode("circle", {
                        class: "a",
                        cx: "30.153",
                        cy: "26.23",
                        r: "3.35"
                      })
                    ]))
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$4, { href: "https://www.instagram.com/migfus20/" }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-linkedin",
                      viewBox: "2 2 20 20",
                      "stroke-width": "1",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z",
                        stroke: "#A0A0A0",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z",
                        stroke: "#A0A0A0",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("rect", {
                        x: "15.5",
                        y: "9",
                        width: "2",
                        height: "2",
                        rx: "1",
                        transform: "rotate(-90 15.5 9)",
                        fill: "#A0A0A0"
                      }),
                      createVNode("rect", {
                        x: "16",
                        y: "8.5",
                        width: "1",
                        height: "1",
                        rx: "0.5",
                        transform: "rotate(-90 16 8.5)",
                        stroke: "#A0A0A0",
                        "stroke-linecap": "round"
                      })
                    ]))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { class: "flex flex-col justify-between items-center overflow-hidden text-center lg:text-left pb-12" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full"${_scopeId}><p class="text-xl text-primary dark:text-white lg:text-4xl tracking-tight"${_scopeId}> Looking for my <span class="text-yellow-600"${_scopeId}>Web Projects</span>? </p><div class="w-full mt-8 md:max-w-xs mb-10"${_scopeId}>`);
            _push2(ssrRenderComponent(AppButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a href="https://web.migfus.net" class="flex justify-center"${_scopeId2}><span class="text-yellow-600"${_scopeId2}>web</span>.migfus.net </a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: "https://web.migfus.net",
                      class: "flex justify-center"
                    }, [
                      createVNode("span", { class: "text-yellow-600" }, "web"),
                      createTextVNode(".migfus.net ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><p class="text-xl text-primary dark:text-white lg:text-4xl tracking-tight"${_scopeId}> Or my <span class="text-green-600"${_scopeId}>music</span>? </p><div class="w-full mt-8 md:max-w-xs lg:max-w-none"${_scopeId}>`);
            _push2(ssrRenderComponent(AppButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a href="https://web.migfus.net" class="flex justify-center"${_scopeId2}><span class="text-green-500 dark:text-green-600"${_scopeId2}>bgm</span>.migfus.net </a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: "https://web.migfus.net",
                      class: "flex justify-center"
                    }, [
                      createVNode("span", { class: "text-green-500 dark:text-green-600" }, "bgm"),
                      createTextVNode(".migfus.net ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full" }, [
                createVNode("p", { class: "text-xl text-primary dark:text-white lg:text-4xl tracking-tight" }, [
                  createTextVNode(" Looking for my "),
                  createVNode("span", { class: "text-yellow-600" }, "Web Projects"),
                  createTextVNode("? ")
                ]),
                createVNode("div", { class: "w-full mt-8 md:max-w-xs mb-10" }, [
                  createVNode(AppButton, null, {
                    default: withCtx(() => [
                      createVNode("a", {
                        href: "https://web.migfus.net",
                        class: "flex justify-center"
                      }, [
                        createVNode("span", { class: "text-yellow-600" }, "web"),
                        createTextVNode(".migfus.net ")
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("p", { class: "text-xl text-primary dark:text-white lg:text-4xl tracking-tight" }, [
                  createTextVNode(" Or my "),
                  createVNode("span", { class: "text-green-600" }, "music"),
                  createTextVNode("? ")
                ]),
                createVNode("div", { class: "w-full mt-8 md:max-w-xs lg:max-w-none" }, [
                  createVNode(AppButton, null, {
                    default: withCtx(() => [
                      createVNode("a", {
                        href: "https://web.migfus.net",
                        class: "flex justify-center"
                      }, [
                        createVNode("span", { class: "text-green-500 dark:text-green-600" }, "bgm"),
                        createTextVNode(".migfus.net ")
                      ])
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { class: "lg:row-span-1 lg:row-start-2 lg:gap-0 lg:grid-cols-none lg:col-start-2 lg:col-span-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mb-6"${_scopeId}> Web Dev Environment </p><div class="grid grid-cols-3 md:grid-cols-5 gap-8"${_scopeId}><div class="flex justify-center"${_scopeId}><div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(AppLogo, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50" viewBox="0 0 32 32" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><path d="M13.143 23.585l10.46-5.97-4.752-2.736-10.453 6.019zM24.084 11.374l-4.757-2.736v5.417l4.758 2.737zM24.559 5.078l-4.756 2.736 4.756 2.736 4.755-2.737zM9.911 18.928l2.76-1.589v-11.934l-4.758 2.738v11.934zM7.437 1.846l-4.756 2.737 4.756 2.737 4.753-2.737zM2.204 5.406v18.452l10.464 6.022v-5.471l-5.472-3.096c-0.018-0.013-0.032-0.027-0.051-0.039-0.014-0.013-0.030-0.023-0.044-0.034l-0.001-0.003c-0.015-0.015-0.028-0.031-0.039-0.049l-0.001-0.001c-0.014-0.013-0.025-0.028-0.035-0.045l-0.001-0.001h-0.003c-0.008-0.015-0.016-0.035-0.024-0.055l-0.001-0.004c-0.007-0.015-0.015-0.032-0.022-0.051l-0.001-0.003c-0.004-0.020-0.008-0.045-0.010-0.070l-0-0.002c-0.003-0.015-0.006-0.033-0.008-0.051l-0-0.001v-12.759l-2.757-1.59zM24.085 23.857v-5.422l-10.464 5.974v5.47zM29.789 14.055v-5.417l-4.756 2.737v5.417zM30.725 7.69c0.011 0.038 0.018 0.081 0.018 0.126v0 6.513c-0 0.176-0.095 0.329-0.237 0.411l-0.002 0.001-5.468 3.149v6.241c-0 0.175-0.095 0.328-0.236 0.411l-0.002 0.001-11.416 6.57c-0.024 0.013-0.052 0.025-0.081 0.033l-0.003 0.001-0.030 0.013c-0.036 0.011-0.078 0.017-0.121 0.017s-0.085-0.006-0.125-0.018l0.003 0.001c-0.015-0.004-0.027-0.009-0.039-0.016l0.001 0.001c-0.031-0.011-0.057-0.021-0.082-0.033l0.004 0.002-11.413-6.57c-0.144-0.084-0.239-0.237-0.239-0.412v0-19.548c0-0.044 0.007-0.087 0.019-0.127l-0.001 0.003c0.004-0.015 0.013-0.025 0.018-0.040 0.009-0.029 0.019-0.053 0.030-0.076l-0.001 0.003c0.008-0.016 0.018-0.030 0.029-0.042l-0 0 0.042-0.057 0.047-0.034c0.018-0.015 0.034-0.030 0.052-0.043h0.001l5.708-3.285c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.71 3.285c0.019 0.013 0.035 0.027 0.051 0.042l-0-0 0.048 0.034c0.016 0.018 0.025 0.038 0.042 0.057 0.012 0.012 0.022 0.026 0.031 0.041l0.001 0.001c0.010 0.020 0.020 0.044 0.029 0.069l0.001 0.004 0.016 0.040c0.011 0.035 0.018 0.076 0.018 0.118 0 0.002 0 0.004-0 0.006v-0 12.208l4.756-2.737v-6.241c0-0.001 0-0.002 0-0.002 0-0.043 0.006-0.085 0.017-0.125l-0.001 0.003c0.004-0.013 0.013-0.025 0.016-0.040 0.010-0.030 0.020-0.054 0.032-0.078l-0.002 0.004c0.009-0.015 0.023-0.025 0.032-0.042 0.015-0.019 0.027-0.038 0.042-0.054 0.014-0.013 0.029-0.025 0.045-0.035l0.001-0.001c0.018-0.013 0.033-0.029 0.052-0.040h0.001l5.708-3.286c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.708 3.286c0.020 0.013 0.034 0.027 0.053 0.039 0.015 0.013 0.032 0.023 0.046 0.035 0.016 0.018 0.028 0.038 0.043 0.056 0.011 0.012 0.021 0.026 0.030 0.040l0.001 0.001c0.012 0.022 0.022 0.047 0.030 0.073l0.001 0.003c0.008 0.012 0.014 0.025 0.019 0.039l0 0.001z"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50",
                      viewBox: "0 0 32 32",
                      "stroke-width": "1",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", { d: "M13.143 23.585l10.46-5.97-4.752-2.736-10.453 6.019zM24.084 11.374l-4.757-2.736v5.417l4.758 2.737zM24.559 5.078l-4.756 2.736 4.756 2.736 4.755-2.737zM9.911 18.928l2.76-1.589v-11.934l-4.758 2.738v11.934zM7.437 1.846l-4.756 2.737 4.756 2.737 4.753-2.737zM2.204 5.406v18.452l10.464 6.022v-5.471l-5.472-3.096c-0.018-0.013-0.032-0.027-0.051-0.039-0.014-0.013-0.030-0.023-0.044-0.034l-0.001-0.003c-0.015-0.015-0.028-0.031-0.039-0.049l-0.001-0.001c-0.014-0.013-0.025-0.028-0.035-0.045l-0.001-0.001h-0.003c-0.008-0.015-0.016-0.035-0.024-0.055l-0.001-0.004c-0.007-0.015-0.015-0.032-0.022-0.051l-0.001-0.003c-0.004-0.020-0.008-0.045-0.010-0.070l-0-0.002c-0.003-0.015-0.006-0.033-0.008-0.051l-0-0.001v-12.759l-2.757-1.59zM24.085 23.857v-5.422l-10.464 5.974v5.47zM29.789 14.055v-5.417l-4.756 2.737v5.417zM30.725 7.69c0.011 0.038 0.018 0.081 0.018 0.126v0 6.513c-0 0.176-0.095 0.329-0.237 0.411l-0.002 0.001-5.468 3.149v6.241c-0 0.175-0.095 0.328-0.236 0.411l-0.002 0.001-11.416 6.57c-0.024 0.013-0.052 0.025-0.081 0.033l-0.003 0.001-0.030 0.013c-0.036 0.011-0.078 0.017-0.121 0.017s-0.085-0.006-0.125-0.018l0.003 0.001c-0.015-0.004-0.027-0.009-0.039-0.016l0.001 0.001c-0.031-0.011-0.057-0.021-0.082-0.033l0.004 0.002-11.413-6.57c-0.144-0.084-0.239-0.237-0.239-0.412v0-19.548c0-0.044 0.007-0.087 0.019-0.127l-0.001 0.003c0.004-0.015 0.013-0.025 0.018-0.040 0.009-0.029 0.019-0.053 0.030-0.076l-0.001 0.003c0.008-0.016 0.018-0.030 0.029-0.042l-0 0 0.042-0.057 0.047-0.034c0.018-0.015 0.034-0.030 0.052-0.043h0.001l5.708-3.285c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.71 3.285c0.019 0.013 0.035 0.027 0.051 0.042l-0-0 0.048 0.034c0.016 0.018 0.025 0.038 0.042 0.057 0.012 0.012 0.022 0.026 0.031 0.041l0.001 0.001c0.010 0.020 0.020 0.044 0.029 0.069l0.001 0.004 0.016 0.040c0.011 0.035 0.018 0.076 0.018 0.118 0 0.002 0 0.004-0 0.006v-0 12.208l4.756-2.737v-6.241c0-0.001 0-0.002 0-0.002 0-0.043 0.006-0.085 0.017-0.125l-0.001 0.003c0.004-0.013 0.013-0.025 0.016-0.040 0.010-0.030 0.020-0.054 0.032-0.078l-0.002 0.004c0.009-0.015 0.023-0.025 0.032-0.042 0.015-0.019 0.027-0.038 0.042-0.054 0.014-0.013 0.029-0.025 0.045-0.035l0.001-0.001c0.018-0.013 0.033-0.029 0.052-0.040h0.001l5.708-3.286c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.708 3.286c0.020 0.013 0.034 0.027 0.053 0.039 0.015 0.013 0.032 0.023 0.046 0.035 0.016 0.018 0.028 0.038 0.043 0.056 0.011 0.012 0.021 0.026 0.030 0.040l0.001 0.001c0.012 0.022 0.022 0.047 0.030 0.073l0.001 0.003c0.008 0.012 0.014 0.025 0.019 0.039l0 0.001z" })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-gray-300 mt-2"${_scopeId}>Laravel 10</p></div></div><div class="flex justify-center"${_scopeId}><div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(AppLogo, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50" viewBox="1 1 22 22" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"${_scopeId2}><g id="Logo" transform="translate(-816.000000, -96.000000)" fill-rule="nonzero"${_scopeId2}><g id="vue_line" transform="translate(816.000000, 96.000000)"${_scopeId2}><path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"${_scopeId2}></path><path d="M20.138,4.19311 C20.418,3.71708 21.0309,3.55818 21.5069,3.8382 C21.9489929,4.09821857 22.1175816,4.64526122 21.9152265,5.10321981 L21.8619,5.20715 L12.8619,20.5071 C12.6822,20.8126 12.3543,21.0001 11.9999,21.0001 C11.6849667,21.0001 11.3908926,20.8519519 11.2032218,20.6044676 L11.138,20.5071 L2.13798,5.20713 C1.85796,4.7311 2.01686,4.1182 2.4929,3.83818 C2.93492786,3.57816143 3.49497117,3.69659939 3.7969218,4.09598199 L3.86185,4.19309 L11.9999,18.0278 L20.138,4.19311 Z M15.8438,4.19315 C16.1238,3.71712 16.7367,3.55821 17.2128,3.83823 C17.6548,4.09824857 17.8233821,4.64529985 17.6210265,5.10325967 L17.5677,5.20719 L12.8619,13.2071 C12.6822,13.5125 12.3543,13.7000069 11.9999,13.7000069 C11.6849667,13.7000069 11.3908926,13.5518533 11.2032218,13.3044381 L11.138,13.2071 L6.43218,5.20719 C6.15216,4.73116 6.31106,4.11825 6.78709,3.83823 C7.22912714,3.57821143 7.78917112,3.69665801 8.0911218,4.09604184 L8.15605,4.19315 L11.9999,10.7277 L15.8438,4.19315 Z" id="形状" fill="#A0A0A0"${_scopeId2}></path></g></g></g></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-12 w-12 hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50",
                      viewBox: "1 1 22 22",
                      "stroke-width": "1",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("g", {
                        id: "页面-1",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd"
                      }, [
                        createVNode("g", {
                          id: "Logo",
                          transform: "translate(-816.000000, -96.000000)",
                          "fill-rule": "nonzero"
                        }, [
                          createVNode("g", {
                            id: "vue_line",
                            transform: "translate(816.000000, 96.000000)"
                          }, [
                            createVNode("path", {
                              d: "M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z",
                              id: "MingCute",
                              "fill-rule": "nonzero"
                            }),
                            createVNode("path", {
                              d: "M20.138,4.19311 C20.418,3.71708 21.0309,3.55818 21.5069,3.8382 C21.9489929,4.09821857 22.1175816,4.64526122 21.9152265,5.10321981 L21.8619,5.20715 L12.8619,20.5071 C12.6822,20.8126 12.3543,21.0001 11.9999,21.0001 C11.6849667,21.0001 11.3908926,20.8519519 11.2032218,20.6044676 L11.138,20.5071 L2.13798,5.20713 C1.85796,4.7311 2.01686,4.1182 2.4929,3.83818 C2.93492786,3.57816143 3.49497117,3.69659939 3.7969218,4.09598199 L3.86185,4.19309 L11.9999,18.0278 L20.138,4.19311 Z M15.8438,4.19315 C16.1238,3.71712 16.7367,3.55821 17.2128,3.83823 C17.6548,4.09824857 17.8233821,4.64529985 17.6210265,5.10325967 L17.5677,5.20719 L12.8619,13.2071 C12.6822,13.5125 12.3543,13.7000069 11.9999,13.7000069 C11.6849667,13.7000069 11.3908926,13.5518533 11.2032218,13.3044381 L11.138,13.2071 L6.43218,5.20719 C6.15216,4.73116 6.31106,4.11825 6.78709,3.83823 C7.22912714,3.57821143 7.78917112,3.69665801 8.0911218,4.09604184 L8.15605,4.19315 L11.9999,10.7277 L15.8438,4.19315 Z",
                              id: "形状",
                              fill: "#A0A0A0"
                            })
                          ])
                        ])
                      ])
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-gray-300 mt-2"${_scopeId}>Vue 3</p></div></div><div class="flex justify-center"${_scopeId}><div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(AppLogo, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50" viewBox="0 0 25 25" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50",
                      viewBox: "0 0 25 25",
                      "stroke-width": "1",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", { d: "m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z" })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-gray-300 mt-2"${_scopeId}>Vite 5</p></div></div><div class="flex justify-center"${_scopeId}><div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(AppLogo, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50" viewBox="0 0 25 25" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><path d="m24.129 23.412-.508-.484c-.251-.331-.518-.624-.809-.891l-.005-.004q-.448-.407-.931-.774-.387-.266-1.064-.641c-.371-.167-.661-.46-.818-.824l-.004-.01-.048-.024c.212-.021.406-.06.592-.115l-.023.006.57-.157c.236-.074.509-.122.792-.133h.006c.298-.012.579-.06.847-.139l-.025.006q.194-.048.399-.109t.351-.109v-.169q-.145-.217-.351-.496c-.131-.178-.278-.333-.443-.468l-.005-.004q-.629-.556-1.303-1.076c-.396-.309-.845-.624-1.311-.916l-.068-.04c-.246-.162-.528-.312-.825-.435l-.034-.012q-.448-.182-.883-.399c-.097-.048-.21-.09-.327-.119l-.011-.002c-.117-.024-.217-.084-.29-.169l-.001-.001c-.138-.182-.259-.389-.355-.609l-.008-.02q-.145-.339-.314-.651-.363-.702-.702-1.427t-.651-1.452q-.217-.484-.399-.967c-.134-.354-.285-.657-.461-.942l.013.023c-.432-.736-.863-1.364-1.331-1.961l.028.038c-.463-.584-.943-1.106-1.459-1.59l-.008-.007c-.509-.478-1.057-.934-1.632-1.356l-.049-.035q-.896-.651-1.96-1.282c-.285-.168-.616-.305-.965-.393l-.026-.006-1.113-.278-.629-.048q-.314-.024-.629-.024c-.148-.078-.275-.171-.387-.279-.11-.105-.229-.204-.353-.295l-.01-.007c-.605-.353-1.308-.676-2.043-.93l-.085-.026c-.193-.113-.425-.179-.672-.179-.176 0-.345.034-.499.095l.009-.003c-.38.151-.67.458-.795.84l-.003.01c-.073.172-.115.371-.115.581 0 .368.13.705.347.968l-.002-.003q.544.725.834 1.14.217.291.448.605c.141.188.266.403.367.63l.008.021c.056.119.105.261.141.407l.003.016q.048.206.121.448.217.556.411 1.14c.141.425.297.785.478 1.128l-.019-.04q.145.266.291.52t.314.496c.065.098.147.179.241.242l.003.002c.099.072.164.185.169.313v.001c-.114.168-.191.369-.217.586l-.001.006c-.035.253-.085.478-.153.695l.008-.03c-.223.666-.351 1.434-.351 2.231 0 .258.013.512.04.763l-.003-.031c.06.958.349 1.838.812 2.6l-.014-.025c.197.295.408.552.641.787.168.188.412.306.684.306.152 0 .296-.037.422-.103l-.005.002c.35-.126.599-.446.617-.827v-.002c.048-.474.12-.898.219-1.312l-.013.067c.024-.063.038-.135.038-.211 0-.015-.001-.03-.002-.045v.002q-.012-.109.133-.206v.048q.145.339.302.677t.326.677c.295.449.608.841.952 1.202l-.003-.003c.345.372.721.706 1.127 1.001l.022.015c.212.162.398.337.566.528l.004.004c.158.186.347.339.56.454l.01.005v-.024h.048c-.039-.087-.102-.157-.18-.205l-.002-.001c-.079-.044-.147-.088-.211-.136l.005.003q-.217-.217-.448-.484t-.423-.508q-.508-.702-.969-1.467t-.871-1.555q-.194-.387-.375-.798t-.351-.798c-.049-.099-.083-.213-.096-.334v-.005c-.006-.115-.072-.214-.168-.265l-.002-.001c-.121.206-.255.384-.408.545l.001-.001c-.159.167-.289.364-.382.58l-.005.013c-.141.342-.244.739-.289 1.154l-.002.019q-.072.641-.145 1.318l-.048.024-.024.024c-.26-.053-.474-.219-.59-.443l-.002-.005q-.182-.351-.326-.69c-.248-.637-.402-1.374-.423-2.144v-.009c-.009-.122-.013-.265-.013-.408 0-.666.105-1.308.299-1.91l-.012.044q.072-.266.314-.896t.097-.871c-.05-.165-.143-.304-.265-.41l-.001-.001c-.122-.106-.233-.217-.335-.335l-.003-.004q-.169-.244-.326-.52t-.278-.544c-.165-.382-.334-.861-.474-1.353l-.022-.089c-.159-.565-.336-1.043-.546-1.503l.026.064c-.111-.252-.24-.47-.39-.669l.006.008q-.244-.326-.436-.617-.244-.314-.484-.605c-.163-.197-.308-.419-.426-.657l-.009-.02c-.048-.097-.09-.21-.119-.327l-.002-.011c-.011-.035-.017-.076-.017-.117 0-.082.024-.159.066-.223l-.001.002c.011-.056.037-.105.073-.145.039-.035.089-.061.143-.072h.002c.085-.055.188-.088.3-.088.084 0 .165.019.236.053l-.003-.001c.219.062.396.124.569.195l-.036-.013q.459.194.847.375c.298.142.552.292.792.459l-.018-.012q.194.121.387.266t.411.291h.339q.387 0 .822.037c.293.023.564.078.822.164l-.024-.007c.481.143.894.312 1.286.515l-.041-.019q.593.302 1.125.641c.589.367 1.098.743 1.577 1.154l-.017-.014c.5.428.954.867 1.38 1.331l.01.012c.416.454.813.947 1.176 1.464l.031.047c.334.472.671 1.018.974 1.584l.042.085c.081.154.163.343.234.536l.011.033q.097.278.217.57.266.605.57 1.221t.57 1.198l.532 1.161c.187.406.396.756.639 1.079l-.011-.015c.203.217.474.369.778.422l.008.001c.368.092.678.196.978.319l-.047-.017c.143.065.327.134.516.195l.04.011c.212.065.396.151.565.259l-.009-.005c.327.183.604.363.868.559l-.021-.015q.411.302.822.57.194.145.651.423t.484.52c-.114-.004-.249-.007-.384-.007-.492 0-.976.032-1.45.094l.056-.006c-.536.072-1.022.203-1.479.39l.04-.014c-.113.049-.248.094-.388.129l-.019.004c-.142.021-.252.135-.266.277v.001c.061.076.11.164.143.26l.002.006c.034.102.075.19.125.272l-.003-.006c.119.211.247.393.391.561l-.004-.005c.141.174.3.325.476.454l.007.005q.244.194.508.399c.161.126.343.25.532.362l.024.013c.284.174.614.34.958.479l.046.016c.374.15.695.324.993.531l-.016-.011q.291.169.58.375t.556.399c.073.072.137.152.191.239l.003.005c.091.104.217.175.36.193h.003v-.048c-.088-.067-.153-.16-.184-.267l-.001-.004c-.025-.102-.062-.191-.112-.273l.002.004zm-18.576-19.205q-.194 0-.363.012c-.115.008-.222.029-.323.063l.009-.003v.024h.048q.097.145.244.326t.266.351l.387.798.048-.024c.113-.082.2-.192.252-.321l.002-.005c.052-.139.082-.301.082-.469 0-.018 0-.036-.001-.054v.003c-.045-.044-.082-.096-.108-.154l-.001-.003-.081-.182c-.053-.084-.127-.15-.214-.192l-.003-.001c-.094-.045-.174-.102-.244-.169z"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50",
                      viewBox: "0 0 25 25",
                      "stroke-width": "1",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", { d: "m24.129 23.412-.508-.484c-.251-.331-.518-.624-.809-.891l-.005-.004q-.448-.407-.931-.774-.387-.266-1.064-.641c-.371-.167-.661-.46-.818-.824l-.004-.01-.048-.024c.212-.021.406-.06.592-.115l-.023.006.57-.157c.236-.074.509-.122.792-.133h.006c.298-.012.579-.06.847-.139l-.025.006q.194-.048.399-.109t.351-.109v-.169q-.145-.217-.351-.496c-.131-.178-.278-.333-.443-.468l-.005-.004q-.629-.556-1.303-1.076c-.396-.309-.845-.624-1.311-.916l-.068-.04c-.246-.162-.528-.312-.825-.435l-.034-.012q-.448-.182-.883-.399c-.097-.048-.21-.09-.327-.119l-.011-.002c-.117-.024-.217-.084-.29-.169l-.001-.001c-.138-.182-.259-.389-.355-.609l-.008-.02q-.145-.339-.314-.651-.363-.702-.702-1.427t-.651-1.452q-.217-.484-.399-.967c-.134-.354-.285-.657-.461-.942l.013.023c-.432-.736-.863-1.364-1.331-1.961l.028.038c-.463-.584-.943-1.106-1.459-1.59l-.008-.007c-.509-.478-1.057-.934-1.632-1.356l-.049-.035q-.896-.651-1.96-1.282c-.285-.168-.616-.305-.965-.393l-.026-.006-1.113-.278-.629-.048q-.314-.024-.629-.024c-.148-.078-.275-.171-.387-.279-.11-.105-.229-.204-.353-.295l-.01-.007c-.605-.353-1.308-.676-2.043-.93l-.085-.026c-.193-.113-.425-.179-.672-.179-.176 0-.345.034-.499.095l.009-.003c-.38.151-.67.458-.795.84l-.003.01c-.073.172-.115.371-.115.581 0 .368.13.705.347.968l-.002-.003q.544.725.834 1.14.217.291.448.605c.141.188.266.403.367.63l.008.021c.056.119.105.261.141.407l.003.016q.048.206.121.448.217.556.411 1.14c.141.425.297.785.478 1.128l-.019-.04q.145.266.291.52t.314.496c.065.098.147.179.241.242l.003.002c.099.072.164.185.169.313v.001c-.114.168-.191.369-.217.586l-.001.006c-.035.253-.085.478-.153.695l.008-.03c-.223.666-.351 1.434-.351 2.231 0 .258.013.512.04.763l-.003-.031c.06.958.349 1.838.812 2.6l-.014-.025c.197.295.408.552.641.787.168.188.412.306.684.306.152 0 .296-.037.422-.103l-.005.002c.35-.126.599-.446.617-.827v-.002c.048-.474.12-.898.219-1.312l-.013.067c.024-.063.038-.135.038-.211 0-.015-.001-.03-.002-.045v.002q-.012-.109.133-.206v.048q.145.339.302.677t.326.677c.295.449.608.841.952 1.202l-.003-.003c.345.372.721.706 1.127 1.001l.022.015c.212.162.398.337.566.528l.004.004c.158.186.347.339.56.454l.01.005v-.024h.048c-.039-.087-.102-.157-.18-.205l-.002-.001c-.079-.044-.147-.088-.211-.136l.005.003q-.217-.217-.448-.484t-.423-.508q-.508-.702-.969-1.467t-.871-1.555q-.194-.387-.375-.798t-.351-.798c-.049-.099-.083-.213-.096-.334v-.005c-.006-.115-.072-.214-.168-.265l-.002-.001c-.121.206-.255.384-.408.545l.001-.001c-.159.167-.289.364-.382.58l-.005.013c-.141.342-.244.739-.289 1.154l-.002.019q-.072.641-.145 1.318l-.048.024-.024.024c-.26-.053-.474-.219-.59-.443l-.002-.005q-.182-.351-.326-.69c-.248-.637-.402-1.374-.423-2.144v-.009c-.009-.122-.013-.265-.013-.408 0-.666.105-1.308.299-1.91l-.012.044q.072-.266.314-.896t.097-.871c-.05-.165-.143-.304-.265-.41l-.001-.001c-.122-.106-.233-.217-.335-.335l-.003-.004q-.169-.244-.326-.52t-.278-.544c-.165-.382-.334-.861-.474-1.353l-.022-.089c-.159-.565-.336-1.043-.546-1.503l.026.064c-.111-.252-.24-.47-.39-.669l.006.008q-.244-.326-.436-.617-.244-.314-.484-.605c-.163-.197-.308-.419-.426-.657l-.009-.02c-.048-.097-.09-.21-.119-.327l-.002-.011c-.011-.035-.017-.076-.017-.117 0-.082.024-.159.066-.223l-.001.002c.011-.056.037-.105.073-.145.039-.035.089-.061.143-.072h.002c.085-.055.188-.088.3-.088.084 0 .165.019.236.053l-.003-.001c.219.062.396.124.569.195l-.036-.013q.459.194.847.375c.298.142.552.292.792.459l-.018-.012q.194.121.387.266t.411.291h.339q.387 0 .822.037c.293.023.564.078.822.164l-.024-.007c.481.143.894.312 1.286.515l-.041-.019q.593.302 1.125.641c.589.367 1.098.743 1.577 1.154l-.017-.014c.5.428.954.867 1.38 1.331l.01.012c.416.454.813.947 1.176 1.464l.031.047c.334.472.671 1.018.974 1.584l.042.085c.081.154.163.343.234.536l.011.033q.097.278.217.57.266.605.57 1.221t.57 1.198l.532 1.161c.187.406.396.756.639 1.079l-.011-.015c.203.217.474.369.778.422l.008.001c.368.092.678.196.978.319l-.047-.017c.143.065.327.134.516.195l.04.011c.212.065.396.151.565.259l-.009-.005c.327.183.604.363.868.559l-.021-.015q.411.302.822.57.194.145.651.423t.484.52c-.114-.004-.249-.007-.384-.007-.492 0-.976.032-1.45.094l.056-.006c-.536.072-1.022.203-1.479.39l.04-.014c-.113.049-.248.094-.388.129l-.019.004c-.142.021-.252.135-.266.277v.001c.061.076.11.164.143.26l.002.006c.034.102.075.19.125.272l-.003-.006c.119.211.247.393.391.561l-.004-.005c.141.174.3.325.476.454l.007.005q.244.194.508.399c.161.126.343.25.532.362l.024.013c.284.174.614.34.958.479l.046.016c.374.15.695.324.993.531l-.016-.011q.291.169.58.375t.556.399c.073.072.137.152.191.239l.003.005c.091.104.217.175.36.193h.003v-.048c-.088-.067-.153-.16-.184-.267l-.001-.004c-.025-.102-.062-.191-.112-.273l.002.004zm-18.576-19.205q-.194 0-.363.012c-.115.008-.222.029-.323.063l.009-.003v.024h.048q.097.145.244.326t.266.351l.387.798.048-.024c.113-.082.2-.192.252-.321l.002-.005c.052-.139.082-.301.082-.469 0-.018 0-.036-.001-.054v.003c-.045-.044-.082-.096-.108-.154l-.001-.003-.081-.182c-.053-.084-.127-.15-.214-.192l-.003-.001c-.094-.045-.174-.102-.244-.169z" })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-gray-300 mt-2"${_scopeId}>MySQL 8</p></div></div><div class="flex justify-center"${_scopeId}><div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(AppLogo, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50" viewBox="0 0 25 25" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50",
                      viewBox: "0 0 25 25",
                      "stroke-width": "1",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-gray-300 mt-2"${_scopeId}>Tailwind 3</p></div></div><div class="flex justify-center"${_scopeId}><div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(AppLogo, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50" viewBox="0 0 34 34" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><path d="M18.909 14.84l-8.086 8.070 8.085 8.085h9.214l-8.073-8.083 8.073-8.073h-9.212zM18.892 1.004l-15.013 14.996 4.624 4.624 19.599-19.603h-9.194z"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50",
                      viewBox: "0 0 34 34",
                      "stroke-width": "1",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", { d: "M18.909 14.84l-8.086 8.070 8.085 8.085h9.214l-8.073-8.083 8.073-8.073h-9.212zM18.892 1.004l-15.013 14.996 4.624 4.624 19.599-19.603h-9.194z" })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-gray-300 mt-2"${_scopeId}>Flutter 4</p></div></div><div class="flex justify-center"${_scopeId}><div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(AppLogo, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50" viewBox="0 0 34 34" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><path d="M30.865 3.448l-6.583-3.167c-0.766-0.37-1.677-0.214-2.276 0.385l-12.609 11.505-5.495-4.167c-0.51-0.391-1.229-0.359-1.703 0.073l-1.76 1.604c-0.583 0.526-0.583 1.443-0.005 1.969l4.766 4.349-4.766 4.349c-0.578 0.526-0.578 1.443 0.005 1.969l1.76 1.604c0.479 0.432 1.193 0.464 1.703 0.073l5.495-4.172 12.615 11.51c0.594 0.599 1.505 0.755 2.271 0.385l6.589-3.172c0.693-0.333 1.13-1.031 1.13-1.802v-21.495c0-0.766-0.443-1.469-1.135-1.802zM24.005 23.266l-9.573-7.266 9.573-7.266z"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50",
                      viewBox: "0 0 34 34",
                      "stroke-width": "1",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", { d: "M30.865 3.448l-6.583-3.167c-0.766-0.37-1.677-0.214-2.276 0.385l-12.609 11.505-5.495-4.167c-0.51-0.391-1.229-0.359-1.703 0.073l-1.76 1.604c-0.583 0.526-0.583 1.443-0.005 1.969l4.766 4.349-4.766 4.349c-0.578 0.526-0.578 1.443 0.005 1.969l1.76 1.604c0.479 0.432 1.193 0.464 1.703 0.073l5.495-4.172 12.615 11.51c0.594 0.599 1.505 0.755 2.271 0.385l6.589-3.172c0.693-0.333 1.13-1.031 1.13-1.802v-21.495c0-0.766-0.443-1.469-1.135-1.802zM24.005 23.266l-9.573-7.266 9.573-7.266z" })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-gray-300 mt-2"${_scopeId}>VS Code</p></div></div><div class="flex justify-center"${_scopeId}><div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(AppLogo, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><path d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15" stroke="#A0A0A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", {
                        d: "M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15",
                        stroke: "#A0A0A0",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-gray-300 mt-2"${_scopeId}>Figma</p></div></div></div>`);
          } else {
            return [
              createVNode("p", { class: "ext-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mb-6" }, " Web Dev Environment "),
              createVNode("div", { class: "grid grid-cols-3 md:grid-cols-5 gap-8" }, [
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("div", { class: "text-center" }, [
                    createVNode(AppLogo, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50",
                          viewBox: "0 0 32 32",
                          "stroke-width": "1",
                          stroke: "currentColor",
                          fill: "none",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }, [
                          createVNode("path", { d: "M13.143 23.585l10.46-5.97-4.752-2.736-10.453 6.019zM24.084 11.374l-4.757-2.736v5.417l4.758 2.737zM24.559 5.078l-4.756 2.736 4.756 2.736 4.755-2.737zM9.911 18.928l2.76-1.589v-11.934l-4.758 2.738v11.934zM7.437 1.846l-4.756 2.737 4.756 2.737 4.753-2.737zM2.204 5.406v18.452l10.464 6.022v-5.471l-5.472-3.096c-0.018-0.013-0.032-0.027-0.051-0.039-0.014-0.013-0.030-0.023-0.044-0.034l-0.001-0.003c-0.015-0.015-0.028-0.031-0.039-0.049l-0.001-0.001c-0.014-0.013-0.025-0.028-0.035-0.045l-0.001-0.001h-0.003c-0.008-0.015-0.016-0.035-0.024-0.055l-0.001-0.004c-0.007-0.015-0.015-0.032-0.022-0.051l-0.001-0.003c-0.004-0.020-0.008-0.045-0.010-0.070l-0-0.002c-0.003-0.015-0.006-0.033-0.008-0.051l-0-0.001v-12.759l-2.757-1.59zM24.085 23.857v-5.422l-10.464 5.974v5.47zM29.789 14.055v-5.417l-4.756 2.737v5.417zM30.725 7.69c0.011 0.038 0.018 0.081 0.018 0.126v0 6.513c-0 0.176-0.095 0.329-0.237 0.411l-0.002 0.001-5.468 3.149v6.241c-0 0.175-0.095 0.328-0.236 0.411l-0.002 0.001-11.416 6.57c-0.024 0.013-0.052 0.025-0.081 0.033l-0.003 0.001-0.030 0.013c-0.036 0.011-0.078 0.017-0.121 0.017s-0.085-0.006-0.125-0.018l0.003 0.001c-0.015-0.004-0.027-0.009-0.039-0.016l0.001 0.001c-0.031-0.011-0.057-0.021-0.082-0.033l0.004 0.002-11.413-6.57c-0.144-0.084-0.239-0.237-0.239-0.412v0-19.548c0-0.044 0.007-0.087 0.019-0.127l-0.001 0.003c0.004-0.015 0.013-0.025 0.018-0.040 0.009-0.029 0.019-0.053 0.030-0.076l-0.001 0.003c0.008-0.016 0.018-0.030 0.029-0.042l-0 0 0.042-0.057 0.047-0.034c0.018-0.015 0.034-0.030 0.052-0.043h0.001l5.708-3.285c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.71 3.285c0.019 0.013 0.035 0.027 0.051 0.042l-0-0 0.048 0.034c0.016 0.018 0.025 0.038 0.042 0.057 0.012 0.012 0.022 0.026 0.031 0.041l0.001 0.001c0.010 0.020 0.020 0.044 0.029 0.069l0.001 0.004 0.016 0.040c0.011 0.035 0.018 0.076 0.018 0.118 0 0.002 0 0.004-0 0.006v-0 12.208l4.756-2.737v-6.241c0-0.001 0-0.002 0-0.002 0-0.043 0.006-0.085 0.017-0.125l-0.001 0.003c0.004-0.013 0.013-0.025 0.016-0.040 0.010-0.030 0.020-0.054 0.032-0.078l-0.002 0.004c0.009-0.015 0.023-0.025 0.032-0.042 0.015-0.019 0.027-0.038 0.042-0.054 0.014-0.013 0.029-0.025 0.045-0.035l0.001-0.001c0.018-0.013 0.033-0.029 0.052-0.040h0.001l5.708-3.286c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.708 3.286c0.020 0.013 0.034 0.027 0.053 0.039 0.015 0.013 0.032 0.023 0.046 0.035 0.016 0.018 0.028 0.038 0.043 0.056 0.011 0.012 0.021 0.026 0.030 0.040l0.001 0.001c0.012 0.022 0.022 0.047 0.030 0.073l0.001 0.003c0.008 0.012 0.014 0.025 0.019 0.039l0 0.001z" })
                        ]))
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "text-gray-300 mt-2" }, "Laravel 10")
                  ])
                ]),
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("div", { class: "text-center" }, [
                    createVNode(AppLogo, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-12 w-12 hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50",
                          viewBox: "1 1 22 22",
                          "stroke-width": "1",
                          stroke: "currentColor",
                          fill: "none",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }, [
                          createVNode("g", {
                            id: "页面-1",
                            stroke: "none",
                            "stroke-width": "1",
                            fill: "none",
                            "fill-rule": "evenodd"
                          }, [
                            createVNode("g", {
                              id: "Logo",
                              transform: "translate(-816.000000, -96.000000)",
                              "fill-rule": "nonzero"
                            }, [
                              createVNode("g", {
                                id: "vue_line",
                                transform: "translate(816.000000, 96.000000)"
                              }, [
                                createVNode("path", {
                                  d: "M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z",
                                  id: "MingCute",
                                  "fill-rule": "nonzero"
                                }),
                                createVNode("path", {
                                  d: "M20.138,4.19311 C20.418,3.71708 21.0309,3.55818 21.5069,3.8382 C21.9489929,4.09821857 22.1175816,4.64526122 21.9152265,5.10321981 L21.8619,5.20715 L12.8619,20.5071 C12.6822,20.8126 12.3543,21.0001 11.9999,21.0001 C11.6849667,21.0001 11.3908926,20.8519519 11.2032218,20.6044676 L11.138,20.5071 L2.13798,5.20713 C1.85796,4.7311 2.01686,4.1182 2.4929,3.83818 C2.93492786,3.57816143 3.49497117,3.69659939 3.7969218,4.09598199 L3.86185,4.19309 L11.9999,18.0278 L20.138,4.19311 Z M15.8438,4.19315 C16.1238,3.71712 16.7367,3.55821 17.2128,3.83823 C17.6548,4.09824857 17.8233821,4.64529985 17.6210265,5.10325967 L17.5677,5.20719 L12.8619,13.2071 C12.6822,13.5125 12.3543,13.7000069 11.9999,13.7000069 C11.6849667,13.7000069 11.3908926,13.5518533 11.2032218,13.3044381 L11.138,13.2071 L6.43218,5.20719 C6.15216,4.73116 6.31106,4.11825 6.78709,3.83823 C7.22912714,3.57821143 7.78917112,3.69665801 8.0911218,4.09604184 L8.15605,4.19315 L11.9999,10.7277 L15.8438,4.19315 Z",
                                  id: "形状",
                                  fill: "#A0A0A0"
                                })
                              ])
                            ])
                          ])
                        ]))
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "text-gray-300 mt-2" }, "Vue 3")
                  ])
                ]),
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("div", { class: "text-center" }, [
                    createVNode(AppLogo, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50",
                          viewBox: "0 0 25 25",
                          "stroke-width": "1",
                          stroke: "currentColor",
                          fill: "none",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }, [
                          createVNode("path", { d: "m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z" })
                        ]))
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "text-gray-300 mt-2" }, "Vite 5")
                  ])
                ]),
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("div", { class: "text-center" }, [
                    createVNode(AppLogo, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50",
                          viewBox: "0 0 25 25",
                          "stroke-width": "1",
                          stroke: "currentColor",
                          fill: "none",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }, [
                          createVNode("path", { d: "m24.129 23.412-.508-.484c-.251-.331-.518-.624-.809-.891l-.005-.004q-.448-.407-.931-.774-.387-.266-1.064-.641c-.371-.167-.661-.46-.818-.824l-.004-.01-.048-.024c.212-.021.406-.06.592-.115l-.023.006.57-.157c.236-.074.509-.122.792-.133h.006c.298-.012.579-.06.847-.139l-.025.006q.194-.048.399-.109t.351-.109v-.169q-.145-.217-.351-.496c-.131-.178-.278-.333-.443-.468l-.005-.004q-.629-.556-1.303-1.076c-.396-.309-.845-.624-1.311-.916l-.068-.04c-.246-.162-.528-.312-.825-.435l-.034-.012q-.448-.182-.883-.399c-.097-.048-.21-.09-.327-.119l-.011-.002c-.117-.024-.217-.084-.29-.169l-.001-.001c-.138-.182-.259-.389-.355-.609l-.008-.02q-.145-.339-.314-.651-.363-.702-.702-1.427t-.651-1.452q-.217-.484-.399-.967c-.134-.354-.285-.657-.461-.942l.013.023c-.432-.736-.863-1.364-1.331-1.961l.028.038c-.463-.584-.943-1.106-1.459-1.59l-.008-.007c-.509-.478-1.057-.934-1.632-1.356l-.049-.035q-.896-.651-1.96-1.282c-.285-.168-.616-.305-.965-.393l-.026-.006-1.113-.278-.629-.048q-.314-.024-.629-.024c-.148-.078-.275-.171-.387-.279-.11-.105-.229-.204-.353-.295l-.01-.007c-.605-.353-1.308-.676-2.043-.93l-.085-.026c-.193-.113-.425-.179-.672-.179-.176 0-.345.034-.499.095l.009-.003c-.38.151-.67.458-.795.84l-.003.01c-.073.172-.115.371-.115.581 0 .368.13.705.347.968l-.002-.003q.544.725.834 1.14.217.291.448.605c.141.188.266.403.367.63l.008.021c.056.119.105.261.141.407l.003.016q.048.206.121.448.217.556.411 1.14c.141.425.297.785.478 1.128l-.019-.04q.145.266.291.52t.314.496c.065.098.147.179.241.242l.003.002c.099.072.164.185.169.313v.001c-.114.168-.191.369-.217.586l-.001.006c-.035.253-.085.478-.153.695l.008-.03c-.223.666-.351 1.434-.351 2.231 0 .258.013.512.04.763l-.003-.031c.06.958.349 1.838.812 2.6l-.014-.025c.197.295.408.552.641.787.168.188.412.306.684.306.152 0 .296-.037.422-.103l-.005.002c.35-.126.599-.446.617-.827v-.002c.048-.474.12-.898.219-1.312l-.013.067c.024-.063.038-.135.038-.211 0-.015-.001-.03-.002-.045v.002q-.012-.109.133-.206v.048q.145.339.302.677t.326.677c.295.449.608.841.952 1.202l-.003-.003c.345.372.721.706 1.127 1.001l.022.015c.212.162.398.337.566.528l.004.004c.158.186.347.339.56.454l.01.005v-.024h.048c-.039-.087-.102-.157-.18-.205l-.002-.001c-.079-.044-.147-.088-.211-.136l.005.003q-.217-.217-.448-.484t-.423-.508q-.508-.702-.969-1.467t-.871-1.555q-.194-.387-.375-.798t-.351-.798c-.049-.099-.083-.213-.096-.334v-.005c-.006-.115-.072-.214-.168-.265l-.002-.001c-.121.206-.255.384-.408.545l.001-.001c-.159.167-.289.364-.382.58l-.005.013c-.141.342-.244.739-.289 1.154l-.002.019q-.072.641-.145 1.318l-.048.024-.024.024c-.26-.053-.474-.219-.59-.443l-.002-.005q-.182-.351-.326-.69c-.248-.637-.402-1.374-.423-2.144v-.009c-.009-.122-.013-.265-.013-.408 0-.666.105-1.308.299-1.91l-.012.044q.072-.266.314-.896t.097-.871c-.05-.165-.143-.304-.265-.41l-.001-.001c-.122-.106-.233-.217-.335-.335l-.003-.004q-.169-.244-.326-.52t-.278-.544c-.165-.382-.334-.861-.474-1.353l-.022-.089c-.159-.565-.336-1.043-.546-1.503l.026.064c-.111-.252-.24-.47-.39-.669l.006.008q-.244-.326-.436-.617-.244-.314-.484-.605c-.163-.197-.308-.419-.426-.657l-.009-.02c-.048-.097-.09-.21-.119-.327l-.002-.011c-.011-.035-.017-.076-.017-.117 0-.082.024-.159.066-.223l-.001.002c.011-.056.037-.105.073-.145.039-.035.089-.061.143-.072h.002c.085-.055.188-.088.3-.088.084 0 .165.019.236.053l-.003-.001c.219.062.396.124.569.195l-.036-.013q.459.194.847.375c.298.142.552.292.792.459l-.018-.012q.194.121.387.266t.411.291h.339q.387 0 .822.037c.293.023.564.078.822.164l-.024-.007c.481.143.894.312 1.286.515l-.041-.019q.593.302 1.125.641c.589.367 1.098.743 1.577 1.154l-.017-.014c.5.428.954.867 1.38 1.331l.01.012c.416.454.813.947 1.176 1.464l.031.047c.334.472.671 1.018.974 1.584l.042.085c.081.154.163.343.234.536l.011.033q.097.278.217.57.266.605.57 1.221t.57 1.198l.532 1.161c.187.406.396.756.639 1.079l-.011-.015c.203.217.474.369.778.422l.008.001c.368.092.678.196.978.319l-.047-.017c.143.065.327.134.516.195l.04.011c.212.065.396.151.565.259l-.009-.005c.327.183.604.363.868.559l-.021-.015q.411.302.822.57.194.145.651.423t.484.52c-.114-.004-.249-.007-.384-.007-.492 0-.976.032-1.45.094l.056-.006c-.536.072-1.022.203-1.479.39l.04-.014c-.113.049-.248.094-.388.129l-.019.004c-.142.021-.252.135-.266.277v.001c.061.076.11.164.143.26l.002.006c.034.102.075.19.125.272l-.003-.006c.119.211.247.393.391.561l-.004-.005c.141.174.3.325.476.454l.007.005q.244.194.508.399c.161.126.343.25.532.362l.024.013c.284.174.614.34.958.479l.046.016c.374.15.695.324.993.531l-.016-.011q.291.169.58.375t.556.399c.073.072.137.152.191.239l.003.005c.091.104.217.175.36.193h.003v-.048c-.088-.067-.153-.16-.184-.267l-.001-.004c-.025-.102-.062-.191-.112-.273l.002.004zm-18.576-19.205q-.194 0-.363.012c-.115.008-.222.029-.323.063l.009-.003v.024h.048q.097.145.244.326t.266.351l.387.798.048-.024c.113-.082.2-.192.252-.321l.002-.005c.052-.139.082-.301.082-.469 0-.018 0-.036-.001-.054v.003c-.045-.044-.082-.096-.108-.154l-.001-.003-.081-.182c-.053-.084-.127-.15-.214-.192l-.003-.001c-.094-.045-.174-.102-.244-.169z" })
                        ]))
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "text-gray-300 mt-2" }, "MySQL 8")
                  ])
                ]),
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("div", { class: "text-center" }, [
                    createVNode(AppLogo, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50",
                          viewBox: "0 0 25 25",
                          "stroke-width": "1",
                          stroke: "currentColor",
                          fill: "none",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
                          })
                        ]))
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "text-gray-300 mt-2" }, "Tailwind 3")
                  ])
                ]),
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("div", { class: "text-center" }, [
                    createVNode(AppLogo, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50",
                          viewBox: "0 0 34 34",
                          "stroke-width": "1",
                          stroke: "currentColor",
                          fill: "none",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }, [
                          createVNode("path", { d: "M18.909 14.84l-8.086 8.070 8.085 8.085h9.214l-8.073-8.083 8.073-8.073h-9.212zM18.892 1.004l-15.013 14.996 4.624 4.624 19.599-19.603h-9.194z" })
                        ]))
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "text-gray-300 mt-2" }, "Flutter 4")
                  ])
                ]),
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("div", { class: "text-center" }, [
                    createVNode(AppLogo, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50",
                          viewBox: "0 0 34 34",
                          "stroke-width": "1",
                          stroke: "currentColor",
                          fill: "none",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }, [
                          createVNode("path", { d: "M30.865 3.448l-6.583-3.167c-0.766-0.37-1.677-0.214-2.276 0.385l-12.609 11.505-5.495-4.167c-0.51-0.391-1.229-0.359-1.703 0.073l-1.76 1.604c-0.583 0.526-0.583 1.443-0.005 1.969l4.766 4.349-4.766 4.349c-0.578 0.526-0.578 1.443 0.005 1.969l1.76 1.604c0.479 0.432 1.193 0.464 1.703 0.073l5.495-4.172 12.615 11.51c0.594 0.599 1.505 0.755 2.271 0.385l6.589-3.172c0.693-0.333 1.13-1.031 1.13-1.802v-21.495c0-0.766-0.443-1.469-1.135-1.802zM24.005 23.266l-9.573-7.266 9.573-7.266z" })
                        ]))
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "text-gray-300 mt-2" }, "VS Code")
                  ])
                ]),
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("div", { class: "text-center" }, [
                    createVNode(AppLogo, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-12 w-12 hover:scale-125 duration-300 text-[#A0A0A0] group-hover text-primary:dark:text-white/50",
                          viewBox: "0 0 24 24",
                          "stroke-width": "1",
                          stroke: "currentColor",
                          fill: "none",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }, [
                          createVNode("path", {
                            d: "M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15",
                            stroke: "#A0A0A0",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "text-gray-300 mt-2" }, "Figma")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { class: "lg:row-start-3 lg:col-span-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mb-6"${_scopeId}> Web Projects </p><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(projects.value, (row) => {
              _push2(`<a${ssrRenderAttr("href", row.href)} class="grid justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(AppProject, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", row.image)}${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: row.image
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="flex justify-center"${_scopeId}><p class="text-gray-300 mt-2"${_scopeId}>${ssrInterpolate(row.title)}</p></div></a>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("p", { class: "ext-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mb-6" }, " Web Projects "),
              createVNode("div", { class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(projects.value, (row) => {
                  return openBlock(), createBlock("a", {
                    key: row.id,
                    href: row.href,
                    class: "grid justify-center"
                  }, [
                    createVNode(AppProject, null, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: row.image
                        }, null, 8, ["src"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("div", { class: "flex justify-center" }, [
                      createVNode("p", { class: "text-gray-300 mt-2" }, toDisplayString(row.title), 1)
                    ])
                  ], 8, ["href"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { class: "lg:row-span-2 overflow-hidden duration-300" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`. <!--[-->`);
            ssrRenderList(posts.value, (row) => {
              _push2(`<div class="mb-6"${_scopeId}><div class="relative flex items-center gap-x-4"${_scopeId}><img${ssrRenderAttr("src", row.avatar)}${ssrRenderAttr("alt", `${row.name} avatar or profile picture`)} class="h-10 w-10 rounded-full ring-1 dark:ring-white/10 ring-primary/5"${_scopeId}><div class="text-sm leading-6"${_scopeId}><p class="font-semibold text-primary dark:text-white"${_scopeId}><a href="#" class="truncate text-ellipsis"${_scopeId}><span class="absolute inset-0"${_scopeId}></span> ${ssrInterpolate(row.name)}</a></p><p class="text-zinc-500 dark:text-zinc-400"${_scopeId}>${ssrInterpolate(row.role)} * ${ssrInterpolate(unref(moment)(row.created_at).fromNow(true))}</p></div></div><p class="mt-4 text-zinc-500 dark:text-zinc-400 line-clamp-3"${_scopeId}>${ssrInterpolate(row.content)}</p><hr class="mt-4 border-gray-600"${_scopeId}></div>`);
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(AppButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center"${_scopeId2}> More Posts... </div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center" }, " More Posts... ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(". "),
              (openBlock(true), createBlock(Fragment, null, renderList(posts.value, (row) => {
                return openBlock(), createBlock("div", {
                  key: row.id,
                  class: "mb-6"
                }, [
                  createVNode("div", { class: "relative flex items-center gap-x-4" }, [
                    createVNode("img", {
                      src: row.avatar,
                      alt: `${row.name} avatar or profile picture`,
                      class: "h-10 w-10 rounded-full ring-1 dark:ring-white/10 ring-primary/5"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "text-sm leading-6" }, [
                      createVNode("p", { class: "font-semibold text-primary dark:text-white" }, [
                        createVNode("a", {
                          href: "#",
                          class: "truncate text-ellipsis"
                        }, [
                          createVNode("span", { class: "absolute inset-0" }),
                          createTextVNode(" " + toDisplayString(row.name), 1)
                        ])
                      ]),
                      createVNode("p", { class: "text-zinc-500 dark:text-zinc-400" }, toDisplayString(row.role) + " * " + toDisplayString(unref(moment)(row.created_at).fromNow(true)), 1)
                    ])
                  ]),
                  createVNode("p", { class: "mt-4 text-zinc-500 dark:text-zinc-400 line-clamp-3" }, toDisplayString(row.content), 1),
                  createVNode("hr", { class: "mt-4 border-gray-600" })
                ]);
              }), 128)),
              createVNode(AppButton, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-center" }, " More Posts... ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { class: "flex flex-col h-full justify-center items-center overflow-hidden relative lg:col-span-2 lg:row-start-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative p-8 text-center w-full"${_scopeId}><p class="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl"${_scopeId}> Subscribe <span class="lg:block"${_scopeId}>to my newsletter</span></p><form class="mt-6 sm:flex w-full lg:max-w-sm mx-auto"${_scopeId}><label for="email-address" class="sr-only"${_scopeId}>Email address</label><input type="email" name="email-address" id="email-address" autocomplete="email" required class="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter your email"${_scopeId}><div class="mt-4 sm:ml-2 sm:mt-0 sm:flex-shrink-0"${_scopeId}><button type="submit" class="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"${_scopeId}>Subscribe</button></div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "relative p-8 text-center w-full" }, [
                createVNode("p", { class: "text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl" }, [
                  createTextVNode(" Subscribe "),
                  createVNode("span", { class: "lg:block" }, "to my newsletter")
                ]),
                createVNode("form", { class: "mt-6 sm:flex w-full lg:max-w-sm mx-auto" }, [
                  createVNode("label", {
                    for: "email-address",
                    class: "sr-only"
                  }, "Email address"),
                  createVNode("input", {
                    type: "email",
                    name: "email-address",
                    id: "email-address",
                    autocomplete: "email",
                    required: "",
                    class: "block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm",
                    placeholder: "Enter your email"
                  }),
                  createVNode("div", { class: "mt-4 sm:ml-2 sm:mt-0 sm:flex-shrink-0" }, [
                    createVNode("button", {
                      type: "submit",
                      class: "text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
                    }, "Subscribe")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { class: "lg:row-start-4 h-full flex flex-col justify-between" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl"${_scopeId}> Testimonials </p><div class="md:grid md:grid-cols-2 gap-6 lg:grid-cols-1"${_scopeId}><div class="mt-4"${_scopeId}><p class="text-sm text-pink-500 dark:text-pink-400"${_scopeId}> &quot;Big fan of your themes. They&#39;re well-organized, look clean, and are fast.&quot; </p><p class="text-xs mt-2 text-zinc-500"${_scopeId}><span class="block text-xs"${_scopeId}>Kevin Focke</span><span class="block text-xs"${_scopeId}> Developer</span></p></div><div class="mt-4"${_scopeId}><p class="text-sm text-orange-500 dark:text-orange-300"${_scopeId}> &quot;Amazing resource using @astrodotbuild and @tailwindcss! I got it a week ago and have found the contents really useful. 5/5 </p><p class="text-xs mt-2 text-zinc-500"${_scopeId}><span class="block text-xs"${_scopeId}>Alonso</span><span class="block text-xs"${_scopeId}> Entrepreneur</span></p></div></div>`);
          } else {
            return [
              createVNode("p", { class: "text-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl" }, " Testimonials "),
              createVNode("div", { class: "md:grid md:grid-cols-2 gap-6 lg:grid-cols-1" }, [
                createVNode("div", { class: "mt-4" }, [
                  createVNode("p", { class: "text-sm text-pink-500 dark:text-pink-400" }, ` "Big fan of your themes. They're well-organized, look clean, and are fast." `),
                  createVNode("p", { class: "text-xs mt-2 text-zinc-500" }, [
                    createVNode("span", { class: "block text-xs" }, "Kevin Focke"),
                    createVNode("span", { class: "block text-xs" }, " Developer")
                  ])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode("p", { class: "text-sm text-orange-500 dark:text-orange-300" }, ' "Amazing resource using @astrodotbuild and @tailwindcss! I got it a week ago and have found the contents really useful. 5/5 '),
                  createVNode("p", { class: "text-xs mt-2 text-zinc-500" }, [
                    createVNode("span", { class: "block text-xs" }, "Alonso"),
                    createVNode("span", { class: "block text-xs" }, " Entrepreneur")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { class: "lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-xl tracking-tight font-medium text-primary dark:text-white md:text-3xl"${_scopeId}> As a digital designer, my expertise lies in crafting distinctive visual identities for digital products. <br${_scopeId}><br${_scopeId}> I hold the belief that an engaging design begins with shared values, transparent communication, and a genuine respect for the audience. </p><p class="text-primary dark:text-white mt-4"${_scopeId}>Michael Andreuzza</p>`);
          } else {
            return [
              createVNode("p", { class: "text-xl tracking-tight font-medium text-primary dark:text-white md:text-3xl" }, [
                createTextVNode(" As a digital designer, my expertise lies in crafting distinctive visual identities for digital products. "),
                createVNode("br"),
                createVNode("br"),
                createTextVNode(" I hold the belief that an engaging design begins with shared values, transparent communication, and a genuine respect for the audience. ")
              ]),
              createVNode("p", { class: "text-primary dark:text-white mt-4" }, "Michael Andreuzza")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
