# Dashboard (React + Shadcn)

## Setup
- Install **shadcn sidebar** first.

## File structures
<img width="201" height="449" alt="Image" src="https://github.com/user-attachments/assets/42c849b0-46e2-4776-a115-51de99d24bb9" />

## Layout
- **File:** `react/src/layout/DashboardLayout.tsx` 
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

- **File:** `react/src/components/navbar/Navbar.tsx`
  - Responsive **navigation menu**
  - Built with **GSAP animations** 
  - Contains toggle logic for mobile devices


# 📊 Tables
## Table - 1 (Shadcn)

<img width="1687" height="673" alt="Image" src="https://github.com/user-attachments/assets/1e9b707c-bd93-4905-aca5-1beda600bf3a" />

- **File:** `react/src/components/shared/table1/Table1.tsx`
  - Customizable table
  - Add/remove table borders
  - Modify text styles, colors, and spacing
  - Example: invoices list with status, method, amount, etc.
  - Supports `last:border-b-0` for removing the last row border

- **File:** `react/src/components/ui/table.tsx`
  - Base reusable table
  - Controls **caption position** (`caption-top` or `caption-bottom`)
  - ⚠️ Do **not** directly control borders here if table is used globally


---
