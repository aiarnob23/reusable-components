# Dashboard (React + Shadcn)

## Setup
- Install **shadcn sidebar** first.

## File structures
<img width="201" height="449" alt="Image" src="https://github.com/user-attachments/assets/42c849b0-46e2-4776-a115-51de99d24bb9" />

## Layout
- **File:** `src/layout/DashboardLayout.tsx`
  - Sidebar trigger button
  - Separator
  - Header (optional)
  - Outlet styles (margin, padding, etc.)

## Pages
- **File:** `src/pages/dashboard/overview`
  - Contains outlet components for the dashboard

## Components
- **`src/components/nav-main.tsx`**
  - Customize hover effects and design here

- **`src/components/app-sidebar.tsx`**
  - Update or modify sidebar logic here

- **Rename**
  - `team-switcher.tsx` ➝ `brand-logo.tsx`
  - `nav-user.tsx` ➝ `side-footer-items.tsx`

- **Remove**
  - `nav-projects.tsx` (you may not needed)
