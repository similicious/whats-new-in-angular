# Whats new in Angular

## Deferrable views

- Angular v17
- https://angular.dev/guide/templates/defer

### Definition

- Deferrable views allow you to defer loading parts of the template to a later time
- Wrap deferrable content in a `@defer {}` block
- [Define](https://angular.dev/guide/templates/defer#controlling-deferred-content-loading-with-triggers) a trigger with `on()`
- Placeholder

### Why is this useful

- Performance optimisation which aims to reduce the initial bundle size

- All JavaScript needed for the page has to be downloaded, parsed and executed
- Takes time and impacts the percieved performance
- Deferrable views allow to priotise crucial content and render secondary content later

### [Demo](http://localhost:4200/)

- [Part01DeferredViewsComponent](../src/app/components/part-01-deferred-views/part-01-deferred-views.component.html)

### Where could we use this in web

- [ProductDetailComponent](../../../../repos/web/apps/blue-angular/src/app/product-detail/component/product-detail/product-detail.component.html)
- [BarcodeScannerModalComponent](../../../../repos/web/apps/green-angular/src/app/shared/component/barcode-scanner-modal/barcode-scanner-modal.component.html)

### Limitations

- Standalone
- Dependencies must not be referenced outside the `@defer` block
  - Demo of this

## SSR & SSG

### Definition

#### SSR

https://angular.dev/guide/ssr
https://angular.dev/guide/prerendering

- Quick recap of SPAs and client side rendering
  - SPA = Single Page Application, Server returns a single blank page with a lot of javascript. All rendering happens in the browser.
  - Traditionally, SPAs are rendered on the client
  - JavaScript is transfered to the browser and then creates elements in the DOM
  - Show what a compiled Angular component looks like
- Server Side Rendering (SSR) runs the Angular app on the server
- On request the server renders the page aka produces html & styles
- Page is transferred with styles to the client and rendered

#### Advantages

- Performance
  - Fully rendered page is delivered to the client
  - Browser can show the app even before JS is downloaded
- SEO
  - Easier for bots to crawl

#### Demo

- Show [Server code](../src/server.ts)
- Show difference between
  - [SSR rendered page](http://localhost:4200/ssr)
  - [Clinent rendered page](http://localhost:4200/ssr/no)
- [RenderMode](../src/app/app.routes.server.ts) is new in Angular

- On rebuy.de
  - [PDP](https://www.rebuy.de/i,13288153/tablets-und-ebook-reader/apple-ipad-10-9-64gb-wi-fi-modell-2022-blau) are rendered on the server
  - [Cart is renderd on the client only](https://www.rebuy.de/checkout/cart)

#### Hydration

- Instead of replacing the DOM, bring it back to life by
  - Initialising components
  - Performaing
  - Show event replay

## (Incremental) Hydration

### Definition

## Command-line environment variable declaration

ng build –define “...”
