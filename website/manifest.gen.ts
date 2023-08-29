// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $0 from "./functions/requestToParam.ts";
import * as $$$0 from "./loaders/image.ts";
import * as $$$1 from "./loaders/redirectsFromCsv.ts";
import * as $$$2 from "./loaders/extension.ts";
import * as $$$3 from "./loaders/secret.ts";
import * as $$$4 from "./loaders/pages.ts";
import * as $$$5 from "./loaders/asset.ts";
import * as $$$6 from "./loaders/fonts/local.ts";
import * as $$$7 from "./loaders/fonts/googleFonts.ts";
import * as $$$$0 from "./handlers/router.ts";
import * as $$$$1 from "./handlers/sitemap.ts";
import * as $$$$2 from "./handlers/proxy.ts";
import * as $$$$3 from "./handlers/fresh.ts";
import * as $$$$4 from "./handlers/redirect.ts";
import * as $$$$$0 from "./pages/Page.tsx";
import * as $$$$$$0 from "./sections/Seo/Seo.tsx";
import * as $$$$$$$0 from "./matchers/date.ts";
import * as $$$$$$$1 from "./matchers/environment.ts";
import * as $$$$$$$2 from "./matchers/site.ts";
import * as $$$$$$$3 from "./matchers/location.ts";
import * as $$$$$$$4 from "./matchers/random.ts";
import * as $$$$$$$5 from "./matchers/multi.ts";
import * as $$$$$$$6 from "./matchers/cron.ts";
import * as $$$$$$$7 from "./matchers/device.ts";
import * as $$$$$$$8 from "./matchers/host.ts";
import * as $$$$$$$9 from "./matchers/always.ts";
import * as $$$$$$$10 from "./matchers/userAgent.ts";
import * as $$$$$$$$0 from "./flags/audience.ts";
import * as $$$$$$$$1 from "./flags/multivariate.ts";
import * as $$$$$$$$2 from "./flags/everyone.ts";
import * as $$$$$$$$3 from "./flags/flag.ts";
import * as $$$$$$$$$0 from "./actions/secrets/encrypt.ts";

const manifest = {
  "functions": {
    "website/functions/requestToParam.ts": $0,
  },
  "loaders": {
    "website/loaders/asset.ts": $$$5,
    "website/loaders/extension.ts": $$$2,
    "website/loaders/fonts/googleFonts.ts": $$$7,
    "website/loaders/fonts/local.ts": $$$6,
    "website/loaders/image.ts": $$$0,
    "website/loaders/pages.ts": $$$4,
    "website/loaders/redirectsFromCsv.ts": $$$1,
    "website/loaders/secret.ts": $$$3,
  },
  "handlers": {
    "website/handlers/fresh.ts": $$$$3,
    "website/handlers/proxy.ts": $$$$2,
    "website/handlers/redirect.ts": $$$$4,
    "website/handlers/router.ts": $$$$0,
    "website/handlers/sitemap.ts": $$$$1,
  },
  "pages": {
    "website/pages/Page.tsx": $$$$$0,
  },
  "sections": {
    "website/sections/Seo/Seo.tsx": $$$$$$0,
  },
  "matchers": {
    "website/matchers/always.ts": $$$$$$$9,
    "website/matchers/cron.ts": $$$$$$$6,
    "website/matchers/date.ts": $$$$$$$0,
    "website/matchers/device.ts": $$$$$$$7,
    "website/matchers/environment.ts": $$$$$$$1,
    "website/matchers/host.ts": $$$$$$$8,
    "website/matchers/location.ts": $$$$$$$3,
    "website/matchers/multi.ts": $$$$$$$5,
    "website/matchers/random.ts": $$$$$$$4,
    "website/matchers/site.ts": $$$$$$$2,
    "website/matchers/userAgent.ts": $$$$$$$10,
  },
  "flags": {
    "website/flags/audience.ts": $$$$$$$$0,
    "website/flags/everyone.ts": $$$$$$$$2,
    "website/flags/flag.ts": $$$$$$$$3,
    "website/flags/multivariate.ts": $$$$$$$$1,
  },
  "actions": {
    "website/actions/secrets/encrypt.ts": $$$$$$$$$0,
  },
  "name": "website",
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest;
