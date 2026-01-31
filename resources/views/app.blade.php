<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'T2R Soluções Tecnológicas') }}</title>

        <link rel="icon" href="/favicon-180x180.png" sizes="180x180">
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32">
        {{-- <link rel="icon" href="/favicon.svg" type="image/svg+xml"> --}}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <meta property="og:type" content="website">
        <meta property="og:title" content="T2R Soluções Tecnológicas">
        <meta property="og:description" content="A T2R é uma empresa de tecnologia que desenvolve soluções em áreas do conhecimento como Cartografia, Geodésia por Satélites, Fotogrametria, Ciência da Computação e Eletrônica.">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:site_name" content="T2R Soluções Tecnológicas">
        <meta property="og:image" content="/t2r-thumb.png">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content='T2R Soluções Tecnológicas' >
        <meta name="twitter:description" content="A T2R é uma empresa de tecnologia que desenvolve soluções em áreas do conhecimento como Cartografia, Geodésia por Satélites, Fotogrametria, Ciência da Computação e Eletrônica.">
        <meta name="twitter:image" content="{{ asset('assets/images/placeholder-social.webp') }}">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">


        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
