export const routes = {
  home: "/",

  // pages
  about: "/about",
  contacts: "/contacts",

  // main services pages
  restorationEcu: "/restoration-ecu",
  coding: "/coding",
  programming: "/programming",
  remoteCoding: "/remote-coding",
  chiptuning: "/chiptuning",
  retrofit: "/retrofit",

  // online services page
  tools: "/tools",

  // online services items
  ncd: "/tools/ncd",
  cbb: "/tools/cbb",
  aa1: "/tools/1aa",
  kds: "/tools/kds",
  fsc: "/tools/fsc",
  sfa: "/tools/sfa",
  token: "/tools/token",
  fa: "/tools/fa",

  // auth
  login: "/login",
  register: "/register",
  cabinet: "/cabinet",

  // legal
  offer: "/offer",
  privacyPolicy: "/privacy-policy",
} as const;