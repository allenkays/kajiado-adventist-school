# Website Content Handover Guide

This guide explains the safest way to let school staff update website content before and after handover.

## 1) Current state (what to know first)

The public website content is currently mostly **hardcoded in frontend files** (for example in page and component `.tsx` files). This means edits require a developer, Git commit, and redeploy.

## 2) Practical approach for handover

Use a two-phase approach:

### Phase A — Immediate (this week): controlled content workflow

Use this when you need to hand over quickly.

1. **Nominate 1–2 content owners** (e.g., office admin + communications lead).
2. **Create a simple content request sheet** with fields:
   - Page
   - Existing text
   - New text
   - Effective date
   - Approver
3. **Apply edits in code** and redeploy in scheduled windows (e.g., once weekly).
4. **Keep a content changelog** (`date`, `page`, `what changed`, `who approved`).

This is low-risk and fast, but still developer-assisted.

### Phase B — Sustainable (recommended): make content editable in Django Admin

Your project already has a Django backend, so the most maintainable approach is to manage website copy there and fetch it from the frontend.

#### Suggested implementation

1. Create a new app, e.g. `apps/site_content`.
2. Add a model like:
   - `key` (unique slug, e.g. `home.hero.title`)
   - `value` (text / JSON)
   - `description` (editor guidance)
   - `is_published` (boolean)
   - timestamps
3. Register the model in Django Admin with search and filters.
4. Add a read-only public API endpoint (e.g. `/api/content/`).
5. Replace hardcoded frontend strings with API-driven values plus safe fallbacks.
6. Add role-based permissions so only authorized staff can edit content.
7. Add backup/export (JSON dump) before major changes.

#### Optional upgrade

If you need rich pages, images, and workflows, consider introducing a CMS (e.g., Wagtail or a headless CMS) after stabilization.

## 3) Content governance to include in handover

Document the following:

- **Who can edit** (names/roles)
- **Who approves** changes
- **Turnaround SLA** (e.g., 2 business days)
- **Publishing schedule** (immediate vs batched)
- **Rollback process** (how to restore previous copy)

## 4) Minimum operating checklist

- [ ] Production admin account created for content owner
- [ ] Strong passwords + MFA policy
- [ ] Staging environment for previewing copy updates
- [ ] Weekly database backup verified
- [ ] Content style guide (tone, capitalization, scripture/faith references, contact format)

## 5) Recommendation

For your handover timeline: start with **Phase A immediately**, and schedule **Phase B in the next sprint** so staff can self-manage updates through Django Admin without touching code.


## 6) How viable is a CMS option immediately?

Short answer: **partially viable immediately**, but a **full CMS rollout before handover is high risk** unless scope is tightly limited.

### Viability assessment

- **Viable now (2–5 working days):** lightweight Django-admin content model (`key/value`) for key homepage/about/contact copy only.
- **Possible with caution (1–2 weeks):** broader editable sections with basic image support and preview workflow.
- **Not recommended immediately (2–6+ weeks):** full CMS migration (page builder, rich workflows, media library governance, multi-role approvals) right before handover.

### Why this is the realistic answer in this repo

- Backend already has Django + Django Admin + DRF, so adding a `site_content` app is straightforward.
- Frontend currently renders copy directly in `.tsx` files, so each moved section still needs frontend wiring to API/fallback values.
- Production readiness items (permissions, preview, backup, rollback, editor training) can consume more time than coding.

### If you must do "CMS now", use this fast-track scope

1. Limit to **top 10–20 text fields** that change most often (hero title, subtitle, contact details, admissions notices).
2. Keep page structure in code; make only text values editable.
3. Use one `SiteContent` table + Django Admin.
4. Expose one read-only endpoint for published keys.
5. Add audit trail fields (`updated_by`, `updated_at`) and weekly JSON export.

This gives staff practical control quickly while avoiding a fragile last-minute platform change.

### Recommended decision for handover

- If handover is **days away**: use Phase A only.
- If handover is **2+ weeks away**: implement the fast-track scope above.
- Plan full CMS capabilities only after stabilization and editor onboarding.
