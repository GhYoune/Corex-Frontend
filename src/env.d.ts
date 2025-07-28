/// <reference types="vite/client" />

// Vue module declarations
declare module "*.vue" {
 import type { DefineComponent } from "vue";
 const component: DefineComponent<{}, {}, any>;
 export default component;
}

// Vuetify module declarations
declare module "vuetify/components" {
 import type { ComponentOptions } from "vue";
 const components: Record<string, ComponentOptions>;
 export = components;
}

declare module "vuetify/directives" {
 import type { DirectiveOptions } from "vue";
 const directives: Record<string, DirectiveOptions>;
 export = directives;
}
