import { site } from './site';

// Open a real email draft instead of claiming an unsent form was delivered.
export function openInquiryEmail(form, subject) {
  const rows = [];
  for (const element of Array.from(form.elements)) {
    if (!element.name || element.disabled || ['submit', 'button'].includes(element.type)) continue;
    if (['checkbox', 'radio'].includes(element.type) && !element.checked) continue;
    rows.push(`${element.name}: ${element.value}`);
  }
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(rows.join('\n'))}`;
}
