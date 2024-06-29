import { defineNuxtPlugin, useNuxtApp } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const myDirective = {
    beforeMount(el) {
      el.style.opacity = '0';
      el.style.transition = 'opacity 1s ease-in-out';
      console.log("Initial styles set: opacity 0, transition added");
    },
    mounted(el) {
      console.log("Element mounted with initial opacity:", el.style.opacity);

      const handleVisibilityChange = (entries) => {
        entries.forEach(entry => {
          el.style.opacity = entry.isIntersecting ? '1' : '0';
          console.log(`IntersectionObserver triggered: Entry is ${entry.isIntersecting ? 'intersecting' : 'not intersecting'} - Opacity set to ${el.style.opacity}`);
        });
      };

      const observer = new IntersectionObserver(handleVisibilityChange, {
        threshold: 0.1
      });

      observer.observe(el);
      console.log("IntersectionObserver has been set up for the element.");

      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0 && rect.right >= 0 && rect.left < window.innerWidth;
      console.log("Immediate visibility check - Element is initially", isVisible ? "visible" : "not visible");

      handleVisibilityChange([{ isIntersecting: isVisible }]);

      el.__cleanup = () => {
        observer.disconnect();
        console.log("Observer disconnected");
      };
    },
    unmounted(el) {
      if (el.__cleanup) {
        el.__cleanup();
        console.log("Cleanup function called, observer disconnected");
      }
    },
    getSSRProps(binding) {
      return {
        style: `opacity: ${binding.value ? '1' : '0'}; transition: opacity 1s ease-in-out;`
      };
    }
  };

  nuxtApp.vueApp.directive('observe', myDirective);
});
