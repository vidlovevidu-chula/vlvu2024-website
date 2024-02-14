export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/event_AltUL-Te.mjs').then(n => n.e);

export { page };
