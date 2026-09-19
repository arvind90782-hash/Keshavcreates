// Built using Hyperiux Vault: https://vault.hyperiux.com

"use client";

import { useEffect, useRef, useState, type ComponentPropsWithoutRef, type CSSProperties, type PointerEvent } from "react";
import { ArrowRight } from "lucide-react";

const DEFAULT_HREF = "#";
const COMPACT_LAYOUT_BREAKPOINT = 1280;
const ANIMATION_DURATION_MS = 450;

export interface ArrowFillButtonOwnProps {
  btnText?: string;
  href?: string;
  className?: string;
  bgColor?: string;
  textColor?: string;
  fillBgColor?: string;
  fillTextColor?: string;
  hoverFillBgColor?: string;
  hoverFillTextColor?: string;
  arrowColor?: string;
  hoverArrowColor?: string;
  animationDuration?: number;
  fillOnHover?: boolean;
  size?: "default" | "xs" | "sm" | "md" | "lg" | "fluid" | "full";
  icon?: React.ReactNode;
}

export type ArrowFillButtonProps = ArrowFillButtonOwnProps & Omit<ComponentPropsWithoutRef<'a'>, keyof ArrowFillButtonOwnProps>;

function ArrowFillButton({
  btnText="Hover Me",
  href = DEFAULT_HREF,
  className = "",

  bgColor = "#ff5f00",
  textColor = "#ffffff",

  fillBgColor = "#ffffff",
  fillTextColor = "#ff5f00",

  hoverFillBgColor = "#ffffff",
  hoverFillTextColor = "#ff5f00",

  arrowColor,
  hoverArrowColor,

  size = "md",
  icon,

  ...props
}: ArrowFillButtonProps) {
  const [isReady, setIsReady] = useState(false);
  const [isCompactLayout, setIsCompactLayout] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const releaseTimeoutRef = useRef<number | null>(null);

  const usesUtilityBackground =
    className.includes("bg-") ||
    className.includes("from-") ||
    className.includes("via-") ||
    className.includes("to-");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${COMPACT_LAYOUT_BREAKPOINT - 1}px)`
    );

    const syncCompactLayout = (event: MediaQueryList | MediaQueryListEvent) => {
      const matches = "matches" in event ? event.matches : ((event as any).currentTarget as MediaQueryList).matches;
      setIsCompactLayout(matches);

      if (!matches) {
        setIsPressed(false);
      }
    };

    syncCompactLayout(mediaQuery);
    mediaQuery.addEventListener("change", syncCompactLayout);

    return () => {
      mediaQuery.removeEventListener("change", syncCompactLayout);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (releaseTimeoutRef.current) {
        window.clearTimeout(releaseTimeoutRef.current);
      }
    };
  }, []);

  const clearPressedState = () => {
    if (releaseTimeoutRef.current) {
      window.clearTimeout(releaseTimeoutRef.current);
    }

    releaseTimeoutRef.current = window.setTimeout(() => {
      setIsPressed(false);
      releaseTimeoutRef.current = null;
    }, ANIMATION_DURATION_MS);
  };

  const handlePointerDown = (event: PointerEvent<HTMLAnchorElement>) => {
    props.onPointerDown?.(event);

    if (!isCompactLayout || event.pointerType === "mouse") {
      return;
    }

    if (releaseTimeoutRef.current) {
      window.clearTimeout(releaseTimeoutRef.current);
      releaseTimeoutRef.current = null;
    }

    setIsPressed(true);
  };

  const handlePointerUp = (event: PointerEvent<HTMLAnchorElement>) => {
    props.onPointerUp?.(event);

    if (!isCompactLayout || event.pointerType === "mouse") {
      return;
    }

    clearPressedState();
  };

  const handlePointerCancel = (event: PointerEvent<HTMLAnchorElement>) => {
    props.onPointerCancel?.(event);

    if (!isCompactLayout || event.pointerType === "mouse") {
      return;
    }

    clearPressedState();
  };

  // Dimensions configuration according to standard button sizes
  const sizeClasses = {
    // xs: ultra compact for mobile grids
    xs: "h-8 sm:h-9 px-3 pr-8 text-[11px] sm:text-xs font-bold [--icon-circle:20px] [--icon-right:4px] [--icon-size:11px]",
    // sm: height ~40px, text-sm, for navbar / compact buttons
    sm: "h-9 sm:h-10 px-4 sm:px-5 pr-9 sm:pr-11 text-xs sm:text-sm font-semibold [--icon-circle:24px] sm:[--icon-circle:26px] [--icon-right:5px] sm:[--icon-right:6px] [--icon-size:13px] sm:[--icon-size:14px]",
    // md: standard px-8 py-4 / h-[54px] - matching original button sizes
    md: "h-11 sm:h-[54px] px-5 sm:px-7 pr-11 sm:pr-14 text-sm sm:text-base font-bold [--icon-circle:28px] sm:[--icon-circle:34px] [--icon-right:6px] sm:[--icon-right:8px] [--icon-size:14px] sm:[--icon-size:16px]",
    // lg: larger cta ~60px
    lg: "h-[50px] sm:h-[60px] px-6 sm:px-8 pr-13 sm:pr-16 text-base sm:text-lg font-bold [--icon-circle:32px] sm:[--icon-circle:38px] [--icon-right:8px] sm:[--icon-right:10px] [--icon-size:16px] sm:[--icon-size:18px]",
    // full width for pricing cards or full-bleed action rows: compact responsive height and padding to prevent stretching
    full: "w-full h-9 sm:h-[50px] lg:h-[54px] px-3 sm:px-6 pr-8 sm:pr-14 text-xs sm:text-base font-bold justify-center [--icon-circle:22px] sm:[--icon-circle:32px] lg:[--icon-circle:34px] [--icon-right:4px] sm:[--icon-right:7px] lg:[--icon-right:8px] [--icon-size:12px] sm:[--icon-size:15px] lg:[--icon-size:16px]",
    // default (same as md)
    default: "h-11 sm:h-[54px] px-5 sm:px-7 pr-11 sm:pr-14 text-sm sm:text-base font-bold [--icon-circle:28px] sm:[--icon-circle:34px] [--icon-right:6px] sm:[--icon-right:8px] [--icon-size:14px] sm:[--icon-size:16px]",
    // fluid (original vault vw scaling)
    fluid: "h-[4.2vw] px-[3vw] pr-[calc(var(--icon-circle)+var(--icon-right)+2vw)] text-[1.155vw] [--icon-circle:3.1vw] [--icon-right:0.55vw] max-[1025px]:h-[11vw] max-[1025px]:px-[5vw] max-[1025px]:pr-[calc(var(--icon-circle)+var(--icon-right)+4vw)] max-[1025px]:text-[3.15vw] max-[1025px]:[--icon-circle:8vw] max-[1025px]:[--icon-right:1.5vw] max-md:h-[15vw] max-md:px-[7vw] max-md:pr-[calc(var(--icon-circle)+var(--icon-right)+5vw)] max-md:text-[4.41vw] max-md:[--icon-circle:11vw] max-md:[--icon-right:2vw]"
  }[size] || "h-11 sm:h-[54px] px-5 sm:px-7 pr-11 sm:pr-14 text-sm sm:text-base font-bold [--icon-circle:28px] sm:[--icon-circle:34px] [--icon-right:6px] sm:[--icon-right:8px] [--icon-size:14px] sm:[--icon-size:16px]";

  return (
    <a
      href={href}
      {...props}
      data-pressed={isPressed ? "true" : "false"}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      className={`group relative inline-flex ${size === "full" ? "w-full" : "w-fit min-w-fit"} cursor-pointer items-center justify-center overflow-hidden rounded-full border border-(--btn-bg) whitespace-nowrap font-['Space_Grotesk'] leading-none [text-rendering:geometricPrecision] [--circle-inset-y:calc((100%-var(--icon-circle))/2)] ${sizeClasses} ${
        usesUtilityBackground ? "" : "bg-(--btn-bg)"
      } text-(--btn-text) ${className}`}
      style={{
        "--btn-bg": bgColor,
        "--btn-text": textColor,
        "--btn-fill-bg": fillBgColor,
        "--btn-fill-text": fillTextColor,
        "--btn-fill-bg-hover": hoverFillBgColor,
        "--btn-fill-text-hover": hoverFillTextColor,
        "--btn-arrow": arrowColor || fillTextColor,
        "--btn-arrow-hover": hoverArrowColor || hoverFillTextColor,
        visibility: isReady ? "visible" : "hidden",
      } as CSSProperties & Record<string, string | number>}
    >
      <span className="relative z-1 pb-px flex items-center gap-1.5 sm:gap-2">
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{btnText}</span>
      </span>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute z-2 rounded-full bg-(--btn-fill-bg) inset-[var(--circle-inset-y)_var(--icon-right)_var(--circle-inset-y)_calc(100%-var(--icon-right)-var(--icon-circle))] ${
          isReady
            ? "transition-all duration-450 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:bg-(--btn-fill-bg-hover) group-hover:inset-0 group-data-[pressed=true]:bg-(--btn-fill-bg-hover) group-data-[pressed=true]:inset-0"
            : ""
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-2 flex items-center ${size === "full" ? "justify-center" : ""} ${
          size === "fluid" 
            ? "px-[3vw] pr-[calc(var(--icon-circle)+var(--icon-right)+2vw)] max-[1025px]:px-[5vw] max-[1025px]:pr-[calc(var(--icon-circle)+var(--icon-right)+4vw)] max-md:px-[7vw] max-md:pr-[calc(var(--icon-circle)+var(--icon-right)+5vw)]"
            : size === "xs" ? "px-3 pr-8"
            : size === "full" ? "px-3 sm:px-6 pr-8 sm:pr-14"
            : size === "sm" ? "px-4 sm:px-5 pr-9 sm:pr-11"
            : size === "lg" ? "px-6 sm:px-8 pr-13 sm:pr-16"
            : "px-5 sm:px-7 pr-11 sm:pr-14"
        } text-(--btn-fill-text) [clip-path:inset(var(--circle-inset-y)_var(--icon-right)_var(--circle-inset-y)_calc(100%-var(--icon-right)-var(--icon-circle)))] ${
          isReady
            ? "transition-all duration-450 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:text-(--btn-fill-text-hover) group-hover:[clip-path:inset(0_0_0_0)] group-data-[pressed=true]:text-(--btn-fill-text-hover) group-data-[pressed=true]:[clip-path:inset(0_0_0_0)]"
            : ""
        }`}
      >
        <span className="relative z-1 pb-px whitespace-nowrap flex items-center gap-1.5 sm:gap-2">
          {icon && <span className="shrink-0">{icon}</span>}
          <span>{btnText}</span>
        </span>
      </div>

      <span
        className={`pointer-events-none absolute right-[var(--icon-right)] top-1/2 z-3 inline-flex h-[var(--icon-circle)] w-[var(--icon-circle)] shrink-0 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-(--btn-fill-bg) text-(--btn-arrow) ${
          isReady
            ? "transition-colors duration-450 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:bg-(--btn-fill-bg-hover) group-hover:text-(--btn-arrow-hover) group-data-[pressed=true]:bg-(--btn-fill-bg-hover) group-data-[pressed=true]:text-(--btn-arrow-hover)"
            : ""
        }`}
        style={{
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          maskImage: "radial-gradient(white, black)",
        }}
        aria-hidden="true"
      >
          <ArrowRight
            className={`absolute left-1/2 top-1/2 ${
              size === "fluid" ? "size-[1.5vw] max-[1025px]:size-[4vw] max-md:size-[5vw]" : "size-[var(--icon-size)]"
            } translate-x-[-170%] -translate-y-1/2 origin-center scale-0 text-current ${
              isReady
                ? "transition-transform duration-450 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:scale-100 group-data-[pressed=true]:-translate-x-1/2 group-data-[pressed=true]:-translate-y-1/2 group-data-[pressed=true]:scale-100"
                : ""
            }`}
            strokeWidth={2}
          />

          <ArrowRight
            className={`absolute left-1/2 top-1/2 ${
              size === "fluid" ? "size-[1.5vw] max-[1025px]:size-[4vw] max-md:size-[5vw]" : "size-[var(--icon-size)]"
            } -translate-x-1/2 -translate-y-1/2 origin-center text-current ${
              isReady
                ? "transition-transform duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:translate-x-[70%] group-hover:-translate-y-1/2 group-hover:scale-0 group-data-[pressed=true]:translate-x-[70%] group-data-[pressed=true]:-translate-y-1/2 group-data-[pressed=true]:scale-0"
                : ""
            }`}
            strokeWidth={2}
          />
        </span>
    </a>
  );
}

export default ArrowFillButton;
