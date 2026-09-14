'use client';

import { useMemo, useState } from 'react';
import { Arrow, Check, Lock, Info, Phone } from './icons';
import { BUSINESS } from '@/data/business';
import { SERVICES } from '@/data/services';
import { AREAS } from '@/data/areas';

const SIZES = [
  { v: 'Small — under 200 sq ft', h: 'A walk, a stoop, a small pad' },
  { v: 'Medium — 200 to 600 sq ft', h: 'A typical patio or single driveway' },
  { v: 'Large — 600 to 1,200 sq ft', h: 'A wide driveway or a big patio' },
  { v: 'Very large — over 1,200 sq ft', h: 'Multiple surfaces or commercial' },
  { v: "Not sure — come measure it", h: 'Completely fine, this is normal' },
];

const TIMING = [
  'As soon as you can',
  'Within the next month',
  'This season',
  'Next season — just planning',
];

const CONDITION = [
  'Replacing something that exists',
  'Brand new — nothing there now',
  'Repairing or extending what is there',
  'Not sure yet',
];

const STEPS = ['Project', 'Scope', 'Property', 'Contact'];

export function EstimateForm({ preselect }) {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [f, setF] = useState({
    service: preselect || '',
    condition: '',
    size: '',
    timing: '',
    city: '',
    address: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
    company: '', // honeypot
  });

  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const canAdvance = useMemo(() => {
    if (step === 0) return !!f.service;
    if (step === 1) return !!f.size && !!f.condition;
    if (step === 2) return !!f.city;
    return f.name.trim().length > 1 && (f.phone.trim().length > 6 || f.email.includes('@'));
  }, [step, f]);

  const summary = useMemo(() => {
    const svc = SERVICES.find((s) => s.slug === f.service);
    return [
      `Project: ${svc ? svc.name : f.service}`,
      `Existing conditions: ${f.condition}`,
      `Approximate size: ${f.size}`,
      `Timing: ${f.timing || 'Not specified'}`,
      `Town: ${f.city}`,
      f.address && `Address: ${f.address}`,
      '',
      `Name: ${f.name}`,
      f.phone && `Phone: ${f.phone}`,
      f.email && `Email: ${f.email}`,
      '',
      f.notes && `Notes: ${f.notes}`,
    ].filter(Boolean).join('\n');
  }, [f]);

  const mailto = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
    `Estimate request — ${f.city || 'Chicagoland'}`
  )}&body=${encodeURIComponent(summary)}`;

  async function submit(e) {
    e.preventDefault();
    if (f.company) return;                 // bot filled the honeypot
    if (!canAdvance) return;

    // No endpoint configured yet — hand the visitor a working fallback rather
    // than pretending the message was delivered. See README before launch.
    if (!BUSINESS.formEndpoint) {
      window.location.href = mailto;
      setSent('mail');
      return;
    }

    setBusy(true);
    setErr('');
    try {
      const res = await fetch(BUSINESS.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...f, summary, source: 'estimate-form' }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setSent('api');
    } catch (e2) {
      setErr(
        'That did not go through. Please call us instead — the fastest way to get on the schedule is a phone call anyway.'
      );
    } finally {
      setBusy(false);
    }
  }

  if (sent) {
    return (
      <div className="card card--pad-lg" role="status">
        <span className="menu__icon" style={{ width: 46, height: 46, borderRadius: 13, marginBottom: 18 }}>
          <Check s={24} />
        </span>
        <h2 className="h2">
          {sent === 'mail' ? 'Your email is ready to send' : 'Got it — we will be in touch'}
        </h2>
        <p className="lede" style={{ marginTop: 12 }}>
          {sent === 'mail'
            ? 'We opened a pre-filled email with your project details. Hit send and we will get back to you within one business day.'
            : 'We read every one of these ourselves. Expect a call or an email within one business day to set up a time to come measure.'}
        </p>
        <div className="row" style={{ '--gap': '10px', marginTop: 26 }}>
          <a href={BUSINESS.phoneHref} className="btn btn--dark btn--lg">
            <Phone s={17} /> {BUSINESS.phone}
          </a>
          <a href="/gallery" className="btn btn--ghost btn--lg">See our work</a>
        </div>
        <p className="tiny" style={{ marginTop: 22 }}>
          In a hurry, or something is unsafe right now? Call. We answer the phone during working hours.
        </p>
      </div>
    );
  }

  return (
    <form className="card card--pad-lg" onSubmit={submit} noValidate>
      <div className="row" style={{ justifyContent: 'space-between', marginBottom: 10 }}>
        <p className="eyebrow eyebrow--plain">Step {step + 1} of {STEPS.length} · {STEPS[step]}</p>
        <p className="tiny">Takes about 40 seconds</p>
      </div>
      <div className="progress" style={{ marginBottom: 28 }}>
        {STEPS.map((s, i) => <span key={s} className="progress__seg" data-on={i <= step} />)}
      </div>

      {/* honeypot */}
      <div aria-hidden style={{ position: 'absolute', left: '-9999px' }}>
        <label>Company<input tabIndex={-1} autoComplete="off" value={f.company} onChange={set('company')} /></label>
      </div>

      {step === 0 && (
        <div className="stack" style={{ '--gap': '22px' }}>
          <div>
            <h2 className="h3">What are we building?</h2>
            <p className="small" style={{ marginTop: 6 }}>Pick the closest one. We will sort out the details on site.</p>
          </div>
          <div className="chips">
            {SERVICES.map((s) => (
              <label key={s.slug} className="chip">
                <input type="radio" name="service" value={s.slug} checked={f.service === s.slug} onChange={set('service')} />
                <span>{s.name}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="stack" style={{ '--gap': '26px' }}>
          <div className="field">
            <label htmlFor="condition">What is there right now?</label>
            <div className="chips">
              {CONDITION.map((c) => (
                <label key={c} className="chip">
                  <input type="radio" name="condition" value={c} checked={f.condition === c} onChange={set('condition')} />
                  <span>{c}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="field">
            <label>Roughly how big?</label>
            <div className="chips">
              {SIZES.map((s) => (
                <label key={s.v} className="chip" title={s.h}>
                  <input type="radio" name="size" value={s.v} checked={f.size === s.v} onChange={set('size')} />
                  <span>{s.v}</span>
                </label>
              ))}
            </div>
            <p className="hint">A two-car driveway is usually 500 to 700 square feet, if that helps calibrate.</p>
          </div>
          <div className="field">
            <label>When would you like it done?</label>
            <div className="chips">
              {TIMING.map((t) => (
                <label key={t} className="chip">
                  <input type="radio" name="timing" value={t} checked={f.timing === t} onChange={set('timing')} />
                  <span>{t}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="stack" style={{ '--gap': '20px' }}>
          <div className="field">
            <label htmlFor="city">Which town is the property in?</label>
            <select id="city" className="select" value={f.city} onChange={set('city')} required>
              <option value="">Select a town…</option>
              {AREAS.map((a) => <option key={a.slug} value={a.city}>{a.city}, IL</option>)}
              <option value="Other">Somewhere else in Chicagoland</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="address">Street address <span style={{ fontWeight: 400, color: 'hsl(var(--ink-3))' }}>(optional)</span></label>
            <input id="address" className="input" value={f.address} onChange={set('address')}
              placeholder="Helps us look at the lot before we come out" autoComplete="street-address" />
          </div>
          <div className="field">
            <label htmlFor="notes">Anything we should know? <span style={{ fontWeight: 400, color: 'hsl(var(--ink-3))' }}>(optional)</span></label>
            <textarea id="notes" className="textarea" value={f.notes} onChange={set('notes')}
              placeholder="Drainage problems, a cracked section, a deadline, access constraints, a finish you have in mind…" />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="stack" style={{ '--gap': '20px' }}>
          <div>
            <h2 className="h3">How do we reach you?</h2>
            <p className="small" style={{ marginTop: 6 }}>
              One of us calls you back personally. No call centre, no drip sequence.
            </p>
          </div>
          <div className="grid grid-2" style={{ '--gap': '18px' }}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" className="input" value={f.name} onChange={set('name')} autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="tel" className="input" value={f.phone} onChange={set('phone')} autoComplete="tel" placeholder="(630) 555-0142" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" className="input" value={f.email} onChange={set('email')} autoComplete="email" placeholder="you@example.com" />
            <p className="hint">Give us at least one of phone or email so we can get back to you.</p>
          </div>

          <div className="card card--sunken card--flat" style={{ padding: 18 }}>
            <p className="eyebrow eyebrow--plain" style={{ marginBottom: 10 }}>What you are sending</p>
            <pre className="tiny" style={{ whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'var(--mono)', lineHeight: 1.7 }}>
              {summary}
            </pre>
          </div>

          {err && (
            <p className="small" role="alert" style={{ color: 'hsl(var(--clay-deep))', fontWeight: 600 }}>{err}</p>
          )}

          <div className="form-note">
            <Lock s={15} />
            <span>
              We use this to quote your job and nothing else. No lists, no resale, no
              automated marketing. Read the <a href="/privacy" style={{ textDecoration: 'underline' }}>privacy policy</a>.
            </span>
          </div>
        </div>
      )}

      <div className="row" style={{ justifyContent: 'space-between', marginTop: 30, '--gap': '12px' }}>
        {step > 0 ? (
          <button type="button" className="btn btn--ghost" onClick={() => setStep((s) => s - 1)}>Back</button>
        ) : <span />}

        {step < STEPS.length - 1 ? (
          <button type="button" className="btn btn--lg" disabled={!canAdvance}
            style={!canAdvance ? { opacity: .45, cursor: 'not-allowed' } : undefined}
            onClick={() => canAdvance && setStep((s) => s + 1)}>
            Continue <Arrow s={16} />
          </button>
        ) : (
          <button type="submit" className="btn btn--lg" disabled={!canAdvance || busy}
            style={!canAdvance || busy ? { opacity: .45, cursor: 'not-allowed' } : undefined}>
            {busy ? 'Sending…' : 'Send my request'} <Arrow s={16} />
          </button>
        )}
      </div>

      {step === 0 && (
        <p className="form-note" style={{ marginTop: 22 }}>
          <Info s={15} />
          <span>Would rather just talk to someone? Call <a href={BUSINESS.phoneHref} style={{ fontWeight: 700, textDecoration: 'underline' }}>{BUSINESS.phone}</a> — that is the fastest route onto the schedule.</span>
        </p>
      )}
    </form>
  );
}
