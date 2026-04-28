"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    const anchorClickHandlers: Array<{ el: Element; fn: (e: Event) => void }> = [];
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      const fn = function (this: HTMLAnchorElement, e: Event) {
        const href = this.getAttribute("href") || "";
        if (href === "#" || href.length < 2) return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const offset =
          target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: "smooth" });
      };
      anchor.addEventListener("click", fn as EventListener);
      anchorClickHandlers.push({ el: anchor, fn: fn as (e: Event) => void });
    });

    const revealElements = document.querySelectorAll(
      ".reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, .reveal-tag-1, .reveal-tag-2"
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -160px 0px" }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    const statNumbers = document.querySelectorAll(".stat-number[data-target]");

    function animateCounter(el: HTMLElement) {
      const target = parseInt(el.dataset.target || "0", 10);
      const duration = 1600;
      const start = performance.now();

      function tick(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = String(Math.round(ease * target));
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = String(target);
      }

      requestAnimationFrame(tick);
    }

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target as HTMLElement);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statNumbers.forEach((el) => counterObserver.observe(el));

    const track = document.getElementById("testimonialsTrack");
    const dotsWrap = document.getElementById("tDots");
    const prevBtn = document.getElementById("tPrev");
    const nextBtn = document.getElementById("tNext");

    let autoTimer: ReturnType<typeof setInterval> | undefined;
    let prevHandler: (() => void) | null = null;
    let nextHandler: (() => void) | null = null;
    let touchStartHandler: ((e: TouchEvent) => void) | null = null;
    let touchEndHandler: ((e: TouchEvent) => void) | null = null;
    let resizeHandler: (() => void) | null = null;

    if (track && dotsWrap && prevBtn && nextBtn) {
      const cards = track.querySelectorAll<HTMLElement>(".testimonial-card");
      let current = 0;
      let perView = getPerView();
      let maxIndex = Math.max(0, cards.length - perView);

      function getPerView() {
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 1100) return 2;
        return 3;
      }

      function buildDots() {
        if (!dotsWrap) return;
        dotsWrap.innerHTML = "";
        const total = maxIndex + 1;
        for (let i = 0; i < total; i++) {
          const dot = document.createElement("button");
          dot.className = "t-dot" + (i === current ? " active" : "");
          dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
          dot.addEventListener("click", () => goTo(i));
          dotsWrap.appendChild(dot);
        }
      }

      function goTo(index: number) {
        if (!track || !dotsWrap) return;
        current = Math.max(0, Math.min(index, maxIndex));
        track.style.transform = `translateX(-${cards[current].offsetLeft}px)`;
        dotsWrap.querySelectorAll(".t-dot").forEach((d, i) => {
          d.classList.toggle("active", i === current);
        });
      }

      function startAuto() {
        autoTimer = setInterval(() => {
          goTo(current >= maxIndex ? 0 : current + 1);
        }, 5000);
      }

      function stopAuto() {
        if (autoTimer) clearInterval(autoTimer);
      }

      prevHandler = () => {
        stopAuto();
        goTo(current - 1);
        startAuto();
      };
      nextHandler = () => {
        stopAuto();
        goTo(current >= maxIndex ? 0 : current + 1);
        startAuto();
      };
      prevBtn.addEventListener("click", prevHandler);
      nextBtn.addEventListener("click", nextHandler);

      let touchStartX = 0;
      touchStartHandler = (e: TouchEvent) => {
        touchStartX = e.touches[0].clientX;
        stopAuto();
      };
      touchEndHandler = (e: TouchEvent) => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
        startAuto();
      };
      track.addEventListener("touchstart", touchStartHandler, { passive: true });
      track.addEventListener("touchend", touchEndHandler);

      function init() {
        perView = getPerView();
        maxIndex = Math.max(0, cards.length - perView);
        current = Math.min(current, maxIndex);
        buildDots();
        goTo(current);
      }

      resizeHandler = init;
      window.addEventListener("resize", resizeHandler);
      init();
      startAuto();
    }

    const form = document.getElementById("contactForm") as HTMLFormElement | null;
    const successMsg = document.getElementById("formSuccess");
    const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement | null;

    const formFieldHandlers: Array<{
      el: Element;
      blur: (e: Event) => void;
      input: (e: Event) => void;
    }> = [];
    let submitHandler: ((e: Event) => void) | null = null;

    if (form && submitBtn && successMsg) {
      function validateField(input: HTMLInputElement | HTMLTextAreaElement) {
        const group = input.closest(".form-group");
        if (!group) return true;
        let valid = true;

        if (input.hasAttribute("required") && !input.value.trim()) {
          valid = false;
        } else if (input.type === "email" && input.value) {
          valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
        }

        group.classList.toggle("has-error", !valid);
        input.classList.toggle("error", !valid);
        return valid;
      }

      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        "input, textarea"
      ).forEach((field) => {
        const blur = () => validateField(field);
        const input = () => {
          if (field.classList.contains("error")) validateField(field);
        };
        field.addEventListener("blur", blur);
        field.addEventListener("input", input);
        formFieldHandlers.push({ el: field, blur, input });
      });

      submitHandler = async function (e: Event) {
        e.preventDefault();

        let allValid = true;
        form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
          "input[required], textarea[required]"
        ).forEach((field) => {
          if (!validateField(field)) allValid = false;
        });

        if (!allValid) {
          const firstError = form.querySelector<HTMLElement>(".error");
          if (firstError) firstError.focus();
          return;
        }

        submitBtn.classList.add("loading");
        submitBtn.disabled = true;

        try {
          const data = new FormData(form);
          const response = await fetch("https://formspree.io/f/xqewvgwa", {
            method: "POST",
            headers: { Accept: "application/json" },
            body: data,
          });

          if (response.ok) {
            successMsg.classList.add("visible");
            form.style.display = "none";
          } else {
            const json = await response.json().catch(() => ({}));
            const msg =
              (json.errors || [])
                .map((er: { message: string }) => er.message)
                .join(", ") || "Submission failed. Please try again.";
            throw new Error(msg);
          }
        } catch (err) {
          const message =
            err instanceof Error
              ? err.message
              : "Something went wrong. Please try again or call us directly.";
          alert(message);
        } finally {
          submitBtn.classList.remove("loading");
          submitBtn.disabled = false;
        }
      };
      form.addEventListener("submit", submitHandler);
    }

    const brandsWrap = document.getElementById("brandsWrap");
    const brandsTrack = document.getElementById("brandsTrack");

    let brandsMouseDown: ((e: MouseEvent) => void) | null = null;
    let brandsMouseMove: ((e: MouseEvent) => void) | null = null;
    let brandsMouseUp: (() => void) | null = null;
    let brandsTouchStart: ((e: TouchEvent) => void) | null = null;
    let brandsTouchMove: ((e: TouchEvent) => void) | null = null;
    let brandsTouchEnd: (() => void) | null = null;

    if (brandsWrap && brandsTrack) {
      const orig = brandsTrack.innerHTML;
      brandsTrack.innerHTML = orig + orig + orig + orig;

      let isDragging = false;
      let dragStartX = 0;
      let dragOriginX = 0;

      function getTrackX() {
        if (!brandsTrack) return 0;
        const mat = new DOMMatrix(getComputedStyle(brandsTrack).transform);
        return mat.m41;
      }

      function setTrackX(x: number) {
        if (!brandsTrack) return;
        const quarter = -brandsTrack.offsetWidth / 4;
        if (x < quarter) x -= quarter;
        if (x > 0) x += quarter;
        brandsTrack.style.transform = `translateX(${x}px)`;
      }

      function resumeAt(x: number) {
        if (!brandsTrack) return;
        const totalWidth = brandsTrack.offsetWidth / 4;
        const duration = 28;
        const progress = Math.abs(x) / totalWidth;
        const delay = -(progress * duration);
        brandsTrack.style.transform = "";
        brandsTrack.style.animation = `brandsMarquee ${duration}s linear ${delay}s infinite`;
      }

      brandsMouseDown = (e: MouseEvent) => {
        if (!brandsTrack || !brandsWrap) return;
        isDragging = true;
        dragStartX = e.pageX;
        dragOriginX = getTrackX();
        brandsTrack.style.animation = "none";
        brandsTrack.style.transform = `translateX(${dragOriginX}px)`;
        brandsWrap.classList.add("dragging");
        e.preventDefault();
      };

      brandsMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        const delta = e.pageX - dragStartX;
        setTrackX(dragOriginX + delta);
      };

      brandsMouseUp = () => {
        if (!isDragging || !brandsWrap) return;
        isDragging = false;
        brandsWrap.classList.remove("dragging");
        resumeAt(getTrackX());
      };

      brandsWrap.addEventListener("mousedown", brandsMouseDown);
      window.addEventListener("mousemove", brandsMouseMove);
      window.addEventListener("mouseup", brandsMouseUp);

      brandsTouchStart = (e: TouchEvent) => {
        if (!brandsTrack) return;
        isDragging = true;
        dragStartX = e.touches[0].pageX;
        dragOriginX = getTrackX();
        brandsTrack.style.animation = "none";
        brandsTrack.style.transform = `translateX(${dragOriginX}px)`;
      };

      brandsTouchMove = (e: TouchEvent) => {
        if (!isDragging) return;
        const delta = e.touches[0].pageX - dragStartX;
        setTrackX(dragOriginX + delta);
      };

      brandsTouchEnd = () => {
        if (!isDragging) return;
        isDragging = false;
        resumeAt(getTrackX());
      };

      brandsWrap.addEventListener("touchstart", brandsTouchStart, { passive: true });
      brandsWrap.addEventListener("touchmove", brandsTouchMove, { passive: true });
      brandsWrap.addEventListener("touchend", brandsTouchEnd);
    }

    const heroContent = document.querySelector<HTMLElement>(".hero-content");
    const heroBgImage = document.querySelector<HTMLElement>(".hero-bg-video");

    function heroParallax() {
      const scrollY = window.scrollY;
      if (scrollY > window.innerHeight) return;
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrollY * 0.18}px)`;
        heroContent.style.opacity = String(1 - scrollY / (window.innerHeight * 0.75));
      }
      if (heroBgImage) {
        heroBgImage.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    }

    window.addEventListener("scroll", heroParallax, { passive: true });

    return () => {
      window.removeEventListener("scroll", heroParallax);
      anchorClickHandlers.forEach(({ el, fn }) =>
        el.removeEventListener("click", fn as EventListener)
      );
      revealObserver.disconnect();
      counterObserver.disconnect();

      if (autoTimer) clearInterval(autoTimer);
      if (prevHandler && prevBtn) prevBtn.removeEventListener("click", prevHandler);
      if (nextHandler && nextBtn) nextBtn.removeEventListener("click", nextHandler);
      if (touchStartHandler && track) track.removeEventListener("touchstart", touchStartHandler);
      if (touchEndHandler && track) track.removeEventListener("touchend", touchEndHandler);
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);

      formFieldHandlers.forEach(({ el, blur, input }) => {
        el.removeEventListener("blur", blur);
        el.removeEventListener("input", input);
      });
      if (submitHandler && form) form.removeEventListener("submit", submitHandler);

      if (brandsWrap) {
        if (brandsMouseDown) brandsWrap.removeEventListener("mousedown", brandsMouseDown);
        if (brandsTouchStart) brandsWrap.removeEventListener("touchstart", brandsTouchStart);
        if (brandsTouchMove) brandsWrap.removeEventListener("touchmove", brandsTouchMove);
        if (brandsTouchEnd) brandsWrap.removeEventListener("touchend", brandsTouchEnd);
      }
      if (brandsMouseMove) window.removeEventListener("mousemove", brandsMouseMove);
      if (brandsMouseUp) window.removeEventListener("mouseup", brandsMouseUp);
    };
  }, []);

  return null;
}
