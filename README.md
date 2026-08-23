# SHIFAA AI

**Intelligent Healthcare. One Connected Patient Journey.**

SHIFAA AI is a healthcare platform that connects patients, doctors, medical records, medications, emergency context, notifications, and AI-assisted guidance in one trusted journey.

## MVP Product

The MVP has two different experiences over the same healthcare data:

- **Patient mobile app:** simple, reassuring, action-oriented, with fast emergency access.
- **Doctor web platform:** desktop-first, clinically dense, searchable, and optimized for rapid review.

AI is an assistive layer. It summarizes, explains, organizes, and highlights signals. It never makes a definitive diagnosis or replaces the clinician.

### Patient Modules

Splash, onboarding, authentication, three-step health setup, home, medical records and detail, medications and detail, AI welcome/chat/health assessment, emergency hub and medical ID, first aid and choking instructions, notifications and detail, profile, and focused settings.

### Doctor Modules

Authentication, clinical dashboard, searchable patient list, clinical patient profile, AI clinical summary, prioritized alerts, and doctor settings.

### Future Roadmap, Not MVP

Telemedicine, video calls, doctor booking, hospital administration, advanced RBAC, caregiver portal, wearables, IoT, predictive deterioration, emergency command center, advanced imaging, post-operative monitoring, and enterprise analytics must not appear in MVP navigation.

## Run Locally

```bash
npm install
npm run dev
npm run lint
npm run build
```

Open `http://localhost:3000`. Localized entry points are `/en` and `/ar`; `/` is redirected by the Next.js 16 `proxy.ts` to the default locale.

## Technical Foundation

- Next.js 16 App Router, React 19, and TypeScript
- Tailwind CSS 4
- Shadcn UI, Base UI preset, Nova styling, and Lucide icons
- `next-intl` for English and Arabic
- Zustand, TanStack Query, Framer Motion, and React Toastify

### Shadcn UI

Shadcn is configured in `components.json` with generated primitives in `components/ui` and the class helper in `lib/utils.ts`. Add primitives with the Shadcn CLI and compose product components in the existing domain folders. Prefer accessible primitives and Lucide icons over custom controls.

### Internationalization

The i18n foundation is in `i18n/routing.ts`, `i18n/request.ts`, `proxy.ts`, and `messages/en.json` / `messages/ar.json`.

- Locales: `en`, `ar`; default: `en`; URL prefix: always present
- Arabic automatically uses `dir="rtl"`; English uses `dir="ltr"`
- Put every user-facing string in both message files
- Use `getTranslations` on the server and `useTranslations` in client components
- Keep locale switching on the same route and review Arabic medical terminology with a qualified translator

## Master UI/UX Prompt

Copy this section into Google Stitch, Figma AI, or another professional UI generation tool.

### Brief

Act as a principal product designer, healthcare UX strategist, clinical workflow consultant, and design systems lead. Design the complete **SHIFAA AI MVP** as a premium real-world healthcare SaaS product. Generate high-fidelity screens, realistic content, component variants, responsive behavior, interaction states, and a clickable prototype. Do not create a generic AI dashboard, hospital ERP, chatbot mockup, or student project.

Keep the patient mobile app and doctor desktop platform connected in data but distinct in density, navigation, copy, and priorities. Design the actual product experience first. The product must communicate trust, clarity, safety, intelligence, human care, and clinical precision.

Required AI language: **AI-assisted information is preliminary guidance, not a diagnosis. A qualified healthcare professional remains the final decision-maker.** Never use fear-based copy, AI hype, or definitive diagnostic claims.

### Brand and Design System

Use a calm, refined medical visual language with a light clinical foundation, confident typography, restrained depth, and strong hierarchy. Avoid purple defaults, dark-mode bias, excessive gradients, repetitive cards, meaningless statistics, decorative robot effects, and heavy shadows. Use full-width workspaces; reserve cards for records, alerts, medication items, and framed tools.

```text
brand.primary       #003366  Deep medical blue
brand.secondary     #0D9488  Health teal
state.critical      #DC2626  Crimson red
state.warning       #F59E0B  Amber
state.success       #16A34A  Emerald
canvas              #F1F5F9  Clinical background
surface             #FFFFFF
ink                 #0F172A
muted               #64748B
border              #CBD5E1
focus               #0D9488
```

Use a readable sans-serif with excellent Latin and Arabic coverage. Suggested type scale: 12, 14, 16, 18, 20, 24, 30, 40, 56px. Use a 4px base spacing unit, 8px common increments, and card/control radius no larger than 8px. Mobile side padding is 16px. Desktop uses a 12-column grid, 24px gutters, and a workspace max width around 1440px. Minimum touch target is 44px.

### Components and Navigation

Create accessible variants for buttons, icon buttons with tooltips, inputs, selects, segmented controls, tabs, breadcrumbs, badges, avatars, alerts, notifications, tables, timelines, medication rows, record previews, bottom sheets, dialogs, skeletons, toasts, empty states, errors, confirmations, and permission states. Risk always combines color, icon, and text. AI content always shows its source and an `AI Assisted` or `AI Generated` label.

Patient navigation is mobile-first: compact top bar with profile and notifications, bottom navigation for Home, Records, Medications, Profile, and prominent contextual actions for AI and Emergency. Doctor navigation is desktop-first: sidebar for Dashboard, Patients, Alerts, Settings; top bar for global search, notifications, language, and doctor identity.

### Patient Screens

For every screen, specify purpose, user goal, header, navigation, layout, content blocks, hierarchy, primary CTA, secondary CTA, interactions, loading, empty, error, success, disabled, validation, permission, and responsive behavior.

1. **Splash and onboarding:** brand arrival, three value propositions, progress, skip/continue, language switcher, and privacy reassurance.
2. **Login, sign up, forgot password:** trustworthy authentication, validation, password visibility, recovery confirmation, terms/privacy consent, and clear errors.
3. **Health setup:** progressive steps for personal information, health information, and conditions/medications. Include progress, save/continue, back, safe skip, validation, and connection recovery.
4. **Home:** answer “What do I need to know about my health today?” with greeting, one prioritized overview, next medication action, recent record, one AI insight, emergency shortcut, notifications, and restrained quick actions. Never create a wall of cards.
5. **Medical records overview:** search, category filters, chronological groups, previews, read-only/upload permission state, skeleton loading, and no-record empty state.
6. **Medical record detail:** title, date, provider, category, important findings, attachments, notes, source label, and permitted document actions.
7. **My medications:** active list, schedule, next dose, taken/missed state, calm adherence feedback, and no-medications empty state.
8. **Medication detail:** name, dosage, frequency, duration, instructions, prescribing doctor, warnings, schedule, and success feedback.
9. **AI welcome and chat:** calm supportive identity, suggested health-context questions, streaming state, unavailable/retry state, history, and persistent disclaimer. Never impersonate a doctor.
10. **AI health assessment:** collect symptoms, duration, severity, conditions, medications, and context progressively. Show an analysis state without fake certainty. Results are Low, Moderate, or High concern and include reasoning, symptoms, suggested next step, and when to seek care. Label it `AI Preliminary Assessment`, never `AI diagnosis`.
11. **Emergency hub and Medical ID:** prioritize name, blood type, severe allergies, conditions, medications, emergency contact, instructions, and genuinely critical actions. Keep it calm, fast, and safe; use red only for immediate actions.
12. **First Aid and choking instructions:** large type, numbered sequential steps, simple icons, emergency warning, progress, and one-handed clarity.
13. **Notifications and detail:** Critical, Important, Reminder, Information categories, read/unread states, filters, useful deep links, and a no-notifications empty state.
14. **Profile and settings:** personal information, health summary, photo, emergency contact, account, notifications, privacy, security, language, and logout. Do not add RBAC.

### Doctor Screens

Design desktop-first at 1366px, 1440px, and 1600px, with usable laptop/tablet behavior and keyboard-friendly tables.

1. **Login, forgot password, optional account setup:** clinical professionalism, organization identity, secure recovery, and accessible errors.
2. **Clinical dashboard:** answer “What requires my attention today?” Make critical alerts dominant. Include total patients, active patients, high-risk patients, pending AI reviews, recent alerts, patient overview, AI summary tasks, and recent activity. Metrics must not look equally important.
3. **Patient list:** scalable table with search, patient ID search, risk/status filters, sorting, pagination or virtualization, empty state, and quick profile action.
4. **Clinical patient profile:** identity, medical ID, age, gender, emergency contact, allergies, chronic conditions, medications, recent records, available vitals, and recent activity. Allergies and critical conditions must be impossible to miss.
5. **AI clinical summary:** overview, history, medications, records, abnormal findings, changes, potential concerns, suggested clinical review, `AI Generated` labels, and “How was this generated?”. Provide clinician acknowledgement without implying automated diagnosis.
6. **Alerts:** Critical, High, Moderate, Information hierarchy. Clearly separate “AI detected signal” from “Doctor confirmed clinical decision”. Include source, time, patient, rationale, status, acknowledge, and dismiss.
7. **Doctor settings:** profile, account, notifications, security, preferences, language, and logout. Keep enterprise administration out.

### Prototype Flows

- Registration: Splash -> Onboarding -> Sign Up -> Personal Information -> Health Information -> Conditions & Medications -> Home
- Record: Home -> Medical Records -> Record -> Record Detail
- Medication: Home -> My Medications -> Medication Detail
- AI: Home -> AI Assistant -> Welcome -> Chat -> Health Assessment -> Preliminary Result
- Emergency: Home -> Emergency Hub -> Medical ID, or Emergency Hub -> First Aid -> Choking Instructions
- Notifications: Home -> Notifications -> Notification Detail
- Doctor review: Doctor Login -> Dashboard -> Patient List -> Patient Profile -> AI Clinical Summary -> Alerts

### States, Safety, and Accessibility

Design loading skeletons, first-use empties, no-data states, connection errors with retry, validation, disabled controls, success confirmations, stale-data indicators, permission denial, unavailable AI, unavailable emergency information, successful record upload, and successful medication action.

Follow WCAG principles: semantic headings, strong contrast, keyboard access, visible focus, screen-reader labels, logical tab order, reduced-motion support, and no color-only meaning. Critical data must remain readable at a glance. Use calm language such as “Immediate medical attention may be appropriate” rather than frightening claims.

### Final Quality Bar

The result must look like a real healthcare startup product suitable for doctors, hospitals, investors, universities, and patients. Vary page composition according to task while preserving tokens, components, language, trust model, and clinical responsibility. Stay strictly within the MVP.

## Decisions Needed Before Production

- Is patient record upload in MVP or read-only?
- What are the clinical sources and refresh cadence for vitals, alerts, and AI summaries?
- Is doctor setup invitation-only?
- Should notification details deep-link into records or medications?
- What consent, privacy, audit, retention, and regulatory controls are required?
- Validate Arabic medical terminology and RTL behavior with healthcare users.

## Safety

This is a prototype foundation. Do not use it for real clinical decisions until authentication, authorization, auditability, encryption, consent, data retention, regulatory compliance, and clinical validation have been implemented and reviewed by qualified professionals.
