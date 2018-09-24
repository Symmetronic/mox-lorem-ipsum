# mox-lorem-ipsum

Web component to create paragraphs containing blind text.

Simply add the component to your website by including it in the `head` of your html file:

```html
<script src="node_modules/mox-lorem-ipsum/dist/mox-lorem-ipsum.js"></script>
```

Then you can use this component in the `body` as follows:

```html
<!-- Displays one paragraph of lorem ipsum. -->
<mox-lorem-ipsum></mox-lorem-ipsum>
```

## API

The API is very minimal. You can specify the number of lorem ipsum paragraphs you want to display using the `count` attribute.

```html
<!-- Displays three paragraphs of lorem ipsum. -->
<mox-lorem-ipsum count="3"></mox-lorem-ipsum>
```

## Development

Start the development server:

```
npm start
```

Run all tests:

```
npm test
```

Run only tests related to changed files since the last commit:

```
npm run test.watch
```

Build for production:

```
npm run build
```

## Dependencies

Build with [stencil](https://stenciljs.com).

## License

Released under the [MIT license](LICENSE).
