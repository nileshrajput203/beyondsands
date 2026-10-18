import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;
let pendingHash: string | null = null;

export function registerLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

export function setPendingHash(id: string) {
  pendingHash = id;
}

export function consumePendingHash(): string | null {
  const id = pendingHash;
  pendingHash = null;
  return id;
}

export function scrollToSection(id: string): boolean {
  const el = document.getElementById(id);
  if (!el) return false;

  const top = el.getBoundingClientRect().top + window.scrollY - 88;

  if (lenisInstance) {
    lenisInstance.scrollTo(top, { duration: 1.2 });
  } else {
    window.scrollTo({ top, behavior: "smooth" });
  }
  return true;
}

export function scrollToY(top: number, duration = 1.2): void {
  if (lenisInstance) {
    lenisInstance.scrollTo(top, { duration });
  } else {
    window.scrollTo({ top, behavior: "smooth" });
  }
}
