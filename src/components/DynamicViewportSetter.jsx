'use client';

import { useEffect } from 'react';

export default function DynamicViewportSetter() {
    useEffect(() => {
        console.log('here')

        const width = window.outerWidth;
        let content = '';
        console.log(width)
        if (width < 768) {
            content = 'width=device-width, initial-scale=1';
        } else if (width < 1440) {
            content = 'width=1440';
        } else {
            content = 'width=device-width, initial-scale=1';
        }

        let viewportTag = document.querySelector('meta[name="viewport"]');
        if (!viewportTag) {
            viewportTag = document.createElement('meta');
            viewportTag.name = 'viewport';
            document.head.appendChild(viewportTag);
        }
        viewportTag.setAttribute('content', content);
    }, []);

    return null;
}
