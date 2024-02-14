import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_P1FSB7eQ.mjs';

const _page0  = () => import('./chunks/generic_wLl_W93D.mjs');
const _page1  = () => import('./chunks/index_fdyelypn.mjs');
const _page2  = () => import('./chunks/register_8d-6mcB6.mjs');
const _page3  = () => import('./chunks/relation_F7b2AAPw.mjs');
const _page4  = () => import('./chunks/profile_kel6jjU6.mjs');
const _page5  = () => import('./chunks/ticket_D-aRUPMp.mjs');
const _page6  = () => import('./chunks/event_lV0aDk-w.mjs');
const _page7  = () => import('./chunks/_id__LgEstgdS.mjs');
const _page8  = () => import('./chunks/party_2x6n_7wt.mjs');
const _page9  = () => import('./chunks/main_AL_msmzl.mjs');
const _page10  = () => import('./chunks/mbti_tg6puP9f.mjs');
const _page11  = () => import('./chunks/method_8Bxv4yM3.mjs');
const _page12  = () => import('./chunks/characters_A3nOFX0E.mjs');
const _page13  = () => import('./chunks/callback_rKjtHfKb.mjs');
const _page14  = () => import('./chunks/callback_R7HPxytZ.mjs');
const _page15  = () => import('./chunks/_id__ZyKL6-B1.mjs');
const _page16  = () => import('./chunks/party_GAAuCaq0.mjs');
const _page17  = () => import('./chunks/callback_uEKbtTuJ.mjs');
const _page18  = () => import('./chunks/signout_aaH5HWd0.mjs');
const _page19  = () => import('./chunks/signin_4hLxlFdd.mjs');
const _page20  = () => import('./chunks/user_LH7AEPAK.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@4.1.2_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/register.astro", _page2],["src/pages/relation.astro", _page3],["src/pages/profile.astro", _page4],["src/pages/ticket.astro", _page5],["src/pages/event.astro", _page6],["src/pages/party/[party_name]/[id].astro", _page7],["src/pages/party.astro", _page8],["src/pages/main.astro", _page9],["src/pages/mbti.astro", _page10],["src/pages/api/method.json.ts", _page11],["src/pages/api/characters.ts", _page12],["src/pages/api/callback.ts", _page13],["src/pages/api/astro/callback.astro", _page14],["src/pages/api/party/join/[id].ts", _page15],["src/pages/api/party.ts", _page16],["src/pages/api/auth/callback.ts", _page17],["src/pages/api/auth/signout.ts", _page18],["src/pages/api/auth/signin.ts", _page19],["src/pages/api/user.ts", _page20]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"578591e6-a1e9-487e-9d14-dbc3f6fef753"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
