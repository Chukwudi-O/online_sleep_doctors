"use client"

export function connectObserver(target,handleIntersect,th){
    const observer = new IntersectionObserver(
        handleIntersect,
        {
          threshold: th, // Trigger when 10% of the element is visible
          rootMargin: '0px 0px -50px 0px'
        }
    );

    if (target.current) {
        observer.observe(target.current); // Start observing the target element
    }

    return observer;
}

