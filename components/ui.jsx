'use client';

import { useEffect, useRef, useState, useId } from 'react';
import { Arrow, Check, Star, Chevron } from './icons';

/* --- Section shell ------------------------------------------------------- */
export function Section({ children, dark, tight, inset, id, className = '', ...rest }) {
  const cls = [
    tight ? 'bay-sm' : 'bay',
    dark ? 'slab' : '',
    dark && inset ? 'slab--inset' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <section id={id} className={cls} {...rest}>
      {dark && <span className="joints" aria-hidden />}
      <div className="wrap">{children}</div>
    </section>
  );
}

/* --- Section heading ----------------------------------------------------- */
export function Heading({ eyebrow, title, lede, center, as: As = 'h2', size = 'h2', children }) {
  return (
    <div className={center ? 'center' : ''} style={{ maxWidth: center ? '760px' : '', marginInline: center ? 'auto' : '' }}>
      {eyebrow && <p className="eyebrow" style={{ marginBottom: 16 }}>{eyebrow}</p>}
      <As className={size}>{title}</As>
      {lede && <p className="lede measure" style={{ marginTop: 16 }}>{lede}</p>}
      {children}
    </div>
  );
}

/* --- Reveal on scroll ---------------------------------------------------- */
export function Reveal({ children, delay = 0, as: As = 'div', className = '', ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setShown(true); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <As
      ref={ref}
      className={`reveal ${className}`}
      data-shown={shown || undefined}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      {...rest}
    >
      {children}
    </As>
  );
}

/* --- Accordion ----------------------------------------------------------- */
export function Accordion({ items, defaultOpen = -1 }) {
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();
  return (
    <div className="acc">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className="acc__item" key={i} data-open={isOpen || undefined}>
            <h3 style={{ margin: 0 }}>
              <button
                className="acc__btn"
                aria-expanded={isOpen}
                aria-controls={`${uid}-p-${i}`}
                id={`${uid}-b-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{it.q}</span>
                <span className="acc__sign" aria-hidden />
              </button>
            </h3>
            <div className="acc__panel" id={`${uid}-p-${i}`} role="region" aria-labelledby={`${uid}-b-${i}`}>
              <div className="acc__inner"><div>{it.a}</div></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* --- Stars --------------------------------------------------------------- */
export function Stars({ n = 5, s = 15 }) {
  return (
    <span className="stars" role="img" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => <Star key={i} s={s} filled={i < n} />)}
    </span>
  );
}

/* --- Checklist ----------------------------------------------------------- */
export function Checks({ items, cols }) {
  return (
    <ul className={`checks ${cols ? 'checks--cols' : ''}`}>
      {items.map((t, i) => (
        <li key={i}><Check s={17} /><span>{t}</span></li>
      ))}
    </ul>
  );
}

/* --- Spec table ---------------------------------------------------------- */
export function SpecTable({ rows, caption, ourLabel = 'How we build it', theirLabel = 'Commonly seen' }) {
  return (
    <div className="table-scroll">
      <table className="spec">
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            <th scope="col">Detail</th>
            <th scope="col">{theirLabel}</th>
            <th scope="col">{ourLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, theirs, ours], i) => (
            <tr key={i}>
              <th scope="row">{label}</th>
              <td>{theirs}</td>
              <td className="spec__ours">{ours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* --- Arrow link ---------------------------------------------------------- */
export function ArrowLink({ href, children, as: As = 'a', ...rest }) {
  return (
    <As href={href} className="link-arrow" {...rest}>
      <span>{children}</span><Arrow s={15} />
    </As>
  );
}

export { Chevron };
