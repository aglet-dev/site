# corelet-site

Project home page served at https://corelet.agentsan.app

Hosted via Cloudflare Pages (same pattern as `registry.agentsan.app` from
`corelet-registry`).

## Deploy

1. Create a new repo on GitHub: `agent-rt/corelet-site`
2. Push this directory
3. In Cloudflare Pages dashboard: create a new project, connect to the repo,
   no build command needed (static site)
4. In custom domains, add `corelet.agentsan.app`
5. Cloudflare DNS panel auto-creates the CNAME

## Update

Just edit `index.html` and push. Cloudflare Pages redeploys in ~30 seconds.

The page intentionally has zero JS / zero build step — single file static HTML
with embedded CSS, light/dark aware via `prefers-color-scheme`.
