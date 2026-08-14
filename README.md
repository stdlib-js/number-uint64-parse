<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# parseUint64

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Parse a string representation of a 64-bit unsigned integer.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import parseUint64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint64-parse@deno/mod.js';
```

#### parseUint64( str\[, radix] )

Parses a string representation of a 64-bit unsigned integer.

```javascript
var a = parseUint64( '1234' );
// returns <Uint64>[ 1234n ]

a = parseUint64( '0xffffffffffffffff' );
// returns <Uint64>[ 18446744073709551615n ]

a = parseUint64( '123abcxyz', 36 );
// returns <Uint64>[ 2984992324091n ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The input string must be a valid representation of a 64-bit unsigned integer.
-   If the provided string is malformed (e.g., contains invalid characters or is incomplete), the function throws a `SyntaxError`.
-   If the provided string represents a value greater than `2^64-1` or the radix is not an integer on the interval `[2, 36]`, the function throws a `RangeError`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import Uint64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint64-ctor@deno/mod.js';
import parseUint64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint64-parse@deno/mod.js';

var a = parseUint64( '9876543210' );
console.log( 'value: %s', a );
// => 'value: 9876543210'

a = parseUint64( '0xdeadbeef0badf00d' );
console.log( 'value: %s', a );
// => 'value: 16045690981293355021'

a = parseUint64( 'ilovestdlib', 36 );
console.log( 'value: %s', a );
// => 'value: 68013779155385123'

console.log( a instanceof Uint64 );
// => true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-uint64-parse.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-uint64-parse

[test-image]: https://github.com/stdlib-js/number-uint64-parse/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/number-uint64-parse/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-uint64-parse/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-uint64-parse?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-uint64-parse.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-uint64-parse/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-uint64-parse/tree/deno
[deno-readme]: https://github.com/stdlib-js/number-uint64-parse/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/number-uint64-parse/tree/umd
[umd-readme]: https://github.com/stdlib-js/number-uint64-parse/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/number-uint64-parse/tree/esm
[esm-readme]: https://github.com/stdlib-js/number-uint64-parse/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/number-uint64-parse/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-uint64-parse/main/LICENSE

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
