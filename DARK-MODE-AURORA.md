# Why the aurora might not be visible

1. **You might be in light mode**  
   The aurora only shows when the page is in dark mode. Dark mode is set when `localStorage` has `theme` different from `'light'`. If you previously set `theme` to `'light'`, the aurora stays hidden.  
   **Check:** Open DevTools (F12) → Application → Local Storage → look at `theme`. If it is `"light"`, delete it or set it to `"dark"`, then refresh.

2. **`html` might not have the `dark` class**  
   The aurora div is shown with CSS when `<html class="dark">`. If that class is missing, the aurora stays `display: none`.  
   **Check:** In DevTools → Elements, click `<html>`. It should have `class="dark"` when you expect dark mode. If it doesn’t, the script or React didn’t add it (e.g. because of point 1).

3. **Something is drawn on top of the aurora**  
   The aurora has `z-index: 1` and `#root` has `z-index: 2`, so the app is on top. For the aurora to be visible, the app’s background must be transparent. If any wrapper (e.g. `main` or the content div) has an opaque background in dark mode, it will cover the aurora.  
   **Check:** In DevTools → Elements, select the aurora div (`#dark-aurora`). In the Styles panel it should have `display: block` when `html` has `dark`. Then inspect the elements above it (`#root`, `main`, etc.) and make sure they don’t have an opaque background in dark mode.

4. **CSS load order**  
   The aurora is shown by rules in `index.css`, which is loaded with the JS bundle. If something in the bundle (e.g. Tailwind) overrides those rules, the aurora can stay hidden or change appearance.  
   **Check:** In DevTools → Elements → `#dark-aurora` → Styles. See which rules are applied and if any are crossed out (overridden).

The fix below makes the aurora visible using **only HTML and a small inline script** (no dependency on the CSS file), so it should work even if the above go wrong.
