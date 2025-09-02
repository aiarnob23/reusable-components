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


# 🚀 Navigation Menu
## Navbar - 1

<img width="483" height="840" alt="Image" src="https://github.com/user-attachments/assets/a1385edc-0e62-43d4-b7a3-f8024490e53d" />

<img width="1918" height="773" alt="Image" src="https://github.com/user-attachments/assets/53c6a168-a087-4b8a-aa10-5e71e01119b4" />

This file includes a responsive **navigation menu** with **GSAP animations** 

- **`src/components/app-sidebar.tsx`**
