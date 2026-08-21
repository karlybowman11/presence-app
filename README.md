# PRESENCE

AI photo intelligence for choosing, comparing, ranking, and improving profile photos.

## Product

PRESENCE analyzes the visual signals people notice first: expression, eye contact, lighting, framing, confidence, approachability, and overall impact.

Core product areas:
- Analyze — single-photo score and feedback
- Rank — order a set of photos by first-impression strength
- Compare — free unlimited A/B comparison with a winner and clear reasons
- Profile Makeover — full-profile audit and Photo Playbook
- Public Share — opt-in share cards; private by default
- Account, billing, lifecycle email, legal, system states, and admin analytics

## Canonical route map

### Public/product
- `/`
- `/analyze`
- `/rank`
- `/compare`
- `/makeover`
- `/pricing`

### Sharing
- `/s/[shareId]`

### Authentication/account
- `/signin`
- `/onboarding`
- `/email/confirm`
- `/account`
- `/account/settings`

### Billing
- `/checkout/success`
- `/billing`
- `/billing/history`

### Legal/system
- `/privacy`
- `/terms`
- branded 404
- processing, upload, analysis, usage-limit, and payment error states

### Internal
- `/admin`

## Product rules

- Full overall score is shown free.
- Seven analysis lenses: Camera Connection, Image Quality, Pose, Composition, Expression, Background, Face Visibility.
- Personalized fixes are monetized.
- A/B Compare is unlimited and free.
- Sharing is private by default; public sharing is opt-in.
- Public share pages expose the pick and three reasons, not private analysis details.
- Profile Makeover: $9.99 one-time purchase.
- Photos are deleted within 24 hours under the standard product flow.
- User photos are not used for model training.
- Privacy principle: “Your face isn't our product.”

## Required production surfaces

The production app must include the full customer journey, not only the main navigation: landing, analyze/result, ranking, compare/share, public share, makeover, pricing, sign-in/onboarding, email confirmation, email capture/lifecycle, account settings, checkout success, billing history, loading/error states, privacy, terms, 404, and admin analytics.

## Repository status

This repository is the canonical home for PRESENCE going forward. Source, configuration, documentation, migrations, deployment configuration, and production-hardening changes should be kept here.
