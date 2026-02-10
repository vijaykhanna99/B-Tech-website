/** @type {import('next').NextConfig} */
const nextConfig = {
    // --- Security: Hide framework fingerprint ---
    poweredByHeader: false,

    // --- Security: Disable source maps in production to prevent code exposure ---
    productionBrowserSourceMaps: false,

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
            {
                protocol: 'https',
                hostname: '*.iisc.ac.in',
            },
            {
                protocol: 'https',
                hostname: 'iisc.ac.in',
            }
        ],
    },

    async headers() {
        return [
            // ========================================
            // Global security headers for ALL routes
            // ========================================
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    // HSTS: force HTTPS for 2 years, include subdomains, allow preload list
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    // Legacy XSS protection for older browsers
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    // Prevent clickjacking — only allow framing from same origin
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    // Prevent MIME-type sniffing attacks
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    // Block cross-domain policies (Flash/Acrobat)
                    {
                        key: 'X-Permitted-Cross-Domain-Policies',
                        value: 'none'
                    },
                    // Control referrer information leakage
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    // Cross-Origin-Opener-Policy: prevent cross-origin window references
                    {
                        key: 'Cross-Origin-Opener-Policy',
                        value: 'same-origin-allow-popups'
                    },
                    // Cross-Origin-Resource-Policy: prevent unauthorized resource embedding
                    {
                        key: 'Cross-Origin-Resource-Policy',
                        value: 'same-origin'
                    },
                    // Content Security Policy — explicitly allows YouTube iframes
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-inline' https://*.google.com https://*.gstatic.com https://*.youtube.com https://www.youtube-nocookie.com",
                            "style-src 'self' 'unsafe-inline' https://*.googleapis.com",
                            "img-src 'self' data: https: blob:",
                            "font-src 'self' data: https://*.gstatic.com https://*.googleapis.com",
                            "frame-src 'self' https://www.youtube.com https://*.youtube.com https://www.youtube-nocookie.com https://*.google.com",
                            "connect-src 'self' https://*.google.com https://*.googleapis.com https://*.google-analytics.com",
                            "media-src 'self' https://*.youtube.com https://www.youtube-nocookie.com",
                            "object-src 'none'",
                            "base-uri 'self'",
                            "form-action 'self'",
                            "frame-ancestors 'self'",
                            "upgrade-insecure-requests",
                            "block-all-mixed-content"
                        ].join('; ') + ';'
                    },
                    // Permissions Policy: disable unnecessary browser features + FLoC opt-out
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=(), usb=(), magnetometer=(), accelerometer=(), gyroscope=(), display-capture=(), interest-cohort=()'
                    }
                ]
            },
            // ========================================
            // Cache-Control for static assets
            // ========================================
            {
                source: '/assets/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    }
                ]
            },
            {
                source: '/images/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;

