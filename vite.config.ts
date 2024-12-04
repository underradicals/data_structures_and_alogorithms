/// <reference types="vite/client" />
/// <reference types="vitest" />

import { ConfigEnv, CSSOptions, defineConfig, PluginOption, ServerOptions, UserConfig } from "vite";
import { InlineConfig } from "vitest/node";

const ServerOptionProps: ServerOptions = {
    port: 3000,
    host: "127.0.0.1",
};

const CSSDevOptionProps: CSSOptions = {
    postcss: {
        plugins: [],
    },
    modules: {
        localsConvention: "camelCaseOnly",
        exportGlobals: true,
    },
}

const CSSOptionProps: CSSOptions = {
    postcss: {
        plugins: [],
    },
    modules: {
        localsConvention: "camelCaseOnly",
        exportGlobals: true,
    },
}

const VitestConfig: InlineConfig = {
    environment: 'node',
    globals: true,
    coverage: {
        reporter: ['json', 'html'],
        provider: "v8"
    }
}

const VitePluginArray: PluginOption[] | undefined = []

function UserConfigFunction({ command }: ConfigEnv): UserConfig {
    if (command === "serve") {
        return {
            server: ServerOptionProps,
            css: CSSDevOptionProps,
            plugins: VitePluginArray,
            test: VitestConfig
        };
    } else {
        return {
            server: ServerOptionProps,
            css: CSSOptionProps,
            plugins: VitePluginArray,
        };
    }
}

/** @type {import('vite').UserConfig} */
export default defineConfig(UserConfigFunction);
