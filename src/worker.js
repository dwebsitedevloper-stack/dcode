// src/worker.js
export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);

      if (url.pathname.startsWith("/api")) return fetch(request);

      if (!env || !env.ASSETS) {
        console.error("env.ASSETS is undefined");
        return new Response("Server misconfiguration: assets binding missing", { status: 500 });
      }

      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) return assetResponse;

      return env.ASSETS.fetch(new Request("/index.html", request));
    } catch (err) {
      console.error("Worker exception:", err);
      return new Response("Internal Server Error", { status: 500 });
    }
  }
};
