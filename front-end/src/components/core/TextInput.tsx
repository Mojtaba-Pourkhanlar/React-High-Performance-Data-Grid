import { forwardRef } from "react";
import type { InputProps } from "./types";
import { inputStyles as s } from "./core.styles";

export const TextInput = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error = false, errorText, className, id, startIcon, ...rest },
    ref,
  ) => {
    const inputId = id || `input-${crypto.randomUUID()}`;

    return (
      <div className={s.wrapper}>
        {label && (
          <label htmlFor={inputId} className={s.label}>
            {label}
          </label>
        )}

        <div className="relative">
          {startIcon && <div className={s.iconWrapper}>{startIcon}</div>}
          <input
            ref={ref}
            id={inputId}
            className={` ${s.base} ${error ? s.error : s.normal} ${className ?? ""} `}
            aria-invalid={error}
            aria-describedby={
              error && errorText ? `${inputId}-error` : undefined
            }
            {...rest}
          />
        </div>

        {error && errorText && (
          <p id={`${inputId}-error`} className={s.errorText}>
            {errorText}
          </p>
        )}
      </div>
    );
  },
);

TextInput.displayName = "TextInput";
